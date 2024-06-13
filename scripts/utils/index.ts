import { HTTPClient } from "../../src/HttpClient";
import { PhoneLinkCollection, Shop } from "../../typechain-types";

import { BigNumber, Wallet } from "ethers";
import * as hre from "hardhat";

import URI from "urijs";
import fs from "fs";
import { ContractUtils } from "../../src/ContractUtils";

export interface IUserInfo {
    phone: string;
    wallet: Wallet;
}

export interface IShopInfo {
    shopId: string;
    wallet: Wallet;
}

export interface IChainInfo {
    url: string;
    network: {
        name: string;
        chainId: number;
        ensAddress: string;
        transferFee: BigNumber;
        bridgeFee: BigNumber;
    };
    contract: {
        token: string;
        chainBridge: string;
        loyaltyBridge: string;
    };
}

export interface IPaymentDetailData {
    paymentId: string;
    purchaseId: string;
    amount: BigNumber;
    currency: string;
    shopId: string;
    account: string;
    paidPoint: BigNumber;
    paidValue: BigNumber;
    feePoint: BigNumber;
    feeValue: BigNumber;
    totalPoint: BigNumber;
    totalValue: BigNumber;
    paymentStatus: number;
}

export class Helper {
    static RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    static LINK_ENDPOINT = process.env.LINK_ENDPOINT || "";
    public static loadUserInfo(): IUserInfo {
        const data: {
            phone: string;
            privateKey: string;
        } = JSON.parse(fs.readFileSync("./data/user_info.json", "utf8"));
        return {
            phone: data.phone,
            wallet: new Wallet(data.privateKey),
        };
    }

    public static loadShopInfo(): IShopInfo {
        const data: {
            shopId: string;
            privateKey: string;
        } = JSON.parse(fs.readFileSync("./data/shop_info.json", "utf8"));
        return {
            shopId: data.shopId,
            wallet: new Wallet(data.privateKey),
        };
    }

    public static getPaymentId(): string {
        const data = JSON.parse(fs.readFileSync("./data/storage.json", "utf-8"));
        if (data.paymentId !== undefined) return data.paymentId;
        else throw new Error("이전의 paymentId 를 찾을 수 없습니다.");
    }

    public static setPaymentId(paymentId: string) {
        const data = {
            paymentId,
        };
        fs.writeFileSync("./data/storage.json", JSON.stringify(data), "utf-8");
    }

    public static loadTemporaryAccount(): string {
        const data = JSON.parse(fs.readFileSync("./data/temporary_account.json", "utf-8"));
        if (data.temporaryAccount !== undefined) return data.temporaryAccount;
        else throw new Error("이전의 temporary_account 를 찾을 수 없습니다.");
    }

    public static saveTemporaryAccount(temporaryAccount: string) {
        const data = {
            temporaryAccount,
        };
        fs.writeFileSync("./data/temporary_account.json", JSON.stringify(data), "utf-8");
    }

    public static async getChainInfoOfSideChain() {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT).directory("/v1/chain/side/").filename("info").toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return {
            url: res.data.url,
            network: {
                name: res.data.network.name,
                chainId: res.data.network.chainId,
                ensAddress: res.data.network.ensAddress,
                transferFee: BigNumber.from(res.data.network.transferFee),
                bridgeFee: BigNumber.from(res.data.network.bridgeFee),
            },
            contract: {
                token: res.data.contract.token,
                chainBridge: res.data.contract.chainBridge,
                loyaltyBridge: res.data.contract.loyaltyBridge,
            },
        };
    }

    public static async getNonceOfLedger(account: string): Promise<BigNumber> {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT).directory(`/v1/ledger/nonce/${account}`).toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return BigNumber.from(res.data.nonce);
    }

    public static async getPaymentDetail(paymentId: string): Promise<IPaymentDetailData> {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT)
            .directory(`/v1/payment/item`)
            .addQuery("paymentId", paymentId)
            .toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }

        const res = response.data;
        let detail: IPaymentDetailData;
        try {
            detail = {
                paymentId: res.data.paymentId,
                purchaseId: res.data.purchaseId,
                amount: BigNumber.from(res.data.amount),
                currency: res.data.currency,
                shopId: res.data.shopId,
                account: res.data.account,
                paidPoint: BigNumber.from(res.data.paidPoint),
                paidValue: BigNumber.from(res.data.paidValue),
                feePoint: BigNumber.from(res.data.feePoint),
                feeValue: BigNumber.from(res.data.feeValue),
                totalPoint: BigNumber.from(res.data.totalPoint),
                totalValue: BigNumber.from(res.data.totalValue),
                paymentStatus: res.data.paymentStatus,
            };
        } catch (_) {
            throw new Error("Error parsing receiving data");
        }

        return detail;
    }

    public static async getShopContract(): Promise<Shop> {
        const factory = await hre.ethers.getContractFactory("Shop");
        return factory.attach(process.env.SHOP_CONTRACT_ADDRESS || "") as Shop;
    }

    public static async getPhoneLinkContract(): Promise<PhoneLinkCollection> {
        const factory = await hre.ethers.getContractFactory("PhoneLinkCollection");
        return factory.attach(process.env.PHONE_LINKER_CONTRACT_ADDRESS || "") as PhoneLinkCollection;
    }

    public static async register(wallet: Wallet, phone: string): Promise<string> {
        const chainInfo = await Helper.getChainInfoOfSideChain();
        const nonce = await Helper.getNonceOfPhoneLink(wallet.address);
        const phoneHash = ContractUtils.getPhoneHash(phone);
        const msg = ContractUtils.getRequestMessage(phoneHash, wallet.address, nonce, chainInfo.network.chainId);
        const signature = await ContractUtils.signMessage(wallet, msg);
        const client = new HTTPClient();
        const param = { phone, address: wallet.address, signature };
        const url = URI(Helper.LINK_ENDPOINT).directory(`/request`).toString();
        const response = await client.post(url, param);
        if (response.data.code !== 200) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return res.data.requestId;
    }

    public static async submit(requestId: string, code: string): Promise<void> {
        const client = new HTTPClient();
        const param = { requestId, code };
        const url = URI(Helper.LINK_ENDPOINT).directory(`/submit`).toString();
        const response = await client.post(url, param);
        if (response.data.code !== 200) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return res.data.requestId;
    }

    public static async getNonceOfPhoneLink(account: string): Promise<BigNumber> {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT).directory(`/v1/link/nonce/${account}`).toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return BigNumber.from(res.data.nonce);
    }

    public static async phoneToAccount(phone: string): Promise<string> {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT).directory(`/v1/link/to_account/${phone}`).toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return res.data.account;
    }

    public static async accountToPhone(account: string): Promise<string> {
        const client = new HTTPClient();
        const url = URI(Helper.RELAY_ENDPOINT).directory(`/v1/link/to_phone/${account}`).toString();
        const response = await client.get(url);
        if (response.data.code !== 0) {
            throw new Error(response.data.error.message);
        }
        const res = response.data;
        return res.data.phone;
    }
}

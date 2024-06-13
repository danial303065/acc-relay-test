import { HTTPClient } from "../../../src/HttpClient";
import { Helper } from "../../utils";
import { ContractUtils } from "../../../src/ContractUtils";
import URI from "urijs";
import fs from "fs";
import { IShopData } from "../../../src";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();
    const shopInfo = Helper.loadShopInfo();

    const client = new HTTPClient({});
    const paymentId = Helper.getPaymentId();
    const paymentDetail = await Helper.getPaymentDetail(paymentId);

    console.log("결제취소를 승인합니다.");
    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo}`);
    const nonce = await Helper.getNonceOfLedger(userInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const signature = await ContractUtils.signLoyaltyCancelPayment(
        shopInfo.wallet,
        paymentId,
        paymentDetail.purchaseId,
        nonce,
        chainInfo.network.chainId
    );
    const param = {
        paymentId,
        approval: true,
        signature,
    };
    const url = URI(RELAY_ENDPOINT).directory("/v1/payment/cancel/").filename("approval").toString();
    const response = await client.post(url, param);
    if (response.data.code !== 0) {
        console.error(response.data.error.message);
        process.exit(response.data.code);
    }

    console.log(response.data.data);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

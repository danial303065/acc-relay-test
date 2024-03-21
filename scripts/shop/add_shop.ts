import { IUserData } from "../../src";
import { ContractUtils } from "../../src/ContractUtils";
import { Shop } from "../../typechain-types";
import { HTTPClient } from "../../src/HttpClient";
import { Wallet } from "@ethersproject/wallet";

import * as hre from "hardhat";
const URI = require("urijs");
import * as fs from "fs";

async function getShopContract(): Promise<Shop> {
    const shopFactory = await hre.ethers.getContractFactory("Shop");
    return shopFactory.attach(process.env.SHOP_CONTRACT_ADDRESS || "");
}

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userData: IUserData[] = [];

    console.log("사용자의 데이터를 로딩합니다.");
    console.log("사용자의 데이터중 지갑을 상점주의 테스트 지갑으로 사용합니다.");
    userData.push(...(JSON.parse(fs.readFileSync("./data/users.json", "utf8")) as IUserData[]));
    const userIndex = 60;

    const shopWallet = new Wallet(userData[userIndex].privateKey);

    console.log("상점 데이타를 생성합니다.");
    const shopId = ContractUtils.getShopId(shopWallet.address, 0);
    const contract = await getShopContract();
    const account: string = shopWallet.address;
    const nonce = await contract.nonceOf(shopWallet.address);
    const message = ContractUtils.getShopAccountMessage(shopId, shopWallet.address, nonce);
    const signature = await ContractUtils.signMessage(shopWallet, message);
    const currency = "krw";
    const name = "Shop New 10";
    const param = {
        shopId,
        name,
        currency,
        account,
        signature,
    };

    console.log("상점 추가를 요청합니다.");
    const client = new HTTPClient();
    const url = URI(RELAY_ENDPOINT).directory("/v1/shop/add").toString();
    const response = await client.post(url, param);

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(response.data.data);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

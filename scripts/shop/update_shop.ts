import { IShopData, IUserData } from "../../src";
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
    // const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT;
    // const userData: IUserData[] = [];
    // const shopData: IShopData[] = [];
    //
    // console.log("상점데이타를 로딩합니다.");
    // shopData.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));
    //
    // const shopIndex = 0;
    //
    // console.log("상점 데이타를 생성합니다.");
    // const shopId = shopData[shopIndex].shopId;
    // const account: string = shopData[shopIndex].address;
    // const nonce = await contract.nonceOf(shopWallet.address);
    // const signature = await ContractUtils.signShop(shopWallet, shopId, nonce);
    // const currency = "krw";
    // const name = "Shop New 10";
    // const param = {
    //     shopId,
    //     name,
    //     currency,
    //     account,
    //     signature,
    // };
    //
    // console.log("상점 추가를 요청합니다.");
    // const client = new HTTPClient();
    // const url = URI(RELAY_ENDPOINT).directory("/v1/shop/update/create").toString();
    // const response = await client.post(url, param);
    //
    // console.log("처리결과입니다.");
    // console.log(response.data.code);
    // console.log(response.data.data);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

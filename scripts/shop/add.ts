import { ContractUtils } from "../../src/ContractUtils";
import { HTTPClient } from "../../src/HttpClient";

import URI from "urijs";
import { Helper } from "../utils";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const shopInfo = Helper.loadShopInfo();

    console.log("상점 데이타를 생성합니다.");
    const account: string = shopInfo.wallet.address;
    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo.network.chainId}`);
    const nonce = await Helper.getNonceOfShop(shopInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const message = ContractUtils.getShopAccountMessage(
        shopInfo.shopId,
        shopInfo.wallet.address,
        nonce,
        chainInfo.network.chainId
    );
    const signature = await ContractUtils.signMessage(shopInfo.wallet, message);
    const currency = "php";
    const name = "Shop New 10";
    const param = {
        shopId: shopInfo.shopId,
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
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

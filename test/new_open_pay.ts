import { Amount, BOACoin } from "../src/Amount";
import { HTTPClient } from "../src/HttpClient";
import { IShopData } from "../src";
import { setPaymentId } from "../src/helper";

import { BigNumber } from "ethers";
import * as fs from "fs";

const URI = require("urijs");

async function main() {
    const RELAY_ENDPOINT = "http://localhost:7070";
    // const RELAY_ENDPOINT = "http://relay.devnet.bosagora.org:7070";
    const ACCESS_KEY = "0x2c93e943c0d7f6f1a42f53e116c52c40fe5c1b428506dc04b290f2a77580a342";
    const account = "0x74586E5B9BB8AA2c243acD2fBcA5481b266D7ACf";
    const shopData: IShopData[] = [];

    console.log("상점데이타를 로딩합니다.");
    shopData.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));

    const shopIndex = Math.floor(Math.random() * shopData.length);
    const client = new HTTPClient();
    const purchase = {
        purchaseId: "P000001",
        amount: Amount.make(10, 18).value,
        currency: "krw",
        shopIndex,
        account,
    };

    console.log("잔고를 조회합니다.");
    const url1 = URI(RELAY_ENDPOINT).directory("/v1/payment/user/balance").addQuery("account", account).toString();
    const response1 = await client.get(url1);
    if (response1.data.code !== 0) {
        console.error(response1.data.error.message);
        process.exit(response1.data.code);
    }
    const loyaltyType: number = response1.data.data.loyaltyType;
    const balance: BOACoin = new BOACoin(BigNumber.from(response1.data.data.balance));
    console.log(`loyaltyType : ${loyaltyType}`);
    console.log(`balance : ${balance.toDisplayString(true, 2)}`);

    if (balance.value.lt(BigNumber.from(10))) {
        console.error("잔고가 부족하여 테스트를 진행할 수 없습니다.");
        process.exit(1);
    }

    let paymentId: string;
    console.log("결제를 오픈합니다.");
    const url2 = URI(RELAY_ENDPOINT).directory("/v1/payment/new").filename("open").toString();

    const params = {
        accessKey: ACCESS_KEY,
        purchaseId: purchase.purchaseId,
        amount: purchase.amount.toString(),
        currency: "krw",
        shopId: shopData[purchase.shopIndex].shopId,
        account: purchase.account,
    };
    const response2 = await client.post(url2, params);
    if (response2.data.code !== 0) {
        console.error(response2.data.error.message);
        process.exit(response2.data.code);
    }

    paymentId = response2.data.data.paymentId;
    setPaymentId(paymentId);
    console.log(`account: ${account}`);
    console.log(`amount: ${new BOACoin(purchase.amount).toDisplayString(true, 2)}`);
    console.log(`paymentId: ${paymentId}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

import { Amount, BOACoin } from "../../../src/Amount";
import { HTTPClient } from "../../../src/HttpClient";
import { Helper } from "../../utils";

import { BigNumber } from "ethers";

import URI from "urijs";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const ACCESS_KEY = process.env.RELAY_ACCESS_KEY || "";
    const userInfo = Helper.loadUserInfo();
    const shopInfo = Helper.loadShopInfo();
    const temporaryAccount = Helper.loadTemporaryAccount();

    const client = new HTTPClient({
        headers: {
            Authorization: ACCESS_KEY,
        },
    });
    const purchase = {
        purchaseId: "P000001",
        amount: Amount.make(10, 18).value,
        currency: "php",
    };

    console.log("잔고를 조회합니다.");
    const url1 = URI(RELAY_ENDPOINT).directory(`/v1/ledger/balance/account/${temporaryAccount}`).toString();
    const response1 = await client.get(url1);
    if (response1.data.code !== 0) {
        console.error(response1.data.error.message);
        process.exit(response1.data.code);
    }
    const balance: BOACoin = new BOACoin(BigNumber.from(response1.data.data.point.balance));
    console.log(`balance : ${balance.toDisplayString(true, 2)}`);

    if (balance.value.lt(BigNumber.from(10))) {
        console.error("잔고가 부족하여 테스트를 진행할 수 없습니다.");
        process.exit(1);
    }

    let paymentId: string;
    console.log("결제를 오픈합니다.");
    const url2 = URI(RELAY_ENDPOINT).directory("/v1/payment/new").filename("open").toString();

    const params = {
        purchaseId: purchase.purchaseId,
        amount: purchase.amount.toString(),
        currency: "php",
        shopId: shopInfo.shopId,
        account: temporaryAccount,
    };
    const response2 = await client.post(url2, params);
    if (response2.data.code !== 0) {
        console.error(response2.data.error.message);
        process.exit(response2.data.code);
    }

    paymentId = response2.data.data.paymentId;
    Helper.setPaymentId(paymentId);
    console.log(`account: ${userInfo.wallet.address}`);
    console.log(`amount: ${new BOACoin(purchase.amount).toDisplayString(true, 2)}`);
    console.log(`paymentId: ${paymentId}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

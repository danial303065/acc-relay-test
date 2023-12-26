import { BOACoin } from "../src/Amount";
import { HTTPClient } from "../src/HttpClient";
import { getPaymentId } from "../src/helper";

import { BigNumber } from "ethers";

const URI = require("urijs");

async function main() {
    const RELAY_ENDPOINT = "http://relay.devnet.bosagora.org:7070";
    const ACCESS_KEY = "0x2c93e943c0d7f6f1a42f53e116c52c40fe5c1b428506dc04b290f2a77580a342";

    const paymentId = getPaymentId();

    const client = new HTTPClient();

    console.log("취소결제를 오픈합니다.");
    const url2 = URI(RELAY_ENDPOINT).directory("/v1/payment/cancel").filename("open").toString();

    const params = {
        accessKey: ACCESS_KEY,
        paymentId,
    };
    const response2 = await client.post(url2, params);
    if (response2.data.code !== 0) {
        console.error(response2.data.error.message);
        process.exit(response2.data.code);
    }

    console.log(`account: ${response2.data.data.account}`);
    console.log(`amount: ${new BOACoin(BigNumber.from(response2.data.data.amount)).toDisplayString(true, 2)}`);
    console.log(`paymentId: ${paymentId}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

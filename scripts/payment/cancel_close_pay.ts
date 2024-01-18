import { HTTPClient } from "../../src/HttpClient";
import { getPaymentId } from "../../src/helper";
const URI = require("urijs");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT;
    const ACCESS_KEY = "0x2c93e943c0d7f6f1a42f53e116c52c40fe5c1b428506dc04b290f2a77580a342";

    const client = new HTTPClient();
    const paymentId = getPaymentId();

    console.log("취소결제를 종료합니다.");
    const url = URI(RELAY_ENDPOINT).directory("/v1/payment/cancel").filename("close").toString();
    const response = await client.post(url, {
        accessKey: ACCESS_KEY,
        paymentId,
        confirm: true,
    });
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

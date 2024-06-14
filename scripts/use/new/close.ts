import { HTTPClient } from "../../../src/HttpClient";
import { Helper } from "../../utils";
import URI from "urijs";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const ACCESS_KEY = process.env.RELAY_ACCESS_KEY || "";

    const client = new HTTPClient({
        headers: {
            Authorization: ACCESS_KEY,
        },
    });
    const paymentId = Helper.getPaymentId();

    console.log("결제를 종료합니다.");
    const url = URI(RELAY_ENDPOINT).directory("/v1/payment/new").filename("close").toString();
    const response = await client.post(url, {
        paymentId,
        confirm: true,
    });
    if (response.data.code !== 0) {
        console.error("Error!", response.data.error.message);
        process.exit(response.data.code);
    }

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

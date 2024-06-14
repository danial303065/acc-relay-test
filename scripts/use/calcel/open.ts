import { BOACoin } from "../../../src/Amount";
import { HTTPClient } from "../../../src/HttpClient";
import { Helper } from "../../utils";

import { BigNumber } from "ethers";

import URI from "urijs";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const ACCESS_KEY = process.env.RELAY_ACCESS_KEY || "";

    const paymentId = Helper.getPaymentId();

    const client = new HTTPClient({
        headers: {
            Authorization: ACCESS_KEY,
        },
    });

    console.log("취소결제를 오픈합니다.");
    const url2 = URI(RELAY_ENDPOINT).directory("/v1/payment/cancel").filename("open").toString();

    const params = {
        paymentId,
    };
    const response2 = await client.post(url2, params);
    if (response2.data.code !== 0) {
        console.error("Error!", response2.data.error.message);
        process.exit(response2.data.code);
    }

    console.log("처리결과입니다.");
    console.log(response2.data.code);
    console.log(beautify(JSON.stringify(response2.data.data), { format: "json" }));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

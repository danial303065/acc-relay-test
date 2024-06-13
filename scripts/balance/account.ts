import { HTTPClient } from "../../src/HttpClient";

import { Helper } from "../utils";
import { BOACoin } from "../../src/Amount";

import { BigNumber } from "ethers";

import URI from "urijs";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();

    const client = new HTTPClient({});
    const url = URI(RELAY_ENDPOINT).directory(`/v1/ledger/balance/account/${userInfo.wallet.address}`).toString();
    const response = await client.get(url);
    if (response.data.code !== 0) {
        console.error(response.data.error.message);
        process.exit(response.data.code);
    }
    const balance: BOACoin = new BOACoin(BigNumber.from(response.data.data.point.balance));
    console.log(`balance : ${balance.toDisplayString(true, 2)}`);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

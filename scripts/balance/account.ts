import { HTTPClient } from "../../src/HttpClient";

import { Helper } from "../utils";
import { BOACoin } from "../../src/Amount";

import { BigNumber } from "ethers";

import URI from "urijs";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();

    const client = new HTTPClient({});
    const url = URI(RELAY_ENDPOINT).directory(`/v1/ledger/balance/account/${userInfo.wallet.address}`).toString();
    const response = await client.get(url);
    if (response.data.code !== 0) {
        console.error("Error!", response.data.error.message);
        process.exit(response.data.code);
    }
    const pointBalance: BOACoin = new BOACoin(BigNumber.from(response.data.data.point.balance));
    const tokenBalance: BOACoin = new BOACoin(BigNumber.from(response.data.data.token.balance));
    console.log(`account : ${response.data.data.account}`);
    console.log(`Point balance : ${pointBalance.toDisplayString(true, 2)}`);
    console.log(`Token balance : ${tokenBalance.toDisplayString(true, 2)}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

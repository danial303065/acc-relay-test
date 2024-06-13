import { HTTPClient } from "../../src/HttpClient";
import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";

import URI from "urijs";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();

    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo}`);
    const nonce = await Helper.getNonceOfLedger(userInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const message = ContractUtils.getAccountMessage(userInfo.wallet.address, nonce, chainInfo.network.chainId);
    const signature = await ContractUtils.signMessage(userInfo.wallet, message);
    const client = new HTTPClient({});

    console.log("임시주소를 발급받습니다.");
    const params = { account: userInfo.wallet.address, signature };
    const url = URI(RELAY_ENDPOINT).directory(`/v1/payment/account/temporary`).toString();
    const response = await client.post(url, params);
    if (response.data.code !== 0) {
        console.error(response.data.error.message);
        process.exit(response.data.code);
    }

    console.log(response.data.data);
    Helper.saveTemporaryAccount(response.data.data.temporaryAccount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

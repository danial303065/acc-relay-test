import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";
import URI from "urijs";
import { HTTPClient } from "../../src/HttpClient";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();
    const phoneHash = ContractUtils.getPhoneHash(userInfo.phone);
    const account = await Helper.phoneToAccount(phoneHash);
    console.log(`registered: ${phoneHash} - ${account}`);

    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo}`);
    const nonce = await Helper.getNonceOfLedger(userInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const signature = await ContractUtils.signChangePayablePoint(
        userInfo.wallet,
        phoneHash,
        nonce,
        chainInfo.network.chainId
    );
    const param = {
        phone: phoneHash,
        account: userInfo.wallet.address,
        signature,
    };
    const url = URI(RELAY_ENDPOINT).directory("/v1/ledger").filename("changeToPayablePoint").toString();
    const client = new HTTPClient();
    const response = await client.post(url, param);
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

import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";
import { HTTPClient } from "../../src/HttpClient";
import URI from "urijs";

const beautify = require("beautify");

async function main() {
    const userInfo = Helper.loadUserInfo();

    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo.network.chainId}`);
    const nonce = await Helper.getNonceOfPhoneLink(userInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const phoneHash = ContractUtils.getPhoneHash(userInfo.phone);
    const msg = ContractUtils.getRequestMessage(phoneHash, userInfo.wallet.address, nonce, chainInfo.network.chainId);
    const signature = await ContractUtils.signMessage(userInfo.wallet, msg);
    const client = new HTTPClient();
    const param = { phone: userInfo.phone, address: userInfo.wallet.address, signature };
    const url = URI(Helper.LINK_ENDPOINT).directory(`/request`).toString();
    const response = await client.post(url, param);
    if (response.data.code !== 200) {
        console.error("Error!", response.data.error.message);
        process.exit(response.data.code);
    }

    const res = response.data;
    const requestId = res.data.requestId;

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));

    await ContractUtils.delay(3000);
    const param2 = { requestId, code: "000102" };
    const url2 = URI(Helper.LINK_ENDPOINT).directory(`/submit`).toString();
    const response2 = await client.post(url2, param2);
    if (response2.data.code !== 200) {
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

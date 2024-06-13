import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";

async function main() {
    const userInfo = Helper.loadUserInfo();

    const phoneHash = ContractUtils.getPhoneHash(userInfo.phone);
    console.log(`Phone Hash: ${phoneHash}`);
    const account = await Helper.phoneToAccount(phoneHash);
    console.log(`Account: ${account} - ${userInfo.wallet.address}`);
    const hash = await Helper.accountToPhone(userInfo.wallet.address);
    console.log(`Hash: ${hash} - ${phoneHash}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

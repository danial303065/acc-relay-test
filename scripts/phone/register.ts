import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";

async function main() {
    const userInfo = Helper.loadUserInfo();
    const requestId = await Helper.register(userInfo.wallet, userInfo.phone);
    await ContractUtils.delay(3000);
    await Helper.submit(requestId, "000102");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

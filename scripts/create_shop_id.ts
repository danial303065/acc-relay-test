import { ContractUtils } from "../src/ContractUtils";
import { Helper } from "./utils";

async function main() {
    const shopInfo = Helper.loadShopInfo();
    const shopId = ContractUtils.getShopId(shopInfo.wallet.address, 1);
    console.log(shopId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

import { Wallet } from "ethers";

async function main() {
    const wallet = Wallet.createRandom();
    console.log(wallet.address);
    console.log(wallet.privateKey);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

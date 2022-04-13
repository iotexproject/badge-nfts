import { ethers, getNamedAccounts, deployments } from "hardhat";
import * as fs from "fs";
import { from } from "@iotexproject/iotex-address-ts";

async function main() {
    const { execute } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const executeResult = await execute('PebblePioneerNFT', {
        from: deployer,
        log: true,
    }, 'batchMint', ['0x3c466f4eeefc0990d83982c60906d7adddc0e2f2'], [181]);
    console.log(`PebblePioneerNFT batch mint using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
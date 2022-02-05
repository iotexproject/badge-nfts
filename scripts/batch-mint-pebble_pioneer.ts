import { ethers, getNamedAccounts, deployments } from "hardhat";
import * as fs from "fs";
import { from } from "@iotexproject/iotex-address-ts";

async function main() {
    const data = fs.readFileSync('./scripts/pebble_pioneer_users.csv');

    const lines = data.toString().split(/\r?\n/);
    
    const users = []
    for (let i = 0; i < lines.length; i++) {
        const addr = from(lines[i]);
        users.push({
            address: addr.stringEth(),
            index: i + 1
        })   
    }

    const { execute } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    let batch = Math.floor(lines.length / 50);
    if (lines.length % 50 != 0) {
        batch = batch + 1;
    }
    for (let i = 0; i < batch; i++) {
        const addresses = [];
        const indexes = [];
        const begin = i * 50;
        const end = i == batch - 1 ? lines.length : begin + 50;
        for (let j = begin; j < end; j++) {
            addresses.push(users[j].address);
            indexes.push(users[j].index);
        }

        const executeResult = await execute('PebblePioneerNFT', {
            from: deployer,
            log: true,
        }, 'batchMint', addresses, indexes);
        console.log(`PebblePioneerNFT batch mint ${i} using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
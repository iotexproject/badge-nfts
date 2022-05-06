import { ethers, getNamedAccounts, deployments } from "hardhat";
import * as fs from "fs";
import { from } from "@iotexproject/iotex-address-ts";
import { BadgeNFT } from "../types/BadgeNFT";

async function main() {
    const data = fs.readFileSync('./scripts/addresses.csv');

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
    const [ deployer ] = await ethers.getSigners();

    let batch = Math.floor(lines.length / 50);
    if (lines.length % 50 != 0) {
        batch = batch + 1;
    }

    const factory = await ethers.getContractFactory("BadgeNFT");
    const contract = factory.attach("0x278f851c98ac86cf016370cc93fda2fc3114bc4a") as BadgeNFT;

    for (let i = 0; i < batch; i++) {
        const addresses = [];
        const indexes = [];
        const begin = i * 50;
        const end = i == batch - 1 ? lines.length : begin + 50;
        for (let j = begin; j < end; j++) {
            addresses.push(users[j].address);
            indexes.push(users[j].index);
        }

        const result = await contract.connect(deployer).batchMint(
            addresses, indexes
        );
        await result.wait()

        console.log(`PebblePioneerNFT batch mint ${i} at ${result.hash}`);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
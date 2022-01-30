import { ethers, getNamedAccounts, deployments } from "hardhat";

async function main() {
    const { execute } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const executeResult = await execute('CartesiIdeaThonNFT', {
        from: deployer,
        log: true,
    }, 'batchMint', [
        "0x29d3366807f231c94ca9a98278517bd673c1ba2d"
    ], [
        51,
    ]);

    console.log(`CartesiIdeaThonNFT batch mint using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
import { ethers, getNamedAccounts, deployments } from "hardhat";

async function main() {
    const { execute } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const executeResult = await execute('BatchMintBadge', {
        from: deployer,
        log: true,
    }, 'batchMint', ['0x2319fb270317ed97132f6e35ce831544d93a3920'], [25000]);

    console.log(`BatchMintBadge batch mint using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
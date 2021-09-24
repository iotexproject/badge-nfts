import { ethers, getNamedAccounts, deployments } from "hardhat";

async function main() {
    const { execute } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const minter = deployer;

    const executeResult = await execute('BatchMintBadge', {
        from: deployer,
        log: true,
    }, 'addMinter', minter);

    console.log(`BatchMintBadge add minter ${minter} using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
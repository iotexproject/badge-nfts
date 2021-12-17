import { ethers, getNamedAccounts, deployments } from "hardhat";

async function main() {
    const { execute } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const executeResult = await execute('CovalentIoTeXNFT', {
        from: deployer,
        log: true,
    }, 'batchMint', [
        '0x556d2C2d7b2be33c4F3BB0D6a7d3829c2E0120F3',
        '0xFf1B73e81a35d78E9c393bCB204266a197094DE4',
        '0x5Ecaf629c25748F5F6A76f553447FB0b2ff69e55',
        '0x09987F375C3D57C97BD86B933774563ed9083039',
        '0xdbEeB4b743b257bB60d3C19265f40E9508BCC147',
        '0xA7fd057D773a9ea0250606fb1115AA82829Cc5Ad',
        '0x6B051a3B46282019B669ffff6de46897D6322377',
        '0xe1c8ce55afc8f5a38a1f86b45fe22709874c8fc9',
        '0x6B051a3B46282019B669ffff6de46897D6322377',
        '0x1f0ABd57AB8D46220eFc80820b569d6709f6b51B'
    ], [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]);

    console.log(`CovalentIoTeXNFT batch mint using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const { log } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const instanceResult = await deploy('BadgeNFT', {
        from: deployer,
        args: [],
        log: true,
        deterministicDeployment: false,
    });

    const factoryResult = await deploy('BadgeNFTFactory', {
        from: deployer,
        args: [instanceResult.address],
        log: true,
        deterministicDeployment: false,
    });
    if (factoryResult.newlyDeployed) {
        log(
            `contract BadgeNFTFactory deployed at ${factoryResult.address} using ${factoryResult.receipt.gasUsed} gas`
        );
    }
};
module.exports.tags = ['BadgeNFT' ,'BadgeNFTFactory'];

module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    await deploy('IoTeXDev', {
        from: deployer,
        args: ["https://nft.iotex.io/tokens/iotex_dev/{id}.json"],
        log: true,
        deterministicDeployment: false,
    });
};
module.exports.tags = ['IoTeXDev'];

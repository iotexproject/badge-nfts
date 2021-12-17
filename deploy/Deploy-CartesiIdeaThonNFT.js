module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const { log } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    console.log(deployer);

    const deployResult = await deploy('CartesiIdeaThonNFT', {
        from: deployer,
        args: [
            "Cartesi IdeaThon",
            "CTH",
            "https://nft.iotex.io/tokens/cartesi_idea-thon/metadata.json"
        ],
        log: true,
        deterministicDeployment: false,
    });
    if (deployResult.newlyDeployed) {
        log(
            `contract CartesiIdeaThonNFT deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
        );
    }
};
module.exports.tags = ['CartesiIdeaThonNFT'];

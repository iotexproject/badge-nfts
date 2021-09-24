module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const { log } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const deployResult = await deploy('BatchMintBadge', {
        from: deployer,
        args: [
            "CMC Staking",
            "CMCS",
            "https://ipfs.io/ipfs/bafkreies4wootcb6bgqdgpqgwqaiuyfhe5sg6zschojydzzbdbersjwu5a?filename=metadata.json"
        ],
        log: true,
        deterministicDeployment: false,
    });
    if (deployResult.newlyDeployed) {
        log(
            `contract BatchMintBadge deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
        );
    }
};
module.exports.tags = ['BatchMintBadge'];

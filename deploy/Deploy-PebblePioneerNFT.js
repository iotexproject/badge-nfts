module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const { log } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const deployResult = await deploy('PebblePioneerNFT', {
        from: deployer,
        args: [
            "Pebble Pioneer",
            "PPT",
            "https://nft.iotex.io/tokens/pebble_pioneer/metadata.json"
        ],
        log: true,
        deterministicDeployment: false,
    });
    if (deployResult.newlyDeployed) {
        log(
            `contract PebblePioneerNFT deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
        );
    }
};
module.exports.tags = ['PebblePioneerNFT'];

module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;

    const { log } = deployments;
    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    console.log(deployer);

    const deployResult = await deploy('CovalentIoTeXNFT', {
        from: deployer,
        args: [
            "Covalent x IoTeX",
            "CXI",
            "https://nft.iotex.io/tokens/covalent_iotex/"
        ],
        log: true,
        deterministicDeployment: false,
    });
    if (deployResult.newlyDeployed) {
        log(
            `contract CovalentIoTeXNFT deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
        );
    }
};
module.exports.tags = ['CovalentIoTeXNFT'];

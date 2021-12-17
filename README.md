# badge-nfts

How to deploy your NFT on iotex chain.

0. Upload your image to IPFS and get a standard json file on IPFS (https://nft.storage/ is recommended to upload)
1. Edit NFT info [here](/deploy/Deploy-BatchMintBadge.js#L11-L13)  with the IPFS link to the json file
2. cp .env.template .env and edit .env file with deployer private key
3. run yarn & yarn deploy:iotex

then you will see deployed contract address

## Local Development

The following assumes the use of `node@>=12`.

### Install Dependencies

`yarn`

### Compile Contracts

`yarn compile`

### Run Tests

`yarn test`

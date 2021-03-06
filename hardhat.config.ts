import 'dotenv/config'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import 'solidity-coverage'

const accounts = [process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"]

export default {
    namedAccounts: {
        deployer: {
            default: 0,
        }
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
        },
        kovan: {
            url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            accounts,
        },
        shibuya: {
            url: 'https://rpc.shibuya.astar.network:8545',
            accounts,
            chainId: 81,
        },
        iotex: {
            url: 'https://babel-api.mainnet.iotex.io',
            accounts,
            chainId: 4689,
        },
        coverage: {
            url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
        },
    },
    defaultNetwork: 'hardhat',
    solidity: {
        version: '0.8.7',
        settings: {
            optimizer: {
                enabled: true,
                runs: 800,
            },
            metadata: {
                bytecodeHash: 'none',
            },
        },
    },
    paths: {
        artifacts: 'artifacts',
        cache: 'cache',
        deploy: 'deploy',
        deployments: 'deployments',
        imports: 'imports',
        sources: 'contracts',
        tests: 'test',
    },
    typechain: {
        outDir: 'types'
    },
    etherscan: {
        apiKey: `${process.env.ETHERSCAN_API_KEY}`
    }
}

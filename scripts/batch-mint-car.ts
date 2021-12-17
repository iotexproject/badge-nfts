import { ethers, getNamedAccounts, deployments } from "hardhat";

async function main() {
    const { execute } = deployments;

    const namedAccounts = await getNamedAccounts();
    const { deployer } = namedAccounts;

    const executeResult = await execute('CartesiIdeaThonNFT', {
        from: deployer,
        log: true,
    }, 'batchMint', [
        "0x908c85dcdc2c1e19c1731c947d538f8832719970",
        "0x188023630ed447377d0491ea456a5b32779dcb76",
        "0xa645a1149cadaea7d0b0cdde14d8b25e7fe263e1",
        "0x71993499db32869a77559211c662b9153c4957ec",
        "0x321b0446108086b010a6020af94557199736c74a",
        "0xacc357a1bbda4bc02a52cc13d865d76a9813db2b",
        "0x9d5745c6d1b7b67b39ddd8ffab3ac2e761e5982b",
        "0x797f2e066e206acf5e816b017232f1154a6dffa6",
        "0x8b5db7ad0130108d17145e5f89bac492fe281318",
        "0xc30f57b506fffd8664fb284da4066f097d4cfee5",
        "0x3cbeae384cfd6a3dda0ff4d8360262e74cc2eb5d",
        "0xd53bfa08788a2970b595c43d17fc93fff8e041ec",
        "0x7d2e54c306688be16867cf9c85e86ca42d265b4a",
        "0xa52fedb87ad0922eff90c17b61b8aa0a6246b913",
        "0x6e2829a813e8d1b4110486efdc9c93d6d0f38eb4",
        "0x61594836818c89a03192ae8c820b2628a23dd15c",
        "0x44ddfa2a35b652031e10b8ca12468d90ca4c81a9",
        "0xc0f4600e68a2962ca06fd7c25447cd01ffa003cf",
        "0x60ef5cb932735f1d32639b025f64405bbb4e9f0b",
        "0x93a51c9f3d35766abe8b70625ded1166e3851493",
        "0xfd1e819b9cc88e1091c047535d1c2e25113207a8",
        "0x09a3453487f942370131afd90494ccedcdd84294",
        "0x40ec80bbdcc1aad64c91572f8748cd4c55ce0772",
        "0x2a34f9d8005ecf205da27476cd7475e240f4b1c2",
        "0xe1586b8f973e6c8ffd925cea94e3de3857765ac2",
        "0xa6ff6505dcecc36709760c4b93b9f9a7ca08920c",
        "0x30640dfee688e67a3255429d37f0af7bcfe9e18c",
        "0x3802bb468626c4ab40509c4805b54049636fda77",
        "0xfcf5a9a8b36661846e3f77626628a59edd674b7d",
        "0x5f250681726577a8ed5c36ed58f3e95ea446dc4c",
        "0x7281763358ac3a53bb383f2d8edb7c8b438238ab",
        "0x0fccc3641f8244a0bfd80acb8451c9ec58d890d1",
        "0xea1c950a1c126c70b868980cd5b6d1923ca23e90",
        "0x0b684259bf5bed7630c87fe96f2d38c1d3a01089",
        "0x7dd45241a4ffe7a9f5589d932e1c8758d08fbd5f",
        "0xa9860339ac1dc6d6d95e89448e243e36075ae890",
        "0xef70df76aa7585d5dd972a71dd552537816f71f7",
        "0xbee398df7146c99e22e2e2b27d75fb9b493c5445",
        "0x29d3366807f231c94ca9a98278517bd673c1ba2d",
        "0x72c3b050e2aeed0959052c3078af62d3d440452b",
        "0x90d707f7de6f97cc9a302ab12c55a4ff4d3dd7e2",
        "0xacc0f3b769f86db0e54b21224ad3cdd87098fed5",
        "0x27305a11f0028f9035572b76f79e3f15fde01079",
        "0x215ecbb59e125a064b3c4868192b7b0c6c72e0af",
        "0x139f409f408f9a1fb829d4f9f99ca5a2945304da",
        "0xd0e39e7176d80aeac686b66f346f14f9fde12a68",
        "0xe806d3e0e2c360ce2656d29445930b94a1b12f35",
        "0x9fe72d1c0bba398d5085ee2987f08b2fa6bb1149",
        "0xa3ca0af04218d738843c906a4a5701bd4989d1cf",
        "0x8edf79e82ed6d24252b4a651ba76c413efd575d8"
    ], [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45,46,47,48,49,50,
    ]);

    console.log(`CartesiIdeaThonNFT batch mint using ${executeResult.gasUsed} gas at ${executeResult.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
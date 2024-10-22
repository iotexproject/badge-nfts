import { ethers } from "hardhat";
import { BadgeNFT } from "../types/BadgeNFT";

async function main() {
    const factory = await ethers.getContractFactory("BadgeNFT");
    const nft = factory.attach("0x2f8e66ef0aa2c22fa0714d3c0fef557a385f1a79") as BadgeNFT;

    const tx = await nft.batchMint(["0x84dc8762dea218e795e7e6a5e2f0f952b4d8925e",
        "0x6073FEaA5C7E5c02C825Ce22Ea8a003f45901e42",
        "0xCef94b1A0938C06bc8D2C89a29d70e3e897FBc9a",
        "0xafe657b9c645c3A68F221FEe0717BF0566C65886",
        "0xa3ee7174f73e31398407ed765ea32790101183cb",
        "0xa7f91fdc0d77e3192bdfa517ae8ba43c83487b67",
        "0x7eDEA2E44d54Db33eC66d25689B0C5a87DF6647e",
        "0xbced64975874011b30070fdb82dcf7332f5e5e6f",
        "0x5e64e7766d6812f249afea26235e0482d8426eb6",
        "0x6e632310d8d9be1caa0c1a58f03a3df87d801e14",
        "0x322f0F69421bF61F51a95c42Bd6761cDA0674Fb4",
        "0xa7e9584e7f46c0af8906b8c39c19e2366241c286",
        "0x2eadd7fd95e94d711e70c3d3b375cb31a9c35e32",
        "0x891bb0ff2c55691227a88afc8a59c9b824becb22",
        "0xc6e59fe8a9a065a62057dcec1a1e5aef35904713",
        "0xceb15aa21298f952ab407d5192410a0a1661b274",
        "0x2fA34F1A9FbEfCA7aE019A241A60A867a08DD218",
        "0xe18b53b2eec5719da0d5cbeb2e7b49637a193e95",
        "0xf6FDC7947187A470dd2A0a17Ea6D3d32907d68C6",
        "0x92506657bdd10ff654175ebc585900af22be9861",
        "0x3fcbdbdbc410c6288f634763c5819039ba1bb78b",
        "0xf77743e9e3822b248f46c08596898c04d5a8ceb8",
        "0xC33c8E071B48293c01252Bb872a8BC91F34174Ad",
        "0x0d2db5283c9df6c0ac10a0938040c8c6df6b0edb",
        "0x32573ec9734A1054cd0E35F0e28314e688089138",
        "0x582c398779eE40E2fa21bA4a5d9dAEF6D8D66189",
        "0x24fbc51fd00f1ebc6121142c2a197fd3ea818507",
        "0xe28293e40d459a760bb78004c9dd4f9b24a9c5d5",
        "0x54cc6561334b5b0e1d94a5a26766ed0b1715b486",
        "0x2F4676eA6A5a9F9667F4D3b226790725dF227929",
        "0x7E9D3DeDc76e0C256d28e83a3D2d262De56795f3",
        "0x449e11B56c952822e3E1c9d7b8859C2E019f0a08",
        "0xaE1A1c3121B5C7E2AD89645F54d4B644Be6E6f30"], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]);
    console.log(`BatchMintBadge batch mint txhash ${tx.hash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
import { ethers } from "hardhat"
import { expect } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

import { BlockHash } from "../types/BlockHash"

describe("Contract", function () {
  let contract: BlockHash
  let owner: SignerWithAddress

  before(async function () {
    ;[owner] = await ethers.getSigners()

    const facory = await ethers.getContractFactory("BlockHash")
    contract = (await facory.connect(owner).deploy()) as BlockHash
  })

  it("check basic info", async function () {
    await ethers.provider.send('evm_mine', [])
    await ethers.provider.send('evm_mine', [])
    const bn = await ethers.provider.getBlockNumber()
    console.log(await contract.hash(bn - 1))

    console.log(await contract.last());
    console.log(await contract.latest());
    console.log(await contract.lastBn());
    console.log(await contract.blockNumber());
    await ethers.provider.send('evm_mine', [])
    await ethers.provider.send('evm_mine', [])

    console.log("--------------------------------")
    console.log(await contract.last());
    console.log(await contract.latest());
    console.log(await contract.lastBn());
    console.log(await contract.blockNumber());
  })
})

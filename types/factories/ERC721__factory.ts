/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015fa380380620015fa8339810160408190526200003491620001b9565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000273565b828054620000769062000220565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c6200025d565b6040516020601f8401601f19168201810183811183821017156200016457620001646200025d565b60405283825285840181018710156200017b578485fd5b8492505b838310156200019e57858301810151828401820152918201916200017f565b83831115620001af57848185840101525b5095945050505050565b60008060408385031215620001cc578182fd5b82516001600160401b0380821115620001e3578384fd5b620001f1868387016200010e565b9350602085015191508082111562000207578283fd5b5062000216858286016200010e565b9150509250929050565b6002810460018216806200023557607f821691505b602082108114156200025757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61137780620002836000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b8578063b88d4fde146101cb578063c87b56dd146101de578063e985e9c5146101f1576100df565b80636352211e1461017d57806370a082311461019057806395d89b41146101b0576100df565b8063095ea7b3116100bd578063095ea7b31461014257806323b872dd1461015757806342842e0e1461016a576100df565b806301ffc9a7146100e457806306fdde031461010d578063081812fc14610122575b600080fd5b6100f76100f2366004610d35565b610204565b6040516101049190610e30565b60405180910390f35b61011561024c565b6040516101049190610e3b565b610135610130366004610d6d565b6102de565b6040516101049190610de0565b610155610150366004610d0c565b61032a565b005b610155610165366004610bcb565b6103c2565b610155610178366004610bcb565b6103fa565b61013561018b366004610d6d565b610415565b6101a361019e366004610b7f565b61044a565b604051610104919061122d565b61011561048e565b6101556101c6366004610cd2565b61049d565b6101556101d9366004610c06565b61056b565b6101156101ec366004610d6d565b6105aa565b6100f76101ff366004610b99565b61062d565b60006001600160e01b031982166380ac58cd60e01b148061023557506001600160e01b03198216635b5e139f60e01b145b8061024457506102448261065b565b90505b919050565b60606000805461025b906112a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610287906112a5565b80156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b5050505050905090565b60006102e982610674565b61030e5760405162461bcd60e51b815260040161030590611089565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061033582610415565b9050806001600160a01b0316836001600160a01b031614156103695760405162461bcd60e51b81526004016103059061118f565b806001600160a01b031661037b610691565b6001600160a01b031614806103975750610397816101ff610691565b6103b35760405162461bcd60e51b815260040161030590610f72565b6103bd8383610695565b505050565b6103d36103cd610691565b82610710565b6103ef5760405162461bcd60e51b8152600401610305906111d0565b6103bd838383610795565b6103bd8383836040518060200160405280600081525061056b565b6000818152600260205260408120546001600160a01b0316806102445760405162461bcd60e51b81526004016103059061102c565b60006001600160a01b0382166104725760405162461bcd60e51b815260040161030590610fcf565b506001600160a01b031660009081526003602052604090205490565b60606001805461025b906112a5565b6104a5610691565b6001600160a01b0316826001600160a01b031614156104d65760405162461bcd60e51b815260040161030590610eef565b80600560006104e3610691565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610527610691565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161055f9190610e30565b60405180910390a35050565b61057c610576610691565b83610710565b6105985760405162461bcd60e51b8152600401610305906111d0565b6105a4848484846108cf565b50505050565b60606105b582610674565b6105d15760405162461bcd60e51b815260040161030590611132565b60006105db610902565b905060008151116105fb5760405180602001604052806000815250610626565b8061060584610914565b604051602001610616929190610db1565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906106d782610415565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061071b82610674565b6107375760405162461bcd60e51b815260040161030590610f26565b600061074283610415565b9050806001600160a01b0316846001600160a01b0316148061077d5750836001600160a01b0316610772846102de565b6001600160a01b0316145b8061078d575061078d818561062d565b949350505050565b826001600160a01b03166107a882610415565b6001600160a01b0316146107ce5760405162461bcd60e51b8152600401610305906110d5565b6001600160a01b0382166107f45760405162461bcd60e51b815260040161030590610eab565b6107ff8383836103bd565b61080a600082610695565b6001600160a01b0383166000908152600360205260408120805460019290610833908490611262565b90915550506001600160a01b0382166000908152600360205260408120805460019290610861908490611236565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6108da848484610795565b6108e684848484610a47565b6105a45760405162461bcd60e51b815260040161030590610e4e565b60408051602081019091526000815290565b60608161093957506040805180820190915260018152600360fc1b6020820152610247565b8160005b8115610963578061094d816112e0565b915061095c9050600a8361124e565b915061093d565b60008167ffffffffffffffff81111561098c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109b6576020820181803683370190505b5090505b841561078d576109cb600183611262565b91506109d8600a866112fb565b6109e3906030611236565b60f81b818381518110610a0657634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610a40600a8661124e565b94506109ba565b6000610a5b846001600160a01b0316610b62565b15610b5757836001600160a01b031663150b7a02610a77610691565b8786866040518563ffffffff1660e01b8152600401610a999493929190610df4565b602060405180830381600087803b158015610ab357600080fd5b505af1925050508015610ae3575060408051601f3d908101601f19168201909252610ae091810190610d51565b60015b610b3d573d808015610b11576040519150601f19603f3d011682016040523d82523d6000602084013e610b16565b606091505b508051610b355760405162461bcd60e51b815260040161030590610e4e565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061078d565b506001949350505050565b3b151590565b80356001600160a01b038116811461024757600080fd5b600060208284031215610b90578081fd5b61062682610b68565b60008060408385031215610bab578081fd5b610bb483610b68565b9150610bc260208401610b68565b90509250929050565b600080600060608486031215610bdf578081fd5b610be884610b68565b9250610bf660208501610b68565b9150604084013590509250925092565b60008060008060808587031215610c1b578081fd5b610c2485610b68565b93506020610c33818701610b68565b935060408601359250606086013567ffffffffffffffff80821115610c56578384fd5b818801915088601f830112610c69578384fd5b813581811115610c7b57610c7b61133b565b604051601f8201601f1916810185018381118282101715610c9e57610c9e61133b565b60405281815283820185018b1015610cb4578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610ce4578182fd5b610ced83610b68565b915060208301358015158114610d01578182fd5b809150509250929050565b60008060408385031215610d1e578182fd5b610d2783610b68565b946020939093013593505050565b600060208284031215610d46578081fd5b813561062681611351565b600060208284031215610d62578081fd5b815161062681611351565b600060208284031215610d7e578081fd5b5035919050565b60008151808452610d9d816020860160208601611279565b601f01601f19169290920160200192915050565b60008351610dc3818460208801611279565b835190830190610dd7818360208801611279565b01949350505050565b6001600160a01b0391909116815260200190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152610e266080830184610d85565b9695505050505050565b901515815260200190565b6000602082526106266020830184610d85565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b90815260200190565b600082198211156112495761124961130f565b500190565b60008261125d5761125d611325565b500490565b6000828210156112745761127461130f565b500390565b60005b8381101561129457818101518382015260200161127c565b838111156105a45750506000910152565b6002810460018216806112b957607f821691505b602082108114156112da57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156112f4576112f461130f565b5060010190565b60008261130a5761130a611325565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461136757600080fd5b5056fea164736f6c6343000800000a";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
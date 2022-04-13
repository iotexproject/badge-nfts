/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CartesiIdeaThonNFT,
  CartesiIdeaThonNFTInterface,
} from "../CartesiIdeaThonNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
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
        name: "minter",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        name: "minter",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
        name: "minter",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022103803806200221083398101604081905262000034916200026d565b8251839083906200004d90600090602085019062000110565b5080516200006390600190602084019062000110565b505050620000806200007a620000ba60201b60201c565b620000be565b80516200009590600c90602084019062000110565b5050336000908152600b60205260409020805460ff1916600117905550620003519050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200011e90620002fe565b90600052602060002090601f0160209004810192826200014257600085556200018d565b82601f106200015d57805160ff19168380011785556200018d565b828001600101855582156200018d579182015b828111156200018d57825182559160200191906001019062000170565b506200019b9291506200019f565b5090565b5b808211156200019b5760008155600101620001a0565b600082601f830112620001c857600080fd5b81516001600160401b0380821115620001e557620001e56200033b565b604051601f8301601f19908116603f011681019082821181831017156200021057620002106200033b565b816040528381526020925086838588010111156200022d57600080fd5b600091505b8382101562000251578582018301518183018401529082019062000232565b83821115620002635760008385830101525b9695505050505050565b6000806000606084860312156200028357600080fd5b83516001600160401b03808211156200029b57600080fd5b620002a987838801620001b6565b94506020860151915080821115620002c057600080fd5b620002ce87838801620001b6565b93506040860151915080821115620002e557600080fd5b50620002f486828701620001b6565b9150509250925092565b600181811c908216806200031357607f821691505b602082108114156200033557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611eaf80620003616000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806368573107116100d8578063983b2d561161008c578063c87b56dd11610066578063c87b56dd14610308578063e985e9c51461031b578063f2fde38b1461035757600080fd5b8063983b2d56146102cf578063a22cb465146102e2578063b88d4fde146102f557600080fd5b8063715018a6116100bd578063715018a6146102ae5780638da5cb5b146102b657806395d89b41146102c757600080fd5b8063685731071461028857806370a082311461029b57600080fd5b806323b872dd1161013a57806342842e0e1161011457806342842e0e1461024f5780634f6ccce7146102625780636352211e1461027557600080fd5b806323b872dd146102165780632f745c59146102295780633092afd51461023c57600080fd5b8063081812fc1161016b578063081812fc146101c4578063095ea7b3146101ef57806318160ddd1461020457600080fd5b806301ffc9a71461018757806306fdde03146101af575b600080fd5b61019a610195366004611c6b565b61036a565b60405190151581526020015b60405180910390f35b6101b7610395565b6040516101a69190611d47565b6101d76101d2366004611ca5565b610427565b6040516001600160a01b0390911681526020016101a6565b6102026101fd366004611b7a565b6104c1565b005b6008545b6040519081526020016101a6565b610202610224366004611a42565b6105d7565b610208610237366004611b7a565b61065e565b61020261024a3660046119ed565b610706565b61020261025d366004611a42565b6107cb565b610208610270366004611ca5565b6107e6565b6101d7610283366004611ca5565b61088a565b610202610296366004611ba4565b610915565b6102086102a93660046119ed565b610a6b565b610202610b05565b600a546001600160a01b03166101d7565b6101b7610b6b565b6102026102dd3660046119ed565b610b7a565b6102026102f0366004611b3e565b610c40565b610202610303366004611a7e565b610d05565b6101b7610316366004611ca5565b610d93565b61019a610329366004611a0f565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102026103653660046119ed565b610eb2565b60006001600160e01b0319821663780e9d6360e01b148061038f575061038f82610f91565b92915050565b6060600080546103a490611dde565b80601f01602080910402602001604051908101604052809291908181526020018280546103d090611dde565b801561041d5780601f106103f25761010080835404028352916020019161041d565b820191906000526020600020905b81548152906001019060200180831161040057829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104a55760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104cc8261088a565b9050806001600160a01b0316836001600160a01b0316141561053a5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161049c565b336001600160a01b038216148061055657506105568133610329565b6105c85760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161049c565b6105d28383610fe1565b505050565b6105e1338261104f565b6106535760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161049c565b6105d2838383611146565b600061066983610a6b565b82106106dd5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161049c565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600a546001600160a01b031633146107605760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049c565b6001600160a01b0381166000908152600b602052604090205460ff16156107c8576001600160a01b0381166000818152600b6020526040808220805460ff19169055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a25b50565b6105d283838360405180602001604052806000815250610d05565b60006107f160085490565b82106108655760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161049c565b6008828154811061087857610878611e60565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b03168061038f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161049c565b336000908152600b602052604090205460ff1661099a5760405162461bcd60e51b815260206004820152602c60248201527f436172746573694964656154686f6e4e46543a2063616c6c6572206973206e6f60448201527f7420746865206d696e7465720000000000000000000000000000000000000000606482015260840161049c565b8051825114610a115760405162461bcd60e51b815260206004820152602960248201527f436172746573694964656154686f6e4e46543a206172726179206c656e67746860448201527f206469736d617463680000000000000000000000000000000000000000000000606482015260840161049c565b60005b82518110156105d257610a59838281518110610a3257610a32611e60565b6020026020010151838381518110610a4c57610a4c611e60565b6020026020010151611305565b80610a6381611e19565b915050610a14565b60006001600160a01b038216610ae95760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161049c565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b03163314610b5f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049c565b610b696000611323565b565b6060600180546103a490611dde565b600a546001600160a01b03163314610bd45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049c565b6001600160a01b0381166000908152600b602052604090205460ff166107c8576001600160a01b0381166000818152600b6020526040808220805460ff19166001179055517f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69190a250565b6001600160a01b038216331415610c995760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161049c565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d0f338361104f565b610d815760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161049c565b610d8d84848484611375565b50505050565b6000818152600260205260409020546060906001600160a01b0316610e205760405162461bcd60e51b815260206004820152603360248201527f436172746573694964656154686f6e4e46543a2055524920717565727920666f60448201527f72206e6f6e6578697374656e7420746f6b656e00000000000000000000000000606482015260840161049c565b600c8054610e2d90611dde565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5990611dde565b8015610ea65780601f10610e7b57610100808354040283529160200191610ea6565b820191906000526020600020905b815481529060010190602001808311610e8957829003601f168201915b50505050509050919050565b600a546001600160a01b03163314610f0c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049c565b6001600160a01b038116610f885760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161049c565b6107c881611323565b60006001600160e01b031982166380ac58cd60e01b1480610fc257506001600160e01b03198216635b5e139f60e01b145b8061038f57506301ffc9a760e01b6001600160e01b031983161461038f565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906110168261088a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166110c85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161049c565b60006110d38361088a565b9050806001600160a01b0316846001600160a01b0316148061110e5750836001600160a01b031661110384610427565b6001600160a01b0316145b8061113e57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111598261088a565b6001600160a01b0316146111d55760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161049c565b6001600160a01b0382166112375760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161049c565b6112428383836113f3565b61124d600082610fe1565b6001600160a01b0383166000908152600360205260408120805460019290611276908490611dc7565b90915550506001600160a01b03821660009081526003602052604081208054600192906112a4908490611daf565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61131f8282604051806020016040528060008152506114ab565b5050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611380848484611146565b61138c84848484611529565b610d8d5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161049c565b6001600160a01b03831661144e5761144981600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611471565b816001600160a01b0316836001600160a01b031614611471576114718382611681565b6001600160a01b038216611488576105d28161171e565b826001600160a01b0316826001600160a01b0316146105d2576105d282826117cd565b6114b58383611811565b6114c26000848484611529565b6105d25760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161049c565b60006001600160a01b0384163b1561167657604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061156d903390899088908890600401611d0b565b602060405180830381600087803b15801561158757600080fd5b505af19250505080156115b7575060408051601f3d908101601f191682019092526115b491810190611c88565b60015b61165c573d8080156115e5576040519150601f19603f3d011682016040523d82523d6000602084013e6115ea565b606091505b5080516116545760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161049c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061113e565b506001949350505050565b6000600161168e84610a6b565b6116989190611dc7565b6000838152600760205260409020549091508082146116eb576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061173090600190611dc7565b6000838152600960205260408120546008805493945090928490811061175857611758611e60565b90600052602060002001549050806008838154811061177957611779611e60565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806117b1576117b1611e4a565b6001900381819060005260206000200160009055905550505050565b60006117d883610a6b565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b0382166118675760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161049c565b6000818152600260205260409020546001600160a01b0316156118cc5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161049c565b6118d8600083836113f3565b6001600160a01b0382166000908152600360205260408120805460019290611901908490611daf565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80356001600160a01b038116811461197657600080fd5b919050565b600082601f83011261198c57600080fd5b813560206119a161199c83611d8b565b611d5a565b80838252828201915082860187848660051b89010111156119c157600080fd5b60005b858110156119e0578135845292840192908401906001016119c4565b5090979650505050505050565b6000602082840312156119ff57600080fd5b611a088261195f565b9392505050565b60008060408385031215611a2257600080fd5b611a2b8361195f565b9150611a396020840161195f565b90509250929050565b600080600060608486031215611a5757600080fd5b611a608461195f565b9250611a6e6020850161195f565b9150604084013590509250925092565b60008060008060808587031215611a9457600080fd5b611a9d8561195f565b93506020611aac81870161195f565b935060408601359250606086013567ffffffffffffffff80821115611ad057600080fd5b818801915088601f830112611ae457600080fd5b813581811115611af657611af6611e76565b611b08601f8201601f19168501611d5a565b91508082528984828501011115611b1e57600080fd5b808484018584013760008482840101525080935050505092959194509250565b60008060408385031215611b5157600080fd5b611b5a8361195f565b915060208301358015158114611b6f57600080fd5b809150509250929050565b60008060408385031215611b8d57600080fd5b611b968361195f565b946020939093013593505050565b60008060408385031215611bb757600080fd5b823567ffffffffffffffff80821115611bcf57600080fd5b818501915085601f830112611be357600080fd5b81356020611bf361199c83611d8b565b8083825282820191508286018a848660051b8901011115611c1357600080fd5b600096505b84871015611c3d57611c298161195f565b835260019690960195918301918301611c18565b5096505086013592505080821115611c5457600080fd5b50611c618582860161197b565b9150509250929050565b600060208284031215611c7d57600080fd5b8135611a0881611e8c565b600060208284031215611c9a57600080fd5b8151611a0881611e8c565b600060208284031215611cb757600080fd5b5035919050565b6000815180845260005b81811015611ce457602081850181015186830182015201611cc8565b81811115611cf6576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611d3d6080830184611cbe565b9695505050505050565b602081526000611a086020830184611cbe565b604051601f8201601f1916810167ffffffffffffffff81118282101715611d8357611d83611e76565b604052919050565b600067ffffffffffffffff821115611da557611da5611e76565b5060051b60200190565b60008219821115611dc257611dc2611e34565b500190565b600082821015611dd957611dd9611e34565b500390565b600181811c90821680611df257607f821691505b60208210811415611e1357634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611e2d57611e2d611e34565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146107c857600080fdfea164736f6c6343000807000a";

export class CartesiIdeaThonNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CartesiIdeaThonNFT> {
    return super.deploy(
      name,
      symbol,
      uri,
      overrides || {}
    ) as Promise<CartesiIdeaThonNFT>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, uri, overrides || {});
  }
  attach(address: string): CartesiIdeaThonNFT {
    return super.attach(address) as CartesiIdeaThonNFT;
  }
  connect(signer: Signer): CartesiIdeaThonNFT__factory {
    return super.connect(signer) as CartesiIdeaThonNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CartesiIdeaThonNFTInterface {
    return new utils.Interface(_abi) as CartesiIdeaThonNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CartesiIdeaThonNFT {
    return new Contract(address, _abi, signerOrProvider) as CartesiIdeaThonNFT;
  }
}

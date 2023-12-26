/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Token,
  TokenInterface,
} from "../../../../dms-osx-artifacts/contracts/token/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "multiTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e6d38038062000e6d8339810160408190526200003491620002ac565b8151829082906200004d90600390602085019062000153565b5080516200006390600490602084019062000153565b50505062000084836b204fce5e3e250261100000006200008d60201b60201c565b505050620003aa565b6001600160a01b038216620000e85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000fc919062000332565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620001619062000357565b90600052602060002090601f016020900481019282620001855760008555620001d0565b82601f10620001a057805160ff1916838001178555620001d0565b82800160010185558215620001d0579182015b82811115620001d0578251825591602001919060010190620001b3565b50620001de929150620001e2565b5090565b5b80821115620001de5760008155600101620001e3565b600082601f8301126200020a578081fd5b81516001600160401b038082111562000227576200022762000394565b604051601f8301601f19908116603f0116810190828211818310171562000252576200025262000394565b816040528381526020925086838588010111156200026e578485fd5b8491505b8382101562000291578582018301518183018401529082019062000272565b83821115620002a257848385830101525b9695505050505050565b600080600060608486031215620002c1578283fd5b83516001600160a01b0381168114620002d8578384fd5b60208501519093506001600160401b0380821115620002f5578384fd5b6200030387838801620001f9565b9350604086015191508082111562000319578283fd5b506200032886828701620001f9565b9150509250925092565b600082198211156200035257634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200036c57607f821691505b602082108114156200038e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610ab380620003ba6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063395093511161008c578063a16a317911610066578063a16a31791461019a578063a457c2d7146101ad578063a9059cbb146101c0578063dd62ed3e146101d3576100df565b8063395093511461016c57806370a082311461017f57806395d89b4114610192576100df565b806323b872dd116100bd57806323b872dd146101375780632ff2e9dc1461014a578063313ce5671461015d576100df565b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec61020c565b6040516100f99190610988565b60405180910390f35b6101156101103660046108ea565b61029e565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b6101156101453660046108af565b6102b6565b6101296b204fce5e3e2502611000000081565b604051601281526020016100f9565b61011561017a3660046108ea565b6102da565b61012961018d36600461085c565b610319565b6100ec610338565b6101156101a8366004610913565b610347565b6101156101bb3660046108ea565b6103b1565b6101156101ce3660046108ea565b610460565b6101296101e136600461087d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461021b90610a11565b80601f016020809104026020016040519081016040528092919081815260200182805461024790610a11565b80156102945780601f1061026957610100808354040283529160200191610294565b820191906000526020600020905b81548152906001019060200180831161027757829003601f168201915b5050505050905090565b6000336102ac81858561046e565b5060019392505050565b6000336102c48582856105c6565b6102cf858585610658565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102ac90829086906103149087906109f9565b61046e565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461021b90610a11565b600033815b848110156103a5576103938287878481811061037857634e487b7160e01b600052603260045260246000fd5b905060200201602081019061038d919061085c565b86610658565b8061039d81610a4c565b91505061034c565b50600195945050505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104535760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102cf828686840361046e565b6000336102ac818585610658565b6001600160a01b0383166104e95760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161044a565b6001600160a01b0382166105655760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461065257818110156106455760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161044a565b610652848484840361046e565b50505050565b6001600160a01b0383166106d45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161044a565b6001600160a01b0382166107505760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161044a565b6001600160a01b038316600090815260208190526040902054818110156107df5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161044a565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610652565b80356001600160a01b038116811461033357600080fd5b60006020828403121561086d578081fd5b61087682610845565b9392505050565b6000806040838503121561088f578081fd5b61089883610845565b91506108a660208401610845565b90509250929050565b6000806000606084860312156108c3578081fd5b6108cc84610845565b92506108da60208501610845565b9150604084013590509250925092565b600080604083850312156108fc578182fd5b61090583610845565b946020939093013593505050565b600080600060408486031215610927578283fd5b833567ffffffffffffffff8082111561093e578485fd5b818601915086601f830112610951578485fd5b81358181111561095f578586fd5b8760208083028501011115610972578586fd5b6020928301989097509590910135949350505050565b6000602080835283518082850152825b818110156109b457858101830151858201604001528201610998565b818111156109c55783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610a0c57610a0c610a67565b500190565b600281046001821680610a2557607f821691505b60208210811415610a4657634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610a6057610a60610a67565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220b66fb11faaf0833666f12ac87d8788a74ccde86f6a1fa9b0722b723730f726e764736f6c63430008020033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(
      owner,
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<Token>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      tokenName,
      tokenSymbol,
      overrides || {}
    );
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ShopStorage,
  ShopStorageInterface,
} from "../../../../dms-osx-artifacts/contracts/shop/ShopStorage";

const _abi = [
  {
    inputs: [],
    name: "consumerAddress",
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
    inputs: [],
    name: "providerAddress",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063706e5257146037578063dbc2d04214607f575b600080fd5b60035460569073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60045460569073ffffffffffffffffffffffffffffffffffffffff168156fea264697066735822122004b9a9e2c36cd7725cdf3caabeb17aadc86923de0bbd0aabee6e2f1e43eaf08564736f6c63430008020033";

type ShopStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopStorage__factory extends ContractFactory {
  constructor(...args: ShopStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ShopStorage> {
    return super.deploy(overrides || {}) as Promise<ShopStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ShopStorage {
    return super.attach(address) as ShopStorage;
  }
  override connect(signer: Signer): ShopStorage__factory {
    return super.connect(signer) as ShopStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopStorageInterface {
    return new utils.Interface(_abi) as ShopStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopStorage {
    return new Contract(address, _abi, signerOrProvider) as ShopStorage;
  }
}
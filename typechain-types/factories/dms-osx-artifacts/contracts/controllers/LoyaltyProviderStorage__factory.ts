/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  LoyaltyProviderStorage,
  LoyaltyProviderStorageInterface,
} from "../../../../dms-osx-artifacts/contracts/controllers/LoyaltyProviderStorage";

const _abi = [
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609b8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063f26be3fc14602d575b600080fd5b60537f32105b1d0b88ada155176b58ee08b45c31e4f2f7337475831982c313533b880c81565b60405190815260200160405180910390f3fea2646970667358221220bba3068f48f45b493e091a4a4a4f29d5e885a2ab6342d49277efd64b83dfd21864736f6c63430008020033";

type LoyaltyProviderStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoyaltyProviderStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LoyaltyProviderStorage__factory extends ContractFactory {
  constructor(...args: LoyaltyProviderStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LoyaltyProviderStorage> {
    return super.deploy(overrides || {}) as Promise<LoyaltyProviderStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LoyaltyProviderStorage {
    return super.attach(address) as LoyaltyProviderStorage;
  }
  override connect(signer: Signer): LoyaltyProviderStorage__factory {
    return super.connect(signer) as LoyaltyProviderStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoyaltyProviderStorageInterface {
    return new utils.Interface(_abi) as LoyaltyProviderStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoyaltyProviderStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LoyaltyProviderStorage;
  }
}

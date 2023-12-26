/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPhoneLinkCollection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPhoneLinkCollection__factory>;
    getContractFactory(
      name: "PhoneLinkCollection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PhoneLinkCollection__factory>;
    getContractFactory(
      name: "PhoneStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PhoneStorage__factory>;
    getContractFactory(
      name: "Certifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Certifier__factory>;
    getContractFactory(
      name: "LoyaltyConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoyaltyConsumer__factory>;
    getContractFactory(
      name: "LoyaltyExchanger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoyaltyExchanger__factory>;
    getContractFactory(
      name: "LoyaltyProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoyaltyProvider__factory>;
    getContractFactory(
      name: "LoyaltyProviderStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoyaltyProviderStorage__factory>;
    getContractFactory(
      name: "CurrencyRate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurrencyRate__factory>;
    getContractFactory(
      name: "CurrencyStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurrencyStorage__factory>;
    getContractFactory(
      name: "ICertifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICertifier__factory>;
    getContractFactory(
      name: "ICurrencyRate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurrencyRate__factory>;
    getContractFactory(
      name: "ILedger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILedger__factory>;
    getContractFactory(
      name: "IShop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IShop__factory>;
    getContractFactory(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IValidator__factory>;
    getContractFactory(
      name: "Ledger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ledger__factory>;
    getContractFactory(
      name: "LedgerStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LedgerStorage__factory>;
    getContractFactory(
      name: "Shop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Shop__factory>;
    getContractFactory(
      name: "ShopStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShopStorage__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "Validator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Validator__factory>;
    getContractFactory(
      name: "ValidatorStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ValidatorStorage__factory>;

    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPhoneLinkCollection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPhoneLinkCollection>;
    getContractAt(
      name: "PhoneLinkCollection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PhoneLinkCollection>;
    getContractAt(
      name: "PhoneStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PhoneStorage>;
    getContractAt(
      name: "Certifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Certifier>;
    getContractAt(
      name: "LoyaltyConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoyaltyConsumer>;
    getContractAt(
      name: "LoyaltyExchanger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoyaltyExchanger>;
    getContractAt(
      name: "LoyaltyProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoyaltyProvider>;
    getContractAt(
      name: "LoyaltyProviderStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoyaltyProviderStorage>;
    getContractAt(
      name: "CurrencyRate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurrencyRate>;
    getContractAt(
      name: "CurrencyStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurrencyStorage>;
    getContractAt(
      name: "ICertifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICertifier>;
    getContractAt(
      name: "ICurrencyRate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurrencyRate>;
    getContractAt(
      name: "ILedger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILedger>;
    getContractAt(
      name: "IShop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IShop>;
    getContractAt(
      name: "IValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IValidator>;
    getContractAt(
      name: "Ledger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ledger>;
    getContractAt(
      name: "LedgerStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LedgerStorage>;
    getContractAt(
      name: "Shop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Shop>;
    getContractAt(
      name: "ShopStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShopStorage>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "Validator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Validator>;
    getContractAt(
      name: "ValidatorStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ValidatorStorage>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

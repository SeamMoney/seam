import {createContext, useContext} from "react";
import { AptosAccount } from "aptos";
import {NetworkName} from "../../constants";
import {assertNever} from "../../util/aptosUtils";

export interface walletContext {
  isInstalled: boolean;
  isConnected: boolean;
  isAccountSet: boolean;
  walletNetwork: WalletNetworks;
  accountAddress: string | null;
  connect: () => Promise<any>;
}

export const walletContext = createContext<walletContext | null>(null);

export const useWalletContext = () => {
  const context = useContext(walletContext) as walletContext;

  if (!context) {
    throw new Error("useWalletContext must be used within a walletContext");
  }
  return context;
};

export type WalletNetworks = "Devnet" | "Localhost" | "Testnet" | "Sherry";

export const walletExplorerNetworkMap = (
  walletNetwork: WalletNetworks,
): NetworkName => {
  switch (walletNetwork) {
    case "Devnet":
      return "devnet";
    case "Localhost":
      return "local";
    case "Testnet":
      return "test";
    case "Sherry":
      return "test2";
    default:
      return assertNever(walletNetwork);
  }
};


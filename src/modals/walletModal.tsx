import { AptosAccount, AptosClient, BCS, TxnBuilderTypes } from "aptos";
import { MoveFunction, MoveModule, MoveModuleBytecode, MoveType, MoveValue, TransactionPayload } from "aptos/dist/generated";
// import { MoveFunction, MoveModuleABI, MoveTypeId, AccountResource } from "aptos/dist/api/data-contracts";
import { TransactionPayloadScript } from "aptos/dist/transaction_builder/aptos_types";
import TxnHeader from "components/txn/TxnHeader";
import { useEffect, useRef, useState } from "react";
import { generic_serialize } from "util/aptosUtils";
import {useWalletContext } from '../context/wallet/context';
import { ConnectWallet, useWeb3 } from "@fewcha/web3-react";
import ModalWrapper from "./ModalWrapper";

interface walletModalProps {
    // client: AptosClient;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

}

const WalletModal = ({isOpen,setIsOpen}: walletModalProps) =>{
    const [open, setOpen] = useState(isOpen);
    const [argList, setArgList] = useState<any[]>([]);
    const cancelButtonRef = useRef(null);
    const { account, balance, isConnected,disconnect, network, fewcha, martian, currentWallet } = useWeb3();

    const onDisconnect = ()=>{
      disconnect()
      setIsOpen(false);
    }
    return (
      <ModalWrapper open={isOpen} setOpen={setIsOpen} cancelButtonRef={cancelButtonRef} title="tets">
        <p className="text-white">{account?.address}</p>
{!isConnected && <ConnectWallet type="list" />}
{isConnected && (
<div>
  <div className="flex flex-row justify-center items-center gap gap-3 p-2 m-2">
  <p>Connected with </p>
  {currentWallet==='martian'??
  <img className="w-32 h-10" src={`./dapps/${currentWallet}.png`} alt={currentWallet}/>}
  {currentWallet=='fewcha'?
  <img className="w-32 h-24 p-2 bg-white rounded-2xl" src={`./dapps/fewcha.svg`} alt={currentWallet}/>:null}
  </div>
  <button className="seam-button" onClick={onDisconnect}>disconnect</button>
</div>)
}
{/* fewcha...
fewcha.sdk...
fewcha.token... */}
       
      </ModalWrapper>
    );
  }
  export default WalletModal;
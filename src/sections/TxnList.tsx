import { Types } from "aptos";
import React from "react";
import { ReactDOM } from "react";
import { formatParam, parsePayloadFunction, shortenAddress } from "hooks/formatting";
import { useState } from "react";
import { UserTransaction } from "aptos/dist/generated";
import TxnHeader from "components/txn/TxnHeader";
import EntryTxnArgs from "components/txn/TxnArgs";
import { TxnFooter } from "./TxnFooter";
interface TxnListProps {
    // isLoading: boolean;
    txns: Types.Transaction[];
    address: string;
}


const TxnList = ({ txns, address }: TxnListProps) => {

    return (
        <div className="h-full items-start ">
            <div className="flex flex-row justify-start items-start "><p>Transactions for</p> <p>{AddrClickable(address)}</p></div>
            
            <div className="txScroller px-4">
            {txns.map((tx: Types.Transaction) => {
                if (tx.type === "user_transaction") {
                    // tx = tx as UserTransaction;
                    return (<div className="seam-outline mx-4 my-3" >
                        <TxnPayload {...tx as UserTransaction} />
                        
                        <TxnFooter {...tx as UserTransaction} />
                    </div>)
                }
                else{
                return <p data-tip="type of txn (ex)">{tx.type}</p>
                }
            }
            )}
            </div>
        </div>
    );
}

const TxnPayload = ({ payload }: UserTransaction) => {
    const { type } = payload;
    
    // console.log("payload", type);
    switch (type) {
        case "entry_function_payload":
            payload = payload as Types.TransactionPayload_EntryFunctionPayload
            const {addr, mod, scr} = parsePayloadFunction(payload.function);
            return (
                <div>
                    <div className="">
                        <TxnHeader address={addr} module_name={mod} func_name={scr} />
                        <p data-tip="type of txn (ex)">{type}
                        {/* <ReactTooltip place="top" textColor="white" multiline={true}/> */}
                        </p>
                        <EntryTxnArgs {...payload} />
                    </div>
                </div>
            );

        case "module_bundle_payload":
            payload = payload as Types.TransactionPayload_ModuleBundlePayload
            return (
                <div>
                    <div className=" bg-white">
                        {payload.type}
                        <TxnHeader address={addr} module_name={mod} func_name={scr} />
                        {/* <EntryTxnArgs {...payload} /> */}
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <p>{type}</p>
                </div>
            )

    }

    return (
        <div>
            <p>Non user txn</p>
        </div>
    )
}

const AddrClickable = (addr:string) => {
    return(
        <button className="px-2 account-outline m-1">
            {shortenAddress(addr)}
        </button>
       
    );
}


export default TxnList;
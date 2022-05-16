import { viewAddressLink } from "../hooks/useExplorer";
import Token from "./Token";

export default function TokenStack(tokens) {
    return (<div className="">
        <div className={`py-3 flex flex-row gap gap-1 avatar-group -space-x-5 hover:-space-x-2`}>
            {tokens.tokens.map((token,i) => {return(
                    // <a href={viewAddressLink(token)}>
                    <Token token={token} />
                    // </a>
                
            )})}
        </div>
    </div>
    );
}
import {useContext} from "react";
import {MessageContext} from "../App";

export function Message() {
    const message
        = useContext(MessageContext);
    return (
        <div>
            <br/><br/>
            {message}
        </div>
    );
}
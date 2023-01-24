import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
    return (
        <div>
            <h1>
                Hello From ChildA 
                <ChildB />
            </h1>
        </div>
    );
}

export default ChildA
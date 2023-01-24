import React from "react";
import ChildC from "./ChildC";

const ChildB = () => {
    return (
        <div>
            <h2>
                Hello from Child B 
                <ChildC/>
            </h2>
        </div>
    );
};

export default ChildB;
import React from "react";
// import ChildC from "./ChildC";
import ChildD from "./ChildD";

const ChildB = () => {
    return (
        <div>
            <h2>
                Hello from Child B
                {/* <ChildC/>  */}
                <ChildD/>
            </h2>
        </div>
    );
};

export default ChildB;
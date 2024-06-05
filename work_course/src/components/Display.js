import React from "react";
import "./styles/Display.css";

const Display = ({ input, answer }) => {
    const displayValue = answer ? `${input} = ${answer}` : input;

    return (
        <div className="display">
            <input
                type="text"
                className={`input ${answer ? "small" : ""}`}
                value={displayValue}
                placeholder="0"
                readOnly
            />
        </div>
    );
};

export default Display;

import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        "^", "(", ")", "√", "x²", "AC", "⌫", "log", "÷", "%",
        "7", "8", "9", "x", "x³",
        "4", "5", "6", "-", "³√",
        "1", "2", "3", "+", "!",
        "±", "0", ".", "="
    ];

    return (
        <div className="show-btn">
            {buttons.map((btn, idx) => (
                <button
                    key={idx}
                    className={`btn ${["AC", "⌫", "="].includes(btn) ? "clr" : "exp"}`}
                    onClick={() => onButtonClick(btn)}
                    id={btn === "=" ? "equalbtn" : ""}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Buttons;

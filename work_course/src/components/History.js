import React from "react";
import "./styles/History.css";

const History = ({ history }) => {
    return (
        <div className="history">
            <h2>История вычислений</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <span>{item.expression}</span> = <span>{item.result}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;

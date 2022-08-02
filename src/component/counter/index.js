import React, { useEffect, useState } from "react";
import "./counter.css";
import styles from './counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count === 0) {
        } else {
            setCount(count - 1);
        }
    };
    return (
        <div className={styles.wraper}>
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;

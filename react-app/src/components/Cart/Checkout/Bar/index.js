import React from "react";
import "./index.css";

export default function Bar(props) {
    return (
        <div className='Bar'>
            <div className='TotalPrice'>{props.totalPrice}</div>
            <button className='Button'>去支付</button>
        </div>
    );
}

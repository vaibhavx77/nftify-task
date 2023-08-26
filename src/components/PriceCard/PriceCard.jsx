import React from "react";
import styles from "../PriceCard/PriceCard.module.css";

function PriceCard(props){
    return <>
    <div className="card">
    <div className="details">
        <div className="row">
            <h3>{props.heading}</h3>
        </div>
        <div className="row">
            <p>Native</p><p>{props.native}</p>
        </div>
        <div className="row">
            <p>USD</p><p>{props.usd}</p>
        </div>
    </div>
        <div className="cardBtn">
        <button><props.icon /></button>
    </div>
    
        
    </div>

    </>
}

export default PriceCard;
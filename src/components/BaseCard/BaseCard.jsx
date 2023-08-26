import React from "react";
import styles from "../BaseCard/BaseCard.module.css";

function BaseCard(props){
    return <>
    <div className="card">
    <div className="details">
        <div className="row">
            <h3>{props.heading}</h3>
        </div>
        <div className="row">
            <p>Name</p><p>{props.name}</p>
        </div>
        <div className="row">
            <p>Symbol</p><p>{props.symbol}</p>
        </div>
        <div className="row">
            <p>Address</p><p>{props.address}</p>
        </div>
    </div>
        <div className="cardBtn">
        <button><props.icon /></button>
        </div>
    
        
    </div>

    </>
}


export default BaseCard;
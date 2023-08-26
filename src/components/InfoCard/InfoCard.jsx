import React from "react";
import styles from "../InfoCard/InfoCard.module.css";


function InfoCard(props){
    return <>
    <div className="card">
    <div className="details">
        <div className="row">
            <h3>{props.heading}</h3>
        </div>
        <div className="row">
            <p>Pair created at</p><p>{props.created}</p>
        </div>
        <div className="row">
            <p>Symbol</p><p>{props.symbol}</p>
        </div>
        <div className="row">
            <p>Dex ID</p><p>{props.id}</p>
        </div>
        <div className="row">
            <p>Pair Address</p><p>{props.address}</p>
        </div>
    </div>
        <div className="cardBtn">
        <button><props.icon /></button>
        </div>
    
        
    </div>
        
    </>
}

export default InfoCard;
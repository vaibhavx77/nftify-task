import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Topnav from "../../components/Topnav/Topnav";
import styles from "./TokenAddress.module.css";
import CardGrid from "../../components/CardGrid/CardGrid";



function TokenAddress(props){
    
    
    
    
    return <>
    <div className="container">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="mainContent">
        <div className={styles.mainHead}>
         <Topnav filter={props.filterData}/>
        </div>
        <div className={styles.data}>
            <div className={styles.result}>
                <h1>Token Search Results</h1>
            </div>
            <div className={styles.cards}>
                {props.data.map( (pair) =>{
                   return <CardGrid 
                        key = {pair.pairAddress}
                        created = {new Date(pair.pairCreatedAt).toLocaleString()}
                        basicSymbol = {pair.baseToken.symbol}
                        id = {pair.dexId}
                        address= {pair.pairAddress}
                        baseName = {pair.baseToken.name}
                        baseSymbol={pair.baseToken.symbol}
                        baseAddress={pair.baseToken.address}
                        quoteName = {pair.quoteToken.name}
                        quoteSymbol={pair.quoteToken.symbol}
                        quoteAddress={pair.quoteToken.address}
                        native = {pair.priceNative}
                        usd={pair.priceUsd}


                    />
                })}
            </div>
        </div>

        </div>
        
        </div>
        
    
    
    </>
}


export default TokenAddress;

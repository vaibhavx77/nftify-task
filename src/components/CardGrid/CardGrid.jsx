import React from "react";
import styles from "../CardGrid/CardGrid.module.css";
import InfoCard from "../InfoCard/InfoCard";
import BaseCard from "../BaseCard/BaseCard";
import QuoteCard from "../QuoteCard/QuoteCard";
import PriceCard from "../PriceCard/PriceCard";
import { AiOutlineInfoCircle } from 'react-icons/Ai';
import { MdOutlineToken } from 'react-icons/Md';
import { BsCurrencyDollar } from 'react-icons/Bs';
function CardGrid(props){
    return <>
    <div className={styles.cardRow}>
        <InfoCard heading="Basic Info" created={props.created} symbol={props.basicSymbol} id={props.id} address={props.address} icon={AiOutlineInfoCircle}/>
        <BaseCard heading="Base Token" name={props.baseName} symbol={props.baseSymbol} address={props.baseAddress} icon={MdOutlineToken}/>
        <QuoteCard heading="Quote Token" name={props.quoteName} symbol={props.quoteSymbol} address={props.quoteAddress} icon={MdOutlineToken}/>
        <PriceCard heading="Price" native={props.native} usd={props.usd}  icon={BsCurrencyDollar}/>
    </div>

    </>
}

export default CardGrid;
import React, { useState } from "react";
import { RxDashboard } from 'react-icons/Rx';
import styles from "./SideBtn.module.css";

function SideBtn(props){
    const [bgColor, setBgColor] = useState(false)
    function mouseEnter(){
        setBgColor(true);
    }
    function mouseLeave(){
        setBgColor(false);
    }




    return <>
    
        <h3 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{backgroundColor : bgColor && "#F30050" }} className={styles.menu}><props.icon /> {props.name}</h3> 
    
 
    </>
}



export default SideBtn;
import React from "react";
import styles from "./Topnav.module.css";

function Topnav(props){
    return <>
    <div className={styles.search}>
     <input onChange={props.filter} type="text" placeholder="Search"/> 
    </div>
     
     <div className={styles.connectBtn}>
        <button>Connect</button>
     </div>
    </>
}

export default Topnav;
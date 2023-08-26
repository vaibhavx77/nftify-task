import React from "react";
import { PiIntersectSquareBold } from 'react-icons/Pi';
import { MdToken } from 'react-icons/Md';
import { RiNftFill } from 'react-icons/Ri';

import SideBtn from "../SideBtn/SideBtn";
import styles from "./Sidebar.module.css";

function Sidebar(){
    const navLinks = [{
        icon: MdToken,
        text: "Token Address",
        link: "/"
    },
    {
        icon: PiIntersectSquareBold,
        text: "Pair Address",
        link: "/pair-address"
    }
    

]
    return <>
    <div className={styles.sideItems}>
        <div className={styles.logo}>
            <h1 className={styles.logoName}><RiNftFill />NFTify</h1>
        </div>
        <div className={styles.menuItems}>
            <SideBtn icon={MdToken} name= "Token Address"/>
            <SideBtn icon={PiIntersectSquareBold} name= "Pair Address"/> 
            
        </div>
    </div>
    </>
}


export default Sidebar;
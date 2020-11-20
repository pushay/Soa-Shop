import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import NavigationMenuList from '../NavigationMenuList/NavigationMenuList';



function HamburgerMenu() {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    return(
        <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerMenuDiv}>
                <div className={styles.hamburgerMenuIconContainer}>
                    <svg onClick={()=> setShowHamburgerMenu(!showHamburgerMenu)}  className={styles.hamburgerMenuIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fill: showHamburgerMenu ? '#fff' : 'black'}} width="24" height="24" viewBox="0 0 32 32">
                        <title>menu</title>
                        <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
                    </svg>
                </div>
                <div style={{display: showHamburgerMenu ? 'block' : 'none'}} className={styles.hamburgerMenuBackground}>
                    <ul className={styles.hamburgerMenuList}>
                        <NavigationMenuList  classNameList={styles.hamburgerMenuList} onClick={() => setShowHamburgerMenu(false)} navigation='NavigationHamburger' />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
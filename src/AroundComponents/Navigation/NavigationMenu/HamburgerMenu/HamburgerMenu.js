import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import {Link} from "react-router-dom";

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
                        <Link onClick={()=> setShowHamburgerMenu(false)} className={styles.link} to='/'>Home</Link>
                        <Link onClick={()=> setShowHamburgerMenu(false)} className={styles.link} to='/choose-clothes/women-collection'>Women</Link>
                        <Link onClick={()=> setShowHamburgerMenu(false)} className={styles.link} to='/choose-clothes/men-collection'>Men</Link>
                        <Link onClick={()=> setShowHamburgerMenu(false)} className={styles.link} to='/'>Campaign</Link>
                        <Link onClick={()=> setShowHamburgerMenu(false)} className={styles.link} to='/shopping-cart'>Shopping Bag</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
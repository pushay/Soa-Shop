import React, {useEffect} from 'react';
import styles from './NavigationMenu.module.css';
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';


function NavigationMenu() {
     const changeNavHandler = (event) => {
         if (event.target.scrollingElement.scrollTop > 1) { 
            const change = document.getElementById('navId');
            change.style.top = '0';
            change.style.borderBottom = '0.5px solid rgb(218, 214, 214)'
         }
         else if (event.target.scrollingElement.scrollTop < 100) {
            const change = document.getElementById('navId');
            change.style.top = '2.7rem';
            change.style.borderBottom= 'none'
         }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNavHandler);
        return (() => {
            window.removeEventListener('scroll', changeNavHandler)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
       <div id='navId' style={{ backgroundColor: '#fff' }} className={styles.navigationMenu} >
            <div className={styles.navigationMenuPrimary}>
                <ul className={styles.navigationMenuPrimaryList}>
                    <li className={styles.linkBlack}>
                        <Link className={styles.link} to="/choose-clothes/women-collection">Women</Link>
                    </li>
                    <li className={styles.linkBlack}>
                        <Link className={styles.link} to="/choose-clothes/men-collection">Men</Link >
                    </li>
                    <li className={styles.linkBlack}>
                        <Link className={styles.link} to="/Soa-Shop">Campaign</Link>
                    </li>
                </ul>
           </div>
           <div className={styles.navigationMenuLogo}>
                <h1 className={styles.navigationMenuLogoHeader}>Soa Shop</h1>
           </div>
           <div className={styles.navigationMenuSecondary}>
                <ul className={styles.navigationMenuSecondaryList}>
                    <Link to='/Soa-Shop'>
                        <svg className={styles.svgHome} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>home</title>
                        <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                        </svg>
                    </Link>
                    <Link to='/shopping-cart'>
                        <svg className={styles.svgShoppingCard} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>cart</title>
                            <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path>
                        </svg>
                    </Link>
                </ul>
           </div>
           <HamburgerMenu />
       </div>
    )
}

export default NavigationMenu

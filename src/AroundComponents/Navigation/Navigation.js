import React from 'react';
import styles from './Navigation.module.css';
import NavigationMenu from './NavigationMenu/NavigationMenu'

function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigationNews}>
               <p className={styles.navigationNews__text}>Due to spread of coronavirus we announce that all purchases made with store pickup are changed to courier service with a charge of 6$. </p>
            </div>
        <NavigationMenu />
       </div>
    )
}

export default Navigation

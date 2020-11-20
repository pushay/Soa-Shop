import React from 'react';
import styles from './Navigation.module.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import NavigationNews from './NavigationNews/NavigationNews';
import NavigationCredits from './NavigationCredits/NavigationCredits';

function Navigation(props) {

    if (props.position == "main"){
        return (
            <div className={styles.navigation}>
                <NavigationNews />
                <NavigationMenu position="main" />
           </div>
        )
    }

    if (props.position == "bottom"){
        return(
            <div className={styles.navigationBottomBlock}>
            <div className={styles.navigationBottomBlockOf2}>
                <NavigationMenu position="bottom"/>
            </div>
            <NavigationCredits/>
        </div>
        )
    }
}

export default Navigation

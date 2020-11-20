import React from 'react';
import styles from './NavigationNews.module.css';

function NavigationNews(){
    return(
        <div className={styles.navigationNews}>
            <p className={styles.navigationNews__text}>Due to spread of coronavirus we announce that all purchases made with store pickup are changed to courier service with a charge of 6$. </p>
        </div>
    )
}

export default NavigationNews
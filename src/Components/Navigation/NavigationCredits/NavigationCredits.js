import React from 'react';
import Svg from '../../Svg/Svg';
import styles from './NavigationCredits.module.css';
import NavigationCreditsText from './NavigationCreditsText';

function NavigationCredits(){
    return(
        <div className={styles.navigationBottomMedia}>
                 <p className={styles.navigationBottomText}>
                    Keep up to date with the latest trends and news from Soa Shop.
                 </p>
                 <div className={styles.navigationBottomMediaContacts}>
                    {NavigationCreditsText.NavigationCreditsText.map((svg,index)=>{
                        return(
                            <Svg element={svg} key={index} />
                        )
                    })}
                 </div>
                 <div className={styles.navigationBottomAuthor}>
                    <p className={styles.navigationBottomText}>
                        Dominika Sobocińska
                    </p> 
                    <div className={styles.credits}>
                        <p>Icons made by <a className={styles.creditsText} href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        </p>
                    </div> 
                 </div>
            </div>
    )
}

export default NavigationCredits
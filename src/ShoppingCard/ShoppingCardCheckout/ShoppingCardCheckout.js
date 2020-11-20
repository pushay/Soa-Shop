import React from 'react';
import styles from './ShoppingCardCheckout.module.css';
import {Link} from 'react-router-dom';
import ShoppingCardInformation from '../ShoppingCardInformation/ShoppingCardInformation';

function ShoppingCardCheckout(props){
    return(
        <div className={styles.shoppingCardCheckout}>
                <h1 className={styles.shoppingCardAlertHeader}>ORDER SUMMARY</h1>
                <ShoppingCardInformation classDiv={styles.shoppingCardCheckoutTotal} classMain={styles.shoppingCardText} classText={styles.shoppingCardText} main='SUBTOTAL:' text={props.Subtotal} />
                <div className={styles.shoppingCardCheckoutButtons}>
                    <Link to='/chosenCloth'>
                        <button className={styles.shoppingCardButton}>Go back</button>
                    </Link>
                    <button className={styles.shoppingCardButton}>
                        Checkout
                    </button>
                </div>
        </div>
    )
}

export default ShoppingCardCheckout
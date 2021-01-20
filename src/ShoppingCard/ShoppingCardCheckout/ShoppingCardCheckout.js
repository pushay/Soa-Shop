import React from 'react';
import styles from './ShoppingCardCheckout.module.css';
import ShoppingCardInformation from '../ShoppingCardInformation/ShoppingCardInformation';
import Button from '../../Components/Button/Button';
import {Link} from 'react-router-dom';

function ShoppingCardCheckout(props){
    return(
        <div className={styles.shoppingCardCheckout}>
                <h1 className={styles.shoppingCardAlertHeader}>ORDER SUMMARY</h1>
                <ShoppingCardInformation classDiv={styles.shoppingCardCheckoutTotal} classMain={styles.shoppingCardText} classText={styles.shoppingCardText} main='SUBTOTAL:' text={props.Subtotal} />
                <div className={styles.shoppingCardCheckoutButtons}>
                    <Link to='/chosenCloth'>
                    <Button svg='no' className={styles.shoppingCardButton} choose='Go back'/>
                    </Link> 
                    <Button svg='no' className={styles.shoppingCardButton} choose='Checkout'/>
                </div>
        </div>
    )
}

export default ShoppingCardCheckout
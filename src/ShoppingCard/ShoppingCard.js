import React, {useState, useEffect} from 'react';
import styles from './ShoppingCard.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'
import ShoppingCardInformation from './ShoppingCardInformation/ShoppingCardInformation';
import ShoppingCardCheckout from './ShoppingCardCheckout/ShoppingCardCheckout';
import ShoppingCardItem from './ShoppingCardItem/ShoppingCardItem';


function ShoppingCard(props) {

     const [Products, setProducts] = useState([]);
     const [Subtotal, setSubtotal] = useState(0);

    useEffect(()=> {
        setProducts(props.imageIdShop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const RemoveProductHandler = (index, quantity) => {
        let list = []
        list = [...Products]
        if (quantity > 1) {
            list[index].quantity = quantity - 1;
        } else if (quantity === 1) {
             list.splice(index, 1)
        }
        setProducts(list)
    }

    useEffect(()=> {
        let sum = 0;
        // eslint-disable-next-line array-callback-return
        Products.map(prod => {
            console.log(prod.price)
            sum = sum + (prod.price * prod.quantity)
        })
        setSubtotal(sum)
        props.onStoreState(Products)
    },[Products])

    return (
        <div className={styles.shoppingCardSection}>
            <div className={styles.shoppingCardInside}>
                {Products.length > 0 ?
                    <div className={styles.shoppingCardList}>
                        {Products.map((element, index) => (
                            <ShoppingCardItem RemoveProductHandler={RemoveProductHandler}  element={element} index={index} /> 
                        ))}
                          
                    </div>
                :
                    <ShoppingCardInformation classDiv={styles.shoppingCardBlockAlert} classMain={styles.shoppingCardAlertHeader} classText={styles.shoppingCardAlertText} main='YOUR SHOPPING BAG IS EMPTY!' text='Please add items to your bag' />
                }
            </div>
            <ShoppingCardCheckout Subtotal={Subtotal}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        imageIdShop:state.shop.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
   onStoreState:(Products) => dispatch({
    type:actionTypes.STORE_STATE,
    stateProd:Products
}),
}}

export default connect(mapStateToProps,  mapDispatchToProps) (ShoppingCard)


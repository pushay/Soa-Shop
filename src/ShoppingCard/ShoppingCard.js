import React, {useState, useEffect} from 'react';
import styles from './ShoppingCard.module.css';
import { connect } from 'react-redux';
import text from '../ChooseClothes/chooseClothesListOfClothesText'


function ShoppingCard(props) {

     const [Products, setProducts] = useState([]);
     const [Subtotal, setSubtotal] = useState(0);

    useEffect( ()=> {
        setProducts(props.imageIdShop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const RemoveProductHandler = (index, quantity) => {
        let list = []
        list = [...Products]
        if (quantity.length > 1) {
            list[index].quantity = quantity - 1;
        } else if (quantity === 1) {
             list.splice(index, 1)
        }
        setProducts(list)
    }

    useEffect(()=> {
        let sum = 0;
        // eslint-disable-next-line array-callback-return
        Products.map( prod => {
            sum = prod.price + sum
        } )
        setSubtotal(sum)
    },[Products])

    return (
        <div className={styles.shoppingCardSection}>
            <div className={styles.shoppingCardInside}>
                {Products.length > 0 ?
                    <div className={styles.shoppingCardList}>
                        {props.imageIdShop.map((element, index) => (
                             <div key={index} className={styles.shoppingCardListItem}>
                                <img className={styles.shoppingCardImage} src={text.AllClothes[element.id].img} alt='' />
                                <div className={styles.shoppingCardBlock}>
                                    <h1 className={styles.shoppingCardHeader}>{text.AllClothes[element.id].name}</h1>
                                    <div className={styles.shoppingCardSortBlock}>
                                        <p className={styles.shoppingCardListText}>Price: </p>
                                        <p className={styles.shoppingCardListText}>{text.AllClothes[element.id].price} $</p>
                                    </div>
                                    <div className={styles.shoppingCardSortBlock}>
                                        <p  className={styles.shoppingCardListText}>Size: </p>
                                        <p className={styles.shoppingCardListText}>{element.size}</p>
                                    </div>
                                    <div className={styles.shoppingCardSortBlock}>
                                        <p className={styles.shoppingCardListText}>Quality: </p>
                                        <p className={styles.shoppingCardListText}>{element.quality}</p>
                                    </div>
                                    <div className={styles.shoppingCardSortBlock}>
                                        <p className={styles.shoppingCardListText}>Quantity:</p>
                                        <p className={styles.shoppingCardListText}>{element.quantity}</p>
                                    </div>
                                    <div onClick={() => RemoveProductHandler(index, element.quantity)} className={styles.shoppingCardButtonRemoveBlock}>
                                        <span className={styles.shoppingCardRemoveSpan} style={{fontSize:'30px'}}>&#8864;</span>
                                    </div>     
                                </div>  
                            </div>   
                        ))}
                          
                    </div>
                :
                    <div className={styles.shoppingCardBlockAlert}>
                        <h1 className={styles.shoppingCardAlertHeader}>YOUR SHOPPING BAG IS EMPTY!</h1>
                        <p className={styles.shoppingCardAlertText}>Please add items to your bag or log in to access them</p>
                    </div>
                }
            </div>
            <div className={styles.shoppingCardCheckout}>
                <h1 className={styles.shoppingCardAlertHeader}>ORDER SUMMARY</h1>
                <div className={styles.shoppingCardCheckoutTotal}>
                    <p className={styles.shoppingCardText}>SUBTOTAL</p>
                    <p className={styles.shoppingCardText}>{Subtotal}$</p>
                </div>
                <div className={styles.shoppingCardCheckoutButtons}>
                    <button className={styles.shoppingCardButton}>Go back</button>
                    <button className={styles.shoppingCardButton}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        imageIdShop:state.shop.list
    }
}

export default connect(mapStateToProps) (ShoppingCard)


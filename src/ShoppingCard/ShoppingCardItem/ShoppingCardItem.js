import React from 'react';
import clothesText from '../../ChooseClothes/chooseClothesListOfClothesText';
import styles from './ShoppingCardItem.module.css';
import ShoppingCardInformation from '../ShoppingCardInformation/ShoppingCardInformation';

function ShoppingCardItem(props){

    const matchPhoto = (id) => {
        let image;
        clothesText.AllClothes.map((thing) => {
            if (thing.id == id) {
                image = thing.img
            }
            return thing;
        })
        return image
    }

    return(
        <div key={props.index} className={styles.shoppingCardListItem}>
            <img className={styles.shoppingCardImage} src={matchPhoto(props.element.id)} alt='' />
            <div className={styles.shoppingCardBlock}>
                <h1 className={styles.shoppingCardHeader}>{props.element.name}</h1>
                <ShoppingCardInformation classDiv={styles.shoppingCardSortBlock} classMain={styles.shoppingCardListText} classText={styles.shoppingCardListText} main='Price: ' text={props.element.price}  />
                <ShoppingCardInformation classDiv={styles.shoppingCardSortBlock} classMain={styles.shoppingCardListText} classText={styles.shoppingCardListText} main='Size: ' text={props.element.size}  />
                <ShoppingCardInformation classDiv={styles.shoppingCardSortBlock} classMain={styles.shoppingCardListText} classText={styles.shoppingCardListText} main='Quality: ' text={props.element.quality}  />
                <ShoppingCardInformation classDiv={styles.shoppingCardSortBlock} classMain={styles.shoppingCardListText} classText={styles.shoppingCardListText} main='Quantity: ' text={props.element.quantity}  />
                <div onClick={() => props.RemoveProductHandler(props.index, props.element.quantity)} className={styles.shoppingCardButtonRemoveBlock}>
                    <span className={styles.shoppingCardRemoveSpan} style={{fontSize:'30px'}}>&#8864;</span>
                </div>     
            </div>  
        </div>   
    )
}

export default ShoppingCardItem
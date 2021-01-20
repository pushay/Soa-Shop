import React from 'react';
import styles from './ClothesShopCardPopUp.module.css'
import { connect } from 'react-redux';
import ShoppingCardInformation from '../../ShoppingCard/ShoppingCardInformation/ShoppingCardInformation';
import clothesText from '../chooseClothesListOfClothesText';

function ClothesShopCard(props){
    
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
       
        <div className={styles.clothesShopCardPopUpBlock} style={{ display: props.open ? 'block' : 'none'}}>
            <div className={styles.clothesShopCardPopUpList}>
                {props.imageIdShop.map((thing,index) =>(
                    <div key={index} className={styles.clothesShopCardPopUpItem}>
                        <img src={matchPhoto(thing.id)} alt='' className={styles.clothesShopCardPopUpImage}/>
                        <div className={styles.clothesShopCardPopUpTextArea}>
                            <h1 className={styles.clothesShopCardPopUpHeader}>{thing.name}</h1>
                                <ShoppingCardInformation classDiv={styles.clothesShopCardPopUpLittleBlock} classMain={styles.clothesShopCardPopUpText} classText={styles.clothesShopCardPopUpText} main='Price: ' text={thing.price + `$`}  />
                                <ShoppingCardInformation classDiv={styles.clothesShopCardPopUpLittleBlock} classMain={styles.clothesShopCardPopUpText} classText={styles.clothesShopCardPopUpText} main='Size: ' text={thing.size}  />
                                <ShoppingCardInformation classDiv={styles.clothesShopCardPopUpLittleBlock} classMain={styles.clothesShopCardPopUpText} classText={styles.clothesShopCardPopUpText} main='Quality: ' text={thing.quality}  />
                                <ShoppingCardInformation classDiv={styles.clothesShopCardPopUpLittleBlock} classMain={styles.clothesShopCardPopUpText} classText={styles.clothesShopCardPopUpText} main='Quantity: ' text={thing.quantity}  />
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        imageIdShop:state.shop.list
    }
}


export default connect(mapStateToProps) (ClothesShopCard)
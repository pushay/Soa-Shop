import React from 'react';
import styles from './ClothesShopCardPopUp.module.css'
import { connect } from 'react-redux';
import text from '../chooseClothesListOfClothesText'



function ClothesShopCard(props){

    return(
        <div className={styles.clothesShopCardPopUpBlock} style={{ display: props.open ? 'block' : 'none'}}>
            <div className={styles.clothesShopCardPopUpList}>
                {props.imageIdShop.map((thing,index) => (
                    <div key={index} className={styles.clothesShopCardPopUpItem}>
                        <img src={text.AllClothes[thing.id].img} alt='' className={styles.clothesShopCardPopUpImage}/>
                        <div className={styles.clothesShopCardPopUpTextArea}>
                            <h1 className={styles.clothesShopCardPopUpHeader}>{text.AllClothes[thing.id].name}</h1>
                                <div className={styles.clothesShopCardPopUpLittleBlock}>
                                    <p className={styles.clothesShopCardPopUpText}>Price:  </p>
                                    <p className={styles.clothesShopCardPopUpText}>{text.AllClothes[thing.id].price}$</p>
                                </div>
                                <div className={styles.clothesShopCardPopUpLittleBlock}>
                                    <p className={styles.clothesShopCardPopUpText}>Size:  </p>
                                    <p className={styles.clothesShopCardPopUpText}>{thing.size}</p>
                                </div>
                                <div className={styles.clothesShopCardPopUpLittleBlock}>
                                    <p className={styles.clothesShopCardPopUpText}>Quality:  </p>
                                    <p className={styles.clothesShopCardPopUpText}>{thing.quality}</p>
                                </div>
                                <div className={styles.clothesShopCardPopUpLittleBlock}>
                                    <p className={styles.clothesShopCardPopUpText}>Quantity:  </p>
                                    <p className={styles.clothesShopCardPopUpText}>{thing.quantity}</p>
                                </div> 
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
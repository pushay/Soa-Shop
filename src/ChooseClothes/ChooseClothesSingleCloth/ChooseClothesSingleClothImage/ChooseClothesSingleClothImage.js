import React from 'react';
import styles from '../../ChooseClothes.module.css';
import { Link } from "react-router-dom";
import * as actionTypes from '../../../store/actions'
import { connect } from 'react-redux';
import clothesText from '../../chooseClothesListOfClothesText';

function ChooseClothesSingleClothImage(props){
   
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
        <div className={styles.chooseSingleClothImageBlock}>
        <img src={matchPhoto(props.id)} alt='' id={props.id} className={styles.chooseSingleClothImage} />
        <div className={styles.chooseSingleClothLinkBlock}>
            <Link to='/chosenCloth' onClick={()=> props.onStoreId(props.id)} className={styles.chooseSingleClothLinkImage}>QUICK SHOP</Link>
        </div>
    </div>
    )
}

const mapDispatchToProps= dispatch => {
    return {
        onStoreId: (id) => dispatch({
            type:actionTypes.STORE_ID,
            imageId: id
        })
    }
}

export default  connect(null, mapDispatchToProps)(ChooseClothesSingleClothImage);



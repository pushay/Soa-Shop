import React from 'react';
import styles from '../../ChooseClothes.module.css';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import * as actionTypes from '../../../store/actions'
import { connect } from 'react-redux';
import { compose } from 'redux';

function ChooseClothesSingleClothImage(props){
    return(
        <div className={styles.chooseSingleClothImageBlock}>
        <img src={props.image.img} alt={props.image.img}  id={props.image.id} className={styles.chooseSingleClothImage} />
        <div className={styles.chooseSingleClothLinkBlock}>
            <Link to='/chosenCloth' onClick={()=> props.onStoreId(props.image.id)} className={styles.chooseSingleClothLinkImage}>QUICK SHOP</Link>
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

export default compose(
    withRouter, connect(null, mapDispatchToProps)
)(ChooseClothesSingleClothImage);



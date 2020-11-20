import React, { useEffect } from 'react';
import styles from './ChosenCloth.module.css';
import Auxiliary from '../../HOC/Auxiliary';
import { connect } from 'react-redux';
import {useState} from 'react'
import text from '../chooseClothesListOfClothesText';
import * as actionTypes from '../../store/actions';
import { Link } from "react-router-dom";
import ClothesShopCard from '../ClothesShopCard/ClothesShopCardPopUp'
import ChosenClothOptions from './ChosenClothOptions/ChosenClothOptions';


function ChoosenCloth(props) {

    const [sortSize, setSortSize] = useState(0);
    const [sortQuality, setSortQuality] = useState(0)
    const [showShopCard, setShowShopCard] = useState(false)
    const [disabledSize, setDisabledSize] = useState(false)
    const [disabledQuality, setDisabledQuality] = useState(false)

    useEffect(() => {
        if (props.sortValue !== 0) setSortSize(props.sortValue);
        if (props.sortQuality !==0) setSortQuality(props.sortQuality)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=> {
        if (disabledSize === true && sortSize !== 0) {
           setDisabledSize(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortSize])

    useEffect(()=> {
        if (disabledQuality === true&& sortQuality !== 0) {
           setDisabledQuality(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortQuality])



    const SortSizeHandler = (span) => {
        setSortSize(span)
    }

    const SortQualityHandler = (spanQuality) => {
        setSortQuality(spanQuality)
    }

    const ShowShopCardHandler = () => {
        setShowShopCard(true);
        setTimeout(() => {
            setShowShopCard(false)
        }, 6000)
    }


    return (
        <div className={styles.seeChosenClothSection}>
            <Auxiliary>
                    <div className={styles.seeChosenClothBlock}>
                            <div className={styles.seeChosenCloth}>
                               <img alt=''className={styles.seeChosenClothImage} key={text.AllClothes[props.imageId].id} src={text.AllClothes[props.imageId].img} /> 
                            </div>
                            <div className={styles.seeChosenDescription}>
                                <h1 className={styles.seeChosenTitleHeader}>{text.AllClothes[props.imageId].name}</h1>
                                <ChosenClothOptions option='Choose size' header='SIZE: ' classDiv={styles.seeChosenSizeSpanBlock} disabledSize={disabledSize} classSpan={styles.seeChosenSizeSpan} sortSize={sortSize} sendValue={SortSizeHandler} />
                                <ChosenClothOptions option='Choose quality' header='Quality: '                              classDiv={styles.seeChosenSizeSpanBlock} disabledQuality={disabledQuality} sortQuality={sortQuality} sendValue={SortQualityHandler} classSpan={styles.seeChosenQualitySpan} />
                                <div className={styles.seeChosenTextBlock}>
                                        <h1 className={styles.seeChosenHeader}>
                                            Description
                                        </h1>
                                        <div className={styles.seeChosenTextElement}>
                                            {text.AllClothes[props.imageId].description}
                                        </div>
                                </div>
                                <div className={styles.seeChosenButtonBlock}>
                                    <button onClick={()=> {
                                            if (sortSize === 0) setDisabledSize(true);
                                            if (sortQuality === 0) setDisabledQuality(true);
                                            if (sortSize === 0 || sortQuality === 0) return;

                                            props.onGetShoppIds(props.imageId, sortSize, sortQuality, text.AllClothes[props.imageId].price);
                                            ShowShopCardHandler()
                                        }}
                                        className={styles.seeChosenButton}>Add to cart
                                    </button>
                                    <Link to={"/shopping-cart"} className={styles.shoppingCardLink}>
                                        Go to cart
                                    </Link>
                                </div>
                            </div>
                    </div>
            </Auxiliary>
            <ClothesShopCard open={showShopCard} />
    </div>
    )
}

const mapStateToProps = state => {
    return {
        imageId:state.img.imageId,
        sortValue:state.sort.sortValue,
        sortQuality:state.sortQual.sortQuality,
        imageIdShop:state.shop.list

    }
}

const mapDispatchToProps = dispatch => {
    return {
    onStoreSort:(sortVal) => dispatch({
        type:actionTypes.STORE_SORT,
        sortValue: sortVal
    }),
    onStoreSortQuality:(sortQual) => dispatch({
        type:actionTypes.STORE_SORT_QUALITY,
        sortQuality: sortQual
    }),
    onStoreId: (id) => dispatch({
        type:actionTypes.STORE_ID,
        imageId: id
    }),
    onGetShoppIds:(id, size, quality, price) => dispatch({
        type:actionTypes.GET_SHOPPCARD,
        imageIdShop:{id, size, quality, price}
    })
}}

export default connect(mapStateToProps, mapDispatchToProps)(ChoosenCloth)
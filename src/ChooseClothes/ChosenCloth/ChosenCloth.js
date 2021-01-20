import React, { useEffect } from 'react';
import styles from './ChosenCloth.module.css';
import { connect } from 'react-redux';
import {useState} from 'react'
import * as actionTypes from '../../store/actions';
import { Link, withRouter } from "react-router-dom";
import ClothesShopCard from '../ClothesShopCard/ClothesShopCardPopUp'
import ChosenClothOptions from './ChosenClothOptions/ChosenClothOptions';
import Button from '../../Components/Button/Button';
import clothesText from '../chooseClothesListOfClothesText';


function ChoosenCloth(props) {

    const [sortSize, setSortSize] = useState(0);
    const [sortQuality, setSortQuality] = useState(0)
    const [showShopCard, setShowShopCard] = useState(false)
    const [disabledSize, setDisabledSize] = useState(false)
    const [disabledQuality, setDisabledQuality] = useState(false)
    const [sqlData, setsqlData] = useState([])

    useEffect(() => {

        fetch('https://database-test-832.herokuapp.com/', {
            method: 'POST',
            mode: 'cors',
        }).then(response => response.json()).then(data => {
            setsqlData(data)
        })

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

    const SortHandler = (span, sort) => {
        if (sort == 'size'){
              setSortSize(span)
        }
        else {
            setSortQuality(span)
        }
    }

    const ShowShopCardHandler = () => {
        setShowShopCard(true);
        setTimeout(() => {
            setShowShopCard(false)
        }, 6000)
    }

    const addingItems = () => {
        if (sortSize === 0) setDisabledSize(true);
        if (sortQuality === 0) setDisabledQuality(true);
        if (sortSize === 0 || sortQuality === 0) return;

        if (price !='' && name !=''){
            props.onGetShoppIds(name,props.imageId, sortSize, sortQuality, price);
            ShowShopCardHandler()
        }
     
    }

    const matchInfo = (id, type, data) => {
        let thing;
        data.map((element) => {
            if (element.id == id){
                thing = element[type];
            }
            return element;
        })
        return thing;
    }
    
    const price = matchInfo(props.imageId, 'price', sqlData);
    const name = matchInfo(props.imageId, 'name', sqlData); 
   

    return (
        <div className={styles.seeChosenClothSection}>
            <div className={styles.seeChosenClothBlock}>
                <div className={styles.seeChosenCloth}>
                    <img alt='' className={styles.seeChosenClothImage} key={sqlData} src={matchInfo(props.imageId, 'img', clothesText.AllClothes)} /> 
                </div>
                <div className={styles.seeChosenDescription}>
                    <h1 className={styles.seeChosenTitleHeader}>{matchInfo(props.imageId, 'name',sqlData)}</h1>
                    <ChosenClothOptions option='Choose size' header='SIZE: ' classDiv={styles.seeChosenSizeSpanBlock} disabledSize={disabledSize} classSpan={styles.seeChosenSizeSpan} sortSize={sortSize} sort='size' sendValue={SortHandler} />
                    <ChosenClothOptions option='Choose quality' header='Quality: ' sort='quality' classDiv={styles.seeChosenSizeSpanBlock} disabledQuality={disabledQuality} sortQuality={sortQuality} sendValue={SortHandler} classSpan={styles.seeChosenQualitySpan} />
                    <div className={styles.seeChosenPrice}>
                        <h1 className={styles.seeChosenHeader}>Price: </h1>
                        <p className={styles.seeChosenText} style={{marginLeft:'0.5rem'}}>{matchInfo(props.imageId, 'price', sqlData)}$</p>
                    </div>    
                    <div className={styles.seeChosenTextBlock}>
                        <h1 className={styles.seeChosenHeader}>
                            Description
                        </h1>
                        <div className={styles.seeChosenTextElement}>
                            {matchInfo(props.imageId, 'description', sqlData)}
                        </div>
                    </div>
                    <div className={styles.seeChosenButtonBlock}>
                        <Button svg='no' className={styles.seeChosenButton} choose='Add to cart' onClick={()=> {addingItems()}}/>
                            <Link to={"/shopping-cart"} className={styles.shoppingCardLink}>
                                Go to cart
                                </Link>
                    </div>
                </div>
            </div>
        <ClothesShopCard open={showShopCard} />
    </div>
    )
}

const mapStateToProps = state => {
    return {
        imageId:state.img.imageId,
        sortValue:state.sort.sortValue,
        sortQuality:state.sort.sortQuality,
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
    onGetShoppIds:(name, id, size, quality, price) => dispatch({
        type:actionTypes.GET_SHOPPCARD,
        imageIdShop:{name, id, size, quality, price}
    })
}}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(ChoosenCloth))
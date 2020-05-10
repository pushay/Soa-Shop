import React, { useEffect,useState} from 'react';
import styles from './ChooseClothes.module.css';
import { Link } from "react-router-dom";
import ChooseClothesDropdown from './ChooseClothesDropdown/ChooseClothesDropdown';
import text from './chooseClothesListOfClothesText';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actionTypes from '../store/actions'


let clothesWithDiscription = text.AllClothes

function ChooseClothes(props) {

    const [startState, setStartState] = useState(props.location.pathname);
    const [sortFilter, setSortFilter] = useState('');

    useEffect(() => {
        setStartState(props.location.pathname)
    }, [props.location.pathname])

    return (
    
        <div className={styles.chooseClothes}>
            <div className={styles.chooseClothesSidebar}>
                <div className={styles.chooseClothesOffers}>
                    <h1 className={styles.chooseClothesHeader}>Arrivals</h1>
                    <div className={styles.chooseClothesLinksBlock}>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/women-collection">Women</Link>
                        </li>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/men-collection">Men</Link>
                        </li>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/bestsellers">Bestsellers</Link>
                        </li>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/good-price">Good price</Link>
                        </li>
                    </div>
                </div>
                <div className={styles.chooseClothesByProduct}>
                    <h1 className={styles.chooseClothesHeader} >Shop by Product</h1>
                    <div className={styles.chooseClothesLinksBlock}>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/t-shirt">T-shirt</Link>
                        </li>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/jumpsuit">Jumpsuit</Link>
                        </li>
                        <li className={styles.chooseClothesItem}>
                            <Link className={styles.link} to="/choose-clothes/hoodie">Hoodie</Link>
                        </li>
                    </div>
                </div>
                <div className={styles.chooseClothesSortBlock}>
                    <h1 className={styles.chooseClothesHeader} >Filters and Sorts</h1>
                    <div className={styles.dropdownforSort}>
                        <ChooseClothesDropdown choose='Sort by' sortState={sortFilter} setSortState={setSortFilter}/>
                        <ChooseClothesDropdown choose='Choose size'/>
                        <ChooseClothesDropdown choose='Choose quality'/>
                    </div>
                </div>
            </div>
            <div className={styles.chooseClothesMain}>
                {clothesWithDiscription.filter(cloth => {
                    if (startState === '/choose-clothes/women-collection' && cloth.sex.includes('woman')) return true;
                    else if (startState === '/choose-clothes/men-collection' && cloth.sex.includes('man')) return true;
                    else if (startState === '/choose-clothes/bestsellers' && cloth.sorted === 'Bestsellers') return true;
                    else if (startState === '/choose-clothes/good-price' && cloth.price <= 25) return true;
                    else if (startState ==='/choose-clothes/t-shirt' && cloth.productType === 't-shirt') return true;
                    else if (startState ==='/choose-clothes/jumpsuit' && cloth.productType === 'jumpsuit') return true;
                    else if (startState ==='/choose-clothes/hoodie' && cloth.productType === 'hoodie') return true

                    else return false
                }).filter(cloth => {
                    if (sortFilter === '') return true;
                    else if (cloth.sorted === sortFilter) return true;
                    else return false
                }).map((image,index) => {
                    return (
                        <div className={styles.chooseSingleClothBlock}>
                            <div className={styles.chooseSingleClothImageBlock}>
                                <img src={image.img} alt={image.img} key={index} id={image.id} className={styles.chooseSingleClothImage} />
                                <div className={styles.chooseSingleClothLinkBlock}>
                                    <Link to='/chosenCloth' onClick={()=> props.onStoreId(image.id)} className={styles.chooseSingleClothLinkImage}>QUICK SHOP</Link>
                                </div>
                            </div>
                            <div className={styles.chooseSingleClothDescription}>
                                <div className={styles.chooseSingleClothMessage}>
                                    <Link  className={styles.chooseSingleClothLink}>
                                        <p to='/chosenCloth' className={styles.chooseSingleClothName}>{image.name}</p>
                                    </Link>
                                    <p className={styles.chooseSingleClothPrice}>{image.price}$</p>
                                </div>   
                            </div>    
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

 const mapStateToProps = state => {
    return {
        imageId:state.img.imageId
    }
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
    withRouter, connect(mapStateToProps, mapDispatchToProps)
)(ChooseClothes)
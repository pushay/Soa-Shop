import React, { useState} from 'react';
import styles from './ChooseClothesDropdown.module.css';
import text from './chooseClothesDropdownText'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import NavigationCreditsText from '../../Components/Navigation/NavigationCredits/NavigationCreditsText';

function Dropdown(props) {

    const [showDroplist, setShowDroplist] = useState(false);
    
    const [sortbyState, setSortbyState] = useState(false);
 
     const SortHandler = (id) => {
        setSortbyState(id)
    }

    const SortsforFilters = (filterValue) => {
        if (props.onClick) {
            props.onClick({...props.filters, 'sorted' : filterValue})
        }
    }

    const chooseSort = (element) => {
        if (props.choose === 'Choose size') {
            props.onStoreSort(element);
        }
        else if (props.choose === 'Choose quality') {
            props.onStoreSortQuality(element)
        }
        else if (props.choose === 'Sort by') {
                SortsforFilters(element)
        }
            SortHandler(element);
    }

    const style = {transform: props.showDroplist ? 'rotate(180deg)' : 'rotate(0deg)'}

    return (
         <div className={styles.chooseClothesSort}>
            <Button svgStyle={style} element={NavigationCreditsText.SortButton[0]} svg='yes' choose={props.choose} onClick={ () => setShowDroplist(!showDroplist)} className={styles.chooseClothesSortButton} showDroplist={showDroplist} />
            <div id='chooseClothesDivList' style={{ display: showDroplist ? 'block' : 'none' }} className={styles.chooseClothesDivList}>
            {
                text.SortClothes[props.choose].map(element => {
                    return (
                         <li onClick={() => {chooseSort(element)}} style={{backgroundColor: sortbyState === element ? 'rgb(26, 25, 25)' : 'white', color: sortbyState === element ? 'white' : 'black'}} id={element} key={element} value={element} className={styles.dropdownElement}>{element}</li>
                    )
                })
                }
            </div>
        </div> 
        
    )
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
    })
}}

export default connect(null, mapDispatchToProps)(Dropdown);

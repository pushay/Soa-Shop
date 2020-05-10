import React, { useState} from 'react';
import styles from './ChooseClothesDropdown.module.css';
import text from './chooseClothesDropdownText'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

function Dropdown(props) {

    const [showDroplist, setShowDroplist] = useState(false);
    
    const [sortbyState, setSortbyState] = useState(false);
 
     const SortHandler = (id) => {
        setSortbyState(id)
    }
    return (
         <div className={styles.chooseClothesSort}>
            <button onClick={() => setShowDroplist(!showDroplist)} className={styles.chooseClothesSortButton}>
                {props.choose}
                 <svg className={styles.chooseClothesSortButtonIcon} style={{transform: showDroplist ? 'rotate(180deg)' : ''}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" fill='rgb(41, 38, 39)' height="17" viewBox="0 0 32 32">
                    <title>circle-down</title>
                    <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"></path>
                    <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path>
                </svg>
            </button>
            <div id='chooseClothesDivList' style={{ display: showDroplist ? 'block' : 'none' }} className={styles.chooseClothesDivList}>
            {
                text.SortClothes[props.choose].map(element => {
                    if (element === 'clear Sort' && props.sortState === '') return null
                    return (
                         <li onClick={() => {
                            if (props.choose === 'Choose size') {
                                props.onStoreSort(element);
                            }
                            else if (props.choose === 'Choose quality') {
                                props.onStoreSortQuality(element)
                            }
                            else if (props.choose === 'Sort by') {
                                if (element === 'clear Sort') props.setSortState('');
                                else props.setSortState(element);
                            }
                                SortHandler(element);
                            }}
                            style={{backgroundColor: sortbyState === element ? 'rgb(26, 25, 25)' : 'white',
                         color: sortbyState === element ? 'white' : 'black'}} id={element} key={element} value={element} className={styles.dropdownElement}>{element}</li>
                    )
                    
                })
                }
            </div>
        </div> 
        
    )
}


const mapStateToProps = state => {
    return {
        sortValue:state.sort.sortValue,
        sortQuality:state.sortQual.sortQuality
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
    })
}}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);

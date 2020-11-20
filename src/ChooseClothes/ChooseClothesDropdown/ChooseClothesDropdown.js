import React, { useState} from 'react';
import styles from './ChooseClothesDropdown.module.css';
import text from './chooseClothesDropdownText'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import Svg from '../../Components/Svg/Svg';
import NavigationCreditsText from '../../Components/Navigation/NavigationCredits/NavigationCreditsText';

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
                <Svg className={styles.chooseClothesSortButtonIcon}  styled={{transform: showDroplist ? 'rotate(180deg)' : ''}} element={NavigationCreditsText.NavigationCreditsText[5]}/>
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

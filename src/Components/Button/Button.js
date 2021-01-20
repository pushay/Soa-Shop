import React from 'react';
import Svg from '../Svg/Svg';
import styles from '../../ChooseClothes/ChooseClothesDropdown/ChooseClothesDropdown.module.css'

function Button(props){
    return(
        <div style={{margin:props.clear ? '0 0 2rem 0' : ''}} className={props.className} onClick={props.onClick ? props.onClick : null}>
             <p style={{marginRight: props.choose ? '0.5rem' : ''}}>{props.choose}</p>
            {props.svg == 'yes' ? 
            <Svg className={styles.chooseClothesSortButtonIcon} style={props.svgStyle} element={props.element} ></Svg>
            : null    
        }
        </div>
    )
}

export default Button
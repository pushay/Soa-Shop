import React from 'react';
import NavigationMenuListText from './NavigationMenuListText';
import {Link} from 'react-router-dom';
import styles from './NavigationMenuList.module.css';
import Svg from '../../../Svg/Svg';

function NavigationMenuList(props){

    if (props.navigation == 'NavigationHamburger'){
        return(
            <div>
                {NavigationMenuListText.NavigationMenuList[props.navigation].map((element)=> {
                    return(
                        <Link className={styles.link2} onClick={props.onClick ? props.onClick : null} to={element.to} >{element.text}</Link>
                    )
                })}     
            </div>
        )
    }
    else
        return(
            <div style={{width:props.svg == 'yes' ? '110px' : ''}} className={props.with ? styles.NavigationBottomList :styles.navigationMenuPrimary} >
                <ul className={props.with ? styles.navigationBottomList :styles.navigationMenuPrimaryList} >
                    {props.with ? 
                    <h1 className={styles.navigationMenuList__header} >{props.with}</h1>
                     : null}
                     {NavigationMenuListText.NavigationMenuList[props.navigation].map((element,index) => {
                        return(
                            <li  key={index} style={{width:props.styled == 'chooseClothes' ? '100px' : '', marginLeft:props.styled == 'chooseClothes' ? '0.5rem' : '0' , marginRight:props.including == 'svg' ? '1rem' : '0'}} className={props.styling == 'normal' ? styles.navigationMenuList__element : styles.linkBlack}   >
                                <Link className={props.styling == 'normal' ? styles.navigationMenuList__link : styles.link} to={element.to}>
                                    {props.including == 'svg' ? <Svg element={element.svg} /> 
                                    :  element.text }
                                   </Link>
                            </li>
                        )
                        })}
                </ul>
            </div>
        )
        }

export default NavigationMenuList
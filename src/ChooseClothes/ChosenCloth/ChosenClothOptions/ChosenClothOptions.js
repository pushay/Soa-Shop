import React from 'react';
import styles from '../ChosenCloth.module.css'
import TextSize from '../../ChooseClothesDropdown/chooseClothesDropdownText';

function ChosenClothOptions(props){
    return(
        <div className={props.className}>
            <h1 className={styles.seeChosenHeader}>{props.header}</h1>
            <div className={props.classDiv}>
                {TextSize.SortClothes[props.option].map((span, index) => {
                    return(
                        <span key={index} style={{backgroundColor: props.sortSize === span ? 'rgb(26, 25, 25)' : 'white',
                        color: props.sortSize === span ? 'white' : 'black', borderColor : props.disabledSize ? '#E60000' : 'black', borderBottom: props.sortQuality === span ? '1px solid black' : ''}
                        }
                         className={props.classSpan} onClick={() => props.sendValue(span)} value={span.value} >
                            {span}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default ChosenClothOptions
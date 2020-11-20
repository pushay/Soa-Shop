import React from 'react';
import styles from '../ChooseClothes.module.css';
import ChooseClothesSingleClothDescription from './ChooseClothesSingleClothDescription/ChooseClothesSingleClothDescription';
import ChooseClothesSingleClothImage from './ChooseClothesSingleClothImage/ChooseClothesSingleClothImage';

function ChooseClothesSingleCloth(props){
    return(
        <div className={styles.chooseSingleClothBlock}>
            <ChooseClothesSingleClothImage  image={props.image}/>
            <ChooseClothesSingleClothDescription  image={props.image} />          
        </div>
    )
}

export default ChooseClothesSingleCloth
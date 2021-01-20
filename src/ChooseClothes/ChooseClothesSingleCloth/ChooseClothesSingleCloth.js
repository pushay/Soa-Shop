import React from 'react';
import styles from '../ChooseClothes.module.css';
import ChooseClothesSingleClothDescription from './ChooseClothesSingleClothDescription/ChooseClothesSingleClothDescription';
import ChooseClothesSingleClothImage from './ChooseClothesSingleClothImage/ChooseClothesSingleClothImage';

function ChooseClothesSingleCloth(props){
    return(
        <div className={styles.chooseSingleClothBlock}>
            <ChooseClothesSingleClothImage id={props.cloth.id}  photo={props.cloth.image} />
            <ChooseClothesSingleClothDescription image={props.cloth} />          
        </div>
    )
}

export default ChooseClothesSingleCloth
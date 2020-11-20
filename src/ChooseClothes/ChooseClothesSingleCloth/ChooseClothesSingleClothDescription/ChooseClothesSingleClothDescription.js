import React from 'react';
import styles from '../../ChooseClothes.module.css';
import { Link } from "react-router-dom";

function ChooseClothesSingleClothDescription(props){
    return(
        <div className={styles.chooseSingleClothDescription}>
            <div className={styles.chooseSingleClothMessage}>
                <Link to='/chosenCloth'  className={styles.chooseSingleClothLink}>
                    <p className={styles.chooseSingleClothName}>{props.image.name}</p>
                </Link>
                <p className={styles.chooseSingleClothPrice}>{props.image.price}$</p>
            </div>   
        </div>  
    )
}

export default ChooseClothesSingleClothDescription
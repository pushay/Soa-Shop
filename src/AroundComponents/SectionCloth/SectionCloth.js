import React from 'react';
import styles from './SectionCloth.module.css';
import SectionClothText from '../../ChooseClothes/chooseClothesListOfClothesText';


let images = SectionClothText.AllClothes

function SectionCloth() {
    return (
        <div className={styles.sectionClothBlock}>
            { images.map(image => {
                if (image['sorted'] !== 'Bestsellers') {
                    return null
                }
                else {
                    return (
                        <div key={image.id} className={styles.sectionClothItem}>
                            <div className={styles.sectionClothStyled}>
                                <img key={images.name} src={image.img} alt={image.img} className={styles.sectionCloth} price={image.price} />
                            </div>
                        </div>
                    );
                }
            })}
        </div> 
    )
}

export default SectionCloth
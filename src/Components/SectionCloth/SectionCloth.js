import React, { useEffect, useState } from 'react';
import styles from './SectionCloth.module.css';
import clothesText from '../../ChooseClothes/chooseClothesListOfClothesText';

function SectionCloth() {

    const [data, setData] = useState([])

    useEffect(()=> {
         let formData = new FormData()
            formData.append('sorted','Bestsellers') 
        fetch('https://database-test-832.herokuapp.com/', {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then(response => response.json()).then(data => {
            setData(data)
            
        })
    },[])


    const matchPhoto = (id) => {
        let image;
        clothesText.AllClothes.map((thing) => {
            if (thing.id == id) {
                image = thing.img
            }
            return thing;
        })
        return image
    }    


     return (
        <div className={styles.sectionClothBlock}>
            { data.map(image => { 
                    return(
                        <div key={image.id} className={styles.sectionClothItem}>
                            <div className={styles.sectionClothStyled}>
                                <img key={image.name} src={matchPhoto(image.id)} alt={image.name} className={styles.sectionCloth} price={image.price} />
                            </div>
                        </div>
                    )
                }
            )}
        </div> 
    )
}

export default SectionCloth
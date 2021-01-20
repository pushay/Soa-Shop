
import React, {useState, useEffect} from 'react';
import styles from './ImageSlider.module.css';
import joshua from '../../Images/joshua.jpg'
import shopp from '../../Images/shopping.jpg'
import carouselSlides from './imageSliderText';
import TextBlock from '../TextBlock/TextBlock';


function ImageSlider(){
    useEffect(()=> {
        const interval = setInterval(slideCarousel,5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
        return (() => {
            clearInterval(interval);
        })
    }, [])

    const slideCarousel = () => {
        setCarouselSlide((prevState) => {
            if (prevState === carouselSlides[0]) {
                document.getElementById('carouselId').style.backgroundImage = "linear-gradient(to left, rgba(7, 7, 7, 0) 50%, rgb(0, 0, 0) 100%), url("+ shopp +")";
                return carouselSlides[1]
            }
            else {
                document.getElementById('carouselId').style.backgroundImage = "linear-gradient(to left, rgba(7, 7, 7, 0) 50%, rgb(0, 0, 0) 100%), url("+ joshua +")";
                return carouselSlides[0]
            }
        })
    }

    const [carouselSlide, setCarouselSlide ] = useState(carouselSlides[0])
   
    return (
        <div className={styles.carouselContainer}>
            <div id='carouselId' className={styles.carouselSlide}>
                <TextBlock carouselSlide={carouselSlide} section="carousel" carousel="yes" />
            </div>
        </div>
    )
}

export default ImageSlider
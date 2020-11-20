import React from 'react';
import styles from '../TextBlock/TextBlock.module.css';
import { Link } from "react-router-dom";


function TextBlock(props){

        return(
            <div className={props.carousel ? styles.carouselMessage : styles.sectionBlock}>
                <h2 className={props.carousel ? styles.carouselMessageHeader : styles.sectionBlockHeader }>
                    {props.carousel ? props.carouselSlide.header : props.text[props.page].header}
                </h2>
                <p className={props.carousel ? styles.carouselMessageText : styles.sectionBlockText}>
                    {props.carousel ? props.carouselSlide.text : props.text[props.page].paragraph}
                </p>
                {props.section == 'section' ? <li className={styles.linkBlack}>
                    <Link className={styles.link} to={props.text[props.page].link}>{props.text[props.page].linkText}</Link>
                </li> : null}
            </div>
        )
}

export default TextBlock;
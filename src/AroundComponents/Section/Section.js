import React from 'react';
import styles from './Section.module.css';
import text from './sectionText'
import { Link } from "react-router-dom";



function Section(props) {
    return (    
        <div className={styles.section}>
            <div className={styles.sectionBlock}>
                <h2 className={styles.sectionBlockHeader}>
                    {text[props.page].header}
                </h2>
                <p className={styles.sectionBlockText}>
                    {text[props.page].paragraph}
                </p>
                <li className={styles.linkBlack}>
                    <Link className={styles.link} to={text[props.page].link}>{text[props.page].linkText}</Link>
                </li>
            </div>  
        </div>
    )
}

export default Section
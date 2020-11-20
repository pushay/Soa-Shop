import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import styles from './Section.module.css';
import text from '../Section/sectionText';


function Section(props) {
    return (    
        <div className={styles.section}>
            <TextBlock text={text}  section="section" page={props.page}/>
        </div>
    )
}

export default Section
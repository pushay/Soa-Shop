import React from 'react';

function ShoppingCardInformation(props){
    return(
        <div className={props.classDiv}>
            <p className={props.classMain}>{props.main}</p>
            <p className={props.classText} >{props.text}</p>
        </div>
    )
}

export default ShoppingCardInformation
import React from 'react';

function Svg(props){
    
    return(
        <div >
            {props.to ? 
            <a href={props.to}>
                <div dangerouslySetInnerHTML={{ __html: props.element }}></div>
            </a> :  <div dangerouslySetInnerHTML={{ __html: props.element }}></div>
            }
        </div>
    )
}

export default Svg
import React from 'react';

const HeroRadio = (props) =>{

    return(
        <label className={props.myStyle}>
            <input
                type="radio" 
                value={props.myValue}
                onChange={props.changed}
                checked={props.check}/>
            <span className="circle"></span>
        </label>
    );
}

export default HeroRadio;
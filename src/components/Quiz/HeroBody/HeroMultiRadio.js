import React from 'react';
import HeroRadio from './HeroRadio';

const HeroMultiRadio = (props) => {
    return( 
        <div className="col-1-of-3">
             <form>
                 <HeroRadio 
                    myStyle="radioStrAgree" 
                    myValue="StronglyAgree" 
                    changed={props.onRadioOptionChange} 
                    check={props.agreement === "StronglyAgree"}/>
                <HeroRadio 
                    myStyle="radioAgree" 
                    myValue="Agree" 
                    changed={props.onRadioOptionChange}
                    check={props.agreement === "Agree"}/>
                <HeroRadio 
                    myStyle="radioNeutral" 
                    myValue="Neutral" 
                    changed={props.onRadioOptionChange}
                    check={props.agreement === "Neutral"}/>
                <HeroRadio 
                    myStyle="radioDisagree" 
                    myValue="Disagree" 
                    changed={props.onRadioOptionChange}
                    check={props.agreement === "Disagree"}/>
                <HeroRadio 
                    myStyle="radioStrDisagree" 
                    myValue="StronglyDisagree" 
                    changed={props.onRadioOptionChange} 
                    check={props.agreement === "StronglyDisagree"}/>
            </form>
        </div>
    );
}

export default HeroMultiRadio;
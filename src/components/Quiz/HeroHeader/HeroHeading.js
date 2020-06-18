import React from 'react';

const HeroHeading = (props) => {
    return (
        <div className="headerContentBox">
             <h1 className="headingPrimary">
                <span className="titleText">The Hero Test</span>
                <span className="subText">Find Out What Kind of Hero You Are</span>
            </h1>
            <button onClick={props.takeTestButtonClicked} className="myButton">Take The Test</button>
        </div>
    );
}

export default HeroHeading;
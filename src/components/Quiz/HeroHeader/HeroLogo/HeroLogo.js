import React from 'react';
import myLogo from './../../../assets/swords.png';

const HeroLogo = (props) => {
    return (
        <div className="logoBox">
            <img onClick={() => {alert("You clicked the logo!")}} className="logo" src={myLogo} alt="logo"></img>
        </div>
    );
}

export default HeroLogo;
import React from 'react';
import HeroHeading from './HeroHeading';

const HeroHeader = (props) => {
    return (
        <div>
            <div style={{filter: "drop-shadow(-.1rem .6rem 1rem rgb(0, 0, 0))"}}>
                <header className={props.clearDisplay ? "clearDisplay" : props.headerCssPassed}>
                    <HeroHeading takeTestButtonClicked={props.takeTestButtonClicked}/>
                </header>
            </div>
        </div>
    );
}
export default HeroHeader;
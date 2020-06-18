import React, { PureComponent, Fragment } from 'react';
import HeroHeader from '../HeroHeader/HeroHeader';
import HeroBody from './../HeroBody/HeroBody';
import '../HeroHeader/HeroTest.scss';
import {Route} from 'react-router-dom'

class HeroTest extends PureComponent {
    state = {
        headerAppearance: "App-header",
        clearDisplay: false,
        route:"/",
    }
    
    takeTestButtonClickedHandler = () => {
        this.setState(
            {headerAppearance: "altApp-Header"}
        );
        setTimeout(()=>{window.location.href= '/intro'}, 1200);
    }

    clearDisplayHandler = () => {
        this.setState({
            clearDisplay:{
                display: true
            }
        });
    }

    render(){
        return(
            <Fragment>
                <Route exact path="/" render={() => <HeroHeader
                    headerCssPassed={this.state.headerAppearance} 
                    takeTestButtonClicked={this.takeTestButtonClickedHandler}
                    clearDisplay={this.state.clearDisplay}/>} />
                <Route exact path="/intro" component={HeroBody}/>
            </Fragment>
        );
    }
}

export default HeroTest;
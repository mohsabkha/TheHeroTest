import React, { PureComponent } from 'react';
import HeroMultiRadio from './HeroMultiRadio';
import './HeroBody.scss';
import Questions from './../../../questions.json';

class HeroBody extends PureComponent{
    state= {
        showContent: "questionText",
        showButton: "myButton",
        questions: Questions.questions,
        introCount: 0,
        questionCount: 0,
        buttonText: "Continue",
        agreement: "",
    }

    onClickHandler = () => {
        if(this.state.agreement !== ""){
            let count = this.state.introCount + 1;
            if(count < this.state.questions.length){
                this.setState({
                    showContent: "altQuestionText",
                    warning: ""
                });
                setTimeout(() => {
                    this.setState({
                        introCount: count,
                        showContent: "questionText",
                        agreement: ""
                    })
                },500);
            }
            if(count+6 >= this.state.questions.length)
                this.setState({
                    endStyle: {transform: "scale(1.5)", backgroundColor: "gold"},
                    buttonText: "Results",
                });
        }
        else{
            alert("Please Select An Option");
        }
    }

    onRadioOptionChange = (event) => {
        if(event.target.checked)
            this.setState({
                agreement: event.target.value,
            });
    }


    render() {      
        return(
            <div className="questionContentBox">
                <div className="row">
                    <div className="col-1-of-1">
                        <p className = {this.state.showContent}>{this.state.questions[this.state.introCount].question}</p>
                    </div>
                </div>
                <div className="row answer">
                    <div className="col-1-of-3"> <span className="labelAgree"><p>Strongly</p><p>Agree</p></span> </div>
                    <HeroMultiRadio onRadioOptionChange={this.onRadioOptionChange.bind(this)} agreement={this.state.agreement}/>
                    <div className="col-1-of-3"> <span className="labelDisagree"><p>Strongly</p><p>Disagree</p></span></div>
                </div>
                <div className="row" style={{boxShadow:"none", backgroundImage: "none"}}>
                    <div className="col-1-of-1">
                        <button className="questionButton" onClick={this.onClickHandler}>Continue</button>
                    </div>
                </div>
            </div>
        );
    }
}



export default HeroBody;
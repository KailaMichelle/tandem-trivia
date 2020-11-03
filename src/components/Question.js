import React, { Component } from 'react';

// Bootstrap styles
import Button from 'react-bootstrap/Button';

// JSON import 
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

// CSS
import './Component.css';

class Question extends Component {
    
    randomize = (array) => {
        let i = array.length, j, k;
        while (0 !== i) {
            k = Math.floor(Math.random() * i);
            i -= 1;
            j = array[i];
            array[i] = array[k];
            array[k] = j;
        }
        return array;
    }

    handleSubmit = (e) => {
        let question = triviaData[this.props.num];
        let correct = question.correct
        if(e.target.innerHTML == correct){
            this.props.updateScore();
            window.alert('Correct Answer!')
            this.props.button();
        } else {
            window.alert(`We're sorry, that was an incorrect answer. The correct answer was ${correct}.`)
            this.props.button();
            console.log('incorrect')
        }
    }


    render(){
        const { question, options, nextQuestion, score } = this.props;
        const random = this.randomize(options);

        const optionList = random.map((option) => {
            return (
                <Button className="btn btn-lg" onClick={this.handleSubmit} disabled={this.props.questionDisabled}>{option}</Button>
            )
        });

        return(
            <div className="container">
                <h1>Score: {score}</h1>
                <h1 className="font">{question}</h1>
                <div className="options">
                    {optionList}
                </div>
                <Button className="btn btn-lg" onClick={nextQuestion} disabled={this.props.buttonDisabled}>Next Question</Button>
            </div>
        );
    }
}

export default Question;
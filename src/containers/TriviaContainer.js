import React, { Component } from 'react';
import Question from '../components/Question.js';
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

class Trivia extends Component {
    state = {
        gameStarted: false,
        // gameOver: false,
        num: 0,
        question: '',
        options: [],
        score: 0,
        answer: null,
    }

    componentDidMount() {
        let array = triviaData[this.state.num].incorrect
        array.push(triviaData[this.state.num].correct)
        this.setState({
            question: triviaData[this.state.num].question,
            options: array,
        })
        // this.setQuestion();
    }

    setQuestion = async () => {
        let array = triviaData[this.state.num].incorrect;
        array.push(triviaData[this.state.num].correct);
        this.setState({
            question: triviaData[this.state.num].question,
            options: array,
        })
    }

    startGame = () => {
        this.setState({
            gameStarted: true,
        })
    }

    nextQuestion = () => {
        this.setState({
            num: this.state.num + 1,
        })
        this.setQuestion();
        console.log('in next')
    }



    render(){
        return(
            <div>
                {!this.state.gameStarted && (
                    <button onClick={this.startGame}>Start Game</button>
                )}
                {this.state.gameStarted && (
                    <Question question={this.state.question} options={this.state.options} nextQuestion={this.nextQuestion}/>
                    )}
            </div>
        );
    }
}

export default Trivia;
import React, { Component } from 'react';
import Question from './Question.js';
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

    startGame = () => {
        let array = triviaData[this.state.num].incorrect
        array.push(triviaData[this.state.num].correct)
        this.setState({
            question: triviaData[this.state.num],
            options: array,
            gameStarted: true,
        })

        this.showQuestion();
    }

    showQuestion = () => {

        console.log('show')
    }




    render(){
        return(
            <div>
                {!this.state.gameStarted && (
                    <button onClick={this.startGame}>Start Game</button>
                )}
                {this.state.gameStarted && (
                    <Question />
                )}
            </div>
        );
    }
}

export default Trivia;
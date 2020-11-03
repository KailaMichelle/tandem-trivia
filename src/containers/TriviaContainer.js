import React, { Component } from 'react';
import Question from '../components/Question.js';
import StartGame from '../components/StartGame';
import GameOver from '../components/GameOver';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// Json Import
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

class Trivia extends Component {
    state = {
        gameStarted: false,
        gameOver: false,
        num: 0,
        questionarr: [],
        currentIndex: -1,
        question: '',
        options: [],
        score: 0,
        answer: null,
        buttonDisabled: false,
        questionDisabled: false,
    }

    startGame = () => {
        while(this.state.questionarr.length < 12){
            let randomindex = Math.floor(Math.random()*(21 - 1) + 1)
            if(this.state.questionarr.indexOf(randomindex) == -1){
                this.state.questionarr.push( randomindex );
            }
        }
        this.setState({
            num: this.state.questionarr[0],
            gameStarted: true,
            buttonDisabled: true,
        })
        this.nextQuestion();
    }


    nextQuestion = () => {
        let nextIndex = this.state.currentIndex + 1
        if(nextIndex == 11){
            this.setState({
                gameOver: true,
            })
        }
        else {
            let array = triviaData[this.state.questionarr[nextIndex]].incorrect;
            array.push(triviaData[this.state.questionarr[nextIndex]].correct);
            this.setState({
                buttonDisabled: true,
                questionDisabled: false,
                num: this.state.questionarr[nextIndex],
                currentIndex: nextIndex,
                question: triviaData[this.state.questionarr[nextIndex]].question,
                options: array,
            })
            console.log(this.state)
        }
    }

    updateScore = () => {
    this.setState({
        score: this.state.score + 1,
    })
    }

    button = () => {
        this.setState({
            buttonDisabled: false,
            questionDisabled: true,
        })
    }

    disable = () => {
        this.setState({
            questionDisabled: true,
        })
    }



    render(){
        return(
            <div>
                {!this.state.gameStarted && !this.state.gameOver && (
                    <StartGame startGame={this.startGame} />
                )}
                {this.state.gameStarted && !this.state.gameOver &&(
                    <Question 
                    num={this.state.num} 
                    question={this.state.question} 
                    options={this.state.options} 
                    nextQuestion={this.nextQuestion} 
                    score={this.state.score} 
                    updateScore={this.updateScore}
                    button={this.button}
                    buttonDisabled={this.state.buttonDisabled}
                    questionDisabled={this.state.questionDisabled}/>
                    )}
                {this.state.gameOver && (
                    <GameOver score={this.state.score}/>
                )}
            </div>
        );
    }
}

export default Trivia;
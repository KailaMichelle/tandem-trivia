import React, { Component } from 'react';
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

function Question(props) {
    const { question, options, nextQuestion } = props;
    // state = {
    //     gameStarted: false,
    //     // gameOver: false,
    //     num: 0,
    //     question: '',
    //     options: [],
    //     score: 0,
    //     answer: null,
    // }

    const optionList = options.map((option) => {
        return (
        <button>{option}</button>
        )
      });

        return(
            <div>
                <h1>{question}</h1>
                <button>{optionList}</button>
                <button onClick={nextQuestion}>Submit</button>
            </div>
        );
    }

export default Question;
import React, { Component } from 'react';

// Bootstrap styles
import Button from 'react-bootstrap/Button';

// JSON import 
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

// CSS
import './Component.css';

function Question(props) {
    const { question, options, num, nextQuestion, score, updateScore } = props;

    function randomize(array) {
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

    const random = randomize(options);

    const optionList = random.map((option) => {
        // console.log(random)
        return (
        <li>
            <Button className="btn btn-lg" onClick={handleSubmit}>{option}</Button>
        </li>
        )
    });

    function handleSubmit(e){
        let question = triviaData[num];
        let correct = question.correct
        console.log(correct)
        if(e.target.innerHTML == correct){
            updateScore();
            nextQuestion();
            console.log('correct')
        } else {
            nextQuestion();
            console.log('incorrect')
        }
    }



        return(
            <div>
                <h1>Score: {score}</h1>
                <h1 className="font">{question}</h1>
                <ul className="options">
                {optionList}
                </ul>
                <Button className="btn btn-lg" onClick={nextQuestion}>Next Question</Button>
            </div>
        );
    }

export default Question;
import React, { Component } from 'react';

// Bootstrap styles
import Button from 'react-bootstrap/Button';

// JSON import 
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

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
        <button onClick={handleSubmit}>{option}</button>
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
                <h1>{question}</h1>
                {optionList}
                <Button onClick={nextQuestion}>Next Question</Button>
            </div>
        );
    }

export default Question;
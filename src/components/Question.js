import React from 'react';

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
            <Button className="btn btn-lg buttons" onClick={handleSubmit}>{option}</Button>
        </li>
        )
    });

    function handleSubmit(e){
        let question = triviaData[num];
        let correct = question.correct
        // let next = document.getElementById('next');
        // let buttons = document.getElementsByClassName('buttons');
        // console.log(buttons)
        if(e.target.innerHTML == correct){
            updateScore();
            window.alert('Correct Answer!')
            nextQuestion();
            // e.target.classList.add('correct')
            // console.log(next)
            console.log('correct')
        } else {
            window.alert(`We're sorry, that was an incorrect answer. The correct answer was ${correct}.`)
            nextQuestion();
            // e.target.classList.add('incorrect')
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
                <Button className="btn btn-lg" onClick={nextQuestion} id="next">Next Question</Button>
            </div>
        );
    }

export default Question;
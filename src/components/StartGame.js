import React from 'react';

function StartGame(props) {
  const { startGame } = props;

        return(
            <div>
                <h1>Welcome to Tandem Trivia</h1> 
                <button onClick={startGame}>Start</button>
            </div>
        );
    }

export default StartGame;


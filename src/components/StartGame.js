import React from 'react';

// Bootstrap styles
import Button from 'react-bootstrap/Button';

function StartGame(props) {
  const { startGame } = props;

        return(
            <div>
                <h1 className="welcome">Welcome to Tandem Trivia</h1> 
                <Button className="btn btn-lg" onClick={startGame}>Start</Button>
            </div>
        );
    }

export default StartGame;


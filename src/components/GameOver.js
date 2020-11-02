import React from 'react';

function GameOver(props) {
  const { score } = props;

        return(
            <div>
                <h1>Game Over!</h1> 
                <p>You scored: {score}</p>
                <button onClick={() => window.location.reload(false)}>Play Again?</button>
            </div>
        );
    }

export default GameOver;


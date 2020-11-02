import React from 'react';

function GameOver(props) {
  const { score } = props;

        return(
            <div>
                <h1>Game Over!</h1> 
                <h3>You scored: {score}</h3>
                <button className="btn btn-lg" onClick={() => window.location.reload(false)}>Play Again?</button>
            </div>
        );
    }

export default GameOver;


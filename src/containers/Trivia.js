import React, { Component } from 'react';
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

class Trivia extends Component {
    state = {
        trivia: triviaData
    }

    render(){
        return(
            <div>

                {/* <p>{trivia[0].question}</p> */}
                <h1>Home</h1>
            </div>
        )
    }
}

export default Trivia;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import triviaData from '../json/Apprentice_TandemFor400_Data.json';

class Home extends Component {
    state = {
        num: 0,
        question: '',
        options: [],
    }

    componentDidMount() {
        let array = triviaData[this.state.num].incorrect
        array.push(triviaData[this.state.num].correct)
        this.setState({
            question: triviaData[this.state.num].question,
            options: array,
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to Tandem Trivia</h1>
                <Link exact to='/questions'>Start Game</Link>
            </div>
        );
    }
}

export default Home;
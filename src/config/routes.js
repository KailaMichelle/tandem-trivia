import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/TriviaList';
import TriviaContainer from '../containers/TriviaContainer';

export default ( { num, question, options }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/questions' render={() => <TriviaContainer num={num} question={question} options={options}/> } />
    </Switch>
);
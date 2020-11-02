import React from 'react';
import Trivia from './containers/TriviaContainer';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <div className="App">
          <header className="Content">
            <Trivia />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

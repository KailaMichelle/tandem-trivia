import React from 'react';
import Trivia from './containers/TriviaContainer';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            {/* <h1>Tandem Trivia</h1> */}
            <Trivia />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

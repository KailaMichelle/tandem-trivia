import React from 'react';
import Home from './containers/Home';
import './App.css';
import triviaData from './Apprentice_TandemFor400_Data.json';

class App extends React.Component {
  state = {
    trivia: triviaData
  }

  // componentDidMount() {
  //   this.setState({
  //     trivia: triviaData
  //   })
  // }

  render(){
    console.log(this.state.trivia)
    // const data = () => JSON.parse(JSON.stringify(trivaData));  
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Home trivia={this.state.trivia}/>
            <h1>Tandem Trivia</h1>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

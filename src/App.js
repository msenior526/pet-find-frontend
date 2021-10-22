import './App.css';
import Pets from './containers/Pets'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Pets />
    </div>
  );
  }
  
}

export default App;

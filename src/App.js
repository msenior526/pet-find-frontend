import './App.css';
import Pets from './containers/Pets';
import Navbar from './containers/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/pets' component={Pets}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/login' component={Signup}/>
        </div>
      </Router>
  );
  }
  
}

export default App;

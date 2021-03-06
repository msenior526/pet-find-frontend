import './App.css';
import Pets from './containers/Pets';
import Navbar from './containers/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Login from './containers/Login';
import Signup from './containers/Signup';
import UserProfile from './containers/UserProfile';
import withAuth from './components/WithAuth';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/pets' component={Pets}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/profile' component={withAuth(UserProfile)}/>
          home
        </div>
      </Router>
  );
  }
  
}

export default App;

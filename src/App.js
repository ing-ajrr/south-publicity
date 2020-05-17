import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import RegisterContainer from './containers/RegisterContainer';


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/register" component={RegisterContainer} />
        </div>
      </Router>
    );
  }
}

export default App;

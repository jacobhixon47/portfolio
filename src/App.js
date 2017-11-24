import React, { Component } from 'react';
import Home from './Home/Home.js';
import About from './About/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;

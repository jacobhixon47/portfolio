import React, { Component } from 'react';
import Home from './Home/Home.js';
import About from './About/About.js';
import Menu from './Menu/Menu.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;

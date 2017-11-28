import React, { Component } from 'react';
import dev from '../images/dev-art-1.jpg';
import {Animated} from 'react-animated-css';
import Project from '../Project/Project.js';
import '../Project/Project.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="Portfolio" id="portfolio" style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D7F1FF",
        backgroundImage: `url(${dev})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginBottom: "49vh",
      }}>
        <Project text="TeamGo"/>
        <Project text="uBudget"/>
        <Project text="BrightSky"/>
        <Project text="number 4"/>
        <Project text="number 5"/>
        <Project text="number 6"/>
      </div>
    );
  }
}

export default Portfolio;

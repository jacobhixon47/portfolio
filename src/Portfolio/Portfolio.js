import React, { Component } from 'react';
import dev from '../images/dev-art-1.jpg';
import {Animated} from 'react-animated-css';
import Project from '../Project/Project.js';

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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D7F1FF",
        backgroundImage: `url(${dev})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginBottom: "49vh",
      }}>
        <div className="overlay" style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#000",
          opacity: 0.5
        }}>
        </div>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default Portfolio;

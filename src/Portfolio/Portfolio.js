import React, { Component } from 'react';
import dev from '../images/dev-art-1.jpg';
import {Animated} from 'react-animated-css';

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
        backgroundColor: "#D7F1FF",
        backgroundImage: `url(${dev})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}>
        <div className="overlay" style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#000",
          opacity: 0.5
        }}>
        </div>
      </div>
    );
  }
}

export default Portfolio;

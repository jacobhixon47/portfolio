import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import {Animated} from "react-animated-css";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      backgroundOpacity: 0,
      greetingOpacity: 0,
      statementOpacity: 0,
      menuOpacity: 0
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({
      backgroundOpacity: 1
    }), 1);
    setTimeout(() => this.setState({
      greetingOpacity: 1
    }), 1000);
    setTimeout(() => this.setState({
      statementOpacity: 1
    }), 2000);
    setTimeout(() => this.setState({
      menuOpacity: 1
    }), 3000);
  }

  render() {
    return (
      <div className="Home" style={{
        transform: `translate(${this.state.currentPosition}%, 0px)`,
        opacity: this.state.backgroundOpacity,
        transition: "all 1s ease-in"
      }}>
        <div style= {{
          fontSize: "3em",
          textAlign: "right",
          marginTop: "50px",
          marginRight: "30px"
        }}>
          <div>
            <p style={{
              transform: `translate(${this.state.currentPosition}%, 0px)`,
              opacity: this.state.greetingOpacity,
              transition: "all 1s ease-in"
            }}>Hello, I'm Jacob Hixon.</p>
            <p style={{
              transform: `translate(${this.state.currentPosition}%, 0px)`,
              opacity: this.state.statementOpacity,
              transition: "all 1s ease-in"
            }}>I'm a
              <span style={{color: "#047FB5"}}><strong> full-stack web developer</strong>.</span>
            </p>
          </div>
        </div>
        {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        </Animated> */}
        <div className="menu" style={{
          transform: `translate(${this.state.currentPosition}%, 0px)`,
          opacity: this.state.menuOpacity,
          transition: "all 1s ease-in"
        }}>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }
  render() {
    return (
      <div className="project" style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "33.3vh",
        transition: "all 0.3s ease-in",
        backgroundColor: "#000"
      }}>
        <h1 className="title" style={{
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          color: "white",
          zIndex: 3,
          transition: "all 0.3s ease"
        }}>{this.state.text}</h1>
        <a href="#" className="link" style={{
          padding: "1% 3% 1% 3%",
          textAlign: "center",
          color: "white",
          border: "solid 2px white",
          zIndex: 1,
          transition: "opacity 0.3s ease-in",
        }}>BUTTON</a>
      </div>
    );
  }
}

export default Project;

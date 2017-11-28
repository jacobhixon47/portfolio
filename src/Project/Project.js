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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "33.3vh"
      }}>
        <h1 className="title">{this.state.text}</h1>
        <div class="button"><a href="#">BUTTON</a></div>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default Project;

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
        width: "33.2vw",
        height: "49.5vh",
      }}>
        <h1 className="title">{this.state.text}</h1>
        <div className="overlay"></div>
        <div class="button"><a href="#"> BUTTON </a></div>
      </div>
    );
  }
}

export default Project;

import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      description: props.description
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
        transition: "all 0.5s ease-in",
        backgroundColor: "#000"
      }}>
        <h1 className="title" style={{
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          color: "white",
          zIndex: 3,
          transition: "all 0.5s ease",
          margin: 0
        }}>{this.state.text}</h1>
        <p className="description" style={{
          color: "white",
          marginBottom: "10px"
        }}><i>{this.state.description}</i></p>
        <a href="#" className="link" style={{
          padding: "1% 5% 1% 5%",
          textAlign: "center",
          color: "white",
          border: "solid 2px white",
          borderRadius: "500px",
          zIndex: 1,
          transition: "opacity 0.5s ease-in",
          textDecoration: "none"
        }}>View</a>
      </div>
    );
  }
}

export default Project;

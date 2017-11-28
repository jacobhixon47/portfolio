import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

const Project = (props) => {
  return (
    <div className="project" style={{
      width: "33vw",
      height: "49.5vh",
      border: "2px white solid"
    }}>
      <img src={props.src} style={{height: "15vh"}}/>

      <p>{props.text}</p>
    </div>
  );
}

export default Project;

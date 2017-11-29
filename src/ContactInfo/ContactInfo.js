import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

const ContactInfo = (props) => {
  return (
    <div className="ContactInfo">
      <a href={props.url} target="_blank" style={{
        textDecoration: "none",
        color: "#D7F1FF"
      }}>
        <img src={props.source}  style={{
          width: "10vw"
        }}/>
      </a>
      <p>{props.text}</p>
    </div>
  );
}

export default ContactInfo;

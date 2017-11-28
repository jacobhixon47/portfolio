import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

const ContactInfo = (props) => {
  return (
    <div className="contactInfo" >
      <img src={props.src} style={{height: "15vh"}}/>
      <p>{props.text}</p>
    </div>
  );
}

export default ContactInfo;

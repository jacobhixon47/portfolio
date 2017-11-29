import React, { Component } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo.js';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import './Contact.css';
import {Animated} from 'react-animated-css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headingAnimation: '',
      headingVisible: false,
      textVisible: false,
      mainColor: '#D7F1FF'
    };
  }

  render() {
    return (
      <div className="Contact" name="contact" id="contact" style={{
        height: "50vh",
        width: "100vw",
        zIndex: -20,
        position: "fixed",
        bottom: 0,
        backgroundColor: '#181B20',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#424B60",
        color: this.state.mainColor,
        paddingLeft: "20px"
      }}>
        <ContactInfo source={linkedin} text="LinkedIn" url="https://linkedin.com/in/jacobhixon/"/>
        <ContactInfo source={github} text="Github" url="https://github.com/jacobhixon47"/>
        <ContactInfo source={email} text="jacobhixon47@gmail.com"/>
      </div>
    );
  }
}

export default Contact;

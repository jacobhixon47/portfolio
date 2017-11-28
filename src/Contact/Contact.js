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
    this.animateContact = this.animateContact.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  animateContact() {
    this.setState({
      headingAnimation: 'slideInRight',
      textAnimation: 'slideInRight'
    });
    setTimeout(() => this.setState({
      headingVisible: true
    }), 250);
    setTimeout(() => this.setState({
      textVisible: true
    }), 1250);
  }

  componentDidMount() {
    window.addEventListener('scroll', function() {
      var elementTarget = document.getElementById("contact");
      if (window.scrollY >= elementTarget.offsetTop - 100) {
        this.animateContact();
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="Contact" name="contact" id="contact" style={{
        height: "50vh",
        zIndex: -20,
        position: "fixed",
        bottom: 0,
        backgroundColor: '#181B20',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#424B60",
        color: this.state.mainColor
      }}>
        <ContactInfo src={linkedin} text="LinkedIn" />
        <ContactInfo src={github} text="Github" />
        <ContactInfo src={email} text="Email" />
      </div>
    );
  }
}

export default Contact;

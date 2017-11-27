import React, { Component } from 'react';
import moon from '../images/space-1.jpg';
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
      if (window.scrollY >= elementTarget.offsetTop  - (elementTarget.offsetTop / 2.2)) {
        this.animateContact();
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="Contact" name="contact" id="contact" style={{
        backgroundColor: '#181B20',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundImage: `url(${moon})`,
        backgroundRepeat: 'no-repeat',
        color: this.state.mainColor,
        backgroundPosition: "left center"
      }}>
        <div className="contact-text" style={{paddingRight: "50px", marginRight: "25px", textAlign: "right", maxWidth: "40vw", display: "hidden", right: '0px'}}>
          <Animated animationIn={this.state.headingAnimation} isVisible={this.state.headingVisible}>
            <h1 style={{marginTop: 0, transition: 'all 1s'}}>I'm a Dreamer</h1>
          </Animated>
          <Animated animationIn={this.state.textAnimation} isVisible={this.state.textVisible} style={{transition: 'all 1s'}}>
            <p>Lorem Ipsum i am a whale blah blah blah art development and fun stuff. The Lorem Ipsum i am a whale blah blah blah art development and fun stuff. Then the dog said, "Lorem Ipsum i am a whale blah blah blah art development and fun stuff."</p>
          </Animated>
        </div>
      </div>
    );
  }
}

export default Contact;

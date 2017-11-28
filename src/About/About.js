import React, { Component } from 'react';
import plane from '../images/airplane-art-1.jpg';
import './About.css';
import {Animated} from 'react-animated-css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headingAnimation: '',
      headingVisible: false,
      textVisible: false,
      mainColor: '#D7F1FF'
    };
    this.animateAbout = this.animateAbout.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  animateAbout() {
    console.log("animating About...");
    this.setState({
      headingAnimation: 'slideInLeft',
      textAnimation: 'slideInLeft'
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
      var elementTarget = document.getElementById("about");
      if (window.scrollY >= elementTarget.offsetTop - 100) {
        this.animateAbout();
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="About" name="about" id="about" style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: `url(${plane})`,
        color: this.state.mainColor,
        backgroundPosition: "left center"
      }}>
        <div className="about-text" style={{paddingLeft: "50px", marginLeft: "25px", textAlign: "left", maxWidth: "50vw", display: "hidden"}}>
          <Animated animationIn={this.state.headingAnimation} isVisible={this.state.headingVisible}>
            <h1 style={{marginTop: 0, transition: 'all 1.5s'}}>I'm a Dreamer</h1>
          </Animated>
          <Animated animationIn={this.state.textAnimation} isVisible={this.state.textVisible} style={{transition: 'all 1.5s'}}>
            <p>Lorem Ipsum i am a whale blah blah blah art development and fun stuff. The Lorem Ipsum i am a whale blah blah blah art development and fun stuff. Then the dog said, "Lorem Ipsum i am a whale blah blah blah art development and fun stuff."</p>
          </Animated>
        </div>
      </div>
    );
  }
}

export default About;

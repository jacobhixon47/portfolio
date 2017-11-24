import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About" name="about" style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}>
        <div style={{paddingLeft: "100px", marginLeft: "25px", textAlign: "left", maxWidth: "50vw", borderLeft: "2px solid #005E89"}}>
          <h1 style={{marginTop: 0}}>About</h1>
          <p>Lorem Ipsum i am a whale blah blah blah art development and fun stuff. The Lorem Ipsum i am a whale blah blah blah art development and fun stuff. Then the dog said, "Lorem Ipsum i am a whale blah blah blah art development and fun stuff."</p>
        </div>
      </div>

    );
  }
}

export default About;

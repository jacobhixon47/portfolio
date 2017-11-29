import React, { Component } from 'react';
import './Menu.css';
import Scroll  from 'react-scroll';
import {Animated} from "react-animated-css";

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;
var Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "fixed"
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
    window.addEventListener('scroll', function() {
      var elementTarget = document.getElementById("menu");
      if (window.scrollY >= elementTarget.offsetTop) {

      }
    }.bind(this));
  }

  handleContactClick() {
    console.log("this works;");
    window.scrollBy({
      top: document.body.scrollHeight, // could be negative value
      left: 0,
      behavior: 'smooth'
    });

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <ul className="Menu" id="menu" style={{
        width: "100vw",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#D7F1FF",
        listStyle: "none",
        margin: 0,
        marginTop: "10px",
        transition: "all 1s ease-in"
      }}>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1000}>Portfolio</Link></li>
        <li onClick={this.handleContactClick}>Contact</li>
      </ul>
    );
  }
}

export default Menu;

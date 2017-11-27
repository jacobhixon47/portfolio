import React, { Component } from 'react';
import './Menu.css';
import Scroll  from 'react-scroll';
import {Animated} from "react-animated-css";

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;
var Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;
// let DirectLink = Scroll.DirectLink;
// let Element = Scroll.Element;
// let Events = Scroll.Events;
// let scroller = Scroll.scroller;

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <ul className="Menu">
        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
        <li>Portfolio</li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
      </ul>
    );
  }
}

export default Menu;

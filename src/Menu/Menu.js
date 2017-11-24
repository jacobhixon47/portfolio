import React, { Component } from 'react';
import './Menu.css';
import Scroll  from 'react-scroll';

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;
// let DirectLink = Scroll.DirectLink;
// let Element = Scroll.Element;
// let Events = Scroll.Events;
// let scrollSpy = Scroll.scrollSpy;
// let scroller = Scroll.scroller;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleAboutClick = this.handleAboutClick.bind(this);
  }
  handleAboutClick() {
    document.getElementById('about-section').scrollIntoView(500);
  }
  render() {
    return (
      <ul className="Menu">
        <li><Link activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    );
  }
}

export default Menu;

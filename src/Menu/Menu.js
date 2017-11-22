import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {menuItems: ['Work', 'About', 'Contact']};
  }

  render() {
    return (
      <div className="Menu">
        <ul>{this.state.menuItems.map((item) =>
          <li key={item.toString()}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Menu;

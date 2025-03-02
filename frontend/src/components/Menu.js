import '../styles/Menu.css';

import React, {useState} from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('.main-content')
        .classList.toggle('blurred', !isOpen);
  };

  return (
      <div className = "menu-container">
      <label htmlFor = "check" className = "menu-button">
      <input type = "checkbox" id = "check" checked = {isOpen} onChange =
       { toggleMenu } />
        <span></span><span>
      </span>
        <span></span>
      </label>
      <div className={`menu-tab ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#option1">Profile</a></li>
          <li><a href="#option2">Subscription</a></li>
          <li><a href="/chat.html" target="_blank" rel="noopener noreferrer">Chat</a></li>
          <li><a href="#option4">Collection</a></li>
          <li><a href="#option5">Generate</a></li>
        </ul>
      </div>
    </div>);
};

export default Menu;
import React from 'react';
import './index.css';

const Header = (props) => {
  return (
    <header className="App-header">
      <p>{props.title}</p>
    </header>
  );
}

export default Header;

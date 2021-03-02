import React from 'react';
import './Header.css';

const Header = ({header}) => {
  return (
    <div className="headerWrapper">
      <div className="header">
      <h1>{header}</h1>
      </div>
    </div>
  );
};

export default Header;
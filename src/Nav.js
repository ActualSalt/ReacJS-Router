import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  
  const navStyle={
    color: 'white',  
    textDecoration: 'none'    
  };
  

  return (
    <nav>
        <Link style={navStyle} to="/">
        <h3>COVID-19 Update</h3>
        </Link>
        <ul className="nav-links">
            <Link to="/about" style={navStyle}>
              <li >About</li>
            </Link>
            <Link to="/CountryMap" style={navStyle}>
              <li>Country</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;

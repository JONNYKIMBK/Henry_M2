import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar" >
      <span>
        <img id='logoHenry' src={Logo} alt="Logo" />

        Henry - Weather App 

        

      </span>

      <SearchBar className="searchBar" onSearch={onSearch} />

    </nav>
  );
};

export default Nav;

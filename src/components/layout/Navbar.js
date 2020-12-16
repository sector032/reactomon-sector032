import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={headerStyle}>
      <h1>Project Reactomon</h1>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            PokeMenu
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <Link to='/'>Home</Link>
              </li>
              <li class='nav-item'>
                <Link to='/pokemons'>Pokemons</Link>
              </li>
              <li class='nav-item'>
                <Link to='/types'>Types</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  padding: '10px',
  background: '#333',
  color: '#fff',
};

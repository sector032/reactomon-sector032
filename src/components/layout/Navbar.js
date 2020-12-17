import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={headerStyle}>
      <img
        src='https://cdn.iconscout.com/icon/premium/png-512-thumb/pokeball-games-video-casino-gamer-42236.png'
        width='50'
        height='50'
      ></img>
      <h1>Project Reactomon</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <Link class="nav-link" to='/'>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/pokemons'>Pokemons</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/types'>Types</Link>
      </li>
    </ul>
  </div>
</nav>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  padding: '10px',
  background: 'red',
  color: '#fff',
};

const navStyle = {
  textAlign: 'center',
  padding: '10px',
};



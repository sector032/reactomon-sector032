import React, { Component } from 'react';
import PokeItem from './PokeItem';

class PokemonList extends Component {
  render() {
    return this.props.pokelist.map((poke) => (
      <h1>
        <PokeItem poke={poke}/>
      </h1>
    ));
  }
}

export default PokemonList;

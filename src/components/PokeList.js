import React, { Component } from 'react';
import PokeItem from './PokeItem';
import PropTypes from 'prop-types';


class PokeList extends Component {

  render() {
    return this.props.pokemonlist.map((poke) => (
      <h1>
        <PokeItem key={poke.url} poke={poke}/>
      </h1>
    ));
  }
}

export default PokeList;


PokeList.propTypes = {
  pokemonlist: PropTypes.array.isRequired
}
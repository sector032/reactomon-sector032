import React, { Component } from 'react';
import PokeItem from './PokeItem';
import PropTypes from 'prop-types';


class PokeList extends Component {

  render() {
    return this.props.pokemonlist.map((poke) => (
        <PokeItem url={poke.url} name={poke.name}/>
    ));
  }
}

export default PokeList;


PokeList.propTypes = {
  pokemonlist: PropTypes.array.isRequired
}
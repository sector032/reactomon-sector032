import React, { Component } from 'react';
import PokeItem from './PokeItem';
import PropTypes from 'prop-types';


class PokeList extends Component {

  render() {
    return this.props.pokemonlist.map((poke) => (
      <div style={itemStyle}>
        <PokeItem url={poke.url} key={poke.url} name={poke.name}/>
        </div>
    
    ));
  }
}

export default PokeList;


PokeList.propTypes = {
  pokemonlist: PropTypes.array.isRequired
}

const itemStyle = {
  color: "red",
  textTransform: 'capitalize',
  display: 'inline-flex',
  margin: '10px',
  textAlign: 'center',
  border: '3px solid',
  borderColor:  'blue',
  background: 'yellow',
  borderRadius: '25px',
  fontWeight: 'bold',

}
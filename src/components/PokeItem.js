import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PokeItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.poke.name}</p>
      </div>
    );
  }
}

export default PokeItem;

PokeItem.propTypes = {
    poke: PropTypes.object.isRequired
}

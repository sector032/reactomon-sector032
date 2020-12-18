import React, { Component } from 'react';
import TypeItem from './TypeItem';


class Types extends Component {

  render() {
    return this.props.typelist.map((poke) => (
        <TypeItem key={poke.url} name={poke.name}/>
    ));
  }
}

export default Types;



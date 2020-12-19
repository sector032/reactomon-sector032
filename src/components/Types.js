import React, { Component } from 'react';
import TypeItem from './TypeItem';


class Types extends Component {

  render() {
    return this.props.typelist.map((poke) => (
      <div style={typeStyle }>
        <TypeItem key={poke.url} name={poke.name}/>
      </div>
    ));
  }
}

export default Types;


const typeStyle = {
  color: "red",
  textTransform: "capitalize",
  display: 'inline-flex',
  margin: '10px'
}
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
  textAlign: "center",
  textTransform: "capitalize",
  margin: "10px",
  fontWeight: "bold",
  fontSize: "20px"

}
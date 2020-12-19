import React, { Component } from 'react';

export class TypeItem extends Component {
  render() {
    return (
      <div tlye={typeStyle}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default TypeItem;

const typeStyle = {
  color: "red",
  textTransform: "capitalize"
}

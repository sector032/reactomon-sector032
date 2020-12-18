import React, { Component } from 'react';

export class TypeItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default TypeItem;



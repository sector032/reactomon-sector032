import React, { Component } from 'react';
import axios from 'axios';



export class PokeItem extends Component {
  state = {
    image : null
  };
  componentDidMount(){
    axios.get(this.props.url).then((res) => this.setState({ image: res.data.sprites.front_default }));
  }

  render() {
    return (
      <div>
        <img src={this.state.image}></img>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PokeItem;



import React, { Component } from 'react';
import axios from 'axios';



export class PokeItem extends Component {
  state = {
    image : null,
    id: null
  };
  componentDidMount(){
    axios.get(this.props.url).then((res) => this.setState({ image: res.data.sprites.front_default, 
      id: res.data.id }));
  }

  render() {
    return (
      <div>
        <a href={`pokemon/${this.state.id}`}><img src={this.state.image}></img></a>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PokeItem;



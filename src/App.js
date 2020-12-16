import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/PokemonList';
import Types from './components/Types';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    pokelist: [],
  };

  /* componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({pokelist: res.data}));
  }*/

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <PokemonList pokelist={this.state.pokelist} />
              </React.Fragment>
            )} />
            <Route path="/types" component={Types}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

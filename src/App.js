import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import Types from './components/Types';
import MainPage from './components/MainPage';
//import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    pokemonlist: [{name:'helo'}, {name:'helo2'}],
  };

  /* componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({ pokemonlist: res.data }));
  }*/

  /*componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => this.setState({ typelist: res.data }));
  }*/

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Route exact path='/' component={MainPage} />
            <Route
              path='/pokemons'
              render={(props) => (
                <React.Fragment>
                  <PokeList pokemonlist={this.state.pokemonlist} />
                </React.Fragment>
              )}
            />
            <Route
              path='/types'
              component={Types}
              render={(props) => (
                <React.Fragment>
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import Types from './components/Types';
import MainPage from './components/MainPage';
import PokeDetail from './components/PokeDetail';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    pokemonlist: [],
    typelist: []
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({ pokemonlist: res.data.results }))
      axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res)=>this.setState({typelist: res.data.results}));
  }



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
              render={(props) => (
                <React.Fragment>
                  <Types typelist={this.state.typelist} />
                </React.Fragment>
              )}
            />
              <Route path="/pokemon/:id">
                <PokeDetail />
              </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


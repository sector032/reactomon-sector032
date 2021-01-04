import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import Types from './components/Types';
import MainPage from './components/MainPage';
import PokeDetail from './components/PokeDetail';
import axios from 'axios';
import './App.css';

const App = (props) => {
	const [pokemons, setPokemons] = useState([]);
	const [types, setTypes] = useState([]);

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon')
			.then((response) => setPokemons(response.data.results));
		axios
			.get('https://pokeapi.co/api/v2/type')
			.then((response) => setTypes(response.data.results));
	}, []);
	return (
		<Router>
			<div className='App'>
				<div className='container'>
					<Navbar />
					<Route exact path='/' component={MainPage} />
					<Route
						path='/pokemons'
						render={(props) => <PokeList pokemons={pokemons} />}
					/>
					<Route path='/types' render={(props) => <Types types={types} />} />
					<Route path='/pokemon/:id'>
						<PokeDetail />
					</Route>
				</div>
			</div>
		</Router>
	);
};

export default App;

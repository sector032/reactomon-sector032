import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import Types from './components/Types';
import MainPage from './components/MainPage';
import PokeDetail from './components/PokeDetail';
import axios from 'axios';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body{
		background-color: ${(props) => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
		color: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
	}
`;

const App = (props) => {
	const [pokemons, setPokemons] = useState([]);
	const [types, setTypes] = useState([]);
	const [theme, setTheme] = useState({ mode: 'dark' });

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon')
			.then((response) => setPokemons(response.data.results));
		axios
			.get('https://pokeapi.co/api/v2/type')
			.then((response) => setTypes(response.data.results));
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<div className='App'>
					<div className='container'>
						<Navbar />
						<button
							onClick={(e) =>
								setTheme(
									theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' }
								)
							}
						>
							ToggleTheme
						</button>
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
		</ThemeProvider>
	);
};

export default App;

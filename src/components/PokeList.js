import PokeItem from './PokeItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokemonContainer = styled.div`
	display: flex;
	flex-flow: wrap;
`;

const PokeList = (props) => {
	const getPokemons = () =>
		props.pokemons.map((pokemon) => (
			<PokeItem key={pokemon.url} name={pokemon.name} url={pokemon.url} />
		));

	return <PokemonContainer>{getPokemons()}</PokemonContainer>;
};

export default PokeList;

PokeList.propTypes = {
	pokemonlist: PropTypes.array.isRequired,
};

import React from 'react';
import styled from 'styled-components';

const PokemonTypes = styled.p`
	padding: 1rem;
	text-transform: capitalize;
	font-size: 2rem;
`;

const TypeItem = (props) => {
	return <PokemonTypes>{props.name}</PokemonTypes>;
};

export default TypeItem;

import React from 'react';
import TypeItem from './TypeItem';
import styled from 'styled-components';

const PokemonTypes = styled.div`
	text-align: center;
	color: red;
`;

const Types = (props) => {
	const getTypes = () =>
		props.types.map((type) => <TypeItem key={type.url} name={type.name} />);

	return (
		<React.Fragment>
			<PokemonTypes>{getTypes()}</PokemonTypes>
		</React.Fragment>
	);
};

export default Types;

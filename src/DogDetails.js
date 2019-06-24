import React from 'react';

const DogDetails = ({ match }) => {
	return (
		<div>
			<h2>{match.params.name}</h2>
		</div>
	);
};

export default DogDetails;
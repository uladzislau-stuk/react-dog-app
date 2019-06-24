import React from 'react';
import './Dog.css'

const Dog = (props) => {
	const { name, src } = props

	return (
		<div className='Dog col-md-6 col-lg-4 text-center' key={name}>
			<img src={src} alt={name} />
			<h3>{name}</h3>
		</div>
	);
};

export default Dog;
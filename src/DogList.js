import React from 'react';
import Dog from './Dog'

const DogList = (props) => {
	return (
		<div className='DogList'>
			<h1 className='display-1 text-center'>Dog List!</h1>
			<div className='container'>
				<div className='row'>
					{props.dogs.map(dog => (
						<Dog {...dog} />
					))}
				</div>
			</div>
		</div>
	);
};

export default DogList;
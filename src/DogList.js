import React from 'react';
import uuid from 'uuid/v4'
import Dog from './Dog'

const DogList = (props) => {
	return (
		<div className='DogList'>
			<h1 className='display-1 text-center'>Dog List!</h1>
			<div className='container'>
				<div className='row'>
					{props.dogs.map(dog => (
						<Dog key={uuid()} {...dog} />
					))}
				</div>
			</div>
		</div>
	);
};

export default DogList;
import React, { Component } from 'react'
import uuid from 'uuid/v4'
import Dog from './Dog'

class DogList extends Component {
	render() {
		return (
			<div className='DogList'>
				<h1 className='display-1 text-center'>Dog List!</h1>
				<div className='container'>
					<div className='row'>
						{this.props.dogs.map(dog => (
							<Dog key={uuid()} dog={dog} />
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default DogList
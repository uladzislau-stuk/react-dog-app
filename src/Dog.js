import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Dog.css'

class Dog extends Component {
	render() {
		const { name, src }  = this.props.dog
		
		return (
			<NavLink to={`/dogs/${name.toLowerCase()}`} className='Dog col-md-6 col-lg-4 text-center' key={name}>
				<img src={src} alt={name} />
				<h3>{name}</h3>
			</NavLink>
		)
	}
}

export default Dog
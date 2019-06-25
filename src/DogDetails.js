import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PetCard from './PetCard'

import './DogDetails.css'

class DogDetails extends Component {
	render() {
		return (
			<div className='DogDetails'>
				<Container className='DogDetails-container'>
					<Row>
						<Col className='d-flex justify-content-center'>
							<PetCard {...this.props} />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default DogDetails
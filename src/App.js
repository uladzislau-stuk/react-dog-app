import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DogList from './DogList'
import DogDetails from './DogDetails'
import NoMatch from './NoMatch'
import dogs from './data/dogs'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
					exact
					path='/dogs'
                    render={() => <DogList dogs={dogs} /> }
                />
                <Route
                    exact
                    path='/dogs/:name'
                    render={routeProps => <DogDetails dogs={dogs} {...routeProps} /> }
                />
                <Route
                    render={NoMatch}
                />
            </Switch>
        )
    }
}

export default App

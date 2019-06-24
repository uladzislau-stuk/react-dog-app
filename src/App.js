import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import DogList from './DogList'
import DogDetails from './DogDetails'
import dogs from './data/dogs'

class App extends Component {
    constructor(props) {
        super(props)
    }
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
                    render={(routeProps) => <DogDetails {...routeProps} /> }
                />
            </Switch>
        );
    }
}

export default App;

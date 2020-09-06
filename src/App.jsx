import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PokemonsLibrary from './pages/PokemonsLibrary/PokemonsLibrary';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import AbilityPage from './pages/AbilityPage/AbilityPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <PokemonsLibrary />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonPage />
          </Route>
          <Route path="/ability/:name">
            <AbilityPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

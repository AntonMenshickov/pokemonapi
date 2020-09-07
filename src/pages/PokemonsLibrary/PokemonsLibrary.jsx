import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPokemons, filterPokemons } from '../../redux/actions/actions';
import Card from '../../components/Card/Card';
import './PokemonsLibrary.scss';
import { withRouter } from "react-router";

class PokemonsLibrary extends React.Component {

  constructor() {
    super();
    this.state = {
      filteredPokemons: [],
    }
  }

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  onSearchInput(e) {
    this.props.updatePokemonsFilter(e.target.value);
  }

  filterPokemonsByName(name) {
    if (name === '') {
      return this.props.pokemons;
    }
    return this.props.pokemons.filter(pokemon => pokemon.name.includes(name));
  }

  render() {
    const { pokemonsFilterString } = this.props;
    return (
      <div className="pokemons-library">
        <div className="page-header">
          <h1>Pokemons library</h1>
          <input type="text" value={this.props.pokemonsFilterString} onChange={(e) => this.onSearchInput(e)} placeholder="Search by name..." />
        </div>
        <div className="pokemons-list">
          {this.filterPokemonsByName(pokemonsFilterString).map((pokemon) => <div key={pokemon.url} onClick={() => this.navigateToPokemonPage(pokemon.name)} className="card-wrapper">
            <Card title={pokemon.name} />
          </div>)}
        </div>
      </div>
    );
  }

  navigateToPokemonPage(name) {
    const { history } = this.props;
    this.props.updatePokemonsFilter(''); // reset filter when leave page
    history.push(`/pokemon/${name}`)
  }

}

PokemonsLibrary.defaultProps = {
  pokemons: [],
};
PokemonsLibrary.propTypes = {
  load: PropTypes.func.isRequired,
  updatePokemonsFilter: PropTypes.func.isRequired,
  pokemonsFilterString: PropTypes.string.isRequired,
  pokemons: PropTypes.arrayOf(Object),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadPokemons());
  },
  updatePokemonsFilter: (name) => {
    dispatch(filterPokemons(name));
  }
});

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  pokemonsFilterString: state.pokemonsFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonsLibrary));

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPokemons } from '../../redux/actions/actions';
import Card from '../../components/Card/Card';
import './PokemonsLibrary.scss';
import { withRouter } from "react-router";

class PokemonsLibrary extends React.Component {

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokemons-library">
        <h1>Pokemons library</h1>
        <div className="pokemons-list">
          {pokemons.map((pokemon) => <div key={pokemon.url} onClick={() => this.navigateToPokemonPage(pokemon.name)} className="card-wrapper">
            <Card title={pokemon.name} />
            </div>)}
        </div>
      </div>
    );
  }

  navigateToPokemonPage(name) {
    const { history } = this.props;
    history.push(`/pokemon/${name}`)
  }

}

PokemonsLibrary.defaultProps = {
  pokemons: [],
};
PokemonsLibrary.propTypes = {
  load: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(Object),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadPokemons());
  },
});

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonsLibrary));

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pokemonLoadRequest } from '../../redux/actions/actions';
import './PokemonPage.scss';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class PokemonPage extends React.Component {

  componentDidMount() {
    const { loadPokemon } = this.props;
    loadPokemon(this.props.match.params.name);
  }

  render() {
    const { pokemon } = this.props;
    if (pokemon === null) {
      return <div className="pokemon-page">
        <h1>Loading...</h1>
      </div>
    }
    return (
      <div className="pokemon-page">
        <div className="navigate-back">
          <Link to="/" >← Go back</Link>
        </div>
        <div className="pokemon-info">
          <div className="picture">
            <div className="pokemon-name">#{pokemon.order} {pokemon.name}</div>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="artwork" />
          </div>
          <div className="pokemon-stats">
            <div className="stats-header">Main stats:</div>
            {pokemon.stats.map(stat => <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>)}
          </div>
          <div className="pokemon-stats">
            <div className="stats-header">Type:</div>
            {pokemon.types.map(type => <div key={type.type.name}>{type.type.name}</div>)}
          </div>
          <div className="pokemon-stats">
            <div className="stats-header">Size:</div>
            <div>height: {pokemon.height}</div>
            <div>weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-stats">
            <div className="stats-header">Abilities:</div>
            <ul>
              {pokemon.abilities.map(ability =>
                <li key={ability.ability.name}>
                  <Link to={`/ability/${ability.ability.name}`}>{ability.ability.name}</Link>
                </li>)}
            </ul>
          </div>
          {
            pokemon.held_items > 0 ?
              <div className="pokemon-stats">
                <div className="stats-header">Held items:</div>
                {pokemon.held_items.map(item => <div key={item.item.name}>{item.item.name}</div>)}
              </div> : null
          }
        </div>
      </div>
    );
  }
}

PokemonPage.defaultProps = {
  pokemon: {}
};
PokemonPage.propTypes = {
  pokemon: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  loadPokemon: (name) => {
    dispatch(pokemonLoadRequest(name));
  }
});

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonPage));

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { abilityLoadRequest } from '../../redux/actions/actions';
import './AbilityPage.scss';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class AbilityPage extends React.Component {

  componentDidMount() {
    const { loadAbility } = this.props;
    loadAbility(this.props.match.params.name);
  }

  renderBackButton() {
    const { pokemon } = this.props;
    return (
      <div className="navigate-back">
        {
          pokemon === null ?
            <Link to={`/`} >← Go back</Link> :
            <Link to={`/pokemon/${pokemon.name}`} >← Go back</Link>
        }
      </div>
    );
  }

  getEnAbilityEffects() {
    const { ability } = this.props;
    return ability.effect_entries.filter(entrie => entrie.language.name === "en")
  }

  render() {
    const { ability } = this.props;
    if (ability === null) {
      return <div className="ability-page">
        {this.renderBackButton()}
        <h1>Loading...</h1>
      </div>
    }
    return (
      <div className="ability-page">
        {this.renderBackButton()}
        <div className="ability-info">
          <div className="ability-name">Ability: {ability.name}</div>
          <div className="effects">Effects:</div>
          {this.getEnAbilityEffects().map((effect, index) => <p key={index}>{effect.effect}</p>)}
        </div>
      </div>
    );
  }
}

AbilityPage.defaultProps = {
  pokemon: null,
  ability: null
};
AbilityPage.propTypes = {
  pokemon: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  loadAbility: (name) => {
    dispatch(abilityLoadRequest(name));
  }
});

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  ability: state.ability
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AbilityPage));

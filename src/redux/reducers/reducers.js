import { Actions } from '../actions/actions';


const initialState = {
  nameFilter: '',
  pokemons: [],
  pokemon: null,
  ability: null,
  error: null,
};


function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case Actions.LOAD_POKEMONS_SUCCEEDED:
      return { ...state, pokemons: action.pokemons };
    case Actions.LOAD_POKEMON_REQUEST:
      return { ...state, pokemon: null };
    case Actions.POKEMON_LOADED:
      return { ...state, pokemon: action.pokemon };
      case Actions.LOAD_ABILITY_REQUEST:
        return { ...state, ability: null };
      case Actions.ABILITY_LOADED:
        return { ...state, ability: action.ability };
    case Actions.REQUEST_FAILED:
      return state;
    default:
      return state;
  }
}

export default rootReducer;

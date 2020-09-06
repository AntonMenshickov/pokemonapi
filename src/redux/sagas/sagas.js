import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { Actions } from '../actions/actions';
import { loadPokemons, loadPokemonByName, loadAbilityByName } from '../../pokeapi/pokeapi';

function* loadPokemonsSaga() {
  try {
    const pokemons = yield call(loadPokemons);
    yield put({ type: Actions.LOAD_POKEMONS_SUCCEEDED, pokemons });
  } catch (e) {
    yield put({ type: Actions.REQUEST_FAILED, message: e.message });
  }
}

function* loadPokemonSaga(params) {
  try {
    const pokemon = yield call(loadPokemonByName, params.name);
    yield put({ type: Actions.POKEMON_LOADED, pokemon });
  } catch (e) {
    yield put({ type: Actions.REQUEST_FAILED, message: e.message });
  }
}

function* loadAbilitySaga(params) {
  try {
    const ability = yield call(loadAbilityByName, params.name);
    yield put({ type: Actions.ABILITY_LOADED, ability });
  } catch (e) {
    yield put({ type: Actions.REQUEST_FAILED, message: e.message });
  }
}

export default function* saga() {
  yield takeLatest(Actions.LOAD_POKEMONS, loadPokemonsSaga);
  yield takeLatest(Actions.LOAD_POKEMON_REQUEST, loadPokemonSaga)
  yield takeLatest(Actions.LOAD_ABILITY_REQUEST, loadAbilitySaga)
}

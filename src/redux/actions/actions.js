export const Actions = {
  LOAD_POKEMONS: 'LOAD_POKEMONS',
  LOAD_POKEMONS_SUCCEEDED: 'LOAD_POKEMONS_SUCCEEDED',
  REQUEST_FAILED: 'REQUEST_FAILED',
  LOAD_POKEMON_REQUEST: 'LOAD_POKEMON_REQUEST',
  POKEMON_LOADED: 'POKEMON_LOADED',
  LOAD_ABILITY_REQUEST: 'LOAD_ABILITY_REQUEST',
  ABILITY_LOADED: 'ABILITY_LOADED',
  FILTER_POKEMONS: 'FILTER_POKEMONS',
};

export const loadPokemons = () => ({
  type: Actions.LOAD_POKEMONS,
});

export const loadPokemonsSucceeded = (pokemons) => ({
  type: Actions.LOAD_POKEMONS_SUCCEEDED,
  pokemons,
});

export const requestFailed = (message) => ({
  type: Actions.REQUEST_FAILED,
  message,
});

export const pokemonLoadRequest = (name) => ({
  type: Actions.LOAD_POKEMON_REQUEST,
  name
})

export const pokemonLoaded = (pokemon) => ({
  type: Actions.POKEMON_LOADED,
  pokemon
})

export const abilityLoadRequest = (name) => ({
  type: Actions.LOAD_ABILITY_REQUEST,
  name
})

export const abilityLoaded = (ability) => ({
  type: Actions.ABILITY_LOADED,
  ability
})

export const filterPokemons = (name) => ({
  type: Actions.FILTER_POKEMONS,
  name
})
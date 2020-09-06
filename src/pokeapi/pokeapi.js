const apiURL = 'https://pokeapi.co/api/v2/';

export async function loadPokemons() {
  const { results } = await (await fetch(`${apiURL}pokemon?limit=20&offset=0`)).json();
  return results;
}

export async function loadPokemonByName(name) {
  const pokemon = await (await fetch(`${apiURL}pokemon/${name}`)).json();
  return pokemon;
}

export async function loadAbilityByName(name) {
  const ability = await (await fetch(`${apiURL}ability/${name}`)).json();
  return ability;
}

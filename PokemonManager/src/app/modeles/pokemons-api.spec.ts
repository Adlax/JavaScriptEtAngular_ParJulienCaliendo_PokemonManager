import { PokemonsAPI } from './pokemons-api';

describe('PokemonsAPI', () => {
  it('should create an instance', () => {
    expect(new PokemonsAPI()).toBeTruthy();
  });
});

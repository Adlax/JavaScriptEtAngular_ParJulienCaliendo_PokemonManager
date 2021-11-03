import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemons.service';

import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('PokemonsService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit implementer trois methodes', () => {
    expect(service.getGenerations()).not.toBeUndefined();
    expect(service.getPokemons()).not.toBeUndefined();
    expect(service.getPokemon('testUrl')).not.toBeUndefined();
  });

});

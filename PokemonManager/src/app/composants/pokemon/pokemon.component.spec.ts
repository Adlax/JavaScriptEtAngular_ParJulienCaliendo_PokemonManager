import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemons.service';
import { PokemonAPI } from 'src/app/modeles/pokemon-api';
import { of } from 'rxjs';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(PokemonService);
    const pokemonAPI: PokemonAPI = {name:"monPokemeon",sprites:{back_default:'',front_default:''},height:123,weight:123};
    spyOn(service,'getPokemon').and.returnValue(of(pokemonAPI));
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    spyOn(component.evnt,'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit pouvoir envoyer le pokemon selectionne', () => {
    component.selection('pokeMesBurnes');
    expect(component.evnt.emit).toHaveBeenCalledWith('pokeMesBurnes');
  });

});

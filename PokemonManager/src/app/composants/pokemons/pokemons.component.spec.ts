import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsComponent } from './pokemons.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { PokemonComponent } from 'src/app/composants/pokemon/pokemon.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemons.service';
import { PokemonsAPI } from 'src/app/modeles/pokemons-api';
import { of } from 'rxjs';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsComponent, FaIconComponent, PokemonComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(PokemonService);
    const pokemonsAPI: PokemonsAPI = {count:1, next:'', previous: '', results:[{name:'monPokemeon',url:'https://www.google.com'}]};
    spyOn(service,'getPokemons').and.returnValue(of(pokemonsAPI));
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('doit trouver C3PO' () => {
  //   component.recherchePokemon('C3PO');
  //   expect(component.easterEgg).toBeTruthy();
  // });
  //
  // it('ne doit pas trouver C3PO' () => {
  //   component.recherchePokemon('ZoubirPok');
  //   expect(component.easterEgg).toBeFalsy();
  // });
  //
  // it('doit reinitialiser l input de recherche', () => {
  //   expect(component.formRecherchePokemon.nom).toEqual('');
  //   component.formRecherchePokemon.setNom('monPokepoke');
  //   expect(component.formRecherchePokemon.nom).not.toEqual('');
  //   component.annulerRecherche();
  //   expect(component.formRecherchePokemon.nom).toEqual('');
  // });

});

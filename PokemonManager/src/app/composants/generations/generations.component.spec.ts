import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationsComponent } from './generations.component';

import { PokemonService } from 'src/app/services/pokemons.service';

import { HttpClientTestingModule} from '@angular/common/http/testing';

import { of } from 'rxjs';


describe('GenerationsComponent', () => {
  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(PokemonService);
    spyOn(service,'getGenerations').and.returnValue(of({count:1,next:null,previous:null,results:[{name:'generations-i',url:'https://pokeapi.co/api/v2/generation/1'}]}));
    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit utiliser correctement le service', () => {
    expect(component.nrDeGenerations).not.toBeUndefined();
    expect(component.nrDeGenerations).not.toBeNull();
    expect(component.nrDeGenerations).toEqual(1);
    expect(component.generations).not.toBeUndefined();
    expect(component.generations).not.toBeNull();
  });

});

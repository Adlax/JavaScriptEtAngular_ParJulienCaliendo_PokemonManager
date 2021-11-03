import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemons.service';

import { PokemonAPI } from 'src/app/modeles/pokemon-api';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // @Input() pokemon:{id:number, nom:string, img:string, categorie:string, types:string[], taille:number, poids:number};

  @Input() pokemonInput: any;

  @Output() evnt = new EventEmitter();

  pokemonLocal: PokemonAPI = {
    name: '',
    sprites: {back_default: '',front_default: ''},
    height: 0,
    weight: 0,
  };

  selection(pokemon:any){
    this.evnt.emit(pokemon);
  }

  constructor(private pokService: PokemonService) { }

  ngOnInit(): void {
    this.pokService.getPokemon(this.pokemonInput['url']).subscribe( (data) => {
      this.pokemonLocal = data;
    } );
  }

}

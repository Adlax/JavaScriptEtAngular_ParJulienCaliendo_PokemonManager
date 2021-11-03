import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemons.service';
import { FormRecherchePokemon } from 'src/app/modeles/form-recherche-pokemon';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  // pokemons:{id:number, nom:string, img:string, categorie:string, types:string[], taille:number, poids:number}[] = [];
  pokemons: any;
  comptage:number = 0;
  pokemonSelectionne:any;
  faOptinMonster = faOptinMonster;
  formRecherchePokemon = new FormRecherchePokemon('');
  easterEgg = false;

  constructor(private pokService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokService.getPokemons().subscribe( (data) => {
      this.pokemons = data.results;
      this.comptage = data.count;
    } );
  }

  recherchePokemon(nom:string){
    //console.log('Recherche : '+nom);
    let regex = new RegExp(nom,'gi');
    if( nom === "C3PO" ){
      this.easterEgg = true;
    } else {
      this.easterEgg = false;
    }
    return this.pokemons = this.pokemons.filter( (pokCourant:any) => {
      if(pokCourant.name.match(regex))
      { return true; }
      else {return false;}
    } );
  }

  annulerRecherche(){
    this.ngOnInit();
    this.formRecherchePokemon.setNom(''); //remettre nom a '';
    this.easterEgg = false;
  }

}

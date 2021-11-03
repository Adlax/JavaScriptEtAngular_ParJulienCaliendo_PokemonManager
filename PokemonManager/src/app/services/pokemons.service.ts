import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GenerationsAPI } from 'src/app/modeles/generations-api';

import { PokemonsAPI } from 'src/app/modeles/pokemons-api';
import { PokemonAPI } from 'src/app/modeles/pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // pokemons:{id:number, nom:string, img:string, categorie:string, types:string[], taille:number, poids:number}[] = [
  //     {
  //       id:1,
  //       nom:'Bulbizarre',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  //       categorie:'graine',
  //       types: ['plante','poison'],
  //       taille:0.7,
  //       poids:6.9
  //     },
  //     {
  //       id:2,
  //       nom:'Herbizarre',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  //       categorie:'graine',
  //       types: ['plante','poison'],
  //       taille:1,
  //       poids:13
  //     },
  //     {
  //       id:3,
  //       nom:'Florizarre',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  //       categorie:'graine',
  //       types: ['plante','poison'],
  //       taille:2,
  //       poids:100
  //     },
  //     {
  //       id:4,
  //       nom:'Salameche',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  //       categorie:'lezard',
  //       types: ['feu'],
  //       taille:0.6,
  //       poids:8.5
  //     },
  //     {
  //       id:5,
  //       nom:'Reptincel',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  //       categorie:'flamme',
  //       types: ['feu'],
  //       taille:1.1,
  //       poids:19
  //     },
  //     {
  //       id:6,
  //       nom:'Dracaufeu',
  //       img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  //       categorie:'flamme',
  //       types: ['feu','vol'],
  //       taille:1.7,
  //       poids:90.5
  //     }
  //   ];

  constructor(private http: HttpClient) { }

  getGenerations() {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationsAPI>(url);
  }

  getPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokemonsAPI>(url);
  }

  getPokemon(url: string){
    return this.http.get<PokemonAPI>(url);
  }

  // comptagePokemons(){
  //   return this.pokemons.length;
  // }

  // recherchePokemon(nom:string) {
  //   let regex = new RegExp(nom,'gi');
  //   return this.pokemons.filter( pokCourant => pokCourant.nom.match(regex) );
  // }

}

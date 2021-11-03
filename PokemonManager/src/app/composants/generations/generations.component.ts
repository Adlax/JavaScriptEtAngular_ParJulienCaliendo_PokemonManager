import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  // generations = [
  //   'Generations I',
  //   'Generations II',
  //   'Generations III',
  //   'Generations IV',
  //   'Generations V',
  //   'Generations VI',
  //   'Generations VII',
  // ];

  generations: any;
  nrDeGenerations: any;

  constructor(private pokService: PokemonService) { }

  ngOnInit(): void {
    this.pokService.getGenerations().subscribe( (data) => {
        this.generations = data.results;
        this.nrDeGenerations = data.count;
    });
  }

}

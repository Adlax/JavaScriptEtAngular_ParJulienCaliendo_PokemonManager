import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from 'src/app/composants/pokemons/pokemons.component';
import { ConnectionComponent } from 'src/app/composants/connection/connection.component';
import { CreationComponent } from 'src/app/composants/creation/creation.component';
import { GenerationsComponent } from 'src/app/composants/generations/generations.component';

const routes: Routes = [
  {path:'pokemons',component:PokemonsComponent},
  {path:'creerCompte',component:CreationComponent},
  {path:'seConnecter',component:ConnectionComponent},
  {path:'generations',component:GenerationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

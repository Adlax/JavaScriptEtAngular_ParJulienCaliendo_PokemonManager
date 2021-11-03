import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

// locale : fr et tubes
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR);

import { FormsModule } from '@angular/forms';
import { BarreDeNavigationComponent } from './composants/barre-de-navigation/barre-de-navigation.component';
import { CreationComponent } from './composants/creation/creation.component';
import { ConnectionComponent } from './composants/connection/connection.component';
import { GenerationsComponent } from './composants/generations/generations.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent,
    BarreDeNavigationComponent,
    CreationComponent,
    ConnectionComponent,
    GenerationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

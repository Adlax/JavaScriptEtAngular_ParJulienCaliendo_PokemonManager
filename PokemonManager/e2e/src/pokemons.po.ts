// pokemons.po.ts
import { browser, element, by } from 'protractor';

export class PokemonsPage {

  navigateTo() {
    // Navigate to the home page of the app
    return browser.get(browser.baseUrl+'pokemons') as Promise<any>;
  }

  getNbrDePokemons() {
    return element.all(by.css('li')).count();
  }

  getInputFormulaireDeRecherche() {
    return element(by.name('pokemonRecherche'));
  }

  getEasterEgg() {
    return element(by.id('easterEggs'));
  }

  getBtnRechercher() {
    return element(by.id('btnRechercher'));
  }

}

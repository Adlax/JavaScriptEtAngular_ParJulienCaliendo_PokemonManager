// app.po.ts
import { browser, element, by } from 'protractor';

export class AppPage {

  navigateTo() {
    // Navigate to the home page of the app
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  lienGenerations(){
    return element(by.id('lienGenerations'));
  }

  lienPokemons(){
    return element(by.id('lienPokemons'));
  }

  // getInputParSonId() {
  //   return element(by.id('prenom'));
  // }
  //
  // getBouttonParSonId(){
  //   return element(by.id('bouton'));
  // }
  //
  // getListeParSonId(){
  //   return element.all(by.id('liste'));
  // }

  // getTitleText() {
  //   // Get the home page heading element reference
  //   return element(by.css('app-root')).getText() as Promise<any>;
  // }
  //
  // getMessage(){
  //   return element(by.id('message'));
  // }
  //
  // getMessageParInterpo(){
  //   return element(by.binding('message'));
  // }

  // getBouttonParSonNom(){
  //   return element(by.name('guerre'));
  // }
  //
  // getBouttonParSaClasse(){
  //   return element(by.css('boutons'))
  // }


}

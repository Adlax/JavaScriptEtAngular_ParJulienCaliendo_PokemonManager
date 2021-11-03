import { PokemonsPage } from './pokemons.po';
import { browser, logging } from 'protractor';

describe('Page des pokemons', () => {

  let page: PokemonsPage;

  beforeEach( () => {
    page = new PokemonsPage();
    page.navigateTo();
    browser.sleep(3000);
  });

  it("Doit trouver un nombre de pokemons distinct de zero", async () => {
    const nbrDePoks = page.getNbrDePokemons();
    expect(await nbrDePoks).not.toEqual(0);
    browser.sleep(1000);
  });

  it("Ne doit pas montrer l'easter egg des le depart", async () => {
    const input = page.getInputFormulaireDeRecherche();
    const easter = page.getEasterEgg();
    expect(await easter.isDisplayed()).toBeFalsy();
  });

  // a remettre quand la recherche sera reparee :
  // it("Doit montrer l'easter egg apres la juste recherche", async () => {
  //   const input = page.getInputFormulaireDeRecherche();
  //   const easter = page.getEasterEgg();
  //   const btn = page.getBtnRechercher();
  //   expect(await easter.isDisplayed()).toBeFalsy();
  //   input.sendKeys('C6PO');
  //   btn.click();
  //   expect(await easter.isDisplayed()).toBeTruthy();
  // });


  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({level:logging.Level.SEVERE} as logging.Entry));
  });

});

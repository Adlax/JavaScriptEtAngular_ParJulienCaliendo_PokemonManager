import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {

  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
    page.navigateTo();
    browser.sleep(3000);
  });

  it("Doit changer d'url apres click sur le lien generations", async () => {
    //browser.sleep(3000);
    page.lienGenerations().click();
    expect(await browser.getCurrentUrl()).toBe(browser.baseUrl+'generations');
    browser.sleep(3000);
  });

  it("Doit changer d'url apres click sur le lien pokemons", async () => {
    //browser.sleep(3000);
    page.lienPokemons().click();
    expect(await browser.getCurrentUrl()).toBe(browser.baseUrl+'pokemons');
    browser.sleep(3000);
  });

  // it("Doit changer d'url apres click sur le lien generations", async () => {
  //   //browser.sleep(3000);
  //   setTimeout( ()=>{page.lienGenerations().click()}, 1000 );
  //   expect(await browser.getCurrentUrl()).toBe(browser.baseUrl+'generations');
  //   browser.sleep(3000);
  // });
  //
  // it("Doit changer d'url apres click sur le lien pokemons", async () => {
  //   //browser.sleep(3000);
  //   setTimeout( ()=>{page.lienPokemons().click()}, 1000 );
  //   expect(await browser.getCurrentUrl()).toBe(browser.baseUrl+'pokemons');
  //   browser.sleep(3000);
  // });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({level:logging.Level.SEVERE} as logging.Entry));
  });

  // it('Doit trouver trois elements au depart', () => {
  //   expect(page.getListeParSonId().count()).toBe(3);
  // });
  //
  // it('Doit avoir 4 elements apres un ajout valide', () => {
  //   const champPrenom = page.getInputParSonId();
  //   const bouton = page.getBouttonParSonId();
  //   champPrenom.sendKeys('TataBinch');
  //   bouton.click();
  //   expect(page.getListeParSonId().count()).toBe(4);
  // });
  //
  // it('Ne doit pas ajouter un element deja present dans la liste', () => {
  //   const champPrenom = page.getInputParSonId();
  //   const bouton = page.getBouttonParSonId();
  //   champPrenom.sendKeys('yoda');
  //   bouton.click();
  //   expect(page.getListeParSonId().count()).toBe(3);
  // });
  //
  // it('Ne doit pas ajouter le vide dans la liste', () => {
  //   const champPrenom = page.getInputParSonId();
  //   const bouton = page.getBouttonParSonId();
  //   champPrenom.sendKeys('');
  //   bouton.click();
  //   expect(page.getListeParSonId().count()).toBe(3);
  // });

});

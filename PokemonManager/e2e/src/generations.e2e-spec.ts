import { GenerationsPage } from './generations.po';
import { browser, logging } from 'protractor';

describe('Page des generations', () => {

  let page: GenerationsPage;

  beforeEach( () => {
    page = new GenerationsPage();
    page.navigateTo();
    browser.sleep(3000);
  });

  it("Doit trouver un nombre de generations distinct de zero", async () => {
    const nbrDeGen = page.getNbrDeGenerations();
    expect(await nbrDeGen).not.toEqual(0);
    browser.sleep(1000);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({level:logging.Level.SEVERE} as logging.Entry));
  });

});

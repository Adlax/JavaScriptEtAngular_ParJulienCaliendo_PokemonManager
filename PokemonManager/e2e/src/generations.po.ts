// generations.po.ts
import { browser, element, by } from 'protractor';

export class GenerationsPage {

  navigateTo() {
    // Navigate to the home page of the app
    return browser.get(browser.baseUrl+'generations') as Promise<any>;
  }

  getNbrDeGenerations() {
    return element.all(by.css('li')).count();
  }

}

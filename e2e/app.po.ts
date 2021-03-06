import { browser, by, element } from 'protractor';

export class InventoryAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('inventory-app-root h1')).getText();
  }
}

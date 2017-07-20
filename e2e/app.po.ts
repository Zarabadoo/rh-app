import { browser, by, element } from 'protractor';

export class RhTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rh-root h1')).getText();
  }
}

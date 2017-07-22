import { browser, by, element } from 'protractor';

export class RhTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getUserTable() {
    return element(by.css('user-table__container'));
  }
}

export class RhTestUser {
  navigateTo() {
    return browser.get('/users/1');
  }

  getUser() {
    return element(by.css('user__details'));
  }
}

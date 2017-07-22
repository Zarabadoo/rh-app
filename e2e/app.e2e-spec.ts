import { RhTestPage, RhTestUser } from './app.po';

describe('rh-test App', () => {
  let page: RhTestPage;
  let user: RhTestUser;

  beforeEach(() => {
    page = new RhTestPage();
    user = new RhTestUser();
  });

  it('should display user list', () => {
    page.navigateTo();
    expect(page.getUserTable()).toBeTruthy();
  });

  it('should display a user', () => {
    user.navigateTo();
    expect(user.getUser()).toBeTruthy();
  });
});

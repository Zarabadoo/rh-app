import { RhTestPage } from './app.po';

describe('rh-test App', () => {
  let page: RhTestPage;

  beforeEach(() => {
    page = new RhTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rh!');
  });
});

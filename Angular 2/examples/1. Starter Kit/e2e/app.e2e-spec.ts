import { StarterProjectPage } from './app.po';

describe('starter-project App', function() {
  let page: StarterProjectPage;

  beforeEach(() => {
    page = new StarterProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

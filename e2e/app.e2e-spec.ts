import { TextAdventyrePage } from './app.po';

describe('text-adventyre App', function() {
  let page: TextAdventyrePage;

  beforeEach(() => {
    page = new TextAdventyrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

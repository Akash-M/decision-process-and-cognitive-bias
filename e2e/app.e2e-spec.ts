import { AngularTestBlogPage } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: AngularTestBlogPage;

  beforeEach(() => {
    page = new AngularTestBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

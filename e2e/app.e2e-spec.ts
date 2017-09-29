import { OrdinaAngularTestingWorkshopPage } from './app.po';

describe('ordina-angular-testing-workshop App', () => {
  let page: OrdinaAngularTestingWorkshopPage;

  beforeEach(() => {
    page = new OrdinaAngularTestingWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

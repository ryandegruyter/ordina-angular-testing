import { AppComponent } from './app.po';
import { browser } from 'protractor';

describe('Home Page', () => {
    let page: AppComponent;

    beforeEach(() => {
        page = new AppComponent();
        page.navigateTo();
    });

    it('should display the correct title', () => {
        expect(page.getTitleText()).toEqual('NG Square');
    });

    it('should navigate to the Home page when clicking the brand', () => {
        page.clickBrand();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/feed');
    });

    it('should navigate to the the Feed page when clicking the Feed menu', () => {
        page.clickFeed();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/feed');
    });

    it('should navigate to the Users page when clicking the Users menu', () => {
        page.clickUsers();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/users');
    });
});

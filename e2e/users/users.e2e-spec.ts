import { UsersPage } from './users.po';
import { browser } from 'protractor';

describe('Users page', () => {
    let page: UsersPage;

    beforeEach(() => {
        page = new UsersPage();
        page.navigateTo();
    });

    it('should show 10 users', () => {
        expect(page.userRows.count()).toEqual(10);
    });

    it('should navigate to the Profile page when selecting a user', () => {
        page.selectUser(0);
        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/users/1');
    });
});

import { ProfilePage } from './profile.po';
import { browser } from 'protractor';

describe('Profile page', () => {

    let profilePage: ProfilePage;

    beforeEach(() => {
        profilePage = new ProfilePage();
        profilePage.navigateTo();
    });

    it('should navigate back to the Users page when clicking on the back link', () => {
        profilePage.backLink.click();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/users');
    });

});

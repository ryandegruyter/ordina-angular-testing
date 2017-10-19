import { $, browser } from 'protractor';

export class ProfilePage {

    public backLink = $('#back-to-users');

    public navigateTo() {
        browser.get('/users/1');
    }

}

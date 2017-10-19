import { $, $$, browser } from 'protractor';

export class UsersPage {

    public userRows = $$('.user-row');

    public navigateTo() {
        browser.get('/users');
    }

    public selectUser(position: number) {
        this.userRows.get(position).click();
    }
}

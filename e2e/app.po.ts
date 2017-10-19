import { browser, by, element, $, $$, ElementFinder, ElementArrayFinder } from 'protractor';
import { Promise } from 'es6-promise';

export class AppComponent {

    public navBarItems: ElementArrayFinder = $$('.navbar-item');
    private navBarBurgerButton: ElementFinder = $('.button.navbar-burger');

    public navigateTo(): Promise<any> {
        return browser.get('/');
    }

    public getTitleText(): Promise<string> {
        return element(by.css('app-root h1')).getText();
    }

    public clickBrand(): void {
        const brandNavItem = this.navBarItems.get(0);
        brandNavItem.click();
    }

    public clickFeed(): Promise<any> {
        const feedNavItem = this.navBarItems.get(1);
        return this.navBarBurgerButton.isDisplayed().then((isDisplayed: boolean) => {
            if (isDisplayed) {
                this.navBarBurgerButton.click().then(() => {
                    feedNavItem.click();
                });
            } else {
                feedNavItem.click();
            }
        });
    }

    public clickUsers(): Promise<any> {
        const usersNavItem = this.navBarItems.get(2);
        return this.navBarBurgerButton.isDisplayed().then((isDisplayed: boolean) => {
            if (isDisplayed) {
                this.navBarBurgerButton.click().then(() => {
                    usersNavItem.click();
                });
            } else {
                usersNavItem.click();
            }
        });
    }
}

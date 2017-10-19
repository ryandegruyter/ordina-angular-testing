import { browser, $, $$, ExpectedConditions as until, element, by } from 'protractor';
import { Promise } from 'es6-promise';

export class FeedPage {

    public title = $('app-feed .title');
    public subTitle = $('app-feed .subtitle');
    public cardFooterItems = $$('.card-footer-item');
    public commentsList = $$('.comment-list');

    public navigateTo() {
        browser.get('/feed');
    }

    public getTitleText(): Promise<string> {
        return this.title.getText();
    }

    public getSubTitleText(): Promise<string>  {
        return this.subTitle.getText();
    }

    public openCommentsOfPost(postPosition: number): Promise<any> {
        return this.cardFooterItems.get(postPosition).click().then(() => {
            browser.driver.wait(until.presenceOf(this.commentsList.get(0)), 5000, 'Comments did not showed up');
        });
    }

    public closeCommentsOfPost(postPosition: number): void {
        this.cardFooterItems.get(postPosition).click();
    }

}

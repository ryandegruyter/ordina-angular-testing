import { FeedPage } from './feed.po';
import { CommentSection } from './comment/comment.po';

describe('Feed page', () => {

    let feedPage: FeedPage;

    beforeEach(() => {
        feedPage = new FeedPage();
        feedPage.navigateTo();
    });

    it('should display the correct title', () => {
        expect(feedPage.getTitleText()).toEqual('NG Square');
    });

    it('should display the correct subtitle', () => {
        expect(feedPage.getSubTitleText()).toEqual('An endless feed, just for you!');
    });

    describe('Comments section', () => {

        let commentSection: CommentSection;

        beforeEach(() => {
            commentSection = new CommentSection();
            feedPage.openCommentsOfPost(0);
        });

        it('should show the comments when clicking the Comments button', () => {
            expect(feedPage.commentsList.get(0).isDisplayed()).toBeTruthy();
        });

        it('should hide the comments when clicking the Comments button again', () => {
            feedPage.closeCommentsOfPost(0);
            expect(feedPage.commentsList.count()).toEqual(0);
        });

        describe('Adding a comment', () => {

            it('should validate if the Title has been set after blur', () => {
                commentSection.commentTitle.click();
                commentSection.commentEmail.click();
                expect(commentSection.errorMessage.getText()).toBe('Please write a title');
            });

            it('should validate if the Email has been set after blur', () => {
                commentSection.commentEmail.click();
                commentSection.commentTitle.click();
                expect(commentSection.errorMessage.getText()).toBe('Please provide an email address');
            });

            it('should validate if the Email is valid after blur', () => {
                commentSection.commentEmail.click();
                commentSection.commentEmail.sendKeys('test');
                commentSection.commentTitle.click();
                expect(commentSection.errorMessage.getText()).toBe('Please provide a valid email address');
            });

            it('should validate if the Message has been set after blur', () => {
                commentSection.commentBody.click();
                commentSection.commentTitle.click();
                expect(commentSection.errorMessage.getText()).toBe('Please write a message');
            });

            it('should disable the Send button if the comment is not valid', () => {
                expect(commentSection.sendButton.isEnabled()).toBe(false);
            });

            it('should enable the Send button if the comment is valid', () => {
                commentSection.commentTitle.sendKeys('Test');
                commentSection.commentEmail.sendKeys('test@test.com');
                commentSection.commentBody.sendKeys('Test');
                expect(commentSection.sendButton.isEnabled()).toBe(true);
            });

        });

    });

});

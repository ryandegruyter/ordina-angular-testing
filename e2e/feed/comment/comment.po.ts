import { $, element, by } from 'protractor';

export class CommentSection {
    public commentTitle = element(by.name('title'));
    public commentEmail = element(by.name('email'));
    public commentBody = element(by.name('body'));
    public errorMessage = $('.error-message');
    public sendButton = $('.add-comment');
}

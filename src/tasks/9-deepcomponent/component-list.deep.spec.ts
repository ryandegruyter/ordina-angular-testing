import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommentModule} from '../../app/feed/comment/comment.module';
import {CommentListComponent} from '../../app/feed/comment/comment-list/comment-list.component';
import {By} from '@angular/platform-browser';
import {SpinnerComponent} from '../../app/shared/spinner/spinner.component';
import {DebugElement} from '@angular/core';
import {Comment} from '../../app/json-placeholder-api/comment/comment';
import {CommentComponent} from '../../app/feed/comment/comment/comment.component';
import {AddCommentComponent} from '../../app/feed/comment/add-comment/add-comment.component';
import {commentListStub} from './utils';

describe('Deep component test: Comment list', () => {

    beforeEach(() => {
    });

    it('should create', () => {
    });

    describe('when there is no list of comments', () => {
        beforeEach(() => {
        });

        it('should not show comment list', () => {
        });

        it('should show app spinner', () => {
        });

        it('should not have comment add component', () => {
        });
    });

    describe('when there is a list of comments', () => {

        beforeEach(() => {
        });

        it('should not show app spinner', () => {
        });

        it('should show comment list', () => {
        });

        it('should render 2 app comments', () => {
        });

        it('should have comment add component', () => {
        });

        describe('when add comment', () => {

            it('should call create comment output', () => {
            });
        });
    });
});

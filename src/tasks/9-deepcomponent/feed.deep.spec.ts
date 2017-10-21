import {PostComponent} from '../../app/feed/post/post.component';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {CommentModule} from '../../app/feed/comment/comment.module';
import {CommentService} from '../../app/json-placeholder-api/comment/comment.service';
import {Post} from '../../app/json-placeholder-api/post/post';
import {commentListStub} from './utils';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {CommentListComponent} from '../../app/feed/comment/comment-list/comment-list.component';
import {of} from 'rxjs/observable/of';
import {Comment} from '../../app/json-placeholder-api/comment/comment';

describe('Deep component test: Post component', () => {

    beforeEach(() => {
    });

    it('should create', () => {
    });

    describe('when there is a post and comment list', () => {
        // beforeEach(inject([CommentService], (commentService: CommentService) => {
        // }));

        it('should render title', () => {
        });

        it('should render content', () => {
        });

        describe('when show comments', () => {
            beforeEach(() => {
            });
            it('should render component list', () => {
            });
            it('should add comment', () => {
            });
        });
    });
});

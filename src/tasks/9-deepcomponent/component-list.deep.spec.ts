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
    let commentListComponent: CommentListComponent;
    let fixture: ComponentFixture<CommentListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommentModule]
        });
        fixture = TestBed.createComponent(CommentListComponent);
        commentListComponent = fixture.componentInstance;
    });

    it('should create', () => {
        expect(commentListComponent).toBeTruthy();
    });

    describe('when there is no list of comments', () => {
        beforeEach(() => {
            commentListComponent.comments = null;
            fixture.detectChanges();
        });

        it('should not show comment list', () => {
            const commentList: DebugElement = fixture.debugElement.query(By.css('.comment-list'));
            expect(commentList).toBeNull();
        });

        it('should show app spinner', () => {
            const spinner: DebugElement = fixture.debugElement.query(By.directive(SpinnerComponent));
            expect(spinner).not.toBeNull();
        });

        it('should not have comment add component', () => {
            const add: DebugElement = fixture.debugElement.query(By.directive(AddCommentComponent));
            expect(add).toBeNull();
        });
    });

    describe('when there is a list of comments', () => {

        beforeEach(() => {
            commentListComponent.comments = commentListStub;
            fixture.detectChanges();
        });

        it('should not show app spinner', () => {
            const spinner: DebugElement = fixture.debugElement.query(By.directive(SpinnerComponent));
            expect(spinner).toBeNull();
        });

        it('should show comment list', () => {
            const commentList: DebugElement = fixture.debugElement.query(By.css('.comment-list'));
            expect(commentList).not.toBeNull();
        });

        it('should render 2 app comments', () => {
            const comments: DebugElement[] = fixture.debugElement.queryAll(By.directive(CommentComponent));
            const commentAlhpa: DebugElement = comments[0];
            const commentBeta: DebugElement = comments[1];

            expect(comments.length).toEqual(commentListStub.length);
            expect(commentAlhpa.componentInstance.comment).toEqual(commentListStub[0]);
            expect(commentBeta.componentInstance.comment).toEqual(commentListStub[1]);
        });

        it('should have comment add component', () => {
            const add: DebugElement = fixture.debugElement.query(By.directive(AddCommentComponent));
            expect(add).not.toBeNull();
        });

        describe('when add comment', () => {
            const anotherComment: Comment = {
                body: 'another',
                postId: 1,
                id: 2,
                email: 'another@mail.be',
                name: 'AnotherComment'
            };

            it('should call create comment output', () => {
                commentListComponent
                    .createComment
                    .subscribe(comment => {
                        expect(comment).toEqual(anotherComment);
                    });
                const add: DebugElement = fixture.debugElement.query(By.directive(AddCommentComponent));
                add.triggerEventHandler('onAddComment', anotherComment);
            });
        });
    });
});

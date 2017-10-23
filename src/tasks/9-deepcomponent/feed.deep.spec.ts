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
    let postComponent: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    const stubPost: Post = {body: 'My post', userId: 1, title: 'A title', id: 2};
    const extraComment: Comment = {
        body: 'new comment',
        id: 1,
        email: 'mail@mail.be',
        postId: stubPost.id,
        name: 'new comment title'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommentModule],
            declarations: [PostComponent],
            providers: [{
                provide: CommentService,
                useValue: jasmine.createSpyObj('cs', ['getCommentsForPost', 'addCommentForPost'])
            }]
        });
        fixture = TestBed.createComponent(PostComponent);
        postComponent = fixture.componentInstance;
    });

    it('should create', () => {
        expect(fixture).toBeTruthy();
    });

    describe('when there is a post and comment list', () => {
        beforeEach(inject([CommentService], (commentService: CommentService) => {
            (commentService.getCommentsForPost as any).and.returnValue(of(commentListStub));
            (commentService.addCommentForPost as any).and.returnValue(of(extraComment));

            postComponent.post = stubPost;
            fixture.detectChanges();
        }));

        it('should render title', () => {
            const cardTtitle: DebugElement = fixture.debugElement.query(By.css('.card-header-title'));
            expect(cardTtitle.nativeElement.textContent).toContain(stubPost.title);
        });

        it('should render content', () => {
            const content: DebugElement = fixture.debugElement.query(By.css('.content'));
            expect(content.nativeElement.textContent).toContain(stubPost.body);
        });

        describe('when show comments', () => {
            beforeEach(() => {
                const footerLink: DebugElement = fixture.debugElement.query(By.css('.card-footer-item'));
                footerLink.triggerEventHandler('click', null);
                fixture.detectChanges();
            });
            it('should render component list', () => {
                const commentList: DebugElement = fixture.debugElement.query(By.directive(CommentListComponent));
                const commentListCompo: CommentListComponent = commentList.componentInstance;
                expect(commentList).not.toBeNull();
                expect(commentListCompo.comments).toEqual(commentListStub);
            });
            it('should add comment', () => {
                const commentList: DebugElement = fixture.debugElement.query(By.directive(CommentListComponent));
                const commentListCompo: CommentListComponent = commentList.componentInstance;
                const commentService: CommentService = TestBed.get(CommentService);
                (commentService.getCommentsForPost as any).and.returnValue(of([...commentListStub, extraComment]));

                commentList.triggerEventHandler('createComment', extraComment);
                fixture.detectChanges();

                expect(commentList).not.toBeNull();
                expect(postComponent.post.id).toEqual(extraComment.postId);
                expect(commentService.addCommentForPost).toHaveBeenCalledWith(extraComment, stubPost.id);
                expect(commentService.getCommentsForPost).toHaveBeenCalledWith(stubPost.id);
                expect(commentListCompo.comments).toEqual([...commentListStub, extraComment]);
            });
        });
    });
});

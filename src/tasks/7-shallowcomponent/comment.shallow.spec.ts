import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommentComponent} from '../../app/feed/comment/comment/comment.component';
import {Comment} from '../../app/json-placeholder-api/comment/comment';

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when there is no comment', () => {
        beforeEach(() => {
            component.comment = null;
            fixture.detectChanges();
        });

        it('should not render comment', () => {
            const comment: DebugElement = fixture.debugElement.query(By.css('.comment'));
            expect(comment).toBeNull();
        });
    });

    describe('when there is a comment', () => {
        const mockComment: Comment = {
            body: 'We are all slowly dying', postId: 1, email: 'mre@ntt.be', id: 1, name: 'Death is inevitable'
        };

        beforeEach(() => {
            component.comment = mockComment;
            fixture.detectChanges();
        });

        it('should render comment', () => {
            const comment: DebugElement = fixture.debugElement.query(By.css('.comment'));
            expect(comment).not.toBeNull();
        });

        it('should render name', () => {
            const name: DebugElement = fixture.debugElement.query(By.css('.comment__name'));
            expect(name).not.toBeNull();
            expect(name.nativeElement.innerHTML).toContain(mockComment.name);
        });

        it('should render email', () => {
            const email: DebugElement = fixture.debugElement.query(By.css('.comment__email'));
            expect(email).not.toBeNull();
            expect(email.nativeElement.innerHTML).toContain(mockComment.email);
        });

        it('should render body', () => {
            const email: DebugElement = fixture.debugElement.query(By.css('.comment__body'));
            expect(email).not.toBeNull();
            expect(email.nativeElement.innerHTML).toContain(mockComment.body);
        });
    });
});

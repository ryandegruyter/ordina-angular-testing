import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Comment} from '../../../json-placeholder-api/comment/comment';
import {CommentListComponent} from './comment-list.component';
import {CommentComponent} from '../comment/comment.component';
import {SharedModule} from '../../../shared/shared.module';
import {SpinnerComponent} from '../../../shared/spinner/spinner.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';

describe('[Integrated] CommentListComponent', () => {
    let component: CommentListComponent;
    let fixture: ComponentFixture<CommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, FormsModule],
            declarations: [CommentListComponent, CommentComponent, AddCommentComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentListComponent);
        component = fixture.componentInstance;

        // calls component lifecycle methods (ngOnInit)
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when there is a list of comments', () => {
        const mockList: Comment[] = [
            {id: 1, email: 'alpha@mail.be', body: 'alphaBody', postId: 1, name: 'MrE'},
            {id: 2, email: 'beta@mail.be', body: 'beta', postId: 1, name: 'NTT'},
        ];
        beforeEach(() => {
            component.comments = mockList;
            fixture.detectChanges();
        });
        it('should render a list of app-comments', () => {
            const commentList: DebugElement[] = fixture.debugElement.queryAll(By.css('app-comment'));
            expect(commentList.length).toEqual(mockList.length);
        });
        it('should not show spinner', () => {
            const spinner: DebugElement = fixture.debugElement.query(By.directive(SpinnerComponent));
            expect(spinner).toBeNull();
        });
    });
    describe('when there is no list of components', () => {
        beforeEach(() => {
            component.comments = null;
            fixture.detectChanges();
        });
        it('should show a spinner', () => {
            const spinner: DebugElement = fixture.debugElement.query(By.directive(SpinnerComponent));
            expect(spinner).not.toBeNull();
        });
    });
});

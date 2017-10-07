import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Comment} from '../../json-placeholder-api/comment/comment';
import {CommentListComponent} from './comment-list.component';

describe('[Isolate] CommentListComponent', () => {
    let component: CommentListComponent;
    let fixture: ComponentFixture<CommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [CommentListComponent]
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
        it('should render a list of components', () => {
            const commentList: DebugElement[] = fixture.debugElement.queryAll(By.css('app-comment'));
            expect(commentList.length).toEqual(mockList.length);
        });
    });
});

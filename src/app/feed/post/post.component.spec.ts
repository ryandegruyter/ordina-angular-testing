import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {SharedModule} from '../../shared/shared.module';
import {CommentService} from '../../json-placeholder-api/comment/comment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../../json-placeholder-api/environments';
import {CommentListComponent} from '../comment-list/comment-list.component';
import {CommentComponent} from '../comment/comment.component';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientTestingModule],
            declarations: [PostComponent, CommentListComponent, CommentComponent],
            providers: [CommentService, {provide: ApiEnvironmentToken, useValue: prodEnvironment}]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

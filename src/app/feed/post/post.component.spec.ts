import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {SharedModule} from '../../shared/shared.module';
import {CommentService} from '../../json-placeholder-api/comment/comment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../../json-placeholder-api/environments';
import {CommentListComponent} from '../comment/comment-list/comment-list.component';
import {CommentComponent} from '../comment/comment/comment.component';
import { AddCommentComponent } from '../comment/add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientTestingModule, FormsModule],
            declarations: [PostComponent, CommentListComponent, CommentComponent, AddCommentComponent],
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

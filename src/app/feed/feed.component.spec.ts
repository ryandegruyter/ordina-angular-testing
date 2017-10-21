import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';
import {PostComponent} from './post/post.component';
import {SharedModule} from '../shared/shared.module';
import {PostService} from '../json-placeholder-api/post/post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';
import {ApiEnvironmentToken, prodEnvironment} from '../json-placeholder-api/environments';
import {CommentComponent} from './comment/comment/comment.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientTestingModule, HttpModule, FormsModule],
            declarations: [FeedComponent, PostComponent, CommentListComponent, CommentComponent, AddCommentComponent],
            providers: [
                PostService,
                {provide: ApiEnvironmentToken, useValue: prodEnvironment}
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should event', () => {

    });
});

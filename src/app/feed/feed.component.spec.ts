import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';
import {PostComponent} from './post/post.component';
import {SharedModule} from '../shared/shared.module';
import {CommentComponent} from './comment/comment.component';
import {PostService} from '../json-placeholder-api/post/post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';
import {ApiEnvironmentToken, prodEnvironment} from '../json-placeholder-api/environments';

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientTestingModule, HttpModule],
            declarations: [FeedComponent, PostComponent, CommentComponent],
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
});

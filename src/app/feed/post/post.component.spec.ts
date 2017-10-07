import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {CommentComponent} from '../comment/comment.component';
import {SharedModule} from '../../shared/shared.module';
import {CommentService} from '../../json-placeholder-api/comment/comment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../../json-placeholder-api/environments';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientTestingModule],
            declarations: [PostComponent, CommentComponent],
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

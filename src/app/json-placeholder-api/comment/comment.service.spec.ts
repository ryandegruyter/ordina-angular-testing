import {inject, TestBed} from '@angular/core/testing';

import {CommentService} from './comment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../environments';

describe('CommentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CommentService, {provide: ApiEnvironmentToken, useValue: prodEnvironment}]
        });
    });

    it('should be created', inject([CommentService], (service: CommentService) => {
        expect(service).toBeTruthy();
    }));
});

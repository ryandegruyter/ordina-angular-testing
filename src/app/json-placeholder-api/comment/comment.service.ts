import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEnvironment } from '../api-environment';
import { ApiEnvironmentToken } from '../environments';
import { Comment } from './comment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

    private static readonly PATH: string = 'comments';
    private commentsUrl = '';

    constructor(
        private http: HttpClient,
        @Inject(ApiEnvironmentToken)
        private env: ApiEnvironment
    ) {
        this.commentsUrl = `${env.baseUrl}${CommentService.PATH}`;
    }

    public getCommentsForPost(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.commentsUrl}?postId=${postId}`);
    }

    public addCommentForPost(comment: Comment, postId: number): Observable<Comment> {
        return this.http.post<Comment>(`${this.commentsUrl}?postId=${postId}`, comment);
    }

}

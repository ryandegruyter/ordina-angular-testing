import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import {ApiEnvironment, ApiEnvironmentToken} from '../api-environment';

@Injectable()
export class PostService {

  private static readonly PATH: string = 'posts';
  private postsUrl = '';

  constructor(private http: Http,
              @Inject(ApiEnvironmentToken)
              private env: ApiEnvironment) {
    this.postsUrl = `${env.baseUrl}${PostService.PATH}`;
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${this.postsUrl}`)
      .map((response: Response) => response.json() || []);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get(`${this.postsUrl}/${id}`)
      .map((response: Response) => response.json());
  }
}

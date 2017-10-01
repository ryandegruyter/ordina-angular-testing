import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {ApiEnvironment, ApiEnvironmentToken} from '../api-environment';

@Injectable()
export class UserService {

  private static readonly PATH: string = 'users';

  constructor(private http: HttpClient,
              @Inject(ApiEnvironmentToken)
              private env: ApiEnvironment) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.env.baseUrl}${UserService.PATH}`)
      .catch((err: any) => {
        console.log(err);
        return of([]);
      });
  }
}

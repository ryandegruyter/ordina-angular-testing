import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { ApiEnvironment } from '../api-environment';
import { ApiEnvironmentToken } from '../environments';

@Injectable()
export class UserService {

  private static readonly PATH: string = 'users';
  private usersUrl = '';

  constructor(private http: HttpClient,
              @Inject(ApiEnvironmentToken)
              private env: ApiEnvironment) {
    this.usersUrl = `${env.baseUrl}${UserService.PATH}`;
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .catch((err: any) => {
        console.log(err);
        return of([]);
      });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }
}

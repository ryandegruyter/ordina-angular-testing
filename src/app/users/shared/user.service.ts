import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
    }

}

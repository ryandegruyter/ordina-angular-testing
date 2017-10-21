import {UserService} from '../user.service';
import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import Spy = jasmine.Spy;
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw';
import {ApiEnvironmentToken, prodEnvironment} from '../../environments';

describe('[Unit] User service', () => {

    let userService: UserService;
    let http: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserService,
                {provide: HttpClient, useValue: jasmine.createSpyObj('http', ['get'])},
                {provide: ApiEnvironmentToken, useValue: prodEnvironment}
            ]
        });
        http = TestBed.get(HttpClient);
        userService = TestBed.get(UserService);
    });

    describe('when GET all users', () => {
        it('should call http://jsonplaceholder.typicode.com/users', () => {
            (http.get as Spy).and.returnValue(of({}));
            userService.getAllUsers().subscribe();
            expect(http.get).toHaveBeenCalledWith(prodEnvironment.baseUrl + 'users');
        });
        it('should return an empty list when request fails', () => {
            (http.get as Spy).and.returnValue(_throw({}));
            userService.getAllUsers().subscribe(data => {
                expect(data).toEqual([]);
            });
        });
    });

    describe('when GET user', () => {
        const id = 1;

        it(`should call http://jsonplaceholder.typicode.com/users/${id}`, () => {
            (http.get as Spy).and.returnValue(of({}));
            userService.getUser(id).subscribe();
            expect(http.get).toHaveBeenCalledWith(prodEnvironment.baseUrl + `users/${id}`);
        });
    });
});

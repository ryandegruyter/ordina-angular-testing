import {TestBed} from '@angular/core/testing';
import {UserService} from '../user.service';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {User} from '../user';
import {ApiEnvironmentToken, prodEnvironment} from '../../environments';

const mockUserList = require('./mock-user-list.json');

describe('[Integrated] UserService with HttpClientTestingModule', () => {

  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        {provide: ApiEnvironmentToken, useValue: prodEnvironment}
      ]
    });
    service = TestBed.get(UserService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when GET user by id', () => {
    const id = 1;

    it(`should call http://jsonplaceholder.typicode.com/users/${id}`, () => {
      service.getUser(id).subscribe();
      http.expectOne({
        url: 'http://jsonplaceholder.typicode.com/users/' + id,
        method: 'get'
      });
    });
  });
  describe('when GET all users', () => {

    let actualData: User[];

    beforeEach(() => {
      service.getAllUsers().subscribe(data => actualData = data);
    });

    it('should call http://jsonplaceholder.typicode.com/users', () => {
      const testRequest: TestRequest = http.expectOne({
        url: 'http://jsonplaceholder.typicode.com/users',
        method: 'get'
      });
      testRequest.flush(mockUserList);
    });

    it('should return an empty list when request fails', () => {
      const testRequest: TestRequest = http.expectOne({
        url: 'http://jsonplaceholder.typicode.com/users',
        method: 'get'
      });

      testRequest.error(null);

      expect(actualData).toEqual([]);
    });
  });
});

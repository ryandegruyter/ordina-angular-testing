import {inject, TestBed} from '@angular/core/testing';

const mockUserList = require('./mock-user-list.json');
import {UserService} from '../user.service';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {User} from '../user';
import {ApiEnvironmentToken, prodEnvironment} from '../../api-environment';

describe('[Integrated] UserService with HttpClientTestingModule', () => {
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
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('when GET all users', () => {

    let service: UserService;
    let http: HttpTestingController;
    let actualData: User[];

    beforeEach(inject([UserService, HttpTestingController], (userService: UserService, httpController: HttpTestingController) => {
      service = userService;
      http = httpController;
      service.getAllUsers().subscribe(data => actualData = data);
    }));

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

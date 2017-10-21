import {TestBed} from '@angular/core/testing';
import {PostService} from '../post.service';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  RequestMethod,
  RequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../../environments';

const mockList = JSON.stringify(require('./mockPostList.json'));
const mockPost = JSON.stringify(require('./mockPost.json'));

describe('[Integrated] PostsService', () => {
  let service: PostService;
  let backend: MockBackend;
  let connection: MockConnection;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ApiEnvironmentToken, useValue: prodEnvironment}
      ]
    });
    service = TestBed.get(PostService);
    backend = TestBed.get(ConnectionBackend);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('when GET post', () => {
    const id = 1;
    beforeEach(() => {
      service.getPost(id).subscribe();
      connection = backend.connectionsArray[0];
    });
    it('should make a GET request', () => {
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });
    it('should make a call to http://jsonplaceholder.typicode.com/posts/' + id, () => {
      expect(connection.request.url).toEqual('http://jsonplaceholder.typicode.com/posts/' + id);
    });
    it('should map response', () => {
      service.getPost(id).subscribe(
        data => expect(data).toEqual(JSON.parse(mockPost)),
      );
      connection = backend.connectionsArray[1];
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockPost
      })));
    });
  });

  describe('when GET all posts', () => {

    beforeEach(() => {
      service.getAll().subscribe();
      connection = backend.connectionsArray[0];
    });

    it('should make a GET request', () => {
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });

    it('should make a call to http://jsonplaceholder.typicode.com/posts', () => {
      expect(connection.request.url).toEqual('http://jsonplaceholder.typicode.com/posts');
    });

    it('should map to an empty error when error', () => {
      service.getAll().subscribe(
        data => expect(data).toEqual([]),
        err => fail('error should be caught')
      );
      connection = backend.connectionsArray[1];
      connection.mockError();
    });

    it('should map response', () => {
      service.getAll().subscribe(
        data => expect(data).toEqual(JSON.parse(mockList)),
      );
      connection = backend.connectionsArray[1];
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockList
      })));
    });

    it('should map to an array when response cannot be mapped', () => {
      service.getAll().subscribe(
        data => expect(data).toEqual([]),
      );
      connection = backend.connectionsArray[1];
      connection.mockRespond(new Response(new ResponseOptions({
        body: '[sdf]'
      })));
    });
  });
});

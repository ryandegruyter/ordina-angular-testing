import {ClassProvider, FactoryProvider, ReflectiveInjector, ValueProvider} from '@angular/core';
import {PostService} from '../../app/json-placeholder-api/post/post.service';
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
import {ApiEnvironmentToken, prodEnvironment} from '../../app/json-placeholder-api/environments';
import {Post} from '../../app/json-placeholder-api/post/post';
import {ApiEnvironment} from '../../app/json-placeholder-api/api-environment';

const mockBackendProvider: ClassProvider = {provide: ConnectionBackend, useClass: MockBackend};
const requestOptionsProvider: ClassProvider = {provide: RequestOptions, useClass: BaseRequestOptions};
const httpFactoryProvider: FactoryProvider = {
    provide: Http,
    useFactory: (cb: ConnectionBackend, ro: RequestOptions) => {
        // do stuff
        return new Http(cb, ro);
    },
    deps: [ConnectionBackend, RequestOptions]
};
const apiProvider: ValueProvider = {provide: ApiEnvironmentToken, useValue: prodEnvironment};

describe('Create a test suite for the Post Service', () => {

    let injector: ReflectiveInjector;
    let postService: PostService;

    beforeEach(() => {
        injector = ReflectiveInjector.resolveAndCreate([
            PostService,
            Http,
            // httpFactoryProvider
            mockBackendProvider,
            requestOptionsProvider,
            {provide: ApiEnvironmentToken, useValue: apiProvider}
        ]);
        postService = injector.get(PostService);
    });

    it('should be created', () => {
        expect(postService).toBeDefined();
    });

    describe('when fetching all posts', () => {

        let data: Post[];
        let mb: MockBackend;
        let env: ApiEnvironment;

        beforeEach(() => {
            mb = injector.get(ConnectionBackend);
            env = injector.get(ApiEnvironmentToken);

            postService.getAll().subscribe(response => data = response);
        });

        it('should make a GET request', () => {
            const conn: MockConnection = mb.connectionsArray[0];
            expect(conn.request.method).toEqual(RequestMethod.Get);
        });

        it('should make a request to /posts', () => {
            const conn: MockConnection = mb.connectionsArray[0];
            expect(conn.request.url).toEqual(`${env.baseUrl}${PostService.PATH}`);
        });

        it('should map the response body', () => {
            const posts: Post[] = [{body: 'alpha'}, {body: 'beta'}];
            const stubBody: string = JSON.stringify(posts);
            const stub: Response = new Response(new ResponseOptions({body: stubBody}));
            const conn: MockConnection = mb.connectionsArray[0];
            conn.mockRespond(stub);
            expect(data).toEqual(posts);
        });

        it('should return an empty array when error', () => {
            const conn: MockConnection = mb.connectionsArray[0];
            conn.mockError();
            expect(data).toEqual([]);
        });
    });

    describe('when fetching a single post', () => {

        const id = 4;

        beforeEach(() => {
        });

        it('should make a GET request', () => {
        });

        it(`should make a request to ${prodEnvironment}posts/${id}`, () => {
        });

        it('should map the response body', () => {
        });
    });
});

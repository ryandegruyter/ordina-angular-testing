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

    beforeEach(() => {
    });

    it('should be created', () => {
    });

    describe('when fetching all posts', () => {

        beforeEach(() => {
        });

        it('should make a GET request', () => {
        });

        it('should make a request to /posts', () => {
        });

        it('should map the response body', () => {
        });

        it('should return an empty array when error', () => {
        });
    });

    describe('when fetching a single post', () => {

        beforeEach(() => {
        });

        it('should make a GET request', () => {
        });

        // it(`should make a request to ${prodEnvironment}posts/${id}`, () => {
        // });

        it('should map the response body', () => {
        });
    });
});

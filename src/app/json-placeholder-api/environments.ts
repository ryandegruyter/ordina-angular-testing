import { ApiEnvironment } from './api-environment';
import { InjectionToken } from '@angular/core';

export const prodEnvironment: ApiEnvironment = {
    baseUrl: 'http://jsonplaceholder.typicode.com/'
};

export const devEnvironment: ApiEnvironment = {
    baseUrl: 'http://localhost:3000/'
};

export const ApiEnvironmentToken: InjectionToken<ApiEnvironment> = new InjectionToken('apiEnv');
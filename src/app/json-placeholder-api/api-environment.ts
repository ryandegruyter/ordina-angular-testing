import {InjectionToken} from '@angular/core';

export interface ApiEnvironment {
  baseUrl: string;
}

export const prodEnvironment: ApiEnvironment = {
  baseUrl: 'http://jsonplaceholder.typicode.com/'
};

export const devEnvironment: ApiEnvironment = {
  baseUrl: 'http://localhost:3000/'
};

export const ApiEnvironmentToken: InjectionToken<ApiEnvironment> = new InjectionToken('apiEnv');

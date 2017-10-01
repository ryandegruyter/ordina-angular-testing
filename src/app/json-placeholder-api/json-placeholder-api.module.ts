import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {ApiEnvironment, ApiEnvironmentToken, prodEnvironment} from './api-environment';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class JsonPlaceholderApiModule {
  private static readonly defaultBaseUrl: string = prodEnvironment.baseUrl;

  static forRoot(baseUrl?: string): ModuleWithProviders {
    return {
      ngModule: JsonPlaceholderApiModule,
      providers: [
        UserService,
        {
          provide: ApiEnvironmentToken,
          useValue: {
            baseUrl: baseUrl ? baseUrl : JsonPlaceholderApiModule.defaultBaseUrl
          } as ApiEnvironment
        }
      ]
    };
  }
}

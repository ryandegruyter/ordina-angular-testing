import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {ApiEnvironment} from './api-environment';
import {HttpModule} from '@angular/http';
import {PostService} from './post/post.service';
import {prodEnvironment, ApiEnvironmentToken} from './environments';
import { CommentService } from './comment/comment.service';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule
  ]
})
export class JsonPlaceholderApiModule {
    private static readonly defaultBaseUrl: string = prodEnvironment.baseUrl;

  static forRoot(baseUrl?: string): ModuleWithProviders {
    return {
      ngModule: JsonPlaceholderApiModule,
      providers: [
        PostService,
        UserService,
        CommentService,
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

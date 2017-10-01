import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JsonPlaceholderApiModule} from './json-placeholder-api/json-placeholder-api.module';
import {devEnvironment} from './json-placeholder-api/api-environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonPlaceholderApiModule.forRoot(devEnvironment.baseUrl)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

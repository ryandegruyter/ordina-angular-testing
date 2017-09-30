import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {JsonPlaceholderApiModule} from './json-placeholder-api/json-placeholder-api.module';
import {devEnvironment} from './json-placeholder-api/api-environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    JsonPlaceholderApiModule.forRoot(devEnvironment.baseUrl)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

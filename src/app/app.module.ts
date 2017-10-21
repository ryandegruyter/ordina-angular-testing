import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsonPlaceholderApiModule } from './json-placeholder-api/json-placeholder-api.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';
import { devEnvironment } from './json-placeholder-api/environments';
import { FeedModule } from './feed/feed.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        JsonPlaceholderApiModule.forRoot(devEnvironment.baseUrl),
        AppRoutingModule,
        NavbarModule,
        UserModule,
        SharedModule,
        FeedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

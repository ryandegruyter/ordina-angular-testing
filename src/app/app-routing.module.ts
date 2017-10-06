import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/users/users.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'feed', component: FeedComponent },
    { path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

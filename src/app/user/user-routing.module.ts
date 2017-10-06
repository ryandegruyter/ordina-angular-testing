import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: ProfileComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }

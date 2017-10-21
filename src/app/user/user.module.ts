import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        UserRoutingModule
    ],
    declarations: [
        UsersComponent,
        ProfileComponent
    ]
})
export class UserModule { }

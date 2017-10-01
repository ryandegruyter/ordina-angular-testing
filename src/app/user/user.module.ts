import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users/users.component';
import { UserService } from './shared/user.service';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        UserRoutingModule
    ],
    declarations: [
        UsersComponent,
        UserDetailComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }

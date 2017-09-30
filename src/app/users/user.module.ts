import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UsersComponent } from './users.component';
import { UserService } from './shared/user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }

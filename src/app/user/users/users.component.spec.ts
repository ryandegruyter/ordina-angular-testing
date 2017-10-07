import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UserService} from '../../json-placeholder-api/user/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, devEnvironment} from '../../json-placeholder-api/environments';
import {RouterTestingModule} from '@angular/router/testing';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [UsersComponent],
            providers: [UserService, {provide: ApiEnvironmentToken, useValue: devEnvironment}]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

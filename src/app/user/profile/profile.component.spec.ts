import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../json-placeholder-api/user/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiEnvironmentToken, prodEnvironment} from '../../json-placeholder-api/environments';

describe('UserDetailComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
            declarations: [ProfileComponent],
            providers: [UserService, {provide: ApiEnvironmentToken, useValue: prodEnvironment}]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

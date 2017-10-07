import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {UserService} from './json-placeholder-api/user/user.service';
import {SharedModule} from './shared/shared.module';
import {NavbarModule} from './navbar/navbar.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule, NavbarModule, RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                {provide: UserService, useValue: jasmine.createSpyObj('us', ['getAllUsers'])}
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
});

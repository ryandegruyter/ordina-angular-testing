import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../json-placeholder-api/user/user.service';
import { User } from '../../json-placeholder-api/user/user';

@Component({
    selector: 'app-uprofile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public user: Observable<User>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.loadUser(+params['id']);
        });
    }

    private loadUser(id: number): void {
        this.user = this.userService.getUser(id);
        setTimeout(() => {
            this.user.subscribe(data => {
                console.log(data);
            });
        }, 200);
    }

}

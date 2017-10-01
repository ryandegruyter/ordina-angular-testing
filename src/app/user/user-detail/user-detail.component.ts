import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user.model';
import { UserService } from '../../json-placeholder-api/user/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

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
    }

}

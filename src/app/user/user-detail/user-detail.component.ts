import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    public user: User;
    public userLoaded = false;

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
        this.userService.getUser(id).subscribe((user: User) => {
            this.user = user;
            this.userLoaded = true;
        });
    }

}

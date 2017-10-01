import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user.model';
import { UserService } from '../../json-placeholder-api/user/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: Observable<User[]>;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.users = this.userService.getAllUsers();
    }

    public showUserDetails(user: User): void {
        this.router.navigate(['/users', user.id]);
    }

}

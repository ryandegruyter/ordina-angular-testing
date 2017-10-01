import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: User[];
    public usersLoaded = false;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userService.getUsers().subscribe((users: User[]) => {
            this.users = users;
            this.usersLoaded = true;
        });
    }

    public showUserDetails(user: User): void {
        this.router.navigate(['/users', user.id]);
    }

}

import { Component, OnInit } from '@angular/core';
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: User[];
    public usersLoaded = false;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.usersLoaded = false;
        this.userService.getUsers().subscribe((users: User[]) => {
            this.users = users;
            this.usersLoaded = true;
        });
    }

}

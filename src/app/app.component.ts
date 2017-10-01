import {Component, OnInit} from '@angular/core';
import {UserService} from './json-placeholder-api/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
}

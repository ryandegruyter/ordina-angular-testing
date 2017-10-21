import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public showNavmenu = false;

    constructor() { }

    ngOnInit() { }

    toggleNavmenu() {
        this.showNavmenu = !this.showNavmenu;
    }

}

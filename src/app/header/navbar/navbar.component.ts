import { Component, OnInit } from '@angular/core';
import {NavbarService} from './navbar.service';
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    links = [
        {'text': 'MyPARS Home', 'route': '/home'}
    ];

    constructor(public navbarSerivce: NavbarService, private router: Router) {}

    ngOnInit() {
        /*this.navbarSerivce.navbarLinksSubject.subscribe(
            (links: any[]) => {
                this.links = [];
                this.links.push({'text': 'MyPARS Home', 'route': '/home'})
                _.forEach(links, (link, index) => {
                    this.links.push(links[index]);
                });
            }
        ); */
    }

    goHome(){
        this.router.navigate(['/']);
    }

    goUsers(){
	this.router.navigate(['/users']);
    }

    goRoles(){
	this.router.navigate(['/roles']);
    }
}

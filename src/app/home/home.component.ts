import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertsService} from '../alerts/alerts.service';
import {PermissionsService} from '../permissions.service';
import {environment} from '../../environments/environment';
import {HeaderService} from '../header/header.service';
import {NavbarService} from '../header/navbar/navbar.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private navbarService: NavbarService, private headerService: HeaderService,
                private alertsService: AlertsService, private router: Router, public permissions: PermissionsService) { }

    ngOnInit() {
        this.headerService.loggedInSubject.next(true);
        this.headerService.programTitleSubject.next('Home');
        this.navbarService.navbarLinksSubject.next(
            []
	);
    }

    newReport(){
        this.router.navigate(["/report"]);
    }
}

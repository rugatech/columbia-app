import {Component, OnInit} from '@angular/core';
import {HeaderService} from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    logoImage_lg: string;
    logoImage_md: string;
    logoImage_sm: string;
    logoImage_xs: string;
    programTitle: string;
    isLoggedIn: boolean;

    constructor(public headerService: HeaderService) {}

    ngOnInit() {
        this.logoImage_lg = 'assets/logo.gif';
        this.logoImage_md = 'assets/pars-header-logo-768.gif';
        this.logoImage_sm = 'assets/pars-header-logo-480.gif';
        this.logoImage_xs = 'assets/pars-header-logo-320.gif';
        this.headerService.loggedInSubject.subscribe(
            (loggedIn: boolean) => {
                this.isLoggedIn = loggedIn;
            }
        );
        this.headerService.programTitleSubject.subscribe(
            (programTitle: string) => {
                this.programTitle = programTitle;
            }
        );
    }
}

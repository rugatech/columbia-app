import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {NavbarComponent} from "../header/navbar/navbar.component";
import {SharedModule} from '../shared/shared-module';

import {AuthService} from '../auth.service';
import {AuthGuard} from '../auth-guard.service';
import {PermissionsService} from '../permissions.service';
import {AjaxService} from '../ajax.service';
import {AlertsService} from '../alerts/alerts.service';
import {HeaderService} from '../header/header.service';
import {NavbarService} from '../header/navbar/navbar.service';
import {HttpModule} from "@angular/http";
import {SessionsService} from "../sessions.service";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
	HeaderComponent,
	FooterComponent,
	NavbarComponent
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ],
    providers: [AuthService, AuthGuard, PermissionsService, AjaxService, AlertsService, HeaderService, NavbarService, SessionsService],

})
export class CoreModule { }
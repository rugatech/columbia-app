import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared-module';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import { BaseReportComponent } from './reports/base-report/base-report.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AllreportsComponent } from './reports/allreports/allreports.component';
import { NewReportComponent } from './reports/new-report/new-report.component';
import { PublicReportComponent } from './reports/public-report/public-report.component';
import { UpdateReportComponent } from './reports/update-report/update-report.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { UpdateRoleComponent } from './roles/update-role/update-role.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BaseReportComponent,
        AllreportsComponent,
        NewReportComponent,
        PublicReportComponent,
        UpdateReportComponent,
        RolesComponent,
        UsersComponent,
        UpdateRoleComponent,
        UpdateUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
	NgxMyDatePickerModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

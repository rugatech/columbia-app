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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BaseReportComponent,
        AllreportsComponent
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

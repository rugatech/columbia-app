import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoadingModule} from 'ngx-loading';
import {AlertsModule} from '../alerts/alerts.module';

@NgModule({
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        LoadingModule,
        AlertsModule
    ]
})
export class SharedModule { }
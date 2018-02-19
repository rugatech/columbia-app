import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AlertsComponent} from "../alerts/alerts.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AlertsComponent
    ],
    exports:[
        AlertsComponent
    ]
})
export class AlertsModule { }
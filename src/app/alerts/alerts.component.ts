import { Component} from '@angular/core';
import {AlertsService} from "./alerts.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent  {

  constructor(public alertsService: AlertsService) {}

}

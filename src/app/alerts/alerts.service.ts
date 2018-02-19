import {Injectable} from '@angular/core';

@Injectable()
export class AlertsService {
    alerts = [];
    constructor() {}

    addSuccessAlert(msg: String) {
        this.alerts.push(
            {
                'alert_type': 'alert-success',
                'prefix_message': 'Success',
                'message': msg
            }
        )
    }

    addErrorAlert(msg: String) {
        this.alerts.push(
            {
                'alert_type': 'alert-danger',
                'prefix_message': 'Error',
                'message': msg
            }
        )

    }

    clearAlerts(){
        this.alerts = [];
    }
}
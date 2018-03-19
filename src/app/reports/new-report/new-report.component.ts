import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertsService} from "../../alerts/alerts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {
    @ViewChild('frm') updateForm: NgForm;

    constructor(public alertsService: AlertsService, public router: Router) { }

    ngOnInit() {
    }

    beginReport(){
        switch(this.updateForm.value.new_report_type){
            case "1":
                this.router.navigate(['/report']);
                break;
	    case "2":
		this.router.navigate(['/report']);
		break;
	    case "3":
		this.router.navigate(['/public_report']);
		break;

        }
    }

    onSubmit(form: NgForm) {
	this.alertsService.clearAlerts();
    }
}

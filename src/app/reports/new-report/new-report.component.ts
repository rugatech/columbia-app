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
    search_results:any[] = [
	{"fname":"Nick","lname":"Taylor","mail":"ntaylor@cumc.columbia.edu","uid":"ntaylor","dept":"Facilities"},
	{"fname":"Nicholas","lname":"Taylor","mail":"nictayl@cumc.columbia.edu","uid":"nictay","dept":"Public Safety"},
	{"fname":"Nicole","lname":"Taylor","mail":"nicoleta@cumc.columbia.edu","uid":"nicoleta","dept":"Facilities"}
    ];
    search_resultsB:any[] = [
	{"fname":"Alejandro","lname":"Ruiz","mail":"aruiz@cumc.columbia.edu","uid":"aruiz","dept":"Health and Safety"},
	{"fname":"Alexander","lname":"Rucci","mail":"alexr@cumc.columbia.edu","uid":"alexr","dept":"Public Safety"},
	{"fname":"Alexis","lname":"Rubi","mail":"arubi@cumc.columbia.edu","uid":"arubi","dept":"Facilities"}
    ];
    resultsA: boolean = false;
    resultsB: boolean = false;

    constructor(public alertsService: AlertsService, public router: Router) { }

    ngOnInit() {
	setTimeout(()=>{
	    this.updateForm.form.patchValue({
		"fname2":"Nic",
		"lname2":"Tay",
		"fname":"Al",
		"lname":"Rui"
	    });
	}, 100);
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

    foundSupervisor(){
	this.router.navigate(['/report',{'msg':1}]);
    }

    foundEmployee(){
	this.router.navigate(['/report',{'msg':2}]);
    }
}

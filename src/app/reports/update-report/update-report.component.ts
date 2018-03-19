import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertsService} from "../../alerts/alerts.service";
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {
    @Input() mode: string;
    @ViewChild('frm') updateForm: NgForm;
    dateeOptions: INgxMyDpOptions = {
	dateFormat: 'mmm dd, yyyy',
    };
    first_day_date: string;
    return_to_work_date: string;
    another_person_date: string;
    started_work: number = 10;
    times: object[] = [
	{"ts":"06:00","time":"6:00 AM"},
	{"ts":"06:15","time":"6:15 AM"},
	{"ts":"06:30","time":"6:30 AM"},
	{"ts":"06:45","time":"6:45 AM"},
	{"ts":"07:00","time":"7:00 AM"},
	{"ts":"07:15","time":"7:15 AM"},
	{"ts":"07:30","time":"7:30 AM"},
	{"ts":"07:45","time":"7:45 AM"},
	{"ts":"08:00","time":"8:00 AM"},
	{"ts":"08:15","time":"8:15 AM"},
	{"ts":"08:30","time":"8:30 AM"},
	{"ts":"08:45","time":"8:45 AM"},
	{"ts":"09:00","time":"9:00 AM"},
	{"ts":"09:15","time":"9:15 AM"},
	{"ts":"09:30","time":"9:30 AM"},
	{"ts":"09:45","time":"9:45 AM"},
	{"ts":"10:00","time":"10:00 AM"},
	{"ts":"10:15","time":"10:15 AM"},
	{"ts":"10:30","time":"10:30 AM"},
	{"ts":"10:45","time":"10:45 AM"},
	{"ts":"11:00","time":"11:00 AM"},
	{"ts":"11:15","time":"11:15 AM"},
	{"ts":"11:30","time":"11:30 AM"},
	{"ts":"11:45","time":"11:45 AM"},
	{"ts":"12:00","time":"12:00 PM"},
	{"ts":"12:15","time":"12:15 PM"},
	{"ts":"12:30","time":"12:30 PM"},
	{"ts":"12:45","time":"12:45 PM"},
	{"ts":"13:00","time":"1:00 PM"},
	{"ts":"13:15","time":"1:15 PM"},
	{"ts":"13:30","time":"1:30 PM"},
	{"ts":"13:45","time":"1:45 PM"},
	{"ts":"14:00","time":"2:00 PM"},
	{"ts":"14:15","time":"2:15 PM"},
	{"ts":"14:30","time":"2:30 PM"},
	{"ts":"14:45","time":"2:45 PM"},
	{"ts":"15:00","time":"3:00 PM"},
	{"ts":"15:15","time":"3:15 PM"},
	{"ts":"15:30","time":"3:30 PM"},
	{"ts":"15:45","time":"3:45 PM"},
	{"ts":"16:00","time":"4:00 PM"},
	{"ts":"16:15","time":"4:15 PM"},
	{"ts":"16:30","time":"4:30 PM"},
	{"ts":"16:45","time":"4:45 PM"},
	{"ts":"17:00","time":"5:00 PM"},
	{"ts":"17:15","time":"5:15 PM"},
	{"ts":"17:30","time":"5:30 PM"},
	{"ts":"17:45","time":"5:45 PM"},
	{"ts":"18:00","time":"6:00 PM"},
	{"ts":"18:15","time":"6:15 PM"},
	{"ts":"18:30","time":"6:30 PM"},
	{"ts":"18:45","time":"6:45 PM"},
	{"ts":"19:00","time":"7:00 PM"},
	{"ts":"19:15","time":"7:15 PM"},
	{"ts":"19:30","time":"7:30 PM"},
	{"ts":"19:45","time":"7:45 PM"},
	{"ts":"20:00","time":"8:00 PM"},
	{"ts":"20:15","time":"8:15 PM"},
	{"ts":"20:30","time":"8:30 PM"},
	{"ts":"20:45","time":"8:45 PM"},
	{"ts":"21:00","time":"9:00 PM"},
	{"ts":"21:15","time":"9:15 PM"},
	{"ts":"21:30","time":"9:30 PM"},
	{"ts":"21:45","time":"9:45 PM"},
	{"ts":"22:00","time":"10:00 PM"},
	{"ts":"22:15","time":"10:15 PM"},
	{"ts":"22:30","time":"10:30 PM"},
	{"ts":"22:45","time":"10:45 PM"},
	{"ts":"23:00","time":"11:00 PM"},
	{"ts":"23:15","time":"11:15 PM"},
	{"ts":"23:30","time":"11:30 PM"},
	{"ts":"23:45","time":"11:45 PM"},
	{"ts":"00:00","time":"12:00 AM"},
	{"ts":"00:15","time":"12:15 AM"},
	{"ts":"00:30","time":"12:30 AM"},
	{"ts":"00:45","time":"12:45 AM"},
	{"ts":"01:00","time":"1:00 AM"},
	{"ts":"01:15","time":"1:15 AM"},
	{"ts":"01:30","time":"1:30 AM"},
	{"ts":"01:45","time":"1:45 AM"},
	{"ts":"02:00","time":"2:00 AM"},
	{"ts":"02:15","time":"2:15 AM"},
	{"ts":"02:30","time":"2:30 AM"},
	{"ts":"02:45","time":"2:45 AM"},
	{"ts":"03:00","time":"3:00 AM"},
	{"ts":"03:15","time":"3:15 AM"},
	{"ts":"03:30","time":"3:30 AM"},
	{"ts":"03:45","time":"3:45 AM"},
	{"ts":"04:00","time":"4:00 AM"},
	{"ts":"04:15","time":"4:15 AM"},
	{"ts":"04:30","time":"4:30 AM"},
	{"ts":"04:45","time":"4:45 AM"},
	{"ts":"05:00","time":"5:00 AM"},
	{"ts":"05:15","time":"5:15 AM"},
	{"ts":"05:30","time":"5:30 AM"},
	{"ts":"05:45","time":"5:45 AM"}
    ];

    constructor(public alertsService: AlertsService) {
    }

    ngOnInit() {
	setTimeout(()=>{
	    this.updateForm.form.patchValue({
		"fname":"John",
		"lname":"Conner",
                "dept":"Facilties",
                "email":"john.carter@cmu.edu",
                "mydate":{
		  "date":{
		    "year":2018,
                    "month":3,
                    "day":21
                  }
                },
                "injury_time": "10:00",
		"started_work": "07:00",
                "location":"Building XYZ Room 101",
                "occurred":"Mopping the floor",
                "circumstances":"It was a cold, dark and stormy night",
                "primary":"Lost power and slipped on the wet floor",
                "substance": "Water on the floor",
                "is_sharp":"N",
                "injury_type":"Face planted on my forehead",
                "another_person":"Y",
                "another_person_name":"Sarah Conner",
		"mydate2":{
		    "date":{
			"year":2018,
			"month":3,
			"day":21
		    }
		},
		"another_person_time":"10:15",
                "is_witness":"No"

	    });
        }, 100);

    }

    onSubmit(form: NgForm) {
	this.alertsService.clearAlerts();
	console.log(this.updateForm.form.value);
    }

}

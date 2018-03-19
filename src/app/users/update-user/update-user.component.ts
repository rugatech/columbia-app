import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {
    @Input() mode: string;
    @ViewChild('frm') updateForm: NgForm;

    roles:any[]=[
	{"id":1,"role_name":"System Admin"},
	{"id":2,"role_name":"Risk Management"},
	{"id":3,"role_name":"EH&S"},
	{"id":4,"role_name":"ICM"},
	{"id":5,"role_name":"Facilties Compliance"},
	{"id":6,"role_name":"Facilties HR"},
	{"id":7,"role_name":"Facilties HR - Read only"},
	{"id":8,"role_name":"Central HR"},
	{"id":9,"role_name":"Lamont Safety Dept"},
	{"id":10,"role_name":"Public Safety"}
    ];
    constructor() { }

    ngOnInit() {
	setTimeout(()=>{
	    this.updateForm.form.patchValue({
                "fname":"Samantha",
                "lname":"Carter",
                "email":"scarter@cumc.columbia.edu",
                "orgName":"Facilities",
                "role":6,
                "cumcid":"scarter"
	    });
	}, 100);
    }

    onSubmit(form:NgForm){

    }

}

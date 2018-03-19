import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
    @Input() mode: string;
    @ViewChild('frm') updateForm: NgForm;

    constructor() {}

    ngOnInit() {
	setTimeout(()=>{
	    this.updateForm.form.patchValue({
		"role_name":"System Admin",
                "comments": "Top level admin",
                "create_roles": true,
		"update_roles": true,
		"delete_roles": true,
		"read_roles": true,
		"create_users": true,
		"update_users": true,
		"delete_users": true,
		"read_users": true,
		"create_reports": true,
		"update_reports": true,
		"delete_reports": true,
		"read_reports": true,
                "dept_ehs": true
	    });
	}, 100);
    }

    onSubmit(form:NgForm){

    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

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

    }

}

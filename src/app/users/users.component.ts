import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: any[] = [
	{"id":"3","fname":"Samantha","lname":"Carter","role_name":"Facilties HR","email":"scarter@cumc.columbia.edu","orgName":"Facilities"},
	{"id":"2","fname":"Jack","lname":"O'Nell","role_name":"Risk Management","email":"joneil@cumc.columbia.edu","orgName":"Risk Management"},
	{"id":"1","fname":"Nick","lname":"Taylor","role_name":"System Admin","email":"nick@rugatech.com","orgName":"Rugatech"}
    ];

    constructor() { }

    ngOnInit() {
    }

}

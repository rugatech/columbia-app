import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
    selector: 'app-allreports',
    templateUrl: './allreports.component.html',
    styleUrls: ['./allreports.component.css']
})
export class AllreportsComponent implements OnInit {
    @ViewChild('frm') updateForm: NgForm;
    isLoading=false;
    showResults=false;
    search_results=[];
    dateeOptions: INgxMyDpOptions = {
	dateFormat: 'mmm dd, yyyy',
    };
    start_date: string;
    end_date: string;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm){

    }
}

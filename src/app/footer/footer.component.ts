import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  masquerade_name="";
  active_masquerade=false;

  constructor() { }

  ngOnInit() {
      this.masquerade_name = sessionStorage.getItem('masquerade');
      if(this.masquerade_name) {
	  if (this.masquerade_name != "0") {
	      this.active_masquerade = true;
	  }
      }
  }

}

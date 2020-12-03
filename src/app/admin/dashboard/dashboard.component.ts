import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

 
    navbar:string="DashBoard"
  ngOnInit(): void {
  }

  setvalue(e){
    this.navbar=e
  }
}

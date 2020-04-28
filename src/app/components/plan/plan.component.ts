import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  baseURL = "http://localhost:4200"
  topURL = this.baseURL + "/activities";
  bottomURL = this.baseURL + "/activities";
  leftURL = this.baseURL + "/activities";
  rightURL = this.baseURL + "/plan";
  
  constructor() { }

  ngOnInit() {
  }

}

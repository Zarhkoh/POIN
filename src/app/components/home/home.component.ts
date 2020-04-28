import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  baseURL = "http://localhost:4200";
  rightURL = this.baseURL + "/activities";
  topURL = this.baseURL;
  bottomURL = this.baseURL;
  leftURL = this.baseURL;

  constructor() { }

  ngOnInit() {
  }

}

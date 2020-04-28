import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-ads',
  templateUrl: './hotel-ads.component.html',
  styleUrls: ['./hotel-ads.component.css']
})
export class HotelAdsComponent implements OnInit {

  topURL = "http://localhost:4200/";
  bottomURL = "http://localhost:4200/";
  leftURL = "http://localhost:4200/";
  rightURL = "http://localhost:4200/";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarificationService } from "../../services/tarification.service";

@Component({
  selector: 'app-tarification',
  templateUrl: './tarification.component.html',
  styleUrls: ['./tarification.component.css']
})
export class TarificationComponent implements OnInit {
  baseURL = "http://localhost:4200/";
  topURL;
  bottomURL;
  leftURL;
  rightURL;

  allTarifications;

  constructor(
    private router: Router,
    private tarificationService: TarificationService) { }

  ngOnInit() {
    this.manageURL();
    this.getTarifications();
  }

  getTarifications() {
    this.tarificationService.getTarifications().subscribe((data) => {
      this.allTarifications = data;
    });
  }


  manageURL() {
    if(this.router.url === "/tarification/room-service") {
        this.bottomURL = this.baseURL + "tarification/multimedia";
        this.topURL = this.baseURL;
        this.leftURL = this.baseURL + "activities";
        this.rightURL = this.baseURL + "restaurant/lunch";
    }

    if(this.router.url === "/tarification/multimedia") {
      this.bottomURL = this.baseURL + "tarification/mini-bar";
      this.topURL = this.baseURL + "tarification/room-service";
      this.leftURL = this.baseURL + "tarification/room-service";
      this.rightURL = this.baseURL + "tarification/multimedia";
    }

    if(this.router.url === "/tarification/mini-bar") {
      this.bottomURL = this.baseURL + "tarification/laundry";
      this.topURL = this.baseURL + "tarification/multimedia";
      this.leftURL = this.baseURL + "tarification/room-service";
      this.rightURL = this.baseURL + "tarification/mini-bar";
    }

    if(this.router.url === "/tarification/laundry") {
      this.bottomURL = this.baseURL + "tarification/room-service";
      this.topURL = this.baseURL + "tarification/mini-bar";
      this.leftURL = this.baseURL + "tarification/room-service";
      this.rightURL = this.baseURL + "tarification/laundry";
    }
  }

}

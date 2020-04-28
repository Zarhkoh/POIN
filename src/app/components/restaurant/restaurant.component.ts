import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  baseURL = "http://localhost:4200/";
  topURL;
  bottomURL;
  leftURL;
  rightURL;

  cardLunch;
  cardDinner;
  cardDessert;
  cardDrink;
  
  constructor(
    private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.manageURL();
    this.getCardLunch();
    this.getCardDinner();
    this.getCardDessert();
    this.getCardDrink();
  }

  getCardLunch(){
    this.restaurantService.getCardLunch().subscribe((data)=> this.cardLunch = data)
  }

  getCardDinner(){
    this.restaurantService.getCardDinner().subscribe((data)=> this.cardDinner = data)
  }

  getCardDessert(){
    this.restaurantService.getCardDessert().subscribe((data)=> this.cardDessert = data)
  }

  getCardDrink(){
    this.restaurantService.getCardDrink().subscribe((data)=> this.cardDrink = data)
  }

  manageURL() {
    if(this.router.url === "/restaurant/lunch") {
        this.bottomURL = this.baseURL + "restaurant/dinner";
        this.topURL = this.baseURL;
        this.leftURL = this.baseURL + "tarification/room-service";
        this.rightURL = this.baseURL + "/restaurant/lunch";
    }

    if(this.router.url === "/restaurant/dinner") {
      this.bottomURL = this.baseURL + "restaurant/dessert";
      this.topURL = this.baseURL + "restaurant/lunch";
      this.leftURL = this.baseURL + "restaurant/lunch";
      this.rightURL = this.baseURL + "restaurant/dinner";
    }

    if(this.router.url === "/restaurant/dessert") {
      this.bottomURL = this.baseURL + "restaurant/drink";
      this.topURL = this.baseURL + "restaurant/dinner";
      this.leftURL = this.baseURL + "restaurant/lunch";
      this.rightURL = this.baseURL + "restaurant/dessert";
    }

    if(this.router.url === "/restaurant/drink") {
      this.bottomURL = this.baseURL + "restaurant/lunch";
      this.topURL = this.baseURL + "restaurant/dessert";
      this.leftURL = this.baseURL + "restaurant/lunch";
      this.rightURL = this.baseURL + "restaurant/drink";
    }
  }
}

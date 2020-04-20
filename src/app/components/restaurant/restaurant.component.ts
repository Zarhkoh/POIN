import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  cardLunch;
  cardDinner;
  cardDessert;
  cardDrink;
  constructor(
    private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
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

}

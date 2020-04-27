import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url = './../assets/mocks/restaurant';

  constructor(private http: HttpClient) { }

  getCardLunch() {
    return this.http.get(this.url + "/lunch.json");
  }
  getCardDinner() {
    return this.http.get(this.url + "/dinner.json");
  }
  getCardDessert() {
    return this.http.get(this.url + "/dessert.json");
  }
  getCardDrink() {
    return this.http.get(this.url + "/drink.json");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url = './../assets/mocks/restaurant';

  constructor(private http: HttpClient) { }

  // Miho BACK
  getMenuCard() {
    return this.http.get(environment.apiHotelUrl + '/menu');
  }

  // Mock re-worked to better match the database
  getMenuCardMock() {
    return this.http.get(this.url + '/menuCard.json');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

  url = './../assets/mocks/tarifications';

  constructor(private http: HttpClient) { }

  getTarificationsMock() {
    return this.http.get(this.url + '/tarification.json');
  }

  getTarifications() {
    return this.http.get(environment.apiHotelUrl + '/tarifications');
  }
}

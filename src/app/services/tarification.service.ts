import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

  url = './../assets/mocks/tarifications';

  constructor(private http: HttpClient) { }

  getTarificationRoomService() {
    return this.http.get(this.url + "/roomservice.json");
  }
  getTarificationMiniBar() {
    return this.http.get(this.url + "/minibar.json");
  }
  getTarificationMultimedia() {
    return this.http.get(this.url + "/multimedia.json");
  }
  getTarificationLaundry() {
    return this.http.get(this.url + "/laundry.json");
  }
}

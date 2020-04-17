import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrollingInformationsService {

  url = './../assets/mocks/scrolling-infos.json';

  constructor(private http: HttpClient) { }

  getAllInformations() {
    return this.http.get(this.url);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather?';

  constructor(private http: HttpClient) { }

  getWeather(City, Appid) {
    const params = new HttpParams()
    .set('q', City)
    .set('APPID', Appid);
    // console.log(this.url, params.toString(), 'mes params');
    return this.http.get(this.url, {params});
  }

}

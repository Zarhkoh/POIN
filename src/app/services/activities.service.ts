import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  url = './../assets/mocks/activities.json';

  constructor(private http: HttpClient) { }

  getAllActivities() {
    return this.http.get(this.url);
  }

  getActivites() {
    return this.http.get(environment.apiHotelUrl + '/activities/activities');
  }
}

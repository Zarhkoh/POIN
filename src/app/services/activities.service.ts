import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  url = './../assets/mocks/activities.json';

  constructor(private http: HttpClient) { }

  getAllActivities() {
    return this.http.get(this.url);
  }
}

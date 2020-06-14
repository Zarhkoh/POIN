import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  baseURL = "http://localhost:4200/";
  topURL = this.baseURL;
  bottomURL = this.baseURL + "plan/";
  leftURL = this.baseURL;
  rightURL = this.baseURL + "tarification/room-service/";

  activities;
  constructor(private activitiesService: ActivitiesService) { 
  }

  ngOnInit() {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activities = this.activitiesService.getAllActivities().subscribe((data) => this.activities = data);
  }
}

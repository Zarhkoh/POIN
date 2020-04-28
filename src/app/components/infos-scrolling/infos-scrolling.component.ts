import { Component, OnInit } from '@angular/core';
import { ScrollingInformationsService } from 'src/app/services/scrolling-informations.service';

@Component({
  selector: 'app-infos-scrolling',
  templateUrl: './infos-scrolling.component.html',
  styleUrls: ['./infos-scrolling.component.css']
})
export class InfosScrollingComponent implements OnInit {

  topURL = "http://localhost:4200/";
  bottomURL = "http://localhost:4200/";
  leftURL = "http://localhost:4200/";
  rightURL = "http://localhost:4200/";
  informations;

  constructor(private scrollingInformationsService: ScrollingInformationsService) { }

  ngOnInit() {
    this.getAllInformations();
  }

  getAllInformations(){
    this.informations = this.scrollingInformationsService.getAllInformations().subscribe((data) => this.informations = data);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarificationService } from "../../services/tarification.service";

@Component({
  selector: 'app-tarification',
  templateUrl: './tarification.component.html',
  styleUrls: ['./tarification.component.css']
})
export class TarificationComponent implements OnInit {

  tarifRoomService;
  tarifMiniBar;
  tarifMultimedia;
  tarifLaundry;

  constructor(
    private router: Router,
    private tarificationService: TarificationService) { }

  ngOnInit() {
    this.getTarifRoomService();
    this.getTarifMiniBar();
    this.getTarifMultimedia();
    this.getTarifLaundry();
  }

  getTarifRoomService(){
    this.tarificationService.getTarificationRoomService().subscribe((data) => this.tarifRoomService = data);
  }

  getTarifMiniBar(){
    this.tarificationService.getTarificationMiniBar().subscribe((data) => this.tarifMiniBar = data);
  }

  getTarifMultimedia(){
    this.tarificationService.getTarificationMultimedia().subscribe((data) => this.tarifMultimedia = data);
  }

  getTarifLaundry(){
    this.tarificationService.getTarificationLaundry().subscribe((data) => this.tarifLaundry = data);
  }

}

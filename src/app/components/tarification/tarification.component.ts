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
    this.getTarifRoomService()
  }

  getTarifRoomService(){
    this.tarificationService.getTarificationRoomService().subscribe((data) => this.tarifRoomService = data);
  }

  getTarifMiniMBar(){
  }

  getTarifMultimedia(){

  }

  getTarifLaundry(){

  }

}

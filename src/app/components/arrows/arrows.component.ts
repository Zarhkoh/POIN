import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

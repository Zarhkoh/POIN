import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as handTrack from 'handtrackjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  URL = "http://localhost:4200/restaurant/lunch"
  // @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  // public context: CanvasRenderingContext2D;
  // img = document.getElementById('img');

  // modelParams = {
  //   flipHorizontal: true,   // flip e.g for video 
  //   imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
  //   maxNumBoxes: 20,        // maximum number of boxes to detect
  //   iouThreshold: 0.5,      // ioU threshold for non-max suppression
  //   scoreThreshold: 0.79,    // confidence threshold for predictions.
  // }

  constructor() { }

  ngOnInit() {
    // this.loadIMG();
  }

  //   loadIMG() {
  //   // Load the model.
  //   handTrack.load(this.modelParams).then(model => {
  //     // detect objects in the image.
  //     console.log("model loaded")
  //     model.detect(this.img).then(predictions => {
  //       console.log('Predictions: ', predictions);
  //     });
  //   });
  // }

  // ngAfterViewInit(): void {
  //   this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  // }

}

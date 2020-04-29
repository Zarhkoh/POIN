import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-meteo-tiny',
  templateUrl: './meteo-tiny.component.html',
  styleUrls: ['./meteo-tiny.component.css']
})
export class MeteoTinyComponent implements OnInit {

  // Variables Weather
  METEO;
  city = 'Lille, France';
  appid = 'ecffadd0f704673d5bfa3386bbe949f5';

  // Variables Date
  public now: Date = new Date();

  constructor(private weatherService: WeatherService) {
    // Function Date
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
    this.getWeather();
  }

  // Function Weather
  getWeather() {
    this.METEO = this.weatherService.getWeather(this.city, this.appid).subscribe((data) => this.METEO = data);
  }

}

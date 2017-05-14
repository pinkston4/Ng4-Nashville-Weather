import { Component, OnInit } from '@angular/core';
import { CurrentConditionsService } from '../current-conditions.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  currentData;
  currentTemp;
  wind;
  currentCondition;
  iconUrl;
  
  constructor(private currentWeather: CurrentConditionsService) { }

  ngOnInit() {
    this.getCurrent();
  }

  getCurrent() {
    this.currentWeather.getCurrentConditions()
    .subscribe(
      data => {
        this.currentData = data;
        this.currentTemp = this.currentData.temperature_string;
        this.wind = this.currentData.wind_string;
        this.currentCondition = this.currentData.weather;
        this.iconUrl = this.currentData.icon_url;
      },
      error => console.log('Server Error')
    );
  }
}

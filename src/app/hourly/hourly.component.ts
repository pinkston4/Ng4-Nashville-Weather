import { Component, OnInit } from '@angular/core';
import { HourlyService } from '../hourly.service';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  hourlyData;
  nextTwelveHours;

  constructor(private hourlyService: HourlyService) { }

  ngOnInit() {
    this.getHourly();
  }

  getHourly() {
    this.hourlyService.getHourlyForecast()
    .subscribe(
      data => {
        this.hourlyData = data;
        this.nextTwelveHours = this.hourlyData.slice(0,[12]);
      },
      error => console.log('Server Error')
    );
 
  }
}

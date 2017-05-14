import { Component, OnInit } from '@angular/core';
import { TenDayService } from '../ten-day.service';

@Component({
  selector: 'app-ten-day',
  templateUrl: './ten-day.component.html',
  styleUrls: ['./ten-day.component.css']
})
export class TenDayComponent implements OnInit {

  tenDayForecast;

  constructor(private tdService: TenDayService) { }

  ngOnInit() {
    this.getTenDay()
  }

  getTenDay() {
    this.tdService.getTenDayForecast()
    .subscribe(
      data => {
        this.tenDayForecast = data;
      },
      error => console.log('Server Error')
    )
  }
}

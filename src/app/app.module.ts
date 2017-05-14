import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HourlyService } from './hourly.service';
import { TenDayService } from './ten-day.service';
import { CurrentConditionsService } from './current-conditions.service';
import { RadarComponent } from './radar/radar.component';
import { HourlyComponent } from './hourly/hourly.component';
import { TenDayComponent } from './ten-day/ten-day.component';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    HourlyComponent,
    TenDayComponent,
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [ CurrentConditionsService, HourlyService, TenDayService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

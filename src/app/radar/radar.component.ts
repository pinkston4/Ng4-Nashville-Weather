import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {

  private key: string =  'f256fc14aee7a6e1';
  radarImg: string = `https://api.wunderground.com/api/${this.key}/animatedradar/q/TN/Nashville.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50`;
  satelliteImg: string = `https://api.wunderground.com/api/${this.key}/animatedsatellite/q/TN/Nashville.gif?basemap=1&timelabel=1&timelabel.y=10&num=5&delay=50
`;
  constructor() { }

}

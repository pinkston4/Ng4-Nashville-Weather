import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HourlyService {

  constructor(private http: Http) { }

  getHourlyForecast(): Observable<any> {
    return this.http.get('https://api.wunderground.com/api/f256fc14aee7a6e1/hourly/q/TN/Nashville.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
  let body = res.json();
  return body.hourly_forecast || { };
}

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

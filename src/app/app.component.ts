import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CurrentConditionsService } from './current-conditions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrentConditionsService],

})
export class AppComponent {
  title = 'Nashville Weather';
  today = new Date();
}

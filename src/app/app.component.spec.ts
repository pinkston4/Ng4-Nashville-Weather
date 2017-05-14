import { TestBed, async } from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { HourlyComponent } from './hourly/hourly.component';
import { RadarComponent } from './radar/radar.component';
import {TenDayComponent } from './ten-day/ten-day.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentConditionsComponent,
        HourlyComponent,
        RadarComponent,
        TenDayComponent
      ],
      imports: [
        NgbModule,
        HttpModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Nashville Weather!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Nashville Weather');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Nashville Weather');
  }));
});

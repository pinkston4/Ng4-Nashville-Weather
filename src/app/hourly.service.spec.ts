import { TestBed, inject } from '@angular/core/testing';

import { HourlyService } from './hourly.service';

describe('HourlyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HourlyService]
    });
  });

  it('should ...', inject([HourlyService], (service: HourlyService) => {
    expect(service).toBeTruthy();
  }));
});

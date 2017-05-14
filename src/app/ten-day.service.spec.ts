import { TestBed, inject } from '@angular/core/testing';

import { TenDayService } from './ten-day.service';

describe('TenDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenDayService]
    });
  });

  it('should ...', inject([TenDayService], (service: TenDayService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CurrentConditionsService } from './current-conditions.service';

describe('CurrentConditionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentConditionsService]
    });
  });

  it('should ...', inject([CurrentConditionsService], (service: CurrentConditionsService) => {
    expect(service).toBeTruthy();
  }));
});

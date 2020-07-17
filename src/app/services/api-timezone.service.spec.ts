import { TestBed } from '@angular/core/testing';

import { ApiTimezoneService } from './api-timezone.service';

describe('ApiTimezoneService', () => {
  let service: ApiTimezoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTimezoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

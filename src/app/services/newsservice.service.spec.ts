import { TestBed } from '@angular/core/testing';

import { NewsserviceService } from './newsservice.service';

describe('NewsserviceService', () => {
  let service: NewsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HhService } from './hh.service';

describe('HhService', () => {
  let service: HhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

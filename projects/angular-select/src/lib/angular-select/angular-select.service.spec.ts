import { TestBed } from '@angular/core/testing';

import { SampleLibService } from './angular-select.service';

describe('SampleLibService', () => {
  let service: SampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

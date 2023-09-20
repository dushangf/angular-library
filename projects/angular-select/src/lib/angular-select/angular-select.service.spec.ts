import { TestBed } from '@angular/core/testing';

import { AngularSelectService } from './angular-select.service';

describe('AngularSelectService', () => {
  let service: AngularSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

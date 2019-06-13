import { TestBed } from '@angular/core/testing';

import { HsLibService } from './hs-lib.service';

describe('HsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsLibService = TestBed.get(HsLibService);
    expect(service).toBeTruthy();
  });
});

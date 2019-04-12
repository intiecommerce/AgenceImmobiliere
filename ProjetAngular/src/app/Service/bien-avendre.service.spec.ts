import { TestBed } from '@angular/core/testing';

import { BienAVendreService } from './bien-avendre.service';

describe('BienAVendreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienAVendreService = TestBed.get(BienAVendreService);
    expect(service).toBeTruthy();
  });
});

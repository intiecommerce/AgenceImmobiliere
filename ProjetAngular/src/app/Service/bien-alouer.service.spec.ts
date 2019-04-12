import { TestBed } from '@angular/core/testing';

import { BienALouerService } from './bien-alouer.service';

describe('BienALouerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienALouerService = TestBed.get(BienALouerService);
    expect(service).toBeTruthy();
  });
});

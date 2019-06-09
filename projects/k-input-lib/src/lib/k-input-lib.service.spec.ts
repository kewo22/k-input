import { TestBed } from '@angular/core/testing';

import { KInputLibService } from './k-input-lib.service';

describe('KInputLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KInputLibService = TestBed.get(KInputLibService);
    expect(service).toBeTruthy();
  });
});

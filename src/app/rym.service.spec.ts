import { TestBed } from '@angular/core/testing';

import { RymService } from './rym.service';

describe('RymService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RymService = TestBed.get(RymService);
    expect(service).toBeTruthy();
  });
});

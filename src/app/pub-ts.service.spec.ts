import { TestBed } from '@angular/core/testing';

import { PubTsService } from './pub-ts.service';

describe('PubTsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PubTsService = TestBed.get(PubTsService);
    expect(service).toBeTruthy();
  });
});

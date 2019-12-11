import { TestBed } from '@angular/core/testing';

import { PubsOfSubService } from './pubs-of-sub.service';

describe('PubsOfSubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PubsOfSubService = TestBed.get(PubsOfSubService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SubsOfPubService } from './subs-of-pub.service';

describe('SubsOfPubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubsOfPubService = TestBed.get(SubsOfPubService);
    expect(service).toBeTruthy();
  });
});

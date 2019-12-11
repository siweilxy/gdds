import { TestBed } from '@angular/core/testing';

import { RelationPubsService } from './relation-pubs.service';

describe('RelationPubsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelationPubsService = TestBed.get(RelationPubsService);
    expect(service).toBeTruthy();
  });
});

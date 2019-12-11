import { TestBed } from '@angular/core/testing';

import { RelationSubsService } from './relation-subs.service';

describe('RelationSubsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelationSubsService = TestBed.get(RelationSubsService);
    expect(service).toBeTruthy();
  });
});

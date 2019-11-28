import { TestBed } from '@angular/core/testing';

import { SubTsService } from './sub-ts.service';

describe('SubTsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubTsService = TestBed.get(SubTsService);
    expect(service).toBeTruthy();
  });
});

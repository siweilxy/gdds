import { TestBed } from '@angular/core/testing';

import { SubInfoService } from './sub-info.service';

describe('SubInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubInfoService = TestBed.get(SubInfoService);
    expect(service).toBeTruthy();
  });
});

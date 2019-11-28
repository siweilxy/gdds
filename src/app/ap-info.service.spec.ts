import { TestBed } from '@angular/core/testing';

import { ApInfoService } from './ap-info.service';

describe('ApInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApInfoService = TestBed.get(ApInfoService);
    expect(service).toBeTruthy();
  });
});

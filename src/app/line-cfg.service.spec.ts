import { TestBed } from '@angular/core/testing';

import { LineCfgService } from './line-cfg.service';

describe('LineCfgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineCfgService = TestBed.get(LineCfgService);
    expect(service).toBeTruthy();
  });
});

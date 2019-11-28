import { TestBed } from '@angular/core/testing';

import { CltSubCfgService } from './clt-sub-cfg.service';

describe('CltSubCfgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CltSubCfgService = TestBed.get(CltSubCfgService);
    expect(service).toBeTruthy();
  });
});

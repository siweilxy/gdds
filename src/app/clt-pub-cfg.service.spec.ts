import { TestBed } from '@angular/core/testing';

import { CltPubCfgService } from './clt-pub-cfg.service';

describe('CltPubCfgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CltPubCfgService = TestBed.get(CltPubCfgService);
    expect(service).toBeTruthy();
  });
});

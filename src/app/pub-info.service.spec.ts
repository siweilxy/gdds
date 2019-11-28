import { TestBed } from '@angular/core/testing';

import { PubInfoService } from './pub-info.service';

describe('PubInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PubInfoService = TestBed.get(PubInfoService);
    expect(service).toBeTruthy();
  });
});

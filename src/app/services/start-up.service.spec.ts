import { TestBed } from '@angular/core/testing';

import { StartUpService } from './start-up.service';

describe('StartUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartUpService = TestBed.get(StartUpService);
    expect(service).toBeTruthy();
  });
});

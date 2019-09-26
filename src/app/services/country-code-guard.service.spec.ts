import { TestBed } from '@angular/core/testing';

import { CountryCodeGuardService } from './country-code-guard.service';

describe('CountryCodeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryCodeGuardService = TestBed.get(CountryCodeGuardService);
    expect(service).toBeTruthy();
  });
});

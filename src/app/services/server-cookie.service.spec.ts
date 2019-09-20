import { TestBed } from '@angular/core/testing';

import { ServerCookieService } from './server-cookie.service';

describe('ServerCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerCookieService = TestBed.get(ServerCookieService);
    expect(service).toBeTruthy();
  });
});

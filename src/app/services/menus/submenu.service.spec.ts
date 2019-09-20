import { TestBed } from '@angular/core/testing';

import { SubmenuService } from './submenu.service';

describe('SubmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmenuService = TestBed.get(SubmenuService);
    expect(service).toBeTruthy();
  });
});

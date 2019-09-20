import { TestBed } from '@angular/core/testing';

import { GenericContentService } from './generic-content.service';

describe('ContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericContentService = TestBed.get(GenericContentService);
    expect(service).toBeTruthy();
  });
});

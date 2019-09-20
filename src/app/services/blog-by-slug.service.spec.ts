import { TestBed } from '@angular/core/testing';

import { BlogBySlugService } from './blog-by-slug.service';

describe('BlogBySlugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogBySlugService = TestBed.get(BlogBySlugService);
    expect(service).toBeTruthy();
  });
});

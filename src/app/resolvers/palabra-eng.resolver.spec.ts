import { TestBed } from '@angular/core/testing';

import { PalabraEngResolver } from './palabra-eng.resolver';

describe('PalabraEngResolver', () => {
  let resolver: PalabraEngResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PalabraEngResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

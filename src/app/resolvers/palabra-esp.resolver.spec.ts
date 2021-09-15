import { TestBed } from '@angular/core/testing';

import { PalabraEspResolver } from './palabra-esp.resolver';

describe('PalabraEspResolver', () => {
  let resolver: PalabraEspResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PalabraEspResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

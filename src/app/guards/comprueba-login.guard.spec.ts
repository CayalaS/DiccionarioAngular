import { TestBed } from '@angular/core/testing';

import { CompruebaLoginGuard } from './comprueba-login.guard';

describe('CompruebaLoginGuard', () => {
  let guard: CompruebaLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompruebaLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

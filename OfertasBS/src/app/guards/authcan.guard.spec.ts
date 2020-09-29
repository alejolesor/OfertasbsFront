import { TestBed, async, inject } from '@angular/core/testing';

import { AuthcanGuard } from './authcan.guard';

describe('AuthcanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthcanGuard]
    });
  });

  it('should ...', inject([AuthcanGuard], (guard: AuthcanGuard) => {
    expect(guard).toBeTruthy();
  }));
});

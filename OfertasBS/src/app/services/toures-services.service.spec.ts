import { TestBed } from '@angular/core/testing';

import { TouresServicesService } from './toures-services.service';

describe('TouresServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouresServicesService = TestBed.get(TouresServicesService);
    expect(service).toBeTruthy();
  });
});

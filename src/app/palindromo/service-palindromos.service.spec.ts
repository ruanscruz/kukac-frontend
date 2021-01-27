import { TestBed } from '@angular/core/testing';

import { ServicePalindromosService } from './service-palindromos.service';

describe('ServicePalindromosService', () => {
  let service: ServicePalindromosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePalindromosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

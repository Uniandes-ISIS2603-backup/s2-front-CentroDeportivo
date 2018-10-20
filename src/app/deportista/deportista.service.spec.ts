import { TestBed } from '@angular/core/testing';

import { DeportistaService } from './deportista.service';

describe('DeportistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeportistaService = TestBed.get(DeportistaService);
    expect(service).toBeTruthy();
  });
});

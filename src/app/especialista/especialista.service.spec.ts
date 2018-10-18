import { TestBed } from '@angular/core/testing';

import { EspecialistaService } from './especialista.service';

describe('EspecialistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspecialistaService = TestBed.get(EspecialistaService);
    expect(service).toBeTruthy();
  });
});

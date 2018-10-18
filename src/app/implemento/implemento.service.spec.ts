import { TestBed } from '@angular/core/testing';

import { ImplementoService } from './implemento.service';

describe('ImplementoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplementoService = TestBed.get(ImplementoService);
    expect(service).toBeTruthy();
  });
});

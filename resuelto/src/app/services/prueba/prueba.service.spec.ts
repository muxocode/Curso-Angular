import { TestBed } from '@angular/core/testing';

import { PruebaService } from './prueba.service';

describe('PruebaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PruebaService = TestBed.get(PruebaService);
    expect(service).toBeTruthy();
  });
});

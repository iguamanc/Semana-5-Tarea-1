import { TestBed } from '@angular/core/testing';

import { TercerosServicios } from './terceros-servicios';

describe('TercerosServicios', () => {
  let service: TercerosServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercerosServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

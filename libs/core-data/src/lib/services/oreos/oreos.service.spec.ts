import { TestBed } from '@angular/core/testing';

import { OreosService } from './oreos.service';

describe('OreosService', () => {
  let service: OreosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OreosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

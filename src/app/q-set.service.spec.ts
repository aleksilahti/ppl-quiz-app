import { TestBed } from '@angular/core/testing';

import { QSetService } from './q-set.service';

describe('QSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QSetService = TestBed.get(QSetService);
    expect(service).toBeTruthy();
  });
});

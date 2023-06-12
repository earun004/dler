import { TestBed } from '@angular/core/testing';

import { CommomApiService } from './commom-api.service';

describe('CommomApiService', () => {
  let service: CommomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ClassOneService } from './class-one.service';

describe('ClassOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassOneService]
    });
  });

  it('should be created', inject([ClassOneService], (service: ClassOneService) => {
    expect(service).toBeTruthy();
  }));
});

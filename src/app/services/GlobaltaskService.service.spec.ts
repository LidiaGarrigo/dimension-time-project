/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GlobaltaskService } from './GlobaltaskService.service';

describe('Service: GlobaltaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobaltaskService]
    });
  });

  it('should ...', inject([GlobaltaskService], (service: GlobaltaskService) => {
    expect(service).toBeTruthy();
  }));
});

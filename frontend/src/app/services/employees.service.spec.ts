import {TestBed, inject} from '@angular/core/testing';

import {EmployeesService} from './employees.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EmployeesService]
    });
  });

  it('should create', inject([EmployeesService], (service: EmployeesService) => {
    expect(service).toBeTruthy();
  }));

  // todo: TEST ALL METHODS
});

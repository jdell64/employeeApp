import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {EmployeeComponent} from './employee.component';
import {SearchService} from '../../services/search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MyMaterialModule} from '../../modules/my-material/my-material.module';
import {EmployeesService} from '../../services/employees.service';
import {MOCK_EMPLOYEES} from '../../services/mock-test-objects';


describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let employeeService: EmployeesService;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MyMaterialModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        EmployeeComponent
      ],
      providers: [
        EmployeesService,
        SearchService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    searchService = injector.get(SearchService);
    employeeService = injector.get(EmployeesService);
    httpMock = injector.get(HttpTestingController);
    component.employee = MOCK_EMPLOYEES[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

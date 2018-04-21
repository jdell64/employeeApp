import {async, ComponentFixture, getTestBed, inject, TestBed} from '@angular/core/testing';

import {EmployeeListComponent} from './employee-list.component';
import {MyMaterialModule} from '../../modules/my-material/my-material.module';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HomeComponent} from '../home/home.component';
import {EmployeeComponent} from '../employee/employee.component';
import {EmployeesService} from '../../services/employees.service';
import {SearchService} from '../../services/search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MOCK_EMPLOYEES} from '../../services/mock-test-objects';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let injector: TestBed;
  let fixture: ComponentFixture<EmployeeListComponent>;
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
        HomeComponent,
        EmployeeListComponent,
        EmployeeComponent
      ],
      providers: [
        EmployeesService,
        SearchService,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    searchService = injector.get(SearchService);
    employeeService = injector.get(EmployeesService);
    httpMock = injector.get(HttpTestingController);
    fixture.detectChanges();

    // spies for the ngOnInit
    spyOn(searchService, 'getIsSearching').and.returnValue(Observable.of(false));
    spyOn(searchService, 'getQueryString').and.returnValue(Observable.of(''));
    spyOn(searchService, 'searchByLastName').and.returnValue(Observable.of(MOCK_EMPLOYEES));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: tests for
//  addEmployee() {
//   employeeDeleted(employee) {


});

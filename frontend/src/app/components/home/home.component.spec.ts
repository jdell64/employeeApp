import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {EmployeeComponent} from '../employee/employee.component';
import {MyMaterialModule} from '../../modules/my-material/my-material.module';
import {EmployeesService} from '../../services/employees.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SearchService} from '../../services/search.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MyMaterialModule,
        HttpClientTestingModule
      ],
      declarations: [
        HomeComponent,
        EmployeeListComponent,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

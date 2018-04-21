import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditEmployeeDialogComponent} from './edit-employee-dialog.component';
import {MyMaterialModule} from '../../modules/my-material/my-material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JoinPipe} from '../../pipes/join.pipe';
import {SplitPipe} from '../../pipes/split.pipe';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeesService} from '../../services/employees.service';
import {MOCK_EMPLOYEES} from '../../services/mock-test-objects';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


describe('EditEmployeeDialogComponent', () => {
  let component: EditEmployeeDialogComponent;
  let fixture: ComponentFixture<EditEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MyMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [
        EditEmployeeDialogComponent,
        JoinPipe,
        SplitPipe
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: (dialogResult: any) => {
            }
          }
        },
        {provide: MAT_DIALOG_DATA, useValue: []},
        EmployeesService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeDialogComponent);
    component = fixture.componentInstance;
    component.data = {'employee': MOCK_EMPLOYEES[0]};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

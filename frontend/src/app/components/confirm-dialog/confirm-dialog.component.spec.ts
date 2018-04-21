import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MyMaterialModule} from '../../modules/my-material/my-material.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      imports: [
        MyMaterialModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: (dialogResult: any) => {
            }
          }
        },
        {
          provide: MAT_DIALOG_DATA, useValue: []
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeesService} from '../../services/employees.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhoneUtils} from '../../utils/phone-utils';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  states;
  positionCategories;
  editEmployeeForm: FormGroup;


  constructor(private _fb: FormBuilder, public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private employeesService: EmployeesService) {

    employeesService.getStates().subscribe((states) => {
      this.states = states;
    });

    employeesService.getPositionCategories().subscribe((cats) => {
      this.positionCategories = cats;
    })
  }


  ngOnInit() {
    this.editEmployeeForm = this._fb.group({
      firstName: [this.data.employee['firstName'] || '', Validators.required],
      middleInitial: [this.data.employee['middleInitial'] || ''],
      lastName: [this.data.employee['lastName'] || '', Validators.required],
      emailAddress: [this.data.employee['emailAddress'] || '', [Validators.email, Validators.required]],
      phoneNumber: [PhoneUtils.digitToPhoneFormat(this.data.employee['phoneNumber']) || '',
        [Validators.required, Validators.min(14), Validators.max(14)]],
      address1: [this.data.employee['address1'] || '', Validators.required],
      address2: [this.data.employee['address2'] || ''],
      city: [this.data.employee['city'] || '', Validators.required],
      state: [this.data.employee['state'] || '', Validators.required],
      zip: [this.data.employee['zip'] || '', [Validators.required,
        Validators.minLength(5), Validators.maxLength(5)]
      ],
      positionCategory: [this.data.employee['positionCategory'] || '', Validators.required],
      active: [this.data.employee['active'] || true, Validators.required],
      id: [this.data.employee['id'] || null]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEmployee() {
    this.editEmployeeForm.value.phoneNumber = PhoneUtils.phoneFormatToDigit(this.editEmployeeForm.value.phoneNumber);
    this.dialogRef.close({result: 'save', employee: this.editEmployeeForm.value})
  }

  cancel() {
    this.dialogRef.close()
  }

}

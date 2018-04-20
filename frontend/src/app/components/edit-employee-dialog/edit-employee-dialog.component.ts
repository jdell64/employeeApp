import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {


  states;
  positionCategories;

  ngOnInit() {


  }

  constructor(public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private employeesService: EmployeesService) {

    employeesService.getStates().subscribe((states) => {
      this.states = states;
    });

    employeesService.getPositionCategories().subscribe((cats) => {
      this.positionCategories = cats;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEmployee() {
    this.dialogRef.close('save')
  }

  cancel() {
    this.dialogRef.close()
  }

}

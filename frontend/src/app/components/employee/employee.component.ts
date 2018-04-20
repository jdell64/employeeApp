import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {EditEmployeeDialogComponent} from '../edit-employee-dialog/edit-employee-dialog.component';
import {EmployeesService} from '../../services/employees.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

// import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input()
  employee;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  // used to save state when updating (in case it was canceled).
  originalEmployee;

  constructor(public dialog: MatDialog, private employeesService: EmployeesService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.saveUserState()
  }

  getFullName() {
    return `${this.employee.firstName} ${this.employee.middleInitial} ${this.employee.lastName}`;
  }


  editEmployee(): void {
    const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
      width: '500px',
      data: {employee: this.employee}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.result === 'save') {
        this.employeesService.saveEmployee(this.employee).subscribe(res => {
          // todo: verify it was successful
          this.snackBar.open(`${this.employee.firstName} ${this.employee.lastName} successfully saved!`,
            'Okay', {
              duration: 2000,
            });
          this.saveUserState();
          this.onEdit.emit(this.employee);
        })
      } else {
        this.employee = this.originalEmployee; // restore employee to its state
      }
    });
  }

  deleteEmployee(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {employee: this.employee}
    });

    dialogRef.componentInstance.title = 'Are you Sure';
    dialogRef.componentInstance.message = 'Are you sure you want to delete this employee?';

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(this.employee)
        // this.onDelete.emit(this.employee);
        this.employeesService.deleteEmployee(this.employee).subscribe(res => {
          // todo: verify it was successful
          this.snackBar.open(`${this.employee.firstName} ${this.employee.lastName} successfully deleted.`,
            'Okay', {
              duration: 2000,
            });
        });
      }
    });
  }


  private saveUserState() {
    // deep copy
    this.originalEmployee = Object.assign({}, this.employee);
  }
}

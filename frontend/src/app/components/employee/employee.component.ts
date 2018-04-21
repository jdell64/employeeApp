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

  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  // used to save state when updating (in case it was canceled).
  originalEmployee;

  constructor(public dialog: MatDialog, private employeesService: EmployeesService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.saveUserState();
    // console.log(this.employee)
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
      // console.log('edited', result);
      if (result && result.result === 'save') {
        this.employeesService.saveEmployee(result.employee).subscribe(res => {
            this.snackBar.open(`${result.employee.firstName} ${result.employee.lastName} successfully saved!`,
              'Okay', {
                duration: 2000,
              });
            this.saveUserState();
            this.onSave.emit(result.employee);
          }, error => {
            let msg = '';
            error.error.errors.forEach((err) => {
              msg = msg + `${err.objectName} ${err.field} ${err.defaultMessage}. `
            });

            this.snackBar.open(`Error saving: ${msg}`,
              'Okay', {
                duration: 10000,
              });
          }
        )
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
        this.employeesService.deleteEmployee(this.employee).subscribe(res => {
          this.onDelete.emit(this.employee);
          this.snackBar.open(`${this.employee.firstName} ${this.employee.lastName} successfully deleted.`,
            'Okay', {
              duration: 2000,
            });
        }, error => {
          this.snackBar.open(`Unable to delete ${this.employee.firstName} ${this.employee.lastName}`,
            'Okay', {
              duration: 10000,
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

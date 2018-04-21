import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {EditEmployeeDialogComponent} from '../edit-employee-dialog/edit-employee-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SearchService} from '../../services/search.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeesBS: BehaviorSubject<any[]>;

  allEmployees: any[];
  searchResults: any[];

  employees: any[] = [];

  isSearching = false;
  hasQueryString: BehaviorSubject<boolean>;

  constructor(public dialog: MatDialog, private employeesService: EmployeesService,
              public snackBar: MatSnackBar, private searchService: SearchService) {
    this.hasQueryString = new BehaviorSubject(false);
    this.employeesBS = new BehaviorSubject([]);
  }

  // TODO: install auto unsubscribe
  ngOnInit() {
    // this.employeesService.getEmployees().subscribe(emps => this.allEmployees = emps);
    this.searchService.getIsSearching().subscribe(is => this.isSearching = is);
    this.searchService.getQueryString().switchMap(s => {
      // console.log(s);
      if (s && s.length > 0) {
        this.hasQueryString.next(true);
      } else {
        this.hasQueryString.next(false);
      }
      return this.searchService.searchByLastName(s)
    }).subscribe(res => {
      // console.log(res);
      // this.searchResults = res;
      this.employees = res;
      this.searchService.setIsSearching(false);
      // update is searching... and if no results...
    });

  }


  addEmployee() {
    const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
      width: '500px',
      data: {employee: {}}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.result === 'save') {
        const employee = result.employee;
        this.employeesService.createEmployee(employee).subscribe(res => {
          // todo: verify it was successful
          // console.log(res)
          this.snackBar.open(`${employee.firstName} ${employee.lastName} successfully added!`,
            'Okay', {
              duration: 2000,
            });
          this.employees.push(res);
        })
      }
    });
  }

  employeeDeleted(employee) {
    this.employees = this.employees.filter(emp => emp.id !== employee.id);
  }
}

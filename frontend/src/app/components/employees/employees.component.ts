import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {UserPictureService} from '../../services/user-picture.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import {tap} from 'rxjs/operators';
import {flatMap} from 'tslint/lib/utils';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees;

  constructor(private employeesService: EmployeesService, private picService: UserPictureService) {
  }


  // TODO: install auto unsubscribe
  ngOnInit() {
    this.employeesService.getEmployees().subscribe(emps => this.employees = emps);
  }



}

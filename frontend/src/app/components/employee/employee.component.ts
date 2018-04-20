import {Component, Input, OnInit} from '@angular/core';
import {UserPictureService} from '../../services/user-picture.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input()
  employee;

  employeePicture;

  constructor() { }

  ngOnInit() {

  }

  getFullName() {
    return `${this.employee.firstName} ${this.employee.middleInitial} ${this.employee.lastName}`;
  }
}

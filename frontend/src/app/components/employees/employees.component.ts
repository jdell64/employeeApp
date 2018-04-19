import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees;

  constructor(private employeesService: EmployeesService) {
  }


  // TODO: install auto unsubscribe
  ngOnInit() {
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log(employees);
    })
  }

}

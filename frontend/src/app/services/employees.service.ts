import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  getEmployees() { // todo: move all routes to a global routes file
    return this.http.get('/api/employees')
  }

}

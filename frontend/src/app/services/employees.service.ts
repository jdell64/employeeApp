import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmployeesService {

  private httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient) {
  }

  getEmployees() { // todo: move all routes to a global routes file
    return this.http.get('/api/employees', this.httpOptions);
  }



  saveEmployee(employee) {
    return this.http.put(`/api/employees/${employee.id}`, employee, this.httpOptions)
  }

  // TODO:
  deleteEmployee(employee) {

  }
  createEmployee() {

  }



  // EMPLOYEE METADATA

  getPositionCategories() {
    return this.http.get('/api/positionCategories');
  }

  /**
   * Returns the valid US States from the backend along with the UI text.
   */
  getStates() {
    return this.http.get('/api/states');
  }

}

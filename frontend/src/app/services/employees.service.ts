import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeesService {

  private httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};


  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any[]> { // todo: move all routes to a global routes file
    return this.http.get<any[]>('/api/employees', this.httpOptions);
  }


  saveEmployee(employee): Observable<any> {
    return this.http.put<any>(`/api/employees/${employee.id}`, employee, this.httpOptions)
  }

  deleteEmployee(employee): Observable<string> {
    return this.http.delete<string>(`/api/employees/${employee.id}`, this.httpOptions);
  }


  createEmployee(employee): Observable<any> {
    return this.http.post<any>(`/api/employees`, employee, this.httpOptions)
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

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  URL_API = 'http://localhost:4000/api/employees';

  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,
    _id: ''
  };

  employees: Employee[];

  constructor(private http: HttpClient) {
    this.employees = [];
   }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API)
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API,employee);
  }

  ubdateEmployee(employee: Employee){
    console.log(employee._id);
    return this.http.put(`${this.URL_API}/${employee._id}`,employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

}

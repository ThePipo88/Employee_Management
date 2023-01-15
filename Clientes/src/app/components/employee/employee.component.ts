import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  edit = false;

  constructor(public employeeService: EmployeeService) { 
    console.log(this.edit);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        this.employeeService.employees = res;
      },
      (err) => console.error(err)
    )
  }

  addEmployee(form: NgForm){
    
    if(this.edit){
      this.employeeService.ubdateEmployee(this.employeeService.selectedEmployee).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.log(err)
      )
      this.edit = false;
    }else{
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  deleteEmployee(_id: string){
    if(confirm('Are you sure you want to delete it?')){
       this.employeeService.deleteEmployee(_id).subscribe(
        (res) => {
          this.getEmployees();
        },
        (err) => console.error(err)
      )
    }
  }

  editEmployee(employee: Employee){
    console.log(employee._id);
    this.edit = true;
    this.employeeService.selectedEmployee = employee;
  }

}

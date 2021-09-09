import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {EmployeeService} from "../../../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employeeForm = this.formBuilder.group({
    lastName: '',
    firstName: '',
    userName: '',
    password: ''
  })

  constructor(private router: Router, private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  addEmployee() {
    this.router.navigate(['/']);
    this.employeeService.addEmployee(this.employeeForm.value);
  }
}

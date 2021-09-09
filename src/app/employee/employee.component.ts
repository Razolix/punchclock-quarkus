import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Employee, EmployeeService} from "../../employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  entries: Employee[] = [];

  employeeForm = this.formBuilder.group({
    checkIn: '',
    checkOut: ''
  })

  updateEmployeeForm = this.formBuilder.group({
    id: '',
    checkIn: '',
    checkOut: ''
  })

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
    employeeService.employeeSubject$.subscribe(value => {
      this.entries = value;
    })
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employeeForm.value);
  }

  removeEmployee(id: number) {
    this.employeeService.removeEmployee(id);
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.updateEmployeeForm.value);
  }
}

import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Employee, EmployeeService} from "../../../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) {
    employeeService.employeeSubject$.subscribe(value => {
      this.employees = value;
    })
  }

  removeEmployee(id: number) {
    this.employeeService.removeEmployee(id);
  }

  updateEmployee(id: number) {
    this.router.navigate(['/updateEmployee', id]);
  }

  showEmployee(id: number) {
    this.router.navigate(['/showEmployee', id]);
  }
}

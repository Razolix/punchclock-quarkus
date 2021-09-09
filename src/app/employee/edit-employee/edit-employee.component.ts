import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee, EmployeeService} from "../../../employee.service";
import {FormBuilder} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {AssertNotNull} from "@angular/compiler";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number = 0;
  employeeForm = this.formBuilder.group({
    id: '',
    lastName: '',
    firstName: '',
    userName: '',
    password: ''
  })
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      this.employeeService.getEmployee(this.id).subscribe(employee => this.setEmployee(employee));
    });
  }

  setEmployee(employee: Employee) {
    this.employeeForm.controls['id'].setValue(this.id);
    this.employeeForm.controls['lastName'].setValue(employee.lastName);
    this.employeeForm.controls['firstName'].setValue(employee.firstName);
    this.employeeForm.controls['userName'].setValue(employee.userName);
    this.employeeForm.controls['password'].setValue(employee.password);
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeForm.value);
    this.router.navigate(['/']);
  }


}

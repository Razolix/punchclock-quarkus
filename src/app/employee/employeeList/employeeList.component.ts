import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService, Query} from "../../../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];
  queryList: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) {
    employeeService.employeeSubject$.subscribe(value => {
      this.employees = value;
      this.getQuery();
    })
  }

  removeEmployee(id: number) {
    this.employeeService.removeEmployee(id);
    this.getQuery();
  }

  updateEmployee(id: number) {
    this.router.navigate(['../updateEmployee', id]);
    this.getQuery();
  }

  showEmployee(id: number) {
    this.router.navigate(['../showEmployee', id]);
  }

  ngOnInit(): void {
    this.employeeService.employeeSubject$.subscribe(value => {
      this.employees = value;
    })
    this.getQuery();
  }

  getQuery() {
    this.employeeService.getQuery().subscribe(result =>  this.queryList = result);
    }
}

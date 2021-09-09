import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee, EmployeeService} from "../../../employee.service";

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  id: number = 0;
  employee!: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      this.employeeService.getEmployee(this.id).subscribe(employee => this.employee = employee);
    });
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:8080/employees';
  employeeSubject$ = new BehaviorSubject<Employee[]>([]);

  constructor(private http: HttpClient) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<Employee[]>(this.url).subscribe(employee => {
      this.employeeSubject$.next(employee as Employee[])
    })
  }

  addEmployee(employee: Employee) {
    this.http.post(this.url, employee).subscribe(() => this.loadEmployees());
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(this.url + '/' + id);
  }

  removeEmployee(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(() => this.loadEmployees());
  }

  updateEmployee(employee: Employee) {
    this.http.put(this.url, employee).subscribe(() => this.loadEmployees());
  }
}

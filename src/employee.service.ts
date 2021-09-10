import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  userName: string;
  password: string;
}

export interface LoginViewModel {
  username: string;
  password: string;
}

export interface JWT {
  token: string;
}

export interface Query {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  url = 'http://localhost:8080/employees';
  employeeSubject$ = new BehaviorSubject<Employee[]>([]);
  constructor(private http: HttpClient) {
    this.loadEmployees();
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    const jwt = localStorage.getItem('jwt');
    console.error(jwt);
    this.http.get<Employee[]>(this.url,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(employee => {
      this.employeeSubject$.next(employee as Employee[])
    })
  }

  addEmployee(employee: Employee) {
    const jwt = localStorage.getItem('jwt');
    this.http.post(this.url, employee,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadEmployees());
  }

  getEmployee(id: number) {
    const jwt = localStorage.getItem('jwt');
    return this.http.get<Employee>(this.url + '/' + id,{
      headers: {'Authorization':'Bearer ' + jwt}});
  }

  removeEmployee(id: number) {
    const jwt = localStorage.getItem('jwt');
    this.http.delete(this.url + '/' + id,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadEmployees());
  }

  updateEmployee(employee: Employee) {
    const jwt = localStorage.getItem('jwt');
    this.http.put(this.url, employee,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadEmployees());
  }

  async getEmployeeLogin(loginViewModel: LoginViewModel) {
    return await this.http.post('http://localhost:8080/auth/login', loginViewModel).toPromise();
  }

  async signUp(employee: Employee) {
    return await this.http.post('http://localhost:8080/auth/signUp', employee).toPromise();
  }

  getQuery() {
    const jwt = localStorage.getItem('jwt');
    return this.http.get<Employee[]>(this.url + '/usernames', {
      headers: {'Authorization':'Bearer ' + jwt}});
  }
}

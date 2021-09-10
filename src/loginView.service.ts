import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee, LoginViewModel} from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class LoginViewService {
  constructor(private http: HttpClient) {
  }

  async getEmployeeLogin(loginViewModel: LoginViewModel) {
    return await this.http.post('http://localhost:8080/auth/login', loginViewModel).toPromise();
  }

  async signUp(employee: Employee) {
    return await this.http.post('http://localhost:8080/auth/signUp', employee).toPromise();
  }
}

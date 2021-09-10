import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {JWT} from "../../../employee.service";
import {LoginViewService} from "../../../loginView.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(private router: Router, private loginViewService: LoginViewService, private formBuilder: FormBuilder) {
  }

  async login() {
    const token = await this.loginViewService.getEmployeeLogin(this.loginForm.value);
    localStorage.setItem('jwt', (token as JWT).token);
    this.router.navigate(['/mainView']);
  }
}

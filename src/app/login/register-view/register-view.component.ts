import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginViewService} from "../../../loginView.service";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent {
  registerForm = this.formBuilder.group({
    id: '',
    lastName: '',
    firstName: '',
    userName: '',
    password: ''
  })

  constructor(private router: Router, private loginViewService: LoginViewService, private formBuilder: FormBuilder) {
  }

  register() {
    this.loginViewService.signUp(this.registerForm.value).then(() => this.router.navigate(['/']));
  }
}

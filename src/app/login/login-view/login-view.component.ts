import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) { }

  login() {

  }
}

import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent {
  registerForm = this.formBuilder.group({
    lastName: '',
    firstName: '',
    userName: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder) {
  }

  register() {

  }
}

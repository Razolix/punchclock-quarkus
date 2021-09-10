import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../employee.service";

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

  constructor(private router: Router, private employeeService: EmployeeService, private formBuilder: FormBuilder) {}

  register() {
    this.employeeService.signUp(this.registerForm.value).then(() =>  this.router.navigate(['/']));
  }
}

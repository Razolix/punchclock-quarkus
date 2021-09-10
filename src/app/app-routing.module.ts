import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainviewComponent} from "./mainview/mainview.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";
import {ShowEmployeeComponent} from "./employee/show-employee/show-employee.component";
import {CreateProjectComponent} from "./project/create-project/create-project.component";
import {EditProjectComponent} from "./project/edit-project/edit-project.component";
import {ShowProjectComponent} from "./project/show-project/show-project.component";
import {ViewComponent} from "./login/view/view.component";
import {LoginViewComponent} from "./login/login-view/login-view.component";
import {RegisterViewComponent} from "./login/register-view/register-view.component";

const routes: Routes = [
  {path: 'mainView', component: MainviewComponent},
  {path: '', component: ViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'newEmployee', component: CreateEmployeeComponent},
  {path: 'updateEmployee/:id', component: EditEmployeeComponent},
  {path: 'showEmployee/:id', component: ShowEmployeeComponent},
  {path: 'newProject', component: CreateProjectComponent},
  {path: 'updateProject/:id', component: EditProjectComponent},
  {path: 'showProject/:id', component: ShowProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

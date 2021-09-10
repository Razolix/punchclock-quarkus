import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EntryService} from "../entry.service";
import {HttpClientModule} from "@angular/common/http";
import {ProjectListComponent} from './project/projectList/projectList.component';
import {EmployeeListComponent} from './employee/employeeList/employeeList.component';
import {MainviewComponent} from './mainview/mainview.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {ShowEmployeeComponent} from './employee/show-employee/show-employee.component';
import {EditProjectComponent} from "./project/edit-project/edit-project.component";
import {ShowProjectComponent} from "./project/show-project/show-project.component";
import {CreateProjectComponent} from "./project/create-project/create-project.component";
import {ProjectService} from "../project.service";
import {EmployeeService} from "../employee.service";
import { LoginViewComponent } from './login/login-view/login-view.component';
import { RegisterViewComponent } from './login/register-view/register-view.component';
import { ViewComponent } from './login/view/view.component';
import {TicketService} from "../ticket.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ProjectListComponent,
    MainviewComponent,
    CreateEmployeeComponent,
    CreateProjectComponent,
    EditEmployeeComponent,
    EditProjectComponent,
    ShowEmployeeComponent,
    ShowProjectComponent,
    LoginViewComponent,
    RegisterViewComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EntryService,
    TicketService,
    ProjectService,
    EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

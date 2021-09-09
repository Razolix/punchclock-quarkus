import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EntryService} from "../entry.service";
import {HttpClientModule} from "@angular/common/http";
import {ProjectComponent} from './project/project.component';
import {TicketComponent} from './ticket/ticket.component';
import {EmployeeListComponent} from './employee/employeeList/employeeList.component';
import {EntryComponent} from './entry/entry.component';
import { MainviewComponent } from './mainview/mainview.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TicketComponent,
    EmployeeListComponent,
    EntryComponent,
    MainviewComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ShowEmployeeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

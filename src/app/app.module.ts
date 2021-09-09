import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EntryService} from "../entry.service";
import {HttpClientModule} from "@angular/common/http";
import {ProjectComponent} from './project/project.component';
import {TicketComponent} from './ticket/ticket.component';
import {EmployeeComponent} from './employee/employee.component';
import {EntryComponent} from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TicketComponent,
    EmployeeComponent,
    EntryComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainviewComponent} from "./mainview/mainview.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";

const routes: Routes = [
  {path: '', component: MainviewComponent},
  {path: 'newEmployee', component: CreateEmployeeComponent},
  {path: 'updateEmployee/:id', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

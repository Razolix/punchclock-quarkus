import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjectService} from "../../../project.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm = this.formBuilder.group({
    name: '',
    description: '',
    tickets: []
  })

  constructor(private router: Router, private projectService: ProjectService, private formBuilder: FormBuilder) { }

  addProject() {
    this.router.navigate(['/']);
    this.projectService.addProject(this.projectForm.value);
  }
}

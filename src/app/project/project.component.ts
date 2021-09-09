import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Project, ProjectService} from "../../project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [];

  projectForm = this.formBuilder.group({
    checkIn: '',
    checkOut: ''
  })

  updateProjectForm = this.formBuilder.group({
    id: '',
    checkIn: '',
    checkOut: ''
  })

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) {
    projectService.projectSubject$.subscribe(value => {
      this.projects = value;
    })
  }

  addProject() {
    this.projectService.addProject(this.projectForm.value);
  }

  removeProject(id: number) {
    this.projectService.removeProject(id);
  }

  updateProject() {
    this.projectService.updateProject(this.updateProjectForm.value);
  }
}

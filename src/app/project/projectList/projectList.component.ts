import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Project, ProjectService} from "../../../project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './projectList.component.html',
  styleUrls: ['./projectList.component.css']
})
export class ProjectListComponent implements OnInit{
  projects: Project[] = [];

  constructor(private router: Router, private projectService: ProjectService) {
    projectService.projectSubject$.subscribe(value => {
      this.projects = value;
    })
  }

  removeProject(id: number) {
    this.projectService.removeProject(id);
  }

  updateProject(id: number) {
    this.router.navigate(['../updateProject', id]);
  }

  showProject(id: number) {
    this.router.navigate(['../showProject', id]);
  }

  ngOnInit(): void {
    this.projectService.projectSubject$.subscribe(value => {
      this.projects = value;
    })
  }
}

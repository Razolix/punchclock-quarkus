import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project, ProjectService} from "../../../project.service";

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {
  id: number = 0;
  project!: Project;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      this.projectService.getProject(this.id).subscribe(project => this.project = project);
    });
  }
}

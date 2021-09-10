import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Project, ProjectService} from "../../../project.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  id: number = 0;
  projectForm = this.formBuilder.group({
    id: '',
    name: '',
    description: ''
  })

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      this.projectService.getProject(this.id).subscribe(project => this.setProject(project));
    });
  }

  setProject(project: Project) {
    this.projectForm.controls['id'].setValue(this.id);
    this.projectForm.controls['name'].setValue(project.name);
    this.projectForm.controls['description'].setValue(project.description);
  }

  updateProject() {
    this.projectService.updateProject(this.projectForm.value);
    this.router.navigate(['/mainView']);
  }
}

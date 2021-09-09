import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "./ticket.service";

export interface Project {
  id: number;
  name: String;
  description: String;
  tickets: Ticket[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://localhost:8080/projects';
  projectSubject$ = new BehaviorSubject<Project[]>([]);

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<Project[]>(this.url).subscribe(project => {
      this.projectSubject$.next(project as Project[])
    })
  }

  addProject(project: Project) {
    this.http.post(this.url, project).subscribe(() => this.loadProjects());
  }

  removeProject(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(() => this.loadProjects());
  }

  updateProject(project: Project) {
    this.http.put(this.url, project).subscribe(() => this.loadProjects());
  }
}

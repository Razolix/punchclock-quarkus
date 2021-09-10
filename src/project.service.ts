import {Injectable, OnInit} from '@angular/core';
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
export class ProjectService implements OnInit {
  url = 'http://localhost:8080/projects';
  projectSubject$ = new BehaviorSubject<Project[]>([]);
  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  ngOnInit(): void {
    this.loadProjects();
    }

  loadProjects() {
    const jwt = localStorage.getItem('jwt');
    this.http.get<Project[]>(this.url,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(project => {
      this.projectSubject$.next(project as Project[])
    })
  }

  addProject(project: Project) {
    const jwt = localStorage.getItem('jwt');
    this.http.post(this.url, project,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadProjects());
  }

  getProject(id: number) {
    const jwt = localStorage.getItem('jwt');
    return this.http.get<Project>(this.url + '/' + id,{
      headers: {'Authorization':'Bearer ' + jwt}});
  }

  removeProject(id: number) {
    const jwt = localStorage.getItem('jwt');
    this.http.delete(this.url + '/' + id,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadProjects());
  }

  updateProject(project: Project) {
    const jwt = localStorage.getItem('jwt');
    this.http.put(this.url, project,{
      headers: {'Authorization':'Bearer ' + jwt}}).subscribe(() => this.loadProjects());
  }
}

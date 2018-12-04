import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import { Users } from "../models/users";
import { Project } from "../models/project";

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  AddUserUrl: string = 'http://localhost/ProjectManager.API/api/User/AddUser';
  UpdateUserUrl: string = 'http://localhost/ProjectManager.API/api/User/UpdateUser';
  GetAllUserUrl: string = 'http://localhost/ProjectManager.API/api/User';
  DeleteUserUrl: string = 'http://localhost/ProjectManager.API/api/User/DeleteUser';
  GetUserByIdUrl: string = 'http://localhost/ProjectManager.API/api/User';


  AddProjectUrl: string = 'http://localhost/ProjectManagerAPI/api/Project/AddProject';
  UpdateProjectUrl: string = 'http://localhost/ProjectManager.API/api/Project/UpdateProject';
  GetAllProjectUrl: string = 'http://localhost/ProjectManager.API/api/Project';
  GetProjectByIDUrl: string = 'http://localhost/ProjectManager.API/api/Project';
  DeleteProjectByIDUrl: string = 'http://localhost/ProjectManager.API/api/Project/DeleteProject';

  GetAllTaskUrl: string = 'http://localhost/ProjectManager.API/api/Task';
  GetTaskByIdUrl: string = 'http://localhost/ProjectManager.API/api/Task';
  GetTaskByProjectIdUrl: string = 'http://localhost/ProjectManager.API/api/Task/GetTaskByProjectId'; 
  AddTaskUrl: string = 'http://localhost/ProjectManager.API/api/Task/AddTask';
  EndTaskUrl: string = 'http://localhost/ProjectManager.API/api/Task/EndTask';
  UpdateTaskUrl: string = 'http://localhost/ProjectManager.API/api/Task/UpdateTask';
  GetParentTaskUrl :string = 'http://localhost/ProjectManager.API/api/Task/ParentTask';
  
  constructor(private http: HttpClient) { }

  AddUser(item: Users): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.AddUserUrl, item, httpOption);
  }

  UpdateUser(item: Users): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.UpdateUserUrl, item, httpOption);
  }

  GetAllUser() {
    return this.http.get(this.GetAllUserUrl);
  }

  DeleteUser(Id: number): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete(this.DeleteUserUrl + "/" + Id, httpOption);
  }

  GetUserById(Id: number) {
    return this.http.get(this.GetUserByIdUrl + "/" + Id);
  }

  //  Project

  AddProject(item: Project): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.AddProjectUrl, item, httpOption);
  }

  UpdateProject(item: Project): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.UpdateProjectUrl, item, httpOption);
  }

  GetAllProject() {
    return this.http.get(this.GetAllProjectUrl);
  }

  GetProjectById(Id: number) {
    return this.http.get(this.GetProjectByIDUrl + "/" + Id)
  }

  DeleteProject(Id: number): Observable<any> {
    var httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };   
    return this.http.delete(this.DeleteProjectByIDUrl + "/" + Id, httpOption);
  }

  AddTask(item: Task): Observable<any> {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.AddTaskUrl, item, httpOptions);
  }

  UpdateTask(item: Task): Observable<any> {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.UpdateTaskUrl, item, httpOptions);
  }

  GetAllTask() {
    return this.http.get(this.GetAllTaskUrl);
  }

  GetParentTask(){
    return this.http.get(this.GetParentTaskUrl);
  }

  GetTaskById(taskId: number) {
    return this.http.get(this.GetTaskByIdUrl + "/" + taskId);
  }

  GetTaskByProjectId(taskId: number) {
    return this.http.get(this.GetTaskByProjectIdUrl + "/" + taskId);
  }

  EndTask(taskId: number): Observable<any> {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.EndTaskUrl + "/" + taskId, httpOptions);
  }

}

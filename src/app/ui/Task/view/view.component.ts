import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/shared.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Task: any = [];
  Project: any;
  ProjectId: number;
  projectNameSearch: string;

  constructor(private service: ProjectService) {
  }

  ngOnInit() {
    this.GetProjects();
    // this.GetTask();
  }

  GetTask() {
    this.Task = new Task();
    this.service.GetAllTask()
      .subscribe(data => this.Task = data
      )
  }

  GetProjects() {
    this.service.GetAllProject()
      .subscribe(data => this.Project = data)
  }

  SelectProject(Id: number) {
    this.ProjectId = Id;
    this.GetTaskByProjectId(Id);
  }

  GetTaskByProjectId(Id: number) {
    this.service.GetTaskByProjectId(Id)
      .subscribe(data => {
        console.log(data)
        this.Task = data
          , err => console.log(err)
      })
  }

  EndTask(Id: number) {
    this.service.EndTask(Id)
      .subscribe(_ => this.service.GetTaskByProjectId(this.ProjectId)
        .subscribe(result => {
          this.Task = result
            , error => console.log(error)
        }, err => console.log(err)));
  }

  Disable(endTask: boolean) {
    if (endTask) { return true; }
    else { return false; }
  }

  SortByStartDate() {
    this.Task.sort((x, y) => x.StartDate.localeCompare(y.StartDate));
  }

  SortByEndDate() {
    this.Task.sort((x, y) => x.EndDate.localeCompare(y.EndDate));
  }

  SortByPriority() {
    this.Task.sort((x, y) => x.Priority - y.Priority);
  }

  SortByCompleted() {
    this.Task.sort((x, y) => {
      if (x.IsEnd == null && y.IsEnd != null) { return -1; }
      else { return 1; }
    })
  }
}

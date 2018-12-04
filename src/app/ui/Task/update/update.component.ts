import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/shared.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  ProjectData: any;
  TaskData: any;
  UserData: any;
  ParentData: any;
  isDisabled: boolean;
  isValidEndDate: string;
  Task: any;
  ProjectId: any;
  taskNameSearch: string;
  projectNameSearch: string;
  firstNameSearch: string;
  TaskId: number;

  constructor(private service: ProjectService, private active: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {   
    this.active.params.subscribe((params: Params) => {
      this.TaskId = params["id"]
    });
    this.GetTaskById(this.TaskId);
    this.GetParentTask();
    this.GetProjects();
    this.GetUsers();
  }

  GetTaskById(Id: number) {
    this.service.GetTaskById(Id)
      .subscribe(data => {
        console.log(data)
        this.Task = data;
        this.isDisabled = this.Task.IsParent;
      })
  }

  OnCheck(event) {
    if (event.target.checked) { this.isDisabled = true; }
    else { this.isDisabled = false; }
  }

  SelectProject(Id: number) {
    this.Task.ProjectId = Id;
  }

  SelectParentTask(Id: number) {
    this.Task.ParentId = Id;
  }

  SelectUser(Id: number) {
    this.Task.UserId = Id;
  }

  GetDate() {
    var date = new Date();
    var nextDate = new Date();
    nextDate.setDate(date.getDate() + 1);
    this.Task.StartDate = formatDate(date, "yyyy-MM-dd", "en");
    this.Task.EndDate = formatDate(nextDate, "yyyy-MM-dd", "en");
  }

  DateValidation() {
    var startDate = new Date(this.Task.StartDate);
    var endDate = new Date(this.Task.EndDate);
    if (startDate < endDate) {
      this.isValidEndDate = "Valid"
    }
    else {
      this.isValidEndDate = "Invalid"
    }
  }

  Validation() {
    if (this.isValidEndDate == "Invalid") {
      return true;
    }
    else {
      return false;
    }
  }

  UpdateTask() {
    this.service.UpdateTask(this.Task)
      .subscribe(_ => this.route.navigateByUrl('viewtask'), err => console.log(err));
  }

  Reset() {
    this.Task = new Task();
    this.GetDate();
  }

  GetUsers() {
    this.service.GetAllUser()
      .subscribe(data => {
        this.UserData = data, err => console.log(err)
      })
  }

  GetParentTask() {
    this.service.GetParentTask()
      .subscribe(data => {
        this.ParentData = data, err => console.log(err);
      });
  }

  GetProjects() {
    this.service.GetAllProject()
      .subscribe(data => {
        this.ProjectData = data, err => console.log(err);
      })
  }
}

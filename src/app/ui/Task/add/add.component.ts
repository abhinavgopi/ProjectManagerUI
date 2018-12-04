import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ProjectData: any;
  TaskData: any;
  UserData: any;
  ParentData: any;
  isDisabled: boolean;
  isValidEndDate: string;
  Task: any;
  taskNameSearch: string;
  projectNameSearch: string;
  firstNameSearch: string;

  constructor(private service: ProjectService, private route: Router) {
    this.Task = new Task();
    this.Task.isParent = false;
    this.isDisabled = false;
    this.GetParentTask();
    this.GetProjects();
    this.GetUsers();
    this.GetDate();
  }

  ngOnInit() {
  }

  OnCheck(event) {
    if (event.target.checked) { this.isDisabled = true; }
    else { this.isDisabled = false; }
  }

  SelectProject(Id: number) {
    this.Task.ProjectId = Id;
  }

  SelectParentTask(Id: number) {
    this.Task.TaskId = Id;
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

  AddTask() {
      this.service.AddTask(this.Task)
        .subscribe(_ => this.route.navigateByUrl('viewtask'), err => console.log(err));
  }

  Reset() {
    this.Task = new Task();
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
      })
  }

  GetProjects() {
    this.service.GetAllProject()
      .subscribe(data => {
        this.ProjectData = data, err => console.log(err);
      })
  }
}

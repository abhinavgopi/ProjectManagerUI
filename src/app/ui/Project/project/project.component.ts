import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/shared.service';
import { Project } from 'src/app/models/project';
import { formatDate } from '@angular/common';


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectNameSearch: string;
  Project: any;
  ProjectData: any;
  AddorUpdate: string;
  isDisabled: boolean;
  isValidEndDate: string;
  Users: any;
  firstNameSearch: string;

  constructor(private projectService: ProjectService) {
    this.Project = new Project();
    this.AddorUpdate = "Add";
    this.isValidEndDate = "Valid";
    this.projectService.GetAllUser()
      .subscribe(data => {
        this.Users = data
        console.log(this.Users), err => console.log(err)
      });
    this.GetAllProjects();
  }
  ngOnInit() {
  }

  OnSelect(event) {
    if (event.target.checked) {
      this.isDisabled = false;
      var date = new Date();
      var date1 = new Date();
      date1.setDate(date.getDate() + 1);
      this.Project.StartDate = formatDate(date, "yyyy-MM-dd", "en");
      this.Project.EndDate = formatDate(date1, "yyyy-MM-dd", "en");
    }
    else {
      this.Project.StartDate = null;
      this.Project.EndDate = null;
      this.isDisabled = true;
    }
  }

  ValidateStartEndDate() {
    var startDate = new Date(this.Project.StartDate);
    var endDate = new Date(this.Project.EndDate);
    if (startDate < endDate) {
      this.isValidEndDate = "Valid";
    }
    else {
      this.isValidEndDate = "Invalid";
    }
  }

  ValidateDate() {
    if (this.isValidEndDate == "Invalid") { return true; }
    else { return false; }
  }

  SelectManager(id: Number) {
    this.Project.UserId = id;
  }

  GetAllProjects() {
    this.projectService.GetAllProject()
      .subscribe(data => {
        this.ProjectData = data
        this.Project = new Project()
          , err => console.log(err)
      })
  }

  AddOrUpdateProject() {
    if (this.AddorUpdate == "Add") {
      this.projectService.AddProject(this.Project)
        .subscribe(_ => {
          this.GetAllProjects()
            , err => console.log(err)
        })
    }
    else {
      this.projectService.UpdateProject(this.Project)
        .subscribe(_ => {
          this.GetAllProjects()
          this.AddorUpdate = "Add"
            , err => console.log(err)
        })
    }
  }
  UpdateProject(Id: number) {
    this.AddorUpdate = "Update";
    this.projectService.GetProjectById(Id)
      .subscribe(data => {
        console.log(data)
        this.Project = data
        this.AddorUpdate = "Update"
          , err => console.log(err)
      })
  }

  DeleteProject(Id: number) {
    this.projectService.DeleteProject(Id)
      .subscribe(_ => {
        this.GetAllProjects()
          , err => console.log(err)
      })
  }

  Reset() {
    this.Project = new Project();
    this.AddorUpdate = 'Add';
  }

  SortByStartDate() {
    this.ProjectData.sort((m, n) => m.StartDate.localeCompare(n.StartDate));
  }

  SortByEndDate() {
    this.ProjectData.sort((m, n) => m.EndDate.localeCompare(n.EndDate));
  }

  SortByPriority() {
    this.ProjectData.sort((m, n) => m.Priority - n.Priority);
  }

  SortByCompleted() {
    this.ProjectData.sort((m, n) => m.Completed - n.Completed);
  }
}

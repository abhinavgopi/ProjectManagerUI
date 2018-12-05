import { TestBed, async } from '@angular/core/testing';
import { Users } from 'src/app/models/users';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

import { ProjectService } from 'src/app/services/shared.service';
import { ProjectComponent } from 'src/app/ui/Project/project/project.component';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ProjectService, HttpClient, HttpHandler]
  }));


  it('user should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const item: Users = { UserId: 12, FirstName: "test", LastName: "T", EmployeeId: "T11100", ProjectId: 2, TaskId: 4 }
    const result = service.AddUser(item);
    expect(service).toBeTruthy();
  });


  it('Project should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const item: Project = { ProjectId: 12, ProjectName: "testProject", Priority: 12, StartDate: new Date(2018, 10, 10), EndDate: new Date(2018, 11, 30), UserId: 4, TotalTask: 0, CompletedTask: 1 }
    const result = service.AddProject(item);
    expect(service).toBeTruthy();
  });

  it('Task should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const item: Task = { TaskId: 1, Status: 'Progress', TaskName: "testTask", Priority: 12, StartDate: new Date(2018, 10, 10), EndDate: new Date(2018, 11, 30), ProjectId: 4, ParentTaskId: 1, isEnded: false }
    const result = service.AddTask(item);
    expect(service).toBeTruthy();
  });
});

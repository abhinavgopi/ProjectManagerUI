import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { ProjectService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  SearchByFirstName: string;
  UserData: any;
  User: any;
  AddOrUpdate: string;
  array: any[];

  constructor(private service: ProjectService) {
    this.User = new Users();
    this.AddOrUpdate = "Add";
    this.service.GetAllUser()
      .subscribe(data => {
        this.UserData = data
        console.log(this.UserData), err => console.log(err)
      });
  }

  ngOnInit() {
  }

  AddOrUpdateUser() {
    if (this.AddOrUpdate == "Add") {
      this.service.AddUser(this.User)
        .subscribe(_ => {
          this.service.GetAllUser()
            .subscribe(data => {
              this.UserData = data
              this.User = new Users()
                , err => console.log(err)
            })
            , err => console.log(err)
        });
    }
    else {
      this.service.UpdateUser(this.User)
        .subscribe(_ => {
          this.service.GetAllUser()
            .subscribe(data => {
              this.UserData = data
              this.User = new Users()
              this.AddOrUpdate = "Add"
                , err => console.log(err)
            })
            , err => console.log(err)
        });
    }
  }

  UpdateUser(id: number) {
    this.AddOrUpdate = "Update";
    console.log(id);
    this.service.GetUserById(id)
      .subscribe(data => {
        this.User = data
        this.AddOrUpdate = "Update"
          , err => console.log(err)
      })
  }

  Reset() {
    this.User = new Users();
    this.AddOrUpdate = "Add";
  }

  DeleteUser(id: number) {
    this.service.DeleteUser(id)
      .subscribe(_ => this.service.GetAllUser()
        .subscribe(data => {
          this.UserData = data
          this.User = data
          this.AddOrUpdate = 'Add'
            , err => console.log(err)
        }, err => console.log(err)))
  }
  
  SortByFirstName() {
    this.array = this.UserData;
    this.array.sort((m, n) => m.FirstName.localeCompare(n.FirstName));
  }
  SortByLastName() {
    this.array = this.UserData;
    this.array.sort((m, n) => m.LastName.localeCompare(n.LastName));
  }

  SortByEmployeeID() {
    this.array = this.UserData;
    this.array.sort((m, n) => m.EmployeeId.localeCompare(n.EmployeeId));
  }
}

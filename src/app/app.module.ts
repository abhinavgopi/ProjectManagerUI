import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './ui/Task/add/add.component';
import { UpdateComponent } from './ui//Task/update/update.component';
import { ViewComponent } from './ui/Task/view/view.component';
import { ProjectComponent } from './ui/Project/project/project.component';
import { UserComponent } from './ui/user/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSearchPipe } from 'src/app/Filter/projectfilter.pipe';
import { UserSearchPipe } from 'src/app/Filter/userfilter.pipe';
import { TaskSearchPipe } from 'src/app/Filter/taskfilter.pipe';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appRoute } from './app.routing';
import { ProjectService } from 'src/app/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    ProjectComponent,
    UserComponent,
    ProjectSearchPipe,
    UserSearchPipe,   
    TaskSearchPipe 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

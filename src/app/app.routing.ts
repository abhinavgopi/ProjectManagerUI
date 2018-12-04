import{RouterModule, Routes} from '@angular/router';
import {UserComponent} from 'src/app/ui/user/user/user.component';
import {ProjectComponent} from 'src/app/ui/Project/project/project.component';
import {AddComponent} from 'src/app/ui/Task/add/add.component';
import {UpdateComponent} from 'src/app/ui/Task/update/update.component';
import {ViewComponent} from 'src/app/ui/Task/view/view.component';
import { componentFactoryName } from '@angular/compiler';

export const appRoute : Routes =[
    {path :'user', component:UserComponent},
    {path :'project', component:ProjectComponent},
    {path :'addtask', component:AddComponent},
    {path :'updatetask/:id', component:UpdateComponent},
    {path :'viewtask', component:ViewComponent},  
]
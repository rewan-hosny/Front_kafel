import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';

import { ContestsComponent } from './contests/contests.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
  { path: 'project', component: ProjectComponent  },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
    { path: 'manageProject/:id', component: ManageProjectComponent },
  { path: 'controlPanel', component: ControlPanelComponent },
  { path: 'addProject', component: AddProjectComponent },
  {path:'contests',component:ContestsComponent},
  {path:'complete',component: CompleteProfileComponent },
  {path:'profileSetting',component: ProfileSettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

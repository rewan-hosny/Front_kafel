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

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
        {path:'controlPanel',component:ControlPanelComponent},

                {path:'contests',component:ContestsComponent},
                {path:'completeProfile',component:CompleteProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

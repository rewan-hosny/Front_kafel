import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ContestsComponent } from './contests/contests.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProjectComponent,

    ContestsComponent,
    CompleteProfileComponent,
    ProjectDetailsComponent,
    ControlPanelComponent,
    AddProjectComponent,
    ProfileSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
   FormsModule
  ],
  providers: [JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

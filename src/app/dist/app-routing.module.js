"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var project_component_1 = require("./project/project.component");
var contests_component_1 = require("./contests/contests.component");
var complete_profile_component_1 = require("./complete-profile/complete-profile.component");
var project_details_component_1 = require("./project-details/project-details.component");
var control_panel_component_1 = require("./control-panel/control-panel.component");
var add_project_component_1 = require("./add-project/add-project.component");
var profile_setting_component_1 = require("./profile-setting/profile-setting.component");
var manage_project_component_1 = require("./manage-project/manage-project.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'project-details/:id', component: project_details_component_1.ProjectDetailsComponent },
    { path: 'manageProject/:id', component: manage_project_component_1.ManageProjectComponent },
    { path: 'controlPanel', component: control_panel_component_1.ControlPanelComponent },
    { path: 'addProject', component: add_project_component_1.AddProjectComponent },
    { path: 'contests', component: contests_component_1.ContestsComponent },
    { path: 'complete', component: complete_profile_component_1.CompleteProfileComponent },
    { path: 'profileSetting', component: profile_setting_component_1.ProfileSettingComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map

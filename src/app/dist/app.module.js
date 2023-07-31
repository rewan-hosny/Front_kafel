"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var ngx_slick_carousel_1 = require("ngx-slick-carousel");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var project_component_1 = require("./project/project.component");
var angular_jwt_1 = require("@auth0/angular-jwt");
var contests_component_1 = require("./contests/contests.component");
var complete_profile_component_1 = require("./complete-profile/complete-profile.component");
var project_details_component_1 = require("./project-details/project-details.component");
var control_panel_component_1 = require("./control-panel/control-panel.component");
var add_project_component_1 = require("./add-project/add-project.component");
var forms_1 = require("@angular/forms");
var angular_jwt_2 = require("@auth0/angular-jwt");
var ngx_webstorage_1 = require("ngx-webstorage");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                project_component_1.ProjectComponent,
                contests_component_1.ContestsComponent,
                complete_profile_component_1.CompleteProfileComponent,
                project_details_component_1.ProjectDetailsComponent,
                control_panel_component_1.ControlPanelComponent,
                add_project_component_1.AddProjectComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ngx_slick_carousel_1.SlickCarouselModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [angular_jwt_1.JwtHelperService, { provide: angular_jwt_2.JWT_OPTIONS, useValue: angular_jwt_2.JWT_OPTIONS }, ngx_webstorage_1.LocalStorageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map

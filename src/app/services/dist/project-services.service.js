"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var http_1 = require("@angular/common/http");
var ProjectServicesService = /** @class */ (function () {
    function ProjectServicesService(http, jwtHelper, localStorage, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.localStorage = localStorage;
        this.router = router;
        this.GetAllProject = "Project/GetAllProject";
        this.OneProject = "Project/GetOneProject";
        this.CreateProject = "Project";
    }
    ProjectServicesService.prototype.getAllProject = function () {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.GetAllProject, httpOptions);
    };
    ProjectServicesService.prototype.GetOneProject = function (id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.OneProject + "/" + id, httpOptions);
    };
    ProjectServicesService.prototype.AddProject = function (project) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(environment_1.environment.apiUrl + "/" + this.CreateProject, project, httpOptions);
    };
    ProjectServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectServicesService);
    return ProjectServicesService;
}());
exports.ProjectServicesService = ProjectServicesService;

//# sourceMappingURL=project-services.service.js.map

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(http, router, projectService) {
        this.http = http;
        this.router = router;
        this.projectService = projectService;
        this.projects = [];
    }
    // In your component.ts file
    // projects: any[] = [
    //   {
    //     title: "need developer to do project .net",
    //     status: "Completed",
    //     user: "rewan hosny",
    //     timestamp: "1 year ago",
    //     priceRange: "$300 - $500"
    //   },
    //     {
    //     title: "need developer to do project .net",
    //     status: "Completed",
    //     user: "rewan hosny",
    //     timestamp: "1 year ago",
    //     priceRange: "$250 - $500"
    //   },
    //   // Add more project data objects here
    // ];
    ProjectComponent.prototype.viewProjectDetails = function (id) {
        this.router.navigate(['/project-details', id]);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.AllProject();
    };
    ProjectComponent.prototype.AllProject = function () {
        var _this = this;
        this.projectService.getAllProject().subscribe(function (result) {
            _this.projects = result;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.css']
        })
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=project.component.js.map

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Project_module_1 = require("../modules/Project.module");
var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(http, router, offerService, projectService, route) {
        this.http = http;
        this.router = router;
        this.offerService = offerService;
        this.projectService = projectService;
        this.route = route;
        this.AllCategories = [];
        this.CreateProject = new Project_module_1.Project();
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        // Retrieve the project ID from the route parameter
        this.getCategories();
    };
    AddProjectComponent.prototype.getCategories = function () {
        var _this = this;
        // Call the GetOneProject function with the project ID
        this.offerService.GetAllCategories().subscribe(function (data) {
            // Handle the response, here 'data' contains the project details
            _this.AllCategories = data;
            // You can now use 'this.projectDetails' to display the project details on your template
        }, function (error) {
            // Handle the error if the API call fails
            console.error('Error fetching project details:', error);
        });
    };
    AddProjectComponent.prototype.AddProjects = function () {
        var _this = this;
        this.projectService.AddProject(this.CreateProject).subscribe(function () {
            console.log("offer item  updated successfully.");
            _this.router.navigate(['/project']);
        }, function (error) {
            console.log("Error updating }: " + error);
        });
        ;
    };
    AddProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-add-project',
            templateUrl: './add-project.component.html',
            styleUrls: ['./add-project.component.css']
        })
    ], AddProjectComponent);
    return AddProjectComponent;
}());
exports.AddProjectComponent = AddProjectComponent;

//# sourceMappingURL=add-project.component.js.map

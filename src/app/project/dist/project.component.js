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
        this.filteredProjects = [];
        this.categoriesProjects = [];
        this.selectedCategoryId = null; // Property to store the selected category ID
        this.selectedStatus = null;
        this.projects = [];
    }
    ProjectComponent.prototype.viewProjectDetails = function (id) {
        this.router.navigate(['/project-details', id]);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.AllProject();
        this.filteredProjects = this.projects;
    };
    ProjectComponent.prototype.filterProjectsAndCategory = function () {
        var selectedCategoryId = this.selectedCategoryId;
        var selectedStatus = this.selectedStatus;
        if (selectedCategoryId === null && selectedStatus === null) {
            // If both selectedCategoryId and selectedStatus are null, show all projects
            this.filteredProjects = this.projects;
        }
        else if (selectedCategoryId === null) {
            // If selectedCategoryId is null, filter projects only by selectedStatus
            this.filteredProjects = this.projects.filter(function (project) { return project.statues === selectedStatus; });
        }
        else if (selectedStatus === null) {
            // If selectedStatus is null, filter projects only by selectedCategoryId
            this.filteredProjects = this.projects.filter(function (project) { return project.categoryId === selectedCategoryId; });
        }
        else {
            // Filter projects based on both selectedCategoryId and selectedStatus
            this.filteredProjects = this.projects.filter(function (project) { return project.categoryId === selectedCategoryId && project.statues === selectedStatus; });
        }
    };
    ProjectComponent.prototype.selectCategory = function (categoryId) {
        this.selectedCategoryId = categoryId;
        this.filterProjectsAndCategory();
    };
    ProjectComponent.prototype.selectStatus = function (status) {
        this.selectedStatus = status;
        this.filterProjectsAndCategory();
    };
    ProjectComponent.prototype.AllProject = function () {
        var _this = this;
        this.projectService.getAllProject().subscribe(function (result) {
            _this.filteredProjects = result;
            _this.categoriesProjects = result;
            _this.projects = result;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectComponent.prototype.getSafeImageUrl = function (base64String) {
        if (base64String) {
            return 'data:image/jpeg;base64,' + base64String;
        }
        else {
            return '/assets/images/profile.png';
        }
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

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
var CreateOffer_module_1 = require("../modules/CreateOffer.module");
var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(http, router, projectService, offerService, route) {
        this.http = http;
        this.router = router;
        this.projectService = projectService;
        this.offerService = offerService;
        this.route = route;
        this.projectDetails = new Project_module_1.Project();
        this.console = console;
        this.OfferDetails = [];
        this.createOffer = new CreateOffer_module_1.CreateOffer(); // Initialize createOffer with a new instance of CreateOffer
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve the project ID from the route parameter
        this.route.params.subscribe(function (params) {
            _this.projectId = +params['id']; // Assuming the route parameter name is 'id'
            _this.getProjectDetails();
            _this.getOfferDetails();
        });
    };
    ProjectDetailsComponent.prototype.getProjectDetails = function () {
        var _this = this;
        // Call the GetOneProject function with the project ID
        this.projectService.GetOneProject(this.projectId).subscribe(function (data) {
            // Handle the response, here 'data' contains the project details
            _this.projectDetails = data;
            // You can now use 'this.projectDetails' to display the project details on your template
        }, function (error) {
            // Handle the error if the API call fails
            console.error('Error fetching project details:', error);
        });
    };
    ProjectDetailsComponent.prototype.CreateOffers = function () {
        var _this = this;
        this.offerService.CreateOffer(this.createOffer, this.projectId).subscribe(function () {
            console.log("offer item  updated successfully.");
            _this.getOfferDetails();
        }, function (error) {
            console.log("Error updating }: " + error);
        });
        ;
    };
    ProjectDetailsComponent.prototype.getOfferDetails = function () {
        var _this = this;
        this.offerService.GetOffer(this.projectId).subscribe(function (data) {
            // Handle the response, here 'data' contains the project details
            _this.OfferDetails = data;
            // You can now use 'this.projectDetails' to display the project details on your template
        }, function (error) {
            // Handle the error if the API call fails
            console.error('Error fetching project details:', error);
        });
    };
    ProjectDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-project-details',
            templateUrl: './project-details.component.html',
            styleUrls: ['./project-details.component.css']
        })
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());
exports.ProjectDetailsComponent = ProjectDetailsComponent;

//# sourceMappingURL=project-details.component.js.map

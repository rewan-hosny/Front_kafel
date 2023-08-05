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
var person_module_1 = require("../modules/person/person.module");
var acceptedOffer_module_1 = require("../modules/acceptedOffer.module");
var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(http, authService, router, projectService, offerService, route) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.projectService = projectService;
        this.offerService = offerService;
        this.route = route;
        this.person = new person_module_1.Person();
        this.acceptoffer = new acceptedOffer_module_1.AcceptedOffer();
        this.projectDetails = new Project_module_1.Project();
        this.console = console;
        this.OfferDetails = [];
        this.acceptanceStatus = null;
        this.createOffer = new CreateOffer_module_1.CreateOffer(); // Initialize createOffer with a new instance of CreateOffer
        this.showBidSection = true;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve the project ID from the route parameter
        this.route.params.subscribe(function (params) {
            _this.projectId = +params['id']; // Assuming the route parameter name is 'id'
            // Load the 'showBidSection' value from browser storage when the component initializes
            var storedShowBidSection = localStorage.getItem("showBidSection_" + _this.projectId);
            if (storedShowBidSection !== null) {
                _this.showBidSection = JSON.parse(storedShowBidSection);
            }
            _this.getProjectDetails();
            _this.getOfferDetails();
            _this.PersonData();
            _this.getIfFreelance();
            _this.GetAcceptedOffer();
        });
    };
    ProjectDetailsComponent.prototype.GetAcceptedOffer = function () {
        var _this = this;
        this.offerService.GetAcceptProject(this.projectId).subscribe(function (result) {
            _this.acceptoffer = result;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectDetailsComponent.prototype.hideBidSection = function () {
        this.showBidSection = false;
        // Save the 'showBidSection' value to browser storage when it changes
        localStorage.setItem("showBidSection_" + this.projectId, JSON.stringify(this.showBidSection));
    };
    // Rename the method to toggleBidSection
    ProjectDetailsComponent.prototype.toggleBidSection = function () {
        this.showBidSection = !this.showBidSection;
        // Save the 'showBidSection' value to browser storage when it changes
        localStorage.setItem("showBidSection_" + this.projectId, JSON.stringify(this.showBidSection));
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
    ProjectDetailsComponent.prototype.getIfFreelance = function () {
        var _this = this;
        this.offerService.GetIfFreelance().subscribe(function (data) {
            // Handle the response, here 'data' contains the project details
            _this.messagge = data;
            console.log(_this.messagge);
            // You can now use 'this.projectDetails' to display the project details on your template
        }, function (error) {
            // Handle the error if the API call fails
            console.log(_this.messagge.freelance);
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
    ProjectDetailsComponent.prototype.getSafeImageUrl = function (base64String) {
        if (base64String) {
            return 'data:image/jpeg;base64,' + base64String;
        }
        else {
            return ' ';
        }
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
    ProjectDetailsComponent.prototype.PersonData = function () {
        var _this = this;
        this.authService.GetUser().subscribe(function (result) {
            _this.person = result;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectDetailsComponent.prototype.AcceptOffer = function (id) {
        var _this = this;
        this.offerService.AcceptProject(id).subscribe(function (response) {
            console.log("Accepted offer successfully.");
            _this.toggleBidSection();
            _this.getOfferDetails();
            _this.acceptanceStatus = "Offer accepted! You have accepted the offer with ID " + response.id + ".";
        }, function (error) {
            console.log("Error accepting offer: " + error);
            if (error.status === 400 && error.error === 'Invalid request. You have already accepted an offer for this project.') {
                _this.acceptanceStatus = 'Invalid request! You have already accepted an offer for this project.';
            }
            else {
                _this.acceptanceStatus = 'Error accepting offer. An error occurred while accepting the offer. Please try again later.';
            }
        });
    };
    ProjectDetailsComponent.prototype.viewProjectDetails = function (id) {
        this.router.navigate(['/manageProject', id]);
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

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GetImage_module_1 = require("../modules/GetImage.module");
var Message_module_1 = require("../modules/Message.module");
var acceptedOffer_module_1 = require("../modules/acceptedOffer.module");
var person_module_1 = require("../modules/person/person.module");
var ManageProjectComponent = /** @class */ (function () {
    function ManageProjectComponent(http, router, route, authService, offerService, jwtHelper) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.offerService = offerService;
        this.jwtHelper = jwtHelper;
        this.person = new person_module_1.Person();
        this.message = new Message_module_1.Message();
        this.acceptoffer = new acceptedOffer_module_1.AcceptedOffer();
        this.getImage = new GetImage_module_1.GetImage();
        this.messages = [];
        this.massege = '';
        this.reciverId = 0;
    }
    ManageProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PersonData();
        this.GetImage();
        this.route.params.subscribe(function (params) {
            _this.projectId = +params['id']; // Assuming the route parameter name is 'id'
            _this.GetAcceptedOffer();
            _this.GetMessages();
            _this.getIfFreelance();
        });
    };
    ManageProjectComponent.prototype.calculateReceiverId = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (((_d = (_c = (_b = (_a = this.acceptoffer) === null || _a === void 0 ? void 0 : _a.offers) === null || _b === void 0 ? void 0 : _b.freelance) === null || _c === void 0 ? void 0 : _c.person) === null || _d === void 0 ? void 0 : _d.id) === ((_e = this.person) === null || _e === void 0 ? void 0 : _e.id)) {
            return ((_j = (_h = (_g = (_f = this.acceptoffer) === null || _f === void 0 ? void 0 : _f.offers) === null || _g === void 0 ? void 0 : _g.project) === null || _h === void 0 ? void 0 : _h.person) === null || _j === void 0 ? void 0 : _j.id) || 0;
        }
        else {
            return ((_o = (_m = (_l = (_k = this.acceptoffer) === null || _k === void 0 ? void 0 : _k.offers) === null || _l === void 0 ? void 0 : _l.freelance) === null || _m === void 0 ? void 0 : _m.person) === null || _o === void 0 ? void 0 : _o.id) || 0;
        }
    };
    ManageProjectComponent.prototype.calculateReceiverName = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (((_d = (_c = (_b = (_a = this.acceptoffer) === null || _a === void 0 ? void 0 : _a.offers) === null || _b === void 0 ? void 0 : _b.freelance) === null || _c === void 0 ? void 0 : _c.person) === null || _d === void 0 ? void 0 : _d.id) === ((_e = this.person) === null || _e === void 0 ? void 0 : _e.id)) {
            return ((_j = (_h = (_g = (_f = this.acceptoffer) === null || _f === void 0 ? void 0 : _f.offers) === null || _g === void 0 ? void 0 : _g.freelance) === null || _h === void 0 ? void 0 : _h.person) === null || _j === void 0 ? void 0 : _j.firstName) || 'Unknown';
        }
        else {
            return ((_o = (_m = (_l = (_k = this.acceptoffer) === null || _k === void 0 ? void 0 : _k.offers) === null || _l === void 0 ? void 0 : _l.project) === null || _m === void 0 ? void 0 : _m.person) === null || _o === void 0 ? void 0 : _o.firstName) || 'Unknown';
        }
    };
    ManageProjectComponent.prototype.getIfFreelance = function () {
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
    ManageProjectComponent.prototype.PersonData = function () {
        var _this = this;
        this.authService.GetUser().subscribe(function (result) {
            _this.person = result;
        }, function (error) {
            console.log(error);
        });
    };
    ManageProjectComponent.prototype.GetMessages = function () {
        var _this = this;
        this.offerService.GetMessages(this.projectId).subscribe(function (result) {
            _this.messages = result;
        }, function (error) {
            console.log(error);
        });
    };
    ManageProjectComponent.prototype.GetImage = function () {
        var _this = this;
        this.authService.GetImage().subscribe(function (result) {
            _this.getImage = result;
            _this.imageSrc = "data:image/jpeg;base64," + _this.getImage.imageUrl;
        }, function (error) {
            console.log(error);
        });
    };
    ManageProjectComponent.prototype.GetAcceptedOffer = function () {
        var _this = this;
        this.offerService.GetAcceptProject(this.projectId).subscribe(function (result) {
            _this.acceptoffer = result;
        }, function (error) {
            console.log(error);
        });
    };
    ManageProjectComponent.prototype.submitForm = function () {
        // Call the Rewan function and pass the inputValue as an argument
        this.Rewan(this.massege);
    };
    ManageProjectComponent.prototype.Rewan = function (e) {
        this.PostMessage(e);
        console.log(e);
    };
    ManageProjectComponent.prototype.PostMessage = function (e) {
        var _this = this;
        this.massege = e;
        this.reciverId = this.calculateReceiverId();
        this.offerService.PotsMessage(this.massege, this.reciverId, this.projectId).subscribe(function () {
            console.log("message send successfully.");
            _this.GetMessages();
        }, function (error) {
            console.log("Error updating }: " + error);
        });
        ;
    };
    ManageProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-project',
            templateUrl: './manage-project.component.html',
            styleUrls: ['./manage-project.component.css']
        })
    ], ManageProjectComponent);
    return ManageProjectComponent;
}());
exports.ManageProjectComponent = ManageProjectComponent;

//# sourceMappingURL=manage-project.component.js.map

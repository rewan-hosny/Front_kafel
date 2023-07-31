"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CompleteProfile_module_1 = require("../modules/CompleteProfile.module");
var AddImge_module_1 = require("../modules/AddImge.module");
var CompleteProfileComponent = /** @class */ (function () {
    function CompleteProfileComponent(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.complete = new CompleteProfile_module_1.CompleteMyProfile();
        this.image = new AddImge_module_1.AddImage();
    }
    CompleteProfileComponent.prototype.CompleteMyProfile = function () {
        var _this = this;
        this.authService.CompleteProfile(this.complete).subscribe(function () {
            console.log("offer item  updated successfully.");
            _this.router.navigate(['/controlPanel']);
        }, function (error) {
            console.log(error);
            console.log("Error  }: " + error);
        });
    };
    CompleteProfileComponent.prototype.onImageSelected = function (event) {
        this.image.imageUrl = event.target.files[0];
        this.AddImage();
    };
    CompleteProfileComponent.prototype.AddImage = function () {
        this.authService.UpdateImage(this.image).subscribe(function () {
            console.log("Image  updated successfully.");
        }, function (error) {
            console.log(error);
            console.log("Error  }: " + error);
        });
    };
    CompleteProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-complete-profile',
            templateUrl: './complete-profile.component.html',
            styleUrls: ['./complete-profile.component.css']
        })
    ], CompleteProfileComponent);
    return CompleteProfileComponent;
}());
exports.CompleteProfileComponent = CompleteProfileComponent;

//# sourceMappingURL=complete-profile.component.js.map

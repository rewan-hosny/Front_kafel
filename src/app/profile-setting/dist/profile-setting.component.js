"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var person_module_1 = require("../modules/person/person.module");
var GetImage_module_1 = require("../modules/GetImage.module");
var ProfileSettingComponent = /** @class */ (function () {
    function ProfileSettingComponent(http, router, authService, jwtHelper) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.jwtHelper = jwtHelper;
        this.person = new person_module_1.Person();
        this.updatedPerson = new person_module_1.Person();
        this.getImage = new GetImage_module_1.GetImage();
    }
    ProfileSettingComponent.prototype.ngOnInit = function () {
        this.PersonData();
        this.GetImage();
    };
    ProfileSettingComponent.prototype.PersonData = function () {
        var _this = this;
        this.authService.GetUser().subscribe(function (result) {
            _this.person = result;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileSettingComponent.prototype.UpdatePerson = function () {
        var _this = this;
        this.authService.UpdateUser(this.updatedPerson).subscribe(function (response) {
            console.log("Image  updated successfully.");
            _this.PersonData();
            localStorage.setItem('Authorization', response.token);
            // Decode the JWT token to get user information
            var decodedToken = _this.jwtHelper.decodeToken(response.token);
            // Store user information in local storage
            localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
            console.log("Error  }: " + error);
        });
    };
    ProfileSettingComponent.prototype.GetImage = function () {
        var _this = this;
        this.authService.GetImage().subscribe(function (result) {
            _this.getImage = result;
            _this.imageSrc = "data:image/jpeg;base64," + _this.getImage.imageUrl;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileSettingComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-setting',
            templateUrl: './profile-setting.component.html',
            styleUrls: ['./profile-setting.component.css']
        })
    ], ProfileSettingComponent);
    return ProfileSettingComponent;
}());
exports.ProfileSettingComponent = ProfileSettingComponent;

//# sourceMappingURL=profile-setting.component.js.map

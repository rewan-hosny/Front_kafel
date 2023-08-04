"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthServicesService = /** @class */ (function () {
    function AuthServicesService(http, jwtHelper, localStorage, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.localStorage = localStorage;
        this.router = router;
        this.registerr = "Auth/register";
        this.loginn = "Auth/login";
        this.Complete = "Auth/complete-profile";
        this.Image = "Auth/Image";
        this.user = "Auth/User";
        this.UpdatePerson = "Auth/UpdateUser";
        this.getImage = "Auth/Image";
    }
    AuthServicesService.prototype.register = function (person) {
        return this.http.post(environment_1.environment.apiUrl + "/" + this.registerr, person).pipe(operators_1.catchError(this.handleError));
    };
    AuthServicesService.prototype.handleError = function (error) {
        if (error.status === 400) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log(error);
            return rxjs_1.throwError(function () { return ({
                error: error
            }); });
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            return rxjs_1.throwError(function () { return new Error(error.error); });
        }
        // Return an observable with a user-facing error message.
        return rxjs_1.throwError(function () { return new Error('Something bad happened; please try again later.', error.error.errors); });
    };
    AuthServicesService.prototype.login = function (login) {
        return this.http.post(environment_1.environment.apiUrl + "/" + this.loginn, login).pipe(operators_1.catchError(function (error) {
            return rxjs_1.throwError(error.error);
        }));
    };
    AuthServicesService.prototype.CompleteProfile = function (completeprofile) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(environment_1.environment.apiUrl + "/" + this.Complete, completeprofile, httpOptions);
    };
    AuthServicesService.prototype.UpdateImage = function (addImage) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token
            })
        };
        // Create form data
        var formData = new FormData();
        console.log(addImage.imageUrl);
        // Store form name as "file" with file data
        if (addImage.imageUrl)
            formData.append("image", addImage.imageUrl, addImage.imageUrl.name);
        return this.http.patch(environment_1.environment.apiUrl + "/" + this.Image, formData, httpOptions);
    };
    AuthServicesService.prototype.GetUser = function () {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.user, httpOptions);
    };
    AuthServicesService.prototype.UpdateUser = function (person) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token
            })
        };
        // Create form data
        return this.http.patch(environment_1.environment.apiUrl + "/" + this.UpdatePerson, person, httpOptions);
    };
    AuthServicesService.prototype.GetImage = function () {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.getImage, httpOptions);
    };
    AuthServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthServicesService);
    return AuthServicesService;
}());
exports.AuthServicesService = AuthServicesService;

//# sourceMappingURL=auth-services.service.js.map

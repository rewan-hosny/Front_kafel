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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, jwtHelper) {
        this.authService = authService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.errorMessage = '';
        this.title = '';
        this.newItem = new person_module_1.Person(); // Initialize the 'newItem' with a new instance of 'Person'
        this.registrationErrors = [];
        this.errorMessages = {}; // Initialize an empty object to store the error messages
    }
    // Rename the method to avoid conflicts with the service method
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.newItem).subscribe(function (response) {
            // Handle the successful response here
            console.log(response);
            // Store the JWT token in local storage (as a string)
            localStorage.setItem('Authorization', response.token);
            // Decode the JWT token to get user information
            var decodedToken = _this.jwtHelper.decodeToken(response.token);
            // Store user information in local storage
            localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            _this.registrationResponse = response;
            _this.registrationError = null; // Clear any previous error when successful
            // Redirect to the home page
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.registrationError = error;
            _this.title = error.error.error.title;
            _this.errorMessages = error.error.error.errors;
            console.log(error);
            console.log(error.error);
            console.log(error.error.error.title);
            console.log(error.error.error.errors);
            console.log(error.response);
            console.log(Object.keys(error));
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=register.component.js.map

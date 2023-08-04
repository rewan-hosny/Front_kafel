"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var login_module_1 = require("../modules/login.module");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(cdr, authService, sharedService, router, jwtHelper) {
        this.cdr = cdr;
        this.authService = authService;
        this.sharedService = sharedService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.isLoggedIn = false;
        this.newItem = new login_module_1.Login();
        this.errorMessages = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.newItem).subscribe(function (response) {
            // Handle the successful response here
            console.log(response);
            // Store the JWT token in local storage (as a string)
            localStorage.setItem('Authorization', response.token);
            // Decode the JWT token to get user information
            var decodedToken = _this.jwtHelper.decodeToken(response.token);
            // Store user information in local storage
            localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            _this.isLoggedIn = true;
            // Store isLoggedIn in local storage
            localStorage.setItem('isLoggedIn', "true");
            _this.sharedService.setLoggedInStatus(_this.isLoggedIn);
            // Redirect to the home page
            _this.cdr.detectChanges();
            _this.router.navigate(['/home']);
        }, function (error) {
            console.error('Login failed!', error);
            _this.errorMessages = error;
            console.log(error.error.errors); // Log the specific error messages, if available
            // Handle the error as needed
        });
    };
    LoginComponent.prototype.logout = function () {
        // Clear user information from local storage and navigate back to login page
        localStorage.removeItem('Authorization');
        localStorage.removeItem('name');
        localStorage.removeItem('userid');
        // Set isLoggedIn to false and remove it from local storage
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map

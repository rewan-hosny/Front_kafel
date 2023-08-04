"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(cdr, sharedService, authService, router, jwtHelper) {
        this.cdr = cdr;
        this.sharedService = sharedService;
        this.authService = authService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.title = 'Front_kafel';
        this.isLoggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.isLoggedIn$.subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
        });
        var isLoggedInString = localStorage.getItem("isLoggedIn");
        this.isLoggedIn = isLoggedInString ? JSON.parse(isLoggedInString) : false;
    };
    AppComponent.prototype.logout = function () {
        // Clear user information from local storage and navigate back to login page
        localStorage.removeItem('Authorization');
        localStorage.removeItem('name');
        localStorage.removeItem('userid');
        // Set isLoggedIn to false and remove it from local storage
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
        this.cdr.detectChanges();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map

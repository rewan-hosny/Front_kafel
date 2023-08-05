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
var OfferServicesService = /** @class */ (function () {
    function OfferServicesService(http, jwtHelper, localStorage, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.localStorage = localStorage;
        this.router = router;
        this.Offer = "Offer/Offers";
        this.GetCategory = "Offer/allCategory";
        this.Accept = "Offer/AcceptProject";
        this.PostMessage = "Message/Message";
        this.GetFreelance = "Project/GetFreelance";
        this.reciverId = 0;
        this.massege = '';
    }
    OfferServicesService.prototype.GetOffer = function (id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.Offer + "/" + id, httpOptions);
    };
    OfferServicesService.prototype.GetIfFreelance = function () {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.GetFreelance, httpOptions);
    };
    OfferServicesService.prototype.CreateOffer = function (Offer, id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(environment_1.environment.apiUrl + "/" + this.Offer + "/" + id, Offer, httpOptions);
    };
    OfferServicesService.prototype.GetAllCategories = function () {
        return this.http.get(environment_1.environment.apiUrl + "/" + this.GetCategory);
    };
    OfferServicesService.prototype.GetAcceptProject = function (id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.Accept + "/" + id, httpOptions);
    };
    OfferServicesService.prototype.GetMessages = function (id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(environment_1.environment.apiUrl + "/" + this.PostMessage + "/" + id, httpOptions);
    };
    OfferServicesService.prototype.AcceptProject = function (id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(environment_1.environment.apiUrl + "/" + this.Accept + "/" + id, {}, httpOptions);
    };
    OfferServicesService.prototype.PotsMessage = function (massege, reciverId, id) {
        var token = localStorage.getItem('Authorization');
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(environment_1.environment.apiUrl + "/" + this.PostMessage + "/" + id, { massege: massege, reciverId: reciverId }, httpOptions);
    };
    OfferServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OfferServicesService);
    return OfferServicesService;
}());
exports.OfferServicesService = OfferServicesService;

//# sourceMappingURL=offer-services.service.js.map

"use strict";
exports.__esModule = true;
var AcceptedOffer = /** @class */ (function () {
    function AcceptedOffer() {
        this.id = 0;
        this.offersId = 0;
        this.offers = new Offer();
    }
    return AcceptedOffer;
}());
exports.AcceptedOffer = AcceptedOffer;
var Offer = /** @class */ (function () {
    function Offer() {
        this.id = 0;
        this.description = '';
        this.price = '';
        this.freelanceId = 0;
        this.projectId = 0;
        this.project = new Project();
        this.freelance = new Freelance();
    }
    return Offer;
}());
exports.Offer = Offer;
var Freelance = /** @class */ (function () {
    function Freelance() {
        this.id = 0;
        this.skills = '';
        this.walit = null;
        this.portifolio = '';
        // Add the Person property with its corresponding type
        this.person = new Person();
    }
    return Freelance;
}());
exports.Freelance = Freelance;
var Person = /** @class */ (function () {
    function Person() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.imageUrl = '';
    }
    return Person;
}());
exports.Person = Person;
var Project = /** @class */ (function () {
    function Project() {
        this.id = 0;
        this.description = '';
        this.fromPrice = 0;
        this.toPrice = 0;
        this.dueDate = '';
        this.statues = 0;
        this.categoryId = 0;
        this.category = null;
        this.person = new Person();
    }
    return Project;
}());
exports.Project = Project;

//# sourceMappingURL=acceptedOffer.module.js.map

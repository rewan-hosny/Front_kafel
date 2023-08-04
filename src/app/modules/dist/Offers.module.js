"use strict";
exports.__esModule = true;
var Offer = /** @class */ (function () {
    function Offer() {
        this.id = 0;
        this.description = '';
        this.price = '';
        this.freelanceId = 0;
        this.projectId = 0;
        this.project = null;
        // Add the Freelance property with its corresponding type
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
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.imageUrl = '';
    }
    return Person;
}());
exports.Person = Person;

//# sourceMappingURL=Offers.module.js.map

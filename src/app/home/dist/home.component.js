"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var swiper_1 = require("swiper");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sections = [
            {
                title: 'Welcome To Kafiil',
                description: 'Get Your Business Done Online By The Best Professional Freelancers Easily And Safely For All Parties',
                image: '/assets/images/home.svg'
            },
            {
                title: 'Contests',
                description: 'Launch A Contest To Complete Your Creative Work, Compare The Best Works Of The Contestants And Choose The Winner To Receive Your Participations',
                image: '/assets/images/section2.svg'
            },
            {
                title: 'Projects',
                description: 'Take your business to the next level and hire the best freelancers to implement your projects',
                image: '/assets/images/section3.svg'
            },
        ];
        // services = [
        //     {
        //       title1: 'Post A Project',
        //     description1: 'add a project explaining what you want to do',
        //         title2: 'Compare Offers',
        //     description2: 'compare the offers and choose the most suitable one',
        //             title3: 'Receive',
        //     description3: 'receive the project on time and with the agreed quality',
        //     },
        //         {
        //       title1: 'explore services',
        //     description1: 'browse the services and compare them to choose the most suitable for you',
        //         title2: 'Order Service',
        //     description2: 'request the service and continue the implementation with the freelancer',
        //             title3: 'Receive',
        //     description3: 'receive your service with quality and on time',
        //   },
        //             {
        //        title1: 'Post A Contest',
        //     description1: 'add a new contest showing the work to be done',
        //         title2: 'Receive & Compare',
        //     description2: 'receive entries from contestants',
        //             title3: 'Choose The Winners',
        //     description3: 'compare received entries and choose the best',
        //     },
        //     // Add more sections as needed
        //   ];
        this.services = [
            [
                { title: 'explore services', description: 'browse the services and compare them to choose the most suitable for you', image: '/assets/images/search.svg' },
                { title: 'Order Service', description: 'request the service and continue the implementation with the freelancer', image: '/assets/images/choose.svg' },
                { title: 'Receive', description: 'receive your service with quality and on time', image: '/assets/images/recieve.svg' }
            ],
            [
                { title: 'Post A Project', description: 'add a project explaining what you want to do', image: '/assets/images/search.svg' },
                { title: 'Compare Offers', description: 'compare the offers and choose the most suitable one', image: '/assets/images/choose.svg' },
                { title: 'Receive', description: 'receive the project on time and with the agreed quality', image: '/assets/images/recieve.svg' }
            ],
            [
                { title: 'Post A Contest', description: 'add a new contest showing the work to be done', image: '/assets/images/search.svg' },
                { title: 'Receive & Compare', description: 'receive entries from contestants', image: '/assets/images/choose.svg' },
                { title: 'Choose The Winners', description: 'compare received entries and choose the best', image: '/assets/images/recieve.svg' }
            ]
        ];
        this.currentTab = 0; // Index of the currently active tab
        this.CurrentDep = 0;
        this.currentSectionIndex = 0; // Index of the currently displayed section
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Initialize the Swiper carousel
        new swiper_1["default"]('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    };
    HomeComponent.prototype.toggleSection = function (direction) {
        if (direction === 'next') {
            this.currentSectionIndex = (this.currentSectionIndex + 1) % this.sections.length;
        }
        else if (direction === 'prev') {
            this.currentSectionIndex = (this.currentSectionIndex - 1 + this.sections.length) % this.sections.length;
        }
    };
    HomeComponent.prototype.toggleTab = function (index) {
        this.currentTab = index;
    };
    HomeComponent.prototype.toggleDep = function (index) {
        this.CurrentDep = index;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map

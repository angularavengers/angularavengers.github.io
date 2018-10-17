(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-info text-center\">Our Mission </h1>\n<div class=\"text-center\">To enrich the knowledge & skill sets of young software engineers by providing value added training in the areas of Software Development & Testing.\n\nTo serve the industries by providing trained human resources in the above areas.\n\nTo provide quality Software Training & Consulting Services in the areas of Javascript, UI technology, ERP, Database Administration, Testing, Content Management with Live Projects.</div>\n\n<h2 class=\"text-center text-primary\">Benefits of Online Training over Classroom Based Training</h2>\n\n<ul>\n  <li>It offers <strong> Convenience of time and place</strong>, unlike classroom based - time bound training, you can take up the course anytime you wish and schedule it according to your convenience in a non-stressful environment.</li>\n  <li><strong>Saves Travel Time</strong> - You can take the course from home and save all travel hassles trying to visit a training center. At the same time, studying from home, you are being Environment friendly by conserving fuel and other resources</li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  font-family: Lato;\r\n}\r\n.responsive{\r\n  margin: 0 auto;\r\n}\r\n.card{\r\n  height: 100%;\r\n  margin: 4px\r\n}\r\n.nav-link{\r\n color: white !important;\r\n font-weight: bold\r\n}\r\n.nav-link:hover{\r\n  color:black !important;\r\n  font-weight: bold\r\n }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<nav  class=\"navbar navbar-expand-md navbar-light bg-faded bg-info navbar-dark\">\n    \n  <button class=\"navbar-toggler\"  type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"img-responsive rounded\"  style=\"width:220px;height:120px;margin-right: 0\"src=\"https://github.com/angularavengers/angularavengers.github.io/blob/master/logoFinal.png?raw=true\">\n    </a>\n \n    <div class=\"collapse navbar-collapse\"  id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\"  href=\"\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/trainings\">Trainings</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/meetspeaker\">Meet the speaker</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">About Angular Avengers</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/enroll\"><img src=\"https://github.com/angularavengers/angularavengers.github.io/blob/master/reg.png?raw=true\" class=\"w-50\"></a>\n          </li>     \n      </ul>\n    </div>  \n  </nav>\n  \n</div> \n\n<router-outlet></router-outlet>  \n\n<footer class=\"page-footer font-small blue\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a href=\"#home\"> angularavengers.tk</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.navbarCollapse = false;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: -10 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        //style({ backgroundColor: 'red', opacity: 1, transform: 'rotateX(180deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(50%)' }),
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in', 
                    //style({ backgroundColor: 'green', opacity: 1, transform: 'rotateY(180deg)' })
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-300px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(200px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(180deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(180deg)' })
                    ])))
                ]),
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainings/trainings.component */ "./src/app/trainings/trainings.component.ts");
/* harmony import */ var _meetspeaker_meetspeaker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meetspeaker/meetspeaker.component */ "./src/app/meetspeaker/meetspeaker.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routePath = [
    { path: 'trainings', component: _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_6__["TrainingsComponent"] },
    { path: "meetspeaker", component: _meetspeaker_meetspeaker_component__WEBPACK_IMPORTED_MODULE_7__["MeetspeakerComponent"] },
    { path: "enroll", component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'about', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"] },
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routePath)],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"], _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_6__["TrainingsComponent"], _meetspeaker_meetspeaker_component__WEBPACK_IMPORTED_MODULE_7__["MeetspeakerComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hello.component.ts":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hello',
            template: "",
            styles: ["h1 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"home\">\n    <div class=\"container-fluid bg-primary\">\n      <div class=\"text-white\">\n        <div class=\"row\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <img class=\"responsive w-100 h-100\" src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/logo1.jpeg?raw=true\" />\n          </div>\n  \n          <div class=\"col-md-12 col-sm-12 col-xs-12\" id=\"about\">\n            <h2 class=\"py-2 my-2 text-center\"><i>Angular avengers</i></h2>\n  \n            <blockquote class=\"blockquote text-center\">\n              <p>\"Heroes are made by the path they choose, not the powers they are graced with\"</p>\n            </blockquote>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n      <div class=\"container-fluid text-center m-2\" >\n        The quality and also usefulness connected with any kind of exercise program depends upon the actual Software\n        Trainers. We (Angular avengers) Trainers are professionals, that are experienced and have real-world connection\n        with the approval advancement. The actual interactive session carried out throughout the Course assists student for\n        you to clear the style and also find out more rapidly.\n      </div>\n    </div>  \n  \n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/meetspeaker/meetspeaker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/meetspeaker/meetspeaker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meetspeaker/meetspeaker.component.html":
/*!********************************************************!*\
  !*** ./src/app/meetspeaker/meetspeaker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1 class=\"text-info text-center\">WHO WE ARE</h1><hr>\n<div class=\"text-center container\">Angular avengers provides an interactive learning environment which is Student-centric and ensures in making them understand not only the basics of technology but also the best practices in their respective domain</div>\n</div>\n<!-- navbar -->\n<nav class=\"nav justify-content-center nav-pills flex-column flex-md-row\">\n  <a class=\"nav-link\" href=\"#sourabh\" [ngClass]=\"isActive_sourabh\" (click)=\"setActive('isActive_sourabh')\" data-toggle=\"tab\">Sourabh\n    Sahu</a>\n  <a class=\"nav-link\" [ngClass]=\"isActive_lokesh\" (click)=\"setActive('isActive_lokesh')\" href=\"#Lokesh\" data-toggle=\"tab\">Lokesh\n    Badgujar</a>\n  <a class=\"nav-link\" href=\"#Krishan\" [ngClass]=\"isActive_krishan\" (click)=\"setActive('isActive_krishan')\" data-toggle=\"tab\">Krishan\n    Kumar</a>\n  <a class=\"nav-link\" href=\"#abhina\" data-toggle=\"tab\" (click)=\"setActive('isActive_abhina')\" [ngClass]=\"isActive_abhina\">Abhina\n    Sahu</a>\n</nav>\n<div class=\"tab-content pt-3\">\n  <div class=\"tab-pane\" [ngClass]=\"isActive_sourabh\" id=\"sourabh\">\n    <h3> Sourabh Sahu</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4\"><img [@openClose1]=\"isActive_sourabh?true:false\" class=\"img-fluid w-75 h-75 rounded\"\n          src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/sourabh.jpg?raw=true\">\n      </div>\n      <div class=\"col-sm-4 col-md-4\">\n        <p>I have completed bachelors degree in Computer Engineering. I have industry experience of over 6 years and 4\n          months and have worked through various phases viz. analysis, design, development and implementation of full\n          life cycle of web based application. Retail, E-commerce, Market research and Entertainment are few of the\n          domains I have worked in. I am experienced in implementing single page application. I have also created\n          analytical dashboards using Charts library making data analysis and decision making easy. I have extensive\n          knowledge with HTML/HTML5, CSS/CSS3,NodeJs,Angular1.x, Angular2, Angular4,Angular6, ExpressJs, ReactJS,\n          MongoDB,GIT,Bitbucket, Karma Jasmine(Unit testing tool)</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tab-pane\" id=\"Lokesh\" [ngClass]=\"isActive_lokesh\">\n    <h3>Lokesh Badgujar</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4\"> <img [@openClose1]=\"isActive_lokesh?true:false\" class=\"img-fluid rounded w-75 h-75\" src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/lokesh.jpg?raw=true\" />\n      </div>\n      <div class=\"col-sm-4 col-md-4\">\n        <p>He is backbone of Angular avengers, haveing 6+ years of experience as Senior Software Engineer in following:\n\n          Angular Web App Development\n          NodeJS expert\n          MEAN Stack development\n          OO Javascript Programmer\n          UI Developer\n          Mobile App Development\n          HTML5 ,SCSS, CommonJS Expert</p>\n      </div>\n    </div>\n  </div>\n    <div class=\"tab-pane\" id=\"Krishan\" [ngClass]=\"isActive_krishan\">\n      <h3>Krishan Kumar</h3>\n      <div class=\"row\">\n        <div class=\"col-sm-4 col-md-4\">\n          <img [@openClose1]=\"isActive_krishan?true:false\" class=\"img-fluid rounded w-75 h-75\" src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/krishan.jpg?raw=true\">\n        </div>\n        <div class=\"col-sm-4 col-md-4\">\n          <p>He is haveing 3+ years of experience as Software Engineer in following: Angular Web App Development NodeJS\n            expert MEAN Stack development OO Javascript Programmer UI Developer Mobile App Development HTML5 ,SCSS,\n            CommonJS Expert</p>\n        </div>\n      </div>\n    </div>\n        <div class=\"tab-pane\" id=\"abhina\" [ngClass]=\"isActive_abhina\">\n          <h3> Abhina Sahu</h3>\n          <div class=\"row\">\n              <div class=\"col-sm-4 col-md-4\"><img [@openClose1]=\"isActive_abhina?true:false\" class=\"img-fluid rounded-0 w-75 h-75\" src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/abhina.jpg?raw=true\">\n         </div>\n        <div class=\"col-sm-4 col-md-4\"> <p>He belives in \"Great Leaders Engage The Battle Rather Than Run From It\".\n            he is haveing 4+ years of experience as Senior Software Engineer in following: Angular Web App Development\n            NodeJS expert MEAN Stack development OO Javascript Programmer UI Developer Mobile App Development HTML5\n            ,SCSS, CommonJS Expert</p>\n        </div>\n          </div>\n      </div>"

/***/ }),

/***/ "./src/app/meetspeaker/meetspeaker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/meetspeaker/meetspeaker.component.ts ***!
  \******************************************************/
/*! exports provided: MeetspeakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetspeakerComponent", function() { return MeetspeakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeetspeakerComponent = /** @class */ (function () {
    function MeetspeakerComponent() {
        this.name = 'AIM (Ambition in Mind)';
        this.regflag = true;
        this.isActive_sourabh = "";
        this.isActive_lokesh = "";
        this.isActive_krishan = "";
        this.isActive_abhina = "";
    }
    MeetspeakerComponent.prototype.ngOnInit = function () {
        // setInterval(()=>{
        //   //this.regflag=!this.regflag;
        //   },1000)
    };
    MeetspeakerComponent.prototype.setActive = function (target) {
        this.isActive_sourabh = "";
        this.isActive_lokesh = "";
        this.isActive_krishan = "";
        this.isActive_abhina = "";
        this[target] = "active";
    };
    MeetspeakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meetspeaker',
            template: __webpack_require__(/*! ./meetspeaker.component.html */ "./src/app/meetspeaker/meetspeaker.component.html"),
            styles: [__webpack_require__(/*! ./meetspeaker.component.css */ "./src/app/meetspeaker/meetspeaker.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: -10 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        //style({ backgroundColor: 'red', opacity: 1, transform: 'rotateX(180deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(50%)' }),
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'rotateY(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'rotateY(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-in', 
                    //style({ backgroundColor: 'green', opacity: 1, transform: 'rotateY(180deg)' })
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(-90deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(180deg)' }),
                    ])))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MeetspeakerComponent);
    return MeetspeakerComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //<div class=\"loader\" *ngIf=\"load\"></div> -->\n<div class=\"container-fluid bg-danger\" id=\"reg\">  \n    <h3> Registration form</h3>  \n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdrJxpm_ey1WLiYIH0WWGwITqGb2rbseG78ymUs-iOKBZ8IUg/viewform?embedded=true\" width=\"400\" height=\"600\" frameborder=\"1\" marginheight=\"0\" marginwidth=\"1\">Loading...</iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.load = true;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.load = false;
        }, 4000);
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/trainings/trainings.component.css":
/*!***************************************************!*\
  !*** ./src/app/trainings/trainings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trainings/trainings.component.html":
/*!****************************************************!*\
  !*** ./src/app/trainings/trainings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\"> \n      <img @openClose *ngIf=\"regflag\" src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/registraion.png?raw=true\" class=\"rounded \">\n  </div>\n</div>\n<h3 id=\"training\" class=\"text-center\">TECHNOLOGIES WE TRAIN....</h3>\n<div class=\"container m-5\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-6 col-xs-12\">\n      <div class=\"card\">\n        <img class= \"card-img-top img-fluid\"src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/download%20(1).png?raw=true\">\n        <h3 class=\"card-title\"> Node JS</h3>\n        <div class=\"card-block\">\n                  \n          <p class=\"text-justify p-4\"> Node JS a powerful tool for controlling web servers, building applications, and creating event-driven programming and it brings JavaScript, a language familiar to all web developers, into an environment independent of web browsers. Learn all about Node JS and start creating JavaScript applications in this course with me. I show how to install Node JS on Mac, Windows, and dives deep into its modules and Express framework for app development. Learn how to unit test your code, start sessions on web servers, stream data, and create simple command-line tools.\n  </p>\n      </div>\n      </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 col-lg-6 col-xs-12\">\n      <div class=\"card\">\n        <img class= \"card-img-top\"src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/HTML.png?raw=true\">\n        <h3 class=\"card-title\"> HTML/HTML5</h3>\n        <div class=\"card-block\">\n                  \n          <p class=\"text-justify p-4\">HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5.\n            Designed to be usable by all Open Web developers, this reference page links to numerous resources about HTML5 technologies, classified into several groups based on their function\n          </p>\n      </div>\n      </div>\n  \n      \n  </div>\n  <div class=\"col-sm-12 col-md-12 col-lg-6 col-xs-12\">\n      <div class=\"card\">\n        <img class= \"h-50 card-img-top\"src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/css3_new.png?raw=true\">\n        <h3 class=\"card-title\"> CSS/CSS3</h3>\n        <div class=\"card-block\">\n                  \n          <p class=\"text-justify p-4\">CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future. CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.</p>\n      </div>\n      </div>\n  \n      \n  </div>\n  <div class=\"col-sm-12 col-md-12 col-lg-6 col-xs-12\">\n      <div class=\"card\">\n        <img class= \"card-img-top\"src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/Angualr6.png?raw=true\">\n        <h3 class=\"card-title\"> Angular2/4/6 </h3>\n        <div class=\"card-block\">\n                  \n          <p class=\"text-justify p-4\">There are four major releases of Angular. The first version that was released is Angular1, which is also called AngularJS. Angular1 was followed by Angular2, which came in with a lot of changes when compared to Angular1.\n  \n  The structure of Angular is based on the components/services architecture. AngularJS was based on the model view controller. Angular 4 released in March 2017 proves to be a major breakthrough and is the latest release from the Angular team after Angular2.\n  \n  Angular 4 is almost the same as Angular 2. It has a backward compatibility with Angular 2. Projects developed in Angular 2 will work without any issues with Angular 4. </p>\n      </div>\n      </div>\n  \n      \n  </div>\n  <div class=\"col-sm-12 col-md-12 col-lg-6 col-xs-12\">\n      <div class=\"card\">\n        <img class= \"card-img-top\"src=\"https://github.com/sahu8921/myApplication/blob/master/testPro/Javascript.jpg?raw=true\">\n        <h3 class=\"card-title\"> Javascript</h3>\n        <div class=\"card-block\">\n                  \n          <p class=\"text-justify p-4\">the standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, ECMAScript 2015. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.\n  </p>\n      </div>\n      </div>\n  </div >\n      \n  </div>\n<!-- <app-mainbody></app-mainbody> -->"

/***/ }),

/***/ "./src/app/trainings/trainings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/trainings/trainings.component.ts ***!
  \**************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingsComponent = /** @class */ (function () {
    function TrainingsComponent() {
    }
    TrainingsComponent.prototype.ngOnInit = function () {
    };
    TrainingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainings',
            template: __webpack_require__(/*! ./trainings.component.html */ "./src/app/trainings/trainings.component.html"),
            styles: [__webpack_require__(/*! ./trainings.component.css */ "./src/app/trainings/trainings.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: -10 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        //style({ backgroundColor: 'red', opacity: 1, transform: 'rotateX(180deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(50%)' }),
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in', 
                    //style({ backgroundColor: 'green', opacity: 1, transform: 'rotateY(180deg)' })
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-300px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(200px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(180deg)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotateY(180deg)' })
                    ])))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingsComponent);
    return TrainingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sourabh.sahu\angularAvenger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
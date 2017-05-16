webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(246),
        styles: [__webpack_require__(229)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_articles_api_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_barrel__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages_barrel__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_barrel__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_barrel__["b" /* DashboardHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_barrel__["c" /* BlogHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_barrel__["d" /* BlogIndividualComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_components_barrel__["a" /* DashboardNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_components_barrel__["b" /* DashboardNotificationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["a" /* ArticleAddWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["b" /* ArticleEditWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["c" /* ArticlesManageWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["d" /* ProfileWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["e" /* ProfileEditWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["f" /* PasswordEditWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["g" /* ArticleDeleteWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__widgets_widget_barrel__["h" /* BlogNavbarWidgetComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_users_api_service__["a" /* UsersApiService */], __WEBPACK_IMPORTED_MODULE_7__services_articles_api_service__["a" /* ArticlesApiService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });




var APP_ROUTES = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__["a" /* HomeComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__["b" /* DashboardHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]], children: [
            { path: "article-add", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["a" /* ArticleAddWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "article-edit/:articleId", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["b" /* ArticleEditWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "article-delete/:articleId", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["g" /* ArticleDeleteWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "articles", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["c" /* ArticlesManageWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "password-edit", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["f" /* PasswordEditWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "profile", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["d" /* ProfileWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: "profile-edit", component: __WEBPACK_IMPORTED_MODULE_3__widgets_widget_barrel__["e" /* ProfileEditWidgetComponent */], outlet: "dashboardOut", canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
        ] },
    { path: "blog", component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__["c" /* BlogHomeComponent */] },
    { path: "blog/:username", component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__["c" /* BlogHomeComponent */] },
    { path: "blog/:username/article/:articleId", component: __WEBPACK_IMPORTED_MODULE_2__pages_pages_barrel__["d" /* BlogIndividualComponent */] },
];
var router = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_navbar_dashboard_navbar_component__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_navbar_dashboard_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_notification_bar_dashboard_notification_bar_component__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_notification_bar_dashboard_notification_bar_component__["a"]; });


//# sourceMappingURL=components-barrel.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardNavbarComponent = (function () {
    function DashboardNavbarComponent(usersApiService, router) {
        this.usersApiService = usersApiService;
        this.router = router;
        this.menuVisible = false;
        this.activeSubMenu = -1;
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersApiService.getLoggedInUser()
            .subscribe(function (res) {
            _this.loggedInUser = res;
        });
    };
    DashboardNavbarComponent.prototype.menuToggle = function () {
        if (screen.width > 1024) {
            return { "min-height": "calc(100vh - 50px)" };
        }
        var navbar = document.getElementsByClassName("navbar-output-container")[0];
        var height = 45 * (navbar.getElementsByClassName("navbar-top-level-menu")[0].children.length + 1) + "px";
        if (screen.width < 1024 && this.menuVisible == true) {
            return { "min-height": height, "max-height": "100vh" };
        }
    };
    DashboardNavbarComponent.prototype.setActiveSubMenu = function (menuIndex) {
        if (this.activeSubMenu == menuIndex) {
            this.activeSubMenu = -1;
        }
        else {
            this.activeSubMenu = menuIndex;
        }
    };
    DashboardNavbarComponent.prototype.subMenuToggle = function (index) {
        var subMenu = document.getElementsByClassName("navbar-second-level-menu")[index];
        var height = 45 * subMenu.children.length + "px";
        if (index == this.activeSubMenu) {
            return { "height": height };
        }
        else {
            return { "height": "0" };
        }
    };
    DashboardNavbarComponent.prototype.setOutput = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
    };
    return DashboardNavbarComponent;
}());
DashboardNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-navbar',
        template: __webpack_require__(247),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardNavbarComponent);

var _a, _b;
//# sourceMappingURL=dashboard-navbar.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNotificationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardNotificationBarComponent = (function () {
    function DashboardNotificationBarComponent(usersApiService, router) {
        this.usersApiService = usersApiService;
        this.router = router;
    }
    DashboardNotificationBarComponent.prototype.ngOnInit = function () {
    };
    DashboardNotificationBarComponent.prototype.logout = function () {
        this.usersApiService.logout();
        this.router.navigate(['/']);
    };
    return DashboardNotificationBarComponent;
}());
DashboardNotificationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-notification-bar',
        template: __webpack_require__(248),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardNotificationBarComponent);

var _a, _b;
//# sourceMappingURL=dashboard-notification-bar.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogHomeComponent = (function () {
    function BlogHomeComponent(articlesApiService, activatedRoute) {
        var _this = this;
        this.articlesApiService = articlesApiService;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params
            .map(function (params) { return params['username']; })
            .subscribe(function (username) {
            var userObject = { author: username };
            _this.articlesApiService.getArticlesByAuthor(userObject)
                .subscribe(function (res) {
                _this.articles = res;
            });
        });
    }
    BlogHomeComponent.prototype.ngOnInit = function () {
    };
    BlogHomeComponent.prototype.descriptionStyle = function (article) {
        if (!article.mainImageUrl) {
            return { "width": "100%" };
        }
        else if (article.mainImageUrl && screen.width < 768) {
            return { "width": "100%" };
        }
        else {
            return { "width": "55%" };
        }
    };
    return BlogHomeComponent;
}());
BlogHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-home',
        template: __webpack_require__(249),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], BlogHomeComponent);

var _a, _b;
//# sourceMappingURL=blog-home.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogIndividualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogIndividualComponent = (function () {
    function BlogIndividualComponent(activatedRoute, articlesApiService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.articlesApiService = articlesApiService;
        this.activatedRoute.params
            .map(function (params) { return params['articleId']; })
            .subscribe(function (articleId) {
            var articleObject = { articleId: articleId };
            _this.articlesApiService.getArticleById(articleObject)
                .subscribe(function (res) {
                _this.article = res;
            });
        });
    }
    BlogIndividualComponent.prototype.ngOnInit = function () {
    };
    return BlogIndividualComponent;
}());
BlogIndividualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-individual',
        template: __webpack_require__(250),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _b || Object])
], BlogIndividualComponent);

var _a, _b;
//# sourceMappingURL=blog-individual.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHomeComponent = (function () {
    function DashboardHomeComponent() {
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
    };
    return DashboardHomeComponent;
}());
DashboardHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-home',
        template: __webpack_require__(251),
        styles: [__webpack_require__(235), __webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], DashboardHomeComponent);

//# sourceMappingURL=dashboard-home.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(usersApiService, router, flashMessage) {
        this.usersApiService = usersApiService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Structural / style functions
    HomeComponent.prototype.toggleLogin = function () {
        var loginContainer = document.getElementsByClassName("login-container")[0];
        loginContainer.classList.toggle("login-visible");
    };
    HomeComponent.prototype.toggleRegister = function () {
        var registerContainer = document.getElementsByClassName("register-container")[0];
        registerContainer.classList.toggle("register-visible");
    };
    // Validation / Registration functions
    HomeComponent.prototype.login = function (userObject) {
        var _this = this;
        this.usersApiService.authenticate(userObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.usersApiService.storeToken(res);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure", timeout: 2000 });
            }
        });
    };
    HomeComponent.prototype.registerUser = function (userObject) {
        var _this = this;
        if (this.validate(userObject)) {
            this.usersApiService.registerUser(userObject)
                .subscribe(function (res) {
                _this.toggleRegister();
                _this.toggleLogin();
            });
        }
    };
    HomeComponent.prototype.validate = function (userObject) {
        if (this.validateInput("First Name", userObject.firstName) && this.validateInput("Last Name", userObject.lastName) && this.validateEmail(userObject.email) && this.validateInput("Username", userObject.username) && this.validatePassword(userObject.password)) {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.validateInput = function (userObjectItemName, userObjectItem) {
        if (userObjectItem.length >= 3) {
            return true;
        }
        else {
            this.flashMessage.show(userObjectItemName + " does not meet minimum length (3)", { cssClass: "flash-failure", timeout: 2000 });
        }
    };
    HomeComponent.prototype.validateEmail = function (userObjectEmail) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(userObjectEmail)) {
            return true;
        }
        else {
            this.flashMessage.show("Incorrect email format", { cssClass: "flash-failure", timeout: 2000 });
        }
    };
    HomeComponent.prototype.validatePassword = function (userObjectPassword) {
        if (userObjectPassword.length > 6) {
            return true;
        }
        else {
            this.flashMessage.show("Password must be longer than 6 characters", { cssClass: "flash-failure", timeout: 3000 });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(252),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleAddWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleAddWidgetComponent = (function () {
    function ArticleAddWidgetComponent(articlesApiService, router) {
        this.articlesApiService = articlesApiService;
        this.router = router;
        this.articleCategory = -1; // used for setting styling of categories buttons, as well as defining category id for submission on creating new articles
        this.getCategories();
    }
    ArticleAddWidgetComponent.prototype.ngOnInit = function () {
    };
    ArticleAddWidgetComponent.prototype.createArticle = function (articleObject) {
        var _this = this;
        if (this.articleCategory != -1) {
            articleObject.categories = [{ categoryId: this.articleCategory }];
        }
        this.articlesApiService.createArticle(articleObject)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': ['articles'] } }]);
        });
    };
    ArticleAddWidgetComponent.prototype.getCategories = function () {
        var _this = this;
        this.articlesApiService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
            console.log(_this.categories);
        });
    };
    ArticleAddWidgetComponent.prototype.setArticleCategory = function (index) {
        if (index == this.articleCategory) {
            this.articleCategory = -1;
        }
        else {
            this.articleCategory = index;
        }
    };
    ArticleAddWidgetComponent.prototype.setCategoryStyle = function (index) {
        if (index == this.articleCategory) {
            return { "background": "#20275E", "color": "#f5f5f5" };
        }
        else {
            return { "background": "#f5f5f5", "color": "#20275E" };
        }
    };
    return ArticleAddWidgetComponent;
}());
ArticleAddWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-add-widget',
        template: __webpack_require__(253),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ArticleAddWidgetComponent);

var _a, _b;
//# sourceMappingURL=article-add-widget.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDeleteWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleDeleteWidgetComponent = (function () {
    function ArticleDeleteWidgetComponent(activatedRoute, articlesApiService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.articlesApiService = articlesApiService;
        this.router = router;
        this.activatedRoute.params
            .map(function (params) { return params['articleId']; })
            .subscribe(function (articleId) {
            var articleObject = { articleId: articleId };
            _this.articlesApiService.getArticleById(articleObject)
                .subscribe(function (res) {
                _this.article = res;
            });
        });
    }
    ArticleDeleteWidgetComponent.prototype.ngOnInit = function () { };
    ArticleDeleteWidgetComponent.prototype.deleteArticle = function (articleObject) {
        var _this = this;
        this.articlesApiService.deleteArticle(articleObject)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': ['articles'] } }]);
        });
    };
    ArticleDeleteWidgetComponent.prototype.setOutput = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
    };
    return ArticleDeleteWidgetComponent;
}());
ArticleDeleteWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-delete-widget',
        template: __webpack_require__(254),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ArticleDeleteWidgetComponent);

var _a, _b, _c;
//# sourceMappingURL=article-delete-widget.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleEditWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleEditWidgetComponent = (function () {
    function ArticleEditWidgetComponent(activatedRoute, articlesApiService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.articlesApiService = articlesApiService;
        this.router = router;
        this.articleCategory = -1;
        this.activatedRoute.params
            .map(function (params) { return params['articleId']; })
            .subscribe(function (articleId) {
            var articleObject = { articleId: articleId };
            _this.articlesApiService.getArticleById(articleObject)
                .subscribe(function (res) {
                _this.article = res;
                if (res.categories[0]) {
                    _this.articleCategory = res.categories[0].categoryId;
                }
            });
        });
        this.getCategories();
    }
    ArticleEditWidgetComponent.prototype.ngOnInit = function () {
    };
    ArticleEditWidgetComponent.prototype.getCategories = function () {
        var _this = this;
        this.articlesApiService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
        });
    };
    ArticleEditWidgetComponent.prototype.setArticleCategory = function (index) {
        if (index == this.articleCategory) {
            this.articleCategory = -1;
        }
        else {
            this.articleCategory = index;
        }
    };
    ArticleEditWidgetComponent.prototype.setCategoryStyle = function (index) {
        if (index == this.articleCategory) {
            return { "background": "#20275E", "color": "#f5f5f5" };
        }
        else {
            return { "background": "#f5f5f5", "color": "#20275E" };
        }
    };
    ArticleEditWidgetComponent.prototype.setOutput = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
    };
    ArticleEditWidgetComponent.prototype.updateArticle = function (articleObject) {
        var _this = this;
        if (this.articleCategory == -1) {
            articleObject.categories = [];
        }
        else {
            articleObject.categories = [{ categoryId: this.articleCategory }];
        }
        this.articlesApiService.updateArticle(articleObject)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': ['articles'] } }]);
        });
    };
    return ArticleEditWidgetComponent;
}());
ArticleEditWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-edit-widget',
        template: __webpack_require__(255),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ArticleEditWidgetComponent);

var _a, _b, _c;
//# sourceMappingURL=article-edit-widget.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesManageWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesManageWidgetComponent = (function () {
    function ArticlesManageWidgetComponent(articlesApiService, router) {
        this.articlesApiService = articlesApiService;
        this.router = router;
    }
    ArticlesManageWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articlesApiService.getUserArticles()
            .subscribe(function (res) {
            _this.articles = res;
        });
    };
    ArticlesManageWidgetComponent.prototype.setEditArticle = function (articleId) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': ['article-edit', articleId] } }]);
    };
    ArticlesManageWidgetComponent.prototype.setDeleteArticle = function (articleId) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': ['article-delete', articleId] } }]);
    };
    return ArticlesManageWidgetComponent;
}());
ArticlesManageWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articles-manage-widget',
        template: __webpack_require__(256),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_api_service__["a" /* ArticlesApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ArticlesManageWidgetComponent);

var _a, _b;
//# sourceMappingURL=articles-manage-widget.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogNavbarWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogNavbarWidgetComponent = (function () {
    function BlogNavbarWidgetComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    BlogNavbarWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['username']; })
            .subscribe(function (username) {
            _this.user = username;
        });
    };
    return BlogNavbarWidgetComponent;
}());
BlogNavbarWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-navbar-widget',
        template: __webpack_require__(257),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], BlogNavbarWidgetComponent);

var _a;
//# sourceMappingURL=blog-navbar-widget.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEditWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordEditWidgetComponent = (function () {
    function PasswordEditWidgetComponent(router, flashMessage, usersApiService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.usersApiService = usersApiService;
    }
    PasswordEditWidgetComponent.prototype.ngOnInit = function () {
    };
    PasswordEditWidgetComponent.prototype.setOutput = function (component) {
        if (!component) {
            this.router.navigate([{ outlets: { 'primary': ['dashboard'], 'dashboardOut': null } }]);
        }
        else {
            this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
        }
    };
    PasswordEditWidgetComponent.prototype.updatePassword = function (userObject) {
        var _this = this;
        if (userObject.queryPassword == userObject.newPassword) {
            this.flashMessage.show("Current password and new Password cannot match", { cssClass: "flash-failure", timeout: 2000 });
        }
        else {
            this.usersApiService.updatePassword(userObject)
                .subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show(res.message, { cssClass: "flash-success", timeout: 2000 });
                }
                else {
                    _this.flashMessage.show(res.message, { cssClass: "flash-failure", timeout: 2000 });
                }
            });
        }
    };
    return PasswordEditWidgetComponent;
}());
PasswordEditWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password-edit-widget',
        template: __webpack_require__(258),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_api_service__["a" /* UsersApiService */]) === "function" && _c || Object])
], PasswordEditWidgetComponent);

var _a, _b, _c;
//# sourceMappingURL=password-edit-widget.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditWidgetComponent = (function () {
    function ProfileEditWidgetComponent(usersApiService, router, flashMessage) {
        this.usersApiService = usersApiService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileEditWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersApiService.getLoggedInUser()
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileEditWidgetComponent.prototype.setOutput = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
    };
    ProfileEditWidgetComponent.prototype.updateProfile = function (userObject) {
        var _this = this;
        this.usersApiService.updateProfile(userObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Profile update successful", { cssClass: "flash-success", timeout: 2000 });
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure", timeout: 2000 });
            }
        });
    };
    return ProfileEditWidgetComponent;
}());
ProfileEditWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-edit-widget',
        template: __webpack_require__(259),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileEditWidgetComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-edit-widget.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileWidgetComponent = (function () {
    function ProfileWidgetComponent(usersApiService, router) {
        this.usersApiService = usersApiService;
        this.router = router;
    }
    ProfileWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersApiService.getLoggedInUser()
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileWidgetComponent.prototype.setOutput = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOut': [component] } }]);
    };
    return ProfileWidgetComponent;
}());
ProfileWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-widget',
        template: __webpack_require__(260),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileWidgetComponent);

var _a, _b;
//# sourceMappingURL=profile-widget.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersApiService = (function () {
    function UsersApiService(http) {
        this.http = http;
    }
    UsersApiService.prototype.authenticate = function (userObject) {
        return this.http.post("users/authenticate", userObject)
            .map(function (res) { return res.json(); });
    };
    UsersApiService.prototype.getLoggedInUser = function () {
        this.loadToken();
        var userObject = this.user;
        return this.http.post("users/getById", userObject)
            .map(function (res) { return res.json(); });
    };
    UsersApiService.prototype.loadToken = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.authToken = localStorage.getItem('token');
    };
    UsersApiService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    UsersApiService.prototype.logout = function () {
        localStorage.clear();
        this.user = "";
        this.authToken = "";
    };
    UsersApiService.prototype.registerUser = function (userObject) {
        return this.http.post("users/register", userObject)
            .map(function (res) { return res.json(); });
    };
    UsersApiService.prototype.storeToken = function (userObject) {
        localStorage.setItem('token', userObject.token);
        localStorage.setItem('user', JSON.stringify(userObject.user));
        this.authToken = userObject.token;
        this.user = userObject.user;
    };
    UsersApiService.prototype.updateProfile = function (userObject) {
        this.loadToken();
        userObject.userId = this.user.userId;
        return this.http.post("users/update", userObject)
            .map(function (res) { return res.json(); });
    };
    UsersApiService.prototype.updatePassword = function (userObject) {
        this.loadToken();
        userObject.userId = this.user.userId;
        return this.http.post("users/updatePassword", userObject)
            .map(function (res) { return res.json(); });
    };
    return UsersApiService;
}());
UsersApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UsersApiService);

var _a;
//# sourceMappingURL=users-api.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .main-container {\n      position: fixed;\n      width: 300px; } }\n\n.logo-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #20275E;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.9em;\n  height: 50px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  text-align: center; }\n\n.logo {\n  color: #f5f5f5; }\n\n.navbar-toggle {\n  color: #f5f5f5;\n  font-size: 1.6em;\n  padding: 10px;\n  position: absolute;\n  left: 5px; }\n  @media (min-width: 1024px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-output-container {\n  background: #2E363F;\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s ease; }\n  @media (min-width: 1024px) {\n    .navbar-output-container {\n      min-height: calc(100vh - 50px); } }\n\n.navbar-intro {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #181d22;\n  color: #aaa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-style: italic;\n  height: 45px;\n  margin-left: 10px;\n  width: 100%; }\n\n.navbar-top-level-menu {\n  border-bottom: 1px solid #444f5c;\n  color: #aaa;\n  list-style: none;\n  width: 100%; }\n\n.top-level-item-content {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #181d22;\n  border-top: 1px solid #444f5c;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 45px;\n  padding-left: 20px;\n  position: relative;\n  width: 100%; }\n\n.top-level-item-content > .fa {\n  margin-right: 15px; }\n\n.top-level-item-content:hover {\n  background: #20275E; }\n\n.fa-caret-down {\n  position: absolute;\n  right: -10px;\n  padding: 10px; }\n\n.navbar-second-level-menu {\n  height: 0px;\n  list-style: none;\n  overflow: hidden;\n  transition: all 0.3s ease; }\n\n.second-level-item-content {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #181d22;\n  border-top: 1px solid #444f5c;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 45px;\n  padding-left: 20px;\n  position: relative;\n  width: 100%; }\n\n.second-level-item-content:hover {\n  background: #20275E; }\n\n.second-level-item-content > .fa {\n  margin-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .main-container {\n      padding-bottom: 50px; } }\n\n.notification-bar-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #2E363F;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .notification-bar-container {\n      position: fixed; } }\n\n.action-buttons-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin-left: auto;\n  margin-right: 10px; }\n  @media (min-width: 1024px) {\n    .action-buttons-container {\n      position: fixed; } }\n\n.fa-power-off,\n.fa-user {\n  color: #bbb;\n  cursor: pointer;\n  padding: 10px;\n  transition: color 0.3s ease;\n  text-decoration: none; }\n  @media (min-width: 1024px) {\n    .fa-power-off,\n    .fa-user {\n      position: fixed;\n      z-index: 9000; } }\n\n@media (min-width: 1024px) {\n  .fa-power-off {\n    right: 10px; } }\n\n@media (min-width: 1024px) {\n  .fa-user {\n    right: 50px; } }\n\n.fa-power-off:hover {\n  color: #cc0000; }\n\n.fa-user:hover {\n  color: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(\"/assets/blogular/images/dark-background.jpg\");\n  background-size: 100vw 100vh;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n  width: 100%; }\n\n.articles-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 10px;\n  width: 100%; }\n\n.article {\n  background: #f5f5f5;\n  border: 2px solid #ddd;\n  margin: 5px;\n  padding: 10px;\n  width: 100%; }\n  @media (min-width: 540px) {\n    .article {\n      width: calc(50% - 10px); } }\n  @media (min-width: 768px) {\n    .article {\n      width: calc(33% - 10px); } }\n  @media (min-width: 1200px) {\n    .article {\n      width: calc(25% - 10px); } }\n\n.article-title-container {\n  background: #f5f5f5;\n  padding-top: 12px; }\n\n.article-image-container {\n  width: 100%; }\n\n.article-image {\n  display: block;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(\"/assets/blogular/images/dark-background.jpg\");\n  background-size: 100vw 100vh;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n  padding-bottom: 40px;\n  width: 100%; }\n\n.article-container {\n  width: 100%;\n  margin: 0 auto;\n  max-width: 900px; }\n\n.article {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 20px;\n  position: relative;\n  width: 100%; }\n\n.article-title-container {\n  text-align: center;\n  width: 100%;\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 0;\n  top: -30px; }\n  @media (min-width: 1024px) {\n    .article-title-container {\n      text-align: left;\n      position: relative;\n      top: 0;\n      margin: 0; } }\n\n.article-title {\n  color: #f5f5f5;\n  display: inline-block;\n  font-size: 1.2em;\n  margin: 0 auto;\n  padding: 15px 0;\n  z-index: 100;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .article-title {\n      font-size: 1.6em;\n      width: auto; } }\n\n.article-image-container {\n  background: #f5f5f5;\n  padding: 10px;\n  width: 100%; }\n\n.article-image {\n  display: block;\n  width: 100%; }\n\n.article-description-container {\n  background: #f5f5f5;\n  padding: 10px;\n  width: 100%; }\n\n.article-description {\n  font-size: 1.4em;\n  line-height: 1.8; }\n\n:host /deep/ h1,\n:host /deep/ h2,\n:host /deep/ h3,\n:host /deep/ h4,\n:host /deep/ h5 {\n  margin: 5px 0 10px 0; }\n\n:host /deep/ p {\n  margin-bottom: 10px; }\n\n:host /deep/ ul {\n  list-style: circle;\n  margin: 10px 0; }\n\n:host /deep/ li {\n  margin-left: 25px; }\n\n:host /deep/ a {\n  color: #20275E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.navbar-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .navbar-container {\n      width: 300px; } }\n\n.output-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .output-container {\n      width: calc(100% - 300px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: linear-gradient(rgba(32, 39, 94, 0.65), rgba(32, 39, 94, 0.65)), url(\"/assets/blogular/images/landing-background.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  position: relative;\n  width: 100%; }\n\n.flash-message-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 30px;\n  z-index: 9000;\n  width: 100vw; }\n\n.content-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  padding: 10px;\n  text-align: center;\n  width: 100%; }\n\nh1 {\n  color: #f5f5f5;\n  font-weight: 900;\n  margin-bottom: 20px;\n  text-shadow: 2px 2px black; }\n\nh2 {\n  color: #f5f5f5;\n  margin-bottom: 20px;\n  text-shadow: 2px 2px black; }\n\n.action-button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 20px; }\n\n.register-button,\n.login-button {\n  background: #20275E;\n  border: none;\n  border-bottom: 4px solid #131738;\n  border-radius: 5px;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin: 10px auto;\n  padding: 15px 20px;\n  text-shadow: 2px 2px black;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  width: 70%; }\n\n.register-button:hover,\n.login-button:hover {\n  background: #951924;\n  border-bottom: 4px solid #691219; }\n\n.login-container,\n.register-container {\n  background: #20275E;\n  min-height: 100vh;\n  position: absolute;\n  top: -150%;\n  transition: top 0.5s ease;\n  width: 100%;\n  z-index: 100; }\n\n.login-visible,\n.register-visible {\n  top: 0; }\n\n.login-form,\n.register-form {\n  margin: 10px auto 0;\n  max-width: 100%;\n  padding: 5px 20px;\n  width: 320px; }\n\n.form-header {\n  color: #f5f5f5;\n  font-size: 2em;\n  margin-top: 30px;\n  text-align: center; }\n\n.form-toggle {\n  color: #f5f5f5;\n  left: 10px;\n  position: relative;\n  top: 5px; }\n\n.form-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.form-input {\n  background: none;\n  border: none;\n  border-bottom: 3px solid #f5f5f5;\n  color: #f5f5f5;\n  font-size: 1.4em;\n  margin: 10px 0;\n  padding: 5px 5px 8px 0;\n  width: 100%; }\n\n.form-input::-webkit-input-placeholder {\n  color: #f5f5f5; }\n\n.form-input:-ms-input-placeholder {\n  color: #f5f5f5; }\n\n.form-input::placeholder {\n  color: #f5f5f5; }\n\n.action-button {\n  background: #f5f5f5;\n  border: none;\n  color: #20275E;\n  font-size: 1.4em;\n  font-weight: 900;\n  margin: 15px 0 10px;\n  padding: 15px;\n  width: 100%; }\n\n@media (min-width: 540px) {\n  .login-form,\n  .register-form {\n    width: 460px; } }\n\n@media (min-width: 768px) {\n  h1 {\n    color: #f5f5f5;\n    font-size: 2.6em;\n    font-weight: 900;\n    margin-bottom: 20px;\n    text-shadow: 2px 2px black; }\n  h2 {\n    color: #f5f5f5;\n    font-size: 1.6em;\n    margin-bottom: 20px;\n    text-shadow: 2px 2px black; }\n  .action-button-container {\n    margin-top: 40px; }\n  .register-button,\n  .login-button {\n    font-size: 1.3em;\n    width: 90%; } }\n\n@media (min-width: 1024px) {\n  h1 {\n    font-size: 4em; }\n  h2 {\n    font-size: 2em; }\n  .main-container {\n    background: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .content-container {\n    background: linear-gradient(rgba(32, 39, 94, 0.9), rgba(32, 39, 94, 0.9)), url(\"/assets/blogular/images/writing-background.jpg\");\n    width: 50%; }\n  .action-button-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%; }\n  .register-button,\n  .login-button {\n    font-size: 1.6em;\n    margin: 0 20px;\n    padding: 15px 30px;\n    width: auto; }\n  .output-container {\n    background: url(\"/assets/blogular/images/landing-background.jpg\");\n    background-size: cover;\n    background-position: center;\n    min-height: 100vh;\n    width: 50%; }\n  .login-container,\n  .register-container {\n    left: -100%;\n    opacity: 0;\n    top: 0;\n    visibility: 0;\n    transition: opacity 0.5s ease, visibility 0.5s ease;\n    width: 50%; }\n  .login-visible,\n  .register-visible {\n    left: 0;\n    opacity: 1;\n    visibility: 1; }\n  .form-header {\n    font-size: 2.5em; }\n  .button-group {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .action-button {\n    margin-top: 20px;\n    width: 48%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.article-add-header {\n  color: #2E363F;\n  margin: 15px 0 10px 0; }\n\n.article-add-form {\n  width: 100%; }\n\n.form-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.article-add-input {\n  border: none;\n  border-bottom: 3px solid #2E363F;\n  font-size: 1.3em;\n  margin: 10px 0;\n  padding: 5px 5px 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .article-add-input {\n      width: 400px; } }\n\n.article-add-area {\n  border: none;\n  border-bottom: 3px solid #2E363F;\n  font-size: 1.3em;\n  height: 38px;\n  margin: 10px 0;\n  max-height: 1200px;\n  resize: vertical;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .article-add-area {\n      height: 135px;\n      width: 800px; } }\n\n.article-image-preview {\n  margin: 15px 0;\n  max-height: 180px;\n  max-width: 320px; }\n\n.article-image {\n  width: 100%; }\n\n.categories-header {\n  margin: 5px 0; }\n\n.category-button {\n  background: white;\n  border: 3px solid #20275E;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1em;\n  margin: 5px;\n  padding: 10px;\n  transition: all 0.3s ease; }\n\n.category-button:first-of-type {\n  margin-left: 0; }\n\n.category-button:hover,\n.category-selected {\n  background: #20275E;\n  color: #f5f5f5;\n  font-weight: bold; }\n\n.form-button {\n  background: #2E363F;\n  border: none;\n  color: #f5f5f5;\n  font-size: 1.3em;\n  margin-top: 18px;\n  padding: 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .form-button {\n      margin-top: 10px;\n      margin-right: 15px;\n      padding: 10px 35px;\n      width: auto; } }\n\n.form-submit {\n  background: #20275E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.article-delete-header {\n  color: #2E363F;\n  margin: 15px 0 20px 0; }\n\n.confirmation-container {\n  width: 100%; }\n\np {\n  font-size: 1.4em;\n  margin-bottom: 15px; }\n\n.confirmation-action-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.confirmation-button {\n  background: #2E363F;\n  border: none;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 1.3em;\n  margin-top: 18px;\n  padding: 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .confirmation-button {\n      margin-top: 10px;\n      margin-right: 15px;\n      padding: 10px 35px;\n      width: auto; } }\n\n.delete-button {\n  background: #990000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.article-edit-header {\n  color: #2E363F;\n  margin: 15px 0 10px 0; }\n\n.article-edit-form {\n  width: 100%; }\n\n.form-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.article-edit-input {\n  border: none;\n  border-bottom: 3px solid #2E363F;\n  font-size: 1.3em;\n  margin: 10px 0;\n  padding: 5px 5px 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .article-edit-input {\n      width: 400px; } }\n\n.article-edit-area {\n  border: none;\n  border-bottom: 3px solid #2E363F;\n  font-size: 1.3em;\n  height: 38px;\n  margin: 10px 0;\n  max-height: 1200px;\n  resize: vertical;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .article-edit-area {\n      height: 135px;\n      width: 800px; } }\n\n.article-image-preview {\n  margin: 15px 0;\n  max-height: 180px;\n  max-width: 320px; }\n\n.article-image {\n  width: 100%; }\n\n.form-button {\n  background: #2E363F;\n  border: none;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 1.3em;\n  margin-top: 18px;\n  padding: 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .form-button {\n      margin-top: 10px;\n      margin-right: 15px;\n      padding: 10px 35px;\n      width: auto; } }\n\n.category-button {\n  background: white;\n  border: 3px solid #20275E;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1em;\n  margin: 5px;\n  padding: 10px;\n  transition: all 0.3s ease; }\n\n.category-button:first-of-type {\n  margin-left: 0; }\n\n.category-button:hover,\n.category-selected {\n  background: #20275E;\n  color: #f5f5f5;\n  font-weight: bold; }\n\n.form-submit {\n  background: #20275E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.articles-manage-header {\n  color: #2E363F;\n  margin: 15px 0 20px 0; }\n\n.articles-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.article {\n  background: #e1e1e1;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  width: 100%; }\n  @media (min-width: 640px) {\n    .article {\n      margin: 0 5px 15px 5px;\n      width: calc(50% - 10px); } }\n  @media (min-width: 1024px) {\n    .article {\n      margin: 0 5px 25px 5px;\n      width: calc(33% - 10px); } }\n  @media (min-width: 1200px) {\n    .article {\n      margin: 0 5px 35px 5px;\n      width: calc(25% - 10px); } }\n\n.article-image {\n  width: 100%; }\n\n.article-title {\n  color: #2E363F;\n  font-size: 1.4em;\n  margin: 5px 0 5px 5px;\n  padding: 0 5px; }\n\n.article-title:hover {\n  text-decoration: underline; }\n\n.actions-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.fa-pencil,\n.fa-trash-o {\n  color: #2E363F;\n  cursor: pointer;\n  font-size: 1.4em;\n  padding: 10px 15px;\n  transition: color 0.3s ease; }\n\n.fa-pencil:hover {\n  color: #20275E; }\n\n.fa-trash-o:hover {\n  color: #cc0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n\n.navbar-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #f5f5f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0 auto;\n  padding: 0 15px;\n  max-width: 1200px;\n  width: 100%; }\n\n.left-actions-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.left-actions-container:hover {\n  background: #f5f5f5;\n  cursor: pointer;\n  color: #333;\n  transition: all 0.3s ease; }\n\n.fa-home {\n  font-size: 1.3em;\n  padding: 10px 0px 10px 20px;\n  margin-top: 3px !important; }\n\n.blog-home {\n  display: none; }\n  @media (min-width: 768px) {\n    .blog-home {\n      display: inline;\n      font-size: 1.3em;\n      font-weight: bold;\n      padding: 10px 20px 10px 10px;\n      text-transform: uppercase; } }\n\n.right-actions-container {\n  cursor: pointer;\n  padding: 10px 0px; }\n\n.right-actions-container:hover {\n  background: #f5f5f5;\n  color: #333;\n  transition: all 0.3s ease; }\n\n.blog-login {\n  font-size: 1.3em;\n  font-weight: bold;\n  padding: 10px 20px;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.password-container {\n  margin-top: 20px; }\n\n.password-header {\n  color: #2E363F;\n  margin-right: 20px;\n  margin-bottom: 20px; }\n\n.password-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.password-label {\n  background: #2E363F;\n  color: #f5f5f5;\n  font-size: 1.3em;\n  font-weight: 700;\n  padding: 10px 15px;\n  text-align: left;\n  width: 100%; }\n  @media (min-width: 480px) {\n    .password-label {\n      text-align: right;\n      width: 240px; } }\n\n.password-input {\n  border: none;\n  border-bottom: none;\n  font-size: 1.3em;\n  height: 45px;\n  margin-left: 15px;\n  padding: 10px 0; }\n  @media (min-width: 480px) {\n    .password-input {\n      border-bottom: 3px solid #2E363F; } }\n\n.password-button {\n  background: #2E363F;\n  border: none;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 1.3em;\n  margin-top: 18px;\n  padding: 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .password-button {\n      margin-top: 20px;\n      margin-right: 15px;\n      padding: 10px 35px;\n      width: auto; } }\n\n.password-submit {\n  background: #20275E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.profile-container {\n  margin-top: 20px; }\n\n.profile-header {\n  color: #2E363F;\n  margin-right: 20px;\n  margin-bottom: 20px; }\n\n.profile-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.profile-label {\n  background: #2E363F;\n  color: #f5f5f5;\n  font-size: 1.3em;\n  font-weight: 700;\n  padding: 10px 15px;\n  text-align: left;\n  width: 100%; }\n  @media (min-width: 480px) {\n    .profile-label {\n      text-align: right;\n      width: 160px; } }\n\n.profile-input {\n  border: none;\n  border-bottom: none;\n  font-size: 1.3em;\n  height: 45px;\n  margin-left: 15px;\n  padding: 10px 0; }\n  @media (min-width: 480px) {\n    .profile-input {\n      border-bottom: 3px solid #2E363F; } }\n\n.profile-button {\n  background: #2E363F;\n  border: none;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 1.3em;\n  margin-top: 18px;\n  padding: 10px 0;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .profile-button {\n      margin-top: 20px;\n      margin-right: 15px;\n      padding: 10px 35px;\n      width: auto; } }\n\n.profile-submit {\n  background: #20275E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px;\n  width: 100%; }\n\n.profile-container {\n  margin-top: 20px; }\n\n.profile-header {\n  color: #2E363F;\n  margin-right: 20px;\n  margin-bottom: 20px; }\n\n.fa-pencil {\n  color: #2E363F;\n  cursor: pointer;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  text-decoration: none;\n  transition: color 0.3s ease; }\n\n.fa-pencil:hover {\n  color: #20275E; }\n\n.profile-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.profile-label {\n  background: #2E363F;\n  color: #f5f5f5;\n  font-size: 1.3em;\n  font-weight: 700;\n  padding: 10px 15px;\n  text-align: left;\n  width: 100%; }\n  @media (min-width: 480px) {\n    .profile-label {\n      text-align: right;\n      width: 160px; } }\n\n.profile-output {\n  font-size: 1.3em;\n  padding: 10px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"logo-container\">\n    <h2 class=\"logo\">Blogular</h2>\n    <a class=\"fa fa-bars navbar-toggle\" (click)=\"menuVisible = !menuVisible\"></a>\n  </div>\n  <div class=\"navbar-output-container\" (window:resize)=\"menuToggle()\" [ngStyle]=\"menuToggle()\">\n    <h3 class=\"navbar-intro\">Navigation</h3>\n    <ul class=\"navbar-top-level-menu\">\n      <li class=\"navbar-top-level-item\" >\n        <div class=\"top-level-item-content\" *ngIf=\"loggedInUser\" [routerLink]=\"['/blog', loggedInUser.username]\">\n          <a class=\"fa fa-link\"></a>\n          <p class=\"top-level-item-header\">Visit Blog</p>\n        </div>\n      </li>\n      <li class=\"navbar-top-level-item\" >\n        <div class=\"top-level-item-content\" [routerLink]=\"['/dashboard']\">\n          <a class=\"fa fa-home\"></a>\n          <p class=\"top-level-item-header\">Home</p>\n        </div>\n      </li>\n      <li class=\"navbar-top-level-item\" >\n        <div class=\"top-level-item-content\" (click)=\"setActiveSubMenu(0)\">\n          <a class=\"fa fa-user\"></a>\n          <p class=\"top-level-item-header\">Profile</p>\n          <a class=\"fa fa-caret-down\"></a>\n        </div>\n        <ul class=\"navbar-second-level-menu\" [ngStyle]=\"subMenuToggle(0)\">\n          <li class=\"navbar-second-level-item\">\n            <div class=\"second-level-item-content\" (click)=\"setOutput('profile')\">\n              <a class=\"fa fa-search\"></a>\n              <p class=\"second-level-item-header\">View Profile</p>\n            </div>\n          </li>\n          <li class=\"navbar-second-level-item\">\n            <div class=\"second-level-item-content\" (click)=\"setOutput('profile-edit')\">\n              <a class=\"fa fa-cog\"></a>\n              <p class=\"second-level-item-header\">Edit Profile</p>\n            </div>\n          </li>\n          <li class=\"navbar-second-level-item\">\n            <div class=\"second-level-item-content\" (click)=\"setOutput('password-edit')\">\n              <a class=\"fa fa-key\"></a>\n              <p class=\"second-level-item-header\">Change Password</p>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"navbar-top-level-item\">\n        <div class=\"top-level-item-content\" (click)=\"setActiveSubMenu(1)\">\n          <a class=\"fa fa-pencil\"></a>\n          <p class=\"top-level-item-header\">Posts</p>\n          <a class=\"fa fa-caret-down\"></a>\n        </div>\n        <ul class=\"navbar-second-level-menu\" [ngStyle]=\"subMenuToggle(1)\">\n          <li class=\"navbar-second-level-item\">\n            <div class=\"second-level-item-content\" (click)=\"setOutput('articles')\">\n              <a class=\"fa fa-cogs\"></a>\n              <p class=\"second-level-item-header\">Manage</p>\n            </div>\n          </li>\n          <li class=\"navbar-second-level-item\">\n            <div class=\"second-level-item-content\" (click)=\"setOutput('article-add')\">\n              <a class=\"fa fa-plus\"></a>\n              <p class=\"second-level-item-header\">Add</p>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"notification-bar-container\">\n    <div class=\"flashmessages-container\">\n      <flash-messages></flash-messages>\n    </div>\n    <div class=\"action-buttons-container\">\n      <a class=\"fa fa-user\" [routerLink]=\"['/dashboard/profile']\"></a>\n      <a class=\"fa fa-power-off\" (click)=\"logout()\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-blog-navbar-widget></app-blog-navbar-widget>\n  <div class=\"articles-container\" *ngIf=\"articles\">\n    <div class=\"article\" *ngFor=\"let article of articles\">\n      <div class=\"article-image-container\" *ngIf=\"article.mainImageUrl\">\n        <img class=\"article-image\" src=\"{{article.mainImageUrl}}\">\n      </div>\n      <div class=\"article-title-container\">\n        <h2 class=\"article-title\" [routerLink]=\"['article', article.articleId]\">{{article.title}}</h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-blog-navbar-widget></app-blog-navbar-widget>\n  <div class=\"article-container\" *ngIf=\"article\">\n    <div class=\"article\">\n      <div class=\"article-title-container\">\n        <h2 class=\"article-title\">{{article.title}}</h2>\n      </div>\n      <div class=\"article-image-container\" *ngIf=\"article.mainImageUrl\">\n        <img class=\"article-image\" src=\"{{article.mainImageUrl}}\">\n      </div>\n      <div class=\"article-description-container\" [innerHtml]=\"article.description\">\n        <!-- <p class=\"article-description\">{{article.description}}</p> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"navbar-container\">\n    <app-dashboard-navbar></app-dashboard-navbar>\n  </div>\n  <div class=\"output-container\">\n    <app-dashboard-notification-bar></app-dashboard-notification-bar>\n    <router-outlet name=\"dashboardOut\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"flash-message-container\">\n    <flash-messages></flash-messages>\n  </div>\n  <div class=\"content-container\">\n    <div class=\"intro-container\">\n      <h1>Blogular</h1>\n      <h2>The moden day blogging platform</h2>\n    </div>\n    <div class=\"action-button-container\">\n      <button class=\"register-button\" (click)=\"toggleRegister()\">Register</button>\n      <button class=\"login-button\" (click)=\"toggleLogin()\">Login</button>\n    </div>\n  </div>\n  <div class=\"output-container\">\n  </div>\n  <div class=\"login-container\">\n    <a class=\"fa fa-times fa-2x form-toggle\" (click)=\"toggleLogin()\"></a>\n    <h3 class=\"form-header\">Login</h3>\n    <form class=\"login-form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-input\" placeholder=\"Email\" name=\"loginEmail\" #loginEmail>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-input\" placeholder=\"Password\" name=\"loginPassword\" #loginPassword>\n      </div>\n      <div class=\"form-group button-group\">\n        <button class=\"action-button\" (click)=\"login({email: loginEmail.value, password: loginPassword.value})\">Login</button>\n        <button class=\"action-button\" (click)=\"toggleLogin()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"register-container\">\n    <a class=\"fa fa-times fa-2x form-toggle\" (click)=\"toggleRegister()\"></a>\n    <h3 class=\"form-header\">Register</h3>\n    <form class=\"register-form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-input name-input\" placeholder=\"First Name\" name=\"firstName\" #firstName keyup=\"0\">\n        <input type=\"text\" class=\"form-input name-input\" placeholder=\"Last Name\" name=\"lastName\" #lastName keyup=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-input\" placeholder=\"Email\" name=\"email\" #email keyup=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-input\" placeholder=\"Username\" name=\"username\" #username keyup=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-input\" placeholder=\"Password\" name=\"password\" #password keyup=\"0\">\n      </div>\n      <div class=\"form-group button-group\">\n        <button class=\"action-button\" (click)=\"registerUser({firstName: firstName.value, lastName: lastName.value, username: username.value, email: email.value, password: password.value})\">Register</button>\n        <button class=\"action-button\" (click)=\"toggleRegister()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h2 class=\"article-add-header\">Add Article</h2>\n  <form class=\"article-add-form\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"article-add-input\" placeholder=\"Article Title\" name=\"title\" #title>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"article-add-input\" placeholder=\"Article Image URL (1280 x 720)\" name=\"image\" ngModel #image>\n    </div>\n    <div class=\"article-image-preview\" *ngIf=\"image.value.length > 1\">\n      <img class=\"article-image\" [src]=\"image.value\">\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"article-add-area\" placeholder=\"Article Body\" name=\"body\" value=\"image.value\" #body></textarea>\n    </div>\n    <h3 class=\"categories-header\">Categories</h3>\n    <div class=\"form-group\" *ngIf=\"categories\">\n      <div class=\"category-button-container\" *ngFor=\"let category of categories; let i = index\">\n        <button class=\"category-button\" (click)=\"setArticleCategory(category.categoryId)\" [ngStyle]=\"setCategoryStyle(category.categoryId)\">{{category.name}}</button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"form-button\" [routerLink]=\"['/dashboard/']\">Cancel</button>\n      <button class=\"form-button form-submit\" (click)=\"createArticle({title: title.value, description: body.value, mainImageUrl: image.value})\">Save</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h2 class=\"article-delete-header\">Manage Articles > Delete Article</h2>\n  <div class=\"confirmation-container\" *ngIf=\"article\">\n    <p>Are you sure you want to delete {{article.title}}?</p>\n    <div class=\"confirmation-action-container\">\n      <button class=\"confirmation-button\" (click)=\"setOutput('articles')\">Cancel</button>\n      <button class=\"confirmation-button delete-button\" (click)=\"deleteArticle({articleId: article.articleId})\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h2 class=\"article-edit-header\">Add Article</h2>\n  <form class=\"article-edit-form\" *ngIf=\"article\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"article-edit-input\" placeholder=\"Article Title\" name=\"title\" value=\"{{article.title}}\" #title keyup=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"article-edit-input\" placeholder=\"Article Image URL (1280 x 720)\" name=\"image\" ngModel=\"{{article.mainImageUrl}}\" #image keyup=\"0\">\n    </div>\n    <div class=\"article-image-preview\" *ngIf=\"image.value.length > 1\">\n      <img class=\"article-image\" [src]=\"image.value\">\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"article-edit-area\" placeholder=\"Article Body\" name=\"body\" value=\"{{article.description}}\" #body keyup=\"0\"></textarea>\n    </div>\n    <div class=\"form-group\" *ngIf=\"categories\">\n      <div class=\"category-button-container\" *ngFor=\"let category of categories; let i = index\">\n        <button class=\"category-button\" (click)=\"setArticleCategory(category.categoryId)\" [ngStyle]=\"setCategoryStyle(category.categoryId)\">{{category.name}}</button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"form-button\" (click)=\"setOutput('articles')\">Cancel</button>\n      <button class=\"form-button form-submit\" (click)=\"updateArticle({articleId: article.articleId, title: title.value, mainImageUrl: image.value, description: body.value})\">Update</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h2 class=\"articles-manage-header\">Manage Articles</h2>\n  <div class=\"articles-container\" *ngIf=\"articles\">\n    <div class=\"article\" *ngFor=\"let article of articles\">\n      <img class=\"article-image\" src=\"{{article.mainImageUrl}}\">\n      <h3 class=\"article-title\">{{article.title}}</h3>\n      <div class=\"actions-container\">\n        <a class=\"fa fa-pencil\" (click)=\"setEditArticle(article.articleId)\"></a>\n        <a class=\"fa fa-trash-o\" (click)=\"setDeleteArticle(article.articleId)\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"navbar-container\">\n    <div class=\"left-actions-container\">\n      <i class=\"fa fa-home\"></i>\n      <span class=\"blog-home\" [routerLink]=\"['/blog', user]\">Home</span>\n    </div>\n    <div class=\"right-actions-container\">\n      <span class=\"blog-login\" [routerLink]=\"['/dashboard']\">Login</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"password-container\">\n    <div class=\"password-row\">\n      <h2 class=\"password-header\">Profile > Edit Password</h2>\n    </div>\n    <div class=\"password-row\">\n      <p class=\"password-label\">Current Password:</p>\n      <input type=\"password\" class=\"password-input\" placeholder=\"Current Password\" name=\"currentPassword\" #currentPassword>\n    </div>\n    <div class=\"password-row\">\n      <p class=\"password-label\">New Password:</p>\n      <input type=\"password\" class=\"password-input\" placeholder=\"New Password\" name=\"newPassword\" #newPassword>\n    </div>\n    <div class=\"password-row\">\n      <button class=\"password-button\" (click)=\"setOutput()\">Cancel</button>\n      <button class=\"password-button password-submit\" (click)=\"updatePassword({currentPassword: currentPassword.value, newPassword: newPassword.value})\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"profile-container\" *ngIf=\"user\">\n    <div class=\"profile-row\">\n      <h2 class=\"profile-header\">Profile > Edit</h2>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">First Name:</p>\n      <input type=\"text\" class=\"profile-input\" placeholder=\"First Name\" name=\"firstName\" value=\"{{user.firstName}}\" #firstName>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Last Name:</p>\n      <input type=\"text\" class=\"profile-input\" placeholder=\"Last Name\" name=\"lastName\" value=\"{{user.lastName}}\" #lastName>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Username:</p>\n      <input type=\"text\" class=\"profile-input\" placeholder=\"Username\" name=\"username\" value=\"{{user.username}}\" #username>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Email:</p>\n      <input type=\"text\" class=\"profile-input\" placeholder=\"Email\" name=\"email\" value=\"{{user.email}}\" #email>\n    </div>\n    <div class=\"profile-row\">\n      <button class=\"profile-button\" (click)=\"setOutput('profile')\">Cancel</button>\n      <button class=\"profile-button profile-submit\" (click)=\"updateProfile({firstName: firstName.value, lastName: lastName.value, username: username.value, email: email.value})\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"profile-container\" *ngIf=\"user\">\n    <div class=\"profile-row\">\n      <h2 class=\"profile-header\">Profile</h2>\n      <a class=\"fa fa-pencil\" (click)=\"setOutput('profile-edit')\"></a>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">First Name:</p>\n      <p class=\"profile-output\">{{user.firstName}}</p>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Last Name:</p>\n      <p class=\"profile-output\">{{user.lastName}}</p>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Username:</p>\n      <p class=\"profile-output\">{{user.username}}</p>\n    </div>\n    <div class=\"profile-row\">\n      <p class=\"profile-label\">Email:</p>\n      <p class=\"profile-output\">{{user.email}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesApiService = (function () {
    function ArticlesApiService(http) {
        this.http = http;
    }
    ArticlesApiService.prototype.createArticle = function (articleObject) {
        this.loadToken();
        articleObject.userId = this.user.userId;
        articleObject.username = this.user.username;
        return this.http.post("articles/create", articleObject)
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.deleteArticle = function (articleObject) {
        return this.http.post("articles/deleteOne", articleObject)
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.getArticlesByAuthor = function (userObject) {
        return this.http.post("articles/getByAuthor", userObject)
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.getArticleById = function (articleObject) {
        return this.http.post("articles/getById", articleObject)
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.getCategories = function () {
        return this.http.post("categories/getAll", {})
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.getUserArticles = function () {
        this.loadToken();
        var userObject = this.user;
        return this.http.post("articles/getByUser", userObject)
            .map(function (res) { return res.json(); });
    };
    ArticlesApiService.prototype.loadToken = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.authToken = localStorage.getItem('token');
    };
    ArticlesApiService.prototype.updateArticle = function (articleObject) {
        return this.http.post("articles/update", articleObject)
            .map(function (res) { return res.json(); });
    };
    return ArticlesApiService;
}());
ArticlesApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ArticlesApiService);

var _a;
//# sourceMappingURL=articles-api.service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(usersApiService, router) {
        this.usersApiService = usersApiService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.usersApiService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_api_service__["a" /* UsersApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_home_dashboard_home_component__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_home_dashboard_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_blog_home_component__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__blog_blog_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog_individual_component__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__blog_blog_individual_component__["a"]; });




//# sourceMappingURL=pages-barrel.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_add_widget_article_add_widget_component__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__article_add_widget_article_add_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_edit_widget_article_edit_widget_component__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__article_edit_widget_article_edit_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_delete_widget_article_delete_widget_component__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__article_delete_widget_article_delete_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_manage_widget_articles_manage_widget_component__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__articles_manage_widget_articles_manage_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_widget_profile_widget_component__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__profile_widget_profile_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_edit_widget_profile_edit_widget_component__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__profile_edit_widget_profile_edit_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_edit_widget_password_edit_widget_component__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__password_edit_widget_password_edit_widget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_navbar_widget_blog_navbar_widget_component__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__blog_navbar_widget_blog_navbar_widget_component__["a"]; });








//# sourceMappingURL=widget-barrel.js.map

/***/ })

},[525]);
//# sourceMappingURL=main.bundle.js.map
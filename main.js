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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n  padding-left: 40px;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\ndiv.container {\r\n  text-align: center;\r\n}\r\ndiv.wrapper {\r\n  border: 1px solid black;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 65%;\r\n  text-align: center;\r\n  margin: 10px auto;\r\n}\r\np.uid {\r\n  text-transform: uppercase;\r\n  font-size: 1.2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h4>Users</h4>\n  <ul>\n    <li class=\"col\" *ngFor=\"let user of users\">\n      <div  class=\"wrapper col\">\n        <h5>{{user.displayName}}</h5>\n        <p>{{user.email}}</p>\n        <button *ngIf=\"user.disabled\" class=\"btn btn-success\" (click)=\"enableUser(user.uid)\">Enable User</button>\n        <button *ngIf=\"!user.disabled\" class=\"btn btn-danger\" (click)=\"disableUser(user.uid)\">Disable User</button>\n        <a class=\"btn btn-warning\" routerLink=\"/users/{{user.uid}}\">View UserCollection</a>\n        <p class=\"uid\"><em>{{user.uid}}</em></p>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(admin, authService, toastr) {
        var _this = this;
        this.admin = admin;
        this.authService = authService;
        this.toastr = toastr;
        this.getUsers = function () {
            _this.admin
                .getUsers()
                .once("value")
                .then(function (data) {
                _this.users = Object.values(data.val());
            });
        };
        this.disableUser = function (uid) {
            _this.authService
                .userRef(uid)
                .update({ disabled: true })
                .then(function () {
                _this.toastr.warning("User Disabled!");
            });
        };
        this.enableUser = function (uid) {
            _this.authService
                .userRef(uid)
                .update({ disabled: false })
                .then(function () {
                _this.toastr.success("User Enabled!");
            });
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-admin",
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = /** @class */ (function () {
    function AdminService() {
        this.getUsers = function () { return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("users"); };
        this.getAllImages = function () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections");
        };
        this.getUserImages = function (uid) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + uid);
        };
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pictures_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pictures/image-upload/image-upload.component */ "./src/app/pictures/image-upload/image-upload.component.ts");
/* harmony import */ var _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pictures/image-details/image-details.component */ "./src/app/pictures/image-details/image-details.component.ts");
/* harmony import */ var _pictures_image_edit_image_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pictures/image-edit/image-edit.component */ "./src/app/pictures/image-edit/image-edit.component.ts");
/* harmony import */ var _pictures_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pictures/image-list/image-list.component */ "./src/app/pictures/image-list/image-list.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _pictures_image_delete_image_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pictures/image-delete/image-delete.component */ "./src/app/pictures/image-delete/image-delete.component.ts");
/* harmony import */ var _pictures_image_converter_image_converter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pictures/image-converter/image-converter.component */ "./src/app/pictures/image-converter/image-converter.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pictures_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pictures/user-images/user-images.component */ "./src/app/pictures/user-images/user-images.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: "admin/cp", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"] },
    { path: "welcome", component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    {
        path: "auth",
        children: [
            { path: "signin", component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"] },
            { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] }
        ]
    },
    {
        path: "pictures",
        children: [
            { path: "upload", component: _pictures_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_5__["ImageUploadComponent"] },
            { path: "convert", component: _pictures_image_converter_image_converter_component__WEBPACK_IMPORTED_MODULE_11__["ImageConvertComponent"] },
            { path: "details/:id", component: _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__["ImageDetailsComponent"] },
            { path: "details/:id/:uid/1", component: _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__["ImageDetailsComponent"] },
            { path: "edit/:id", component: _pictures_image_edit_image_edit_component__WEBPACK_IMPORTED_MODULE_7__["ImageEditComponent"] },
            { path: "list", component: _pictures_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_8__["ImageListComponent"] },
            { path: "delete/:id", component: _pictures_image_delete_image_delete_component__WEBPACK_IMPORTED_MODULE_10__["ImageDeleteComponent"] },
            { path: "delete/:id/:uid", component: _pictures_image_delete_image_delete_component__WEBPACK_IMPORTED_MODULE_10__["ImageDeleteComponent"] }
        ],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: "users/:uid/:id/edit",
        component: _pictures_image_edit_image_edit_component__WEBPACK_IMPORTED_MODULE_7__["ImageEditComponent"]
    },
    {
        path: "user/:uid/:id",
        component: _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__["ImageDetailsComponent"]
    },
    {
        path: "users/:uid",
        component: _pictures_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_13__["UserImagesComponent"]
    },
    { path: "", pathMatch: "full", redirectTo: "auth/signup" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            // { enableTracing: true }
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.host {\r\n  display: flex;\r\n  overflow: hidden;\r\n  height: 85vh;\r\n}\r\n\r\ndiv.host div {\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n\r\n/deep/ div.host router-outlet ~ * {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 85vh;\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"host\">\n  <div [@fadeAnimation]=\"getState(o)\" class=\"container\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fade_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fade.animations */ "./src/app/fade.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Colorize Me";
        this.getState = function (outlet) { return (outlet.isActivated ? outlet.activatedRoute : ""); };
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_fade_animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _pictures_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pictures/image-upload/image-upload.component */ "./src/app/pictures/image-upload/image-upload.component.ts");
/* harmony import */ var _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pictures/image-details/image-details.component */ "./src/app/pictures/image-details/image-details.component.ts");
/* harmony import */ var _pictures_image_edit_image_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pictures/image-edit/image-edit.component */ "./src/app/pictures/image-edit/image-edit.component.ts");
/* harmony import */ var _pictures_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pictures/image-list/image-list.component */ "./src/app/pictures/image-list/image-list.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _drop_zone_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drop-zone.directive */ "./src/app/drop-zone.directive.ts");
/* harmony import */ var _key_value_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./key-value-filter.pipe */ "./src/app/key-value-filter.pipe.ts");
/* harmony import */ var _pictures_image_delete_image_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pictures/image-delete/image-delete.component */ "./src/app/pictures/image-delete/image-delete.component.ts");
/* harmony import */ var _pictures_image_converter_image_converter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pictures/image-converter/image-converter.component */ "./src/app/pictures/image-converter/image-converter.component.ts");
/* harmony import */ var _pictures_public_images_public_images_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pictures/public-images/public-images.component */ "./src/app/pictures/public-images/public-images.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pictures_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pictures/user-images/user-images.component */ "./src/app/pictures/user-images/user-images.component.ts");
/* harmony import */ var _pictures_image_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pictures/image.service */ "./src/app/pictures/image.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _pictures_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["ImageUploadComponent"],
                _pictures_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_17__["ImageDetailsComponent"],
                _pictures_image_edit_image_edit_component__WEBPACK_IMPORTED_MODULE_18__["ImageEditComponent"],
                _pictures_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_19__["ImageListComponent"],
                _pictures_image_converter_image_converter_component__WEBPACK_IMPORTED_MODULE_24__["ImageConvertComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
                _pictures_image_delete_image_delete_component__WEBPACK_IMPORTED_MODULE_23__["ImageDeleteComponent"],
                _drop_zone_directive__WEBPACK_IMPORTED_MODULE_21__["DropZoneDirective"],
                _key_value_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["keyValueFilterPipe"],
                _pictures_public_images_public_images_component__WEBPACK_IMPORTED_MODULE_25__["PublicImagesComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"],
                _pictures_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_27__["UserImagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({ preventDuplicates: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [_pictures_image_service__WEBPACK_IMPORTED_MODULE_28__["ImageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.check = function () {
            if (!_this.authService.isAuthenticated()) {
                _this.router.navigate(["/auth/signin"]).then(function () { return false; });
            }
            else {
                return true;
            }
        };
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(toastr, router) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.GOOGLE_PROVIDER = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
        this.signUp = function (email, password) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .createUserWithEmailAndPassword(email, password)
                .then(function () {
                _this.router
                    .navigate(["/auth/signin"])
                    .then(function () {
                    _this.toastr.success("Successful Registration");
                })
                    .catch(function (e) { return _this.toastr.error(e.message); });
            })
                .catch(function (e) {
                _this.toastr.error(e.message, "Warning");
            });
        };
        this.signIn = function (email, password) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .signInWithEmailAndPassword(email, password)
                .then(function () { return _this.authHandler("/welcome"); })
                .catch(function (e) { return _this.toastr.error(e.message, "Warning"); });
        };
        this.googleOAuth = function () {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .signInWithPopup(_this.GOOGLE_PROVIDER)
                .then(function () { return _this.authHandler("/welcome"); })
                .catch(function (e) {
                _this.toastr.error(e.message);
            });
        };
        this.authHandler = function (redirectUrl) {
            var disabled = _this.uploadUserToDb();
            if (disabled) {
                return;
            }
            else {
                firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                    .currentUser.getIdToken()
                    .then(function (token) {
                    _this.token = token;
                    _this.router.navigate([redirectUrl]).then(function () {
                        _this.toastr.success("Login Success", "Success");
                    });
                })
                    .catch(function (e) { return _this.toastr.error(e.message); });
            }
        };
        this.uploadUserToDb = function () {
            var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
            _this.currentUser = currentUser;
            var uid = currentUser.uid;
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]()
                .ref("users/" + uid)
                .once("value")
                .then(function (data) {
                var user = data.val();
                if (user.disabled) {
                    _this.logout();
                    _this.toastr.clear();
                    _this.toastr.warning("This Account is Disabled!");
                    return true;
                }
                else {
                    if (!data.val()) {
                        var customUser = {
                            displayName: currentUser.displayName,
                            email: currentUser.email,
                            uid: currentUser.uid,
                            isAdmin: false
                        };
                        var obj = {};
                        obj[uid] = customUser;
                        firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]()
                            .ref("users")
                            .update(obj);
                    }
                    return false;
                }
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        this.logout = function () {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .signOut()
                .then(function () {
                _this.router
                    .navigate(["/auth/signin"])
                    .then(function () {
                    _this.token = null;
                    _this.toastr.success("Logout Success");
                })
                    .catch(function (e) { return _this.toastr.error(e.message); });
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        this.getCurrentUser = function () { return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser; };
        this.isAuthenticated = function () { return !!_this.token; };
        this.retrieveUser = function () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("users/" + _this.currentUser.uid);
        };
        this.userRef = function (uid) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("users/" + uid);
        };
    }
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in .button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 50px auto 0;\r\n  background-color: #4485f2;\r\n  color: #ffffff;\r\n  padding: 26px;\r\n}\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.sign-in button:enabled {\r\n  background-color: #4485f2;\r\n  color: white;\r\n}\r\n\r\n#email {\r\n  text-transform: lowercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm text-center\">\n    <form #signInForm=\"ngForm\" (ngSubmit)=\"login(signInForm)\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          required\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <div class=\"wrapper\" *ngIf=\"signInForm.controls.email\">\n        <div *ngIf=\"signInForm.controls.email.invalid && signInForm.controls.email.dirty\" class=\"alert-warning\">\n          Invalid E-Mail format\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          minlength=\"6\"\n          required\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <div class=\"wrapper\" *ngIf=\"signInForm.controls.password\">\n        <div *ngIf=\"signInForm.controls.password.invalid && signInForm.controls.password.dirty\">Password must be minimum 6\n          characters\n        </div>\n      </div>\n      <div class=\"wrapper sign-in\">\n        <button class=\"btn btn-block btn-social\" [disabled]=\"signInForm.invalid\" type=\"submit\">Sign In with E-Mail\n        </button>\n      </div>\n      <div class=\"wrapper sign-in text-center\">\n        <br>\n        <p>Or</p>\n        <div (click)=\"googleOAuth()\" class=\"button btn btn-block btn-social btn-google\">\n          <span class=\"fa fa-google\"></span> Sign In with Google\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.login = function (form) {
            var email = form.value.email.toLowerCase();
            var password = form.value.password;
            _this.authService.signIn(email, password);
        };
        this.googleOAuth = function () { return _this.authService.googleOAuth(); };
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signin",
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in .button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 50px auto 0;\r\n  background-color: #4485f2;\r\n  color: #ffffff;\r\n  padding: 26px;\r\n}\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.sign-in button:enabled {\r\n  background-color: #4485f2;\r\n  color: white;\r\n}\r\n\r\n#email {\r\n  text-transform: lowercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm text-center\">\n    <form #signUpform=\"ngForm\" (ngSubmit)=\"signup(signUpform)\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          required\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <div class=\"wrapper\" *ngIf=\"signUpform.controls.email\">\n        <div *ngIf=\"signUpform.controls.email.invalid && signUpform.controls.email.dirty\" class=\"alert-warning\">\n          Invalid E-Mail format\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          minlength=\"6\"\n          required\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <div class=\"wrapper\" *ngIf=\"signUpform.controls.password\">\n        <div *ngIf=\"signUpform.controls.password.invalid && signUpform.controls.password.dirty\">\n          Password must be minimum 6 characters\n        </div>\n      </div>\n\n      <div class=\"wrapper sign-in\">\n        <button class=\"btn btn-block btn-social\" [disabled]=\"signUpform.invalid\" type=\"submit\">Sign Up with E-Mail\n        </button>\n      </div>\n\n      <div class=\"wrapper sign-in text-center\">\n        <br>\n        <p>Or</p>\n        <div (click)=\"googleOAuth()\" class=\"button btn btn-block btn-social btn-google\"><span class=\"fa fa-google\"> </span> Sign\n          Up\n          with Google\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.signup = function (form) {
            var email = form.value.email.toLowerCase();
            var password = form.value.password;
            _this.authService.signUp(email, password);
        };
        this.googleOAuth = function () {
            _this.authService.googleOAuth();
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/drop-zone.directive.ts":
/*!****************************************!*\
  !*** ./src/app/drop-zone.directive.ts ***!
  \****************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
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

var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("drop", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("dragover", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("dragleave", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[dropZone]"
        }),
        __metadata("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/app/fade.animations.ts":
/*!************************************!*\
  !*** ./src/app/fade.animations.ts ***!
  \************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fadeAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar {\r\n  margin: 0 0 35px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/welcome\">Colorsnow.online</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth/signin\" routerLinkActive=\"active\">Sign In</a>\n      </li>\n      <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">Sign Up</a>\n      </li>\n      <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n      <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pictures/upload\" routerLinkActive=\"active\">Upload</a>\n      </li>\n      <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pictures/convert\" routerLinkActive=\"active\">Convert B/W to Coloured</a>\n      </li>\n      <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pictures/list\" routerLinkActive=\"active\">My Collection</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.dropdownLi = "nav-item dropdown";
        this.dropdownMenu = "dropdown-menu";
        this.expand = function () {
            _this.dropdownLi.endsWith("show")
                ? (_this.dropdownLi = "nav-item dropdown")
                : (_this.dropdownLi = "nav-item dropdown show");
            _this.dropdownMenu.endsWith("show")
                ? (_this.dropdownMenu = "dropdown-menu")
                : (_this.dropdownMenu = "dropdown-menu show");
        };
        this.logout = function () {
            _this.authService.logout();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/key-value-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/key-value-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: keyValueFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyValueFilterPipe", function() { return keyValueFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var keyValueFilterPipe = /** @class */ (function () {
    function keyValueFilterPipe() {
    }
    keyValueFilterPipe.prototype.transform = function (map) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        if (!map)
            return undefined;
        return Object.keys(map).map(function (key) { return ({ key: key, value: map[key] }); });
    };
    keyValueFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "keyValueFilter"
        })
    ], keyValueFilterPipe);
    return keyValueFilterPipe;
}());



/***/ }),

/***/ "./src/app/pictures/image-converter/image-converter.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pictures/image-converter/image-converter.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 500px;\r\n  border: 2px dashed #f16624;\r\n  border-radius: 5px;\r\n  margin: 10px 0;\r\n\r\n  /*colorzilla.com*/\r\n  /*http://colorzilla.com/gradient-editor/#000000+0,ffffff+23,f7ea31+42,28ff33+56,28dcfc+74,6928ff+86,ff0004+100&0.3+0,0.3+100 */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(0, 0, 0, 0.3) 0%,\r\n    rgba(255, 255, 255, 0.3) 23%,\r\n    rgba(247, 234, 49, 0.3) 42%,\r\n    rgba(40, 255, 51, 0.3) 56%,\r\n    rgba(40, 220, 252, 0.3) 74%,\r\n    rgba(105, 40, 255, 0.3) 86%,\r\n    rgba(255, 0, 4, 0.3) 100%\r\n  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000000', endColorstr='#4dff0004',GradientType=1 ); /* IE6-9 */\r\n}\r\n.hovering {\r\n  border: 2px solid #f16624;\r\n  color: #dadada !important;\r\n}\r\nprogress::-webkit-progress-value {\r\n  transition: width 0.1s ease;\r\n  justify-content: center;\r\n  margin: 15px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-converter/image-converter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pictures/image-converter/image-converter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\"\r\n     dropZone\r\n     (hovered)=\"toggleHover($event)\"\r\n     (dropped)=\"startUpload($event)\"\r\n     [class.hovering]=\"isHovering\">\r\n\r\n  <h1 *ngIf=\"status\">{{status}}</h1>\r\n  <h3>Bring your old Black and White photos to life with help of AI</h3>\r\n  <div class=\"file\">\r\n    <label class=\"file-label\">\r\n      <input [disabled]=\"preventEdit\" class=\"file-input btn btn-primary btn-sm float-left\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n    </label>\r\n  </div>\r\n  <span class=\"file-cta\">\r\n      <span class=\"file-icon\">\r\n        <i class=\"fa fa-upload\"></i>\r\n      </span>\r\n      <span class=\"file-label\">\r\n        or Drag file in this field\r\n      </span>\r\n  </span>\r\n</div>\r\n<div *ngIf=\"percentage | async as pct\">\r\n  <progress class=\"progress is-info\"\r\n            [value]=\"pct\"\r\n            max=\"100\">\r\n  </progress>\r\n  {{ pct | number }}%\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pictures/image-converter/image-converter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pictures/image-converter/image-converter.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImageConvertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageConvertComponent", function() { return ImageConvertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ImageConvertComponent = /** @class */ (function () {
    function ImageConvertComponent(storage, db, authService, toastr, router, imgService, http) {
        var _this = this;
        this.storage = storage;
        this.db = db;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.imgService = imgService;
        this.http = http;
        this.uid = this.authService.getCurrentUser().uid;
        this.preventEdit = false;
        // Fn which uploads an image URL to userCollection in DB
        this.uploadToDB = function (imageUrl) {
            var dbRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref("userCollections/" + _this.uid);
            var key = dbRef.push().key;
            var pushObj = {
                imageUrl: imageUrl,
                id: key,
                owner: _this.authService.getCurrentUser().email,
                uploadedOn: new Date().getTime()
            };
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]()
                .ref("userCollections/" + _this.uid + "/" + key)
                .update(pushObj)
                .then(function () {
                _this.router.navigate(["/pictures/list"]).then(function () {
                    _this.toastr.success("Image upload Success");
                });
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        this.disableFileUpload = function () {
            _this.preventEdit = !_this.preventEdit;
        };
    }
    ImageConvertComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    //Fn Triggered on file select/drop
    ImageConvertComponent.prototype.startUpload = function (event) {
        var _this = this;
        this.disableFileUpload();
        this.status = "Uploading please wait!";
        // The File object
        var file = event.item(0);
        // Client-side validation for images
        if (file.type.split("/")[0] !== "image") {
            this.toastr.error("unsupported file type :(");
            return;
        }
        // The storage path
        var date = new Date().getTime();
        var path = this.uid + "/" + date + "_" + file.name;
        //Send the image to Colouring API and then saves it to Firebase Storage ->
        //Gets link and adds it to firebase database
        //
        //Reason being the Colouring-API image links results in painfully slow loading of images
        //Firebase is Fast!
        this.imgService.colorizeLocalImg(file).subscribe(function (convertedImg) {
            var imageUrl = convertedImg["output_url"]; //converted Image URL
            //get image as blob
            _this.status = "Converting Image ...";
            _this.http.get(imageUrl, { responseType: "blob" }).subscribe(function (data) {
                _this.status = "Image Converted uploading....";
                //upload to Storage
                _this.task = _this.storage.upload(path, data);
                //get Link to uploaded img and add to DB for listing
                _this.task
                    .then(function (data) {
                    data.ref
                        .getDownloadURL()
                        .then(function (imgUrl) {
                        _this.downloadURL = imgUrl;
                        _this.uploadToDB(imgUrl);
                    })
                        .catch(function (e) { return _this.toastr.error(e.message); });
                })
                    .catch(function (e) { return _this.toastr.error(e.message); });
                _this.percentage = _this.task.percentageChanges();
                _this.snapshot = _this.task.snapshotChanges();
            });
        });
    };
    ImageConvertComponent.prototype.ngOnInit = function () {
        this.preventEdit = false;
    };
    ImageConvertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "image-convert",
            template: __webpack_require__(/*! ./image-converter.component.html */ "./src/app/pictures/image-converter/image-converter.component.html"),
            styles: [__webpack_require__(/*! ./image-converter.component.css */ "./src/app/pictures/image-converter/image-converter.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], ImageConvertComponent);
    return ImageConvertComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image-delete/image-delete.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pictures/image-delete/image-delete.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-delete/image-delete.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pictures/image-delete/image-delete.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\"><h1>Are you sure you want to delete this picture? </h1>\n  <div class=\"wrapper\"><img src=\"{{object.imageUrl}}\"></div>\n  <div>\n    <button class=\"btn btn-warning\" (click)=\"deleteImage(object.imageUrl)\">Yes</button>\n    <button class=\"btn\" (click)=\"returnBack()\">No</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pictures/image-delete/image-delete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pictures/image-delete/image-delete.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDeleteComponent", function() { return ImageDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageDeleteComponent = /** @class */ (function () {
    function ImageDeleteComponent(route, router, imgService, toastr, authService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.imgService = imgService;
        this.toastr = toastr;
        this.authService = authService;
        this.user = this.authService.getCurrentUser();
        this.imageId = this.route.snapshot.params.id;
        this.uid = this.route.snapshot.params.uid;
        this.object = {};
        this.getImage = function () {
            if (!_this.uid) {
                _this.imgService.getImage(_this.imageId).on("value", function (snap) {
                    _this.object = snap.val();
                });
            }
            else {
                _this.imgService.getImage(_this.imageId, _this.uid).on("value", function (snap) {
                    _this.object = snap.val();
                });
            }
        };
        this.deleteImage = function (imageUrl) {
            var id = _this.route.snapshot.params.id;
            _this.imgService
                .deleteImageFromStorage(imageUrl)
                .delete()
                .then(function () {
                _this.imgService
                    .deleteImage(id, _this.uid)
                    .remove()
                    .then(function () {
                    _this.router.navigate(["/pictures/list"]).then(function () {
                        _this.toastr.success("Image Deleted!");
                    });
                })
                    .catch(function (e) { return _this.toastr.error(e.message); });
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        this.returnBack = function () {
            window.history.back();
        };
    }
    ImageDeleteComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    ImageDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-delete",
            template: __webpack_require__(/*! ./image-delete.component.html */ "./src/app/pictures/image-delete/image-delete.component.html"),
            styles: [__webpack_require__(/*! ./image-delete.component.css */ "./src/app/pictures/image-delete/image-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ImageDeleteComponent);
    return ImageDeleteComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image-details/image-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pictures/image-details/image-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 80%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-details/image-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pictures/image-details/image-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"object\" class=\"container text-center\">\n  <img src=\"{{object.imageUrl}}\" alt=\"\">\n  <div class=\"wrapper\">\n    <h5>Owner : {{object.owner}}</h5>\n    <div *ngIf=\"controls\">\n      <p>Uploaded on: {{object.uploadedOn|date}}</p>\n      <p *ngIf=\"object.dateTaken\">Picture Taken on: {{object.dateTaken}}</p>\n      <button *ngIf=\"object.isPublic\" disabled class=\"bnt btn-warning\">Image is Public</button>\n      <button *ngIf=\"!object.isPublic\" disabled class=\"bnt btn-success\">Image is Private</button>\n    </div>\n  </div>\n\n    <div *ngIf=\"uid\">\n      <a routerLink=\"/pictures/delete/{{imageId}}/{{uid}}\" class=\"btn btn-danger\">Delete</a></div>\n    <div *ngIf=\"!uid\">\n      <a routerLink=\"/pictures/edit/{{imageId}}\" class=\"btn btn-warning\">Edit</a>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pictures/image-details/image-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pictures/image-details/image-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageDetailsComponent = /** @class */ (function () {
    function ImageDetailsComponent(route, imgService, authService) {
        var _this = this;
        this.route = route;
        this.imgService = imgService;
        this.authService = authService;
        this.user = this.authService.getCurrentUser();
        this.imageId = this.route.snapshot.params.id;
        this.uid = this.route.snapshot.params.uid;
        this.isPublic = false;
        this.object = {};
        this.getImage = function () {
            if (!_this.uid) {
                _this.imgService.getImage(_this.imageId).on("value", function (snap) {
                    _this.object = snap.val();
                });
            }
            else {
                _this.imgService.getImage(_this.imageId, _this.uid).on("value", function (snap) {
                    _this.object = snap.val();
                });
            }
        };
    }
    ImageDetailsComponent.prototype.ngOnInit = function () {
        this.imageId = this.route.snapshot.params.id;
        this.uid = this.route.snapshot.params.uid;
        this.isPublic = this.route.snapshot.params.public !== "1";
        this.getImage();
    };
    ImageDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-details",
            template: __webpack_require__(/*! ./image-details.component.html */ "./src/app/pictures/image-details/image-details.component.html"),
            styles: [__webpack_require__(/*! ./image-details.component.css */ "./src/app/pictures/image-details/image-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ImageDetailsComponent);
    return ImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image-edit/image-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pictures/image-edit/image-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-edit/image-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pictures/image-edit/image-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{object.imageUrl}}\" alt=\"\">\n<div class=\"container\">\n  <div class=\"wrapper\">\n    <h3>Owner : {{object.owner}}</h3>\n    <p>Uploaded on: {{object.uploadedOn|date}}</p>\n  </div>\n  <form #editForm=\"ngForm\" (ngSubmit)=\"editImage(editForm)\">\n    <div class=\"form-group\">\n      <label for=\"dateTaken\">Image capture date </label>\n      <input [(ngModel)]=\"dateTaken\" name=\"dateTaken\" id=\"dateTaken\" type=\"date\">\n    </div>\n    <div class=\"form-group\">\n      <label class=\"container\">\n      <input [checked]=\"isPublic\" name=\"isPublic\" type=\"checkbox\" [(ngModel)]=\"isPublic\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n      <span *ngIf=\"isPublic\"> Public</span><span *ngIf=\"!isPublic\"> Private</span>\n\n      <span class=\"checkmark\"></span>\n      </label>\n    </div>\n    <button class=\"btn btn-warning\" type=\"submit\">Save</button>\n  </form>\n  <a routerLink=\"/pictures/delete/{{imageId}}\" class=\"btn btn-danger\">Delete</a>\n</div>\n"

/***/ }),

/***/ "./src/app/pictures/image-edit/image-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pictures/image-edit/image-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ImageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditComponent", function() { return ImageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageEditComponent = /** @class */ (function () {
    function ImageEditComponent(authService, route, imgService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.imgService = imgService;
        this.user = this.authService.getCurrentUser();
        this.imageId = this.route.snapshot.params.id;
        this.uid = this.route.snapshot.params.uid;
        this.object = {};
        this.getImage = function () {
            if (!_this.uid) {
                _this.imgService.getImage(_this.imageId).on("value", function (snap) {
                    _this.object = snap.val();
                    if (_this.object.hasOwnProperty("isPublic")) {
                        _this.isPublic = _this.object["isPublic"];
                    }
                    if (_this.object.hasOwnProperty("dateTaken")) {
                        _this.dateTaken = _this.object["dateTaken"];
                    }
                });
            }
            else {
                _this.imgService.getImage(_this.imageId, _this.uid).on("value", function (snap) {
                    _this.object = snap.val();
                    if (_this.object.hasOwnProperty("isPublic")) {
                        _this.isPublic = _this.object["isPublic"];
                    }
                    if (_this.object.hasOwnProperty("dateTaken")) {
                        _this.dateTaken = _this.object["dateTaken"];
                    }
                });
            }
        };
        this.editImage = function (form) {
            if (form.value.hasOwnProperty("dateTaken") &&
                form.value.dateTaken !== undefined) {
                _this.object["dateTaken"] = form.value.dateTaken;
            }
            if (form.value.hasOwnProperty("isPublic")) {
                _this.object["isPublic"] = form.value.isPublic;
            }
            _this.imgService.updateImage(_this.imageId, _this.object);
        };
        this.toggleVisibility = function (e) {
            _this.isPublic = e.target.checked;
        };
    }
    ImageEditComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    ImageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-edit",
            template: __webpack_require__(/*! ./image-edit.component.html */ "./src/app/pictures/image-edit/image-edit.component.html"),
            styles: [__webpack_require__(/*! ./image-edit.component.css */ "./src/app/pictures/image-edit/image-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], ImageEditComponent);
    return ImageEditComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image-list/image-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pictures/image-list/image-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\r\n  text-align: center;\r\n  margin: 5px;\r\n  float: left;\r\n  width: 180px;\r\n}\r\ni {\r\n  font-size: 1.2rem;\r\n}\r\ndiv.gallery img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\ndiv.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-list/image-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pictures/image-list/image-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"collection.length === 0\">\n  <h3>You do not have any images yet</h3>\n</div>\n<div *ngIf=\"collection.length !== 0\" class=\"container\">\n  <div *ngFor=\"let image of collection\" class=\"gallery\">\n    <a routerLink=\"/pictures/details/{{image.id}}\">\n      <img src=\"{{image.imageUrl}}\">\n      </a>\n    <a target=\"_blank\" href=\"{{image.imageUrl}}\"><i class=\"fa fa-download\"></i> Download</a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pictures/image-list/image-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pictures/image-list/image-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageListComponent = /** @class */ (function () {
    function ImageListComponent(imgService) {
        this.imgService = imgService;
        this.collection = [];
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgService.getCollection().on("value", function (data) {
            if (data.val()) {
                _this.collection = Object.values(data.val());
            }
        });
    };
    ImageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-list",
            template: __webpack_require__(/*! ./image-list.component.html */ "./src/app/pictures/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.css */ "./src/app/pictures/image-list/image-list.component.css")]
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image-upload/image-upload.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pictures/image-upload/image-upload.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 500px;\r\n  border: 2px dashed #f16624;\r\n  border-radius: 5px;\r\n  background: white;\r\n  margin: 10px 0;\r\n}\r\n.hovering {\r\n  border: 2px solid #f16624;\r\n  color: #dadada !important;\r\n}\r\nprogress::-webkit-progress-value {\r\n  transition: width 0.1s ease;\r\n  justify-content: center;\r\n  margin: 15px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/image-upload/image-upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pictures/image-upload/image-upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\"\r\n     dropZone\r\n     (hovered)=\"toggleHover($event)\"\r\n     (dropped)=\"startUpload($event)\"\r\n     [class.hovering]=\"isHovering\">\r\n\r\n  <h1 *ngIf=\"status\">{{status}}</h1>\r\n  <h3>Upload files to your collection</h3>\r\n  <div class=\"file\">\r\n    <label class=\"file-label\">\r\n      <input [disabled]=\"preventEdit\" class=\"file-input btn btn-primary btn-sm float-left\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n    </label>\r\n    <div *ngIf=\"percentage | async as pct\">\r\n      <progress class=\"progress is-info\"\r\n                [value]=\"pct\"\r\n                max=\"100\">\r\n      </progress>\r\n      {{ pct | number }}%\r\n    </div>\r\n  </div>\r\n  <span class=\"file-cta\">\r\n      <span class=\"file-icon\">\r\n        <i class=\"fa fa-upload\"></i>\r\n      </span>\r\n      <span class=\"file-label\">\r\n        or Drag file in this field\r\n      </span>\r\n  </span>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pictures/image-upload/image-upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pictures/image-upload/image-upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(storage, db, authService, toastr, router) {
        var _this = this;
        this.storage = storage;
        this.db = db;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.uid = this.authService.getCurrentUser().uid;
        this.preventEdit = false;
        // Fn which uploads an image URL to userCollection in DB
        this.uploadToDB = function (imageUrl) {
            var dbRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref("userCollections/" + _this.uid);
            var key = dbRef.push().key;
            var pushObj = {
                imageUrl: imageUrl,
                id: key,
                owner: _this.authService.getCurrentUser().email,
                uploadedOn: new Date().getTime()
            };
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]()
                .ref("userCollections/" + _this.uid + "/" + key)
                .update(pushObj)
                .then(function () {
                _this.status = "";
                _this.router.navigate(["/pictures/list"]).then(function () {
                    _this.toastr.success("Image upload Success");
                });
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        //Fn which uploads user to users collection in DB
        this.disableFileUpload = function () {
            _this.preventEdit = !_this.preventEdit;
        };
    }
    ImageUploadComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    ImageUploadComponent.prototype.startUpload = function (event) {
        var _this = this;
        this.status = "Uploading please wait!";
        this.disableFileUpload();
        // The File object
        var file = event.item(0);
        // Client-side validation
        if (file.type.split("/")[0] !== "image") {
            this.toastr.error("unsupported file type :( ");
            return;
        }
        // The storage path
        var date = new Date().getTime();
        var path = this.uid + "/" + date + "_" + file.name;
        //Upload To StorageAsFile
        this.task = this.storage.upload(path, file);
        //Get link to uploaded file and upload it userCollection in DB
        this.task.then(function (data) {
            data.ref
                .getDownloadURL()
                .then(function (imgUrl) {
                _this.downloadURL = imgUrl;
                _this.uploadToDB(imgUrl);
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        });
        //Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
    };
    ImageUploadComponent.prototype.ngOnInit = function () {
        this.preventEdit = false;
    };
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "image-upload",
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/pictures/image-upload/image-upload.component.html"),
            styles: [__webpack_require__(/*! ./image-upload.component.css */ "./src/app/pictures/image-upload/image-upload.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/pictures/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/pictures/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = /** @class */ (function () {
    function ImageService(authService, http, toastr) {
        var _this = this;
        this.authService = authService;
        this.http = http;
        this.toastr = toastr;
        this.uid = this.authService.getCurrentUser().uid;
        this.collection = [];
        //Returns Array[Object]
        //Get User images
        this.getCollection = function (uid) {
            if (uid) {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + uid);
            }
            else {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + _this.uid);
            }
        };
        this.getPublicImages = function () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections");
        };
        //Returns Object[Object]
        //Get User images
        // getCollection = () => {
        //   firebase
        //     .database()
        //     .ref(`userCollections/` + this.uid)
        //     .on("value", data => {
        //       let parsed = data.val();
        //       this.collection = parsed;
        //     });
        // };
        //Fn which calls Colouring API and returns URL to converted Image
        this.colorizeLocalImg = function (file) {
            _this.toastr.info("Image Processing", "Please Wait", {
                progressAnimation: "decreasing",
                timeOut: 10000
            });
            var API = "https://api.deepai.org/api/colorizer";
            var KEY = "7bebdcf9-76f0-4dfa-bc77-2361935e6ea7";
            var formData = new FormData();
            formData.append("image", file, new Date().getDate().toString());
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers.set("Api-Key", KEY);
            return _this.http.post(API, formData, { headers: headers });
        };
        //Get single image by ID
        this.getImage = function (imageId, uid) {
            if (uid) {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + uid + "/" + imageId);
            }
            else {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + _this.uid + "/" + imageId);
            }
        };
        this.updateImage = function (id, newObj) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]()
                .ref("userCollections/" + _this.uid + "/" + id)
                .update(newObj)
                .then(function () {
                window.history.back();
                _this.toastr.success("Image Edit Success");
            })
                .catch(function (e) { return _this.toastr.error(e.message); });
        };
        //Delete from storage
        this.deleteImageFromStorage = function (imageUrl) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["storage"]().refFromURL(imageUrl);
        };
        //Delete single image by ID
        this.deleteImage = function (imageId, uid) {
            if (uid) {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + uid + "/" + imageId);
            }
            else {
                return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("userCollections/" + _this.uid + "/" + imageId);
            }
        };
    }
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/pictures/public-images/public-images.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pictures/public-images/public-images.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  text-align: center;\r\n}\r\ndiv.gallery {\r\n  text-align: center;\r\n  margin: 5px;\r\n  float: left;\r\n  width: 180px;\r\n}\r\ni {\r\n  font-size: 1.2rem;\r\n}\r\ndiv.gallery img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\ndiv.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/public-images/public-images.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pictures/public-images/public-images.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"publicImages.length === 0\">\n  <h1>There are no shared images yet</h1>\n</div>\n<div *ngIf=\"publicImages.length !== 0\" class=\"container\">\n  <h3>Here are some public images!</h3>\n  <div class=\"container\">\n    <div *ngFor=\"let image of publicImages\" class=\"gallery\">\n      <a target=\"_blank\" href=\"{{image.imageUrl}}\">\n        <img src=\"{{image.imageUrl}}\">\n        <p>{{image.owner}}</p>\n      </a>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pictures/public-images/public-images.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pictures/public-images/public-images.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicImagesComponent", function() { return PublicImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicImagesComponent = /** @class */ (function () {
    function PublicImagesComponent(imageService) {
        this.imageService = imageService;
        this.publicImages = [];
    }
    PublicImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getPublicImages().on("value", function (data) {
            var parsed = data.val();
            var temp = [];
            for (var uid in parsed) {
                for (var objId in parsed[uid]) {
                    if (parsed[uid][objId].hasOwnProperty("isPublic")) {
                        if (parsed[uid][objId]["isPublic"]) {
                            temp.push(parsed[uid][objId]);
                        }
                    }
                }
            }
            _this.publicImages = temp;
        });
    };
    PublicImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-public-images",
            template: __webpack_require__(/*! ./public-images.component.html */ "./src/app/pictures/public-images/public-images.component.html"),
            styles: [__webpack_require__(/*! ./public-images.component.css */ "./src/app/pictures/public-images/public-images.component.css")]
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], PublicImagesComponent);
    return PublicImagesComponent;
}());



/***/ }),

/***/ "./src/app/pictures/user-images/user-images.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pictures/user-images/user-images.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\r\n  text-align: center;\r\n  margin: 5px;\r\n  float: left;\r\n  width: 180px;\r\n}\r\ni {\r\n  font-size: 1.2rem;\r\n}\r\ndiv.gallery img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\ndiv.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pictures/user-images/user-images.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pictures/user-images/user-images.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"collection\" class=\"container\">\n  <div *ngFor=\"let image of collection\" class=\"gallery\">\n    <a routerLink=\"/user/{{uid}}/{{image.id}}\">\n      <img src=\"{{image.imageUrl}}\">\n    </a>\n    <a target=\"_blank\" href=\"{{image.imageUrl}}\"><i class=\"fa fa-download\"></i> Download</a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pictures/user-images/user-images.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pictures/user-images/user-images.component.ts ***!
  \***************************************************************/
/*! exports provided: UserImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImagesComponent", function() { return UserImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image.service */ "./src/app/pictures/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserImagesComponent = /** @class */ (function () {
    function UserImagesComponent(route, imageService) {
        this.route = route;
        this.imageService = imageService;
        this.collection = [];
        this.uid = this.route.snapshot.params.uid;
    }
    UserImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService
            .getCollection(this.route.snapshot.params.uid)
            .on("value", function (data) {
            if (data.val()) {
                _this.collection = Object.values(data.val());
            }
        });
    };
    UserImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-images",
            template: __webpack_require__(/*! ./user-images.component.html */ "./src/app/pictures/user-images/user-images.component.html"),
            styles: [__webpack_require__(/*! ./user-images.component.css */ "./src/app/pictures/user-images/user-images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], UserImagesComponent);
    return UserImagesComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1>Welcome to {{title}}</h1>\n  <div *ngIf=\"user\" class=\"wrapper\">\n    <a *ngIf=\"user.isAdmin\" class=\"btn btn-danger\" routerLink=\"/admin/cp\" routerLinkActive=\"active\">Admin CP</a>\n  </div>\n  <p>Personal image collection + old black and white images colorize </p>\n</div>\n<div class=\"public-images\">\n  <app-public-images></app-public-images>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.title = "Colorsnow.online";
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService
            .retrieveUser()
            .once("value")
            .then(function (data) {
            _this.user = data.val();
        })
            .catch(function (e) { return _this.toastr.error(e.message); });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCk-WThkSMKQLEPpetFLDPwJXW_dAmnjvg",
        authDomain: "colorize-a9b46.firebaseapp.com",
        storageBucket: "colorize-a9b46.appspot.com",
        databaseURL: "https://colorize-a9b46.firebaseio.com",
        projectId: "colorize-a9b46"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vipom\Google Drive\JS_Web\Angular Fundamentals\Projects\00.FinalProject\ng-workshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
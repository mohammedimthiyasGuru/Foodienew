(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~common-common-module~merchant-merchant-module"],{

/***/ "1U3K":
/*!********************************************************!*\
  !*** ./src/app/layout/masteraside/masteraside.page.ts ***!
  \********************************************************/
/*! exports provided: MasterasidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterasidePage", function() { return MasterasidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_masteraside_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./masteraside.page.html */ "fSls");
/* harmony import */ var _masteraside_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masteraside.page.scss */ "kjK3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_core/_data/localstorage */ "Q8Vt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let MasterasidePage = class MasterasidePage {
    constructor(storage, router, route) {
        this.storage = storage;
        this.router = router;
        this.route = route;
        let temp = this.storage.menu_setting;
        //  this.storage.menu_setting = true;
        this.sidemenu = temp.status;
        console.log(this.sidemenu);
    }
    ngOnInit() {
        this.currentUser = this.storage.user;
    }
    menu_action(data) {
        console.log(data);
        console.log(this.sidemenu);
        if (data == 'small') {
            this.storage.menu_setting = { status: true };
            this.sidemenu = true;
        }
        else if (data == 'big') {
            this.storage.menu_setting = { status: false };
            this.sidemenu = false;
            console.log(this.storage.menu_setting);
        }
    }
    action1() {
        this.router.navigateByUrl('/dashboard');
    }
    action2() {
        this.router.navigateByUrl('/vendor/dashboard');
    }
    action3() {
        this.router.navigateByUrl('/admin/dashboard');
    }
    action4() {
        this.router.navigateByUrl('/merchant/updateorderstatus');
    }
    action5() {
        this.router.navigateByUrl('/loginpage');
    }
    action6() {
        this.router.navigateByUrl('/loginpage');
    }
    action7() {
        this.router.navigateByUrl('/loginpage');
    }
    action8() {
        this.router.navigateByUrl('/loginpage');
    }
};
MasterasidePage.ctorParameters = () => [
    { type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
MasterasidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-masteraside',
        template: _raw_loader_masteraside_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_masteraside_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MasterasidePage);



/***/ }),

/***/ "D0/t":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/masterheader/masterheader.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header starts -->\n<header class=\"d-sm-flex align-items-center\">\n\n    <!-- Logo starts -->\n\n    <!-- <button type=\"button\"  id=\"toggleMenu\" class=\"toggle-menu top_toggle d-md-inline-block d-none\">\n        <i class=\"fa fa-bars\"></i>\n    </button> -->\n    <a  class=\"logo flx_1\">\n        <!-- <img src=\"../../../assets/images/logo.png\" alt=\"Arise Admin Dashboard Logo\" class=\"mt-0\" /> -->\n    </a>\n    <!-- Logo ends -->\n\n    <!-- Header actions starts -->\n\n\n    <ul id=\"header-actions\" class=\"clearfix align-items-center d-flex cus_top_head\">\n        <li class=\"list-box d-md-inline-block d-none dropdown mr-3\">\n            <a id=\"drop2\" href=\"#\" role=\"button\" class=\"dropdown-toggle minw_auto arrow_hide\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-exclamation-triangle\"></i>\n            </a>\n            <!-- <span class=\"info-label blue-bg\">0</span> -->\n            <ul class=\"dropdown-menu imp-notify\">\n                <li class=\"dropdown-header\">You have 3 notifications</li>\n                <li>\n                    <div class=\"icon\">\n                        <img src=\"../../../assets/images/thumbs/user10.png\" alt=\"Arise Admin\">\n                    </div>\n                    <div class=\"details\">\n                        <strong class=\"text-red\">Rogie King</strong>\n                        <span>Firefox is a free, open-source web browser from Mozilla.</span>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"icon\">\n                        <img src=\"../../../assets/images/thumbs/user6.png\" alt=\"Arise Admin\">\n                    </div>\n                    <div class=\"details\">\n                        <strong class=\"text-green\">Dan Cederholm</strong>\n                        <span>IE is a free web browser from Microsoft.</span>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"icon\">\n                        <img src=\"../../../assets/images/thumbs/user1.png\" alt=\"Arise Admin\">\n                    </div>\n                    <div class=\"details\">\n                        <strong class=\"text-blue\">Justin Mezzell</strong>\n                        <span>Safari is known for its sleek design and ease of use.</span>\n                    </div>\n                </li>\n                <li class=\"dropdown-footer\">See all the notifications</li>\n            </ul>\n        </li>\n        <li class=\"list-box d-md-inline-block d-none  dropdown mr-3\">\n            <a id=\"drop3\" href=\"#\" role=\"button\" class=\"dropdown-toggle arrow_hide\" data-toggle=\"dropdown\">\n                <i class=\"icon-mail2\"></i>\n            </a>\n            <!-- <span class=\"info-label red-bg\">0</span> -->\n            <ul class=\"dropdown-menu progress-info\">\n                <li class=\"dropdown-header\">You have 7 pending tasks</li>\n                <li>\n                    <div class=\"progress-info\">\n                        <strong class=\"text-red\">Critical</strong>\n                        <span>New Dashboard Design</span>\n                        <span class=\"pull-right text-red\">20%</span>\n                    </div>\n                    <div class=\"progress progress-md no-margin\">\n                        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"20\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n                            <span class=\"sr-only\">20% Complete (success)</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"progress-info\">\n                        <strong class=\"text-blue\">Primary</strong>\n                        <span>UI Changes in V2</span>\n                        <span class=\"pull-right\">90%</span>\n                    </div>\n                    <div class=\"progress progress-sm no-margin\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"90\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\n                            <span class=\"sr-only\">90% Complete</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"progress-info\">\n                        <strong class=\"text-yellow\">Urgent</strong>\n                        <span>Bug Fix #123</span>\n                        <span class=\"pull-right\">60%</span>\n                    </div>\n                    <div class=\"progress progress-xs no-margin\">\n                        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                            <span class=\"sr-only\">60% Complete (warning)</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"progress-info\">\n                        <span>Bug Fix #111</span>\n                        <span class=\"pull-right text-green\">Complete</span>\n                    </div>\n                    <div class=\"progress progress-xs no-margin\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n                            <span class=\"sr-only\">100% Complete (warning)</span>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown-footer\">See all the tasks</li>\n            </ul>\n        </li>\n        <li class=\"list-box d-md-inline-block d-none  shop_active d-inline-flex align-items-center mr-3\">\n            <span class=\"pr-2\">Shop Active</span>\n            <label class=\"switch mb-0\">\n                <input type=\"checkbox\" class=\"switch-input\" checked=\"\">\n                <span class=\"switch-label\" data-on=\"ON\" data-off=\"OFF\"></span>\n                <span class=\"switch-handle\"></span>\n            </label>\n        </li>\n        <li class=\"list-box user-admin hidden-xs dropdown\">\n            <div class=\"admin-details\">\n                <div class=\"name\">{{user_name}}</div>\n                <div class=\"designation\">{{user_type}}</div>\n            </div>\n            <a id=\"drop4\" href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <div class=\"user-details clearfix\">\n                    <a class=\"user-img\" style=\"width: 10%;height: 20px;\">\n                        <img *ngIf=\"!currentUser.profile_img\" src=\"../../../assets/images/thumbs/user1.png\" alt=\"User Info\">\n                        <img *ngIf=\"currentUser.profile_img\" src=\"{{currentUser.profile_img}}\" alt=\"User Info\">\n                    </a>\n                </div>\n            </a>\n       \n\n            <ul class=\"dropdown-menu sm\" style=\"top: 18px !important;\">\n                <li class=\"dropdown-content\">\n                    <a (click)=\"action1()\" >Edit Profile Info</a>\n                </li>\n                <li class=\"dropdown-content\" *ngIf=\"role_id == 2\">\n                    <a (click)=\"action2()\" >Edit Bussiness Info</a>\n                </li>\n                <li class=\"dropdown-content\">\n                    <a (click)=\"action3()\" >Edit Bank Info</a>\n                </li>\n                <li class=\"dropdown-content\">\n                    <a (click)=\"action4()\">Change Password</a>\n                </li>\n                <li class=\"dropdown-content\">\n                    <a (click)=\"logout()\">Logout</a>\n                </li>\n            </ul>\n\n\n        </li>\n    </ul>\n    <!-- Header actions ends -->\n\n</header>\n<!-- Header ends -->\n");

/***/ }),

/***/ "DYjj":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/masterlayout/masterlayout.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content> -->\n  <div class=\"main_wrapper\">\n    <app-masterheader></app-masterheader>\n    <app-masteraside></app-masteraside>\n    <div class=\"dashboard-wrapper h-100\">\n      <div class=\"container-fluid h-100\">\n        <!-- <ion-router-outlet class=\"layout_load\"></ion-router-outlet> -->\n         <app-merchant></app-merchant>\n      </div>\n    </div>\n  </div>\n  <app-masterfooter></app-masterfooter>\n<!-- </ion-content> -->");

/***/ }),

/***/ "J9BH":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/loader/loader.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading w-100 h-100\">\n  <div class=\" position-relative w-100 h-100 d-flex align-items-center justify-content-center\">\n  <div class=\"spinner  spinner-4 d-flex align-items-center justify-content-center\">\n  <img src=\"../../../assets/images/logo-loading-3.png\">\n  </div>\n  </div>\n</div>\n<!-- loading Gold Color -->\n<div class=\"loading loading2 w-100 h-100 d-none\">\n  <div class=\" position-relative w-100 h-100 d-flex align-items-center justify-content-center\">\n  <div class=\"spinner  spinner-4 d-flex align-items-center justify-content-center\">\n  <img src=\"../../../assets/images/logo-loading-2.png\">\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "JFVA":
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "J9BH");
/* harmony import */ var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component.scss */ "j+S6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderComponent.ctorParameters = () => [];
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoaderComponent);



/***/ }),

/***/ "JlfY":
/*!**********************************************************!*\
  !*** ./src/app/layout/masterfooter/masterfooter.page.ts ***!
  \**********************************************************/
/*! exports provided: MasterfooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterfooterPage", function() { return MasterfooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_masterfooter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./masterfooter.page.html */ "q17p");
/* harmony import */ var _masterfooter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masterfooter.page.scss */ "kQUy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_core/_data/localstorage */ "Q8Vt");





let MasterfooterPage = class MasterfooterPage {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
        this.currentUser = this.storage.user;
    }
};
MasterfooterPage.ctorParameters = () => [
    { type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"] }
];
MasterfooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-masterfooter',
        template: _raw_loader_masterfooter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_masterfooter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MasterfooterPage);



/***/ }),

/***/ "Mmwu":
/*!**********************************************************!*\
  !*** ./src/app/layout/masterlayout/masterlayout.page.ts ***!
  \**********************************************************/
/*! exports provided: MasterlayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterlayoutPage", function() { return MasterlayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_masterlayout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./masterlayout.page.html */ "DYjj");
/* harmony import */ var _masterlayout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masterlayout.page.scss */ "b1QE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MasterlayoutPage = class MasterlayoutPage {
    constructor() { }
    ngOnInit() {
    }
};
MasterlayoutPage.ctorParameters = () => [];
MasterlayoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-masterlayout',
        template: _raw_loader_masterlayout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_masterlayout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MasterlayoutPage);



/***/ }),

/***/ "OZ2c":
/*!**********************************************************!*\
  !*** ./src/app/layout/masterheader/masterheader.page.ts ***!
  \**********************************************************/
/*! exports provided: MasterheaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterheaderPage", function() { return MasterheaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_masterheader_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./masterheader.page.html */ "D0/t");
/* harmony import */ var _masterheader_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masterheader.page.scss */ "RZRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_core/services/profile.service */ "JYRz");
/* harmony import */ var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_core/_data/localstorage */ "Q8Vt");
/* harmony import */ var _core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_core/configs/property.config */ "olrZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let MasterheaderPage = class MasterheaderPage {
    constructor(storage, profileservice, route, router) {
        this.storage = storage;
        this.profileservice = profileservice;
        this.route = route;
        this.router = router;
        this.user_type = '';
        this.user_name = '';
        this.user_img = '';
        this.role_id = 0;
    }
    ngOnInit() {
        this.currentUser = this.storage.user;
        this.profileservice.profile_view(this.currentUser.profile_id).subscribe(res => {
            console.log(res);
            this.user_name = res.profile_biz_name;
            this.profile_details = res;
            this.role_id = res.role_id;
        }, err => {
            console.log(err);
            // this.notify.showError(err, "LOGIN");
        });
        console.log(this.currentUser);
        if (this.currentUser.role_id == 2) {
            this.user_type = 'Merchant';
            // this.user_name = this.currentUser.user_name;
            this.user_img = this.currentUser.profile_img;
        }
        else if (this.currentUser.role_id == 3) {
            this.user_type = 'Vendor';
            // this.user_name = this.currentUser.user_name;
            this.user_img = this.currentUser.profile_img;
        }
        else if (this.currentUser.role_id == 1) {
            this.user_type = 'Admin';
            // this.user_name = this.currentUser.user_name;
            this.user_img = this.currentUser.profile_img;
        }
    }
    logout() {
        this.storage.clear();
        window.location.reload();
        this.router.navigateByUrl('/loginpage');
    }
    edit_bussnes_info() {
        let res = { profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login };
        localStorage.setItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(res));
    }
    // edit_bussnes_info(){
    //   let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    //   localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
    // }
    action1() {
        let res = { profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login };
        localStorage.setItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(res));
        this.router.navigateByUrl('/merchant_panel/merch_edit_profile/' + this.currentUser.profile_id);
    }
    action2() {
        let res = { profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login };
        localStorage.setItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(res));
        this.router.navigateByUrl('/merchant_panel/merch_edit_bussiness/' + this.currentUser.profile_id);
    }
    action3() {
        let res = { profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login };
        localStorage.setItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(res));
        this.router.navigateByUrl('/merchant_panel/merch_edit_bankinfo/' + this.currentUser.profile_id);
    }
    action4() {
        let res = { profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login };
        localStorage.setItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(res));
        this.router.navigateByUrl('/merchant_panel/merch_edit_changepassword/' + this.currentUser.profile_id);
    }
};
MasterheaderPage.ctorParameters = () => [
    { type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"] },
    { type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
MasterheaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-masterheader',
        template: _raw_loader_masterheader_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_masterheader_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MasterheaderPage);



/***/ }),

/***/ "RZRh":
/*!************************************************************!*\
  !*** ./src/app/layout/masterheader/masterheader.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-details {\n  margin: 0px 0px 0px 0px !important;\n}\n\nul#header-actions li.list-box a {\n  padding: 0px 0px !important;\n}\n\n.user-details .user-img img {\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hc3RlcmhlYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKOztBQUlBO0VBRUksMkJBQUE7QUFGSjs7QUFPQTtFQUNJLHVCQUFBO0FBSkoiLCJmaWxlIjoibWFzdGVyaGVhZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWRldGFpbHMge1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwjaGVhZGVyLWFjdGlvbnMgbGkubGlzdC1ib3ggYSB7XG5cbiAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuXG4udXNlci1kZXRhaWxzIC51c2VyLWltZyBpbWcge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "b1QE":
/*!************************************************************!*\
  !*** ./src/app/layout/masterlayout/masterlayout.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXJsYXlvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fSls":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/masteraside/masteraside.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Left sidebar start -->\n<div class=\"vertical-nav vertical-nav-sm\" >\n\n    <!-- Collapse menu starts -->\n    <button class=\"collapse-menu\" (click)=\"menu_action('big')\">\n        <i class=\"fa fa-bars\"></i>\n    </button>\n    <!-- Collapse menu ends -->\n\n    <!-- Current user starts -->\n    <div class=\"user-details clearfix\">\n        <a class=\"user-img\">\n            <img *ngIf=\"!currentUser.profile_img\" src=\"../../../assets/images/thumbs/user1.png\" alt=\"User Info\">\n            <img *ngIf=\"currentUser.profile_img\" src=\"{{currentUser.profile_img}}\" alt=\"User Info\">\n            <!-- <span class=\"likes-info\">0</span> -->\n        </a>\n        <h5 class=\"user-name\">{{currentUser.user_name}}</h5>\n    </div>\n    <!-- Current user ends -->\n\n    <!-- Sidebar menu start -->\n    <ul class=\"menu clearfix\">\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 2\">\n            <a (click)=\"action1()\" >\n                <i class=\"fa fa-desktop\"></i>\n                <span class=\"menu-item\">UDashboard</span>\n            </a>\n        </li>\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 3\">\n            <a (click)=\"action2()\" >\n                <i class=\"fa fa-desktop\"></i>\n                <span class=\"menu-item\">Dashboard</span>\n            </a>\n        </li>\n\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a (click)=\"action3()\">\n                <i class=\"fa fa-desktop\"></i>\n                <span class=\"menu-item\">Dashboard</span>\n            </a>\n        </li>\n\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 2\">\n            <a (click)=\"action4()\">\n                <i class=\"fa fa-list-alt\"></i>\n                <span class=\"menu-item\">Update Order</span>\n            </a>\n        </li>\n\n        <!-- <li class=\"\">\n            <a routerLink=\"list_category\">\n                <i class=\"fa fa-file-text-o\"></i>\n                <span class=\"menu-item\">Category Details</span>\n            </a>\n        </li>\n\n        <li class=\"\">\n            <a routerLink=\"list_product\">\n                <i class=\"fa fa-file-text-o\"></i>\n                <span class=\"menu-item\">Product Details</span>\n            </a>\n        </li> -->\n\n\n\n        <li *ngIf=\"currentUser.role_id == 2\">\n            <a >\n                <i class=\"fa fa-shopping-cart\"></i>\n                <span class=\"menu-item\">Product</span>\n                <span class=\"down-arrow\"></span>\n            </a>\n            <!-- Child Menu Start -->\n            <ul>\n                <li>\n                    <a routerLink='product_create'>Add Product</a>\n                </li>\n                <li>\n                    <a routerLink='list_product'>View Product</a>\n                </li>\n                \n            </ul>\n            <!-- Child Menu Menu -->\n        </li>\n\n    \n        <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"admin/users\">\n                <i class=\"fa fa-user\"></i>\n                <span class=\"menu-item\">Users</span>\n            </a>\n        </li>\n\n\n    \n\n        <li class=\"\">\n            <a routerLink=\"common/message\">\n                <i class=\"icon-message\"></i>\n                <span class=\"menu-item\">Message</span>\n            </a>\n        </li>\n\n\n        <!-- <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"admin/forms\">\n                <i class=\"icon-message\"></i>\n                <span class=\"menu-item\">Forms</span>\n            </a>\n        </li> -->\n       \n        <li class=\"\" *ngIf=\"currentUser.role_id !== 3\">\n            <a  routerLink=\"merchant_wallet\">\n            <i class=\"fa fa-address-book-o\"></i>\n            <span class=\"menu-item\">Wallet</span>\n             </a>\n        </li>\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 3\">\n            <a  routerLink=\"merchant_wallet\">\n            <i class=\"fa fa-address-book-o\"></i>\n            <span class=\"menu-item\">Wallet</span>\n             </a>\n        </li>\n\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"admin/report-generation\">\n                <i class=\"icon-message\"></i>\n                <span class=\"menu-item\">Reports</span>\n            </a>\n        </li>\n\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"admin/announcement\">\n                <i class=\"icon-message\"></i>\n                <span class=\"menu-item\">Announcement</span>\n            </a>\n        </li>\n\n        <li *ngIf=\"currentUser.role_id == 2\">\n            <a >\n                <i class=\"fa fa-file-text-o\"></i>\n                <span class=\"menu-item\">Report</span>\n                <span class=\"down-arrow\"></span>\n            </a>\n            <!-- Child Menu Start -->\n            <ul>\n                <li>\n                    <a routerLink='report_credit'>Credit Report</a>\n                </li>\n                <li>\n                    <a routerLink='report_debit'>Debit Report</a>\n                </li>\n                \n            </ul>\n            <!-- Child Menu Menu -->\n        </li>\n\n        <!-- <li class=\"\">\n            <a>\n                <i class=\"fa fa-address-book-o\"></i>\n                <span class=\"menu-item\">Report</span>\n            </a>\n            <ul class=\"menu clearfix\">\n                <li class=\"\">\n                    <a routerLink=\"report_credit\">\n                        <i class=\"fa fa-address-book-o\"></i>\n                        <span class=\"menu-item\">Credit Report</span>\n                    </a>\n                </li>\n                <li class=\"\">\n                    <a routerLink=\"report_debit\">\n                        <i class=\"fa fa-address-book-o\"></i>\n                        <span class=\"menu-item\">Debit Report</span>\n                    </a>\n                </li>\n            </ul>\n        </li> -->\n        <!-- <li class=\"\">\n            <a href=\"#\">\n                <i class=\"fa fa-bullhorn\"></i>\n                <span class=\"menu-item\">Announcement</span>\n            </a>\n        </li> -->\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 2\">\n            <a routerLink=\"/video_list/{{currentUser.profile_id}}\">\n                <i class=\"fa fa-globe\"></i>\n                <span class=\"menu-item\">Go Live</span>\n            </a>\n        </li>\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"/video_list/{{currentUser.profile_id}}\">\n                <i class=\"fa fa-globe\"></i>\n                <span class=\"menu-item\">Go Live</span>\n            </a>\n        </li>\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 3\">\n            <a routerLink=\"/video_list/{{currentUser.profile_id}}\">\n                <i class=\"fa fa-globe\"></i>\n                <span class=\"menu-item\">Go Live</span>\n            </a>\n        </li>\n\n        <li class=\"\" *ngIf=\"currentUser.role_id == 3\">\n            <a routerLink=\"/vendor/forms\">\n                <i class=\"fa fa-file-text-o\"></i>\n                <span class=\"menu-item\">Forms</span>\n            </a>\n        </li>\n\n        <!-- <li class=\"\" *ngIf=\"currentUser.role_id == 1\">\n            <a routerLink=\"/wallet-point\">\n                <i class=\"fa fa-usd\"></i>\n                <span class=\"menu-item\">Wallet</span>\n            </a>\n        </li> -->\n\n    </ul>\n    <!-- Sidebar menu snd -->\n</div>\n\n\n\n\n<div class=\"bubble_chat\" *ngIf=\"currentUser.role_id == 2\"> \n    <a routerLink=\"common/message/admin\">\n        <i class=\"icon-message\"></i>\n    </a>\n</div>\n<!-- Left sidebar end -->");

/***/ }),

/***/ "j+S6":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Loading css start */\n.loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n.spinner {\n  position: relative;\n  width: 150px;\n  height: 150px;\n}\n.spinner {\n  transform: scale(0.45);\n}\n.spinner-4 img {\n  height: 100px;\n}\n.spinner:before, .spinner:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-width: 2px;\n  border-style: dashed;\n  border-radius: 50%;\n}\n.spinner.spinner-4:before {\n  width: 142px;\n  height: 142px;\n  border-color: #ffffff;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner.spinner-4:after {\n  background: url('logo-loading-3.png') no-repeat left top/cover;\n  display: block;\n  border: 0px;\n  top: 50.5px;\n  top: 54px;\n  left: -17px;\n  overflow: hidden;\n  transform-origin: 88px;\n  -webkit-animation: rotate 3s linear 0s infinite;\n  animation: rotate 3s linear 0s infinite;\n  width: 40px;\n  height: 40px;\n}\n.loading2 .spinner.spinner-4:before {\n  border-color: #fdc701;\n}\n.loading2 .spinner.spinner-4:after {\n  background: url('logo-loading-2.png') no-repeat left top/cover;\n}\n/* Loading css end */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxzQkFBQTtBQUNBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBRDtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDQyxzQkFBQTtBQUNEO0FBRUE7RUFDQyxhQUFBO0FBQ0Q7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0U7SUFFVSx1QkFBQTtFQUdWO0VBREE7SUFFVSx5QkFBQTtFQUdWO0FBQ0Y7QUFEQTtFQUNFO0lBRVUsdUJBQUE7RUFHVjtFQURBO0lBRVUseUJBQUE7RUFHVjtBQUNGO0FBQ0E7RUFDQyw4REFBQTtFQUNELGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNBO0FBQ0E7RUFDQyxxQkFBQTtBQUVEO0FBQUE7RUFDQyw4REFBQTtBQUdEO0FBREEsb0JBQUEiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBMb2FkaW5nIGNzcyBzdGFydCAqL1xuLmxvYWRpbmd7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR0b3A6MDtcblx0bGVmdDowO1xuXHRyaWdodDowO1xuXHRib3R0b206MDtcblx0ei1pbmRleDo5OTk5O1xuXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcbn1cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zcGlubmVye1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuNDUpO1xufVxuXG4uc3Bpbm5lci00IGltZ3tcblx0aGVpZ2h0OiAxMDBweDtcbn1cbi5zcGlubmVyOmJlZm9yZSwuc3Bpbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNwaW5uZXIuc3Bpbm5lci00OmJlZm9yZSB7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAxNDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbi5zcGlubmVyLnNwaW5uZXItNDphZnRlciB7XG4gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tbG9hZGluZy0zLnBuZycpIG5vLXJlcGVhdCBsZWZ0IHRvcCAvIGNvdmVyO1xuZGlzcGxheTogYmxvY2s7XG5ib3JkZXI6IDBweDtcbnRvcDogNTAuNXB4O1xudG9wOiA1NHB4O1xubGVmdDogLTE3cHg7XG5vdmVyZmxvdzogaGlkZGVuO1xuLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA4OHB4O1xudHJhbnNmb3JtLW9yaWdpbjogODhweDtcbi13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgM3MgbGluZWFyIDBzIGluZmluaXRlO1xuYW5pbWF0aW9uOiByb3RhdGUgM3MgbGluZWFyIDBzIGluZmluaXRlO1xud2lkdGg6IDQwcHg7XG5oZWlnaHQ6IDQwcHg7XG59XG4ubG9hZGluZzIgLnNwaW5uZXIuc3Bpbm5lci00OmJlZm9yZSB7XG5cdGJvcmRlci1jb2xvcjogI2ZkYzcwMTtcbn1cbi5sb2FkaW5nMiAuc3Bpbm5lci5zcGlubmVyLTQ6YWZ0ZXJ7XG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWxvYWRpbmctMi5wbmcnKSBuby1yZXBlYXQgbGVmdCB0b3AgLyBjb3Zlcjtcbn1cbi8qIExvYWRpbmcgY3NzIGVuZCAqL1xuIl19 */");

/***/ }),

/***/ "kQUy":
/*!************************************************************!*\
  !*** ./src/app/layout/masterfooter/masterfooter.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".foot-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hc3RlcmZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoibWFzdGVyZm9vdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "kjK3":
/*!**********************************************************!*\
  !*** ./src/app/layout/masteraside/masteraside.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXJhc2lkZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "q17p":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/masterfooter/masterfooter.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer_mobile\">\n  <div class=\"footer_main\">\n    <div>\n      <a id=\"drop1\" href=\"/merchant/update-order-status\">\n        <i class=\"fa fa-list-alt foot-icon\"></i>\n        <!-- <i class=\"fa fa-exclamation-triangle foot-icon\"></i> -->\n      </a>\n    </div>\n    <div>\n      <a id=\"drop2\" href=\"/merchant/video_list/{{currentUser.profile_id}}\">\n        <i class=\"fa fa-globe foot-icon\"></i>\n        <!-- <i class=\"icon-plus\"></i> -->\n      </a>\n    </div>\n    <div>\n      <a id=\"drop3\" href=\"/common/message\">\n        <i class=\"icon-message  foot-icon\"></i>\n        <!-- <i class=\"icon-mail2  foot-icon\"></i> -->\n      </a>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~common-common-module~merchant-merchant-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-common-module"],{

/***/ "2fJO":
/*!**************************************************************************!*\
  !*** ./src/app/common/user-profile-setting/user-profile-setting.page.ts ***!
  \**************************************************************************/
/*! exports provided: UserProfileSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileSettingPage", function() { return UserProfileSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile-setting.page.html */ "buZ6");
/* harmony import */ var _user_profile_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-setting.page.scss */ "Z6mZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_core/services/profile.service */ "JYRz");
/* harmony import */ var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_core/_data/localstorage */ "Q8Vt");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "pxUr");










let UserProfileSettingPage = class UserProfileSettingPage {
    constructor(router, formBuilder, profileservice, storage, apiloader) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.profileservice = profileservice;
        this.storage = storage;
        this.apiloader = apiloader;
        this.options = {
            types: [],
            componentRestrictions: { country: 'IN' }
        };
        this.zoom = 8;
        this.base_lat = 11.1271;
        this.base_lng = 78.6569;
        this.location_lat = 11.1271;
        this.location_lng = 78.6569;
        // Latitude : any;
        this.Location_list = [];
        this.location_type = "Home";
        this.old_default_id = "";
        this.submitted = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    }
    handleAddressChange(address) {
        this.zoom = 15;
        this.location_lat = Number(address.geometry.location.lat());
        this.location_lng = Number(address.geometry.location.lng());
        this.base_lat = this.location_lat;
        this.base_lng = this.location_lng;
        this.Latitude = this.location_lat;
        this.Longitude = this.location_lng;
        this.address = address.formatted_address;
        console.log(this.Latitude, this.Longitude);
        console.log(this.address);
    }
    ngOnInit() {
        this.profileservice.view(this.storage.user.profile_id).subscribe(res => {
            this.profile = res;
            console.log(this.profile);
            this.initForm();
        });
        this.initForm();
    }
    initForm() {
        this.profileForm = this.formBuilder.group({
            firstName: [this.profile ? this.profile.profile_first_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastName: [this.profile ? this.profile.profile_last_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            businessName: [this.profile ? this.profile.profile_biz_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: [this.profile ? this.profile.profile_contact : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [this.profile ? this.profile.profile_email : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            location: [this.profile ? this.profile.profile_location : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            // dob: [this.profile ? this.profile.profile_dob : '', [Validators.required]],
            address: [this.profile ? this.profile.profile_address : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            summary: [this.profile ? this.profile.profile_summary : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            bank_acc_no: [this.profile ? this.profile.bank_acc_no : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            bank_name: [this.profile ? this.profile.bank_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            bank_ifsc_no: [this.profile ? this.profile.bank_ifsc_no : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            bank_branch: [this.profile ? this.profile.bank_branch : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    get f() { return this.profileForm.controls; }
    selectImg(event) {
        this.profileImage = event.target.files[0];
    }
    onSubmit() {
        this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        const controls = this.f;
        console.log('controls ', controls);
        const _profile = {
            profile_id: this.profile.profile_id,
            profile_first_name: controls.firstName.value,
            profile_last_name: controls.lastName.value,
            profile_email: controls.email.value,
            profile_biz_name: controls.businessName.value,
            profile_contact: controls.mobile.value,
            profile_address: controls.address.value,
            profile_dob: new Date(),
            profile_location: controls.location.value,
            profile_summary: controls.summary.value,
            profile_facebook: "",
            profile_instagram: "",
            profile_twitter: "",
            bank_name: controls.bank_name.value,
            bank_acc_no: controls.bank_acc_no.value,
            bank_ifsc_no: controls.bank_ifsc_no.value,
            bank_branch: controls.bank_branch.value,
            location_lat: this.Latitude || 0,
            location_lng: this.Longitude || 0
        };
        console.log(_profile);
        this.profileservice.update(_profile).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('dashboard');
            // this.notify.showSuccess("Logged in successfully", "LOGIN");
        }, err => {
            // this.notify.showError(err, "LOGIN");
        });
    }
    uploadImg() {
        if (this.profileImage) {
            this.profileservice.uploadimage(this.profile.profile_id, this.profileImage).subscribe(res => {
                console.log(res);
                this.router.navigateByUrl('dashboard');
                // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, err => {
                // this.notify.showError(err, "LOGIN");
            });
        }
        else {
            alert('Select Image');
        }
    }
    ngOnDestroy() {
        this.submitted = false;
    }
    markerDragEnd($event) {
        this.location_lat = Number($event.coords.lat);
        this.location_lng = Number($event.coords.lng);
        this.base_lat = this.location_lat;
        this.base_lng = this.location_lng;
        this.Latitude = this.location_lat;
        this.Longitude = this.location_lng;
        this.profileservice.location_details(this.location_lat, this.location_lng).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.address = yield data['results'][0]['formatted_address'];
        }));
    }
};
UserProfileSettingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_8__["MapsAPILoader"] }
];
UserProfileSettingPage.propDecorators = {
    agmMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], { static: true },] }],
    placesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["placesRef",] }]
};
UserProfileSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile-setting',
        template: _raw_loader_user_profile_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserProfileSettingPage);



/***/ }),

/***/ "5fDH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/message/message.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>message</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n    <div class=\"col-lg-12\">\n      <div class=\"page-title\">\n        <h3>Message</h3>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- Top Bar Ends -->\n<div class=\"row gutter \">\n  <div class=\"col-md-4 mb-0 col-sm-4 col-xs-12 message_list\">\n    <div class=\"task-wrapper mb-0\" [style.height.px]=\"innerHeight\">\n\n      <div class=\"task-block bug\" *ngFor=\"let user of users\" (click)=\"openChat(user)\">\n        <h5 class=\"task-id\">{{user.profile_first_name}} {{user.profile_last_name}} <i class=\"icon-controller-record\"></i> </h5>\n        <div class=\"assigned-user\">\n          <img *ngIf=\"!user.profile_img\" src=\"assets/images/thumbs/user12.png\" class=\"img-fluid\" alt=\"Admin\">\n          <img *ngIf=\"user.profile_img\" [src]=\"user.profile_img\" class=\"img-fluid\" alt=\"Admin\">\n        </div>\n        <p class=\"task-desc\">{{user.role_name}}</p>\n        <ul class=\"task-footer\">\n          <li>{{user.last_msg_time | timeAgo}}</li>\n        </ul>\n        <span class=\"task-type\">{{user.role_name}}</span>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <div class=\"d-flex chat_col_2 flex-column\" [style.height.px]=\"innerHeight\">\n      <div class=\"flx_1 pb-2 position-relative\">\n        <div class=\"chat_info_load scroll_y\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n        <div *ngFor=\"let chat of chats\">\n\n          <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"chat.chat_receiver == senderId\">\n            <div class=\"flx_0 chat_txt_w\">\n              <div class=\"panel\">\n                <h5 class=\"task-name text-red mb-0 pb-0 shadow_none\">{{receiver}}</h5>\n                <p>\n                  {{chat.chat_content}}\n                </p>\n                <div class=\"text-right time_chat\">\n                  {{chat.chated_on | date: 'hh:mm a'}}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-end mb-2\" *ngIf=\"chat.chat_sender == senderId\">\n            <div class=\"flx_0 chat_txt_w\">\n              <div class=\"panel\">\n                <h5 class=\"task-name text-green mb-0 pb-0 shadow_none\">{{sender}}</h5>\n                <p>\n                  {{chat.chat_content}}\n                </p>\n                <div class=\"text-right time_chat\">\n                  {{chat.chated_on | date: 'hh:mm a'}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n        <!-- <div class=\"d-flex justify-content-end mb-2\">\n\n          <div class=\"flx_0 chat_txt_w\">\n            <div class=\"panel\">\n              <h5 class=\"task-name text-green mb-0 pb-0 shadow_none\">Sample Name - 147</h5>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                Ipsum has been the industry's standard dummy text ever\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-start mb-2\">\n          <div class=\"flx_0 chat_txt_w\">\n            <div class=\"panel\">\n              <h5 class=\"task-name text-red mb-0 pb-0 shadow_none\">Sample Name - 147</h5>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                Ipsum has been the industry's standard dummy text ever\n              </p>\n            </div>\n          </div>\n        </div> -->\n      </div>\n      <div class=\"flx_0\">\n        <div class=\"d-flex align-items-center\">\n          <div class=\"flx_1 pr-2\">\n            <textarea style=\"height: 70px;\" class=\"form-control\" [(ngModel)]=\"chatmsg\"></textarea>\n          </div>\n          <div class=\"flx_0\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"send()\">Send</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "GJ0H":
/*!************************************************!*\
  !*** ./src/app/common/go-live/go-live.page.ts ***!
  \************************************************/
/*! exports provided: GoLivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoLivePage", function() { return GoLivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_go_live_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./go-live.page.html */ "x+3F");
/* harmony import */ var _go_live_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./go-live.page.scss */ "vcSr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GoLivePage = class GoLivePage {
    constructor() { }
    ngOnInit() {
    }
};
GoLivePage.ctorParameters = () => [];
GoLivePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-go-live',
        template: _raw_loader_go_live_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_go_live_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoLivePage);



/***/ }),

/***/ "JXOR":
/*!*************************************************!*\
  !*** ./src/app/common/common-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CommonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPageRoutingModule", function() { return CommonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/masterlayout/masterlayout.page */ "Mmwu");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.component */ "dPok");
/* harmony import */ var _go_live_go_live_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./go-live/go-live.page */ "GJ0H");
/* harmony import */ var _message_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message/message.page */ "qXks");
/* harmony import */ var _user_profile_setting_user_profile_setting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile-setting/user-profile-setting.page */ "2fJO");








const routes = [
    {
        path: '',
        component: _common_component__WEBPACK_IMPORTED_MODULE_4__["CommonPage"]
    },
    {
        path: '',
        component: _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_3__["MasterlayoutPage"],
        children: [
            {
                path: 'message',
                component: _message_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
            },
            {
                path: 'message/:receiver',
                component: _message_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
            },
            {
                path: 'go-live',
                component: _go_live_go_live_page__WEBPACK_IMPORTED_MODULE_5__["GoLivePage"]
            },
            {
                path: 'user-profile',
                component: _user_profile_setting_user_profile_setting_page__WEBPACK_IMPORTED_MODULE_7__["UserProfileSettingPage"]
            }
        ]
    }
];
let CommonPageRoutingModule = class CommonPageRoutingModule {
};
CommonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommonPageRoutingModule);



/***/ }),

/***/ "Z45+":
/*!**************************************************!*\
  !*** ./src/app/common/message/message.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".task-wrapper,\n.over_auto {\n  overflow-y: auto;\n  overflow-X: hidden;\n}\n\n.chat_info_load {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  top: 0;\n}\n\n.time_chat {\n  color: rgba(8, 6, 6, 0.5);\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6Im1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2std3JhcHBlcixcbi5vdmVyX2F1dG8ge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogaGlkZGVuO1xufVxuXG4uY2hhdF9pbmZvX2xvYWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogMDtcbiAgICByaWdodCAgIDogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0b3AgICAgIDogMDtcblxufVxuXG4udGltZV9jaGF0IHtcbiAgICBjb2xvciAgICA6IHJnYmEoOCwgNiwgNiwgMC41KTtcbiAgICBmb250LXNpemU6IDExcHg7XG59Il19 */");

/***/ }),

/***/ "Z6mZ":
/*!****************************************************************************!*\
  !*** ./src/app/common/user-profile-setting/user-profile-setting.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUtc2V0dGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "a6Df":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPageModule", function() { return CommonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-routing.module */ "JXOR");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.component */ "dPok");
/* harmony import */ var _user_profile_setting_user_profile_setting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile-setting/user-profile-setting.page */ "2fJO");
/* harmony import */ var _message_message_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.page */ "qXks");
/* harmony import */ var _go_live_go_live_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./go-live/go-live.page */ "GJ0H");
/* harmony import */ var _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/masterlayout/masterlayout.page */ "Mmwu");
/* harmony import */ var _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/masterheader/masterheader.page */ "OZ2c");
/* harmony import */ var _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/masterfooter/masterfooter.page */ "JlfY");
/* harmony import */ var _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layout/masteraside/masteraside.page */ "1U3K");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! time-ago-pipe */ "Pl5P");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loader/loader.component */ "JFVA");


















let CommonPageModule = class CommonPageModule {
};
CommonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _common_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommonPageRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y' }),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__["GooglePlaceModule"]
        ],
        declarations: [
            _common_component__WEBPACK_IMPORTED_MODULE_6__["CommonPage"],
            _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_10__["MasterlayoutPage"],
            _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_11__["MasterheaderPage"],
            _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_12__["MasterfooterPage"],
            _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_13__["MasterasidePage"],
            _user_profile_setting_user_profile_setting_page__WEBPACK_IMPORTED_MODULE_7__["UserProfileSettingPage"],
            _message_message_page__WEBPACK_IMPORTED_MODULE_8__["MessagePage"],
            _go_live_go_live_page__WEBPACK_IMPORTED_MODULE_9__["GoLivePage"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_14__["TimeAgoPipe"]
        ]
    })
], CommonPageModule);



/***/ }),

/***/ "buZ6":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-profile-setting/user-profile-setting.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>User Profile Setting</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"announc_form\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" >\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">First Name</label>\n                                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                                        placeholder=\"First Name\" />\n                                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Last Name</label>\n                                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n                                        placeholder=\"Last Name\" />\n                                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Business Name</label>\n                                    <input type=\"text\" formControlName=\"businessName\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.businessName.errors }\"\n                                        placeholder=\"Business Name\" />\n                                    <div *ngIf=\"submitted && f.businessName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.businessName.errors.required\">Business Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Mobile No</label>\n                                    <input type=\"text\" formControlName=\"mobile\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"\n                                        placeholder=\"Mobile No\" />\n                                    <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.mobile.errors.required\">Mobile No is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Email</label>\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\n                                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n \n\n\n\n\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Address</label>\n                                    <textarea formControlName=\"address\" style=\"height: 100px;\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                        placeholder=\"Address\"></textarea>\n                                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Location</label>\n                                    <textarea formControlName=\"location\" style=\"height: 70px;\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\"\n                                        placeholder=\"Location\"></textarea>\n                                    <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">D.O.B</label>\n                                    <input type=\"text\" formControlName=\"dob\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\"\n                                        placeholder=\"Date of birth\" />\n                                    <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.dob.errors.required\">D.O.B is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Address</label>\n                                    <!-- <agm-map [latitude]=\"base_lat\" [longitude]=\"base_lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\"\n                                    [zoomControl]=\"false\">\n                                    <agm-marker [latitude]=\"location_lat\" [longitude]=\"location_lng\" [markerDraggable]=\"true\"\n                                      (dragEnd)=\"markerDragEnd($event)\">\n                                      <agm-info-window>\n                                        <strong>{{ address }}</strong>\n                                      </agm-info-window>\n                                    </agm-marker>\n                                   </agm-map> -->\n                                   <input formControlName=\"address\"  class=\"form-control\" [(ngModel)]=\"address\" name=\"address\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                   placeholder=\"Address\"  style=\"width: 100%;\" [(ngModel)]=\"address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\"\n                                   (onAddressChange)=\"handleAddressChange($event)\" />\n                                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Location</label>\n                                    <input formControlName=\"location\"  [disabled]=\"false\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\"\n                                        placeholder=\"Location\">\n                                    <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"summary\">Summary</label>\n                                    <textarea type=\"text\" formControlName=\"summary\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.summary.errors }\"\n                                        placeholder=\"Summary\"> </textarea>\n                                    <div *ngIf=\"submitted && f.summary.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.summary.errors.required\">Summary is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"summary\">Bank Name</label>\n                                    <input type=\"text\" formControlName=\"bank_name\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.bank_name.errors }\"\n                                        placeholder=\"Bank Name\">\n                                    <div *ngIf=\"submitted && f.bank_name.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.bank_name.errors.required\">Bank Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"summary\">Bank Account No</label>\n                                    <input type=\"text\" formControlName=\"bank_acc_no\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.bank_acc_no.errors }\"\n                                        placeholder=\"Bank Account No\">\n                                    <div *ngIf=\"submitted && f.bank_acc_no.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.bank_acc_no.errors.required\">Bank Account No is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"summary\">Branch</label>\n                                    <input type=\"text\" formControlName=\"bank_branch\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.bank_branch.errors }\"\n                                        placeholder=\"Branch\">\n                                    <div *ngIf=\"submitted && f.bank_branch.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.bank_branch.errors.required\">Bank Branch is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"summary\">IFSC</label>\n                                    <input type=\"text\" formControlName=\"bank_ifsc_no\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.bank_ifsc_no.errors }\"\n                                        placeholder=\"IFSC\">\n                                    <div *ngIf=\"submitted && f.bank_ifsc_no.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.bank_ifsc_no.errors.required\">IFSC is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Facebook</label>\n                                    <input type=\"text\" formControlName=\"facebook\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.facebook.errors }\"\n                                        placeholder=\"Facebook\" />\n                                    <div *ngIf=\"submitted && f.facebook.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.facebook.errors.required\">Facebook is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Twitter</label>\n                                    <input type=\"text\" formControlName=\"twitter\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.twitter.errors }\"\n                                        placeholder=\"Twitter\" />\n                                    <div *ngIf=\"submitted && f.twitter.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.twitter.errors.required\">Twitter is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n                <!-- <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Instagram</label>\n                                    <input type=\"text\" formControlName=\"instagram\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.instagram.errors }\"\n                                        placeholder=\"Instagram\" />\n                                    <div *ngIf=\"submitted && f.instagram.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.instagram.errors.required\">Instagram is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n                <div class=\"panel mb-3\">\n                    <div class=\"panel-body\">\n                        <div class=\"styled-input-wrapper\">\n                            <div class=\"input-icon\">\n                                <i class=\"icon-file-text2\"></i>\n                            </div>\n                            <div class=\"styled-input\">\n                                <div class=\"form-group\">\n                                    <label for=\"userName\">Upload Profile Image</label>\n                                    <input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"selectImg($event)\"/>\n                                </div>\n                                <div class=\"flx_0\">\n                                    <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" (click)=\"uploadImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center pb-2\">\n                    <button type=\"submit\" class=\"btn btn-success mr-2\">Save</button>\n                    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "oKxv":
/*!**************************************************************!*\
  !*** ./src/app/common/message/scroll-to-bottom.directive.ts ***!
  \**************************************************************/
/*! exports provided: ScrollToBottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToBottomDirective", function() { return ScrollToBottomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ScrollToBottomDirective = class ScrollToBottomDirective {
    constructor(_el) {
        this._el = _el;
    }
    // public ngAfterViewInit() {
    //   const el: HTMLDivElement = this._el.nativeElement;
    //   // Does not work as scrollHeight === offsetHeight
    //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    //   // This work but we see scroll moving
    //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
    // }
    // public ngOnInit() {
    //   const el: HTMLDivElement = this._el.nativeElement;
    //   // Does not work as scrollHeight === offsetHeight
    //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    //   // This work but we see scroll moving
    //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
    // }
    scrollToBottom() {
        const el = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
};
ScrollToBottomDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ScrollToBottomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scroll-to-bottom]'
    })
], ScrollToBottomDirective);



/***/ }),

/***/ "qXks":
/*!************************************************!*\
  !*** ./src/app/common/message/message.page.ts ***!
  \************************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.page.html */ "5fDH");
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.scss */ "Z45+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_core/services/chat.service */ "FlJg");
/* harmony import */ var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_core/services/profile.service */ "JYRz");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_core/services/user.service */ "hsG4");
/* harmony import */ var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_core/_data/localstorage */ "Q8Vt");
/* harmony import */ var _scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll-to-bottom.directive */ "oKxv");










let MessagePage = class MessagePage {
    constructor(route, storage, uservice, service, profileservice) {
        this.route = route;
        this.storage = storage;
        this.uservice = uservice;
        this.service = service;
        this.profileservice = profileservice;
        this.chats = [];
        this.senderId = this.storage.user.profile_id;
        this.sender = this.storage.user.user_name;
        // this.socket = io(RemoteConfig.BASE_URL, {
        //   transports: ["websocket"],
        //   reconnection: true,
        //   reconnectionDelayMax: 1000,
        //   autoConnect: true,
        //   query: {
        //     chatID: this.senderId
        //   }
        // });
        // this.socket.on("connect", () => {
        //   console.log('Socket id - ', this.socket.id); // x8WIv7-mJelg7on_ALbx
        // });
        // this.socket.on('error', function () {
        //   console.log("Sorry, there seems to be an issue with the connection!");
        // });
        // this.socket.on('connect_error', function (err) {
        //   console.log("connect failed " + err);
        // });
        // this.socket.on('connection', function () {
        //   console.log("connected");
        // });
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight - 150;
        if (this.storage.userRole == 1) {
            // this.uservice.listMerchants({}).subscribe(res => {
            //   this.users = res.rows;
            // })
            this.service.listChaters(this.senderId, {}).subscribe(res => {
                this.users = res.rows;
                if (this.users) {
                    this.openChat(this.users[0]);
                }
            });
        }
        else {
            this.service.listChaters(this.senderId, {}).subscribe(res => {
                if (res.count > 0) {
                    this.users = res.rows;
                    if (this.users) {
                        this.openChat(this.users[0]);
                    }
                }
                else {
                    this.uservice.list({}).subscribe(res => {
                        console.log('Users ', res);
                        this.users = res.rows;
                        if (this.users) {
                            this.openChat(this.users[0]);
                        }
                    });
                }
            });
        }
        this.route.params.subscribe(params => {
            console.log('Params ', params.receiver);
            if (params.receiver) {
                this.profileservice.profile_view(1).subscribe(res => {
                    this.openChat(res);
                }, err => {
                    console.log(err);
                });
            }
        });
        // this.socket.on('receive_message', (msg) => {
        //   console.log('Receive msgs - ', msg);
        //   this.chats.push(msg);
        // });
        setInterval(() => {
            if (this.senderId && this.receiverId) {
                this.loadChats();
            }
        }, 1000);
    }
    loadChats() {
        this.service.listContents(this.senderId, this.receiverId).subscribe(res => {
            this.chats = res.rows;
            console.log('Chats - ', this.chats);
        });
    }
    openChat(_receiver) {
        this.receiverId = _receiver.profile_id;
        this.receiver = _receiver.profile_first_name + ' ' + _receiver.profile_last_name;
        this.loadChats();
    }
    send_1() {
        if (this.chatmsg != '') {
            // Push the message through socket 
            console.log('Socket - ', this.socket);
            this.socket.emit('send_message', {
                receiverChatID: this.receiverId,
                senderChatID: this.senderId,
                content: this.chatmsg
            });
        }
        this.chatmsg = '';
        // this.receive();
    }
    send() {
        if (this.chatmsg != '') {
            this.service.sendMsg({
                receiverChatID: this.receiverId,
                senderChatID: this.senderId,
                content: this.chatmsg
            }).subscribe(res => {
                console.log(res);
            });
        }
        this.chatmsg = '';
    }
    receive1() {
        console.log('receive called', this.socket);
        // Socket receiving method 
        this.socket.on('receive_message', (msg) => {
            console.log('Receive msgs - ', msg);
            var item = {};
            // check the sender id and change the style class
            // if(saletdMsgArr[0] == this.myUserId){
            //    item = { "styleClass":"chat-message right", "msgStr":saletdMsgArr[1] };
            // }
            // else{
            //    item= { "styleClass":"chat-message left", "msgStr":saletdMsgArr[1] };
            // }
            // push the bind object to array
            // Final chats array will iterate in the view  
            this.chats.push(item);
        });
    }
};
MessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"] },
    { type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }
];
MessagePage.propDecorators = {
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_9__["ScrollToBottomDirective"],] }]
};
MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagePage);



/***/ }),

/***/ "vcSr":
/*!**************************************************!*\
  !*** ./src/app/common/go-live/go-live.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnby1saXZlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "x+3F":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/go-live/go-live.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>go-live</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Go Live</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"d-flex align-items-center justify-content-center flex-row\">\n      <div class=\"text-center pr-3 pl-3\">\n          <a href=\"#\">\n              <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                  <i class=\"icon-shopping-cart\"></i>\n              </span>\n              <h5>Go Live</h5>\n          </a>\n      </div>\n\n  </div>\n\n  <div class=\"pt-2\">\n      <div class=\"panel\">\n          <div class=\"panel-body\">\n              <div class=\"form-group\">\n                  <textarea style=\"height: 200px;\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"checkbox\"> Agree Terms &amp; Conditions\n              </div>\n              <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success\">Proceed Live</button>\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n  <div class=\"pt-5\">\n      <div class=\"panel panel-red\">\n          <div class=\"panel-heading mb-0 pb-0\">\n              <h3 class=\"text-left text-blue\">History</h3>\n          </div>\n          <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n              <div class=\"pb-2\">\n                  <div class=\"styled-input-wrapper\">\n                      <div class=\"input-icon\">\n                          <i class=\"icon-trash-stroke text-red\"></i>\n                      </div>\n                      <div class=\"styled-input\">\n                          <div class=\"history_live\">\n                              <img src=\"../../../assets/images/timeline.jpg\" class=\"img-fluid\" alt=\"\">\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n\n\n          </div>\n      </div>\n  </div>");

/***/ })

}]);
//# sourceMappingURL=common-common-module-es2015.js.map
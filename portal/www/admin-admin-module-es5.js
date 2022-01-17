(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminPageRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function () {
        return AdminPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../layout/masterlayout/masterlayout.page */
      "Mmwu");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");
      /* harmony import */


      var _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./announcement/announcement.page */
      "RKm8");
      /* harmony import */


      var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/dashboard.page */
      "67Aq");
      /* harmony import */


      var _form_view_info_form_view_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form-view-info/form-view-info.page */
      "kLB0");
      /* harmony import */


      var _form_view_form_view_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-view/form-view.page */
      "YRqn");
      /* harmony import */


      var _forms_forms_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./forms/forms.page */
      "Pun8");
      /* harmony import */


      var _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./report-download/report-download.page */
      "MDYv");
      /* harmony import */


      var _report_generation_report_generation_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./report-generation/report-generation.page */
      "VzVd");
      /* harmony import */


      var _user_list_user_list_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-list/user-list.page */
      "3OaK");
      /* harmony import */


      var _users_users_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./users/users.page */
      "H+nG");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./login/login.page */
      "PqlN");
      /* harmony import */


      var _video_video_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./video/video.page */
      "tfVA");
      /* harmony import */


      var _vendor_vendor_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./vendor/vendor.page */
      "bx2J");
      /* harmony import */


      var _vendor_edit_vendor_edit_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./vendor-edit/vendor-edit.page */
      "hJwE");
      /* harmony import */


      var _sub_vendor_sub_vendor_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./sub-vendor/sub-vendor.page */
      "uEs0");
      /* harmony import */


      var _merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./merchant-detail/merchant-detail.component */
      "4Ala");
      /* harmony import */


      var _merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./merchant-edit/merchant-edit.component */
      "RP3j");
      /* harmony import */


      var _formstype_formstype_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./formstype/formstype.component */
      "HVLf");

      var routes = [{
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminPage"]
      }, {
        path: 'login',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_15__["LoginPage"]
      }, {
        path: '',
        component: _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_4__["MasterlayoutPage"],
        children: [{
          path: 'dashboard',
          component: _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
        }, {
          path: 'users',
          component: _user_list_user_list_page__WEBPACK_IMPORTED_MODULE_13__["UserListPage"]
        }, {
          path: 'users/:userid',
          component: _users_users_page__WEBPACK_IMPORTED_MODULE_14__["UsersPage"]
        }, {
          path: 'forms',
          component: _forms_forms_page__WEBPACK_IMPORTED_MODULE_10__["FormsPage"]
        }, {
          path: 'form-view',
          component: _form_view_form_view_page__WEBPACK_IMPORTED_MODULE_9__["FormViewPage"]
        }, {
          path: 'form-view-info',
          component: _form_view_info_form_view_info_page__WEBPACK_IMPORTED_MODULE_8__["FormViewInfoPage"]
        }, {
          path: 'report-generation',
          component: _report_generation_report_generation_page__WEBPACK_IMPORTED_MODULE_12__["ReportGenerationPage"]
        }, {
          path: 'report-download',
          component: _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_11__["ReportDownloadPage"]
        }, {
          path: 'announcement',
          component: _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementPage"]
        }, {
          path: 'Vendor_form',
          component: _vendor_vendor_page__WEBPACK_IMPORTED_MODULE_17__["VendorPage"]
        }, {
          path: 'forms_type',
          component: _formstype_formstype_component__WEBPACK_IMPORTED_MODULE_22__["FormstypeComponent"]
        }, {
          path: 'vendor_edit/:userid',
          component: _vendor_edit_vendor_edit_page__WEBPACK_IMPORTED_MODULE_18__["VendorEditPage"]
        }, {
          path: 'merchant_form',
          component: _merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_20__["MerchantDetailComponent"]
        }, {
          path: 'merchant_edit:userid',
          component: _merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_21__["MerchantEditComponent"]
        }, {
          path: 'subvendor_form',
          component: _sub_vendor_sub_vendor_page__WEBPACK_IMPORTED_MODULE_19__["SubVendorPage"]
        }, {
          path: 'live_video/:userid',
          component: _video_video_page__WEBPACK_IMPORTED_MODULE_16__["VideoPage"]
        }]
      }];

      var AdminPageRoutingModule = function AdminPageRoutingModule() {
        _classCallCheck(this, AdminPageRoutingModule);
      };

      AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminPageRoutingModule);
      /***/
    },

    /***/
    "1zH4":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/formstype/formstype.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zH4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>forms</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n      <div class=\"col-lg-12\">\n        <div class=\"page-title\">\n          <h3>Forms</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <!-- Row starts -->\n  <div class=\"row gutter\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href=\"admin/form-view\" class=\"d-block\">\n        <div class=\"panel yellow_panel text_black all_black\">\n          <div class=\"social-details clearfix\">\n            <div class=\"social-icon pull-left\">\n              <div class=\"round-icon red-icon\">\n                <i class=\"icon-calendar\"></i>\n              </div>\n            </div>\n            <div class=\"social-num\">\n              <h2><span id=\"appointmentsOdometer\" class=\"odometer\">0</span> </h2>\n              <p>View Sub vendor form</p>\n              \n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href=\"admin/form-view\" class=\"d-block\">\n        <div class=\"panel yellow_panel text_black all_black\">\n          <div class=\"social-details clearfix\">\n            <div class=\"social-icon pull-left\">\n              <div class=\"round-icon yellow-icon\">\n                <i class=\"icon-tools\"></i>\n              </div>\n            </div>\n            <div class=\"social-num\">\n              <h2><span id=\"projectsOdometer\" class=\"odometer\">0</span></h2>\n              <p>View Premium user form</p>\n             \n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href=\"admin/form-view\" class=\"d-block\">\n        <div class=\"panel yellow_panel text_black all_black\">\n          <div class=\"social-details clearfix\">\n            <div class=\"social-icon pull-left\">\n              <div class=\"round-icon green-icon\">\n                <i class=\"icon-briefcase\"></i>\n              </div>\n            </div>\n            <div class=\"social-num\">\n              <h2><span id=\"shopOdometer\" class=\"odometer\">0</span></h2>\n              <p> View Withdraw form</p>\n             \n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href=\"admin/form-view\" class=\"d-block\">\n        <div class=\"panel yellow_panel text_black all_black\">\n          <div class=\"social-details clearfix\">\n            <div class=\"social-icon pull-left\">\n              <div class=\"round-icon blue-icon\">\n                <i class=\"icon-presentation\"></i>\n              </div>\n            </div>\n            <div class=\"social-num\">\n              <h2><span id=\"interviewsOdometer\" class=\"odometer\">0</span></h2>\n              <p>View Remove Subvendor</p>\n              \n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n\n\n  </div>\n\n\n  <div class=\"panel\"> \n    <div class=\"\"></div>\n    <!-- <h4 class=\"text-left text-red pt-3 pb-1\">Sub Vendors Info</h4> -->\n    <div class=\"row gutter\">\n      <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n      \n        <div class=\"panel yellow_panel text_black users-wrapper red\">\n        \n          <div class=\"users-info clearfix\">\n            <div class=\"users-avatar\">\n              <img src=\"./../../../../assets/./../../../../assets/images/thumbs/user6.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n            </div>\n            <div class=\"users-detail\">\n              <h5>Fraser Davidson</h5>\n              <p>UX Designer</p>\n            </div>\n          </div>\n          <ul class=\"users-footer clearfix\">\n            <li>\n              <p class=\"light\">Location</p>\n              <p>Canada</p>\n            </li>\n            <li>\n              <p class=\"light\">Contact</p>\n              <p>767336672</p>\n            </li>\n            <li>\n              <a href=\"/admin/form-view\" class=\"add-btn added\">\n                <i class=\"icon-plus3\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n        \n      </div>\n      <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n        <div class=\"panel yellow_panel text_black users-wrapper\">\n          <div class=\"users-info clearfix\">\n            <div class=\"users-avatar\">\n              <img src=\"./../../../../assets/images/thumbs/user5.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n            </div>\n            <div class=\"users-detail\">\n              <h5>Fraser Davidson</h5>\n              <p>UX Designer</p>\n            </div>\n          </div>\n          <ul class=\"users-footer clearfix\">\n            <li>\n              <p class=\"light\">Location</p>\n              <p>France</p>\n            </li>\n            <li>\n              <p class=\"light\">Contact</p>\n              <p>8723236672</p>\n            </li>\n            <li>\n              <a href=\"/admin/form-view\" class=\"add-btn added\">\n                <i class=\"icon-plus3\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n        <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n          <div class=\"users-info clearfix\">\n            <div class=\"users-avatar\">\n              <img src=\"./../../../../assets/images/thumbs/user13.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n            </div>\n            <div class=\"users-detail\">\n              <h5>David Lanham</h5>\n              <p>UX Designer</p>\n            </div>\n          </div>\n          <ul class=\"users-footer clearfix\">\n            <li>\n              <p class=\"light\">Location</p>\n              <p>Japan</p>\n            </li>\n            <li>\n              <p class=\"light\">Contact</p>\n              <p>8888236678</p>\n            </li>\n            <li>\n              <a href=\"/admin/form-view\" class=\"add-btn added\">\n                <i class=\"icon-plus3\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Row ends -->\n\n\n";
      /***/
    },

    /***/
    "3OaK":
    /*!***************************************************!*\
      !*** ./src/app/admin/user-list/user-list.page.ts ***!
      \***************************************************/

    /*! exports provided: UserListPage */

    /***/
    function OaK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListPage", function () {
        return UserListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-list.page.html */
      "AO6+");
      /* harmony import */


      var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-list.page.scss */
      "ZVlM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/user.service */
      "hsG4");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var UserListPage = /*#__PURE__*/function () {
        function UserListPage(router, service, storage) {
          _classCallCheck(this, UserListPage);

          this.router = router;
          this.service = service;
          this.storage = storage;
          this.menu = 'VENDORS';
        }

        _createClass(UserListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.service.listVendors({}).subscribe(function (res) {
              _this.users = res.rows;
            });
          }
        }, {
          key: "loadUsers",
          value: function loadUsers(_role) {
            var _this2 = this;

            if (_role == 1) {
              this.service.list({}).subscribe(function (res) {
                _this2.users = res.rows;
              });
            } else if (_role == 2) {
              this.menu = 'MERCHANTS';
              this.service.listMerchants({}).subscribe(function (res) {
                _this2.users = res.rows;
              });
            } else if (_role == 3) {
              this.menu = 'VENDORS';
              this.service.listVendors({}).subscribe(function (res) {
                _this2.users = res.rows;
              });
            } else if (_role == 4) {
              this.menu = 'RIDERS';
              this.service.list({}).subscribe(function (res) {
                _this2.users = res.rows;
              });
            } else if (_role == 5) {
              this.menu = 'CUSTOMERS';
              this.service.list({}).subscribe(function (res) {
                _this2.users = res.rows;
              });
            }

            console.log(this.users);
          }
        }, {
          key: "addvendor",
          value: function addvendor() {
            // alert("added Button");
            this.router.navigateByUrl('/Vendor_form'); // forms
          }
        }]);

        return UserListPage;
      }();

      UserListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }];
      };

      UserListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserListPage);
      /***/
    },

    /***/
    "67Aq":
    /*!***************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function Aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "LIPl");
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      "Kqc8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage() {
          _classCallCheck(this, DashboardPage);
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "7ZOx":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/report-download/report-download.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZOx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>report-download</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Report Download</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"announc_form\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              \n        \n\n     \n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Label - 1</label>\n                        <select name=\"\" class=\"form-control\" id=\"\"><option value=\"\">Select</option></select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n     <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Label - 1</label>\n                        <select name=\"\" class=\"form-control\" id=\"\"><option value=\"\">Select</option></select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n     \n      \n\n      <div class=\"text-center\">\n          <button type=\"submit\" class=\"btn btn-success\">Download</button>\n      </div>\n  </div>\n</div>\n  </div>\n\n\n";
      /***/
    },

    /***/
    "7k7K":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/form-view-info/form-view-info.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k7K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>form-view-info</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Category Name</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"announc_form\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              \n        \n\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Vendor id</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Sub vendor id</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Sub vendor name</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Gender</label>\n                        <select class=\"form-control\" readonly><option>Select</option></select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">D.o.b</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Email</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Phone number</label>\n                          <input type=\"text\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Address</label>\n                          <textarea readonly style=\"height: 70px;\" class=\"form-control\"></textarea>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Upload Receipt</label>\n                          <input type=\"file\" class=\"form-control\" readonly>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Note</label>\n                          <textarea readonly style=\"height: 70px;\" class=\"form-control\"></textarea>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n     \n\n      <div class=\"text-center pb-2\">\n          <button type=\"button\" (click)=\"ApprovedShow()\" class=\"btn btn-success\">Approved</button>\n          <button type=\"button\" (click)=\"RejectShow()\" class=\"btn btn-danger\">Rejected</button>\n      </div>\n\n\n      <div class=\"panel mt-3\" *ngIf=\"ApproveComments\">\n          <h4 class=\"text-white\">Approve Comments</h4>\n          <textarea style=\"height: 75px;\" class=\"form-control\"></textarea>\n\n          <div class=\"text-center pt-2\">\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </div>\n      </div>\n\n      <div class=\"panel mt-3\" *ngIf=\"RejectComments\">\n          <h4 class=\"text-white\">Reject Comments</h4>\n          <textarea style=\"height: 75px;\" class=\"form-control\"></textarea>\n\n          <div class=\"text-center pt-2\">\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </div>\n      </div>\n  </div>\n</div>\n  </div>\n";
      /***/
    },

    /***/
    "84xZ":
    /*!***********************************************************!*\
      !*** ./src/app/admin/announcement/announcement.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function xZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbm5vdW5jZW1lbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "AO6+":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function AO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n    <div class=\"col-lg-12\">\n      <div class=\"page-title\">\n        <h3>{{menu}} USER LIST</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Top Bar Ends -->\n<!-- Row starts -->\n<div class=\"d-sm-flex align-items-center justify-content-between flex-row custom_list\">\n  <div class=\"panel yellow_panel text_black mr-2 h-100 flx_1 \" (click)=\"loadUsers(3)\" [ngClass]=\"{ 'active_user_list': menu == 'VENDORS' }\">\n    <div class=\"text-center pr-3 pl-3\">\n      <a href=\"admin/Vendor_form\" > \n        <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n          <i class=\"icon-user\"></i>\n        </span>\n        <h5 class=\"mb-0 pb-0\">VENDORS</h5>\n      </a>\n    </div>\n    \n   <!-- <button style=\"background: black;\" >+</button> -->\n  </div>\n  <div class=\"panel yellow_panel text_black mr-2 h-100 flx_1\" (click)=\"loadUsers(2)\" [ngClass]=\"{ 'active_user_list': menu == 'MERCHANTS' }\">\n    <div class=\"text-center pr-3 pl-3\">\n      <a href=\"admin/merchant_form\">\n        <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n          <i class=\"icon-user\"></i>\n        </span>\n        <h5 class=\"mb-0 pb-0\">MERCHANTS</h5>\n      </a>\n    </div>\n  \n  </div>\n  <div class=\"panel yellow_panel text_black mr-2 h-100 flx_1\" (click)=\"loadUsers(4)\" [ngClass]=\"{ 'active_user_list': menu == 'RIDERS' }\">\n    <div class=\"text-center pr-3 pl-3\">\n      <a>\n        <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n          <i class=\"icon-bike\"></i>\n        </span>\n        <h5 class=\"mb-0 pb-0\">RIDERS</h5>\n      </a>\n    </div>\n  </div>\n  <div class=\"panel yellow_panel text_black mr-2 h-100 flx_1\" (click)=\"loadUsers(5)\" [ngClass]=\"{ 'active_user_list': menu == 'CUSTOMERS' }\">\n    <div class=\"text-center pr-3 pl-3\">\n      <a>\n        <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n          <i class=\"icon-users\"></i>\n        </span>\n        <h5 class=\"mb-0 pb-0\">CUSTOMERS</h5>\n      </a>\n    </div>\n  </div>\n\n</div>\n<!-- Row ends -->\n\n\n\n\n<div class=\"row gutter\">\n\n  <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let user of users\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"{{user.profile_img || '../../../assets/images/thumbs/user6.png'}}\" class=\"img-fluid\" alt=\"User\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>{{user.profile_first_name}} {{user.profile_last_name}}</h5>\n          <p>{{user.profile_biz_name}}</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>{{user.profile_location}}</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>{{user.profile_contact}}</p>\n        </li>\n        <li>\n          <a href=\"admin/users/{{user.profile_id}}\" class=\"add-btn added\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user5.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Fraser Davidson</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>France</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>8723236672</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper blue\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user4.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Kabio Basile</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Germany</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>3891236678</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper green\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user2.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Sean Mcabe</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Italy</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>9801236678</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user1.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Tim Boelaars</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Thailand</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>0091236678</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user13.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>David Lanham</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Japan</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>8888236678</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div> -->\n</div>\n\n<!-- <div class=\"pt-4 pb-2\">\n  <h3 class=\"text-white shadow_none\">\n    Sub Vendors\n  </h3>\n</div> -->\n<!-- <div class=\"row gutter\">\n\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user12.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Jeremiah Shaw</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Ireland</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>5551236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user11.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Jackie Tran</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>India</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>9991236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper blue\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user10.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Ionut Zamfir</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>South Africa</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>2221236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user9.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Matthew Smith</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Austria</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>1321236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper green\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user8.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Dana Tanamachi</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Brazil</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>7751236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user7.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Louie Mantia</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>India</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>8851236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper blue\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user6.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Shaun Moynihan</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Denmark</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>7311236678</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper green\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user5.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Dustin Wallace</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Kenya</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>2366734511</p>\n        </li>\n        <li>\n          <a href=\"Subadmin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user4.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Veerle Pieters</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Holland</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>1451236773</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user3.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Charlie Waite</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>Russia</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>0051236699</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper blue\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user2.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Mason Yarnell</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>England</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>4451236670</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"panel yellow_panel text_black users-wrapper red\">\n      <div class=\"users-info clearfix\">\n        <div class=\"users-avatar\">\n          <img src=\"../../../assets/images/thumbs/user1.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n        </div>\n        <div class=\"users-detail\">\n          <h5>Justin Pervorse</h5>\n          <p>UX Designer</p>\n        </div>\n      </div>\n      <ul class=\"users-footer clearfix\">\n        <li>\n          <p class=\"light\">Location</p>\n          <p>USA</p>\n        </li>\n        <li>\n          <p class=\"light\">Contact</p>\n          <p>1451236675</p>\n        </li>\n        <li>\n          <a href=\"admin/users\" class=\"add-btn\">\n            <i class=\"icon-plus3\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div> -->\n<!-- Row ends -->";
      /***/
    },

    /***/
    "BCjq":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/report-generation/report-generation.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function BCjq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtZ2VuZXJhdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "DCCW":
    /*!*********************************************!*\
      !*** ./src/app/admin/forms/forms.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DCCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "GiGA":
    /*!**********************************************************!*\
      !*** ./src/app/admin/formstype/formstype.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function GiGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtc3R5cGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "H+nG":
    /*!*******************************************!*\
      !*** ./src/app/admin/users/users.page.ts ***!
      \*******************************************/

    /*! exports provided: UsersPage */

    /***/
    function HNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
        return UsersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./users.page.html */
      "SPow");
      /* harmony import */


      var _users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users.page.scss */
      "SaTQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/user.service */
      "hsG4");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var UsersPage = /*#__PURE__*/function () {
        function UsersPage(router, route, service, profileservice, storage) {
          _classCallCheck(this, UsersPage);

          this.router = router;
          this.route = route;
          this.service = service;
          this.profileservice = profileservice;
          this.storage = storage;
          this.menu = 'VENDORS';
        }

        _createClass(UsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.route.params.subscribe(function (params) {
              _this3._profileId = params.userid;
            });

            if (this._profileId) {
              this.profileservice.view(this._profileId).subscribe(function (res) {
                _this3.profile = res;

                _this3.loadUsers(_this3.profile.role_id);
              });
            }
          }
        }, {
          key: "loadUsers",
          value: function loadUsers(_role) {
            var _this4 = this;

            if (_role == 1) {
              this.service.list({}).subscribe(function (res) {
                _this4.users = res.rows;
              });
            } else if (_role == 2) {
              this.menu = 'MERCHANTS';
              this.service.listMerchants({}).subscribe(function (res) {
                _this4.users = res.rows;
              });
            } else if (_role == 3) {
              this.menu = 'VENDORS';
              this.service.listVendors({}).subscribe(function (res) {
                _this4.users = res.rows;
                console.log(_this4.users);
              });
              this.service.listSubVendors({}).subscribe(function (res) {
                _this4.sub_vendors = res.rows;
                console.log(_this4.sub_vendors);
              });
            } else if (_role == 4) {
              this.menu = 'RIDERS';
              this.service.list({}).subscribe(function (res) {
                _this4.users = res.rows;
              });
            } else if (_role == 5) {
              this.menu = 'CUSTOMERS';
              this.service.list({}).subscribe(function (res) {
                _this4.users = res.rows;
              });
            }

            console.log(this.users);
            console.log(this.sub_vendors);
          }
        }]);

        return UsersPage;
      }();

      UsersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]
        }];
      };

      UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UsersPage);
      /***/
    },

    /***/
    "HVLf":
    /*!********************************************************!*\
      !*** ./src/app/admin/formstype/formstype.component.ts ***!
      \********************************************************/

    /*! exports provided: FormstypeComponent */

    /***/
    function HVLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormstypeComponent", function () {
        return FormstypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formstype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formstype.component.html */
      "1zH4");
      /* harmony import */


      var _formstype_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formstype.component.scss */
      "GiGA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormstypeComponent = /*#__PURE__*/function () {
        function FormstypeComponent() {
          _classCallCheck(this, FormstypeComponent);
        }

        _createClass(FormstypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormstypeComponent;
      }();

      FormstypeComponent.ctorParameters = function () {
        return [];
      };

      FormstypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-formstype',
        template: _raw_loader_formstype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formstype_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormstypeComponent);
      /***/
    },

    /***/
    "JHbN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/form-view/form-view.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function JHbN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>form-view</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n    <div class=\"col-lg-12\">\n      <div class=\"page-title\">\n        <h3>Forms Name</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"row gutter\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"card-wrapper\">\n      <div class=\"card clearfix bg-dark2\">\n        <img src=\"../../../assets/images/thumbs/user12.png\" class=\"img-responsive rounded card-avatar mb-1 pb-0\" alt=\"Arise Admin\">\n        <p>Victor Erixon</p>\n        <h4 class=\"shadow_none mb-0 pb-0\">User Id</h4>\n        <div class=\"row pt-1 d-flex align-items-center\">\n          <div class=\"col-6 text-left d-flex align-items-center\">\n            <h3 class=\"mb-0 pb-0 pr-1\">10:00</h3> AM\n          </div>\n          <div class=\"col-6 text-right\">\n            12-jun-2021\n          </div>\n        </div>\n\n      </div>\n      <div class=\"card-actions clearfix pt-2 pb-2 text-center\">\n        <a href=\"admin/form-view-info\" class=\"btn btn-info btn-rounded btn-sm pl-4 pr-4\">View Details</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"card-wrapper\">\n      <div class=\"card clearfix bg-dark2\">\n        <img src=\"../../../assets/images/thumbs/user12.png\" class=\"img-responsive rounded card-avatar mb-1 pb-0\" alt=\"Arise Admin\">\n        <p>Victor Erixon</p>\n        <h4 class=\"shadow_none mb-0 pb-0\">User Id</h4>\n        <div class=\"row pt-1 d-flex align-items-center\">\n          <div class=\"col-6 text-left d-flex align-items-center\">\n            <h3 class=\"mb-0 pb-0 pr-1\">10:00</h3> AM\n          </div>\n          <div class=\"col-6 text-right\">\n            12-jun-2021\n          </div>\n        </div>\n      </div>\n      <div class=\"card-actions clearfix pt-2 pb-2 text-center\">\n        <a href=\"admin/form-view-info\" class=\"btn btn-info btn-rounded btn-sm pl-4 pr-4\">View Details</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"card-wrapper\">\n      <div class=\"card clearfix bg-dark2\">\n        <img src=\"../../../assets/images/thumbs/user12.png\" class=\"img-responsive rounded card-avatar mb-1 pb-0\" alt=\"Arise Admin\">\n        <p>Victor Erixon</p>\n        <h4 class=\"shadow_none mb-0 pb-0\">User Id</h4>\n        <div class=\"row pt-1 d-flex align-items-center\">\n          <div class=\"col-6 text-left d-flex align-items-center\">\n            <h3 class=\"mb-0 pb-0 pr-1\">10:00</h3> AM\n          </div>\n          <div class=\"col-6 text-right\">\n            12-jun-2021\n          </div>\n        </div>\n      </div>\n      <div class=\"card-actions clearfix pt-2 pb-2 text-center\">\n        <a href=\"admin/form-view-info\" class=\"btn btn-info btn-rounded btn-sm pl-4 pr-4\">View Details</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"card-wrapper\">\n      <div class=\"card clearfix bg-dark2\">\n        <img src=\"../../../assets/images/thumbs/user12.png\" class=\"img-responsive rounded card-avatar mb-1 pb-0\" alt=\"Arise Admin\">\n        <p>Victor Erixon</p>\n        <h4 class=\"shadow_none mb-0 pb-0\">User Id</h4>\n        <div class=\"row pt-1 d-flex align-items-center\">\n          <div class=\"col-6 text-left d-flex align-items-center\">\n            <h3 class=\"mb-0 pb-0 pr-1\">10:00</h3> AM\n          </div>\n          <div class=\"col-6 text-right\">\n            12-jun-2021\n          </div>\n        </div>\n      </div>\n      <div class=\"card-actions clearfix pt-2 pb-2 text-center\">\n        <a href=\"admin/form-view-info\" class=\"btn btn-info btn-rounded btn-sm pl-4 pr-4\">View Details</a>\n      </div>\n    </div>\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "Kqc8":
    /*!*****************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Kqc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "LIPl":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function LIPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-8\">\n        <div class=\"page-title\">\n          <h3>Dashboard</h3>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <ul class=\"right-stats\" id=\"mini-nav-right\">\n          \n          <li>\n            <a href=\"javascript:void(0)\" class=\"btn btn-info\"><i class=\"fa fa-download\"></i> Export</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <!-- Row starts -->\n  <div class=\"row gutter\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href='/admin/forms_type'>\n      <div class=\"panel yellow_panel text_black all_black\">\n        <div class=\"social-details clearfix\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon red-icon\">\n              <i class=\"icon-calendar\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\" >\n            <h2><span id=\"\" class=\"odometer\">0</span> </h2>\n            <p>Received Forms</p>\n          </div>\n        </div>\n      </div>\n      </a>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <a href='/admin/forms_type'>\n      <div class=\"panel yellow_panel text_black all_black\">\n        <div class=\"social-details clearfix\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon yellow-icon\">\n              <i class=\"icon-tools\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"\" class=\"odometer\">0</span></h2>\n            <p>Approved Forms</p>\n        \n          </div>\n        </div>\n      </div>\n    </a>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" >\n\n      <a href='/admin/forms_type'>\n      <div class=\"panel yellow_panel text_black all_black\">\n        <div class=\"social-details clearfix\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon green-icon\">\n              <i class=\"icon-briefcase\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"\" class=\"odometer\">0</span></h2>\n            <p>Rejected forms</p>\n          \n          </div>\n        </div>\n      </div>\n      </a>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" >\n      <a href='/admin/forms_type'>\n      <div class=\"panel yellow_panel text_black all_black\">\n        <div class=\"social-details clearfix\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon blue-icon\">\n              <i class=\"icon-presentation\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"\" class=\"odometer\">0</span></h2>\n            <p>Export pdf</p>\n         \n          </div>\n        </div>\n      </div>\n      </a>\n    </div>\n  </div>\n  <!-- Row ends -->\n\n  <!-- Row starts -->\n  <div class=\"row gutter\">\n    <div class=\"col-lg-9  col-sm-12 col-xs-12\">\n      <div class=\"panel height2 border_yellow text_black\">\n        <div class=\"panel-heading\">\n          <h4>Audience Overview</h4>\n        </div>\n        <div class=\"panel-body\">\n          <div id=\"audienceOverview\" class=\"chart-height1\"></div>\n          <h1 class=\"audience-total\"><i class=\"icon-triangle-up\"></i>0<span>/ today</span></h1>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"col-lg-3  col-sm-12 col-xs-12\">\n      \n        <div class=\"panel height1 yellow_panel text_black\">\n                          <div class=\"panel-heading\">\n                              <h4>Users</h4>\n                          </div>\n                          <div class=\"panel-body\">\n                              <div class=\"sessions\">\n                                  <h2>0</h2>\n                                  <div id=\"users\" class=\"graph\"></div>\n                              </div>\n                          </div>\n                      </div>\n        \n        <div class=\"panel height1 yellow_panel text_black\">\n                          <div class=\"panel-heading\">\n                              <h4>Visits</h4>\n                          </div>\n                          <div class=\"panel-body\">\n                              <div class=\"sessions\">\n                                  <h2>0</h2>\n                                  <div id=\"bouncerate\" class=\"graph\"></div>\n                              </div>\n                          </div>\n                      </div>\n      \n    </div>\n  </div>\n  <!-- Row ends -->\n\n  <!-- Row starts -->\n  <div class=\"row gutter mb-3\">\n    \n    <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n      <div class=\"panel h-100 border_yellow text_black\">\n        <div class=\"panel-heading\">\n          <h4>Accounts</h4>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"chart-height3\" id=\"bankAccounts\">\n            <svg></svg>\n          </div>\n          <ul class=\"bank-balance clearfix\">\n            <li>Credit: <span class=\"text-green\"> $0</span></li>\n            <li>Debit: <span class=\"text-red\"> $0</span></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n      \n          <div class=\"panel h-100 border_yellow text_black\">\n            <div class=\"panel-heading\">\n              <h4>Subscribed Users</h4>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"chart-horiz clearfix\">\n                <ul class=\"sales-bar chart\">\n                  <li class=\"current\" title=\"Trails\"><span class=\"bar\" data-number=\"5679\"></span><span class=\"number\">0</span></li>\n                  <li class=\"current\" title=\"Subscriptions\"><span class=\"bar\" data-number=\"3458\"></span><span class=\"number\">0</span></li>\n                  <li class=\"current\" title=\"Expansions\"><span class=\"bar\" data-number=\"1934\"></span><span class=\"number\">0</span></li>\n                </ul>\n              </div>\n            </div>\n          \n                      \n      \n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n      \n      \n\n      <div class=\"panel h-100 border_yellow text_black\">\n        <div class=\"panel-heading\">\n          <h4>Customer Rating</h4>\n        </div>\n        <div class=\"customer-satisfaction\">\n          <i class=\"icon-thumbs-up\"></i>\n          <h2>0</h2>\n          <p>of customers would recommended this App.</p>\n        </div>\n        <div id=\"customerRating\" class=\"chart-height4\"></div>\n      </div>\n    \n  </div>\n  </div>\n  <!-- Row ends -->\n\n  <!-- Row starts -->\n  <div class=\"row gutter\">\n\n    <div class=\"col-lg-5 col-md-4 col-sm-6\">\n      <div class=\"panel h-100 yellow_panel text_black\">\n        <div class=\"panel-heading\">\n          <h4>App Downloads</h4>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"app-downloads\">\n            <li>\n              <p class=\"clearfix\">\n                <i class=\"icon-appleinc\"></i>IOS<span>0</span>\n              </p>\n              <div class=\"progress progress-md\">\n                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"89\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 89%\">\n                  <span class=\"sr-only\">89% Complete (success)</span>\n                </div>\n              </div>\n            </li>\n            <li>\n              <p class=\"clearfix\">\n                <i class=\"icon-android\"></i>Android<span>0</span>\n              </p>\n              <div class=\"progress progress-md\">\n                <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 55%\">\n                  <span class=\"sr-only\">55% Complete (success)</span>\n                </div>\n              </div>\n            </li>\n         \n           \n          </ul>\n        </div>\n      </div>\n    \n    </div>\n    <div class=\"col-lg-5 col-md-4 col-sm-6\">\n      <div class=\"panel h-100 yellow_panel text_black\">\n        <div class=\"panel-heading\">\n          <h4>Transactions</h4>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"transactions\">\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span class=\"tra-icon\">\n                  <i class=\"icon-shield3 text-red\"></i>\n                </span>\n                <span class=\"tra-type\">Day Income</span>\n                <span class=\"tra-amount text-green\">0</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span class=\"tra-icon\">\n                  <i class=\"icon-aircraft text-green\"></i>\n                </span>\n                <span class=\"tra-type\">Week Income</span>\n                <span class=\"tra-amount text-red\">0</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span class=\"tra-icon\">\n                  <i class=\"icon-shopping-cart text-blue\"></i>\n                </span>\n                <span class=\"tra-type\">Shopping</span>\n                <span class=\"tra-amount text-red\">0</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span class=\"tra-icon\">\n                  <i class=\"icon-bowl text-yellow\"></i>\n                </span>\n                <span class=\"tra-type\">Month Income</span>\n                <span class=\"tra-amount text-red\">0</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span class=\"tra-icon\">\n                  <i class=\"icon-pig text-red\"></i>\n                </span>\n                <span class=\"tra-type\">Year Income</span>\n                <span class=\"tra-amount text-green\">0</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-4 col-sm-12\">\n      <div class=\"panel h-100\">\n        <div class=\"panel-heading\">\n          <h4>Social Engagement</h4>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"social-engagement clearfix row\">\n            <li class=\"fb col-12\">\n              <a href=\"javascript:void(0)\">\n                <i class=\"icon-facebook-with-circle\"></i>\n              </a>\n              <span>0</span>\n\n            </li>\n            <li class=\"tw col-12 mt-3\">\n              <a href=\"javascript:void(0)\">\n                <i class=\"icon-instagram-with-circle\"></i>\n              </a>\n              <span>0</span>\n\n            </li>\n            <li class=\"gplus col-12 mt-3\">\n              <a href=\"javascript:void(0)\">\n                <i class=\"icon-youtube-with-circle\"></i>\n              </a>\n              <span>0</span>\t\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n  <!-- Row ends -->\n";
      /***/
    },

    /***/
    "MDYv":
    /*!***************************************************************!*\
      !*** ./src/app/admin/report-download/report-download.page.ts ***!
      \***************************************************************/

    /*! exports provided: ReportDownloadPage */

    /***/
    function MDYv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportDownloadPage", function () {
        return ReportDownloadPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_download_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-download.page.html */
      "7ZOx");
      /* harmony import */


      var _report_download_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-download.page.scss */
      "gMl4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportDownloadPage = /*#__PURE__*/function () {
        function ReportDownloadPage() {
          _classCallCheck(this, ReportDownloadPage);
        }

        _createClass(ReportDownloadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportDownloadPage;
      }();

      ReportDownloadPage.ctorParameters = function () {
        return [];
      };

      ReportDownloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-download',
        template: _raw_loader_report_download_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_download_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportDownloadPage);
      /***/
    },

    /***/
    "NEOy":
    /*!***************************************************************!*\
      !*** ./src/app/admin/form-view-info/form-view-info.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function NEOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXZpZXctaW5mby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "PKyY":
    /*!*******************************************************!*\
      !*** ./src/app/admin/sub-vendor/sub-vendor.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PKyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItdmVuZG9yLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "PqlN":
    /*!*******************************************!*\
      !*** ./src/app/admin/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function PqlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "bKhG");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "kTi0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, route, formBuilder, auth, storage) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.storage = storage;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            if (this.storage.user) {
              this.router.navigateByUrl('/dashboard');
            }

            this.initForm(); // redirect back to the returnUrl before login

            this.route.queryParams.subscribe(function (params) {
              _this5.returnUrl = params.returnUrl || '/dashboard';
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            var controls = this.loginForm.controls;
            var authData = {
              email: controls.email.value,
              password: controls.password.value
            };
            this.auth.login(authData).subscribe(function (res) {
              _this6.storage.user = res.user;
              _this6.storage.authToken = res.key.token;

              _this6.router.navigateByUrl(_this6.returnUrl); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "Pun8":
    /*!*******************************************!*\
      !*** ./src/app/admin/forms/forms.page.ts ***!
      \*******************************************/

    /*! exports provided: FormsPage */

    /***/
    function Pun8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPage", function () {
        return FormsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forms.page.html */
      "uwBU");
      /* harmony import */


      var _forms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms.page.scss */
      "DCCW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormsPage = /*#__PURE__*/function () {
        function FormsPage() {
          _classCallCheck(this, FormsPage);
        }

        _createClass(FormsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormsPage;
      }();

      FormsPage.ctorParameters = function () {
        return [];
      };

      FormsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forms',
        template: _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormsPage);
      /***/
    },

    /***/
    "RKm8":
    /*!*********************************************************!*\
      !*** ./src/app/admin/announcement/announcement.page.ts ***!
      \*********************************************************/

    /*! exports provided: AnnouncementPage */

    /***/
    function RKm8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementPage", function () {
        return AnnouncementPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_announcement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./announcement.page.html */
      "togD");
      /* harmony import */


      var _announcement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcement.page.scss */
      "84xZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AnnouncementPage = /*#__PURE__*/function () {
        function AnnouncementPage() {
          _classCallCheck(this, AnnouncementPage);
        }

        _createClass(AnnouncementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AnnouncementPage;
      }();

      AnnouncementPage.ctorParameters = function () {
        return [];
      };

      AnnouncementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcement',
        template: _raw_loader_announcement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AnnouncementPage);
      /***/
    },

    /***/
    "SPow":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function SPow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-sm-12\">\n            <div class=\"page-title\">\n                <h3>{{menu}} USER DETAIL</h3>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n\n\n\n\n\n\n<div class=\"row user_profile\">\n\n    <div class=\"col-md-3 user_profile_list\">\n\n        <div class=\"panel yellow_panel text_black all_black users-wrapper red mb-3\" *ngFor=\"let user of users\">\n            <div class=\"users-info clearfix\">\n                <div class=\"users-avatar\">\n                    <img src=\"{{user.profile_img || '../../../assets/images/thumbs/user6.png'}}\" class=\"img-fluid\" alt=\"User\">\n                </div>\n                <div class=\"users-detail\">\n                    <h5>{{user.profile_first_name}} {{user.profile_last_name}}</h5>\n                    <p>{{user.profile_biz_name}}</p>\n                </div>\n            </div>\n            <ul class=\"users-footer clearfix\">\n                <li>\n                    <p class=\"light\">Location</p>\n                    <p>{{user.profile_location}}</p>\n                </li>\n                <li>\n                    <p class=\"light\">Contact</p>\n                    <p>{{user.profile_contact}}</p>\n                </li>\n                <li>\n                    <a href=\"admin/users/{{user.profile_id}}\" class=\"add-btn added\">\n                        <i class=\"icon-plus3\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n    <div class=\"col-md-9 up_right\" *ngIf=\"profile\">\n\n\n\n        <!-- ///////////////// Dashboard ///////////// -->\n\n\n        <div class=\"row gutter\">\n            <div class=\"col-lg-5 col-md-5 col-sm-9 col-xs-12\">\n                <div class=\"panel height2 random-bg-five\">\n                    <div class=\"panel-body\">\n                       \n                        <div class=\"user-profile clearfix\">\n                            <div class=\"user-img\">\n                                <img src=\"../../../assets/images/thumbs/user1.png\" alt=\"User Info\">\n                                <!-- <img *ngIf=\"profile.profile_img\" src=\"{{profile.profile_img}}\" alt=\"User Info\"> -->\n                            </div>\n                            <h3>Mohammed Imtiyas</h3>\n                            <h4>98765432110</h4>\n                            <h4>m@gmail.com</h4>\n                            <h4>Date of Joining - 20-10-2020</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n              <!-- <div class=\"\" style=\"background-color: #c3807cb8;\">\n              <div class=\"container\" style=\"z-index: -1;margin-left: -4%;width: 108%;\">\n                  <agm-map [latitude]=\"base_lat\" [longitude]=\"base_lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\"\n                  [zoomControl]=\"false\">\n                  <agm-marker [latitude]=\"location_lat\" [longitude]=\"location_lng\" [markerDraggable]=\"true\">\n                    <agm-info-window>\n                    </agm-info-window>\n                  </agm-marker>\n                  </agm-map>\n                </div>\n                <div class=\"bottom-left\" style=\"width: 90%;\"><h5 class=\"location\" style=\"color: white;font-weight: 700;\">{{profile.profile_location}}</h5></div>\n                <h4 class=\"top-left\"><i style=\"font-size: 22px;\" class=\"icon-location icon-2x\"></i>Location</h4>\n                <div class=\"top-right\"><a class=\"\" href=\"/common/user-profile\"> <i class=\"fa fa-pencil\" style=\"font-size: 20px;\"></i></a></div>\n              </div> -->\n          \n          \n          \n                <div class=\"panel p-2 height2 random-bg-six\">\n                    <div class=\"panel-body no-padding text_black\">\n                        <div class=\"current-location\">\n                            <h4 class=\"text-white no-margin\"><i class=\"icon-location icon-2x\"></i> Location</h4>\n                           \n                            <!-- <div id=\"mapDenmark\" class=\"chart-height1\" #worldMapElement></div> -->\n                            <div class=\"text-center\">\n                                <img src=\"\" alt=\"\" height=\"200px\">\n                            </div>\n                            <!-- <h5 class=\"location text_black position-relative pl-2 pb-2\">{{profile.city}}, {{profile.state}}, {{profile.country}}</h5> -->\n                          <h5 class=\"location text_black position-relative pl-2 pb-2\">Muthamil nager Kodugaiyur chennai</h5>\n          \n                            \n                          </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 text_black\">\n                <!-- Row inside row starts -->\n                <div class=\"row gutter\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-6\">\n                      <a  href=\"admin/live_video/10\">\n                        <div class=\"panel height1 random-bg-two\">\n                            <div class=\"panel-body text-center\">\n                           \n                                <div class=\"user-stats\">\n                                    <h1>10</h1>\n                                    <h5>Total Live Videos</h5>\n                                </div>\n                           \n                            </div>\n                        </div>\n                      </a>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-6\">\n                        <div class=\"panel height1 random-bg-four\">\n                            <div class=\"panel-body text-center\">\n                                <div class=\"user-stats\">\n                                    <h1>0</h1>\n                                    <h5>Total Followers</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        \n                            <div class=\"panel height1\">\n                                <div class=\"row gutter h-100 align-items-end\">\n                                    <div class=\"col-md-4 col-xs-12\">\n                                        <a href=\"#\" class=\"socail-stats fb-bg\">\n                                            <i class=\"icon-facebook-with-circle icon-2x\"></i>\n                                            <h4>0</h4>\n                                        </a>\n                                    </div>\n                                    <div class=\"col-md-4  col-sm-3 col-xs-12\">\n                                        <a href=\"#\" class=\"socail-stats tw-bg\">\n                                            <i class=\"icon-instagram-with-circle icon-2x\"></i>\n                                            <h4>0</h4>\n                                        </a>\n                                    </div>\n                                    <div class=\"col-md-4  col-sm-3 col-xs-12\">\n                                        <a href=\"#\" class=\"socail-stats gplus-bg\">\n                                            <i class=\"icon-youtube-with-circle icon-2x\"></i>\n                                            <h4>0</h4>\n                                        </a>\n                                    </div>\n                                   \n                                </div>\n                            </div>\n                        \n                    </div>\n                    \n                </div>\n                <!-- Row inside row ends -->\n            </div>\n          </div>\n          <!-- Row ends -->\n          <!-- Row starts -->\t\t\t\t\n          <div class=\"row gutter\">\n            <div class=\"col-lg-7 col-md-8 col-xs-12\">\n                <!-- Row inside row starts -->\n                <div class=\"panel summary_bg h-100\">\n                  <div class=\"panel-body\">\n                      <h3> Summary</h3>\n                       <a class=\"edit edit_fix\" (click)=\"edit_summary_action()\"> <i class=\"fa fa-pencil\"></i></a>\n                       <div class=\"\" *ngIf=\"!edit_summary\">\n                      <p class=\"text-justify\">Testing Summary</p>\n                      </div>\n          \n                      <div class=\"\" *ngIf=\"edit_summary\">\n                          <textarea class=\"form-control bg-transparent\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"summary_value\" value=\"Testing Summary\"></textarea>\n                          <button class=\"btn btn-success\" (click)=\"edit_submit()\" >submit</button>\n                      </div>\n          \n          \n          \n          \n                  </div>\n              </div>\n                <!-- Row inside row ends -->    \n            </div>\n            <div class=\"col-lg-5 col-md-4 col-xs-12\">\n                <!-- Row inside row starts -->\n                <div class=\"row gutter\">\n                  <div class=\"bank_card w-100 h-100 position-relative overflow_auto\">\n                      <div class=\"bank_card_row position-relative text-white\">\n                          <div class=\"d-flex align-items-center p-3\">\n                              <div class=\"flx_0\">\n                                  <img alt=\"\" src=\"../../../assets/images/144x144.png\" style=\"width: 100px;\">\n                              </div>\n                              <div class=\"flx_1\">\n                                  <div class=\"bank_name_card card_row\"><input type=\"text\" placeholder=\"Indian Bank\" disabled class=\"card_input w-100 txt_bold\"></div>\n                                 \n                              </div>\n                          </div>\n                        \n                          <div class=\"account_card card_row\"><input type=\"text\" placeholder=\"Indian Bank\" disabled  class=\"card_input w-100 txt_bold\"></div>\n                          <div class=\"row card_row align-items-center\">\n                              <div class=\"col-5\">\n                                  <div class=\"account_spec\"><input type=\"text\" placeholder=\"Indian Bank\" disabled class=\"card_input w-100 txt_bold\"></div>\n                              </div>\n                              <div class=\"col-7\">\n                                  <div class=\"card_expiry\"><input type=\"text\" placeholder=\"Indian Bank\" disabled class=\"card_input w-100 text-right txt_bold\"></div>\n                              </div>\n                          </div>\n                          <div class=\"card_holder_name card_row\">\n                              <div class=\"row\">\n                                  <div class=\"col-lg-7\">\n                                      <input type=\"text\" placeholder=\"Mohammed Imthiyas\" disabled  class=\"card_input w-100 txt_bold\">\n                                  </div> \n                                  <!-- <div class=\"col-lg-5 pr-3 text-right\">\n                                      \n                                      <input placeholder=\"country\" class=\"card_input w-100 text-right txt_bold\" type=\"text\"/>\n                                  </div> -->\n                              </div>\n                            \n                          </div>\n                      </div>\n                  </div>\n                </div>\n                <!-- Row inside row ends -->\n          \n          \n                <!-- <div class=\"panel\">\n                    <div class=\"panel-body height2\">\n                        <h4><i class=\"icon-file-text2 icon-2x text-blue\"></i> Recent Reviews</h4>\n                        <ul class=\"contacts\">\n                            <li class=\"client clearfix\">\n                                <img src=\"../../../assets/images/thumbs/user4.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                                <div class=\"client-details\">\n                                    <p>\n                                        <span class=\"name\">Jeffery</span>\n                                        <span class=\"email\">mail.jeff@mail.ro</span>\n                                    </p>\n                                    <ul class=\"icons-nav\">\n                                        <li>\n                                            <a href=\"javascript:void(0)\">\n                                                <i class=\"icon-speech-bubble text-red\"></i>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li>\n                            <li class=\"client clearfix\">\n                                <img src=\"../../../assets/images/thumbs/user5.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                                <div class=\"client-details\">\n                                    <p>\n                                        <span class=\"name\">Lisa</span>\n                                        <span class=\"email\">id.lisa@mail.io</span>\n                                    </p>\n                                    <ul class=\"icons-nav\">\n                                        <li>\n                                            <a href=\"javascript:void(0)\">\n                                                <i class=\"icon-speech-bubble text-yellow\"></i>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li>\n                            <li class=\"client clearfix\">\n                                <img src=\"../../../assets/images/thumbs/user10.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                                <div class=\"client-details\">\n                                    <p>\n                                        <span class=\"name\">John</span>\n                                        <span class=\"email\">johnvvn@mail.ro</span>\n                                    </p>\n                                    <ul class=\"icons-nav\">\n                                        <li>\n                                            <a href=\"javascript:void(0)\">\n                                                <i class=\"icon-speech-bubble text-green\"></i>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li>\n                            <li class=\"client clearfix\">\n                                <img src=\"../../../assets/images/thumbs/user6.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                                <div class=\"client-details\">\n                                    <p>\n                                        <span class=\"name\">Steve</span>\n                                        <span class=\"email\">steeve@mail.com</span>\n                                    </p>\n                                    <ul class=\"icons-nav\">\n                                        <li>\n                                            <a href=\"javascript:void(0)\">\n                                                <i class=\"icon-speech-bubble text-blue\"></i>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div> -->\n          \n                <!-- <div class=\"panel\">\n                    <div class=\"panel-body height2\">\n                        <h4><i class=\"icon-file-text2 icon-2x text-blue\"></i> Joining Date</h4>\n                        <ul class=\"experience\">\n                            <li class=\"green\">\n                                <div class=\"detail-info\">\n                                    <p class=\"date text-green\">2014 - present</p>\n                                    <p class=\"message\">Co-Founder, Chairman</p>\n                                    <p class=\"message\">Arise Inc</p>\n                                </div>\n                            </li>\n                            <li class=\"red\">\n                                <div class=\"detail-info\">\n                                    <p class=\"date text-red\">2010 - 2013</p>\n                                    <p class=\"message\">Senior Developer</p>\n                                    <p class=\"message\">Facebook</p>\n                                </div>\n                            </li>\n                            <li class=\"blue\">\n                                <div class=\"detail-info\">\n                                    <p class=\"date text-blue\">1996 - 2004</p>\n                                    <p class=\"message\">Web Designer</p>\n                                    <p class=\"message\">Google Inc</p>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div> -->\n          \n            </div>\n          \n          <!-- Row ends -->\n          </div>\n          \n\n\n        <!-- /////////////Dashboard /////////////// -->\n\n\n      \n\n        <div class=\"panel\">\n            <h4 class=\"text-left text-red pt-3 pb-1\">Sub Vendors Info</h4>\n\n\n            <div class=\"row gutter\">\n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                \n                  <div class=\"panel yellow_panel text_black users-wrapper red\">\n                  \n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/./../../../../assets/images/thumbs/user6.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>Fraser Davidson</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>Canada</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>767336672</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                  \n                </div>\n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                  <div class=\"panel yellow_panel text_black users-wrapper\">\n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/images/thumbs/user5.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>Fraser Davidson</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>France</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>8723236672</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                \n                \n                \n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                  <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/images/thumbs/user13.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>David Lanham</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>Japan</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>8888236678</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            \n            <div class=\"d-none\">\n                <div class=\"panel panel-red pt-0\">\n                    <div class=\"panel-heading mb-0 pb-0\">\n                        <h4 class=\"text-left\">Recently Add</h4>\n                    </div>\n                    <div class=\"panel-body table-responsive pb-0 td_nw\">\n                        <table class=\"table no-margin text-center\">\n                            <thead>\n                                <tr>\n                                    <th>Vendor Company Name &amp; Id</th>\n                                    <th>Sub Vendor ID</th>\n                                    <th>Name</th>\n                                    <th>Gender</th>\n                                    <th>D.O.B</th>\n                                    <th>City</th>\n                                    <th>Contact Number</th>\n                                    <th>Email</th>\n                                    <th>Address</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <ng-container *ngFor=\"let vendor of sub_vendors\">\n                                <tr>\n                                    <td>\n                                        <!-- <a href=\"\">\n                                            <div>\n                                                <i class=\"icon-info2 icon-2x\"></i>\n                                            </div> -->\n                                            {{profile.profile_biz_name}} &amp; {{profile.biz_id}}\n                                        <!-- </a> -->\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                         ID : {{vendor.profile_id}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_first_name}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_gender}}\n\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_dob}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_location}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_contact}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_email}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        {{vendor.profile_address}}\n                                    </td>\n                                    <td>\n                                        <!-- <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div> -->\n                                        <a href=\"admin/vendor_edit/{{vendor.profile_id}}\">\n                                            <button>Edit</button>\n                                        </a>\n                                        \n                                    </td>\n                                </tr>\n                            </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel\">\n            <h4 class=\"text-left text-green pt-3 pb-1\">Premium Users Info</h4>\n\n            <div class=\"row gutter\">\n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                \n                  <div class=\"panel yellow_panel text_black users-wrapper red\">\n                  \n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/./../../../../assets/images/thumbs/user6.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>Fraser Davidson</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>Canada</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>767336672</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                  \n                </div>\n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                  <div class=\"panel yellow_panel text_black users-wrapper\">\n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/images/thumbs/user5.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>Fraser Davidson</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>France</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>8723236672</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                \n                \n                \n                <div class=\"col-md-4 col-sm-6 col-xs-12 mb-3\">\n                  <div class=\"panel yellow_panel text_black users-wrapper yellow\">\n                    <div class=\"users-info clearfix\">\n                      <div class=\"users-avatar\">\n                        <img src=\"./../../../../assets/images/thumbs/user13.png\" class=\"img-fluid\" alt=\"Arise Admin\">\n                      </div>\n                      <div class=\"users-detail\">\n                        <h5>David Lanham</h5>\n                        <p>UX Designer</p>\n                      </div>\n                    </div>\n                    <ul class=\"users-footer clearfix\">\n                      <li>\n                        <p class=\"light\">Location</p>\n                        <p>Japan</p>\n                      </li>\n                      <li>\n                        <p class=\"light\">Contact</p>\n                        <p>8888236678</p>\n                      </li>\n                      <li>\n                        <a href=\"VendorUsers.html\" class=\"add-btn added\">\n                          <i class=\"icon-plus3\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n\n            <div class=\"d-none\">\n                <div class=\"panel panel-red pt-0\">\n                    <div class=\"panel-heading mb-0 pb-0\">\n                        <h4 class=\"text-left\">Recently Add</h4>\n                    </div>\n                    <div class=\"panel-body table-responsive pb-0 td_nw\">\n                        <table class=\"table no-margin text-center\">\n                            <thead>\n                                <tr>\n                                    <th>Vendor Company Name &amp; Id</th>\n                                    <th>Sub Vendor ID</th>\n                                    <th>Name</th>\n                                    <th>Gender</th>\n                                    <th>D.O.B</th>\n                                    <th>City</th>\n                                    <th>Contact Number</th>\n                                    <th>Email</th>\n                                    <th>Address</th>\n                                    <th>Bank Card</th>\n                                    <th>Social Media</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Vendor Company Name &amp; Id\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Sub Vendor ID\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Name\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Gender\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        D.O.B\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        City\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Contact Number\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Email\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Address\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-info2 icon-2x\"></i>\n                                        </div>\n                                        Bank Card\n                                    </td>\n                                    <td>\n                                        <div>\n                                            <i class=\"icon-facebook2 icon-1x\"></i>\n                                        </div>\n                                        Social Media\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "SaTQ":
    /*!*********************************************!*\
      !*** ./src/app/admin/users/users.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function SaTQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Vtmq":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/vendor-edit/vendor-edit.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vtmq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n              <h3>Update User Profile</h3>\n          </div>\n      </div>\n\n  </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"announc_form\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" >\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">First Name</label>\n                                  <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Last Name</label>\n                                  <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Business Name</label>\n                                  <input type=\"text\" formControlName=\"businessName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.businessName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.businessName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.businessName.errors.required\">Business Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Mobile No</label>\n                                  <input type=\"text\" formControlName=\"mobile\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"\n                                      placeholder=\"Mobile\" />\n                                  <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.mobile.errors.required\">Mobile No is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Email</label>\n                                  <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\n                                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Address</label>\n                                  <textarea formControlName=\"address\" style=\"height: 100px;\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                      placeholder=\"Address\"></textarea>\n                                  <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Location</label>\n                                  <textarea formControlName=\"location\" style=\"height: 70px;\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\"\n                                      placeholder=\"Location\"></textarea>\n                                  <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">D.O.B</label>\n                                  <input type=\"text\" formControlName=\"dob\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\"\n                                      placeholder=\"Date of birth\" />\n                                  <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.dob.errors.required\">D.O.B is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"summary\">Summary</label>\n                                  <input type=\"text\" formControlName=\"summary\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.summary.errors }\"\n                                      placeholder=\"Summary\" />\n                                  <div *ngIf=\"submitted && f.summary.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.summary.errors.required\">Summary is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Facebook</label>\n                                  <input type=\"text\" formControlName=\"facebook\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.facebook.errors }\"\n                                      placeholder=\"Facebook\" />\n                                  <div *ngIf=\"submitted && f.facebook.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.facebook.errors.required\">Facebook is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Twitter</label>\n                                  <input type=\"text\" formControlName=\"twitter\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.twitter.errors }\"\n                                      placeholder=\"Twitter\" />\n                                  <div *ngIf=\"submitted && f.twitter.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.twitter.errors.required\">Twitter is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Instagram</label>\n                                  <input type=\"text\" formControlName=\"instagram\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.instagram.errors }\"\n                                      placeholder=\"Instagram\" />\n                                  <div *ngIf=\"submitted && f.instagram.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.instagram.errors.required\">Instagram is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Upload Profile Image</label>\n                                  <input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"selectImg($event)\"/>\n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" (click)=\"uploadImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"text-center pb-2\">\n                  <button type=\"submit\" class=\"btn btn-success mr-2\">Save</button>\n                  <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n              </div>\n          </form>\n      </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "VzVd":
    /*!*******************************************************************!*\
      !*** ./src/app/admin/report-generation/report-generation.page.ts ***!
      \*******************************************************************/

    /*! exports provided: ReportGenerationPage */

    /***/
    function VzVd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportGenerationPage", function () {
        return ReportGenerationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_generation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-generation.page.html */
      "pwnP");
      /* harmony import */


      var _report_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-generation.page.scss */
      "BCjq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportGenerationPage = /*#__PURE__*/function () {
        function ReportGenerationPage() {
          _classCallCheck(this, ReportGenerationPage);
        }

        _createClass(ReportGenerationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportGenerationPage;
      }();

      ReportGenerationPage.ctorParameters = function () {
        return [];
      };

      ReportGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-generation',
        template: _raw_loader_report_generation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportGenerationPage);
      /***/
    },

    /***/
    "Y22x":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-vendor/sub-vendor.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y22x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n              <h3>Create New Sub Vendor Form</h3>\n          </div>\n      </div>\n\n  </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"announc_form\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" >\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">First Name</label>\n                                  <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Last Name</label>\n                                  <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Business Name</label>\n                                  <input type=\"text\" formControlName=\"businessName\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.businessName.errors }\"\n                                      placeholder=\"Name\" />\n                                  <div *ngIf=\"submitted && f.businessName.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.businessName.errors.required\">Business Name is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Mobile No</label>\n                                  <input type=\"text\" formControlName=\"mobile\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\"\n                                      placeholder=\"Mobile\" />\n                                  <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.mobile.errors.required\">Mobile No is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Email</label>\n                                  <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\n                                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Address</label>\n                                  <textarea formControlName=\"address\" style=\"height: 100px;\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                      placeholder=\"Address\"></textarea>\n                                  <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Location</label>\n                                  <textarea formControlName=\"location\" style=\"height: 70px;\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\"\n                                      placeholder=\"Location\"></textarea>\n                                  <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">D.O.B</label>\n                                  <input type=\"text\" formControlName=\"dob\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\"\n                                      placeholder=\"Date of birth\" />\n                                  <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.dob.errors.required\">D.O.B is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"summary\">Summary</label>\n                                  <input type=\"text\" formControlName=\"summary\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.summary.errors }\"\n                                      placeholder=\"Summary\" />\n                                  <div *ngIf=\"submitted && f.summary.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.summary.errors.required\">Summary is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Facebook</label>\n                                  <input type=\"text\" formControlName=\"facebook\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.facebook.errors }\"\n                                      placeholder=\"Facebook\" />\n                                  <div *ngIf=\"submitted && f.facebook.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.facebook.errors.required\">Facebook is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Twitter</label>\n                                  <input type=\"text\" formControlName=\"twitter\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.twitter.errors }\"\n                                      placeholder=\"Twitter\" />\n                                  <div *ngIf=\"submitted && f.twitter.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.twitter.errors.required\">Twitter is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Instagram</label>\n                                  <input type=\"text\" formControlName=\"instagram\" class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.instagram.errors }\"\n                                      placeholder=\"Instagram\" />\n                                  <div *ngIf=\"submitted && f.instagram.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.instagram.errors.required\">Instagram is required</div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Upload Profile Image</label>\n                                  <input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"selectImg($event)\"/>\n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" (click)=\"uploadImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"text-center pb-2\">\n                  <button type=\"submit\" class=\"btn btn-success mr-2\">Save</button>\n                  <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n              </div>\n          </form>\n      </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "YRqn":
    /*!***************************************************!*\
      !*** ./src/app/admin/form-view/form-view.page.ts ***!
      \***************************************************/

    /*! exports provided: FormViewPage */

    /***/
    function YRqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormViewPage", function () {
        return FormViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-view.page.html */
      "JHbN");
      /* harmony import */


      var _form_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-view.page.scss */
      "mJlB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormViewPage = /*#__PURE__*/function () {
        function FormViewPage() {
          _classCallCheck(this, FormViewPage);
        }

        _createClass(FormViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormViewPage;
      }();

      FormViewPage.ctorParameters = function () {
        return [];
      };

      FormViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-view',
        template: _raw_loader_form_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormViewPage);
      /***/
    },

    /***/
    "ZVlM":
    /*!*****************************************************!*\
      !*** ./src/app/admin/user-list/user-list.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ZVlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".users-wrapper ul.users-footer li .add-btn {\n  transition: all 0.3s ease-in-out;\n  float: right;\n  border-radius: 30px;\n  background: #353C48;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  display: block;\n}\n\n.active_user_list * {\n  text-shadow: none !important;\n  color: #ffffff;\n  padding-top: 4px;\n}\n\n.users-wrapper ul.users-footer li .add-btn.added {\n  background: #A9BD7A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxtQkFBQTtBQURKIiwiZmlsZSI6InVzZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtd3JhcHBlciB1bC51c2Vycy1mb290ZXIgbGkgLmFkZC1idG4ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzNTNDNDg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uYWN0aXZlX3VzZXJfbGlzdCAqIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cblxuLnVzZXJzLXdyYXBwZXIgdWwudXNlcnMtZm9vdGVyIGxpIC5hZGQtYnRuLmFkZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjQTlCRDdBO1xufSJdfQ== */";
      /***/
    },

    /***/
    "afOR":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/video/video.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function afOR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Top Bar Starts -->\n<!-- <div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n              <h3>Live Videos</h3>\n          </div>\n      </div>\n\n  </div>\n</div> -->\n<!-- Top Bar Ends -->\n\n<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>go-live</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<!-- <app-loader *ngIf=\"video_uploading\"></app-loader> -->\n  <!-- Top Bar Starts -->\n  <!-- <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>Go Live</h3>\n            </div>\n        </div>\n\n    </div>\n</div> -->\n<!-- Top Bar Ends -->\n\n<div *ngIf=\"!video_add_status\" >\n\n<!-- <div class=\"d-flex align-items-center justify-content-center flex-row\">\n    <div class=\"text-center pr-3 pl-3\">\n        <a href=\"#\">\n            <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                <i class=\"icon-shopping-cart\"></i>\n            </span>\n            <h5>Go Live</h5>\n        </a>\n    </div>\n\n</div> -->\n\n<div class=\"pt-2\">\n    <div class=\"panel\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <textarea   class=\"terms form-control\" placeholder=\"Video Comments\" disabled>What’s in these terms?\n                    This index is designed to help you understand some of the key updates we’ve made to our Terms of Service (Terms). We hope this serves as a useful guide, but please ensure you read the Terms in full.\n                    \n                    Welcome to YouTube!\n                    This section outlines our relationship with you. It includes a description of the Service, defines our Agreement, and names your service provider.\n                    \n                    Who May Use the Service?\n                    This section sets out certain requirements for use of the Service, and defines categories of users.\n                    \n                    Your Use of the Service\n                    This section explains your rights to use the Service, and the conditions that apply to your use of the Service. It also explains how we may make changes to the Service.\n                    \n                    Your Content and Conduct\n                    This section applies to users who provide Content to the Service. It defines the scope of the permissions that you grant by uploading your Content, and includes your agreement not to upload anything that infringes on anyone else’s rights. \n                    \n                    Account Suspension and Termination\n                    This section explains how you and YouTube may terminate this relationship.\n                    \n                    About Software in the Service\n                    This section includes details about software on the Service.\n                    \n                    Other Legal Terms\n                    This section includes our service commitment to you. It also explains that there are some things we will not be responsible for.\n                    \n                    About this Agreement\n                    This section includes some further important details about our contract, including what to expect if we need to make changes to these Terms; or which law applies to them.</textarea>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"checkbox\"  class=\"largerCheckbox\"  id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\" (change)=\"toggleEditable($event)\"> Agree Terms &amp; Conditions\n                <div class=\"warning\" *ngIf=\"terms\" >\n                    Please accept our terms and conditions\n                </div>\n            </div>\n            \n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"Proceed()\">Proceed Live</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n\n\n\n\n\n<div class=\"announc_form\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\" *ngIf=\"video_add_status\">\n          <form>\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      <div class=\"styled-input-wrapper\">\n                          <div class=\"input-icon\">\n                              <i class=\"icon-file-text2\"></i>\n                          </div>\n                          <div class=\"styled-input\">\n                            <div class=\"form-group\">\n                                <textarea style=\"height: 200px;\" (keyup)=\"searchInterest()\" [(ngModel)]=\"video_comments\" name=\"video_comments\"  class=\"form-control\" placeholder=\"Video Comments\"></textarea>\n                            </div>\n                            <div class=\"warning\" *ngIf=\"comments_error\" >\n                                Comments should not be empty\n                           </div>\n                              <div class=\"form-group\">\n                                  <label for=\"userName\">Upload Video</label>\n                                  <input type=\"file\" class=\"form-control\"  (change)=\"selectImg($event)\"/>\n                              </div>\n                              <div class=\"warning\" *ngIf=\"video_error\" >\n                                Select Video\n                           </div>\n                           <div class=\"warning\" *ngIf=\"video_error1\" >\n                            Please upload the video below 20 mb\n                           </div>\n                           <div class=\"progress mt-3 mb-3\" *ngIf=\"video_uploading\">\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"{{percentDone}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': percentDone_pre}\">{{percentDone}}%</div>\n                          </div>                              \n                              <!-- <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" > <i class=\"icon-plus d-block\"></i> </button>\n                              </div> -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"text-center pb-2\" *ngIf=\"!video_uploading\">\n                  <button type=\"submit\" class=\"btn btn-success mr-2\" (click)=\"uploadImg()\">Save</button>\n                  <button type=\"reset\" class=\"btn btn-danger\" (click)=\"cancel()\" >Cancel or Back</button>\n              </div>\n          </form>\n      </div>\n      <br>\n      <br>\n  </div>\n</div>";
      /***/
    },

    /***/
    "bKhG":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function bKhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <!-- Header starts -->\n  <div class=\"video_home\">\n      <span class=\"video_left_corner\"></span>\n      <span class=\"video_right_corner\"></span>\n      <video autoplay [muted]=\"'muted'\" loop id=\"myVideo\">\n          <source src=\"assets/video/home_video.mp4\" type=\"video/mp4\">\n          Your browser does not support HTML5 video.\n      </video>\n  </div>\n  <div class=\"home_main\">\n\n\n\n\n      <section class=\"home_wrapper\">\n          <div class=\"home_form_row pt-5 pb-4\">\n              <div class=\"container pt-5\">\n                  <div class=\"row\">\n\n\n                      <div class=\"col-md-6\">\n\n                          <div class=\"logo_home pt-4\">\n                              <img style=\"height:180px;\" src=\"assets/images/logo_new.png\" />\n                          </div>\n                          <div class=\"hf_left pt-5\">\n                              <h2 class=\"text-white shadow_none\"><b> PARTNER WITH US</b></h2>\n                              <p class=\"text-white\">\n                                  We're hungry for the best things in life: delicious food, exploring the city and\n                                  bringing\n                                  the first bite of food to our customers.\n                                  foodie is multi-national, fast-growing business that maintains its appeal as\n                                  localised\n                                  service with community ambition.\n                              </p>\n                          </div>\n\n\n\n                      </div>\n                      <div class=\"col-md-6\">\n                          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                          <div class=\"hr_right home_form_list cus_pt_1\">\n                              <h4 class=\"text-white shadow_none pb-2\">\n                                  Sign In to Access Foodie Control Panel\n                              </h4>\n                              <div class=\"form-group\">\n                                  <label class=\"control-label text-white\">Username</label>\n                                  <input type=\"email\" formControlName=\"email\" class=\"form-control input_2\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\n                                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                      <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                      <div *ngIf=\"f.email.errors.pattern\">Email must be a valid email address</div>\n                                  </div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label class=\"control-label text-white\">Password</label>\n                                  <input type=\"password\" formControlName=\"password\" class=\"form-control input_2\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                                  </div>\n                              </div>\n\n                              <div>\n                                  <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                              </div>\n                              <div class=\"text-right pt-3\">\n                                  <a class=\"text-white\" href=\"account/forgot-password\">Forget Password?</a>\n                              </div>\n\n                          </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n\n      </section>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "gMl4":
    /*!*****************************************************************!*\
      !*** ./src/app/admin/report-download/report-download.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function gMl4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtZG93bmxvYWQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "hJwE":
    /*!*******************************************************!*\
      !*** ./src/app/admin/vendor-edit/vendor-edit.page.ts ***!
      \*******************************************************/

    /*! exports provided: VendorEditPage */

    /***/
    function hJwE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorEditPage", function () {
        return VendorEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vendor_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vendor-edit.page.html */
      "Vtmq");
      /* harmony import */


      var _vendor_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vendor-edit.page.scss */
      "w+Z8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var VendorEditPage = /*#__PURE__*/function () {
        function VendorEditPage(router, route, formBuilder, profileservice, storage) {
          _classCallCheck(this, VendorEditPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.profileservice = profileservice;
          this.storage = storage;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        }

        _createClass(VendorEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.route.params.subscribe(function (params) {
              _this7._profileId = params.userid;
            });
            this.profileservice.view(this._profileId).subscribe(function (res) {
              _this7.profile = res;
              console.log(_this7.profile);
              console.log();

              _this7.initForm();
            });
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.profileForm = this.formBuilder.group({
              firstName: [this.profile ? this.profile.profile_first_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              lastName: [this.profile ? this.profile.profile_last_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              businessName: [this.profile ? this.profile.profile_biz_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mobile: [this.profile ? this.profile.profile_contact : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              email: [this.profile ? this.profile.profile_email : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
              location: [this.profile ? this.profile.profile_location : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dob: [this.profile ? this.profile.profile_dob : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address: [this.profile ? this.profile.profile_address : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              summary: [this.profile ? this.profile.profile_summary : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              facebook: [this.profile ? this.profile.profile_facebook : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              twitter: [this.profile ? this.profile.profile_twitter : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              instagram: [this.profile ? this.profile.profile_instagram : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.profileForm.controls;
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.profileImage = event.target.files[0];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            this.submitted = true;

            if (this.profileForm.invalid) {
              return;
            }

            var controls = this.f;
            console.log('controls ', controls);
            var _profile = {
              profile_id: this.profile.profile_id,
              profile_first_name: controls.firstName.value,
              profile_last_name: controls.lastName.value,
              profile_email: controls.email.value,
              profile_biz_name: controls.businessName.value,
              profile_contact: controls.mobile.value,
              profile_address: controls.address.value,
              profile_dob: controls.dob.value,
              profile_location: controls.location.value,
              profile_summary: controls.summary.value,
              profile_facebook: controls.facebook.value,
              profile_instagram: controls.instagram.value,
              profile_twitter: controls.twitter.value
            };
            console.log(_profile);
            this.profileservice.update(_profile).subscribe(function (res) {
              console.log(res);

              _this8.uploadImg(); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            if (this.profileImage) {
              this.profileservice.uploadimage(this.profile.profile_id, this.profileImage).subscribe(function (res) {
                console.log(res);
                alert("Updated Successfully");
              }, function (err) {});
            } else {
              // alert('Select Image');
              alert("Updated Successfully");
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }]);

        return VendorEditPage;
      }();

      VendorEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]
        }];
      };

      VendorEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vendor-edit',
        template: _raw_loader_vendor_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vendor_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VendorEditPage);
      /***/
    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminPageModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageModule", function () {
        return AdminPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-routing.module */
      "0Em7");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");
      /* harmony import */


      var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/dashboard.page */
      "67Aq");
      /* harmony import */


      var _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./announcement/announcement.page */
      "RKm8");
      /* harmony import */


      var _form_view_form_view_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-view/form-view.page */
      "YRqn");
      /* harmony import */


      var _form_view_info_form_view_info_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./form-view-info/form-view-info.page */
      "kLB0");
      /* harmony import */


      var _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./report-download/report-download.page */
      "MDYv");
      /* harmony import */


      var _report_generation_report_generation_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./report-generation/report-generation.page */
      "VzVd");
      /* harmony import */


      var _user_list_user_list_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-list/user-list.page */
      "3OaK");
      /* harmony import */


      var _users_users_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./users/users.page */
      "H+nG");
      /* harmony import */


      var _forms_forms_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./forms/forms.page */
      "Pun8");
      /* harmony import */


      var _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../layout/masterlayout/masterlayout.page */
      "Mmwu");
      /* harmony import */


      var _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../layout/masterheader/masterheader.page */
      "OZ2c");
      /* harmony import */


      var _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../layout/masteraside/masteraside.page */
      "1U3K");
      /* harmony import */


      var _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../layout/masterfooter/masterfooter.page */
      "JlfY");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./login/login.page */
      "PqlN");
      /* harmony import */


      var _vendor_vendor_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./vendor/vendor.page */
      "bx2J");
      /* harmony import */


      var _vendor_edit_vendor_edit_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./vendor-edit/vendor-edit.page */
      "hJwE");
      /* harmony import */


      var _sub_vendor_sub_vendor_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./sub-vendor/sub-vendor.page */
      "uEs0");
      /* harmony import */


      var _video_video_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./video/video.page */
      "tfVA");
      /* harmony import */


      var _merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./merchant-detail/merchant-detail.component */
      "4Ala");
      /* harmony import */


      var _merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./merchant-edit/merchant-edit.component */
      "RP3j");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_28__);
      /* harmony import */


      var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../common/loader/loader.component */
      "JFVA"); // import { SelectLocationPage } from './select-location/select-location.page';


      var AdminPageModule = function AdminPageModule() {
        _classCallCheck(this, AdminPageModule);
      };

      AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
        }), ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_28__["GooglePlaceModule"]],
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminPage"], _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_16__["MasterlayoutPage"], _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_17__["MasterheaderPage"], _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_18__["MasterasidePage"], _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_19__["MasterfooterPage"], _login_login_page__WEBPACK_IMPORTED_MODULE_20__["LoginPage"], _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_8__["AnnouncementPage"], _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"], _form_view_form_view_page__WEBPACK_IMPORTED_MODULE_9__["FormViewPage"], _form_view_info_form_view_info_page__WEBPACK_IMPORTED_MODULE_10__["FormViewInfoPage"], _forms_forms_page__WEBPACK_IMPORTED_MODULE_15__["FormsPage"], _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_11__["ReportDownloadPage"], _report_generation_report_generation_page__WEBPACK_IMPORTED_MODULE_12__["ReportGenerationPage"], _user_list_user_list_page__WEBPACK_IMPORTED_MODULE_13__["UserListPage"], _users_users_page__WEBPACK_IMPORTED_MODULE_14__["UsersPage"], _vendor_vendor_page__WEBPACK_IMPORTED_MODULE_21__["VendorPage"], _vendor_edit_vendor_edit_page__WEBPACK_IMPORTED_MODULE_22__["VendorEditPage"], _sub_vendor_sub_vendor_page__WEBPACK_IMPORTED_MODULE_23__["SubVendorPage"], _video_video_page__WEBPACK_IMPORTED_MODULE_24__["VideoPage"], _merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_25__["MerchantDetailComponent"], _merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_26__["MerchantEditComponent"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"]]
      })], AdminPageModule);
      /***/
    },

    /***/
    "kLB0":
    /*!*************************************************************!*\
      !*** ./src/app/admin/form-view-info/form-view-info.page.ts ***!
      \*************************************************************/

    /*! exports provided: FormViewInfoPage */

    /***/
    function kLB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormViewInfoPage", function () {
        return FormViewInfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_view_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-view-info.page.html */
      "7k7K");
      /* harmony import */


      var _form_view_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-view-info.page.scss */
      "NEOy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormViewInfoPage = /*#__PURE__*/function () {
        function FormViewInfoPage() {
          _classCallCheck(this, FormViewInfoPage);

          this.ApproveComments = false;
          this.RejectComments = false;
        }

        _createClass(FormViewInfoPage, [{
          key: "ApprovedShow",
          value: function ApprovedShow() {
            this.ApproveComments = !this.ApproveComments;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "RejectShow",
          value: function RejectShow() {}
        }]);

        return FormViewInfoPage;
      }();

      FormViewInfoPage.ctorParameters = function () {
        return [];
      };

      FormViewInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-view-info',
        template: _raw_loader_form_view_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_view_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormViewInfoPage);
      /***/
    },

    /***/
    "kTi0":
    /*!*********************************************!*\
      !*** ./src/app/admin/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function kTi0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "mJlB":
    /*!*****************************************************!*\
      !*** ./src/app/admin/form-view/form-view.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function mJlB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXZpZXcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "pwnP":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/report-generation/report-generation.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pwnP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>report-generation</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n    <div class=\"col-lg-12\">\n      <div class=\"page-title\">\n        <h3>Report Generation</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Top Bar Ends -->\n\n<!-- Row starts -->\n<div class=\"row gutter\">\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon red-icon\">\n              <i class=\"icon-calendar text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"appointmentsOdometer\" class=\"odometer\">0</span></h2>\n            <p>Vendors record</p>\n           \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon yellow-icon\">\n              <i class=\"icon-tools text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"projectsOdometer\" class=\"odometer\">0</span></h2>\n            <p>Merchants record</p>\n           \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon green-icon\">\n              <i class=\"icon-briefcase text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"shopOdometer\" class=\"odometer\">0</span></h2>\n            <p>Customers record</p>\n            \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon blue-icon\">\n              <i class=\"icon-presentation text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"interviewsOdometer\" class=\"odometer\">0</span></h2>\n            <p>Rider record</p>\n           \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon blue-icon\">\n              <i class=\"icon-presentation text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"interviewsOdometer\" class=\"odometer\">0</span></h2>\n            <p>Sales record</p>\n          \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <div class=\"yellow_panel all_black text_block mb-3\">\n      <div class=\"social-details clearfix\">\n        <a href=\"admin/report-download\">\n          <div class=\"social-icon pull-left\">\n            <div class=\"round-icon blue-icon\">\n              <i class=\"icon-presentation text_black\"></i>\n            </div>\n          </div>\n          <div class=\"social-num\">\n            <h2><span id=\"interviewsOdometer\" class=\"odometer\">0</span></h2>\n            <p>Forms record</p>\n          \n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Row ends -->";
      /***/
    },

    /***/
    "tfVA":
    /*!*******************************************!*\
      !*** ./src/app/admin/video/video.page.ts ***!
      \*******************************************/

    /*! exports provided: VideoPage */

    /***/
    function tfVA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPage", function () {
        return VideoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_video_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./video.page.html */
      "afOR");
      /* harmony import */


      var _video_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video.page.scss */
      "yLbA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/user.service */
      "hsG4");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var VideoPage = /*#__PURE__*/function () {
        function VideoPage(router, route, service, toastr, videoservice, profileservice, storage, _sanitizer, _httpClient) {
          _classCallCheck(this, VideoPage);

          this.router = router;
          this.route = route;
          this.service = service;
          this.toastr = toastr;
          this.videoservice = videoservice;
          this.profileservice = profileservice;
          this.storage = storage;
          this._sanitizer = _sanitizer;
          this._httpClient = _httpClient;
          this.terms = false;
          this.comments_error = false;
          this.video_error = false;
          this.menu = 'VENDORS';
          this.checkstatus = false;
          this.video_add_status = false;
          this.video_comments = '';
          this.video_uploading = false;
          this.video_error1 = false;
          this.timer_count = 0;
          this.actual_count = 0;
          this.name = 'Angular';
          this.percentDone = '0';
          this.percentDone_pre = '0%';
        }

        _createClass(VideoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.video_uploading = false;
            this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=RgxiR0_LXUs");
            this.route.params.subscribe(function (params) {
              _this9._profileId = params.userid;
            });

            if (this._profileId) {
              this.profileservice.view(this._profileId).subscribe(function (res) {
                _this9.profile = res;

                _this9.loadUsers(_this9.profile.role_id);

                console.log(_this9.profile.role_id);
              });
            }
          }
        }, {
          key: "playVideo",
          value: function playVideo(event) {
            event.toElement.play();
          }
        }, {
          key: "loadUsers",
          value: function loadUsers(_role) {
            var _this10 = this;

            if (_role == 1) {
              this.service.list({}).subscribe(function (res) {
                _this10.users = res.rows;
              });
            } else if (_role == 2) {
              this.menu = 'MERCHANTS';
              var a = this.profile.profile_id;
              this.videoservice.list(a).subscribe(function (res) {
                _this10.users = res.rows;
                console.log(_this10.users);
              }); // this.service.listMerchants({}).subscribe(res => {
              //   this.users = res.rows;
              // })
            } else if (_role == 3) {
              this.menu = 'VENDORS';
              this.service.listVendors({}).subscribe(function (res) {
                _this10.users = res.rows;
                console.log(_this10.users);
              });
              this.service.listSubVendors({}).subscribe(function (res) {
                _this10.sub_vendors = res.rows;
                console.log(_this10.sub_vendors);
              });
            } else if (_role == 4) {
              this.menu = 'RIDERS';
              this.service.list({}).subscribe(function (res) {
                _this10.users = res.rows;
              });
            } else if (_role == 5) {
              this.menu = 'CUSTOMERS';
              this.service.list({}).subscribe(function (res) {
                _this10.users = res.rows;
              });
            }

            console.log(this.users);
            console.log(this.sub_vendors);
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.video_error1 = false;
            this.profileImage = event.target.files[0];
            console.log(this.profileImage);
            console.log(this.profileImage.size);
            console.log(this.profileImage.size);

            if (this.profileImage.size < 4080712) {
              this.timer_count = 6;
              this.actual_count = 6;
            } else if (this.profileImage.size < 8080712) {
              this.timer_count = 10;
              this.actual_count = 10;
            } else if (this.profileImage.size < 12080712) {
              this.timer_count = 14;
              this.actual_count = 14;
            } else if (this.profileImage.size < 16080712) {
              this.timer_count = 16;
              this.actual_count = 16;
            } else if (this.profileImage.size < 20080712) {
              this.timer_count = 16;
              this.actual_count = 16;
            }

            console.log(this.timer_count, this.actual_count);

            if (this.profileImage.size > 20080712) {
              console.log("False");
              this.video_error1 = true;
            } else {
              console.log("True");
              this.video_error1 = false;
            }
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            var _this11 = this;

            this.video_error = false;

            if (this.video_comments == "") {
              // alert("Should not be empty");
              this.comments_error = true; // this.toastr.warningToastr('Comments should not be empty')
            } else {
              if (this.profileImage) {
                this.video_uploading = true;
                console.log(this.timer_count);
                this.interval = setInterval(function () {
                  if (_this11.timer_count > 0) {
                    console.log(_this11.timer_count);
                    var percentDone = Math.round(100 * (_this11.actual_count - _this11.timer_count) / _this11.actual_count);
                    console.log(percentDone);
                    _this11.percentDone = percentDone;
                    _this11.percentDone_pre = '';
                    _this11.percentDone_pre = _this11.percentDone + "%";
                    _this11.timer_count--;
                  } else {
                    _this11.percentDone = 100;
                    _this11.percentDone_pre = '';
                    _this11.percentDone_pre = _this11.percentDone + "%";

                    _this11.pauseTimer();
                  }
                }, 1000);
                var c = {
                  user_id: this._profileId,
                  type: "video",
                  note: this.video_comments
                };
                this.videoservice.create(this.profileImage, c).subscribe(function (res) {
                  console.log(res);
                }, function (err) {// this.notify.showError(err, "LOGIN");
                }); // this.videoservice.create(this.profileImage, c).subscribe(res => {
                //   console.log(res);
                // }, err => {
                //   // this.notify.showError(err, "LOGIN");
                // });
              } else {
                // this.toastr.warningToastr('Select Video');
                this.video_error = true; // alert('Select Image');
              }
            }
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            this.comments_error = false;
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this12 = this;

            this.videoservice["delete"](data).subscribe(function (res) {
              console.log(res);

              _this12.toastr.successToastr('Deleted Successfully'); // alert("Deleted Successfully");


              _this12.ngOnInit(); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
            this.terms = false;
          }
        }, {
          key: "Proceed",
          value: function Proceed() {
            if (this.checkstatus == false) {
              this.terms = true; // this.toastr.warningToastr('Please select T & C');
              // alert("Please select T & C");
            } else {
              this.video_add_status = true;
              this.terms = false;
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.video_add_status = false;
          }
        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            clearInterval(this.interval);
            console.log('File is completely uploaded!');
            this.video_uploading = false;
            this.video_add_status = false;
            this.video_comments = '';
            this.video_uploading = false;
            this.percentDone = 0;
            this.router.navigateByUrl('/merchant/video_list/' + this._profileId);
          }
        }]);

        return VideoPage;
      }();

      VideoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrManager"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_8__["VideoService"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }];
      };

      VideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video',
        template: _raw_loader_video_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VideoPage);
      /***/
    },

    /***/
    "togD":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/announcement/announcement.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function togD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>announcement</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Announcement</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"announc_form\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              \n        \n\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Announcement Title</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Choose Category</label>\n                        <select name=\"\" class=\"form-control\" id=\"\"><option value=\"\">Select</option></select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Choose Panel</label>\n                        <select name=\"\" class=\"form-control\" id=\"\"><option value=\"\">Select</option></select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">Message</label>\n                          <textarea class=\"form-control\" style=\"height: 70px;\"></textarea>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"styled-input-wrapper\">\n                  <div class=\"input-icon\">\n                      <i class=\"icon-file-text2\"></i>\n                  </div>\n                  <div class=\"styled-input\">\n                      <div class=\"form-group\">\n                          <label for=\"userName\">File Upload</label>\n                          <input type=\"file\" class=\"form-control\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"text-center\">\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </div>\n  </div>\n</div>\n  </div>\n\n";
      /***/
    },

    /***/
    "uEs0":
    /*!*****************************************************!*\
      !*** ./src/app/admin/sub-vendor/sub-vendor.page.ts ***!
      \*****************************************************/

    /*! exports provided: SubVendorPage */

    /***/
    function uEs0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubVendorPage", function () {
        return SubVendorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sub_vendor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sub-vendor.page.html */
      "Y22x");
      /* harmony import */


      var _sub_vendor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sub-vendor.page.scss */
      "PKyY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/vendor.service */
      "aF6T");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var SubVendorPage = /*#__PURE__*/function () {
        function SubVendorPage(router, formBuilder, VendorService, storage, profileservice) {
          _classCallCheck(this, SubVendorPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.VendorService = VendorService;
          this.storage = storage;
          this.profileservice = profileservice;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        }

        _createClass(SubVendorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.profileservice.view(this.storage.user.profile_id).subscribe(res => {
            //   this.profile = res;
            //   console.log(this.profile);
            //   this.initForm();
            // })
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.profileForm = this.formBuilder.group({
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              businessName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              summary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              facebook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              twitter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.profileForm.controls;
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.profileImage = event.target.files[0];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            this.submitted = true;

            if (this.profileForm.invalid) {
              return;
            }

            var controls = this.f;
            console.log('controls ', controls);
            var _profile = {
              role: 6,
              first_name: controls.firstName.value,
              last_name: controls.lastName.value,
              password: "123456",
              email: controls.email.value,
              contactno: controls.mobile.value
            };
            console.log(_profile);
            this.VendorService.vendor_register(_profile).subscribe(function (res) {
              console.log(res);
              _this13.profile = res;

              _this13.update_profile(); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            if (this.profileImage) {
              this.VendorService.uploadimage(this.profile.profile_id, this.profileImage).subscribe(function (res) {
                console.log(res);
                alert("Added Successfully"); //  this.router.navigateByUrl('/users');
                // this.notify.showSuccess("Logged in successfully", "LOGIN");
              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              alert('Select Image');
            }
          }
        }, {
          key: "update_profile",
          value: function update_profile() {
            var _this14 = this;

            var controls = this.f;
            var _profile = {
              profile_id: this.profile.profile_id,
              profile_first_name: controls.firstName.value,
              profile_last_name: controls.lastName.value,
              profile_email: controls.email.value,
              // profile_biz_name : controls.businessName.value,
              profile_contact: controls.mobile.value,
              profile_address: controls.address.value,
              profile_dob: controls.dob.value,
              profile_location: controls.location.value,
              profile_summary: controls.summary.value,
              profile_facebook: controls.facebook.value,
              profile_instagram: controls.instagram.value,
              profile_twitter: controls.twitter.value
            };
            this.profileservice.update(_profile).subscribe(function (res) {
              console.log(res);

              _this14.uploadImg();
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }]);

        return SubVendorPage;
      }();

      SubVendorPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_7__["VendorService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }];
      };

      SubVendorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sub-vendor',
        template: _raw_loader_sub_vendor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sub_vendor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SubVendorPage);
      /***/
    },

    /***/
    "uwBU":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/forms/forms.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function uwBU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>forms</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\t\t\n  <!-- Top Bar Starts -->\n      <div class=\"top-bar clearfix\">\n        <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n              <h3>Forms</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Top Bar Ends -->\n         \n<!-- Row starts -->\n<div class=\"row gutter\">\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n  <a href=\"admin/forms_type\" class=\"d-block\">\n      <div class=\"panel yellow_panel all_black text_black\">\n          <div class=\"social-details clearfix\">\n              <div class=\"social-icon pull-left\">\n                  <div class=\"round-icon red-icon\">\n                      <i class=\"icon-calendar\"></i>\n                  </div>\n              </div>\n              <div class=\"social-num\">\n                  <h2><span id=\"appointmentsOdometer\" class=\"odometer\">0</span> </h2>\n                  <p>Received Forms</p>\n                 \n              </div>\n          </div>\n  </div>\n</a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n  <a href=\"admin/forms_type\" class=\"d-block\">\n      <div class=\"panel yellow_panel all_black text_black\">\n          <div class=\"social-details clearfix\">\n              <div class=\"social-icon pull-left\">\n                  <div class=\"round-icon yellow-icon\">\n                      <i class=\"icon-tools\"></i>\n                  </div>\n              </div>\n              <div class=\"social-num\">\n                  <h2><span id=\"projectsOdometer\" class=\"odometer\">0</span></h2>\n                  <p>Approved Forms</p>\n                  \n              </div>\n          </div>\n  </div>\n</a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n  <a href=\"admin/forms_type\" class=\"d-block\">\n      <div class=\"panel yellow_panel all_black text_black\">\n          <div class=\"social-details clearfix\">\n              <div class=\"social-icon pull-left\">\n                  <div class=\"round-icon green-icon\">\n                      <i class=\"icon-briefcase\"></i>\n                  </div>\n              </div>\n              <div class=\"social-num\">\n                  <h2><span id=\"shopOdometer\" class=\"odometer\">0</span></h2>\n                  <p>Rejected forms</p>\n                  \n              </div>\n          </div>\n  </div>\n</a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n  <a href=\"admin/forms_type\" class=\"d-block\">\n      <div class=\"panel yellow_panel all_black text_black\">\n          <div class=\"social-details clearfix\">\n              <div class=\"social-icon pull-left\">\n                  <div class=\"round-icon blue-icon\">\n                      <i class=\"icon-presentation\"></i>\n                  </div>\n              </div>\n              <div class=\"social-num\">\n                  <h2><span id=\"interviewsOdometer\" class=\"odometer\">0</span></h2>\n                  <p>Export pdf </p>\n                  \n              </div>\n          </div>\n  </div>\n</a>\n  </div>\n\n \n</div>\n<!-- Row ends -->\n\n\n      ";
      /***/
    },

    /***/
    "w+Z8":
    /*!*********************************************************!*\
      !*** ./src/app/admin/vendor-edit/vendor-edit.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function wZ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5kb3ItZWRpdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "yLbA":
    /*!*********************************************!*\
      !*** ./src/app/admin/video/video.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function yLbA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add_button {\n  background: #A9BD7A;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin: 10px;\n  float: right;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.terms {\n  background-color: transparent !important;\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUU7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJ2aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkX2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAjQTlCRDdBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG5cbiAgLnRlcm1zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map
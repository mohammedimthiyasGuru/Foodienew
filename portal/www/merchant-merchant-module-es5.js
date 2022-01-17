(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchant-merchant-module"], {
    /***/
    "/m+E":
    /*!******************************************************************!*\
      !*** ./src/app/merchant/product-detail/product-detail.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function mE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "0avR":
    /*!*****************************************************!*\
      !*** ./src/app/merchant/merchant-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MerchantPageRoutingModule */

    /***/
    function avR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantPageRoutingModule", function () {
        return MerchantPageRoutingModule;
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


      var _add_new_category_add_new_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-new-category/add-new-category.page */
      "5aWD");
      /* harmony import */


      var _add_remove_existing_form_add_remove_existing_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-remove-existing-form/add-remove-existing-form.page */
      "vJ1+");
      /* harmony import */


      var _category_edit_category_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-edit/category-edit.page */
      "jswh");
      /* harmony import */


      var _category_list_category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-list/category-list.page */
      "ryxY");
      /* harmony import */


      var _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./creditreport/creditreport.component */
      "taS9");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Fv72");
      /* harmony import */


      var _debitreport_debitreport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./debitreport/debitreport.component */
      "PYg0");
      /* harmony import */


      var _delivered_delivered_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./delivered/delivered.page */
      "iCAx");
      /* harmony import */


      var _merchant_waller_merchant_waller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./merchant-waller/merchant-waller.component */
      "Qi5i");
      /* harmony import */


      var _post_product_post_product_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./post-product/post-product.page */
      "njQj");
      /* harmony import */


      var _product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./product-detail/product-detail.page */
      "YUNA");
      /* harmony import */


      var _product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./product-edit/product-edit.page */
      "mNZD");
      /* harmony import */


      var _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./product-list/product-list.page */
      "pJK6");
      /* harmony import */


      var _productcreate_productcreate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./productcreate/productcreate.component */
      "zYg9");
      /* harmony import */


      var _productview_productview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./productview/productview.component */
      "Ptx5");
      /* harmony import */


      var _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./report-download/report-download.page */
      "8nLo");
      /* harmony import */


      var _rider_picked_rider_picked_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./rider-picked/rider-picked.page */
      "1BlX");
      /* harmony import */


      var _update_order_status_update_order_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./update-order-status/update-order-status.component */
      "X7lw");
      /* harmony import */


      var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./video-list/video-list.component */
      "t/+b");
      /* harmony import */


      var _videoview_videoview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./videoview/videoview.component */
      "Qu6T");
      /* harmony import */


      var _wallet_point_wallet_point_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./wallet-point/wallet-point.page */
      "CrSC");
      /* harmony import */


      var _walletcredit_walletcredit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./walletcredit/walletcredit.component */
      "7Ycy");
      /* harmony import */


      var _walletdebit_walletdebit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./walletdebit/walletdebit.component */
      "3cGt");

      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, // { path: 'dashboard', component: DashboardComponent },
      {
        path: 'updateorderstatus',
        component: _update_order_status_update_order_status_component__WEBPACK_IMPORTED_MODULE_20__["UpdateOrderStatusPage"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]
      }, {
        path: 'rider-picked',
        component: _rider_picked_rider_picked_page__WEBPACK_IMPORTED_MODULE_19__["RiderPickedPage"]
      }, {
        path: 'delivered',
        component: _delivered_delivered_page__WEBPACK_IMPORTED_MODULE_10__["DeliveredPage"]
      }, {
        path: 'post-product',
        component: _post_product_post_product_page__WEBPACK_IMPORTED_MODULE_12__["PostProductPage"]
      }, {
        path: 'add-new-category',
        component: _add_new_category_add_new_category_page__WEBPACK_IMPORTED_MODULE_3__["AddNewCategoryPage"]
      }, {
        path: 'product-add',
        component: _product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_13__["ProductDetailPage"]
      }, {
        path: 'products-list',
        component: _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_15__["ProductListPage"]
      }, {
        path: 'products/:prodid',
        component: _product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_13__["ProductDetailPage"]
      }, {
        path: 'add-remove-existing-form',
        component: _add_remove_existing_form_add_remove_existing_form_page__WEBPACK_IMPORTED_MODULE_4__["AddRemoveExistingFormPage"]
      }, {
        path: 'wallet-point',
        component: _wallet_point_wallet_point_page__WEBPACK_IMPORTED_MODULE_23__["WalletPointPage"]
      }, {
        path: 'merchant_wallet',
        component: _merchant_waller_merchant_waller_component__WEBPACK_IMPORTED_MODULE_11__["MerchantWallerComponent"]
      }, {
        path: 'report-download',
        component: _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_18__["ReportDownloadPage"]
      }, {
        path: 'video_list/:userid',
        component: _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_21__["VideoListComponent"]
      }, {
        path: 'video_view',
        component: _videoview_videoview_component__WEBPACK_IMPORTED_MODULE_22__["VideoviewComponent"]
      }, {
        path: 'product_create',
        component: _productcreate_productcreate_component__WEBPACK_IMPORTED_MODULE_16__["ProductcreateComponent"]
      }, {
        path: 'product_view',
        component: _productview_productview_component__WEBPACK_IMPORTED_MODULE_17__["ProductviewComponent"]
      }, {
        path: 'report_debit',
        component: _debitreport_debitreport_component__WEBPACK_IMPORTED_MODULE_9__["DebitreportComponent"]
      }, {
        path: 'report_credit',
        component: _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_7__["CreditreportComponent"]
      }, {
        path: 'wallet_debit',
        component: _walletdebit_walletdebit_component__WEBPACK_IMPORTED_MODULE_25__["WalletdebitComponent"]
      }, {
        path: 'wallet_credit',
        component: _walletcredit_walletcredit_component__WEBPACK_IMPORTED_MODULE_24__["WalletcreditComponent"]
      }, ///// imthiyas code /////
      {
        path: 'update_category',
        component: _category_edit_category_edit_page__WEBPACK_IMPORTED_MODULE_5__["CategoryEditPage"]
      }, {
        path: 'list_category',
        component: _category_list_category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]
      }, {
        path: 'product-edit/:productid',
        component: _product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_14__["ProductEditPage"]
      }, {
        path: 'list_product',
        component: _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_15__["ProductListPage"]
      }];

      var MerchantPageRoutingModule = function MerchantPageRoutingModule() {
        _classCallCheck(this, MerchantPageRoutingModule);
      };

      MerchantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MerchantPageRoutingModule);
      /***/
    },

    /***/
    "0i4j":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/category-list/category-list.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add_new_category\">\n  <div class=\"pt-5\">\n      <div class=\"panel panel-red\">\n          <div class=\"panel-heading mb-0 pb-0\">\n              <h3 class=\"text-left text-blue\">Category</h3>\n          </div>\n          <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n              <table class=\"table no-margin\">\n                  <thead>\n                      <tr>\n                          <th>Category</th>\n                          <th>Status</th>\n                          <th>Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let category of categories_list\">\n                          <td>\n                              <div class=\"text-left cart_col\">\n                                  <h5 class=\"mb-0\">{{category.cat_name}}</h5>\n                              </div>\n                          </td>\n                          <td>\n                              <div class=\"text-center\">\n                                  <h5 class=\"mb-0\">{{category.cat_status == 'A' ? 'Active' : 'Inactive'}}</h5>\n                              </div>\n                          </td>\n                          <td>\n                              <button style=\"margin: 5px; background-color: #a9bd7a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('A',category.cat_id)\" *ngIf=\"category.cat_status == 'B'\">Enable</button>\n                              <button style=\"margin: 5px; background-color: #bf7a6a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('B',category.cat_id)\" *ngIf=\"category.cat_status == 'A'\">Disable</button>\n                              <button style=\"margin: 5px;\" type=\"submit\" (click)=\"edit(category.cat_id,category.cat_name)\" class=\"btn btn-info\">Edit</button>\n                              <button style=\"margin: 5px; background-color: #bf7a6a;\" (click)=\"cat_delete(category.cat_id)\" type=\"submit\" class=\"btn btn-info\">Delete </button>\n                        </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "1BlX":
    /*!************************************************************!*\
      !*** ./src/app/merchant/rider-picked/rider-picked.page.ts ***!
      \************************************************************/

    /*! exports provided: RiderPickedPage */

    /***/
    function BlX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RiderPickedPage", function () {
        return RiderPickedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rider_picked_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rider-picked.page.html */
      "DKIu");
      /* harmony import */


      var _rider_picked_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rider-picked.page.scss */
      "pC1H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RiderPickedPage = /*#__PURE__*/function () {
        function RiderPickedPage() {
          _classCallCheck(this, RiderPickedPage);
        }

        _createClass(RiderPickedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RiderPickedPage;
      }();

      RiderPickedPage.ctorParameters = function () {
        return [];
      };

      RiderPickedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rider-picked',
        template: _raw_loader_rider_picked_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rider_picked_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RiderPickedPage);
      /***/
    },

    /***/
    "1cci":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/order-preparing/order-preparing.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cci(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>order-preparing</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Order Preparing</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n\n  <div class=\"mp_panel\">\n\n      <div class=\"pt-2\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-red\">Ongoing</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"120\"></th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                         \n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"order_preparing.html\" class=\"btn btn-success btn-sm w-100 mb-2\" type=\"button\">Status</a>\n                              </td>\n                          </tr>\n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n\n          \n      </div>\n\n      <div class=\"pt-5\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-blue\">History</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"120\"></th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"order_preparing.html\" class=\"btn btn-success btn-sm w-100 mb-2\" type=\"button\">Status</a>\n                              </td>\n                          </tr>\n                        \n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n          \n          \n          \n      </div>\n  </div>\n";
      /***/
    },

    /***/
    "2uqR":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/walletcredit/walletcredit.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>wallet-point</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n                <h3>Credit Wallet Point</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<h3 class=\"text-left text-red\">Overview</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 col md-6\">\n        <div class=\"panel\">\n            <div class=\"sessions\">\n                <h2 class=\"left\">{{today_value}} <i class=\"icon-direction up\"></i></h2>\n                <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n            </div>\n            <h5 class=\"info pt-3\">Today Credit</h5>\n        </div>\n    </div>\n    <div class=\"col-lg-6 col md-6\">\n        <div class=\"panel\">\n            <div class=\"sessions\">\n                <h2 class=\"left\">{{total_value}} <i class=\"icon-direction up\"></i></h2>\n                <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n            </div>\n            <h5 class=\"info pt-3\">Total Credit</h5>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <!-- <div class=\"col-md-12\">\n        <div class=\"panel\">\n            <h4 class=\"text-left text-red\">Credit Report</h4>\n\n          \n        </div>\n    </div> -->\n  \n</div>   \n\n\n<div class=\"pt-3\">\n    <h4 class=\"text-left text-red\">Credit Report</h4>\n\n    <div class=\"panel panel-yellow pt-0\">\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover no-margin\">\n                    <thead>\n                        <tr>\n                            <th>S.No</th>\n                            <th>Date & Time</th>\n                            <th>Order Id</th>\n                            <th>Product Id</th>\n                            <th>User Id</th>\n                            <th>Product Details</th>\n                            <th>Note</th>\n                            <th>Quantity</th>\n                            <th>Price</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                           <tr *ngIf=\"corderslist.length !== 0\">\n                               <td>\n                                   {{i+1}}\n                               </td>\n                               <td>\n       \n                                   {{order.order_detail.order_mst.order_date}}\n                               </td>\n                               <td>\n                                   {{order.order_detail.order_id}}\n                               </td>\n                               <td>\n                                   {{order.order_detail.order_mst.customer_info.profile_id}} \n                                   <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                               </td>\n                               <td>\n                                   <ng-container  *ngFor=\"let item of order.product_details\">\n                                       <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                                   </ng-container>\n                                   <!-- {{order.order_detail.order_mst.order_no}} -->\n                               </td>\n                               <td>\n                               </td>\n                               <td>\n                                   {{order.order_qty}}\n                                   <!-- {{order.product_details.length}} -->\n                               </td>\n                               <td>\n                                   {{order.order_value}}\n                               </td>\n                               <!-- <td>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p>\n                               </td> -->\n                               <td>Credited</td>\n                              \n                               <td>\n                                <!-- <button class=\"btn btn-success\" (click)=\"history_view(i)\">View</button> -->\n                               </td>\n                            </tr>\t              \n                           </ng-container>\n                           <tr *ngIf=\"corderslist.length == 0\">\n                               <td colspan=\"10\">No Record Found</td>\n                            </tr>\n                                                  \n                       </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n";
      /***/
    },

    /***/
    "31DF":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/merchant-waller/merchant-waller.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"visible\">\n\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n      <div class=\"col-lg-12\">\n          <div class=\"page-title\">\n              <h3>Wallet Point</h3>\n          </div>\n      </div>\n\n  </div>\n</div>\n\n\n\n<div class=\"row\" style=\"margin-bottom: 40px;\">\n     \n  <div class=\"col-lg-3 col md-6\">\n      <div class=\"panel yellow_panel\">\n          <div class=\"sessions\">\n              <h2 class=\"left\" style=\"color: black;\">{{today_count_credit}} <i class=\"icon-direction up\"></i></h2>\n              <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n          </div>\n\n          <div id=\"chart\">\n            <apx-chart\n              [series]=\"chartOptions.series\"\n              [chart]=\"chartOptions.chart\"\n              [xaxis]=\"chartOptions.xaxis\"\n              [stroke]=\"chartOptions.stroke\"\n              [tooltip]=\"chartOptions.tooltip\"\n              [dataLabels]=\"chartOptions.dataLabels\"\n            ></apx-chart>\n          </div>\n\n          <h5 class=\"info\">Today Credit</h5>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col md-6\">\n    <div class=\"panel yellow_panel\">\n        <div class=\"sessions\">\n            <h2 class=\"left\" style=\"color: black;\">{{today_count_debit}} <i class=\"icon-direction up\"></i></h2>\n            <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n        </div>\n\n        <div id=\"chart\">\n            <apx-chart\n              [series]=\"chartOptions1.series\"\n              [chart]=\"chartOptions1.chart\"\n              [xaxis]=\"chartOptions1.xaxis\"\n              [stroke]=\"chartOptions1.stroke\"\n              [tooltip]=\"chartOptions1.tooltip\"\n              [dataLabels]=\"chartOptions1.dataLabels\"\n            ></apx-chart>\n          </div>\n\n\n        <h5 class=\"info\">Today Debit</h5>\n    </div>\n</div>\n  <div class=\"col-lg-3 col md-6\">\n      <div class=\"panel yellow_panel\">\n          <div class=\"sessions\">\n              <h2 class=\"left\"  style=\"color: black;\" >{{total_count_credit}} <i class=\"icon-direction up\"></i></h2>\n              <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n          </div>\n          <div id=\"chart\">\n            <apx-chart\n              [series]=\"chartOptions2.series\"\n              [chart]=\"chartOptions2.chart\"\n              [xaxis]=\"chartOptions2.xaxis\"\n              [stroke]=\"chartOptions2.stroke\"\n              [tooltip]=\"chartOptions2.tooltip\"\n              [dataLabels]=\"chartOptions2.dataLabels\"\n            ></apx-chart>\n          </div>\n          <h5 class=\"info\">Total Credit</h5>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col md-6\">\n      <div class=\"panel yellow_panel\">\n          <div class=\"sessions\">\n              <h2 class=\"left\" style=\"color: black;\">{{total_count_debit}} <i class=\"icon-direction up\"></i></h2>\n              <div class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n          </div>\n          <div id=\"chart\">\n            <apx-chart\n              [series]=\"chartOptions3.series\"\n              [chart]=\"chartOptions3.chart\"\n              [xaxis]=\"chartOptions3.xaxis\"\n              [stroke]=\"chartOptions3.stroke\"\n              [tooltip]=\"chartOptions3.tooltip\"\n              [dataLabels]=\"chartOptions3.dataLabels\"\n            ></apx-chart>\n          </div>\n          <h5 class=\"info\">Total Debit</h5>\n      </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <div class=\"panel\" style=\"background: #ffffff !important;\" >\n          <h3 class=\"text-left txt_bold\" style=\"color: black;\">Monthly Report</h3>\n        \n          <div id=\"chart1\">\n            <apx-chart\n              [series]=\"chartOptions4.series\"\n              [chart]=\"chartOptions4.chart\"\n              [xaxis]=\"chartOptions4.xaxis\"\n              [stroke]=\"chartOptions4.stroke\"\n              [tooltip]=\"chartOptions4.tooltip\"\n              [dataLabels]=\"chartOptions4.dataLabels\"\n            ></apx-chart>\n          </div>\n          \n      </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"panel\" style=\"background: #ffffff !important;\" >\n        <h3 class=\"text-left txt_bold\"  style=\"font-weight: 800;color: black;\">Total Report</h3>\n      \n        <div id=\"chart\">\n          <apx-chart\n            [series]=\"chartOptions5.series\"\n            [chart]=\"chartOptions5.chart\"\n            [xaxis]=\"chartOptions5.xaxis\"\n            [stroke]=\"chartOptions5.stroke\"\n            [tooltip]=\"chartOptions5.tooltip\"\n            [dataLabels]=\"chartOptions5.dataLabels\"\n          ></apx-chart>\n        </div>\n        \n    </div>\n</div>\n</div>  \n\n\n  \n\n\n\n\n<div class=\"row form_bg_1\">\n    <div class=\"col-md-2\">\n        <label>Country</label>\n        <select disabled  class=\"form-control yellow-bg2\" [(ngModel)]=\"country_name\" (ngModelChange)=\"find_state_list()\">\n            <option value=\"INDIA\">INDIA</option>\n            <option value=\"MALAYSIA\">MALAYSIA</option>\n            <option value=\"SINGAAPORE\">SINGAAPORE</option>\n        </select>\n\n    </div>\n    <div class=\"col-md-2\">\n        <label>State</label>\n        <select disabled class=\"form-control yellow-bg2\"  [(ngModel)]=\"state_name\">\n          <option *ngFor=\"let y of state_list\" [value]=\"y.state_name\">{{y.state_name}}</option>\n        </select>\n    </div>\n    <div class=\"col-md-2\">\n      <label>Commission</label>\n      <select disabled  class=\"form-control yellow-bg2\" disabled>\n          <option value=\"\">25%</option>\n      </select>\n\n  </div>\n  <div class=\"col-md-2\">\n    <label>Role</label>\n    <select  disabled class=\"form-control yellow-bg2\" [(ngModel)]=\"role\">\n        <option value=\"1\">Admin</option>\n        <option value=\"2\">Merchant</option>\n        <option value=\"3\">Vendor</option>\n    </select>\n</div>\n<div class=\"col-md-2\">\n  <label>Sort by</label>\n  <select  class=\"form-control\"  [(ngModel)]=\"sort_by\">\n      <option value=\"Y\">Year</option>\n      <option value=\"M\">Month</option>\n      <!-- <option value=\"W\">Weekly</option> -->\n      <option value=\"D\">Date</option>\n  </select>\n\n</div>\n<div class=\"col-md-2\">\n  <label>Choose date</label>\n  <select class=\"form-control\" [(ngModel)]=\"date\" *ngIf=\"sort_by ==  'Y'\">\n    <option value=\"\" disabled selected>Year</option>\n    <option *ngFor=\"let y of yearsUnique\" [value]=\"y\">{{y}}</option>\n  </select>\n  <input type=\"date\" [(ngModel)]=\"date\" class=\"form-control\" *ngIf=\"sort_by ==  'D'\">\n  <input type =\"month\" [(ngModel)]=\"date\" class=\"form-control\" *ngIf=\"sort_by ==  'M'\"> \n  <input type=\"week\" [(ngModel)]=\"date\" class=\"form-control\" *ngIf=\"sort_by ==  'W'\">\n</div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-2\" style=\"float:right;padding: 10px 0px;width: 15%;\">\n    <button class=\"btn btn-success form-control\" (click)=\"fetch()\" type=\"button\">Filter</button>\n    </div>\n   </div>\n</div>\n\n<div class=\"pt-2\">\n  <div class=\"panel panel-red\">\n      <div class=\"panel-heading mb-0 pb-0\">\n          <h4 class=\"text-left\">Credit Details</h4>\n          <h4 class=\"text-left\" style=\"float: right;\">\n               </h4>\n      </div>\n      <div class=\"panel-body table-responsive pb-0\">\n          <table class=\"table no-margin text-center\">\n              <thead>\n                  <tr>      <th>Select</th>\n                            <th>S.No</th>\n                            <th>Date & Time</th>\n                            <th>Bussiness Id and Name</th>\n                            <th>Order Details</th>\n                            <th>Order Price</th>\n                            <th>Commission</th>\n                            <th>Net Price</th>\n                            <th>Order Status</th>\n                            <th>Payment Status</th>\n                            <th>User ID</th>\n                            <th>Order ID</th>\n                            <th>Quantity</th>\n                            <th>Note If any</th>\n                            <th>Rider Details</th>\n                  </tr>\n              </thead>\n              <tbody>\n               <ng-container  *ngFor=\"let order of corderslist; index as sno\">\n                <tr *ngIf=\"corderslist.length !== 0\">\n                  <td> <input type=\"checkbox\"> </td>\n                  <td> {{sno + 1}} </td>\n                  <td> {{order.order_date}} </td>\n                  <td> <b>Bussiness ID</b>  : {{merchant_id}}, <b>Name</b>  : {{rest_name}}</td>\n                  <td> \n                       <table class=\"table no-margin text-center\">\n                        <thead>\n                           <tr>\n                             <th>S.no</th>\n                             <th>Order details</th>\n                             <th>Quantity</th>\n                             <th>Price</th>\n                             <th>Total Price</th>\n                           </tr>\n                        </thead>\n                           <tr *ngFor=\"let prod of order.order_prods; index as line\">\n                             <td>{{line + 1}}</td>\n                             <td>{{prod.prod_name}}</td>\n                             <td>{{prod.prod_qty}}</td>\n                             <td>{{prod.prod_price}}</td>\n                             <td>{{prod.prod_total_price}}</td>\n                           </tr>\n                       </table>\n                  </td>\n                  <td>{{order.prod_total_price}}</td>\n                  <td>{{order.discount_price}}</td>\n                  <td>{{order.net_price}}</td>\n                  <td>\n                    <p *ngIf=\"order.order_status == 'B' \">Booked</p>\n                    <p *ngIf=\"order.order_status == 'A' \">Accepted</p>\n                    <p *ngIf=\"order.order_status == 'C' \">Cancelled</p>\n                    <p *ngIf=\"order.order_status == 'P' \">Pickup</p>\n                    <p *ngIf=\"order.order_status == 'D' \">Delivered</p>\n                  </td>\n                  <td>unpaid</td>\n                  <td>{{order.customer}}</td>\n                  <td>{{order.order_no}}</td>\n                  <td>{{order.prod_qty}}</td>\n                  <td>PLEASE PLACE MY ORDER IN DOOR STEP</td>\n                  <td>JOHN, Delivered on 22/07/2021: 09:23:22</td>\n                </tr>  \n                  </ng-container>\n                  <tr style=\"background: #f9c332;\n                  font-weight: bold;\" *ngIf=\"corderslist.length !== 0\">  \n                    <td colspan=\"7\">SUB TOTAL</td>\n                    <td colspan=\"1\">{{total_subtoal}}</td>\n                    <td colspan=\"1\"></td>\n                    <td colspan=\"1\"></td>\n                 </tr>\n                 <tr style=\"background: #f9c332;\n                  font-weight: bold;\" *ngIf=\"corderslist.length !== 0\">\n                  <td colspan=\"7\"> <span><i class=\"fa fa-chevron-down\"></i></span>  REFUND</td>\n                  <td colspan=\"1\">0</td>\n                  <td colspan=\"1\"></td>\n                  <td colspan=\"1\"></td>\n               </tr>\n               <tr style=\"background: #f9c332;\n               font-weight: bold;\" *ngIf=\"corderslist.length !== 0\">\n                <td colspan=\"7\"> <i class=\"fa fa-chevron-down\"></i>  OTHERS</td>\n                <td colspan=\"1\">0</td>\n                <td colspan=\"1\"></td>\n                <td colspan=\"1\"></td>\n             </tr>\n             <tr style=\"background: #28a745;\n             font-weight: bold;\" *ngIf=\"corderslist.length !== 0\">\n              <td colspan=\"7\"> GRAND TOTAL</td>\n              <td colspan=\"1\">{{grand_total}}</td>\n              <td colspan=\"1\"></td>\n              <td colspan=\"1\">UNPAID</td>\n              </tr>\n                  <tr *ngIf=\"corderslist.length == 0\">\n                      <td colspan=\"15\">No Record Found</td>\n                   </tr>\n                                         \n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n\n</div>";
      /***/
    },

    /***/
    "3cGt":
    /*!***************************************************************!*\
      !*** ./src/app/merchant/walletdebit/walletdebit.component.ts ***!
      \***************************************************************/

    /*! exports provided: WalletdebitComponent */

    /***/
    function cGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletdebitComponent", function () {
        return WalletdebitComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_walletdebit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./walletdebit.component.html */
      "GW5J");
      /* harmony import */


      var _walletdebit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./walletdebit.component.scss */
      "KvSe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var WalletdebitComponent = /*#__PURE__*/function () {
        function WalletdebitComponent(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService, datePipe) {
          _classCallCheck(this, WalletdebitComponent);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.datePipe = datePipe;
          this.total_value = 0;
          this.today_value = 0;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.final_output = [];
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
        }

        _createClass(WalletdebitComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this.storage.merchant_detail = registerData;

                _this.router.navigateByUrl('/account/register');

                _this.loader = false;
              }

              _this.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
            this.loadData(); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this2.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];

                  var order_date = _this2.datePipe.transform(tem.createdAt, 'yyyy-MM-dd');

                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false,
                    order_date: order_date
                  };
                  c.product_details.push(tem);

                  _this2.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this2.corderslist;
                  var check_status = 0;
                  var _tem = temp_data[a];

                  for (var _c = 0; _c < datas.length; _c++) {
                    if (datas[_c].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c].order_value = datas[_c].order_value + temp_data[a].mercant_price_total, datas[_c].order_qty = datas[_c].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem2 = temp_data[a];

                        var _order_date = _this2.datePipe.transform(_tem2.createdAt, 'yyyy-MM-dd');

                        var _c2 = {
                          order_detail: _tem2,
                          order_value: _tem2.mercant_price_total,
                          order_qty: _tem2.prod_qty,
                          product_details: [],
                          view_status: false,
                          order_date: _order_date
                        };

                        _c2.product_details.push(_tem2);

                        _this2.corderslist.push(_c2);
                      } else {
                        _this2.corderslist[_c].product_details.push(_tem);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this2.corderslist);
                }
              }

              _this2.remove_index();
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }

            this.total_sale_cal();
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status);
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              var d = "";

              for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
              }

              var e = {
                Order_ID: this.corderslist[a].order_detail.order_id,
                Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                Order_Details: d,
                Order_Price: this.corderslist[a].order_value,
                Item_Count: this.corderslist[a].order_qty,
                Status: this.corderslist[a].order_detail.order_dtl_status,
                Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                Note_If_Any: ''
              };
              temp.push(e);

              if (a == this.corderslist.length - 1) {
                console.log(temp);
                this.excelService.exportAsExcelFile(temp, 'Report');
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this3 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this3.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this3.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this3.corderslist;
                  var check_status = 0;
                  var _tem3 = temp_data[a];

                  for (var _c3 = 0; _c3 < datas.length; _c3++) {
                    if (datas[_c3].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c3].order_value = datas[_c3].order_value + temp_data[a].mercant_price_total, datas[_c3].order_qty = datas[_c3].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c3 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem4 = temp_data[a];
                        var _c4 = {
                          order_detail: _tem4,
                          order_value: _tem4.mercant_price_total,
                          order_qty: _tem4.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c4.product_details.push(_tem4);

                        _this3.corderslist.push(_c4);
                      } else {
                        _this3.corderslist[_c3].product_details.push(_tem3);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this3.corderslist);
                }
              }

              for (var x = 0; x < _this3.corderslist.length; x++) {
                if (x !== 0) {
                  _this3.corderslist[x].order_value = _this3.corderslist[x].order_value - _this3.corderslist[x].order_detail.mercant_price_total;
                  _this3.corderslist[x].order_qty = _this3.corderslist[x].order_qty - _this3.corderslist[x].order_detail.prod_qty;

                  _this3.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this3.corderslist.length - 1) {
                  _this3.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "total_sale_cal",
          value: function total_sale_cal() {
            this.total_value = 0;

            for (var a = 0; a < this.corderslist.length; a++) {
              var current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
              var order_date = this.datePipe.transform(this.corderslist[a].order_detail.createdAt, 'yyyy-MM-dd');
              console.log(current_date, order_date);

              if (current_date == order_date) {
                this.today_value = this.today_value + this.corderslist[a].order_value;
              }

              this.total_value = this.total_value + this.corderslist[a].order_value;
            }

            this.group_add_sum();
          }
        }, {
          key: "group_add_sum",
          value: function group_add_sum() {
            var calculated = this.corderslist.reduce(function (acc, item) {
              var accItem = acc.find(function (ai) {
                return ai.order_date === item.order_date;
              });

              if (accItem) {
                accItem.order_value += +item.order_value;
              } else {
                acc.push(item);
              }

              return acc;
            }, []);
            console.log(calculated); // this.barChartData[0].data = [];
            // this.barChartLabels = [];
            // for(let a = 0; a < calculated.length; a ++){
            //   this.barChartData[0].data.push(calculated[a].order_value);
            //   this.barChartLabels.push(calculated[a].order_date);
            // }
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
              }
            }
          }
        }]);

        return WalletdebitComponent;
      }();

      WalletdebitComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      WalletdebitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-walletdebit',
        template: _raw_loader_walletdebit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [_walletdebit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WalletdebitComponent);
      /***/
    },

    /***/
    "3pPA":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/wallet-point/wallet-point.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function pPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#chart {\n  width: \"10%\";\n  height: 50;\n}\n\n.apexcharts-canvas * {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.yellow_panel {\n  background: none !important;\n  padding: 10px !important;\n  height: 250px;\n  border: 3px solid #f8c333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhbGxldC1wb2ludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSkYiLCJmaWxlIjoid2FsbGV0LXBvaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydCB7XG4gICAgd2lkdGg6JzEwJSc7XG4gICAgaGVpZ2h0IDogNTA7XG4gIH1cbiAgXG4gIC8vICNjaGFydCB7XG4gIC8vICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgLy8gfVxuXG5cbiAgLmFwZXhjaGFydHMtY2FudmFzICoge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ueWVsbG93X3BhbmVsIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmOGMzMzM7XG59XG5cblxuXG5cblxuIl19 */";
      /***/
    },

    /***/
    "5aWD":
    /*!********************************************************************!*\
      !*** ./src/app/merchant/add-new-category/add-new-category.page.ts ***!
      \********************************************************************/

    /*! exports provided: AddNewCategoryPage */

    /***/
    function aWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewCategoryPage", function () {
        return AddNewCategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-category.page.html */
      "zmqY");
      /* harmony import */


      var _add_new_category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-category.page.scss */
      "DISn");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");

      var AddNewCategoryPage = /*#__PURE__*/function () {
        function AddNewCategoryPage(router, route, formBuilder, service) {
          _classCallCheck(this, AddNewCategoryPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.submitted = false;
        }

        _createClass(AddNewCategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.service.list({}).subscribe(function (res) {
              _this4.categories = res.rows;
            });
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.categoryForm = this.formBuilder.group({
              category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.categoryForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.categoryForm.invalid) {
              return;
            }

            var controls = this.categoryForm.controls;
            var _category = {
              cat_name: controls.category.value
            };
            console.log(_category);
            this.service.create(_category).subscribe(function (res) {
              console.log("Created Successfully");
              alert("Category added Successfully");

              _this5.router.navigateByUrl('/merchant/post-product'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "cat_delete",
          value: function cat_delete(_id) {
            var _this6 = this;

            this.service["delete"](_id).subscribe(function (res) {
              console.log("Update Successfully");

              _this6.ngOnInit();
            }, function (err) {});
          }
        }]);

        return AddNewCategoryPage;
      }();

      AddNewCategoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }];
      };

      AddNewCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-category',
        template: _raw_loader_add_new_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddNewCategoryPage);
      /***/
    },

    /***/
    "7Ycy":
    /*!*****************************************************************!*\
      !*** ./src/app/merchant/walletcredit/walletcredit.component.ts ***!
      \*****************************************************************/

    /*! exports provided: WalletcreditComponent */

    /***/
    function Ycy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletcreditComponent", function () {
        return WalletcreditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_walletcredit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./walletcredit.component.html */
      "2uqR");
      /* harmony import */


      var _walletcredit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./walletcredit.component.scss */
      "QsgT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); // import * as pluginDataLabels from 'chartjs-plugin-datalabels';


      var WalletcreditComponent = /*#__PURE__*/function () {
        function WalletcreditComponent(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService, datePipe) {
          _classCallCheck(this, WalletcreditComponent);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.datePipe = datePipe;
          this.total_value = 0;
          this.today_value = 0;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.final_output = [];
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
        }

        _createClass(WalletcreditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this7.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this7.storage.merchant_detail = registerData;

                _this7.router.navigateByUrl('/account/register');

                _this7.loader = false;
              }

              _this7.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
            this.loadData(); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this8 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this8.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];

                  var order_date = _this8.datePipe.transform(tem.createdAt, 'yyyy-MM-dd');

                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false,
                    order_date: order_date
                  };
                  c.product_details.push(tem);

                  _this8.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this8.corderslist;
                  var check_status = 0;
                  var _tem5 = temp_data[a];

                  for (var _c5 = 0; _c5 < datas.length; _c5++) {
                    if (datas[_c5].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c5].order_value = datas[_c5].order_value + temp_data[a].mercant_price_total, datas[_c5].order_qty = datas[_c5].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c5 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem6 = temp_data[a];

                        var _order_date2 = _this8.datePipe.transform(_tem6.createdAt, 'yyyy-MM-dd');

                        var _c6 = {
                          order_detail: _tem6,
                          order_value: _tem6.mercant_price_total,
                          order_qty: _tem6.prod_qty,
                          product_details: [],
                          view_status: false,
                          order_date: _order_date2
                        };

                        _c6.product_details.push(_tem6);

                        _this8.corderslist.push(_c6);
                      } else {
                        _this8.corderslist[_c5].product_details.push(_tem5);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this8.corderslist);
                }
              }

              _this8.remove_index();
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }

            this.total_sale_cal();
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status);
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              var d = "";

              for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
              }

              var e = {
                Order_ID: this.corderslist[a].order_detail.order_id,
                Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                Order_Details: d,
                Order_Price: this.corderslist[a].order_value,
                Item_Count: this.corderslist[a].order_qty,
                Status: this.corderslist[a].order_detail.order_dtl_status,
                Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                Note_If_Any: ''
              };
              temp.push(e);

              if (a == this.corderslist.length - 1) {
                console.log(temp);
                this.excelService.exportAsExcelFile(temp, 'Report');
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this9 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this9.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this9.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this9.corderslist;
                  var check_status = 0;
                  var _tem7 = temp_data[a];

                  for (var _c7 = 0; _c7 < datas.length; _c7++) {
                    if (datas[_c7].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c7].order_value = datas[_c7].order_value + temp_data[a].mercant_price_total, datas[_c7].order_qty = datas[_c7].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c7 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem8 = temp_data[a];
                        var _c8 = {
                          order_detail: _tem8,
                          order_value: _tem8.mercant_price_total,
                          order_qty: _tem8.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c8.product_details.push(_tem8);

                        _this9.corderslist.push(_c8);
                      } else {
                        _this9.corderslist[_c7].product_details.push(_tem7);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this9.corderslist);
                }
              }

              for (var x = 0; x < _this9.corderslist.length; x++) {
                if (x !== 0) {
                  _this9.corderslist[x].order_value = _this9.corderslist[x].order_value - _this9.corderslist[x].order_detail.mercant_price_total;
                  _this9.corderslist[x].order_qty = _this9.corderslist[x].order_qty - _this9.corderslist[x].order_detail.prod_qty;

                  _this9.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this9.corderslist.length - 1) {
                  _this9.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "total_sale_cal",
          value: function total_sale_cal() {
            this.total_value = 0;

            for (var a = 0; a < this.corderslist.length; a++) {
              var current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
              var order_date = this.datePipe.transform(this.corderslist[a].order_detail.createdAt, 'yyyy-MM-dd');
              console.log(current_date, order_date);

              if (current_date == order_date) {
                this.today_value = this.today_value + this.corderslist[a].order_value;
              }

              this.total_value = this.total_value + this.corderslist[a].order_value;
            }

            this.group_add_sum();
          }
        }, {
          key: "group_add_sum",
          value: function group_add_sum() {
            var calculated = this.corderslist.reduce(function (acc, item) {
              var accItem = acc.find(function (ai) {
                return ai.order_date === item.order_date;
              });

              if (accItem) {
                accItem.order_value += +item.order_value;
              } else {
                acc.push(item);
              }

              return acc;
            }, []);
            console.log(calculated); // this.barChartData[0].data = [];
            // this.barChartLabels = [];
            // for(let a = 0; a < calculated.length; a ++){
            //   this.barChartData[0].data.push(calculated[a].order_value);
            //   this.barChartLabels.push(calculated[a].order_date);
            // }
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
              }
            }
          }
        }]);

        return WalletcreditComponent;
      }();

      WalletcreditComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      WalletcreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-walletcredit',
        template: _raw_loader_walletcredit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [_walletcredit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WalletcreditComponent);
      /***/
    },

    /***/
    "8nLo":
    /*!******************************************************************!*\
      !*** ./src/app/merchant/report-download/report-download.page.ts ***!
      \******************************************************************/

    /*! exports provided: ReportDownloadPage */

    /***/
    function nLo(module, __webpack_exports__, __webpack_require__) {
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
      "PAKI");
      /* harmony import */


      var _report_download_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-download.page.scss */
      "sS7n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ReportDownloadPage = /*#__PURE__*/function () {
        function ReportDownloadPage(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService) {
          _classCallCheck(this, ReportDownloadPage);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.final_output = [];
          this.box_select = true;
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
          this.format = '';
          this.video_uploading = false;
          this.checkstatus = false;
        }

        _createClass(ReportDownloadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this10.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this10.storage.merchant_detail = registerData;

                _this10.router.navigateByUrl('/account/register');

                _this10.loader = false;
              }

              _this10.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
            this.loadData(); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this11 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this11.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this11.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this11.corderslist;
                  var check_status = 0;
                  var _tem9 = temp_data[a];

                  for (var _c9 = 0; _c9 < datas.length; _c9++) {
                    if (datas[_c9].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c9].order_value = datas[_c9].order_value + temp_data[a].mercant_price_total, datas[_c9].order_qty = datas[_c9].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c9 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem10 = temp_data[a];
                        var _c10 = {
                          order_detail: _tem10,
                          order_value: _tem10.mercant_price_total,
                          order_qty: _tem10.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c10.product_details.push(_tem10);

                        _this11.corderslist.push(_c10);
                      } else {
                        _this11.corderslist[_c9].product_details.push(_tem9);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this11.corderslist);
                }
              }

              _this11.remove_index();
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status);
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            if (this.checkstatus == false) {
              alert("Please select T & C");
            } else if (this.format == "") {
              alert("Should not be empty");
            } else {
              var temp = [];

              for (var a = 0; a < this.corderslist.length; a++) {
                var d = "";

                for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                  d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
                }

                var e = {
                  Order_ID: this.corderslist[a].order_detail.order_id,
                  Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                  User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                  Order_Details: d,
                  Order_Price: this.corderslist[a].order_value,
                  Item_Count: this.corderslist[a].order_qty,
                  Status: this.corderslist[a].order_detail.order_dtl_status,
                  Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                  Note_If_Any: ''
                };
                temp.push(e);

                if (a == this.corderslist.length - 1) {
                  console.log(temp);
                  this.excelService.exportAsExcelFile(temp, 'Report');
                }
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this12 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this12.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this12.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this12.corderslist;
                  var check_status = 0;
                  var _tem11 = temp_data[a];

                  for (var _c11 = 0; _c11 < datas.length; _c11++) {
                    if (datas[_c11].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c11].order_value = datas[_c11].order_value + temp_data[a].mercant_price_total, datas[_c11].order_qty = datas[_c11].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c11 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem12 = temp_data[a];
                        var _c12 = {
                          order_detail: _tem12,
                          order_value: _tem12.mercant_price_total,
                          order_qty: _tem12.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c12.product_details.push(_tem12);

                        _this12.corderslist.push(_c12);
                      } else {
                        _this12.corderslist[_c11].product_details.push(_tem11);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this12.corderslist);
                }
              }

              for (var x = 0; x < _this12.corderslist.length; x++) {
                if (x !== 0) {
                  _this12.corderslist[x].order_value = _this12.corderslist[x].order_value - _this12.corderslist[x].order_detail.mercant_price_total;
                  _this12.corderslist[x].order_qty = _this12.corderslist[x].order_qty - _this12.corderslist[x].order_detail.prod_qty;

                  _this12.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this12.corderslist.length - 1) {
                  _this12.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
              }
            }
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
          }
        }, {
          key: "change_report",
          value: function change_report(data) {
            console.log(data);

            if (data == 'Credit') {
              this.box_select = true;
              this.ngOnInit();
            } else if (data == 'Debit') {
              this.box_select = false;
              this.corderslist = [];
            }
          }
        }]);

        return ReportDownloadPage;
      }();

      ReportDownloadPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }];
      };

      ReportDownloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-download',
        template: _raw_loader_report_download_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_download_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportDownloadPage);
      /***/
    },

    /***/
    "9hib":
    /*!********************************************************************!*\
      !*** ./src/app/merchant/order-preparing/order-preparing.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function hib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1wcmVwYXJpbmcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "9qnk":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/product-list/product-list.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add_new_category\">\n    <div class=\"pt-5\">\n        <div class=\"panel panel-red\">\n            <div class=\"panel-heading mb-0 pb-0\">\n                <h3 class=\"text-left text-blue\">Product List</h3>\n            </div>\n            <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                <table class=\"table no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Category</th>\n                            <th>Product</th>\n                            <th>Product des</th>\n                            <th>Product img</th>\n                            <th>Product price</th>\n                            <th>Product Timing</th>\n                            <th>Status</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let category of Product_list\">\n                            <td>\n                                <div class=\"text-left cart_col\">\n                                    <h5 class=\"mb-0\">{{category.category.cat_name}}</h5>\n                                </div>\n                            </td>\n  \n                            <td>\n                              <div class=\"text-left cart_col\">\n                                  <h5 class=\"mb-0\">{{category.prod_name}}</h5>\n                              </div>\n                           </td>\n  \n                           <td>\n                            <div class=\"text-left cart_col\">\n                                <h5 class=\"mb-0\">{{category.prod_desc}}</h5>\n                            </div>\n                         </td>\n  \n                         <td>\n                          <div class=\"text-left cart_col\">\n                              <img src=\"{{category.prod_img}}\" style=\"width: 35%;\">\n                              <!-- <h5 class=\"mb-0\"></h5> -->\n                          </div>\n                       </td>\n  \n                       <td>\n                        <div class=\"text-left cart_col\">\n                            <h5 class=\"mb-0\">{{category.prod_price}}</h5>\n                        </div>\n                     </td>\n  \n                     <td>\n                      <div class=\"text-left cart_col\">\n                          <h5 class=\"mb-0\">{{category.prod_avail_time}}</h5>\n                      </div>\n                   </td>\n  \n                            <td>\n                                <div class=\"text-center\">\n                                    <h5 class=\"mb-0\">{{category.prod_status == 'A' ? 'Active' : 'Inactive'}}</h5>\n                                </div>\n                            </td>\n                            <td>                            \n                              <button style=\"margin: 5px; background-color: #a9bd7a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('A',category.prod_id)\" *ngIf=\"category.prod_status == 'B'\">Enable</button>\n                              <button style=\"margin: 5px; background-color: #bf7a6a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('B',category.prod_id)\" *ngIf=\"category.prod_status == 'A'\">Disable</button>\n                              <button style=\"margin: 5px;\" type=\"submit\" (click)=\"edit(category)\" class=\"btn btn-info\">Edit</button>\n                              <button style=\"margin: 5px; background-color: #bf7a6a;\" (click)=\"cat_delete(category.prod_id)\" type=\"submit\" class=\"btn btn-info\">Delete</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n       \n        \n        \n    </div>\n  </div>\n  ";
      /***/
    },

    /***/
    "CrSC":
    /*!************************************************************!*\
      !*** ./src/app/merchant/wallet-point/wallet-point.page.ts ***!
      \************************************************************/

    /*! exports provided: WalletPointPage */

    /***/
    function CrSC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPointPage", function () {
        return WalletPointPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_wallet_point_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./wallet-point.page.html */
      "mFJA");
      /* harmony import */


      var _wallet_point_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wallet-point.page.scss */
      "3pPA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var WalletPointPage = /*#__PURE__*/function () {
        function WalletPointPage(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService, datePipe) {
          _classCallCheck(this, WalletPointPage);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.datePipe = datePipe;
          this.page_visible = false;
          this.D_total_value = 0;
          this.D_today_value = 0;
          this.C_total_value = 0;
          this.C_today_value = 0;
          this.loader = true;
          this.corderslist = [];
          this.time_corderslist = [];
          this.history_list = [];
          this.final_output = [];
          this.today_time = [];
          this.time_data = [];
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
          this.today_time = [];
          this.current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd'); // this.current_date = "2021-07-04"

          var temp_date = this.current_date.split("-");
          var temp_date1 = [temp_date[0] + "-" + temp_date[1] + "-" + "01", temp_date[0] + "-" + temp_date[1] + "-" + "02", temp_date[0] + "-" + temp_date[1] + "-" + "03", temp_date[0] + "-" + temp_date[1] + "-" + "04", temp_date[0] + "-" + temp_date[1] + "-" + "05", temp_date[0] + "-" + temp_date[1] + "-" + "06", temp_date[0] + "-" + temp_date[1] + "-" + "07", temp_date[0] + "-" + temp_date[1] + "-" + "08", temp_date[0] + "-" + temp_date[1] + "-" + "09", temp_date[0] + "-" + temp_date[1] + "-" + "10", temp_date[0] + "-" + temp_date[1] + "-" + "11", temp_date[0] + "-" + temp_date[1] + "-" + "12", temp_date[0] + "-" + temp_date[1] + "-" + "13", temp_date[0] + "-" + temp_date[1] + "-" + "14", temp_date[0] + "-" + temp_date[1] + "-" + "15", temp_date[0] + "-" + temp_date[1] + "-" + "16", temp_date[0] + "-" + temp_date[1] + "-" + "17", temp_date[0] + "-" + temp_date[1] + "-" + "18", temp_date[0] + "-" + temp_date[1] + "-" + "19", temp_date[0] + "-" + temp_date[1] + "-" + "20", temp_date[0] + "-" + temp_date[1] + "-" + "21", temp_date[0] + "-" + temp_date[1] + "-" + "22", temp_date[0] + "-" + temp_date[1] + "-" + "23", temp_date[0] + "-" + temp_date[1] + "-" + "24", temp_date[0] + "-" + temp_date[1] + "-" + "25", temp_date[0] + "-" + temp_date[1] + "-" + "26", temp_date[0] + "-" + temp_date[1] + "-" + "27", temp_date[0] + "-" + temp_date[1] + "-" + "28", temp_date[0] + "-" + temp_date[1] + "-" + "29", temp_date[0] + "-" + temp_date[1] + "-" + "30", temp_date[0] + "-" + temp_date[1] + "-" + "31"];
          console.log(temp_date1);

          for (var a = 0; a < 25; a++) {
            var time = '';

            if (a < 10) {
              time = this.current_date + "T0" + a + ":00:00.000Z";
            } else {
              time = this.current_date + "T" + a + ":00:00.000Z";
            } // console.log(time);


            this.today_time.push(time);
          }
        }

        _createClass(WalletPointPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this13.profile = res;

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                _this13.storage.merchant_detail = registerData;

                _this13.router.navigateByUrl('/account/register');

                _this13.loader = false;
              }

              _this13.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
            this.loadData(); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this14 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this14.corderslist = [];
              var temp_data = res.rows;

              if (temp_data.length == 0) {
                _this14.initial(["0"], [0], [0]);

                _this14.initial1([0], ["0"], [0]);
              } else {
                for (var a = 0; a < temp_data.length; a++) {
                  if (a == 0) {
                    var tem = temp_data[0];
                    var order_date = tem.createdAt;
                    var c = {
                      order_detail: tem,
                      order_value: tem.mercant_price_total,
                      order_qty: tem.prod_qty,
                      product_details: [],
                      view_status: false,
                      order_date: order_date,
                      current_date: order_date
                    };
                    c.product_details.push(tem);

                    _this14.corderslist.push(c);
                  } else {
                    var datas = [];
                    datas = _this14.corderslist;
                    var check_status = 0;
                    var _tem13 = temp_data[a];

                    for (var _c13 = 0; _c13 < datas.length; _c13++) {
                      if (datas[_c13].order_detail.order_id == temp_data[a].order_id) {
                        datas[_c13].order_value = datas[_c13].order_value + temp_data[a].mercant_price_total, datas[_c13].order_qty = datas[_c13].order_qty + temp_data[a].prod_qty;
                        check_status = 1;
                      }

                      if (_c13 == datas.length - 1) {
                        if (check_status == 0) {
                          var _tem14 = temp_data[a];
                          var _order_date3 = _tem14.createdAt;
                          var _c14 = {
                            order_detail: _tem14,
                            order_value: _tem14.mercant_price_total,
                            order_qty: _tem14.prod_qty,
                            product_details: [],
                            view_status: false,
                            order_date: _order_date3,
                            current_date: _order_date3
                          };

                          _c14.product_details.push(_tem14);

                          _this14.corderslist.push(_c14);
                        } else {
                          _this14.corderslist[_c13].product_details.push(_tem13);
                        }
                      }
                    }
                  }

                  if (a == temp_data.length - 1) {}
                }

                _this14.remove_index();
              }
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }

              if (a == this.corderslist.length - 1) {
                this.time_corderslist = this.corderslist;
                this.total_sale_cal();
                this.total_sale_time();
              }
            }
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              var d = "";

              for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
              }

              var e = {
                Order_ID: this.corderslist[a].order_detail.order_id,
                Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                Order_Details: d,
                Order_Price: this.corderslist[a].order_value,
                Item_Count: this.corderslist[a].order_qty,
                Status: this.corderslist[a].order_detail.order_dtl_status,
                Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                Note_If_Any: ''
              };
              temp.push(e);

              if (a == this.corderslist.length - 1) {
                this.excelService.exportAsExcelFile(temp, 'Report');
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this15 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              if (res.count == 0) _this15.corderslist = [];
              var temp_data = res.rows;

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this15.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this15.corderslist;
                  var check_status = 0;
                  var _tem15 = temp_data[a];

                  for (var _c15 = 0; _c15 < datas.length; _c15++) {
                    if (datas[_c15].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c15].order_value = datas[_c15].order_value + temp_data[a].mercant_price_total, datas[_c15].order_qty = datas[_c15].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c15 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem16 = temp_data[a];
                        var _c16 = {
                          order_detail: _tem16,
                          order_value: _tem16.mercant_price_total,
                          order_qty: _tem16.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c16.product_details.push(_tem16);

                        _this15.corderslist.push(_c16);
                      } else {
                        _this15.corderslist[_c15].product_details.push(_tem15);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {}
              }

              for (var x = 0; x < _this15.corderslist.length; x++) {
                if (x !== 0) {
                  _this15.corderslist[x].order_value = _this15.corderslist[x].order_value - _this15.corderslist[x].order_detail.mercant_price_total;
                  _this15.corderslist[x].order_qty = _this15.corderslist[x].order_qty - _this15.corderslist[x].order_detail.prod_qty;

                  _this15.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this15.corderslist.length - 1) {
                  _this15.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
              }
            }
          }
        }, {
          key: "total_sale_cal",
          value: function total_sale_cal() {
            this.C_today_value = 0;
            this.C_total_value = 0;
            this.D_today_value = 0;
            this.D_total_value = 0;

            for (var a = 0; a < this.corderslist.length; a++) {
              var current_date = this.datePipe.transform(new Date(), 'MMM,dd');
              current_date = current_date;
              var order_date = this.datePipe.transform(this.corderslist[a].order_date, 'MMM,dd');
              order_date = order_date;
              this.corderslist[a].order_date = order_date;

              if (current_date == order_date) {
                this.C_today_value = this.C_today_value + this.corderslist[a].order_value;
              }

              this.C_total_value = this.C_total_value + this.corderslist[a].order_value;
            }

            this.group_add_sum();
          }
        }, {
          key: "group_add_sum",
          value: function group_add_sum() {
            var calculated = this.corderslist.reduce(function (acc, item) {
              var accItem = acc.find(function (ai) {
                return ai.order_date === item.order_date;
              });

              if (accItem) {
                accItem.order_value += +item.order_value;
              } else {
                acc.push(item);
              }

              return acc;
            }, []);
            var series = []; // this.chartOptions.series[0].data = [];
            // this.chartOptions.xaxis.categories = [];
            // this.barChartData[0].data = [];
            // this.barChartLabels = [];

            var c = [];
            var d = [];
            var e = [];
            this.C_total_value = 0;
            this.D_total_value = 0;

            for (var a = 0; a < calculated.length; a++) {
              c.push(calculated[a].order_value);
              e.push(calculated[a].order_value / 2);
              d.push(calculated[a].order_date);
              this.C_total_value = this.C_total_value + calculated[a].order_value;
              this.D_total_value = this.D_total_value + calculated[a].order_value / 2;
            } // console.log(this.chartOptions.xaxis.categories);
            // this.chartOptions = this.chartOptions;


            this.initial1(c, d, e);
          }
        }, {
          key: "total_sale_time",
          value: function total_sale_time() {
            this.time_data = [];

            for (var a = 0; a < this.time_corderslist.length; a++) {
              console.log(this.time_corderslist[a].order_value);

              if (this.time_corderslist[a].current_date >= this.today_time[0] && this.time_corderslist[a].current_date < this.today_time[1]) {
                console.log("One 1");
                var id = "00";
                var value = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": id,
                  "total": value
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[1] && this.time_corderslist[a].current_date < this.today_time[2]) {
                console.log("One 2");
                var _id2 = "01";
                var _value = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id2,
                  "total": _value
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[2] && this.time_corderslist[a].current_date < this.today_time[3]) {
                console.log("One 3");
                var _id3 = "02";
                var _value2 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id3,
                  "total": _value2
                });
                console.log(this.time_data);
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[3] && this.time_corderslist[a].current_date < this.today_time[4]) {
                console.log("One 4");
                var _id4 = "03";
                var _value3 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id4,
                  "total": _value3
                });
                console.log(this.time_data);
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[4] && this.time_corderslist[a].current_date < this.today_time[5]) {
                console.log("One 5");
                var _id5 = "04";
                var _value4 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id5,
                  "total": _value4
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[5] && this.time_corderslist[a].current_date < this.today_time[6]) {
                console.log("One 6");
                var _id6 = "05";
                var _value5 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id6,
                  "total": _value5
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[6] && this.time_corderslist[a].current_date < this.today_time[7]) {
                console.log("One 7");
                var _id7 = "06";
                var _value6 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id7,
                  "total": _value6
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[7] && this.time_corderslist[a].current_date < this.today_time[8]) {
                console.log("One 8");
                var _id8 = "07";
                var _value7 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id8,
                  "total": _value7
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[8] && this.time_corderslist[a].current_date < this.today_time[9]) {
                console.log("One 9");
                var _id9 = "08";
                var _value8 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id9,
                  "total": _value8
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[9] && this.time_corderslist[a].current_date < this.today_time[10]) {
                console.log("One 10");
                var _id10 = "09";
                var _value9 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id10,
                  "total": _value9
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[10] && this.time_corderslist[a].current_date < this.today_time[11]) {
                console.log("One 11");
                var _id11 = "10";
                var _value10 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id11,
                  "total": _value10
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[11] && this.time_corderslist[a].current_date < this.today_time[12]) {
                console.log("One 12");
                var _id12 = "11";
                var _value11 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id12,
                  "total": _value11
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[12] && this.time_corderslist[a].current_date < this.today_time[13]) {
                console.log("One 13");
                var _id13 = "12";
                var _value12 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id13,
                  "total": _value12
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[13] && this.time_corderslist[a].current_date < this.today_time[14]) {
                console.log("One 14");
                var _id14 = "13";
                var _value13 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id14,
                  "total": _value13
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[14] && this.time_corderslist[a].current_date < this.today_time[15]) {
                console.log("One 15");
                var _id15 = "14";
                var _value14 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id15,
                  "total": _value14
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[15] && this.time_corderslist[a].current_date < this.today_time[16]) {
                console.log("One 16");
                var _id16 = "15";
                var _value15 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id16,
                  "total": _value15
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[16] && this.time_corderslist[a].current_date < this.today_time[17]) {
                console.log("One 17");
                var _id17 = "16";
                var _value16 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id17,
                  "total": _value16
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[17] && this.time_corderslist[a].current_date < this.today_time[18]) {
                console.log("One 18");
                var _id18 = "17";
                var _value17 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id18,
                  "total": _value17
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[18] && this.time_corderslist[a].current_date < this.today_time[19]) {
                console.log("One 19");
                var _id19 = "18";
                var _value18 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id19,
                  "total": _value18
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[19] && this.time_corderslist[a].current_date < this.today_time[20]) {
                console.log("One 20");
                var _id20 = "19";
                var _value19 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id20,
                  "total": _value19
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[20] && this.time_corderslist[a].current_date < this.today_time[21]) {
                console.log("One 21");
                var _id21 = "20";
                var _value20 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id21,
                  "total": _value20
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[21] && this.time_corderslist[a].current_date < this.today_time[22]) {
                console.log("One 22");
                var _id22 = "21";
                var _value21 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id22,
                  "total": _value21
                });
                console.log(this.time_data);
              }

              if (this.time_corderslist[a].current_date >= this.today_time[22] && this.time_corderslist[a].current_date < this.today_time[23]) {
                console.log("One 23");
                var _id23 = "22";
                var _value22 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id23,
                  "total": _value22
                });
              }

              if (this.time_corderslist[a].current_date >= this.today_time[23] && this.time_corderslist[a].current_date < this.today_time[23]) {
                console.log("One 24");
                var _id24 = "23";
                var _value23 = this.time_corderslist[a].order_value;
                this.time_data.push({
                  "id": _id24,
                  "total": _value23
                });
              }

              if (this.corderslist.length - 1 == a) {
                console.log(this.time_data);
                this.group_time();
              }
            }
          }
        }, {
          key: "group_time",
          value: function group_time() {
            console.log(this.time_data);
            var data = [];
            data = this.time_data;
            var map = data.reduce(function (prev, next) {
              if (next.id in prev) {
                prev[next.id].total += next.total;
              } else {
                prev[next.id] = next;
              }

              return prev;
            }, {});
            var result = Object.keys(map).map(function (id) {
              return map[id];
            });
            console.log(result);
            var c = [];
            var d = [];
            var e = [];
            this.C_today_value = 0;
            this.D_today_value = 0;

            for (var a = 0; a < result.length; a++) {
              console.log(result[a].total);
              console.log(result[a].id);
              c.push(result[a].id);
              d.push(result[a].total / 2);
              e.push(result[a].total);
              this.C_today_value = this.C_today_value + result[a].total;
              this.D_today_value = this.D_today_value + result[a].total / 2;
            }

            this.initial(c, d, e);
          }
        }, {
          key: "initial",
          value: function initial(c, d, e) {
            this.chartOptions = {
              series: [{
                name: "Credit amount",
                data: e
              }, {
                name: "Debit Amount",
                data: d
              }],
              chart: {
                height: 350,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: c,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions1 = {
              series: [{
                name: "Credit amount",
                data: e
              }],
              chart: {
                height: 150,
                width: 200,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: c,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions2 = {
              series: [{
                name: "Debit Amount",
                data: d
              }],
              chart: {
                height: 150,
                width: 200,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: c,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.page_visible = true;
          }
        }, {
          key: "initial1",
          value: function initial1(c, d, e) {
            this.chartOptionss = {
              series: [{
                name: "Credit amount",
                data: c
              }, {
                name: "Debit Amount",
                data: e
              }],
              chart: {
                height: 350,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: d
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptionss1 = {
              series: [{
                name: "Credit amount",
                data: c
              }],
              chart: {
                height: 150,
                width: 200,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: d
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptionss2 = {
              series: [{
                name: "Debit Amount",
                data: e
              }],
              chart: {
                height: 150,
                width: 200,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: d
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.page_visible = true;
          }
        }]);

        return WalletPointPage;
      }();

      WalletPointPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      WalletPointPage.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["chart"]
        }]
      };
      WalletPointPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet-point',
        template: _raw_loader_wallet_point_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [_wallet_point_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WalletPointPage);
      /***/
    },

    /***/
    "DB5E":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/product-edit/product-edit.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function DB5E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWVkaXQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "DISn":
    /*!**********************************************************************!*\
      !*** ./src/app/merchant/add-new-category/add-new-category.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function DISn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DKIu":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/rider-picked/rider-picked.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DKIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>rider-picked</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Rider Picked</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n\n  <div class=\"mp_panel\">\n\n      <div class=\"pt-2\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-red\">Pending Approval</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"150\">\n                                  status\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"#\" class=\"btn btn-sm btn-danger\">waiting for rider</a>\n\n                              </td>\n                          </tr>\n                        \n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n\n       \n      </div>\n\n      <div class=\"pt-5\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-blue\">Approved History</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"150\">\n                                  Status\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"#\" class=\"btn btn-sm btn-info w-100 mb-2\">Rider id</a>\n                                  <a href=\"#\" class=\"btn btn-sm btn-success w-100 mb-2\">Status</a>\n                              </td>\n                          </tr>\n                         \n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n        \n          \n          \n      </div>\n  </div>\n";
      /***/
    },

    /***/
    "EpXY":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/post-product/post-product.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EpXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n     <div class=\"row gutter\">\n         <div class=\"col-lg-12\">\n             <div class=\"page-title\">\n                 <h3>Post Product</h3>\n             </div>\n         </div>\n\n     </div>\n </div>\n <!-- Top Bar Ends -->\n\n <div class=\"d-flex align-items-center justify-content-center flex-row\">\n     <div class=\"text-center pr-3 pl-3\">\n         <a href=\"merchant/product-add\">\n         <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n             <i class=\"icon-shopping-cart\"></i>\n         </span>\n         <h5>Add New Product</h5>\n     </a>\n     </div>\n     <div class=\"text-center pr-3 pl-3\">\n         <a href=\"merchant/products-list\">\n         <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n             <i class=\"icon-shopping-cart\"></i>\n         </span>\n         <h5>View Products</h5>\n     </a>\n     </div>\n </div>\n</div>\n";
      /***/
    },

    /***/
    "FXAi":
    /*!****************************************************************************!*\
      !*** ./src/app/merchant/update-order-status/update-order-status.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function FXAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ngx-pagination {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #000 !important;\n  text-decoration: none;\n  background-color: #fec429 !important;\n  border: 1px solid #ddd !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwZGF0ZS1vcmRlci1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUFDSiIsImZpbGUiOiJ1cGRhdGUtb3JkZXItc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtcGFnaW5hdGlvbiB7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVjNDI5ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "Fv72":
    /*!***********************************************************!*\
      !*** ./src/app/merchant/dashboard/dashboard.component.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function Fv72(module, __webpack_exports__, __webpack_require__) {
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
      "uHJD");
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      "GDK+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(storage, service, router, // private auth: AuthService,
        auth, videoservice, orderservice) {
          _classCallCheck(this, DashboardPage);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.auth = auth;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.options = {
            types: [],
            componentRestrictions: {
              country: 'IN'
            }
          };
          this.zoom = 16;
          this.base_lat = 11.1271;
          this.base_lng = 78.6569;
          this.location_lat = 11.1271;
          this.location_lng = 78.6569;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.order_status = 'B';
          this.final_output = [];
          this.confirmation_list = [];
          this.preparing_list = [];
          this.rider_list = [];
          this.deliver_list = [];
          this.cancel_list = [];
          this.edit_summary = false;
          this.summary_value = '';
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this16.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this16.storage.merchant_detail = registerData;

                _this16.router.navigateByUrl('/account/register');

                _this16.loader = false;
              }

              _this16.loader = false;
              _this16.base_lat = _this16.profile.location_lat;
              _this16.base_lng = _this16.profile.location_lng;
              _this16.location_lat = _this16.profile.location_lat;
              _this16.location_lng = _this16.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
            this.loadData();
            this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this17 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id),
              status: this.order_status
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this17.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this17.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this17.corderslist;
                  var check_status = 0;
                  var _tem17 = temp_data[a];

                  for (var _c17 = 0; _c17 < datas.length; _c17++) {
                    if (datas[_c17].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c17].order_value = datas[_c17].order_value + temp_data[a].mercant_price_total, datas[_c17].order_qty = datas[_c17].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c17 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem18 = temp_data[a];
                        var _c18 = {
                          order_detail: _tem18,
                          order_value: _tem18.mercant_price_total,
                          order_qty: _tem18.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c18.product_details.push(_tem18);

                        _this17.corderslist.push(_c18);
                      } else {
                        _this17.corderslist[_c17].product_details.push(_tem17);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this17.corderslist);

                  _this17.remove_index();
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "fetch_video",
          value: function fetch_video() {
            var _this18 = this;

            var a = this.storage.user.profile_id;
            this.videoservice.list(a).subscribe(function (res) {
              _this18.video_count = res.count;
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }

              if (a == this.corderslist.length - 1) {
                this.divider();
              }
            }
          }
        }, {
          key: "divider",
          value: function divider() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (this.corderslist[a].order_detail.order_dtl_status == 'B') {
                this.confirmation_list.push(this.corderslist[a]);
              } else if (this.corderslist[a].order_detail.order_dtl_status == 'A') {
                this.preparing_list.push(this.corderslist[a]);
              } else if (this.corderslist[a].order_detail.order_dtl_status == 'P') {
                this.rider_list.push(this.corderslist[a]);
              } else if (this.corderslist[a].order_detail.order_dtl_status == 'D') {
                this.deliver_list.push(this.corderslist[a]);
              } else if (this.corderslist[a].order_detail.order_dtl_status == 'C') {
                this.cancel_list.push(this.corderslist[a]);
              }
            }
          }
        }, {
          key: "updatestatus",
          value: function updatestatus(data, order_detail) {
            console.log(data, order_detail.product_details.length); // order_detail = order_detail.order_detail;

            for (var a = 0; a < order_detail.product_details.length; a++) {
              var order_id = order_detail.product_details[a].order_dtl_id;

              if (data == 'Accept') {
                var _a = {
                  order_dtl_status: "A",
                  order_dtl_id: order_id
                };
                console.log(_a);
                this.orderservice.update_status(_a).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Cancel') {
                var _a2 = {
                  order_dtl_status: "C",
                  order_dtl_id: order_id
                };
                console.log(_a2);
                this.orderservice.update_status(_a2).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Pick_Delivery') {
                var _a3 = {
                  order_dtl_status: "P",
                  order_dtl_id: order_id
                };
                console.log(_a3);
                this.orderservice.update_status(_a3).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Delivered') {
                var _a4 = {
                  order_dtl_status: "D",
                  order_dtl_id: order_id
                };
                console.log(_a4);
                this.orderservice.update_status(_a4).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              }

              if (a == order_detail.product_details.length - 1) {
                this.ngOnInit();
              }
            }
          }
        }, {
          key: "edit_summary_action",
          value: function edit_summary_action() {
            this.edit_summary = true;
            this.summary_value = this.profile.profile_summary;
          }
        }, {
          key: "edit_submit",
          value: function edit_submit() {
            var _this19 = this;

            this.edit_summary = false; // var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));

            var registerData = {
              profile_summary: this.summary_value,
              profile_id: this.profile.profile_id
            };
            this.auth.register_summary(registerData).subscribe(function (res) {
              console.log(res);
              _this19.profile.profile_summary = _this19.summary_value; // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
              // this.toastr.successToastr('Registered Succesfully');
              // this.router.navigateByUrl("merchant_panel/dashboard");
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {// this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }];
      };

      DashboardPage.propDecorators = {
        agmMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmMap"], {
            "static": true
          }]
        }],
        placesRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["placesRef"]
        }]
      };
      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "GDK+":
    /*!********************************************************!*\
      !*** ./src/app/merchant/dashboard/dashboard.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function GDK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".location {\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  height: 53px;\n  white-space: normal;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYXRpb257XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */";
      /***/
    },

    /***/
    "GW5J":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/walletdebit/walletdebit.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GW5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>wallet-point</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n                <h3>Debit Wallet Point</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<h3 class=\"text-left text-red\">Overview</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 col md-6\">\n        <div class=\"panel\">\n            <div class=\"sessions\">\n                <h2 class=\"left\">{{today_value}} <i class=\"icon-direction up\"></i></h2>\n                <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n            </div>\n            <h5 class=\"info pt-3\">Today Debit</h5>\n        </div>\n    </div>\n    <div class=\"col-lg-6 col md-6\">\n        <div class=\"panel\">\n            <div class=\"sessions\">\n                <h2 class=\"left\">{{total_value}} <i class=\"icon-direction up\"></i></h2>\n                <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n            </div>\n            <h5 class=\"info pt-3\">Total Debit</h5>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <!-- <div class=\"col-md-12\">\n        <div class=\"panel\">\n            <h4 class=\"text-left text-red\">Debit Report</h4>\n\n          \n        </div>\n    </div> -->\n\n</div>   \n\n\n<div class=\"pt-3\">\n    <h4 class=\"text-left text-red\">Debit Report</h4>\n\n    <div class=\"panel panel-yellow pt-0\">\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover no-margin\">\n                    <thead>\n                        <tr>\n                            <th>S.No</th>\n                            <th>Date & Time</th>\n                            <th>Order Id</th>\n                            <th>Product Id</th>\n                            <th>User Id</th>\n                            <th>Product Details</th>\n                            <th>Note</th>\n                            <th>Quantity</th>\n                            <th>Price</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                           <tr *ngIf=\"corderslist.length !== 0\">\n                               <td>\n                                   {{i+1}}\n                               </td>\n                               <td>\n       \n                                   {{order.order_detail.order_mst.order_date}}\n                               </td>\n                               <td>\n                                   {{order.order_detail.order_id}}\n                               </td>\n                               <td>\n                                   {{order.order_detail.order_mst.customer_info.profile_id}} \n                                   <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                               </td>\n                               <td>\n                                   <ng-container  *ngFor=\"let item of order.product_details\">\n                                       <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                                   </ng-container>\n                                   <!-- {{order.order_detail.order_mst.order_no}} -->\n                               </td>\n                               <td>\n                               </td>\n                               <td>\n                                   {{order.order_qty}}\n                                   <!-- {{order.product_details.length}} -->\n                               </td>\n                               <td>\n                                   {{order.order_value}}\n                               </td>\n                               <!-- <td>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                                   <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p>\n                               </td> -->\n\n                               <td>Debited</td>\n                              \n                               <td>\n                                <!-- <button class=\"btn btn-success\" (click)=\"history_view(i)\">View</button> -->\n                               </td>\n                            </tr>\t              \n                           </ng-container>\n                           <tr *ngIf=\"corderslist.length == 0\">\n                               <td colspan=\"10\">No Record Found</td>\n                            </tr>\n                                                  \n                       </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n";
      /***/
    },

    /***/
    "HcDT":
    /*!****************************************************************!*\
      !*** ./src/app/merchant/category-list/category-list.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function HcDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KvSe":
    /*!*****************************************************************!*\
      !*** ./src/app/merchant/walletdebit/walletdebit.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function KvSe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXRkZWJpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LFEH":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/videoview/videoview.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LFEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- Video Popup Start  -->\n<div class=\"video_wrapper position-fixed row no-gutters\">\n  <div class=\"col-md-9 position-relative video_show d-md-flex d-block flex-column align-items-center justify-content-center\">\n      <div class=\"flx_1 position-relative w-100\">\n          <header class=\"video_head p-2 d-md-none d-block\">\n              <div class=\"row no-gutters align-items-center\">\n                  <div class=\"col-6 pl-2 video_top_left\">\n                          <i class=\"fa fa-android video_android text-white pr-1 cursor-pointer\"></i>\n                          <i class=\"fa fa-apple video_mac text-white cursor-pointer\"></i>\n                  </div>\n                  <div class=\"col-6 pr-5 text-right video_top_right\">\n                      <img src=\"images/144x144.png\" alt=\"\">\n                  </div>\n              </div>\n          </header>\n          <div class=\"video_clos_min\">\n            <div class=\"d-md-flex align-items-center justify-content-center\">\n              <span class=\"video_close d-block d-md-none yellow_txt\">X</span>\n            </div> \n              \n          </div>\n          \n          <video controls class=\"video_frame\">\n              <source src=\"video/home_video.mp4\" type=\"video/mp4\">\n              Your browser does not support the video tag.\n          </video>\n      </div>\n      <div class=\"flx_0 w-100 video_cont_icon p-2\">\n          <div class=\"row\">\n              <div class=\"col-md-6 col-12 pb-4 pb-md-0 text-right text-md-left  video_prev_icon\">\n                  <div class=\"d-inline-flex flex-column flex-md-row align-items-center\">\n                      <img src=\"images/video_prev.png\"/>\n                      <span class=\"pl-0 pl-md-2\">Prev</span>\n                  </div>\n              </div>\n              <div class=\"col-md-6 col-12 text-right video_next_icon\">\n                  <div class=\"d-inline-flex flex-column flex-md-row align-items-center\">\n                      <span class=\"pr-0 pr-md-2\">Next</span>\n                      <img src=\"images/video_next.png\"/>\n                  </div>\n              </div>\n          </div>\n      </div>\n     \n  </div>\n  <div class=\"col-md-3 h-100 d-md-flex video_chat_right flex-column\">\n      <div class=\"flx_0\">\n         \n          <div class=\"p-3 pb-0 video_info_txt\">\n              <div class=\"d-flex\">\n                  <div class=\"flx_0 pr-2\">\n                      <img src=\"images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                  </div>\n                  <div class=\"flx_1 line_n\">\n                      <span class=\"pb-2 txt_bold\"> Veemalaraj</span>\n                      <p class=\"c_name mb-0\">2 Mins ago</p>                                  \n                  </div>\n\n                  \n              </div>\n              <div class=\"pt-md-3 pt-0 aside_video d-flex justify-content-md-between justify-content-end align-items-end flex-md-row flex-column\">\n\n                  <span class=\"cursor-pointer d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                      <img src=\"images/like-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                      <span class=\"d-md-block d-none\">Like</span>\n                      <span class=\"d-md-none d-block\">5052</span>\n                  </span>\n                  <span class=\"cursor-pointer d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                      <img src=\"images/comments-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                      <span class=\"d-md-block d-none\">Comments</span>\n                      <span class=\"d-md-none d-block\">5052</span>\n                  </span>\n                  <span class=\"cursor-pointer share_icon d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                      <img src=\"images/share-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                      <span class=\"d-md-block d-none\">Share</span>\n                      <span class=\"d-md-none d-block\">5052</span>\n                  </span>\n              </div>\n             \n          </div>\n      </div>\n     \n        <div class=\"chat_comments chat_hidden flx_1 flex-column d-md-flex\">\n          <div class=\"chat_pro flx_1\">\n              <ul>\n                  <li class=\"pb-3\">\n                      <div class=\"d-flex\">\n                          <div class=\"flx_1\">\n                              <div class=\"d-flex\">\n                                  <div class=\"flx_0 pr-2\">\n                                      <img src=\"images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                                  </div>\n                                  <div class=\"flx_1 line_n\">\n                                      <span class=\"c_msg pb-2\"> Profile Name</span>\n                                      <p class=\"c_name mb-0\">sample username</p>  \n                                      <div class=\"pt-1\">\n                                          <span class=\"hrs_coment\">22h</span> <span class=\"cursor-pointer comment_rply\">Reply</span>\n                                      </div>                                  \n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"flx_0 video_like\">\n                              <i class=\"fa fa-heart-o cursor-pointer\"></i> \n                              <span class=\"d-block\">53</span>\n                          </div>\n                      </div>\n                     \n                  </li>\n                  <li class=\"pb-3\">\n                      <div class=\"d-flex\">\n                          <div class=\"flx_1\">\n                              <div class=\"d-flex\">\n                                  <div class=\"flx_0 pr-2\">\n                                      <img src=\"images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                                  </div>\n                                  <div class=\"flx_1 line_n\">\n                                      <span class=\"c_msg pb-2\"> Profile Name</span>\n                                      <p class=\"c_name mb-0\">sample username</p>  \n                                      <div class=\"pt-1\">\n                                          <span class=\"hrs_coment\">22h</span> <span class=\"cursor-pointer comment_rply\">Reply</span>\n                                      </div>                                      \n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"flx_0 video_like\">\n                              <i class=\"fa fa-heart-o cursor-pointer\"></i> \n                              <span class=\"d-block\">53</span>\n                          </div>\n                      </div>\n                     \n                  </li>\n              </ul>\n          </div>\n        \n          <div class=\"flx_0 p-2 foot_chat\">\n              <textarea name=\"\" class=\"chat_input w-100\"></textarea>\n          </div>\n        </div>\n       \n\n     \n  </div>\n</div>\n<!-- Video Popup HTML End  -->";
      /***/
    },

    /***/
    "Lf1n":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/debitreport/debitreport.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lf1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>report-download</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n                <h3>Report</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n\n\n\n\n\n\n<div class=\"report_info pt-3\">\n    <div class=\"panel mb-3\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label>Debit Report Type</label>\n                <select name=\"\" class=\"form-control\" id=\"\" [(ngModel)]=\"format\" name=\"format\">\n                    <option value=\"\">Select</option>\n                    <option value=\"Excel\">Excel</option>\n                </select>\n                 <div class=\"warning\" *ngIf=\"type_error.length !== 0\">\n                    {{type_error}}\n                  </div>\n            </div>\n            <br>\n            <div class=\"form-group\">  \n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Select Start date</label> \n                    <input type=\"date\" [(ngModel)]=\"start_date\" class=\"form-control\" placeholder=\"Start Date\">\n                    <div class=\"warning\" *ngIf=\"start_date_error.length !== 0\">\n                        {{start_date_error}}\n                      </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Select End date</label> \n                    <input type=\"date\" [(ngModel)]=\"end_date\" class=\"form-control\" placeholder=\"Start Date\">\n                    <div class=\"warning\" *ngIf=\"end_date_error.length !== 0\">\n                        {{end_date_error}}\n                      </div>\n                </div>\n            </div>           \n            <div class=\"form-group pt-3\">\n\n              <input type=\"checkbox\"  class=\"largerCheckbox\"  id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\" (change)=\"toggleEditable($event)\"> Agree Terms &amp; Conditions\n              <div class=\"warning\" *ngIf=\"agreement_error.length !== 0\">\n                {{agreement_error}}\n              </div>\n\n                <!-- <input type=\"checkbox\"> Agree Terms & Conditions -->\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"fetch_date()\">Download</button>\n    </div>\n</div>\n\n<div class=\"pt-2\">\n  <div class=\"panel panel-red\">\n      <div class=\"panel-heading mb-0 pb-0\">\n          <h4 class=\"text-left\">Report Detail</h4>\n      </div>\n      <div class=\"panel-body table-responsive pb-0\">\n          <table class=\"table no-margin text-center\">\n              <thead>\n                  <tr>\n                      <th>S.No</th>\n                      <th>Date & Time</th>\n                      <th>Order Id</th>\n                      <th>User Id</th>\n                      <th>Product Details</th>\n                      <th>Note</th>\n                      <th>Quantity</th>\n                      <th>Price</th>\n                      <th>Status</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                      <tr *ngIf=\"corderslist.length !== 0\">\n                          <td>\n                              {{i+1}}\n                          </td>\n                          <td>\n  \n                              {{order.order_detail.order_mst.order_date}}\n                          </td>\n                          <td>\n                              {{order.order_detail.order_id}}\n                          </td>\n                          <td>\n                              {{order.order_detail.order_mst.customer_info.profile_id}} \n                              <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                          </td>\n                          <td>\n                              <ng-container  *ngFor=\"let item of order.product_details\">\n                                  <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                              </ng-container>\n                              <!-- {{order.order_detail.order_mst.order_no}} -->\n                          </td>\n                          <td>\n                          </td>\n                          <td>\n                              {{order.order_qty}}\n                              <!-- {{order.product_details.length}} -->\n                          </td>\n                          <td>\n                              {{order.order_value}}\n                          </td>\n                          <!-- <td>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p>\n                          </td> -->\n                          <td>Debited</td>\n                       </tr>\t              \n                      </ng-container>\n                      <tr *ngIf=\"corderslist.length == 0\">\n                          <td colspan=\"10\">No Record Found</td>\n                       </tr>                   \n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "M8PV":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/delivered/delivered.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function M8PV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>delivered</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Delivered</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n\n  <div class=\"mp_panel\">\n\n      <div class=\"pt-2\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-red\">Pending Deliever</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"150\">\n                                  Status\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"#\" class=\"btn btn-sm btn-info w-100 mb-2\">Rider id</a>\n                                  <a href=\"#\" class=\"btn btn-sm btn-success w-100 mb-2\">Pending</a>\n                              </td>\n                          </tr>\n                         \n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n\n        \n      </div>\n\n      <div class=\"pt-5\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-blue\">Delivered History</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Id</th>\n                              <th>Product Details</th>\n                              <th>Qty</th>\n                              <th>Price</th>\n                              <th width=\"150\">\n                                  Status\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          product details here\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Customer Note\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  25\n                              </td>\n                              <td>\n                                  154.00\n                              </td>\n                              <td>\n                                  <a href=\"#\" class=\"btn btn-sm btn-info w-100 mb-2\">Rider id</a>\n                                  <a href=\"#\" class=\"btn btn-sm btn-success w-100 mb-2\">Pending</a>\n                              </td>\n                          </tr>\n                         \n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n";
      /***/
    },

    /***/
    "NXTk":
    /*!**********************************************!*\
      !*** ./src/app/merchant/login/login.page.ts ***!
      \**********************************************/

    /*! exports provided: LoginPage */

    /***/
    function NXTk(module, __webpack_exports__, __webpack_require__) {
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
      "q7gt");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "uYOO");
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
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, route, formBuilder, auth, storage, toastr) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.storage = storage;
          this.toastr = toastr;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
          this.email_error = false;
          this.password_error = false;
          this.password_error_msg = '';
          this.email_loader = false;
          this.pass_loader = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            // if (this.storage.user) {
            //   this.router.navigateByUrl('/dashboard');
            // }
            this.initForm(); // redirect back to the returnUrl before login

            this.route.queryParams.subscribe(function (params) {
              _this20.returnUrl = params.returnUrl || '/dashboard';
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
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
            var _this21 = this;

            this.pass_loader = true;
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
              _this21.pass_loader = false;
              _this21.storage.user = res.user;
              _this21.storage.authToken = res.key.token;
              _this21.storage.menu_setting = {
                status: true
              };
              console.log("res", res.user.role_id);

              if (res.user.role_id == 2) {
                _this21.router.navigateByUrl(_this21.returnUrl);
              } else if (res.user.role_id == 3) {
                _this21.router.navigateByUrl('/vendor/dashboard');
              } else if (res.user.role_id == 6) {
                _this21.router.navigateByUrl('/vendor/dashboard');
              } // this.toastr.successToastr('Login Successfully');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              console.log(err);
              _this21.pass_loader = false; // this.toastr.errorToastr(err);

              _this21.password_error_msg = err;
              _this21.password_error = true; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
            this.pass_loader = false;
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this22 = this;

            this.email_loader = true;
            var controls = this.loginForm.controls;
            var wordSearch = controls.email.value;
            setTimeout(function () {
              if (wordSearch == controls.email.value) {
                if (controls.email.value) {
                  console.log(controls.email.value);

                  _this22.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this23 = this;

            var controls = this.loginForm.controls;
            var Data = {
              email: controls.email.value
            };
            this.auth.checkemail(Data).subscribe(function (res) {
              _this23.email_error = false;
              _this23.email_loader = false; // this.toastr.successToastr('This Email id already Registerd');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err);
              _this23.email_error = true;
              _this23.email_loader = false; // this.toastr.warningToastr('This Email id already Registerd');
              // this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "searchInterest1",
          value: function searchInterest1() {
            this.pass_loader = false;
            this.password_error = false;
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
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]
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
    "PAKI":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/report-download/report-download.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PAKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>report-download</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Report</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"d-flex align-items-center justify-content-center flex-row\" *ngIf=\"box_select == true\">\n      <div class=\"text-center box_active p-3\" (click)=\"change_report('Credit')\">\n          <a >\n              <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                  <i class=\"icon-shopping-cart\"></i>\n              </span>\n              <h5 class=\"mb-0\">Credit report</h5>\n          </a>\n      </div>\n      <div class=\"text-center p-3\" (click)=\"change_report('Debit')\">\n          <a >\n              <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                  <i class=\"icon-shopping-cart\"></i>\n              </span>\n              <h5 class=\"mb-0\">Debit Report</h5>\n          </a>\n      </div>\n  </div>\n\n\n  <div class=\"d-flex align-items-center justify-content-center flex-row\" *ngIf=\"box_select == false\">\n    <div class=\"text-center  p-3\" (click)=\"change_report('Credit')\">\n        <a >\n            <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                <i class=\"icon-shopping-cart\"></i>\n            </span>\n            <h5 class=\"mb-0\">Credit report</h5>\n        </a>\n    </div>\n    <div class=\"text-center box_active p-3\" (click)=\"change_report('Debit')\">\n        <a >\n            <span class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                <i class=\"icon-shopping-cart\"></i>\n            </span>\n            <h5 class=\"mb-0\">Debit Report</h5>\n        </a>\n    </div>\n</div>\n\n\n  <div class=\"report_info pt-3\">\n      <div class=\"panel mb-3\">\n          <div class=\"panel-body\">\n              <div class=\"form-group\">\n                  <label>Credit Report Type</label>\n                  <select name=\"\" class=\"form-control\" id=\"\" [(ngModel)]=\"format\" name=\"format\">\n                      <option value=\"\">Select</option>\n                      <option value=\"Excel\">Excel</option>\n                  </select>\n              </div>\n              <br>\n              <div class=\"form-group\">\n                  <div class=\"form-control1\">\n                  <mat-form-field appearance=\"legacy\" style=\"width:100%\"> \n                    <mat-label style=\"color: white;font-weight: 600;font-size: 17px;\">Choose Date Range</mat-label>\n                    <mat-date-range-input [rangePicker]=\"picker\" [formGroup]=\"dateRange\">\n                      <input style=\"width: 70px;\" matStartDate formControlName=\"start\" placeholder=\"Start Date\" #dateRangeStart>\n                      <input matEndDate formControlName=\"end\" placeholder=\"End Date\"  #dateRangeEnd\n                      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\n                      >\n                    </mat-date-range-input>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-date-range-picker #picker></mat-date-range-picker>\n                  </mat-form-field>\n                </div>\n\n\n              </div>\n             \n              <div class=\"form-group\">\n\n                <input type=\"checkbox\"  class=\"largerCheckbox\"  id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\" (change)=\"toggleEditable($event)\"> Agree Terms &amp; Conditions\n\n                  <!-- <input type=\"checkbox\"> Agree Terms & Conditions -->\n              </div>\n          </div>\n      </div>\n\n\n      <div class=\"text-center\">\n          <button type=\"submit\" class=\"btn btn-success\" (click)=\"exportAsXLSX()\">Download</button>\n      </div>\n  </div>\n\n  <div class=\"pt-2\">\n    <div class=\"panel panel-red\">\n        <div class=\"panel-heading mb-0 pb-0\">\n            <h4 class=\"text-left\">Report Detail</h4>\n        </div>\n        <div class=\"panel-body table-responsive pb-0\">\n            <table class=\"table no-margin text-center\">\n                <thead>\n                    <tr>\n                        <th>S.No</th>\n                        <th>Date & Time</th>\n                        <th>Order Id</th>\n                        <th>User Id</th>\n                        <th>Product Details</th>\n                        <th>Note</th>\n                        <th>Quantity</th>\n                        <th>Price</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                        <tr *ngIf=\"corderslist.length !== 0\">\n                            <td>\n                                {{i+1}}\n                            </td>\n                            <td>\n    \n                                {{order.order_detail.order_mst.order_date}}\n                            </td>\n                            <td>\n                                {{order.order_detail.order_id}}\n                            </td>\n                            <td>\n                                {{order.order_detail.order_mst.customer_info.profile_id}} \n                                <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                            </td>\n                            <td>\n                                <ng-container  *ngFor=\"let item of order.product_details\">\n                                    <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                                </ng-container>\n                                <!-- {{order.order_detail.order_mst.order_no}} -->\n                            </td>\n                            <td>\n                            </td>\n                            <td>\n                                {{order.order_qty}}\n                                <!-- {{order.product_details.length}} -->\n                            </td>\n                            <td>\n                                {{order.order_value}}\n                            </td>\n                            <td>\n                                <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                                <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                                <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                                <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                                <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p>\n                                <!-- {{order.order_detail.order_dtl_status}} -->\n                            </td>\n                           \n                            <td>\n                             <!-- <button class=\"btn btn-success\" (click)=\"history_view(i)\">View</button> -->\n                            </td>\n                         </tr>\t              \n                        </ng-container>\n                        <tr *ngIf=\"corderslist.length == 0\">\n                            <td colspan=\"10\">No Record Found</td>\n                         </tr>                   \n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n";
      /***/
    },

    /***/
    "PYg0":
    /*!***************************************************************!*\
      !*** ./src/app/merchant/debitreport/debitreport.component.ts ***!
      \***************************************************************/

    /*! exports provided: DebitreportComponent */

    /***/
    function PYg0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DebitreportComponent", function () {
        return DebitreportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_debitreport_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./debitreport.component.html */
      "Lf1n");
      /* harmony import */


      var _debitreport_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./debitreport.component.scss */
      "soy8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DebitreportComponent = /*#__PURE__*/function () {
        function DebitreportComponent(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService, datePipe) {
          _classCallCheck(this, DebitreportComponent);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.datePipe = datePipe;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.start_date = '';
          this.end_date = '';
          this.final_output = [];
          this.box_select = true;
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
          this.format = '';
          this.video_uploading = false;
          this.checkstatus = false;
          this.type_error = '';
          this.start_date_error = '';
          this.end_date_error = '';
          this.agreement_error = '';
        }

        _createClass(DebitreportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this24.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this24.storage.merchant_detail = registerData;

                _this24.router.navigateByUrl('/account/register');

                _this24.loader = false;
              }

              _this24.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            }); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this25 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this25.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this25.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this25.corderslist;
                  var check_status = 0;
                  var _tem19 = temp_data[a];

                  for (var _c19 = 0; _c19 < datas.length; _c19++) {
                    if (datas[_c19].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c19].order_value = datas[_c19].order_value + temp_data[a].mercant_price_total, datas[_c19].order_qty = datas[_c19].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c19 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem20 = temp_data[a];
                        var _c20 = {
                          order_detail: _tem20,
                          order_value: _tem20.mercant_price_total,
                          order_qty: _tem20.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c20.product_details.push(_tem20);

                        _this25.corderslist.push(_c20);
                      } else {
                        _this25.corderslist[_c19].product_details.push(_tem19);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this25.corderslist);
                }
              }

              _this25.remove_index();
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status);
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "fetch_date",
          value: function fetch_date() {
            this.agreement_error = '';
            this.type_error = '';
            this.start_date_error = '';
            this.end_date_error = '';
            var date_status = true;
            console.log(this.start_date);
            var test_start = new Date(this.start_date);
            var test_end = new Date(this.end_date);

            if (test_start < test_end) {
              date_status = true;
            } else {
              date_status = false;
            }

            console.log(date_status);

            if (this.checkstatus == false) {
              this.agreement_error = "Please select the Terms & Conditions";
            } else if (this.format == "") {
              this.type_error = 'Please select the format type';
            } else if (this.start_date == '') {
              this.start_date_error = 'Please select start date';
            } else if (this.end_date == '') {
              this.end_date_error = 'Please select end date';
            } else if (date_status == false) {
              this.end_date_error = 'End date should not be leaser then Start date';
            } else {
              this.loadData();
              console.log(this.end_date, this.start_date);
              var start_date = this.datePipe.transform(this.start_date, 'MM/dd/yyyy');
              var end_date = this.datePipe.transform(this.end_date, 'MM/dd/yyyy');
              console.log(start_date, end_date);
              this.Fetchdata(start_date, end_date);
            } //  this.exportAsXLSX(start_date,end_date); 

          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              var d = "";

              for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
              }

              var e = {
                Order_ID: this.corderslist[a].order_detail.order_id,
                Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                Order_Details: d,
                Order_Price: this.corderslist[a].order_value,
                Item_Count: this.corderslist[a].order_qty,
                Status: this.corderslist[a].order_detail.order_dtl_status,
                Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                Note_If_Any: ''
              };
              temp.push(e);

              if (a == this.corderslist.length - 1) {
                console.log(temp);
                this.excelService.exportAsExcelFile(temp, 'Report');
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this26 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this26.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this26.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this26.corderslist;
                  var check_status = 0;
                  var _tem21 = temp_data[a];

                  for (var _c21 = 0; _c21 < datas.length; _c21++) {
                    if (datas[_c21].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c21].order_value = datas[_c21].order_value + temp_data[a].mercant_price_total, datas[_c21].order_qty = datas[_c21].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c21 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem22 = temp_data[a];
                        var _c22 = {
                          order_detail: _tem22,
                          order_value: _tem22.mercant_price_total,
                          order_qty: _tem22.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c22.product_details.push(_tem22);

                        _this26.corderslist.push(_c22);
                      } else {
                        _this26.corderslist[_c21].product_details.push(_tem21);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this26.corderslist);
                }
              }

              for (var x = 0; x < _this26.corderslist.length; x++) {
                if (x !== 0) {
                  _this26.corderslist[x].order_value = _this26.corderslist[x].order_value - _this26.corderslist[x].order_detail.mercant_price_total;
                  _this26.corderslist[x].order_qty = _this26.corderslist[x].order_qty - _this26.corderslist[x].order_detail.prod_qty;

                  _this26.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this26.corderslist.length - 1) {
                  _this26.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
                this.exportAsXLSX();
              }
            }
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
          }
        }, {
          key: "change_report",
          value: function change_report(data) {
            console.log(data);

            if (data == 'Credit') {
              this.box_select = true;
              this.ngOnInit();
            } else if (data == 'Debit') {
              this.box_select = false;
              this.corderslist = [];
            }
          }
        }]);

        return DebitreportComponent;
      }();

      DebitreportComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      DebitreportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-debitreport',
        template: _raw_loader_debitreport_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [_debitreport_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DebitreportComponent);
      /***/
    },

    /***/
    "Pk5c":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/add-remove-existing-form/add-remove-existing-form.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pk5c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>add-remove-existing-form</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Category Name</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"add_new_category\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n\n              <div class=\"panel mb-3\">\n                  <div class=\"panel-body\">\n                      \n                      <div class=\"form-group\">\n                          <label>Availability Time</label>\n                          <select name=\"\" class=\"form-control\" id=\"\">\n                              <option value=\"\">Select</option>\n                          </select>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Product image</label>\n                         \n                          <div class=\"d-flex align-items-center\">\n                              <div class=\"flx_1 pr-2\">\n                                  <input type=\"file\" class=\"form-control\">     \n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Product Name</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Product Details</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Product Pricing</label>\n                         \n                          <div class=\"d-flex align-items-center\">\n                              <div class=\"flx_1 pr-2\">\n                                  \n                                      <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">RM</span>\n                                          <input type=\"text\" class=\"form-control\">\n                                      </div>\n                                  \n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-info\" type=\"button\"> <i class=\"icon-info2 d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                    \n                      <div class=\"pb-3\">\n                          <button class=\"btn btn-info\">More Product</button>\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"checkbox\"> Agree Terms & Conditions\n                      </div>\n                  </div>\n              </div>\n\n\n              <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success\">POST PRODUCT</button>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"pt-5\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading mb-0 pb-0\">\n                  <h3 class=\"text-left text-blue\">History</h3>\n              </div>\n              <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Product Id</th>\n                              <th>Category</th>\n                              <th>Image</th>\n                              <th>Pricing</th>\n                              <th>Timing</th>\n                              <th>Product Name</th>\n                              <th width=\"180\">\n\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>\n                                  <div class=\"text-center cart_col\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"text-center\">\n                                      <span\n                                          class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                          <i class=\"icon-shopping-cart\"></i>\n                                      </span>\n                                      <h5 class=\"mb-0\">15421</h5>\n                                  </div>\n                              </td>\n                              <td>\n                                  <div class=\"cart_info\">\n                                      <p>\n                                          Product Name\n                                      </p>\n                                      <p class=\"mb-0\">\n                                          Product Details\n                                      </p>\n                                  </div>\n                              </td>\n                              <td>\n                                  <input type=\"button\" class=\"btn btn-danger mb-2 btn-sm w-100\" value=\"Remove\"/>\n                                  <button class=\"btn btn-info mb-2 w-100 btn-sm\" type=\"button\">Pending Live</button>\n                                  <button class=\"btn btn-success w-100 btn-sm\" type=\"button\">Approval Pending</button>\n                              </td>\n                             \n                          </tr>\n                         \n                          \n                         \n                      </tbody>\n                  </table>\n              </div>\n          </div>\n          \n          \n          \n      </div>\n     \n  </div>\n";
      /***/
    },

    /***/
    "Ptx5":
    /*!***************************************************************!*\
      !*** ./src/app/merchant/productview/productview.component.ts ***!
      \***************************************************************/

    /*! exports provided: ProductviewComponent */

    /***/
    function Ptx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductviewComponent", function () {
        return ProductviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_productview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./productview.component.html */
      "UUCp");
      /* harmony import */


      var _productview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./productview.component.scss */
      "d5Zy");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ProductviewComponent = /*#__PURE__*/function () {
        function ProductviewComponent(router, route, formBuilder, service, categoyservice, storage, changeDetection) {
          _classCallCheck(this, ProductviewComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.categoyservice = categoyservice;
          this.storage = storage;
          this.changeDetection = changeDetection;
          this.submitted = false;
        }

        _createClass(ProductviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.service.list({
              profile_id: this.storage.user.profile_id
            }).subscribe(function (res) {
              _this27.Product_list = res.rows;
              console.log(_this27.Product_list);
            });
          }
        }, {
          key: "edit",
          value: function edit(product_details) {
            console.log(product_details);
            localStorage.setItem('prod_data', JSON.stringify(product_details));
            this.router.navigate(['/merchant/product-edit', product_details.prod_id]);
          } // statusupdate(data,id){
          //   console.log(data);
          //   let cat_data = {
          //     cat_id : cat_id,
          //     cat_name : cat_name
          //   }
          //   localStorage.setItem('cat_data',JSON.stringify(cat_data));
          //   this.router.navigateByUrl('/merchant/update_category');
          // }

        }, {
          key: "statusupdate",
          value: function statusupdate(data, id) {
            var _this28 = this;

            console.log(data);

            if (data == 'A') {
              var a = {
                prod_status: data,
                prod_id: id
              };
              this.service.update_status(a).subscribe(function (res) {
                console.log("Updated Successfully");

                _this28.ngOnInit();
              }, function (err) {});
            }

            if (data == 'B') {
              var _a5 = {
                prod_status: data,
                prod_id: id
              };
              this.service.update_status(_a5).subscribe(function (res) {
                console.log("Update Successfully");

                _this28.ngOnInit();
              }, function (err) {});
            }
          }
        }, {
          key: "cat_delete",
          value: function cat_delete(_id) {
            var _this29 = this;

            this.service["delete"](_id).subscribe(function (res) {
              console.log("Update Successfully");

              _this29.ngOnInit();
            }, function (err) {});
          }
        }]);

        return ProductviewComponent;
      }();

      ProductviewComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProductviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-productview',
        template: _raw_loader_productview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductviewComponent);
      /***/
    },

    /***/
    "Qi5i":
    /*!***********************************************************************!*\
      !*** ./src/app/merchant/merchant-waller/merchant-waller.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MerchantWallerComponent */

    /***/
    function Qi5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantWallerComponent", function () {
        return MerchantWallerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_merchant_waller_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./merchant-waller.component.html */
      "31DF");
      /* harmony import */


      var _merchant_waller_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./merchant-waller.component.scss */
      "v3LS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MerchantWallerComponent = /*#__PURE__*/function () {
        function MerchantWallerComponent(storage, service, router, // private auth: AuthService,
        orderservice, datePipe) {
          var _this30 = this;

          _classCallCheck(this, MerchantWallerComponent);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.orderservice = orderservice;
          this.datePipe = datePipe;
          this.visible = false;
          this.corderslist = [];
          this.yearsUnique = [2016, 2017, 2018, 2017, 2018, 2019, 2020, 2021];
          this.country_name = 'MALAYSIA';
          this.state_name = '';
          this.role = '2';
          this.sort_by = 'Y';
          this.date = '2021';
          this.merchant_id = 0;
          this.state_list = [];
          this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          this.date_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.times_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.year_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.debit_date_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.debit_times_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.debit_year_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.date_display = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
          this.time_display = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
          this.year_display = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          this.dates_array = [];
          this.time_array = [];
          this.today_count_credit = 0;
          this.today_count_debit = 0;
          this.total_count_credit = 0;
          this.total_count_debit = 0;
          this.total_subtoal = 0; // net 

          this.total_refund = 0; //

          this.others = 0; // 

          this.grand_total = 0; //

          this.rest_name = '';
          this.merchant_id = this.storage.user.user_id;
          this.rest_name = this.storage.user.business_name;
          this.service.profile_view(this.merchant_id).subscribe(function (res) {
            console.log(res);
            _this30.country_name = res.p_country_name;
            _this30.state_name = res.p_state_name;

            _this30.find_state_list();
          }, function (err) {
            console.log(err); // this.notify.showError(err, "LOGIN");
          });
          console.log(this.merchant_id); // finding current year and month

          var d = new Date();
          console.log(d);
          var month = this.monthNames[d.getMonth()];

          for (var a = 0; a < 31; a++) {
            this.date_display[a] = "" + this.date_display[a] + "-" + month;
          }

          console.log(this.date_display);
          console.log(this.time_display);
        }

        _createClass(MerchantWallerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.date_list();
            this.time_list();
            this.year_list();
          }
        }, {
          key: "find_state_list",
          value: function find_state_list() {
            var _this31 = this;

            this.state_list = [];
            var country_name = this.country_name;
            this.service.list_by_country_state(country_name).subscribe(function (res) {
              console.log(res);
              _this31.state_list = res.rows;
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this32 = this;

            var filter = {
              country: this.country_name,
              state: this.state_name,
              role: this.role,
              sortby: this.sort_by,
              sortval: this.date,
              merchant: this.merchant_id
            };
            console.log(filter);
            this.total_subtoal = 0;
            this.orderservice.list_merchant_wallet(filter, {}).subscribe(function (res) {
              console.log(res);
              _this32.corderslist = res.rows;
              console.log('Walet List', _this32.corderslist);

              _this32.corderslist.forEach(function (element) {
                element.discount_price = 25 / 100 * element.prod_total_price;
                element.discount_price = Math.round(element.discount_price);
                element.net_price = element.prod_total_price - element.discount_price;
                _this32.total_subtoal = _this32.total_subtoal + element.net_price;
                _this32.grand_total = _this32.grand_total + element.net_price;
                console.log(element.discount_price);
                console.log(element.net_price);
              });
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "date_list",
          value: function date_list() {
            var _this33 = this;

            var a = {
              date: new Date(),
              merchant: this.merchant_id
            };
            this.orderservice.list_merchant_wallet_date(a, {}).subscribe(function (res) {
              _this33.date_data = res.rows;
              console.log('Date List', _this33.date_data);

              for (var _a6 = 0; _a6 < _this33.date_data.length; _a6++) {
                var temp = +_this33.date_data[_a6].dat;
                console.log(temp);
                _this33.date_values[temp - 1] = +_this33.date_data[_a6].amount;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "time_list",
          value: function time_list() {
            var _this34 = this;

            var a = {
              date: new Date(),
              merchant: this.merchant_id
            };
            this.orderservice.list_merchant_wallet_time(a, {}).subscribe(function (res) {
              _this34.time_data = res.rows;
              console.log('Time List', _this34.time_data);

              for (var _a7 = 0; _a7 < _this34.time_data.length; _a7++) {
                var temp = +_this34.time_data[_a7].hrs;
                console.log(temp);
                _this34.times_values[temp] = +_this34.time_data[_a7].amount;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "year_list",
          value: function year_list() {
            var _this35 = this;

            var a = {
              date: new Date(),
              merchant: this.merchant_id
            };
            this.orderservice.list_merchant_wallet_year(a, {}).subscribe(function (res) {
              _this35.year_data = res.rows;
              console.log('year List', _this35.year_data);

              for (var _a8 = 0; _a8 < _this35.year_data.length; _a8++) {
                var temp = +_this35.year_data[_a8].mnth;
                console.log(temp);
                _this35.year_values[temp - 1] = +_this35.year_data[_a8].amount;

                _this35.initial();
              }
            }, function (err) {
              console.log(err);
            });
          } // chart declaration

        }, {
          key: "initial",
          value: function initial() {
            this.chartOptions = {
              series: [{
                name: "Credit Amount",
                data: this.times_values
              }],
              chart: {
                height: 200,
                width: 250,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.time_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions1 = {
              series: [{
                name: "Debit amount",
                data: this.debit_times_values
              }],
              chart: {
                height: 200,
                width: 250,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.time_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions2 = {
              series: [{
                name: "Credit Amount",
                data: this.year_values
              }],
              chart: {
                height: 200,
                width: 250,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.year_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions3 = {
              series: [{
                name: "Debit Amount",
                data: this.debit_year_values
              }],
              chart: {
                height: 200,
                width: 250,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.year_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions4 = {
              series: [{
                name: "Credit amount",
                data: this.date_values
              }, {
                name: "Debit amount",
                data: this.debit_date_values
              }],
              chart: {
                height: 350,
                width: 500,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.date_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.chartOptions5 = {
              series: [{
                name: "Credit Amount",
                data: this.year_values
              }, {
                name: "Debit amount",
                data: this.debit_year_values
              }],
              chart: {
                height: 350,
                width: 500,
                type: "area"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "category",
                categories: this.year_display,
                labels: {
                  style: {
                    fontWeight: 600
                  }
                }
              },
              tooltip: {
                x: {
                  format: "yyyy-MM-dd"
                }
              }
            };
            this.visible = true;
          }
        }]);

        return MerchantWallerComponent;
      }();

      MerchantWallerComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
        }];
      };

      MerchantWallerComponent.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["chart"]
        }]
      };
      MerchantWallerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-merchant-waller',
        template: _raw_loader_merchant_waller_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [_merchant_waller_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MerchantWallerComponent);
      /***/
    },

    /***/
    "QsgT":
    /*!*******************************************************************!*\
      !*** ./src/app/merchant/walletcredit/walletcredit.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function QsgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXRjcmVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Qu6T":
    /*!***********************************************************!*\
      !*** ./src/app/merchant/videoview/videoview.component.ts ***!
      \***********************************************************/

    /*! exports provided: VideoviewComponent */

    /***/
    function Qu6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoviewComponent", function () {
        return VideoviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_videoview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./videoview.component.html */
      "LFEH");
      /* harmony import */


      var _videoview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./videoview.component.scss */
      "yqD8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VideoviewComponent = /*#__PURE__*/function () {
        function VideoviewComponent() {
          _classCallCheck(this, VideoviewComponent);
        }

        _createClass(VideoviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VideoviewComponent;
      }();

      VideoviewComponent.ctorParameters = function () {
        return [];
      };

      VideoviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videoview',
        template: _raw_loader_videoview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videoview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VideoviewComponent);
      /***/
    },

    /***/
    "RJmi":
    /*!**************************************************************************************!*\
      !*** ./src/app/merchant/add-remove-existing-form/add-remove-existing-form.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function RJmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVtb3ZlLWV4aXN0aW5nLWZvcm0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Sk4x":
    /*!***************************************************************!*\
      !*** ./src/app/merchant/video-list/video-list.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Sk4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "UUCp":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/productview/productview.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UUCp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add_new_category\">\n  <div class=\"pt-5\">\n      <div class=\"panel panel-red\">\n          <div class=\"panel-heading mb-0 pb-0\">\n              <h3 class=\"text-left text-blue\">Product List</h3>\n          </div>\n          <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n              <table class=\"table no-margin\">\n                  <thead>\n                      <tr>\n                          <th>Category</th>\n                          <th>Product</th>\n                          <th>Product des</th>\n                          <th>Product img</th>\n                          <th>Product price</th>\n                          <th>Product Timing</th>\n                          <th>Status</th>\n                          <th>Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let category of Product_list\">\n                          <td>\n                              <div class=\"text-left cart_col\">\n                                  <h5 class=\"mb-0\">{{category.category.cat_name}}</h5>\n                              </div>\n                          </td>\n\n                          <td>\n                            <div class=\"text-left cart_col\">\n                                <h5 class=\"mb-0\">{{category.prod_name}}</h5>\n                            </div>\n                         </td>\n\n                         <td>\n                          <div class=\"text-left cart_col\">\n                              <h5 class=\"mb-0\">{{category.prod_desc}}</h5>\n                          </div>\n                       </td>\n\n                       <td>\n                        <div class=\"text-left cart_col\">\n                            <img src=\"{{category.prod_img}}\" style=\"width: 35%;\">\n                            <!-- <h5 class=\"mb-0\"></h5> -->\n                        </div>\n                     </td>\n\n                     <td>\n                      <div class=\"text-left cart_col\">\n                          <h5 class=\"mb-0\">{{category.prod_price}}</h5>\n                      </div>\n                   </td>\n\n                   <td>\n                    <div class=\"text-left cart_col\">\n                        <h5 class=\"mb-0\">{{category.prod_avail_time}}</h5>\n                    </div>\n                 </td>\n\n                          <td>\n                              <div class=\"text-center\">\n                                  <h5 class=\"mb-0\">{{category.prod_status == 'A' ? 'Active' : 'Inactive'}}</h5>\n                              </div>\n                          </td>\n                          <td>                            \n                            <button style=\"margin: 5px; background-color: #a9bd7a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('A',category.prod_id)\" *ngIf=\"category.prod_status == 'B'\">Enable</button>\n                            <button style=\"margin: 5px; background-color: #bf7a6a;\" type=\"submit\" class=\"btn btn-info\" (click)=\"statusupdate('B',category.prod_id)\" *ngIf=\"category.prod_status == 'A'\">Disable</button>\n                            <button style=\"margin: 5px;\" type=\"submit\" (click)=\"edit(category)\" class=\"btn btn-info\">Edit</button>\n                            <button style=\"margin: 5px; background-color: #bf7a6a;\" (click)=\"cat_delete(category.prod_id)\" type=\"submit\" class=\"btn btn-info\">Delete</button>\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n     \n      \n      \n  </div>\n</div>\n";
      /***/
    },

    /***/
    "X7lw":
    /*!*******************************************************************************!*\
      !*** ./src/app/merchant/update-order-status/update-order-status.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UpdateOrderStatusPage */

    /***/
    function X7lw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateOrderStatusPage", function () {
        return UpdateOrderStatusPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_update_order_status_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./update-order-status.page.html */
      "ke9m");
      /* harmony import */


      var _update_order_status_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./update-order-status.page.scss */
      "FXAi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var UpdateOrderStatusPage = /*#__PURE__*/function () {
        function UpdateOrderStatusPage(router, route, storage, service) {
          _classCallCheck(this, UpdateOrderStatusPage);

          this.router = router;
          this.route = route;
          this.storage = storage;
          this.service = service;
          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
          this.initialPage = 1;
          this.pageSize = 10;
          this.maxPages = 10;
          this.pager = {};
          this.corderslist = [];
          this.history_list = [];
          this.final_output = [];
          this.confirm_count = 0;
          this.prepare_count = 0;
          this.picked_count = 0;
          this.deliver_count = 0;
          this.select_value = 'Order Confirmation';
          this.status_one = 'B';
          this.status_two = 'A';
          this.stage = "received";
          console.log(this.storage.user);
          this.business_name = this.storage.user.business_name;
          this.busineess_id = this.storage.user.profile_id;
          this.status = 'B';
        }

        _createClass(UpdateOrderStatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this36 = this;

            this.ngOnDestroy();
            this.loadData();
            this.id = setInterval(function () {
              _this36.loadData();

              console.log("Refreshing");
            }, 20000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.id) {
              clearInterval(this.id);
            }
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this37 = this;

            console.log(this.stage);

            if (this.stage == 'received') {
              this.title = 'Received';
              this.status = 'B';
            } else if (this.stage == 'delivered') {
              this.title = 'Delivered';
              this.status = 'C';
            } else if (this.stage == 'approved') {
              this.title = 'Approved';
              this.status = 'A';
            } else if (this.stage == 'picked') {
              this.title = 'Picked';
              this.status = 'P';
            }

            var filter = {
              merchant_id: Number(this.storage.user.profile_id),
              order_status: this.status
            };
            console.log("Filter", filter);
            this.service.list_merchant(filter).subscribe(function (res) {
              _this37.corderslist = res.rows;
              console.log('Orders -- ', _this37.corderslist); // this.corderslist.sort((a, b) => new Date(b.order_date.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });

            if (this.stage == "received") {
              this.alter_stage = "approved";
              this.alt_title = "Approved";
              this.fetch_history("A");
            } else if (this.stage == "approved") {
              this.alter_stage = "picked";
              this.alt_title = "Picked";
              this.fetch_history("P");
            } else if (this.stage == "picked") {
              this.alter_stage = "delivered";
              this.alt_title = "Delivered";
              this.fetch_history("D");
            } else if (this.stage == "delivered") {
              this.alter_stage = "Cancelled";
              this.alt_title = "Cancelled";
              this.fetch_history("C");
            }
          }
        }, {
          key: "fetch_history",
          value: function fetch_history(data) {
            var _this38 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id),
              order_status: data
            };
            this.service.list_merchant(filter).subscribe(function (res) {
              _this38.history_list = res.rows;
              console.log('Orders -- ', _this38.history_list);
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          } // loadData() {
          //   let filter = {
          //     merchant_id: Number(this.storage.user.profile_id)
          //   }
          //   this.service.list_merchant(filter).subscribe(res => {
          //     this.corderslist = [];
          //     let temp_data = res.rows;
          //     for(let a = 0 ; a < temp_data.length ; a ++){
          //       if(a == 0){
          //         let tem = temp_data[0];
          //         let c = {
          //            order_detail : tem,
          //            order_value : tem.prod_total_price,
          //            product_details : [],
          //            order_qty : tem.prod_qty,
          //            view_status : false
          //         }
          //         c.product_details.push(tem);
          //         this.corderslist.push(c);
          //       }else{
          //         let datas = [];
          //         datas = this.corderslist;
          //         var check_status = 0;
          //         let tem = temp_data[a];
          //         for(let c = 0 ; c < datas.length ; c ++){
          //           if(datas[c].order_detail.order_id == temp_data[a].order_id){
          //             datas[c].order_value = datas[c].order_value + temp_data[a].prod_total_price,
          //             datas[c].order_qty = datas[c].order_qty + temp_data[a].prod_qty;
          //             check_status = 1;
          //           }
          //           if(c == datas.length - 1){
          //             if(check_status == 0){
          //            let tem = temp_data[a];
          //            let c = {
          //            order_detail : tem,
          //            order_value : tem.prod_total_price,
          //            product_details : [],
          //            order_qty : tem.prod_qty,
          //            view_status : false
          //            }
          //            c.product_details.push(tem);
          //            this.corderslist.push(c);
          //             }else{
          //               this.corderslist[c].product_details.push(tem);
          //             }
          //           }
          //         }
          //       }
          //       if(a == temp_data.length - 1 ){
          //          console.log(this.corderslist);
          //          this.final_output = this.corderslist;
          //       }
          //     }
          //     this.remove_index();
          //   }, err => {
          //     console.log(err);
          //     // this.notify.showError(err, "LOGIN");
          //   });
          // }

        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                console.log(this.corderslist[a]);
                this.corderslist[a].product_details.sort(function (a, b) {
                  return a.product.prod_name > b.product.prod_name ? 1 : -1;
                });
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.prod_total_price;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }

            this.count_cal();
            this.filter_status(this.status_one, this.status_two); // this.histroy_list();
          }
        }, {
          key: "count_cal",
          value: function count_cal() {
            console.log(this.final_output);
            this.confirm_count = 0;
            this.prepare_count = 0;
            this.deliver_count = 0;
            this.picked_count = 0;

            for (var a = 0; a < this.final_output.length; a++) {
              console.log(this.final_output[a].order_detail.order_dtl_status);

              if (this.final_output[a].order_detail.order_dtl_status == 'B') {
                this.confirm_count = this.confirm_count + 1;
              }

              if (this.final_output[a].order_detail.order_dtl_status == 'A') {
                this.prepare_count = this.prepare_count + 1;
              }

              if (this.final_output[a].order_detail.order_dtl_status == 'C') {
                this.deliver_count = this.deliver_count + 1;
              }

              if (this.final_output[a].order_detail.order_dtl_status == 'P') {
                this.picked_count = this.picked_count + 1;
              }

              if (this.final_output[a].order_detail.order_dtl_status == 'D') {
                this.deliver_count = this.deliver_count + 1;
              }

              this.final_output[a].product_details.sort(function (a, b) {
                return a.product.prod_name > b.product.prod_name ? 1 : -1;
              });
            }
          }
        }, {
          key: "edit",
          value: function edit(cat_id, cat_name) {
            var cat_data = {
              cat_id: cat_id,
              cat_name: cat_name
            };
            localStorage.setItem('cat_data', JSON.stringify(cat_data));
            this.router.navigateByUrl('/merchant/update_category');
          }
        }, {
          key: "statusupdate",
          value: function statusupdate(data, id) {
            var _this39 = this;

            console.log(data);

            if (data == 'A') {
              var a = {
                cat_status: data,
                cat_id: id
              };
              this.service.update_status(a).subscribe(function (res) {
                console.log("Updated Successfully");

                _this39.loadData();
              }, function (err) {});
            }

            if (data == 'B') {
              var _a9 = {
                cat_status: data,
                cat_id: id
              };
              this.service.update_status(_a9).subscribe(function (res) {
                console.log("Update Successfully");

                _this39.loadData();
              }, function (err) {});
            }
          }
        }, {
          key: "cat_delete",
          value: function cat_delete(_id) {
            var _this40 = this;

            this.service["delete"](_id).subscribe(function (res) {
              console.log("Update Successfully");

              _this40.loadData();
            }, function (err) {});
          }
        }, {
          key: "updatestatus",
          value: function updatestatus(data, order_detail) {
            console.log(data, order_detail.product_details.length); // order_detail = order_detail.order_detail;

            for (var a = 0; a < order_detail.product_details.length; a++) {
              var order_id = order_detail.product_details[a].order_dtl_id;

              if (data == 'Accept') {
                var _a10 = {
                  order_dtl_status: "A",
                  order_dtl_id: order_id
                };
                console.log(_a10);
                this.service.update_status(_a10).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Cancel') {
                var _a11 = {
                  order_dtl_status: "C",
                  order_dtl_id: order_id
                };
                console.log(_a11);
                this.service.update_status(_a11).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Pick_Delivery') {
                var _a12 = {
                  order_dtl_status: "P",
                  order_dtl_id: order_id
                };
                console.log(_a12);
                this.service.update_status(_a12).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              } else if (data == 'Delivered') {
                var _a13 = {
                  order_dtl_status: "D",
                  order_dtl_id: order_id
                };
                console.log(_a13);
                this.service.update_status(_a13).subscribe(function (res) {
                  console.log("Update Successfully"); // this.ngOnInit();
                }, function (err) {});
              }

              if (a == order_detail.product_details.length - 1) {
                this.loadData();
              }
            }
          }
        }, {
          key: "view",
          value: function view(index) {
            console.log(index, this.previous_index); // console.log(this.previous_index);
            // console.log(index);

            if (this.previous_index == undefined) {
              this.corderslist[index].view_status = true;
              this.previous_index = index;
            } else if (index == this.previous_index) {
              if (this.corderslist[index].view_status == false) {
                this.corderslist[index].view_status = true;
              } else {
                this.corderslist[index].view_status = false;
              }
            } else {
              this.corderslist[this.previous_index].view_status = false;
              this.corderslist[index].view_status = true;
              this.previous_index = index;
            }
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status, secstatus);

            if (status == 'B' && secstatus == 'A') {
              this.stage = 'received';
              this.loadData();
            } else if (status == 'A' && secstatus == 'P') {
              this.stage = 'approved';
              this.loadData();
            } else if (status == 'P' && secstatus == 'D') {
              this.stage = 'picked';
              this.loadData();
            } else if (status == 'D' && secstatus == 'C') {
              this.stage = 'delivered';
              this.loadData();
            }
          } // filter_status(status,secstatus){
          //   console.log(status,secstatus);
          //   this.status_one = status;
          //   this.status_two = secstatus;
          //   if(status == 'B' && secstatus == 'A'){
          //    this.select_value = 'Order Confirmation'
          //   }else if(status == 'A' && secstatus == 'P'){
          //     this.select_value = 'Order Preparing'
          //   }else if(status == 'P' && secstatus == 'D'){
          //     this.select_value = 'Rider Picked'
          //   }else if(status == 'D' && secstatus == 'C'){
          //     this.select_value = 'Delivered & Cancelled'
          //   }
          //   this.corderslist = [];
          //   this.history_list = [];
          //   this.corderslist = this.final_output;
          //   let temp_data  = this.corderslist;
          //   this.corderslist = [];
          //   for(let a  = 0; a < temp_data.length ; a ++){
          //     if(temp_data[a].order_detail.order_dtl_status == status){
          //       this.corderslist.push(temp_data[a]);
          //     }
          //     if(temp_data[a].order_detail.order_dtl_status == secstatus){
          //       this.history_list.push(temp_data[a]);
          //     }
          //   }
          //   console.log(this.corderslist);
          //   console.log(this.history_list);
          //   this.history_list.sort((a, b) => new Date(b.order_detail.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
          //   this.corderslist.sort((a, b) => new Date(b.order_detail.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
          // }

        }, {
          key: "sortFunc",
          value: function sortFunc(a, b) {
            console.log(a.order_id, b.order_id);
            return a.order_id - b.order_id;
          }
        }]);

        return UpdateOrderStatusPage;
      }();

      UpdateOrderStatusPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }];
      };

      UpdateOrderStatusPage.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        initialPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maxPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      UpdateOrderStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-order-status',
        template: _raw_loader_update_order_status_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_order_status_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UpdateOrderStatusPage);
      /***/
    },

    /***/
    "XS2R":
    /*!*********************************************!*\
      !*** ./src/app/merchant/merchant.module.ts ***!
      \*********************************************/

    /*! exports provided: MerchantPageModule */

    /***/
    function XS2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantPageModule", function () {
        return MerchantPageModule;
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


      var _merchant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./merchant-routing.module */
      "0avR");
      /* harmony import */


      var _merchant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./merchant.component */
      "r04s");
      /* harmony import */


      var _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../layout/masterheader/masterheader.page */
      "OZ2c");
      /* harmony import */


      var _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../layout/masterfooter/masterfooter.page */
      "JlfY");
      /* harmony import */


      var _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../layout/masteraside/masteraside.page */
      "1U3K");
      /* harmony import */


      var _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../layout/masterlayout/masterlayout.page */
      "Mmwu");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Fv72");
      /* harmony import */


      var _post_product_post_product_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./post-product/post-product.page */
      "njQj");
      /* harmony import */


      var _add_new_category_add_new_category_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./add-new-category/add-new-category.page */
      "5aWD");
      /* harmony import */


      var _add_remove_existing_add_remove_existing_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./add-remove-existing/add-remove-existing.page */
      "bZqx");
      /* harmony import */


      var _add_remove_existing_form_add_remove_existing_form_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./add-remove-existing-form/add-remove-existing-form.page */
      "vJ1+");
      /* harmony import */


      var _delivered_delivered_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./delivered/delivered.page */
      "iCAx");
      /* harmony import */


      var _order_preparing_order_preparing_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./order-preparing/order-preparing.page */
      "iSUg");
      /* harmony import */


      var _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./report-download/report-download.page */
      "8nLo");
      /* harmony import */


      var _rider_picked_rider_picked_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./rider-picked/rider-picked.page */
      "1BlX");
      /* harmony import */


      var _update_order_status_update_order_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./update-order-status/update-order-status.component */
      "X7lw");
      /* harmony import */


      var _wallet_point_wallet_point_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./wallet-point/wallet-point.page */
      "CrSC");
      /* harmony import */


      var _product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./product-detail/product-detail.page */
      "YUNA");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./login/login.page */
      "NXTk");
      /* harmony import */


      var _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./product-list/product-list.page */
      "pJK6");
      /* harmony import */


      var _category_list_category_list_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./category-list/category-list.page */
      "ryxY");
      /* harmony import */


      var _product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./product-edit/product-edit.page */
      "mNZD");
      /* harmony import */


      var _category_edit_category_edit_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./category-edit/category-edit.page */
      "jswh");
      /* harmony import */


      var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../common/loader/loader.component */
      "JFVA");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_30__);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./video-list/video-list.component */
      "t/+b");
      /* harmony import */


      var _productcreate_productcreate_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./productcreate/productcreate.component */
      "zYg9");
      /* harmony import */


      var _productview_productview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./productview/productview.component */
      "Ptx5");
      /* harmony import */


      var _walletcredit_walletcredit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./walletcredit/walletcredit.component */
      "7Ycy");
      /* harmony import */


      var _walletdebit_walletdebit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./walletdebit/walletdebit.component */
      "3cGt");
      /* harmony import */


      var _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./creditreport/creditreport.component */
      "taS9");
      /* harmony import */


      var _debitreport_debitreport_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./debitreport/debitreport.component */
      "PYg0");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var ng_image_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-image-slider */
      "yf9x");
      /* harmony import */


      var time_ago_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! time-ago-pipe */
      "Pl5P");
      /* harmony import */


      var _admin_merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../admin/merchant-detail/merchant-detail.component */
      "4Ala");
      /* harmony import */


      var _merchant_waller_merchant_waller_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./merchant-waller/merchant-waller.component */
      "Qi5i"); // import { LoaderComponent } from './loader/loader.component';


      var MerchantPageModule = function MerchantPageModule() {
        _classCallCheck(this, MerchantPageModule);
      };

      MerchantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _merchant_routing_module__WEBPACK_IMPORTED_MODULE_5__["MerchantPageRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_29__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
        }), ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_30__["GooglePlaceModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_41__["NgApexchartsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_42__["NgxPaginationModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_43__["NgImageSliderModule"]],
        declarations: [_merchant_component__WEBPACK_IMPORTED_MODULE_6__["MerchantPage"], _layout_masterlayout_masterlayout_page__WEBPACK_IMPORTED_MODULE_10__["MasterlayoutPage"], _layout_masterheader_masterheader_page__WEBPACK_IMPORTED_MODULE_7__["MasterheaderPage"], _layout_masteraside_masteraside_page__WEBPACK_IMPORTED_MODULE_9__["MasterasidePage"], _layout_masterfooter_masterfooter_page__WEBPACK_IMPORTED_MODULE_8__["MasterfooterPage"], _login_login_page__WEBPACK_IMPORTED_MODULE_23__["LoginPage"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardPage"], _post_product_post_product_page__WEBPACK_IMPORTED_MODULE_12__["PostProductPage"], _add_new_category_add_new_category_page__WEBPACK_IMPORTED_MODULE_13__["AddNewCategoryPage"], _product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_22__["ProductDetailPage"], _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_24__["ProductListPage"], _add_remove_existing_add_remove_existing_page__WEBPACK_IMPORTED_MODULE_14__["AddRemoveExistingPage"], _add_remove_existing_form_add_remove_existing_form_page__WEBPACK_IMPORTED_MODULE_15__["AddRemoveExistingFormPage"], _delivered_delivered_page__WEBPACK_IMPORTED_MODULE_16__["DeliveredPage"], _order_preparing_order_preparing_page__WEBPACK_IMPORTED_MODULE_17__["OrderPreparingPage"], _report_download_report_download_page__WEBPACK_IMPORTED_MODULE_18__["ReportDownloadPage"], _rider_picked_rider_picked_page__WEBPACK_IMPORTED_MODULE_19__["RiderPickedPage"], _update_order_status_update_order_status_component__WEBPACK_IMPORTED_MODULE_20__["UpdateOrderStatusPage"], _wallet_point_wallet_point_page__WEBPACK_IMPORTED_MODULE_21__["WalletPointPage"], _category_list_category_list_page__WEBPACK_IMPORTED_MODULE_25__["CategoryListPage"], _category_edit_category_edit_page__WEBPACK_IMPORTED_MODULE_27__["CategoryEditPage"], _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_24__["ProductListPage"], _product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_26__["ProductEditPage"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__["LoaderComponent"], _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_34__["VideoListComponent"], _productcreate_productcreate_component__WEBPACK_IMPORTED_MODULE_35__["ProductcreateComponent"], _productview_productview_component__WEBPACK_IMPORTED_MODULE_36__["ProductviewComponent"], _walletcredit_walletcredit_component__WEBPACK_IMPORTED_MODULE_37__["WalletcreditComponent"], _walletdebit_walletdebit_component__WEBPACK_IMPORTED_MODULE_38__["WalletdebitComponent"], _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_39__["CreditreportComponent"], _debitreport_debitreport_component__WEBPACK_IMPORTED_MODULE_40__["DebitreportComponent"], _admin_merchant_detail_merchant_detail_component__WEBPACK_IMPORTED_MODULE_45__["MerchantDetailComponent"], _merchant_waller_merchant_waller_component__WEBPACK_IMPORTED_MODULE_46__["MerchantWallerComponent"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_44__["TimeAgoPipe"], _update_order_status_update_order_status_component__WEBPACK_IMPORTED_MODULE_20__["UpdateOrderStatusPage"], _merchant_component__WEBPACK_IMPORTED_MODULE_6__["MerchantPage"]]
      })], MerchantPageModule);
      /***/
    },

    /***/
    "YUNA":
    /*!****************************************************************!*\
      !*** ./src/app/merchant/product-detail/product-detail.page.ts ***!
      \****************************************************************/

    /*! exports provided: ProductDetailPage */

    /***/
    function YUNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function () {
        return ProductDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-detail.page.html */
      "bA9E");
      /* harmony import */


      var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail.page.scss */
      "/m+E");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ProductDetailPage = /*#__PURE__*/function () {
        function ProductDetailPage(router, route, formBuilder, service, categoyservice, storage, changeDetection) {
          _classCallCheck(this, ProductDetailPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.categoyservice = categoyservice;
          this.storage = storage;
          this.changeDetection = changeDetection;
          this.submitted = false;
          this.start_time = "01:00 AM";
          this.end_time = "12:00 PM";
        }

        _createClass(ProductDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.route.params.subscribe(function (params) {
              _this41._prodId = params.prodid;
            });
            this.categoyservice.list({}).subscribe(function (res) {
              _this41.categories = res.rows;
            });
            console.log(this._prodId);

            if (this._prodId) {
              this.service.view(this._prodId).subscribe(function (res) {
                _this41.product = res;
                console.log(_this41.product);

                var availtime = _this41.product.prod_avail_time.split("to");

                _this41.start_time = availtime[0].trim();
                _this41.end_time = availtime[1].trim();

                _this41.initForm();
              });
            } else {
              this.product = {};
            }

            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.productForm = this.formBuilder.group({
              cat_id: [this.product ? this.product.cat_id : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_name: [this.product ? this.product.prod_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_desc: [this.product ? this.product.prod_desc : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_price: [this.product ? this.product.prod_price : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_s: [this.start_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_e: [this.end_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.productForm.controls;
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.prodImage = event.target.files[0];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this42 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.productForm.invalid) {
              return;
            }

            var controls = this.productForm.controls;
            var a = Math.round(10 / 100 * +controls.prod_price.value);
            console.log(a);
            var _product = {
              prod_name: controls.prod_name.value,
              prod_desc: controls.prod_desc.value,
              prod_price: +controls.prod_price.value + a,
              prod_avail_time: "" + controls.prod_avail_time_s.value + " to " + "" + controls.prod_avail_time_e.value,
              cat_id: controls.cat_id.value,
              profile_id: this.storage.user.profile_id,
              mercant_price: controls.prod_price.value,
              commission_amount: a
            };
            console.log(_product);

            if (this.product.prod_id) {
              _product["prod_id"] = this.product.prod_id;
              this.service.update(_product).subscribe(function (res) {
                console.log(res);
                alert("Updated successfully");

                _this42.router.navigateByUrl('merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              this.service.create(_product).subscribe(function (res) {
                console.log(res);
                alert("Created successfully");

                _this42.router.navigateByUrl('/merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            }
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            var _this43 = this;

            if (this.prodImage) {
              this.service.uploadimage(this.product.prod_id, this.prodImage).subscribe(function (res) {
                console.log(res);

                _this43.router.navigateByUrl('/merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              alert('Select Image');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "add_cat",
          value: function add_cat() {
            this.router.navigateByUrl('/merchant/add-new-category');
          }
        }]);

        return ProductDetailPage;
      }();

      ProductDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductDetailPage);
      /***/
    },

    /***/
    "aHtf":
    /*!*******************************************************************!*\
      !*** ./src/app/merchant/creditreport/creditreport.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function aHtf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.9em 0 !important;\n}\n\n.mat-form-field-type-mat-date-range-input .mat-form-field-infix {\n  padding-top: 15px !important;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 15px 0px 0px 0px !important;\n  /* top: 15px; */\n}\n\n.form-control1 {\n  border-radius: 0;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border: 1px solid #556174;\n  background: #353C48;\n  height: 60px;\n  padding: 6px 10px;\n  transition: all 0.3s ease-out;\n  color: #d0d5dc;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NyZWRpdHJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBRlI7O0FBSUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFEUiIsImZpbGUiOiJjcmVkaXRyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjllbSAwICFpbXBvcnRhbnQ7XG59XG5cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LWRhdGUtcmFuZ2UtaW5wdXQgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAvKiB0b3A6IDE1cHg7ICovXG59XG5cblxuICAgIC5mb3JtLWNvbnRyb2wxIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU2MTc0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzUzQzQ4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgY29sb3I6ICNkMGQ1ZGM7XG4gICAgfVxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "bA9E":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/product-detail/product-detail.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bA9E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>Add New Product</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"add_new_category\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"panel mb-3\">\n                <div class=\"panel-body\">\n                   \n                    <div class=\"form-group\">\n                        <label>Choose Category</label>\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                  <select formControlName=\"cat_id\" id=\"cid\" class=\"form-control\" >\n                                      <option *ngFor=\"let category of categories\" value=\"{{category.cat_id}}\">{{category.cat_name}}</option>\n                                  </select>  \n                                       \n                              </div>\n                              <div class=\"flx_0\">\n                                  <a class=\"btn btn-success\" href=\"/merchant/add-new-category\" > <i class=\"icon-plus d-block\"></i> </a>\n                              </div>\n                          </div>\n                          <div *ngIf=\"submitted && f.cat_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cat_id.errors.required\">Category is required</div>\n                            </div>   \n                      </div>\n                      <div class=\"form-group\">\n                        <label>Product Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"prod_name\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_name.errors }\" placeholder=\"Product Name\">\n                        <div *ngIf=\"submitted && f.prod_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_name.errors.required\">Product Name is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Details</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"prod_desc\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_desc.errors }\" placeholder=\"Product Details\">\n                        <div *ngIf=\"submitted && f.prod_desc.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_desc.errors.required\">Product Details is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Pricing</label>\n                       \n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                \n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">RM</span>\n                                        <input type=\"number\" class=\"form-control\" formControlName=\"prod_price\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_price.errors }\" placeholder=\"Product Price\">\n                                    </div>\n                                \n                            </div>\n                        </div>\n                        <div *ngIf=\"submitted && f.prod_price.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_price.errors.required\">Product Price is required</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Availability Start Time</label>\n                      <select  class=\"form-control\" id=\"st\" formControlName=\"prod_avail_time_s\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_s.errors }\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_s.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_s.errors.required\">Availability Start Time is required</div>\n                          </div>\n                  </div>\n\n\n                  <div class=\"form-group\">\n                      <label>Availability End Time</label>\n                      <select  class=\"form-control\" id=\"et\" formControlName=\"prod_avail_time_e\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_e.errors }\" placeholder=\"\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_e.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_e.errors.required\">Availability End Time is required</div>\n                      </div>\n                  </div>\n                      <div class=\"form-group\" *ngIf=\"product.prod_id\">\n                          <label>Product image</label>\n                         \n                          <div class=\"d-flex align-items-center\">\n                              <div class=\"flx_1 pr-2\">\n                                  <input type=\"file\" class=\"form-control\" (change)=\"selectImg($event)\" accept=\"image/*\">     \n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" (click)=\"uploadImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                      \n                      <!-- <div class=\"form-group\">\n                          <label>Product Id (Auto Generate)</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                      <div class=\"pb-3\">\n                          <button class=\"btn btn-info\">More Product</button>\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"checkbox\"> Agree Terms & Conditions\n                      </div> -->\n                  </div>\n              </div>\n\n\n              <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success\">POST PRODUCT</button>\n              </div>\n            </form>\n          </div>\n      </div>\n\n    <!-- <div class=\"pt-5\">\n        <div class=\"panel panel-red\">\n            <div class=\"panel-heading mb-0 pb-0\">\n                <h3 class=\"text-left text-blue\">History</h3>\n            </div>\n            <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                <table class=\"table no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Product Id</th>\n                            <th>Category</th>\n                            <th>Image</th>\n                            <th>Pricing</th>\n                            <th>Timing</th>\n                            <th>Product Name</th>\n                            <th width=\"180\">\n\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"text-center cart_col\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"cart_info\">\n                                    <p>\n                                        Product Name\n                                    </p>\n                                    <p class=\"mb-0\">\n                                        Product Details\n                                    </p>\n                                </div>\n                            </td>\n                            <td>\n                                <button class=\"btn btn-info mb-2 w-100 btn-sm\" type=\"button\">Pending Live</button>\n                                <button class=\"btn btn-success w-100 btn-sm\" type=\"button\">Approval Pending</button>\n                            </td>\n                           \n                        </tr>\n                       \n                      \n                    </tbody>\n                </table>\n            </div>\n        </div>\n       \n        \n        \n    </div> -->\n</div>";
      /***/
    },

    /***/
    "bCPK":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/productcreate/productcreate.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bCPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>Add New Product</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"add_new_category\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"panel mb-3\">\n                <div class=\"panel-body\">\n                   \n                    <div class=\"form-group\">\n                        <label>Choose Category</label>\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                  <select formControlName=\"cat_id\" id=\"cid\" class=\"form-control\" >\n                                      <option *ngFor=\"let category of categories\" value=\"{{category.cat_id}}\">{{category.cat_name}}</option>\n                                  </select>  \n                                       \n                              </div>\n                              <div class=\"flx_0\">\n                                  <a class=\"btn btn-success\" href=\"/merchant/add-new-category\" > <i class=\"icon-plus d-block\"></i> </a>\n                              </div>\n                          </div>\n                          <div *ngIf=\"submitted && f.cat_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cat_id.errors.required\">Category is required</div>\n                            </div>   \n                      </div>\n                      <div class=\"form-group\">\n                        <label>Product Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"prod_name\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_name.errors }\" placeholder=\"Product Name\">\n                        <div *ngIf=\"submitted && f.prod_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_name.errors.required\">Product Name is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Details</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"prod_desc\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_desc.errors }\" placeholder=\"Product Details\">\n                        <div *ngIf=\"submitted && f.prod_desc.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_desc.errors.required\">Product Details is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Pricing</label>\n                       \n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                \n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">RM</span>\n                                        <input type=\"number\" class=\"form-control\" formControlName=\"prod_price\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_price.errors }\" placeholder=\"Product Price\">\n                                    </div>\n                                \n                            </div>\n                        </div>\n                        <div *ngIf=\"submitted && f.prod_price.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_price.errors.required\">Product Price is required</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Availability Start Time</label>\n                      <select  class=\"form-control\" id=\"st\" formControlName=\"prod_avail_time_s\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_s.errors }\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_s.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_s.errors.required\">Availability Start Time is required</div>\n                          </div>\n                  </div>\n\n\n                  <div class=\"form-group\">\n                      <label>Availability End Time</label>\n                      <select  class=\"form-control\" id=\"et\" formControlName=\"prod_avail_time_e\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_e.errors }\" placeholder=\"\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_e.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_e.errors.required\">Availability End Time is required</div>\n                      </div>\n                  </div>\n                      <div class=\"form-group\" *ngIf=\"product.prod_id\">\n                          <label>Product image</label>\n                         \n                          <div class=\"d-flex align-items-center\">\n                              <div class=\"flx_1 pr-2\">\n                                  <input type=\"file\" class=\"form-control\" (change)=\"selectImg($event)\" accept=\"image/*\">     \n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Choose Default Image\" class=\"btn btn-success\" type=\"button\" (click)=\"uploadImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                      \n                      <!-- <div class=\"form-group\">\n                          <label>Product Id (Auto Generate)</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                      <div class=\"pb-3\">\n                          <button class=\"btn btn-info\">More Product</button>\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"checkbox\"> Agree Terms & Conditions\n                      </div> -->\n                  </div>\n              </div>\n\n\n              <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success\">POST PRODUCT</button>\n              </div>\n            </form>\n          </div>\n      </div>\n\n    <!-- <div class=\"pt-5\">\n        <div class=\"panel panel-red\">\n            <div class=\"panel-heading mb-0 pb-0\">\n                <h3 class=\"text-left text-blue\">History</h3>\n            </div>\n            <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                <table class=\"table no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Product Id</th>\n                            <th>Category</th>\n                            <th>Image</th>\n                            <th>Pricing</th>\n                            <th>Timing</th>\n                            <th>Product Name</th>\n                            <th width=\"180\">\n\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"text-center cart_col\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"cart_info\">\n                                    <p>\n                                        Product Name\n                                    </p>\n                                    <p class=\"mb-0\">\n                                        Product Details\n                                    </p>\n                                </div>\n                            </td>\n                            <td>\n                                <button class=\"btn btn-info mb-2 w-100 btn-sm\" type=\"button\">Pending Live</button>\n                                <button class=\"btn btn-success w-100 btn-sm\" type=\"button\">Approval Pending</button>\n                            </td>\n                           \n                        </tr>\n                       \n                      \n                    </tbody>\n                </table>\n            </div>\n        </div>\n       \n        \n        \n    </div> -->\n</div>";
      /***/
    },

    /***/
    "bZqx":
    /*!**************************************************************************!*\
      !*** ./src/app/merchant/add-remove-existing/add-remove-existing.page.ts ***!
      \**************************************************************************/

    /*! exports provided: AddRemoveExistingPage */

    /***/
    function bZqx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRemoveExistingPage", function () {
        return AddRemoveExistingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_remove_existing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-remove-existing.page.html */
      "wY1S");
      /* harmony import */


      var _add_remove_existing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-remove-existing.page.scss */
      "rqHF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var AddRemoveExistingPage = /*#__PURE__*/function () {
        function AddRemoveExistingPage(router, service, storage) {
          _classCallCheck(this, AddRemoveExistingPage);

          this.router = router;
          this.service = service;
          this.storage = storage;
        }

        _createClass(AddRemoveExistingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.service.list({
              profile_id: this.storage.user.profile_id
            }).subscribe(function (res) {
              console.log(res);
              _this44.products = res.rows;
            });
          }
        }]);

        return AddRemoveExistingPage;
      }();

      AddRemoveExistingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }];
      };

      AddRemoveExistingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-remove-existing',
        template: _raw_loader_add_remove_existing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_remove_existing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddRemoveExistingPage);
      /***/
    },

    /***/
    "cv01":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/video-list/video-list.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cv01(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"\" *ngIf=\"video_list_visible == false\">\n<!-- Video HTML Start  -->\n<div class=\"video_list_web\">\n    <div class=\"d-flex p-3 align-items-center\" style=\"float: right;\">\n        <!-- <button>Add video</button> -->\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"add_video()\">Add video</button>\n     </div>\n    <div class=\"my_videos pt-3\">\n        <h3 class=\"txt_semi pl-0 pb-2\">My Videos</h3>\n        <div class=\"position-relative my_video_cont pb-3 scroll_hide align-items-start\">\n\n            <div style=\"width: 100%; height: 400px; text-align:center;margin:0; padding:0;\">\n                <ng-image-slider #nav\n                [images]=\"imageObject\"\n                [infinite]=\"false\"\n                [autoSlide]=\"1\"\n                [imageSize]=\"{width: '40%', height: 350}\"\n                slideImage=\"1\"\n                [imagePopup]=\"false\" (imageClick)=\"playvideo('myvideo',$event)\"\n                ></ng-image-slider>\n            </div>\n\n            <!-- <ng-container *ngFor=\"let user of users; let i = index\">\n            <div class=\"d-inline-flex my_video_row\">\n                <div class=\"all_video_col position-relative\">\n                    <div class=\"position-relative video_main\">\n                        <div class=\"video_head\">\n                            <div class=\"d-flex\">\n                                <div class=\"col-6 video_top_left\">\n                                    <i class=\"fa fa-android video_android text-white pr-1 cursor-pointer\"></i>\n                                    <i class=\"fa fa-apple video_mac text-white cursor-pointer\"></i>\n                                </div>\n                                <div class=\"col-6 text-right video_top_right\">\n                                    <img src=\"../../../assets/images/144x144.png\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n        \n                        <video  class=\"all_video_row\">\n                            <source src=\"{{user.video_link}}\" type=\"video/mp4\"> \n                            Your browser does not support HTML5 video. \n                        </video>\n                        <div class=\"video_play\">\n                            <i class=\"fa fa-play text-white video_play_btn cursor-pointer\" (click)=\"playvideo('myvideo',i)\"></i>\n                        </div>\n                    </div>                  \n                    \n                    <div class=\"video_desc p-1 text-white\">\n                        <h5 class=\"txt_semi pl-2 pb-3 mb-0\">{{user.video_note}}</h5>\n                    </div>\n                </div>\n            </div>\n        </ng-container>  -->\n        </div>\n    </div>\n\n    <div class=\"my_fav_video pt-1\">\n        <h3 class=\"txt_semi pb-2\">My Favorite</h3>\n        <div class=\"position-relative my_video_cont pb-3 scroll_hide align-items-start\">\n            <!-- <ng-container *ngFor=\"let users of users1; let i = index\">\n            <div class=\"d-inline-flex my_video_row\">\n                <div class=\"all_video_col position-relative\">\n                    <div class=\"position-relative video_main\">\n                       \n                        <video  class=\"all_video_row\">\n                            <source src=\"{{users.video_link}}\" type=\"video/mp4\"> \n                            Your browser does not support HTML5 video. \n                        </video>\n                        <div class=\"video_play d-flex align-items-center justify-content-center\">\n                            <i class=\"fa fa-play text-white video_play_btn cursor-pointer\" (click)=\"playvideo('favvideo',i)\" > </i>\n                        </div>\n                    </div>                  \n                    \n                    <div class=\"video_desc p-1 text-white\">\n                        <h6 class=\"txt_semi pl-2 pb-1 mb-0\">{{users.video_note}}</h6>\n                    </div>\n                </div>\n            </div>    \n            </ng-container> -->\n        \n\n            <div style=\"width: 100%; height: 200; text-align:center;margin:0; padding:0;\">\n                <ng-image-slider #nav\n                [images]=\"imageObject1\"\n                [infinite]=\"false\"\n                [autoSlide]=\"1\"\n                [imageSize]=\"{width: '20%', height: 200}\"\n                slideImage=\"1\"\n                [imagePopup]=\"false\" (imageClick)=\"playvideo('favvideo',$event)\"\n                ></ng-image-slider>\n            </div>\n\n\n        </div>\n    </div>\n\n\n    <div class=\"all_videos pt-3\">\n        <h3 class=\"txt_semi pb-0\">All Videos</h3>\n        <div class=\"all_video_load\">\n            <ng-container *ngFor=\"let user of users2; let i = index\">\n            <div class=\"all_video_col position-relative\">\n                <div class=\"position-relative video_main\">\n                    <div class=\"video_head\">\n                        <div class=\"d-flex\">\n                            <div class=\"col-6 video_top_left\">\n                                <i class=\"fa fa-android video_android text-white pr-1 cursor-pointer\"></i>\n                                <i class=\"fa fa-apple video_mac text-white cursor-pointer\"></i>\n                            </div>\n                            <div class=\"col-6 text-right video_top_right\">\n                                <img src=\"../../../assets/images/144x144.png\" alt=\"\">\n                            </div>\n                        </div>\n                    </div>\n                    <video  class=\"all_video_row\">\n                        <source src=\"{{user.video_link}}\" type=\"video/mp4\"> \n                        Your browser does not support HTML5 video. \n                    </video>\n                    <div class=\"add_video_com\">\n                        +\n                    </div>\n                    <div class=\"video_play\">\n                        <!-- <i class=\"fa fa-play text-white video_play_btn cursor-pointer\" ></i> -->\n                        <i class=\"fa fa-play text-white video_play_btn cursor-pointer\" (click)=\"playvideo('allvide',i)\" > </i>\n                    </div>\n                </div>                  \n                \n                <div class=\"video_desc p-1\">\n                    <h6 class=\"txt_semi pl-2 pb-1 mb-0\">{{user.video_note}}</h6>\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"flx_1\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"flx_0 pr-2\">\n                                    <img src=\"{{user.merchant_info.profile_img}}\" class=\"video_prof\" alt=\"\">\n                                </div>\n                                <div class=\"flx_1 video_pro_h\">\n                                    {{user.merchant_info.profile_first_name}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"flx_0 video_like\">\n                            <i class=\"fa fa-heart-o cursor-pointer\"></i> <span>53</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            </ng-container>\n          \n        </div>\n    </div>\n</div>\n<!-- Video HTML End  -->\n</div>\n\n\n\n\n<div class=\"\" *ngIf=\"video_list_visible == true\">\n<!-- Video Popup Start  -->\n<div class=\"video_wrapper position-fixed row no-gutters\">\n    <div class=\"col-md-8 position-relative video_show d-md-flex d-block flex-column align-items-center justify-content-center\">\n        <div class=\"flx_1 position-relative w-100\">\n            <header class=\"video_head p-2 d-md-none d-block\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col-6 pl-2 video_top_left\">\n                            <i class=\"fa fa-android video_android text-white pr-1 cursor-pointer\"></i>\n                            <i class=\"fa fa-apple video_mac text-white cursor-pointer\"></i>\n                    </div>\n                    <div class=\"col-6 pr-5 text-right video_top_right\">\n                        <img src=\"../../../assets/images/144x144.png\" alt=\"\">\n                    </div>\n                </div>\n            </header>\n            <!-- <div class=\"video_clos_min\">\n              <div class=\"d-md-flex align-items-center justify-content-center\">\n                <span class=\"video_close d-block d-md-none yellow_txt\">X</span>\n              </div> \n            </div> -->\n            <video controls class=\"video_frame\" #myVideo id=\"{{video_index}}\">\n                <source src=\"{{video_details}}\" type=\"video/mp4\">\n                Your browser does not support the video tag.\n            </video> \n        </div>\n        <div class=\"flx_0 w-100 video_cont_icon p-2\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-12 pb-4 pb-md-0 text-right text-md-left  video_prev_icon\" *ngIf=\"prev_button_visible\">\n                    <div class=\"d-inline-flex flex-column flex-md-row align-items-center\" (click)=\"previous_video()\">\n                        <img src=\"../../../assets/images/video_prev.png\"/>\n                        <span class=\"pl-0 pl-md-2\">Prev</span>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-12 text-right video_next_icon\"  *ngIf=\"next_button_visible\">\n                    <div class=\"d-inline-flex flex-column flex-md-row align-items-center\" (click)=\"next_video()\">\n                        <span class=\"pr-0 pr-md-2\">Next</span>\n                        <img src=\"../../../assets/images/video_next.png\"/>\n                    </div>\n                </div>\n            </div>\n        </div>\n       \n    </div>\n    <div class=\"col-md-4 h-100 d-md-flex video_chat_right flex-column\">\n        <div class=\"flx_0\">\n           \n            <div class=\"p-3 pb-0 video_info_txt\">\n                <div class=\"d-flex\">\n                    <div class=\"flx_0 pr-2\">\n                        <img src=\"../../../assets/images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                    </div>\n                    <div class=\"flx_1 line_n\">\n                        <h4 class=\"pb-2 txt_bold mb-0\">{{profile.profile_first_name}}</h4>\n                        <p class=\"c_name mb-0\">{{video_time | timeAgo}}</p>                                  \n                    </div>\n                    <div class=\"flx_0\" (click)=\"stopvideo()\">\n                        <span class=\"close_video_main\">X</span>\n                    </div>\n                </div>\n                <div class=\"pt-2 pb-2\">\n                    <p>{{video_desc}}</p>\n                </div>\n                <div class=\"pt-md-3 pt-0 aside_video d-flex justify-content-md-between justify-content-end align-items-end flex-md-row flex-column\">\n  \n                    <span class=\"cursor-pointer d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                        <img src=\"../../../assets/images/like-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                        <span class=\"d-md-block d-none\">Like</span>\n                        <span class=\"d-md-none d-block\">5052</span>\n                    </span>\n                    <span class=\"cursor-pointer d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                        <img src=\"../../../assets/images/comments-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                        <span class=\"d-md-block d-none\">Comments</span>\n                        <span class=\"d-md-none d-block\">5052</span>\n                    </span>\n                    <span class=\"cursor-pointer share_icon d-flex align-items-center flex-md-row flex-column pb-md-0 pb-4 text-center\">\n                        <img src=\"../../../assets/images/share-icon.png\" class=\"video_action_img mr-md-2 mr-0\" alt=\"\">\n                        <span class=\"d-md-block d-none\">Share</span>\n                        <span class=\"d-md-none d-block\">5052</span>\n                    </span>\n                </div>\n               \n            </div>\n        </div>\n       \n          <div class=\"chat_comments chat_hidden flx_1 flex-column d-md-flex\">\n            <div class=\"chat_pro flx_1\">\n                <ul>\n                    <li class=\"pb-3\">\n                        <div class=\"d-flex\">\n                            <div class=\"flx_1\">\n                                <div class=\"d-flex\">\n                                    <div class=\"flx_0 pr-2\">\n                                        <img src=\"../../../assets/images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                                    </div>\n                                    <div class=\"flx_1 line_n\">\n                                        <span class=\"c_msg pb-2\"> Profile Name</span>\n                                        <p class=\"c_name mb-0\">sample username</p>  \n                                        <div class=\"pt-1\">\n                                            <span class=\"hrs_coment\">22h</span> <span class=\"cursor-pointer comment_rply\">Reply</span>\n                                        </div>                                  \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"flx_0 video_like\">\n                                <i class=\"fa fa-heart-o cursor-pointer\"></i> \n                                <span class=\"d-block\">53</span>\n                            </div>\n                        </div>\n                       \n                    </li>\n                    <li class=\"pb-3\">\n                        <div class=\"d-flex\">\n                            <div class=\"flx_1\">\n                                <div class=\"d-flex\">\n                                    <div class=\"flx_0 pr-2\">\n                                        <img src=\"../../../assets/images/like-arise-dashboard.jpg\" class=\"c_img\" alt=\"\">\n                                    </div>\n                                    <div class=\"flx_1 line_n\">\n                                        <span class=\"c_msg pb-2\"> Profile Name</span>\n                                        <p class=\"c_name mb-0\">sample username</p>  \n                                        <div class=\"pt-1\">\n                                            <span class=\"hrs_coment\">22h</span> <span class=\"cursor-pointer comment_rply\">Reply</span>\n                                        </div>                                      \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"flx_0 video_like\">\n                                <i class=\"fa fa-heart-o cursor-pointer\"></i> \n                                <span class=\"d-block\">53</span>\n                            </div>\n                        </div>\n                       \n                    </li>\n                </ul>\n            </div>\n          \n            <div class=\"flx_0 pt-2 pr-2 pl-2 foot_chat mb-0\">\n                <textarea name=\"\" class=\"chat_input w-100\"></textarea>\n            </div>\n          </div>\n         \n  \n       \n    </div>\n </div>\n<!-- Video Popup HTML End  -->\n</div>\n\n\n";
      /***/
    },

    /***/
    "d5Zy":
    /*!*****************************************************************!*\
      !*** ./src/app/merchant/productview/productview.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function d5Zy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0dmlldy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hZv+":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/product-edit/product-edit.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hZv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>Add New Product</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n<div class=\"add_new_category\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"panel mb-3\">\n                <div class=\"panel-body\">\n                   \n                    <div class=\"form-group\">\n                        <label>Choose Category</label>\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                  <select formControlName=\"cat_id\" [(ngModel)]=\"prod_data.category.cat_id\" class=\"form-control\" >\n                                      <option *ngFor=\"let category of categories\" value=\"{{category.cat_id}}\">{{category.cat_name}}</option>\n                                  </select>  \n                                       \n                              </div>\n                              <div class=\"flx_0\">\n                                  <button class=\"btn btn-success\" routerLink=\"/merchant/add-new-category\" type=\"button\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                          <div *ngIf=\"submitted && f.cat_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cat_id.errors.required\">Category is required</div>\n                            </div>   \n                      </div>\n                      <div class=\"form-group\">\n                        <label>Product Name</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"prod_data.prod_name\" formControlName=\"prod_name\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_name.errors }\" placeholder=\"Product Name\">\n                        <div *ngIf=\"submitted && f.prod_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_name.errors.required\">Product Name is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Details</label>\n                        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"prod_data.prod_desc\" formControlName=\"prod_desc\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_desc.errors }\" placeholder=\"Product Details\">\n                        <div *ngIf=\"submitted && f.prod_desc.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.prod_desc.errors.required\">Product Details is required</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Product Pricing</label>\n                       \n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"flx_1 pr-2\">\n                                \n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">RM</span>\n                                        <input type=\"number\"  [(ngModel)]=\"prod_data.prod_price\" class=\"form-control\" formControlName=\"prod_price\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_price.errors }\" placeholder=\"Product Price\">\n                                    </div>\n                                \n                            </div>\n                        </div>\n                        <div *ngIf=\"submitted && f.prod_price.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_price.errors.required\">Product Price is required</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Availability Start Time</label>\n                      <select  class=\"form-control\" [(ngModel)]=\"start_time\" formControlName=\"prod_avail_time_s\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_s.errors }\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_s.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_s.errors.required\">Availability Start Time is required</div>\n                          </div>\n                  </div>\n\n\n                  <div class=\"form-group\">\n                      <label>Availability End Time</label>\n                      <select  class=\"form-control\" [(ngModel)]=\"end_time\" formControlName=\"prod_avail_time_e\" [ngClass]=\"{ 'is-invalid': submitted && f.prod_avail_time_e.errors }\" placeholder=\"\">\n                          <option value=\"01:00 AM\">01:00 AM</option>\n                          <option value=\"02:00 AM\">02:00 AM</option>\n                          <option value=\"03:00 AM\">03:00 AM</option>\n                          <option value=\"04:00 AM\">04:00 AM</option>\n                          <option value=\"05:00 AM\">05:00 AM</option>\n                          <option value=\"06:00 AM\">06:00 AM</option>\n                          <option value=\"07:00 AM\">07:00 AM</option>\n                          <option value=\"08:00 AM\">08:00 AM</option>\n                          <option value=\"09:00 AM\">09:00 AM</option>\n                          <option value=\"10:00 AM\">10:00 AM</option>\n                          <option value=\"11:00 AM\">11:00 AM</option>\n                          <option value=\"12:00 AM\">12:00 AM</option>\n                          <option value=\"01:00 PM\">01:00 PM</option>\n                          <option value=\"02:00 PM\">02:00 PM</option>\n                          <option value=\"03:00 PM\">03:00 PM</option>\n                          <option value=\"04:00 PM\">04:00 PM</option>\n                          <option value=\"05:00 PM\">05:00 PM</option>\n                          <option value=\"06:00 PM\">06:00 PM</option>\n                          <option value=\"07:00 PM\">07:00 PM</option>\n                          <option value=\"08:00 PM\">08:00 PM</option>\n                          <option value=\"09:00 PM\">09:00 PM</option>\n                          <option value=\"10:00 PM\">10:00 PM</option>\n                          <option value=\"11:00 PM\">11:00 PM</option>\n                          <option value=\"12:00 PM\">12:00 PM</option>\n                      </select>\n                      <div *ngIf=\"submitted && f.prod_avail_time_e.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.prod_avail_time_e.errors.required\">Availability End Time is required</div>\n                      </div>\n                  </div>\n                      <div class=\"form-group\">\n                          <label>Product image</label>\n                         \n                          <div class=\"d-flex align-items-center\">\n                              <div class=\"flx_1 pr-2\">\n                                  <input type=\"file\" class=\"form-control\" (change)=\"selectImg($event)\">     \n                                  <img src=\"{{prod_data.prod_img}}\">\n                              </div>\n                              <div class=\"flx_0\">\n                                  <button title=\"Upload Image\" class=\"btn btn-success\" type=\"button\" (click)=\"saveImg()\"> <i class=\"icon-plus d-block\"></i> </button>\n                              </div>\n                          </div>\n                      </div>\n                      \n                      <!-- <div class=\"form-group\">\n                          <label>Product Id (Auto Generate)</label>\n                          <input type=\"text\" class=\"form-control\">\n                      </div>\n                      <div class=\"pb-3\">\n                          <button class=\"btn btn-info\">More Product</button>\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"checkbox\"> Agree Terms & Conditions\n                      </div> -->\n                  </div>\n              </div>\n\n\n              <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-success\">POST PRODUCT</button>\n              </div>\n            </form>\n          </div>\n      </div>\n\n    <!-- <div class=\"pt-5\">\n        <div class=\"panel panel-red\">\n            <div class=\"panel-heading mb-0 pb-0\">\n                <h3 class=\"text-left text-blue\">History</h3>\n            </div>\n            <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                <table class=\"table no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Product Id</th>\n                            <th>Category</th>\n                            <th>Image</th>\n                            <th>Pricing</th>\n                            <th>Timing</th>\n                            <th>Product Name</th>\n                            <th width=\"180\">\n\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"text-center cart_col\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"text-center\">\n                                    <span\n                                        class=\"cart_icon d-inline-flex align-items-center justify-content-center\">\n                                        <i class=\"icon-shopping-cart\"></i>\n                                    </span>\n                                    <h5 class=\"mb-0\">15421</h5>\n                                </div>\n                            </td>\n                            <td>\n                                <div class=\"cart_info\">\n                                    <p>\n                                        Product Name\n                                    </p>\n                                    <p class=\"mb-0\">\n                                        Product Details\n                                    </p>\n                                </div>\n                            </td>\n                            <td>\n                                <button class=\"btn btn-info mb-2 w-100 btn-sm\" type=\"button\">Pending Live</button>\n                                <button class=\"btn btn-success w-100 btn-sm\" type=\"button\">Approval Pending</button>\n                            </td>\n                           \n                        </tr>\n                       \n                      \n                    </tbody>\n                </table>\n            </div>\n        </div>\n       \n        \n        \n    </div> -->\n</div>";
      /***/
    },

    /***/
    "iCAx":
    /*!******************************************************!*\
      !*** ./src/app/merchant/delivered/delivered.page.ts ***!
      \******************************************************/

    /*! exports provided: DeliveredPage */

    /***/
    function iCAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveredPage", function () {
        return DeliveredPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_delivered_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./delivered.page.html */
      "M8PV");
      /* harmony import */


      var _delivered_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delivered.page.scss */
      "qop5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeliveredPage = /*#__PURE__*/function () {
        function DeliveredPage() {
          _classCallCheck(this, DeliveredPage);
        }

        _createClass(DeliveredPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeliveredPage;
      }();

      DeliveredPage.ctorParameters = function () {
        return [];
      };

      DeliveredPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delivered',
        template: _raw_loader_delivered_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delivered_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeliveredPage);
      /***/
    },

    /***/
    "iSUg":
    /*!******************************************************************!*\
      !*** ./src/app/merchant/order-preparing/order-preparing.page.ts ***!
      \******************************************************************/

    /*! exports provided: OrderPreparingPage */

    /***/
    function iSUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPreparingPage", function () {
        return OrderPreparingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_preparing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-preparing.page.html */
      "1cci");
      /* harmony import */


      var _order_preparing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-preparing.page.scss */
      "9hib");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderPreparingPage = /*#__PURE__*/function () {
        function OrderPreparingPage() {
          _classCallCheck(this, OrderPreparingPage);
        }

        _createClass(OrderPreparingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderPreparingPage;
      }();

      OrderPreparingPage.ctorParameters = function () {
        return [];
      };

      OrderPreparingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-preparing',
        template: _raw_loader_order_preparing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_preparing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderPreparingPage);
      /***/
    },

    /***/
    "jj44":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/product-list/product-list.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function jj44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "jswh":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/category-edit/category-edit.page.ts ***!
      \**************************************************************/

    /*! exports provided: CategoryEditPage */

    /***/
    function jswh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryEditPage", function () {
        return CategoryEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-edit.page.html */
      "szEd");
      /* harmony import */


      var _category_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-edit.page.scss */
      "zo14");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");

      var CategoryEditPage = /*#__PURE__*/function () {
        function CategoryEditPage(router, route, formBuilder, service) {
          _classCallCheck(this, CategoryEditPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.submitted = false;
        } // categories: any[];


        _createClass(CategoryEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.categoryForm = this.formBuilder.group({
              category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
            this.cat_data = JSON.parse(localStorage.getItem('cat_data'));
            console.log(this.cat_data); // const controls = this.categoryForm.controls;
            // controls.category.value = this.cat_data.cat_id
          }
        }, {
          key: "f",
          get: function get() {
            return this.categoryForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this45 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.categoryForm.invalid) {
              return;
            }

            var controls = this.categoryForm.controls;
            var _category = {
              cat_name: controls.category.value,
              cat_id: this.cat_data.cat_id
            };
            console.log(_category);
            this.service.update(_category).subscribe(function (res) {
              console.log("Created Successfully");

              _this45.router.navigateByUrl('/merchant/list_category'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('/merchant/list_category');
          }
        }]);

        return CategoryEditPage;
      }();

      CategoryEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }];
      };

      CategoryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-edit',
        template: _raw_loader_category_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryEditPage);
      /***/
    },

    /***/
    "k5GT":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/creditreport/creditreport.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k5GT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>report-download</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n                <h3>Report</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n\n\n\n\n\n\n<div class=\"report_info pt-3\">\n    <div class=\"panel mb-3\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label>Credit Report Type</label>\n                <select name=\"\" class=\"form-control\" id=\"\" [(ngModel)]=\"format\" name=\"format\">\n                    <option value=\"\">Select</option>\n                    <option value=\"Excel\">Excel</option>\n                </select>\n                 <div class=\"warning\" *ngIf=\"type_error.length !== 0\">\n                    {{type_error}}\n                  </div>\n            </div>\n            <br>\n            <div class=\"form-group\">  \n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Select Start date</label> \n                    <input type=\"date\" [(ngModel)]=\"start_date\" class=\"form-control\" placeholder=\"Start Date\">\n                    <div class=\"warning\" *ngIf=\"start_date_error.length !== 0\">\n                        {{start_date_error}}\n                      </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Select End date</label> \n                    <input type=\"date\" [(ngModel)]=\"end_date\" class=\"form-control\" placeholder=\"Start Date\">\n                    <div class=\"warning\" *ngIf=\"end_date_error.length !== 0\">\n                        {{end_date_error}}\n                      </div>\n                </div>\n            </div>           \n            <div class=\"form-group pt-3\">\n\n              <input type=\"checkbox\"  class=\"largerCheckbox\"  id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\" (change)=\"toggleEditable($event)\"> Agree Terms &amp; Conditions\n              <div class=\"warning\" *ngIf=\"agreement_error.length !== 0\">\n                {{agreement_error}}\n              </div>\n\n                <!-- <input type=\"checkbox\"> Agree Terms & Conditions -->\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"fetch_date()\">Download</button>\n    </div>\n</div>\n\n<div class=\"pt-2\">\n  <div class=\"panel panel-red\">\n      <div class=\"panel-heading mb-0 pb-0\">\n          <h4 class=\"text-left\">Report Detail</h4>\n      </div>\n      <div class=\"panel-body table-responsive pb-0\">\n          <table class=\"table no-margin text-center\">\n              <thead>\n                  <tr>\n                      <th>S.No</th>\n                      <th>Date & Time</th>\n                      <th>Order Id</th>\n                      <th>User Id</th>\n                      <th>Product Details</th>\n                      <th>Note</th>\n                      <th>Quantity</th>\n                      <th>Price</th>\n                      <th>Status</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                      <tr *ngIf=\"corderslist.length !== 0\">\n                          <td>\n                              {{i+1}}\n                          </td>\n                          <td>\n  \n                              {{order.order_detail.order_mst.order_date}}\n                          </td>\n                          <td>\n                              {{order.order_detail.order_id}}\n                          </td>\n                          <td>\n                              {{order.order_detail.order_mst.customer_info.profile_id}} \n                              <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                          </td>\n                          <td>\n                              <ng-container  *ngFor=\"let item of order.product_details\">\n                                  <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                              </ng-container>\n                              <!-- {{order.order_detail.order_mst.order_no}} -->\n                          </td>\n                          <td>\n                          </td>\n                          <td>\n                              {{order.order_qty}}\n                              <!-- {{order.product_details.length}} -->\n                          </td>\n                          <td>\n                              {{order.order_value}}\n                          </td>\n                          <!-- <td>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                              <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p>\n                          </td> -->\n                          <td>Credited</td>\n                       </tr>\t              \n                      </ng-container>\n                      <tr *ngIf=\"corderslist.length == 0\">\n                          <td colspan=\"10\">No Record Found</td>\n                       </tr>                   \n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "ke9m":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/update-order-status/update-order-status.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ke9m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>update-order-status</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<!-- Top Bar Starts -->\n<div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-title\">\n                <h3>Update Order Status</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n<!-- New Order start-->\n<div class=\"row\">\n    <div class=\"col-lg-3 col-md-6 col-6 text-center pb-4\"   (click)=\"filter_status('B','A')\">\n        <img src=\"../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\">\n        <div class=\"info_product text-center bg_color_1\">\n            <h6 class=\"txt_normal\">Order <br/> Confirmation</h6>\n            <div class=\"row pt-2\">\n                <div class=\"col-6 text-left\">\n                    <h4 class=\"txt_semi\">{{confirm_count}}</h4>\n                </div>\n                <div class=\"col-6 text-right\">\n                    <span class=\"go_btn\">\n                        Go   <i class=\"fa fa-chevron-right\" *ngIf=\"title !== 'Received'\"></i>\n                        <i class=\"fa fa-chevron-down\" *ngIf=\"title == 'Received'\"></i>\n                     </span>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-6 text-center pb-4\" (click)=\"filter_status('A','P')\">\n        <img src=\"../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\">\n        <div class=\"info_product text-center bg_color_4\">\n            <h6 class=\"txt_normal\">Order <br/>Preparing</h6>\n            <div class=\"row pt-2\">\n                <div class=\"col-6 text-left\">\n                    <h4 class=\"txt_semi\">{{prepare_count}}</h4>\n                </div>\n                <div class=\"col-6 text-right\">\n                    <span class=\"go_btn\">\n                        Go   <i class=\"fa fa-chevron-right\" *ngIf=\"title !== 'Approved'\"></i>\n                        <i class=\"fa fa-chevron-down\" *ngIf=\"title == 'Approved'\"></i>\n                     </span>\n                   \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-6 text-center pb-4\" (click)=\"filter_status('P','D')\">\n        <img src=\"../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\">\n        <div class=\"info_product text-center bg_color_2\">\n            <h6 class=\"txt_normal\">Rider <br/>Picked</h6>\n            <div class=\"row pt-2\">\n                <div class=\"col-6 text-left\">\n                    <h4 class=\"txt_semi\">{{picked_count}}</h4>\n                </div>\n                <div class=\"col-6 text-right\">\n\n                    <span class=\"go_btn\">\n                        Go   <i class=\"fa fa-chevron-right\" *ngIf=\"title !== 'Picked'\"></i>\n                        <i class=\"fa fa-chevron-down\" *ngIf=\"title == 'Picked'\"></i>\n                     </span>\n                   \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-6 text-center pb-4\" (click)=\"filter_status('D','C')\">\n        <img src=\"../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\">\n        <div class=\"info_product text-center bg_color_3\">\n            <h6 class=\"txt_normal\">Delivered & <br/> Cancelled</h6>\n            <div class=\"row pt-2\">\n                <div class=\"col-6 text-left\">\n                    <h4 class=\"txt_semi\">{{deliver_count}}</h4>\n                </div>\n                <div class=\"col-6 text-right\">\n                    <span class=\"go_btn\">\n                        Go   <i class=\"fa fa-chevron-right\" *ngIf=\"title !== 'Delivered'\"></i>\n                        <i class=\"fa fa-chevron-down\" *ngIf=\"title == 'Delivered'\"></i>\n                     </span>\n                    <!-- <i class=\"fa fa-chevron-right\"></i> -->\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- New Order start-->\n\n\n<div class=\"\" *ngIf=\"corderslist.length !== 0\">\n<!-- Receipt HTML Start  -->\n<div class=\"panel-heading mb-0 pb-0\">\n<h3 class=\"text-left txt_bold\">{{title}}</h3>\n</div>\n<div class=\"receipt_row\">\n    <div class=\"row w-100\">\n        <ng-container *ngFor=\"let order of corderslist | paginate: { itemsPerPage: 3, currentPage: p1, id: 'first' },let i = index\">\n        <div class=\"col-lg-4 col-md-6 pb-3 recp_main recp_main_approved text-center pr-4\">\n            <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n            <div class=\"ro_col text-center\">\n                <div class=\"ro_col_1\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-auto re_left_w text-center\">\n                            <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Rejected</span>\n                            </span> -->\n\n                            <div *ngIf=\"title == 'Received'\">\n                                <span (click)=\"updatestatus('Cancel',order)\" >\n                                    <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Reject</span>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Approved'\">\n                                <span (click)=\"updatestatus('Cancel',order)\" >\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancel</span>\n                                    <span class=\"d-block\">00:30</span>\n                                </span>\n\n                            </div>\n\n                            <div *ngIf=\"title == 'Picked'\">\n                                <span >\n                                    <span class=\"d-block\">5678</span>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Delivered'\">\n                                <span>\n                                    <div *ngIf=\"order.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div>\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span class=\"d-block\">5678</span>\n                                    </div>\n                                </span>\n                            </div>\n\n                        </div>\n                        <div class=\"col text-center p-0\">\n                            <div class=\"rc2_main\">\n                            <div class=\"ro_col1_2\">\n                            <div class=\"rc1_1 pb-1\">\n                                <b class=\"text_yellow d-block\"> {{business_name}}</b>\n                                <span class=\"cus_white\">ID:{{busineess_id}}</span>\n                            </div>\n                            <div class=\"rc1_2 pt-1 pb-1\">\n                                ORDER ID: {{order.order_id}}\n                            </div>\n                            <div class=\"row no-gutters pt-1\">\n                                <div class=\"col text-left\">\n                                    <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.prod_qty}}</span>\n                                </div>\n                                <div class=\"col-auto text-right\">\n                                    <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.prod_total_price}}</span>\n                                </div>\n                            </div>\n                              </div>\n                        </div>\n                        <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.customer}} </span>\n                        </div>\n                        <div class=\"col-auto re_left_w text-center\">\n                           \n                        \n                            <div *ngIf=\"title == 'Received'\">\n                                <span (click)=\"updatestatus('Accept',order)\" >\n                                    <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Accept</span>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Approved'\">\n                                <span>\n                                    <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Accepted</span>\n                                </span>\n\n                            </div>\n\n                            <div *ngIf=\"title == 'Picked'\">\n                                <span >\n                                    <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Out for <br/> Delivery</span>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Delivered'\">\n                                <span>\n                                    <!-- <div *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div> -->\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span >\n                                        <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                        <span class=\"d-block\">Delivered</span>\n                                    </span>\n                                    </div>\n                                </span>\n                            </div>\n\n\n\n                           \n                           \n                           \n                           \n                           \n                            <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\" *ngIf=\"select_value == 'Order Confirmation'\">\n                                <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Accept</span>\n                            </span> -->\n\n                        \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"ro_col_2 pt-2\">\n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>\n                                               s.no\n                                            </th>\n                                            <th>\n                                                Order Details\n                                            </th>\n                                            <th>\n                                                QTY\n                                            </th>\n                                            <th>\n                                                U.PRICE\n                                            </th>\n                                            <th>\n                                                PRICE\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <ng-container  *ngFor=\"let item of order.order_prods; let i = index;\">\n                                            <tr>\n                                                <td>\n                                                    {{i+1}}\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                   <b>Product id:</b> {{i + 1}} \n                                                </div>\n                                                <p class=\"mb-0\">\n                                                    {{item.prod_name}}\n                                                </p>\n                                                </td>\n                                                <td>\n                                                    {{item.prod_qty}}\n                                                </td>\n                                                <td>\n                                                    {{item.prod_price}}\n                                                </td>\n                                                <td>\n                                                    {{item.prod_total_price}}\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n\n                <div class=\"ro_col_3 pt-2\">\n                   \n                        \n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"text-center\">\n                                            Note If any\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"text-center\">\n                                               some text\n                                            </td>\n                                          \n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    \n                </div>\n                <div class=\"ro_col_4 pt-2\">\n                   \n                        \n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"text-center\">\n                                           Date and time\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"text-center\">\n                                                {{order.order_date | date:'medium'}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                  \n                </div>\n                <div class=\"ro_col_5 pt-2 pl-3\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                            <b class=\"d-block\">John </b>\n                            <b class=\"d-block\">Approved</b>\n                        </div>\n                        <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                            <a href='#'><b>Enquiry</b></a>\n                           \n                        </div>\n                    </div>\n\n\n                </div>\n               \n            </div>\n\n\n            <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_status == 'A'\">\n            </div>\n            <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_status == 'C'\">\n            </div>\n            <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_status == 'P'\">\n            </div>\n            <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_status == 'D'\">\n            </div>\n\n\n        </div>\n        </ng-container>\n\n        <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n            <h4 class=\"text-left txt_bold\">No Record found</h4>\n        </div> -->\n     \n    </div>\n    <div class=\"pt-5 pb-3 text-center\">\n        <nav aria-label=\"Page navigation\">\n            <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p1 = $event\" id=\"first\"></pagination-controls>\n        </nav>\n    </div>\n</div>\n<!-- Receipt HTML End  -->\n</div>\n\n\n<div class=\"\" *ngIf=\"history_list.length !== 0\">\n<!-- Receipt HTML Start  -->\n<div class=\"panel-heading mb-0 pb-0\">\n    <h3 class=\"text-left txt_bold\">{{title}} History</h3>\n</div>\n<div class=\"receipt_row\">\n    <div class=\"row w-100\">\n        <ng-container *ngFor=\"let order of history_list | paginate: { itemsPerPage: 3, currentPage:  p2, id: 'second' },let i = index\">\n        <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n            <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n            <div class=\"ro_col text-center\">\n                <div class=\"ro_col_1\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-auto text-center\">\n\n\n\n\n                            <div *ngIf=\"title == 'Received'\">\n                                    <span (click)=\"updatestatus('Cancel',order)\" >\n                                        <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                        <span class=\"d-block\">Cancel</span>\n                                        <span class=\"d-block\">00:30</span>\n                                    </span>\n                            </div>\n\n                            <div *ngIf=\"Approved == 'Approved'\">\n                                <span >\n                                    <span class=\"d-block\">5678</span>\n                                </span>\n\n                            </div>\n\n                            <div *ngIf=\"title == 'Picked'\">\n                                <span>\n                                    <div *ngIf=\"order.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div>\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span class=\"d-block\">5678</span>\n                                    </div>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Delivered'\">\n                                <span>\n                                    <div *ngIf=\"order.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div>\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span class=\"d-block\">5678</span>\n                                    </div>\n                                </span>\n                            </div>\n\n\n\n\n                           \n                            <!-- <span *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                                <img src=\"../../../../../assets/images/r_icon_5.png\" (click)=\"updatestatus('Cancel',order)\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Cancel</span>\n                            </span>\n                            <span *ngIf=\"order.order_detail.order_dtl_status !== 'C'\">\n                                <img src=\"../../../../../assets/images/r_icon_4.png\" (click)=\"updatestatus('Cancel',order)\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Cancel</span>\n                            </span> -->\n                        </div>\n                        <div class=\"col text-center p-0\">\n                            <div class=\"rc2_main\">\n                            <div class=\"ro_col1_2\">\n                            <div class=\"rc1_1 pb-1\">\n                                <b class=\"text_yellow d-block\"> {{business_name}}</b>\n                                <span class=\"cus_white\">ID:{{busineess_id}}</span>\n                            </div>\n                            <div class=\"rc1_2 pt-1 pb-1\">\n                                ORDER ID: {{order.order_id}}\n                            </div>\n                            <div class=\"row no-gutters pt-1\">\n                                <div class=\"col text-left\">\n                                    <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.prod_qty}}</span>\n                                </div>\n                                <div class=\"col-auto text-right\">\n                                    <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.prod_total_price}}</span>\n                                </div>\n                            </div>\n                              </div>\n                        </div>\n                        <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.customer}} </span>\n                        </div>\n                        <div class=\"col-auto text-center\">\n\n\n                            <div *ngIf=\"title == 'Received'\">\n                                <span>\n                                    <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Accepted</span>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Approved'\">\n                                <span >\n                                    <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Out for <br/> Delivery</span>\n                                </span>\n\n                            </div>\n\n                            <div *ngIf=\"title == 'Picked'\">\n                                <span>\n                                    <!-- <div *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div> -->\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span >\n                                        <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                        <span class=\"d-block\">Delivered</span>\n                                    </span>\n                                    </div>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"title == 'Delivered'\">\n                                <span>\n                                    <!-- <div *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                                    <img src=\"../../../../../assets/images/r_icon_6.png\" alt=\"\" class=\"r_close_icon\"/>\n                                    <span class=\"d-block\">Cancelled</span>\n                                   </div> -->\n                                   <div *ngIf=\"order.order_dtl_status == 'D'\">\n                                    <span >\n                                        <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                        <span class=\"d-block\">Delivered</span>\n                                    </span>\n                                    </div>\n                                </span>\n                            </div>\n\n\n\n\n\n                            \n                            <!-- <span class=\"pl-1 d-block\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                                <img src=\"../../../../../assets/images/r_icon_5.png\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Accepted</span>\n                            </span>\n\n                            <span class=\"pl-1 d-block\" *ngIf=\"order.order_detail.order_dtl_status !== 'A'\">\n                                <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                <span class=\"d-block\">Accepted</span>\n                            </span> -->\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"ro_col_2 pt-2\">\n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>\n                                               s.no\n                                            </th>\n                                            <th>\n                                                Order Details\n                                            </th>\n                                            <th>\n                                                QTY\n                                            </th>\n                                            <th>\n                                                U.PRICE\n                                            </th>\n                                            <th>\n                                                PRICE\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <ng-container  *ngFor=\"let item of order.order_prods; let i = index\">\n                                            <tr>\n                                                <td>\n                                                    {{i+1}}\n                                                </td>\n                                                <td>\n                                                <div>\n                                                   <b>Product is:</b> {{i+1}}\n                                                </div>\n                                                <p class=\"mb-0\">\n                                                    {{item.prod_name}}\n                                                </p>\n                                                </td>\n                                                <td>\n                                                    {{item.prod_qty}}\n                                                </td>\n                                                <td>\n                                                    {{item.prod_price}}\n                                                </td>\n                                                <td>\n                                                    {{item.prod_total_price}}\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n\n                <div class=\"ro_col_3 pt-2\">\n                   \n                        \n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"text-center\">\n                                            Note If any\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"text-center\">\n                                               some text\n                                            </td>\n                                          \n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    \n                </div>\n                <div class=\"ro_col_4 pt-2\">\n                   \n                        \n                        <div class=\"text-left position-relative\">\n                        <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                            <div class=\"ro_tble\">\n                                <table class=\"w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"text-center\">\n                                           Date and time\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"text-center\">\n                                                {{order.order_date | date:'medium'}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                  \n                </div>\n                <div class=\"ro_col_5 pt-2 pl-3\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                            <b class=\"d-block\">John </b>\n                            <b class=\"d-block\">Approved</b>\n                        </div>\n                        <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                            <a href='#'><b>Enquiry</b></a>\n\n                            \n                           \n                        </div>\n                    </div>\n\n\n                </div>\n               \n            </div>\n            \n                 <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_status == 'A'\">\n                </div>\n                <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_status == 'C'\">\n                </div>\n                <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_status == 'P'\">\n                </div>\n                <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_status == 'D'\">\n                </div>\n                \n            \n        </div>\n        </ng-container>\n        <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"history_list.length == 0\">\n            <h4 class=\"text-left txt_bold\">No Record found</h4>\n        </div> -->\n    </div>\n    <div class=\"pt-5 pb-3 text-center\">\n        <nav aria-label=\"Page navigation\">\n            <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p2 = $event\" id=\"second\"></pagination-controls>\n        </nav>\n    </div>\n</div>\n</div>\n<!-- Receipt HTML End  -->\n\n\n\n\n\n";
      /***/
    },

    /***/
    "mFJA":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/wallet-point/wallet-point.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mFJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n <!--<ion-header>\n  <ion-toolbar>\n    <ion-title>wallet-point</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n\n  <!-- Top Bar Starts -->\n  <div *ngIf=\"page_visible\">\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Wallet Point</h3>\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <h3 class=\"text-left text-red\">Overview</h3>\n\n  <div class=\"row\" style=\"margin-bottom: 40px;\">\n     \n      <div class=\"col-lg-3 col md-6\">\n          <div class=\"panel yellow_panel\">\n              <div class=\"sessions\">\n                  <h2 class=\"left\" style=\"color: black;\">{{C_today_value}} <i class=\"icon-direction up\"></i></h2>\n                  <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n              </div>\n\n              <div id=\"chart\">\n                <apx-chart\n                  [series]=\"chartOptions1.series\"\n                  [chart]=\"chartOptions1.chart\"\n                  [xaxis]=\"chartOptions1.xaxis\"\n                  [stroke]=\"chartOptions1.stroke\"\n                  [tooltip]=\"chartOptions1.tooltip\"\n                  [dataLabels]=\"chartOptions1.dataLabels\"\n                ></apx-chart>\n              </div>\n\n              <h5 class=\"info\">Today Credit</h5>\n          </div>\n      </div>\n      <div class=\"col-lg-3 col md-6\">\n        <div class=\"panel yellow_panel\">\n            <div class=\"sessions\">\n                <h2 class=\"left\" style=\"color: black;\">{{D_today_value}} <i class=\"icon-direction up\"></i></h2>\n                <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n            </div>\n\n            <div id=\"chart\">\n                <apx-chart\n                  [series]=\"chartOptions2.series\"\n                  [chart]=\"chartOptions2.chart\"\n                  [xaxis]=\"chartOptions2.xaxis\"\n                  [stroke]=\"chartOptions2.stroke\"\n                  [tooltip]=\"chartOptions2.tooltip\"\n                  [dataLabels]=\"chartOptions2.dataLabels\"\n                ></apx-chart>\n              </div>\n\n\n            <h5 class=\"info\">Today Debit</h5>\n        </div>\n    </div>\n      <div class=\"col-lg-3 col md-6\">\n          <div class=\"panel yellow_panel\">\n              <div class=\"sessions\">\n                  <h2 class=\"left\"  style=\"color: black;\" >{{C_total_value}} <i class=\"icon-direction up\"></i></h2>\n                  <div  class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n              </div>\n              <div id=\"chart\">\n                <apx-chart\n                  [series]=\"chartOptionss1.series\"\n                  [chart]=\"chartOptionss1.chart\"\n                  [xaxis]=\"chartOptionss1.xaxis\"\n                  [stroke]=\"chartOptionss1.stroke\"\n                  [tooltip]=\"chartOptionss1.tooltip\"\n                  [dataLabels]=\"chartOptionss1.dataLabels\"\n                ></apx-chart>\n              </div>\n              <h5 class=\"info\">Total Credit</h5>\n          </div>\n      </div>\n      <div class=\"col-lg-3 col md-6\">\n          <div class=\"panel yellow_panel\">\n              <div class=\"sessions\">\n                  <h2 class=\"left\" style=\"color: black;\">{{D_total_value}} <i class=\"icon-direction up\"></i></h2>\n                  <div class=\"graph w-100 invoice\" style=\"width: 100%;\"></div>\n              </div>\n              <div id=\"chart\">\n                <apx-chart\n                  [series]=\"chartOptionss2.series\"\n                  [chart]=\"chartOptionss2.chart\"\n                  [xaxis]=\"chartOptionss2.xaxis\"\n                  [stroke]=\"chartOptionss2.stroke\"\n                  [tooltip]=\"chartOptionss2.tooltip\"\n                  [dataLabels]=\"chartOptionss2.dataLabels\"\n                ></apx-chart>\n              </div>\n              <h5 class=\"info\">Total Debit</h5>\n          </div>\n      </div>\n  </div>\n\n\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <div class=\"panel\" style=\"background: #ffffff !important;\" >\n              <h3 class=\"text-left txt_bold\" style=\"color: black;\">Monthly Report</h3>\n            \n              <div id=\"chart1\">\n                <apx-chart\n                  [series]=\"chartOptionss.series\"\n                  [chart]=\"chartOptionss.chart\"\n                  [xaxis]=\"chartOptionss.xaxis\"\n                  [stroke]=\"chartOptionss.stroke\"\n                  [tooltip]=\"chartOptionss.tooltip\"\n                  [dataLabels]=\"chartOptionss.dataLabels\"\n                ></apx-chart>\n              </div>\n              \n          </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"panel\" style=\"background: #ffffff !important;\" >\n            <h3 class=\"text-left txt_bold\"  style=\"font-weight: 800;color: black;\">Total Report</h3>\n          \n            <div id=\"chart\">\n              <apx-chart\n                [series]=\"chartOptionss.series\"\n                [chart]=\"chartOptionss.chart\"\n                [xaxis]=\"chartOptionss.xaxis\"\n                [stroke]=\"chartOptionss.stroke\"\n                [tooltip]=\"chartOptionss.tooltip\"\n                [dataLabels]=\"chartOptionss.dataLabels\"\n              ></apx-chart>\n            </div>\n            \n        </div>\n    </div>\n  </div>   \n \n\n  <div class=\"pt-2\">\n    <div class=\"panel panel-red\">\n        <div class=\"panel-heading mb-0 pb-0\">\n            <h4 class=\"text-left\">Credit Details</h4>\n            <h4 class=\"text-left\" style=\"float: right;\">\n                <!-- <mat-form-field appearance=\"legacy\">\n                    <mat-label style=\"color: white;font-weight: 600;font-size: 17px;\">Choose Date Range</mat-label>\n                    <mat-date-range-input [rangePicker]=\"picker\" [formGroup]=\"dateRange\">\n                      <input style=\"width: 70px;\" matStartDate formControlName=\"start\" placeholder=\"Start Date\" #dateRangeStart>\n                      <input matEndDate formControlName=\"end\" placeholder=\"End Date\"  #dateRangeEnd\n                      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\n                      >\n                    </mat-date-range-input>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-date-range-picker #picker></mat-date-range-picker>\n                  </mat-form-field> -->\n                <!-- <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"EXCEL\"  style=\"margin-right: 0.5em; margin-bottom: 10px;\">Export</button> -->\n               </h4>\n        </div>\n        <div class=\"panel-body table-responsive pb-0\">\n            <table class=\"table no-margin text-center\">\n                <thead>\n                    <tr>\n                              <th>S.No</th>\n                              <th>Date & Time</th>\n                              <th>Order Id</th>\n                              <th>User Id</th>\n                              <th>Product Details</th>\n                              <th>Note</th>\n                              <th>Quantity</th>\n                              <th>Price</th>\n                              <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                 <ng-container  *ngFor=\"let order of corderslist; let i = index\">\n                    <tr *ngIf=\"corderslist.length !== 0\">\n                        <td>\n                            {{i+1}}\n                        </td>\n                        <td>\n\n                            {{order.order_detail.order_mst.order_date}}\n                        </td>\n                        <td>\n                            {{order.order_detail.order_id}}\n                        </td>\n                        <td>\n                            {{order.order_detail.order_mst.customer_info.profile_id}} \n                            <!-- {{order.order_detail.order_mst.customer_info.profile_first_name}} -->\n                        </td>\n                        <td>\n                            <ng-container  *ngFor=\"let item of order.product_details\">\n                                <p>{{item.product.prod_id}} & {{item.product.prod_name}} x {{item.prod_qty}}</p>\n                            </ng-container>\n                            <!-- {{order.order_detail.order_mst.order_no}} -->\n                        </td>\n                        <td>\n                        </td>\n                        <td>\n                            {{order.order_qty}}\n                            <!-- {{order.product_details.length}} -->\n                        </td>\n                        <td>\n                            {{order.order_value}}\n                        </td>\n                        <td>\n                            Credit\n                            <!-- <p *ngIf=\"order.order_detail.order_dtl_status == 'B'\">Booked</p>\n                            <p *ngIf=\"order.order_detail.order_dtl_status == 'A'\">Accepted</p>\n                            <p *ngIf=\"order.order_detail.order_dtl_status == 'C'\">Cancelled</p>\n                            <p *ngIf=\"order.order_detail.order_dtl_status == 'P'\">Pickedup</p>\n                            <p *ngIf=\"order.order_detail.order_dtl_status == 'D'\">Delivered</p> -->\n                            <!-- {{order.order_detail.order_dtl_status}} -->\n                        </td>\n\n                     </tr>\t              \n                    </ng-container>\n                    <tr *ngIf=\"corderslist.length == 0\">\n                        <td colspan=\"10\">No Record Found</td>\n                     </tr>\n                                           \n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n  <div class=\"pt-3\">\n      <h4 class=\"text-left text-red\">Debit Details</h4>\n\n      <div class=\"panel panel-yellow pt-0\">\n          <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-hover no-margin\">\n                      <thead>\n                          <tr>\n                              <th>S.No</th>\n                              <th>Date & Time</th>\n                              <th>Order Id</th>\n                              <th>Product Id</th>\n                              <th>User Id</th>\n                              <th>Product Details</th>\n                              <th>Note</th>\n                              <th>Quantity</th>\n                              <th>Price</th>\n                              <th>Status</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <!-- <tr>\n                              <td>1</td>\n                              <td>12 jun 2020</td>\n                              <td>545451</td>\n                              <td>545451</td>\n                              <td>545451</td>\n                              <td>sample</td>\n                              <td>dummy text</td>\n                              <td>15</td>\n                              <td>1542.00</td>\n                              <td>Paid</td>\n                          </tr> -->\n\n                          <tr>\n                            <td colspan=\"10\">No Record Found</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "mNZD":
    /*!************************************************************!*\
      !*** ./src/app/merchant/product-edit/product-edit.page.ts ***!
      \************************************************************/

    /*! exports provided: ProductEditPage */

    /***/
    function mNZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductEditPage", function () {
        return ProductEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-edit.page.html */
      "hZv+");
      /* harmony import */


      var _product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-edit.page.scss */
      "DB5E");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ProductEditPage = /*#__PURE__*/function () {
        function ProductEditPage(router, route, formBuilder, service, categoyservice, storage, changeDetection) {
          _classCallCheck(this, ProductEditPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.categoyservice = categoyservice;
          this.storage = storage;
          this.changeDetection = changeDetection;
          this.submitted = false;
          this.start_time = "01:00 AM";
          this.end_time = "12:00 PM";
        }

        _createClass(ProductEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            this.prod_data = JSON.parse(localStorage.getItem('prod_data'));
            console.log(this.prod_data);
            var testdata = this.prod_data.prod_avail_time.split("to");
            this.start_time = testdata[0].substring(0, testdata[0].length - 1);
            this.end_time = testdata[1].substring(1);
            console.log(this.start_time, this.end_time); // this.route.params.subscribe(params => {
            //   this._prodId = params.prodid;
            // })

            this.categoyservice.list({}).subscribe(function (res) {
              _this46.categories = res.rows;
            }); // if (this._prodId) {
            //   this.service.view(this._prodId).subscribe(res => {
            //     this.product = res;
            //     console.log(this.product);
            //     this.changeDetection.detectChanges();
            //   })
            // }

            this.initForm();
            this.changeDetection.detectChanges();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.productForm = this.formBuilder.group({
              cat_id: [this.product ? this.product.cat_id : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_name: [this.product ? this.product.prod_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_desc: [this.product ? this.product.prod_desc : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_price: [this.product ? this.product.prod_price : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_s: [this.product ? this.product.prod_avail_time : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_e: [this.product ? this.product.prod_avail_time : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.productForm.controls;
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.prodImage = event.target.files[0];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this47 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.productForm.invalid) {
              return;
            }

            var controls = this.productForm.controls;
            var a = Math.round(10 / 100 * +controls.prod_price.value);
            console.log(a);
            var _product = {
              prod_name: controls.prod_name.value,
              prod_desc: controls.prod_desc.value,
              prod_price: +controls.prod_price.value + a,
              prod_avail_time: "" + controls.prod_avail_time_s.value + " to " + "" + controls.prod_avail_time_e.value,
              cat_id: controls.cat_id.value,
              profile_id: this.storage.user.profile_id,
              prod_id: this.prod_data.prod_id,
              mercant_price: controls.prod_price.value,
              commission_amount: a
            };
            console.log(_product);
            this.service.update(_product).subscribe(function (res) {
              console.log(res);

              _this47.router.navigateByUrl('merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "saveImg",
          value: function saveImg() {
            var _this48 = this;

            console.log(this.prod_data.prod_id, this.prodImage);
            this.service.uploadimage(this.prod_data.prod_id, this.prodImage).subscribe(function (res) {
              console.log(res);

              _this48.router.navigateByUrl('merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }]);

        return ProductEditPage;
      }();

      ProductEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProductEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-edit',
        template: _raw_loader_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        styles: [_product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductEditPage);
      /***/
    },

    /***/
    "njQj":
    /*!************************************************************!*\
      !*** ./src/app/merchant/post-product/post-product.page.ts ***!
      \************************************************************/

    /*! exports provided: PostProductPage */

    /***/
    function njQj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostProductPage", function () {
        return PostProductPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-product.page.html */
      "EpXY");
      /* harmony import */


      var _post_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-product.page.scss */
      "vzvt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PostProductPage = /*#__PURE__*/function () {
        function PostProductPage() {
          _classCallCheck(this, PostProductPage);
        }

        _createClass(PostProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostProductPage;
      }();

      PostProductPage.ctorParameters = function () {
        return [];
      };

      PostProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-product',
        template: _raw_loader_post_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostProductPage);
      /***/
    },

    /***/
    "pC1H":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/rider-picked/rider-picked.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function pC1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWRlci1waWNrZWQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "pJK6":
    /*!************************************************************!*\
      !*** ./src/app/merchant/product-list/product-list.page.ts ***!
      \************************************************************/

    /*! exports provided: ProductListPage */

    /***/
    function pJK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
        return ProductListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "9qnk");
      /* harmony import */


      var _product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-list.page.scss */
      "jj44");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ProductListPage = /*#__PURE__*/function () {
        function ProductListPage(router, route, formBuilder, service, categoyservice, storage, changeDetection) {
          _classCallCheck(this, ProductListPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.categoyservice = categoyservice;
          this.storage = storage;
          this.changeDetection = changeDetection;
          this.submitted = false;
        }

        _createClass(ProductListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this49 = this;

            this.service.list({
              profile_id: this.storage.user.profile_id
            }).subscribe(function (res) {
              _this49.Product_list = res.rows;
              console.log(_this49.Product_list);
            });
          }
        }, {
          key: "edit",
          value: function edit(product_details) {
            console.log(product_details);
            localStorage.setItem('prod_data', JSON.stringify(product_details));
            this.router.navigate(['/merchant/product-edit', product_details.prod_id]);
          } // statusupdate(data,id){
          //   console.log(data);
          //   let cat_data = {
          //     cat_id : cat_id,
          //     cat_name : cat_name
          //   }
          //   localStorage.setItem('cat_data',JSON.stringify(cat_data));
          //   this.router.navigateByUrl('/merchant/update_category');
          // }

        }, {
          key: "statusupdate",
          value: function statusupdate(data, id) {
            var _this50 = this;

            console.log(data);

            if (data == 'A') {
              var a = {
                prod_status: data,
                prod_id: id
              };
              this.service.update_status(a).subscribe(function (res) {
                console.log("Updated Successfully");

                _this50.ngOnInit();
              }, function (err) {});
            }

            if (data == 'B') {
              var _a14 = {
                prod_status: data,
                prod_id: id
              };
              this.service.update_status(_a14).subscribe(function (res) {
                console.log("Update Successfully");

                _this50.ngOnInit();
              }, function (err) {});
            }
          }
        }, {
          key: "cat_delete",
          value: function cat_delete(_id) {
            var _this51 = this;

            this.service["delete"](_id).subscribe(function (res) {
              console.log("Update Successfully");

              _this51.ngOnInit();
            }, function (err) {});
          }
        }]);

        return ProductListPage;
      }();

      ProductListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductListPage);
      /***/
    },

    /***/
    "q7gt":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/login/login.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function q7gt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n                <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> |\n                <a class=\"pl-3\" href=\"/home\">Join now</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-5\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"hr_right home_form_list cus_pt_1\">\n                        <h4 class=\"text-white shadow_none pb-2\">\n                            Login - (M)\n                        </h4>\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Username</label>\n                            <div class=\"loading_input\">\n                                <input type=\"email\" formControlName=\"email\" class=\"form-control input_2\"\n                                    (keyup)=\"searchInterest()\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                                    placeholder=\"Email\" />\n                                <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"email_loader\"></div>\n                            </div>\n\n                            <div class=\"warning\" *ngIf=\"email_error\">\n                                No account found\n                            </div>\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"warning\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                <div *ngIf=\"f.email.errors.pattern\">Email must be a valid email address</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Password</label>\n                            <div class=\"loading_input\">\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control input_2\"\n                                    (keyup)=\"searchInterest1()\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                                <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"pass_loader\"></div>\n                            </div>\n                            <div class=\"warning\" *ngIf=\"password_error\">\n                                {{password_error_msg}}\n                            </div>\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"warning\">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            </div>\n                        </div>\n                        <div>\n                            <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                        </div>\n                        <div class=\"pt-3 text-right\">\n                            <a class=\"text-white\" href=\"account/forgot-password\">Forget Password</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\" />\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>\n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "qop5":
    /*!********************************************************!*\
      !*** ./src/app/merchant/delivered/delivered.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function qop5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyZWQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "rqHF":
    /*!****************************************************************************!*\
      !*** ./src/app/merchant/add-remove-existing/add-remove-existing.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function rqHF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVtb3ZlLWV4aXN0aW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ryxY":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/category-list/category-list.page.ts ***!
      \**************************************************************/

    /*! exports provided: CategoryListPage */

    /***/
    function ryxY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListPage", function () {
        return CategoryListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-list.page.html */
      "0i4j");
      /* harmony import */


      var _category_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-list.page.scss */
      "HcDT");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");

      var CategoryListPage = /*#__PURE__*/function () {
        function CategoryListPage(router, route, formBuilder, service) {
          _classCallCheck(this, CategoryListPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
        }

        _createClass(CategoryListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            this.service.list({}).subscribe(function (res) {
              _this52.categories_list = res.rows;
              console.log(_this52.categories_list);
            });
          }
        }, {
          key: "edit",
          value: function edit(cat_id, cat_name) {
            var cat_data = {
              cat_id: cat_id,
              cat_name: cat_name
            };
            localStorage.setItem('cat_data', JSON.stringify(cat_data));
            this.router.navigateByUrl('/merchant/update_category');
          }
        }, {
          key: "statusupdate",
          value: function statusupdate(data, id) {
            var _this53 = this;

            console.log(data);

            if (data == 'A') {
              var a = {
                cat_status: data,
                cat_id: id
              };
              this.service.update_status(a).subscribe(function (res) {
                console.log("Updated Successfully");

                _this53.ngOnInit();
              }, function (err) {});
            }

            if (data == 'B') {
              var _a15 = {
                cat_status: data,
                cat_id: id
              };
              this.service.update_status(_a15).subscribe(function (res) {
                console.log("Update Successfully");

                _this53.ngOnInit();
              }, function (err) {});
            }
          }
        }, {
          key: "cat_delete",
          value: function cat_delete(_id) {
            var _this54 = this;

            this.service["delete"](_id).subscribe(function (res) {
              console.log("Update Successfully");

              _this54.ngOnInit();
            }, function (err) {});
          }
        }]);

        return CategoryListPage;
      }();

      CategoryListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }];
      };

      CategoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-list',
        template: _raw_loader_category_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryListPage);
      /***/
    },

    /***/
    "sS7n":
    /*!********************************************************************!*\
      !*** ./src/app/merchant/report-download/report-download.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function sS7n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.9em 0 !important;\n}\n\n.mat-form-field-type-mat-date-range-input .mat-form-field-infix {\n  padding-top: 15px !important;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 15px 0px 0px 0px !important;\n  /* top: 15px; */\n}\n\n.form-control1 {\n  border-radius: 0;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border: 1px solid #556174;\n  background: #353C48;\n  height: 60px;\n  padding: 6px 10px;\n  transition: all 0.3s ease-out;\n  color: #d0d5dc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydC1kb3dubG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKOztBQUdBO0VBQ0ksNEJBQUE7QUFBSjs7QUFJQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUZSIiwiZmlsZSI6InJlcG9ydC1kb3dubG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjllbSAwICFpbXBvcnRhbnQ7XG59XG5cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LWRhdGUtcmFuZ2UtaW5wdXQgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAvKiB0b3A6IDE1cHg7ICovXG59XG5cblxuICAgIC5mb3JtLWNvbnRyb2wxIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU2MTc0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzUzQzQ4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgY29sb3I6ICNkMGQ1ZGM7XG4gICAgfVxuIl19 */";
      /***/
    },

    /***/
    "soy8":
    /*!*****************************************************************!*\
      !*** ./src/app/merchant/debitreport/debitreport.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function soy8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.9em 0 !important;\n}\n\n.mat-form-field-type-mat-date-range-input .mat-form-field-infix {\n  padding-top: 15px !important;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 15px 0px 0px 0px !important;\n  /* top: 15px; */\n}\n\n.form-control1 {\n  border-radius: 0;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border: 1px solid #556174;\n  background: #353C48;\n  height: 60px;\n  padding: 6px 10px;\n  transition: all 0.3s ease-out;\n  color: #d0d5dc;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlYml0cmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBSUE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7QUFESjs7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFGUjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURSIiwiZmlsZSI6ImRlYml0cmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC45ZW0gMCAhaW1wb3J0YW50O1xufVxuXG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1kYXRlLXJhbmdlLWlucHV0IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogdG9wOiAxNXB4OyAqL1xufVxuXG5cbiAgICAuZm9ybS1jb250cm9sMSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NjE3NDtcbiAgICAgICAgYmFja2dyb3VuZDogIzM1M0M0ODtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIGNvbG9yOiAjZDBkNWRjO1xuICAgIH1cbiAgICAud2FybmluZyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "szEd":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/category-edit/category-edit.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function szEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n    <div class=\"row gutter\">\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n                <h3>Update Category</h3>\n                <button style=\"float: right;\" (cliclk)=\"back()\" class=\"btn btn-info\">Back</button>\n            </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <div class=\"panel mb-3\">\n              <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"panel-body\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Enter Your Category</label>\n                      <input type=\"text\" class=\"form-control input_2\" maxlength=\"25\" [(ngModel)]=\"cat_data.cat_name\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\" placeholder=\"Enter Your Category\">\n                      <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.category.errors.required\">Category is required</div>\n                        </div>\n                  </div>\n                  <div class=\"pb-3\">\n                      <button type=\"submit\" class=\"btn btn-info\">Update</button>\n                  </div>\n              </div>\n              </form>\n          </div>\n      </div>\n\n    </div>\n</div>\n<!-- Top Bar Ends -->\n\n\n\n\n";
      /***/
    },

    /***/
    "t/+b":
    /*!*************************************************************!*\
      !*** ./src/app/merchant/video-list/video-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: VideoListComponent */

    /***/
    function tB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoListComponent", function () {
        return VideoListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_video_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./video-list.component.html */
      "cv01");
      /* harmony import */


      var _video_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video-list.component.scss */
      "Sk4x");
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

      var VideoListComponent = /*#__PURE__*/function () {
        function VideoListComponent(router, route, service, toastr, videoservice, profileservice, storage, _sanitizer) {
          _classCallCheck(this, VideoListComponent);

          this.router = router;
          this.route = route;
          this.service = service;
          this.toastr = toastr;
          this.videoservice = videoservice;
          this.profileservice = profileservice;
          this.storage = storage;
          this._sanitizer = _sanitizer;
          this.menu = 'VENDORS';
          this.checkstatus = false;
          this.video_add_status = false;
          this.video_comments = '';
          this.video_uploading = false;
          this.video_time = '';
          this.video_list_visible = false;
          this.video_details = '';
          this.video_id = '';
          this.video_index = 0;
          this.video_index_length = 0;
          this.video_temp = [];
          this.next_button_visible = true;
          this.prev_button_visible = false;
          this.video_desc = '';
          this.imageObject = [];
          this.imageObject1 = [];
        }

        _createClass(VideoListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this55 = this;

            this.video_uploading = false;
            this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=RgxiR0_LXUs");
            this.route.params.subscribe(function (params) {
              _this55._profileId = params.userid;
            });

            if (this._profileId) {
              this.profileservice.view(this._profileId).subscribe(function (res) {
                _this55.profile = res;

                _this55.loadUsers(_this55.profile.role_id);

                console.log(_this55.profile);
              });
            }
          } // playVideo(event) {
          //   event.toElement.play()
          // }

        }, {
          key: "loadUsers",
          value: function loadUsers(_role) {
            var _this56 = this;

            if (_role == 1) {
              this.service.list({}).subscribe(function (res) {
                _this56.users = res.rows;
              });
            } else if (_role == 2) {
              this.menu = 'MERCHANTS';
              var a = this.profile.profile_id;
              this.videoservice.list(a).subscribe(function (res) {
                _this56.users = res.rows;
                _this56.users1 = res.rows;
                console.log(_this56.users);
                _this56.imageObject = [];

                _this56.users.forEach(function (element) {
                  element.playstatus = false;
                  var temp = {
                    "image": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                    "thumbImage": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                    "title": element.video_note
                  };

                  _this56.imageObject.push(temp);

                  _this56.imageObject1.push(temp);
                });

                _this56.users1.forEach(function (element) {
                  element.playstatus = false;
                });
              });
              this.videoservice.all(a).subscribe(function (res) {
                _this56.users2 = res.rows;
                console.log(_this56.users2);

                _this56.users2.forEach(function (element) {
                  element.playstatus = false;
                });
              }); // this.service.listMerchants({}).subscribe(res => {
              //   this.users = res.rows;
              // })
            } else if (_role == 3) {
              this.menu = 'VENDORS';
              this.service.listVendors({}).subscribe(function (res) {
                // this.users = res.rows;
                // console.log(this.users);
                var a = _this56.profile.profile_id;

                _this56.videoservice.list(a).subscribe(function (res) {
                  _this56.users = res.rows;
                  _this56.users1 = res.rows;
                  console.log(_this56.users);
                  _this56.imageObject = [];

                  _this56.users.forEach(function (element) {
                    element.playstatus = false;
                    var temp = {
                      "image": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                      "thumbImage": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                      "title": element.video_note
                    };

                    _this56.imageObject.push(temp);

                    _this56.imageObject1.push(temp);
                  });

                  _this56.users1.forEach(function (element) {
                    element.playstatus = false;
                  });
                });

                _this56.videoservice.all(a).subscribe(function (res) {
                  _this56.users2 = res.rows;
                  console.log(_this56.users2);

                  _this56.users2.forEach(function (element) {
                    element.playstatus = false;
                  });
                });
              });
              this.service.listSubVendors({}).subscribe(function (res) {
                _this56.sub_vendors = res.rows;
                console.log(_this56.sub_vendors);
              });
            } else if (_role == 4) {
              this.menu = 'RIDERS';
              this.service.list({}).subscribe(function (res) {
                _this56.users = res.rows;
              });
            } else if (_role == 5) {
              this.menu = 'CUSTOMERS';
              this.service.list({}).subscribe(function (res) {
                _this56.users = res.rows;
              });
            }

            console.log(this.users);
            console.log(this.sub_vendors);
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.profileImage = event.target.files[0];
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            var _this57 = this;

            if (this.profileImage) {
              this.video_uploading = true;
              var c = {
                user_id: this._profileId,
                type: "video",
                note: "default"
              };
              this.videoservice.create(this.profileImage, c).subscribe(function (res) {
                console.log(res);

                _this57.toastr.successToastr('Added Successfully'); // alert("Added Successfully");


                _this57.ngOnInit();

                _this57.video_uploading = false; // this.notify.showSuccess("Logged in successfully", "LOGIN");
              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              this.toastr.errorToastr('Select Image'); // alert('Select Image');
            }
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this58 = this;

            this.videoservice["delete"](data).subscribe(function (res) {
              console.log(res);

              _this58.toastr.successToastr('Deleted Successfully'); // alert("Deleted Successfully");


              _this58.ngOnInit(); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
          }
        }, {
          key: "Proceed",
          value: function Proceed() {
            if (this.checkstatus == false) {
              this.toastr.warningToastr('Please select T & C'); // alert("Please select T & C");
            } else if (this.video_comments == "") {
              this.toastr.warningToastr('Comments should not be empty'); // alert("Should not be empty");
            } else {
              this.video_add_status = true;
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.video_add_status = false;
          }
        }, {
          key: "video_detailss",
          value: function video_detailss(item) {
            console.log(item);
          }
        }, {
          key: "add_video",
          value: function add_video() {
            this.router.navigateByUrl('/admin/live_video/' + this._profileId);
          }
        }, {
          key: "playVideo",
          value: function playVideo(data, index) {
            console.log(data);
            var myVideo = document.getElementById(data);
            myVideo.play();
            console.log(index); // this.users[index].playstatus = true;

            /**
             * You are accessing a dom element directly here,
             * so you need to call "nativeElement" first.
             */
            // this.myVideo.nativeElement.play();
          }
        }, {
          key: "pauseVideo",
          value: function pauseVideo(data, index) {
            var myVideo = document.getElementById(data);
            myVideo.pause();
            console.log(index);
            this.users[index].playstatus = false;
          }
        }, {
          key: "playvideo",
          value: function playvideo(data, index) {
            this.video_details = '';
            console.log(data, index);

            if (data == 'myvideo') {
              this.video_index_length = this.users.length;
              this.video_index = index;
              this.video_temp = this.users;
              this.video_details = this.users[index].video_link;
              this.video_desc = this.users[index].video_note;
              this.video_time = this.users[index].createdAt;
            } else if (data == 'favvideo') {
              this.video_index_length = this.users1.length;
              this.video_index = index;
              this.video_temp = this.users1;
              this.video_details = this.users1[index].video_link;
              this.video_desc = this.users1[index].video_note;
              this.video_time = this.users1[index].createdAt;
            } else if (data == 'allvide') {
              this.video_index_length = this.users2.length;
              this.video_index = index;
              this.video_temp = this.users2;
              this.video_details = this.users2[index].video_link;
              this.video_desc = this.users2[index].video_note;
              this.video_time = this.users2[index].createdAt;
            }

            this.video_list_visible = true;
            console.log(this.video_index);
            console.log(this.video_index_length);

            if (+this.video_index == 0) {
              this.next_button_visible = true;
              this.prev_button_visible = false;
            } else {
              this.next_button_visible = true;
              this.prev_button_visible = true;
            }
          }
        }, {
          key: "stopvideo",
          value: function stopvideo() {
            this.video_details = '';
            this.video_list_visible = false;
          }
        }, {
          key: "next_video",
          value: function next_video() {
            console.log(this.video_temp);
            this.video_index = this.video_index + 1;
            this.video_details = this.video_temp[this.video_index].video_link;
            this.video_desc = this.video_temp[this.video_index].video_note;
            this.video_time = this.video_temp[this.video_index].createdAt;
            console.log(this.video_index);
            console.log(this.video_index_length); // this.playVideo(this.video_index,this.video_index);

            if (+this.video_index == +this.video_index_length - 1) {
              this.next_button_visible = false;
              this.prev_button_visible = true;
            } else {
              this.next_button_visible = true;
              this.prev_button_visible = true;
            }

            console.log(this.video_details);
            this.myVideo.nativeElement.src = this.video_details;
            this.myVideo.nativeElement.load();
          }
        }, {
          key: "previous_video",
          value: function previous_video() {
            console.log(this.video_temp);
            this.video_index = this.video_index - 1;
            this.video_details = this.video_temp[this.video_index].video_link;
            this.video_desc = this.video_temp[this.video_index].video_note;
            this.video_time = this.video_temp[this.video_index].createdAt;
            console.log(this.video_index);

            if (+this.video_index == +this.video_index_length - 1) {
              this.next_button_visible = false;
              this.prev_button_visible = true;
            } else if (+this.video_index == 0) {
              this.next_button_visible = true;
              this.prev_button_visible = false;
            } else {
              this.next_button_visible = true;
              this.prev_button_visible = true;
            }

            this.myVideo.nativeElement.src = this.video_details;
            this.myVideo.nativeElement.load();
          }
        }, {
          key: "bind_video_data",
          value: function bind_video_data() {}
        }]);

        return VideoListComponent;
      }();

      VideoListComponent.ctorParameters = function () {
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
        }];
      };

      VideoListComponent.propDecorators = {
        myVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['myVideo']
        }]
      };
      VideoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video-list',
        template: _raw_loader_video_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VideoListComponent);
      /***/
    },

    /***/
    "taS9":
    /*!*****************************************************************!*\
      !*** ./src/app/merchant/creditreport/creditreport.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CreditreportComponent */

    /***/
    function taS9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreditreportComponent", function () {
        return CreditreportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_creditreport_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./creditreport.component.html */
      "k5GT");
      /* harmony import */


      var _creditreport_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./creditreport.component.scss */
      "aHtf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/services/order.service */
      "Qp4p");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/services/video.service */
      "FsO2");
      /* harmony import */


      var _core_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_core/excel.service */
      "5Roy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CreditreportComponent = /*#__PURE__*/function () {
        function CreditreportComponent(storage, service, router, // private auth: AuthService,
        videoservice, orderservice, excelService, datePipe) {
          _classCallCheck(this, CreditreportComponent);

          this.storage = storage;
          this.service = service;
          this.router = router;
          this.videoservice = videoservice;
          this.orderservice = orderservice;
          this.excelService = excelService;
          this.datePipe = datePipe;
          this.loader = true;
          this.corderslist = [];
          this.history_list = [];
          this.start_date = '';
          this.end_date = '';
          this.final_output = [];
          this.box_select = true;
          this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
          });
          this.format = '';
          this.video_uploading = false;
          this.checkstatus = false;
          this.type_error = '';
          this.start_date_error = '';
          this.end_date_error = '';
          this.agreement_error = '';
        }

        _createClass(CreditreportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this59 = this;

            this.history_list = [];
            this.corderslist = [];
            this.service.view(this.storage.user.profile_id).subscribe(function (res) {
              _this59.profile = res;
              console.log(res);

              if (res.profile_location == null && res.profile_biz_name == null) {
                var g = {
                  profile_id: res.profile_id,
                  user_id: res.user.user_id
                };
                localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_8__["authConfig"].REGISTERED_PROFILE, JSON.stringify(g));
                var registerData = {
                  contactno: res.profile_contact
                };
                console.log(registerData);
                _this59.storage.merchant_detail = registerData;

                _this59.router.navigateByUrl('/account/register');

                _this59.loader = false;
              }

              _this59.loader = false; // this.base_lat = this.profile.location_lat;
              // this.base_lng = this.profile.location_lng;
              // this.location_lat = this.profile.location_lat;
              // this.location_lng = this.profile.location_lng;
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            }); // this.filter_status('B','A');
            // this.fetch_video();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this60 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this60.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this60.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this60.corderslist;
                  var check_status = 0;
                  var _tem23 = temp_data[a];

                  for (var _c23 = 0; _c23 < datas.length; _c23++) {
                    if (datas[_c23].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c23].order_value = datas[_c23].order_value + temp_data[a].mercant_price_total, datas[_c23].order_qty = datas[_c23].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c23 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem24 = temp_data[a];
                        var _c24 = {
                          order_detail: _tem24,
                          order_value: _tem24.mercant_price_total,
                          order_qty: _tem24.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c24.product_details.push(_tem24);

                        _this60.corderslist.push(_c24);
                      } else {
                        _this60.corderslist[_c23].product_details.push(_tem23);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this60.corderslist);
                }
              }

              _this60.remove_index();
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "remove_index",
          value: function remove_index() {
            for (var a = 0; a < this.corderslist.length; a++) {
              if (a !== 0) {
                this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
                this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
                this.corderslist[a].product_details.splice(0, 1);
              }
            }
          }
        }, {
          key: "filter_status",
          value: function filter_status(status, secstatus) {
            console.log(status);
            this.corderslist = [];
            this.history_list = [];
            this.corderslist = this.final_output;
            var temp_data = this.corderslist;
            this.corderslist = [];

            for (var a = 0; a < temp_data.length; a++) {
              if (temp_data[a].order_detail.order_dtl_status == status) {
                this.corderslist.push(temp_data[a]);
              } // if(temp_data[a].order_detail.order_dtl_status == secstatus){
              //   this.history_list.push(temp_data[a]);
              // }

            }
          }
        }, {
          key: "fetch_date",
          value: function fetch_date() {
            this.agreement_error = '';
            this.type_error = '';
            this.start_date_error = '';
            this.end_date_error = '';
            var date_status = true;
            console.log(this.start_date);
            var test_start = new Date(this.start_date);
            var test_end = new Date(this.end_date);

            if (test_start < test_end) {
              date_status = true;
            } else {
              date_status = false;
            }

            console.log(date_status);

            if (this.checkstatus == false) {
              this.agreement_error = "Please select the Terms & Conditions";
            } else if (this.format == "") {
              this.type_error = 'Please select the format type';
            } else if (this.start_date == '') {
              this.start_date_error = 'Please select start date';
            } else if (this.end_date == '') {
              this.end_date_error = 'Please select end date';
            } else if (date_status == false) {
              this.end_date_error = 'End date should not be leaser then Start date';
            } else {
              this.loadData();
              console.log(this.end_date, this.start_date);
              var start_date = this.datePipe.transform(this.start_date, 'MM/dd/yyyy');
              var end_date = this.datePipe.transform(this.end_date, 'MM/dd/yyyy');
              console.log(start_date, end_date);
              this.Fetchdata(start_date, end_date);
            } //  this.exportAsXLSX(start_date,end_date); 

          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              var d = "";

              for (var c = 0; c < this.corderslist[a].product_details.length; c++) {
                d = d + "" + this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty + ", ";
              }

              var e = {
                Order_ID: this.corderslist[a].order_detail.order_id,
                Restarant_Name_and_ID: this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name + " && " + this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
                User_ID: this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
                Order_Details: d,
                Order_Price: this.corderslist[a].order_value,
                Item_Count: this.corderslist[a].order_qty,
                Status: this.corderslist[a].order_detail.order_dtl_status,
                Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
                Note_If_Any: ''
              };
              temp.push(e);

              if (a == this.corderslist.length - 1) {
                console.log(temp);
                this.excelService.exportAsExcelFile(temp, 'Report');
              }
            }
          }
        }, {
          key: "dateRangeChange",
          value: function dateRangeChange(dateRangeStart, dateRangeEnd) {
            this.Fetchdata(dateRangeStart.value, dateRangeEnd.value);
          }
        }, {
          key: "Fetchdata",
          value: function Fetchdata(start_Date, end_Date) {
            var _this61 = this;

            var filter = {
              merchant_id: Number(this.storage.user.profile_id)
            };
            this.orderservice.list_merchant(filter).subscribe(function (res) {
              _this61.corderslist = [];
              var temp_data = res.rows;
              console.log(temp_data);

              for (var a = 0; a < temp_data.length; a++) {
                if (a == 0) {
                  var tem = temp_data[0];
                  var c = {
                    order_detail: tem,
                    order_value: tem.mercant_price_total,
                    order_qty: tem.prod_qty,
                    product_details: [],
                    view_status: false
                  };
                  c.product_details.push(tem);

                  _this61.corderslist.push(c);
                } else {
                  var datas = [];
                  datas = _this61.corderslist;
                  var check_status = 0;
                  var _tem25 = temp_data[a];

                  for (var _c25 = 0; _c25 < datas.length; _c25++) {
                    if (datas[_c25].order_detail.order_id == temp_data[a].order_id) {
                      datas[_c25].order_value = datas[_c25].order_value + temp_data[a].mercant_price_total, datas[_c25].order_qty = datas[_c25].order_qty + temp_data[a].prod_qty;
                      check_status = 1;
                    }

                    if (_c25 == datas.length - 1) {
                      if (check_status == 0) {
                        var _tem26 = temp_data[a];
                        var _c26 = {
                          order_detail: _tem26,
                          order_value: _tem26.mercant_price_total,
                          order_qty: _tem26.prod_qty,
                          product_details: [],
                          view_status: false
                        };

                        _c26.product_details.push(_tem26);

                        _this61.corderslist.push(_c26);
                      } else {
                        _this61.corderslist[_c25].product_details.push(_tem25);
                      }
                    }
                  }
                }

                if (a == temp_data.length - 1) {
                  console.log(_this61.corderslist);
                }
              }

              for (var x = 0; x < _this61.corderslist.length; x++) {
                if (x !== 0) {
                  _this61.corderslist[x].order_value = _this61.corderslist[x].order_value - _this61.corderslist[x].order_detail.mercant_price_total;
                  _this61.corderslist[x].order_qty = _this61.corderslist[x].order_qty - _this61.corderslist[x].order_detail.prod_qty;

                  _this61.corderslist[x].product_details.splice(0, 1);
                }

                if (x == _this61.corderslist.length - 1) {
                  _this61.calculate_function(start_Date, end_Date);
                }
              }
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "calculate_function",
          value: function calculate_function(start_date, end_date) {
            var from = new Date(start_date);
            var to = new Date(end_date);
            var temp = [];

            for (var a = 0; a < this.corderslist.length; a++) {
              // console.log(this.corderslist[a].order_detail.order_mst.order_date);
              var check = new Date(this.corderslist[a].order_detail.order_mst.order_date);

              if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
                temp.push(this.corderslist[a]);
              } else {}

              if (this.corderslist.length - 1 == a) {
                this.corderslist = [];
                this.corderslist = temp;
                this.exportAsXLSX();
              }
            }
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
          }
        }, {
          key: "change_report",
          value: function change_report(data) {
            console.log(data);

            if (data == 'Credit') {
              this.box_select = true;
              this.ngOnInit();
            } else if (data == 'Debit') {
              this.box_select = false;
              this.corderslist = [];
            }
          }
        }]);

        return CreditreportComponent;
      }();

      CreditreportComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: src_app_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _core_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      CreditreportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-creditreport',
        template: _raw_loader_creditreport_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: [_creditreport_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CreditreportComponent);
      /***/
    },

    /***/
    "uHJD":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/dashboard/dashboard.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- Top Bar Starts -->\n\n<head>\n   \n</head>\n\n<div class=\"top-bar clearfix\">\n  <div class=\"row gutter\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <div class=\"page-title\">\n              <h3>Dahsboard</h3>\n          </div>\n      </div>\n      <!-- <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <ul class=\"right-stats\" id=\"mini-nav-right\">\n              <li>\n                  <a href=\"#\" class=\"btn btn-info\"><i class=\"icon-download6\"></i> Export</a>\n              </li>\n          </ul>\n      </div> -->\n  </div>\n</div>\n<!-- Top Bar Ends -->\n<!-- Row starts -->\n<div *ngIf=\"profile\">\n<app-loader *ngIf=\"loader\"></app-loader>\n<div class=\"row gutter\">\n  <div class=\"col-lg-5 col-md-5 col-sm-9 col-xs-12\">\n      <div class=\"panel height2 random-bg-five\">\n          <div class=\"panel-body\">\n             \n              <div class=\"user-profile clearfix\">\n                  <div class=\"user-img\">\n                      <img *ngIf=\"!profile.profile_img\" src=\"../../../assets/images/thumbs/user1.png\" alt=\"User Info\">\n                      <img *ngIf=\"profile.profile_img\" src=\"{{profile.profile_img}}\" alt=\"User Info\">\n                  </div>\n                  <h3>{{profile.profile_first_name}} {{profile.profile_last_name}}</h3>\n                  <h4>{{profile.profile_contact}}</h4>\n                  <h4>{{profile.profile_email}}</h4>\n                  <h4>Date of Joining - {{profile.createdAt | date}}</h4>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n    <!-- <div class=\"\" style=\"background-color: #c3807cb8;\">\n    <div class=\"container\" style=\"z-index: -1;margin-left: -4%;width: 108%;\">\n        <agm-map [latitude]=\"base_lat\" [longitude]=\"base_lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\"\n        [zoomControl]=\"false\">\n        <agm-marker [latitude]=\"location_lat\" [longitude]=\"location_lng\" [markerDraggable]=\"true\">\n          <agm-info-window>\n          </agm-info-window>\n        </agm-marker>\n        </agm-map>\n      </div>\n      <div class=\"bottom-left\" style=\"width: 90%;\"><h5 class=\"location\" style=\"color: white;font-weight: 700;\">{{profile.profile_location}}</h5></div>\n      <h4 class=\"top-left\"><i style=\"font-size: 22px;\" class=\"icon-location icon-2x\"></i>Location</h4>\n      <div class=\"top-right\"><a class=\"\" href=\"/common/user-profile\"> <i class=\"fa fa-pencil\" style=\"font-size: 20px;\"></i></a></div>\n    </div> -->\n\n\n\n      <div class=\"panel p-2 height2 random-bg-six\">\n          <div class=\"panel-body no-padding text_black\">\n              <div class=\"current-location\">\n                  <h4 class=\"text-white no-margin\"><i class=\"icon-location icon-2x\"></i> Location</h4>\n                 \n                  <!-- <div id=\"mapDenmark\" class=\"chart-height1\" #worldMapElement></div> -->\n                  <div class=\"text-center\">\n                      <img src=\"assets/images/vmaps/vector-map-{{profile.country | lowercase}}.png\" alt=\"\" height=\"200px\">\n                  </div>\n                  <!-- <h5 class=\"location text_black position-relative pl-2 pb-2\">{{profile.city}}, {{profile.state}}, {{profile.country}}</h5> -->\n                <h5 class=\"location text_black position-relative pl-2 pb-2\">{{profile.profile_address}}</h5>\n\n                  \n                </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 text_black\">\n      <!-- Row inside row starts -->\n      <div class=\"row gutter\">\n          <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-6\">\n            <a  href=\"admin/live_video/{{profile.profile_id}}\">\n              <div class=\"panel height1 random-bg-two\">\n                  <div class=\"panel-body text-center\">\n                 \n                      <div class=\"user-stats\">\n                          <h1>{{video_count}}</h1>\n                          <h5>Total Live Videos</h5>\n                      </div>\n                 \n                  </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-6\">\n              <div class=\"panel height1 random-bg-four\">\n                  <div class=\"panel-body text-center\">\n                      <div class=\"user-stats\">\n                          <h1>0</h1>\n                          <h5>Total Followers</h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-12\">\n              \n                  <div class=\"panel height1\">\n                      <div class=\"row gutter h-100 align-items-end\">\n                          <div class=\"col-md-4 col-xs-12\">\n                              <a href=\"{{profile.profile_facebook}}\" class=\"socail-stats fb-bg\">\n                                  <i class=\"icon-facebook-with-circle icon-2x\"></i>\n                                  <h4>0</h4>\n                              </a>\n                          </div>\n                          <div class=\"col-md-4  col-sm-3 col-xs-12\">\n                              <a href=\"{{profile.profile_instagram}}\" class=\"socail-stats tw-bg\">\n                                  <i class=\"icon-instagram-with-circle icon-2x\"></i>\n                                  <h4>0</h4>\n                              </a>\n                          </div>\n                          <div class=\"col-md-4  col-sm-3 col-xs-12\">\n                              <a href=\"{{profile.profile_youtube}}\" class=\"socail-stats gplus-bg\">\n                                  <i class=\"icon-youtube-with-circle icon-2x\"></i>\n                                  <h4>0</h4>\n                              </a>\n                          </div>\n                         \n                      </div>\n                  </div>\n              \n          </div>\n          \n      </div>\n      <!-- Row inside row ends -->\n  </div>\n</div>\n<!-- Row ends -->\n<!-- Row starts -->\t\t\t\t\n<div class=\"row gutter\">\n  <div class=\"col-lg-7 col-md-8 col-xs-12\">\n      <!-- Row inside row starts -->\n      <div class=\"panel summary_bg h-100\">\n        <div class=\"panel-body\">\n            <h3> Summary</h3>\n             <a class=\"edit edit_fix\" (click)=\"edit_summary_action()\"> <i class=\"fa fa-pencil\"></i></a>\n             <div class=\"\" *ngIf=\"!edit_summary\">\n            <p class=\"text-justify\">{{profile.profile_summary}}</p>\n            </div>\n\n            <div class=\"\" *ngIf=\"edit_summary\">\n                <textarea class=\"form-control bg-transparent\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"summary_value\" value=\"{{profile.profile_summary}}\"></textarea>\n                <button class=\"btn btn-success\" (click)=\"edit_submit()\" >submit</button>\n            </div>\n\n\n\n\n        </div>\n    </div>\n      <!-- Row inside row ends -->    \n  </div>\n  <div class=\"col-lg-5 col-md-4 col-xs-12\">\n      <!-- Row inside row starts -->\n      <div class=\"row gutter\">\n        <div class=\"bank_card w-100 h-100 position-relative overflow_auto\">\n            <div class=\"bank_card_row position-relative text-white\">\n                <div class=\"d-flex align-items-center p-3\">\n                    <div class=\"flx_0\">\n                        <img alt=\"\" src=\"../../../assets/images/144x144.png\" style=\"width: 100px;\">\n                    </div>\n                    <div class=\"flx_1\">\n                        <div class=\"bank_name_card card_row\"><input type=\"text\" placeholder=\"{{profile.bank_name}}\" disabled class=\"card_input w-100 txt_bold\"></div>\n                       \n                    </div>\n                </div>\n              \n                <div class=\"account_card card_row\"><input type=\"text\" placeholder=\"{{profile.bank_acc_no}}\" disabled  class=\"card_input w-100 txt_bold\"></div>\n                <div class=\"row card_row align-items-center\">\n                    <div class=\"col-5\">\n                        <div class=\"account_spec\"><input type=\"text\" placeholder=\"{{profile.bank_ifsc_no}}\" disabled class=\"card_input w-100 txt_bold\"></div>\n                    </div>\n                    <div class=\"col-7\">\n                        <div class=\"card_expiry\"><input type=\"text\" placeholder=\"{{profile.bank_branch}}\" disabled class=\"card_input w-100 text-right txt_bold\"></div>\n                    </div>\n                </div>\n                <div class=\"card_holder_name card_row\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-7\">\n                            <input type=\"text\" placeholder=\"{{profile.profile_first_name}} {{profile.profile_last_name}}\" disabled  class=\"card_input w-100 txt_bold\">\n                        </div> \n                        <!-- <div class=\"col-lg-5 pr-3 text-right\">\n                            \n                            <input placeholder=\"country\" class=\"card_input w-100 text-right txt_bold\" type=\"text\"/>\n                        </div> -->\n                    </div>\n                  \n                </div>\n            </div>\n        </div>\n      </div>\n      <!-- Row inside row ends -->\n\n\n      <!-- <div class=\"panel\">\n          <div class=\"panel-body height2\">\n              <h4><i class=\"icon-file-text2 icon-2x text-blue\"></i> Recent Reviews</h4>\n              <ul class=\"contacts\">\n                  <li class=\"client clearfix\">\n                      <img src=\"../../../assets/images/thumbs/user4.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                      <div class=\"client-details\">\n                          <p>\n                              <span class=\"name\">Jeffery</span>\n                              <span class=\"email\">mail.jeff@mail.ro</span>\n                          </p>\n                          <ul class=\"icons-nav\">\n                              <li>\n                                  <a href=\"javascript:void(0)\">\n                                      <i class=\"icon-speech-bubble text-red\"></i>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div>\n                  </li>\n                  <li class=\"client clearfix\">\n                      <img src=\"../../../assets/images/thumbs/user5.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                      <div class=\"client-details\">\n                          <p>\n                              <span class=\"name\">Lisa</span>\n                              <span class=\"email\">id.lisa@mail.io</span>\n                          </p>\n                          <ul class=\"icons-nav\">\n                              <li>\n                                  <a href=\"javascript:void(0)\">\n                                      <i class=\"icon-speech-bubble text-yellow\"></i>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div>\n                  </li>\n                  <li class=\"client clearfix\">\n                      <img src=\"../../../assets/images/thumbs/user10.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                      <div class=\"client-details\">\n                          <p>\n                              <span class=\"name\">John</span>\n                              <span class=\"email\">johnvvn@mail.ro</span>\n                          </p>\n                          <ul class=\"icons-nav\">\n                              <li>\n                                  <a href=\"javascript:void(0)\">\n                                      <i class=\"icon-speech-bubble text-green\"></i>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div>\n                  </li>\n                  <li class=\"client clearfix\">\n                      <img src=\"../../../assets/images/thumbs/user6.png\" class=\"avatar\" alt=\"Arise Admin Dashboard\">\n                      <div class=\"client-details\">\n                          <p>\n                              <span class=\"name\">Steve</span>\n                              <span class=\"email\">steeve@mail.com</span>\n                          </p>\n                          <ul class=\"icons-nav\">\n                              <li>\n                                  <a href=\"javascript:void(0)\">\n                                      <i class=\"icon-speech-bubble text-blue\"></i>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div>\n                  </li>\n              </ul>\n          </div>\n      </div> -->\n\n      <!-- <div class=\"panel\">\n          <div class=\"panel-body height2\">\n              <h4><i class=\"icon-file-text2 icon-2x text-blue\"></i> Joining Date</h4>\n              <ul class=\"experience\">\n                  <li class=\"green\">\n                      <div class=\"detail-info\">\n                          <p class=\"date text-green\">2014 - present</p>\n                          <p class=\"message\">Co-Founder, Chairman</p>\n                          <p class=\"message\">Arise Inc</p>\n                      </div>\n                  </li>\n                  <li class=\"red\">\n                      <div class=\"detail-info\">\n                          <p class=\"date text-red\">2010 - 2013</p>\n                          <p class=\"message\">Senior Developer</p>\n                          <p class=\"message\">Facebook</p>\n                      </div>\n                  </li>\n                  <li class=\"blue\">\n                      <div class=\"detail-info\">\n                          <p class=\"date text-blue\">1996 - 2004</p>\n                          <p class=\"message\">Web Designer</p>\n                          <p class=\"message\">Google Inc</p>\n                      </div>\n                  </li>\n              </ul>\n          </div>\n      </div> -->\n\n  </div>\n\n<!-- Row ends -->\n</div>\n\n\n<div class=\"row gutter\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div>\n        <h3 class=\"text-left text-red pt-3 pb-1\">Order Info</h3>\n    </div>\n</div>\n</div>\n\n\n\n<!-- /////////Order Confirmation//////// -->\n<div class=\"row gutter\"  *ngIf=\"confirmation_list.length !== 0\" >\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div>\n            <h4 class=\"text-left text-red pt-3 pb-1\">Order Confirmation</h4>\n            <div class=\"receipt_row\">\n                <div class=\"row w-100\">\n                    <ng-container *ngFor=\"let order of confirmation_list | paginate: { itemsPerPage: 3, currentPage: p1, id: 'first' },let i = index\">\n                    <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n                        <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n                        <div class=\"ro_col text-center\">\n                            <div class=\"ro_col_1\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Rejected</span>\n                                        </span> -->\n                                    </div>\n                                    <div class=\"col text-center p-0\">\n                                        <div class=\"rc2_main\">\n                                        <div class=\"ro_col1_2\">\n                                        <div class=\"rc1_1 pb-1\">\n                                            <b class=\"text_yellow d-block\"> {{order.order_detail.order_mst.merchant_info.profile_biz_name}}</b>\n                                            <span class=\"cus_white\">ID:{{order.order_detail.order_mst.merchant_info.profile_id}}</span>\n                                        </div>\n                                        <div class=\"rc1_2 pt-1 pb-1\">\n                                            ORDER ID: {{order.order_detail.order_id}}\n                                        </div>\n                                        <div class=\"row no-gutters pt-1\">\n                                            <div class=\"col text-left\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.order_qty}}</span>\n                                            </div>\n                                            <div class=\"col-auto text-right\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.order_value}}</span>\n                                            </div>\n                                        </div>\n                                          </div>\n                                    </div>\n                                    <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.order_detail.order_mst.customer_info.profile_id}} </span>\n                                    </div>\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Approved</span>\n                                        </span> -->\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"ro_col_2 pt-2\">\n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>\n                                                           s.no\n                                                        </th>\n                                                        <th>\n                                                            Order Details\n                                                        </th>\n                                                        <th>\n                                                            QTY\n                                                        </th>\n                                                        <th>\n                                                            U.PRICE\n                                                        </th>\n                                                        <th>\n                                                            PRICE\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <ng-container  *ngFor=\"let item of order.product_details\">\n                                                        <tr>\n                                                            <td>\n                                                                1.\n                                                            </td>\n                                                            <td>\n                                                                <div>\n                                                               <b>Product is:</b> {{item.product.prod_id}} \n                                                            </div>\n                                                            <p class=\"mb-0\">\n                                                                {{item.product.prod_name}}\n                                                            </p>\n                                                            </td>\n                                                            <td>\n                                                                {{item.prod_qty}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price_total}}\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                            </div>\n            \n                            <div class=\"ro_col_3 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                        Note If any\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                           some text\n                                                        </td>\n                                                      \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                \n                            </div>\n                            <div class=\"ro_col_4 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                       Date and time\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                            {{order.order_detail.createdAt | date:'medium'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                              \n                            </div>\n                            <div class=\"ro_col_5 pt-2 pl-3\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                                        <b class=\"d-block\">John </b>\n                                        <b class=\"d-block\">Approved</b>\n                                    </div>\n                                    <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                                        <a href='#'><b>Enquiry</b></a>\n                                       \n                                    </div>\n                                </div>\n            \n            \n                            </div>\n                           \n                        </div>\n\n\n                        <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                        </div>\n                        <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                        </div>\n                        <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'P'\">\n                        </div>\n                        <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'D'\">\n                        </div>\n\n\n                    </div>\n                    </ng-container>\n            \n                    <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n                        <h4 class=\"text-left txt_bold\">No Record found</h4>\n                    </div> -->\n                 \n                </div>\n                <div class=\"pt-5 pb-3 text-center\">\n                    <nav aria-label=\"Page navigation\">\n                        <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p1 = $event\" id=\"first\"></pagination-controls>\n                    </nav>\n                </div>\n           </div>\n        </div>\n    </div>\n  <!-- Row ends -->\n  </div>\n<!-- /////////Order Confirmation//////// -->\n\n\n<!-- /////////Order Preparing//////// -->\n<div class=\"row gutter\" *ngIf=\"preparing_list.length !== 0\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div>\n            <h4 class=\"text-left text-red pt-3 pb-1\">Order Preparing</h4>\n            <div class=\"receipt_row\">\n                <div class=\"row w-100\">\n                    <ng-container *ngFor=\"let order of preparing_list | paginate: { itemsPerPage: 3, currentPage: p2, id: 'second' },let i = index\">\n                    <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n                        <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n                        <div class=\"ro_col text-center\">\n                            <div class=\"ro_col_1\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Rejected</span>\n                                        </span> -->\n                                    </div>\n                                    <div class=\"col text-center p-0\">\n                                        <div class=\"rc2_main\">\n                                        <div class=\"ro_col1_2\">\n                                        <div class=\"rc1_1 pb-1\">\n                                            <b class=\"text_yellow d-block\"> {{order.order_detail.order_mst.merchant_info.profile_biz_name}}</b>\n                                            <span class=\"cus_white\">ID:{{order.order_detail.order_mst.merchant_info.profile_id}}</span>\n                                        </div>\n                                        <div class=\"rc1_2 pt-1 pb-1\">\n                                            ORDER ID: {{order.order_detail.order_id}}\n                                        </div>\n                                        <div class=\"row no-gutters pt-1\">\n                                            <div class=\"col text-left\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.order_qty}}</span>\n                                            </div>\n                                            <div class=\"col-auto text-right\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.order_value}}</span>\n                                            </div>\n                                        </div>\n                                          </div>\n                                    </div>\n                                    <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.order_detail.order_mst.customer_info.profile_id}} </span>\n                                    </div>\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Approved</span>\n                                        </span> -->\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"ro_col_2 pt-2\">\n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>\n                                                           s.no\n                                                        </th>\n                                                        <th>\n                                                            Order Details\n                                                        </th>\n                                                        <th>\n                                                            QTY\n                                                        </th>\n                                                        <th>\n                                                            U.PRICE\n                                                        </th>\n                                                        <th>\n                                                            PRICE\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <ng-container  *ngFor=\"let item of order.product_details\">\n                                                        <tr>\n                                                            <td>\n                                                                1.\n                                                            </td>\n                                                            <td>\n                                                                <div>\n                                                               <b>Product is:</b> {{item.product.prod_id}} \n                                                            </div>\n                                                            <p class=\"mb-0\">\n                                                                {{item.product.prod_name}}\n                                                            </p>\n                                                            </td>\n                                                            <td>\n                                                                {{item.prod_qty}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price_total}}\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                            </div>\n            \n                            <div class=\"ro_col_3 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                        Note If any\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                           some text\n                                                        </td>\n                                                      \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                \n                            </div>\n                            <div class=\"ro_col_4 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                       Date and time\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                            {{order.order_detail.createdAt | date:'medium'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                              \n                            </div>\n                            <div class=\"ro_col_5 pt-2 pl-3\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                                        <b class=\"d-block\">John </b>\n                                        <b class=\"d-block\">Approved</b>\n                                    </div>\n                                    <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                                        <a href='#'><b>Enquiry</b></a>\n                                       \n                                    </div>\n                                </div>\n            \n            \n                            </div>\n                           \n                        </div>\n\n\n                        <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                        </div>\n                        <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                        </div>\n                        <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'P'\">\n                        </div>\n                        <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'D'\">\n                        </div>\n\n\n\n                    </div>\n                    </ng-container>\n            \n                    <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n                        <h4 class=\"text-left txt_bold\">No Record found</h4>\n                    </div> -->\n                 \n                </div>\n                <div class=\"pt-5 pb-3 text-center\">\n                    <nav aria-label=\"Page navigation\">\n                        <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p2 = $event\" id=\"second\"></pagination-controls>\n                    </nav>\n                </div>\n           </div>\n        </div>\n    </div>\n  <!-- Row ends -->\n  </div>\n<!-- /////////Order Preparing//////// -->\n\n\n<!-- /////////Rider Picked//////// -->\n<div class=\"row gutter\"  *ngIf=\"rider_list.length !== 0\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div>\n            <h4 class=\"text-left text-red pt-3 pb-1\">Rider Picked</h4>\n            <div class=\"receipt_row\">\n                <div class=\"row w-100\">\n                    <ng-container *ngFor=\"let order of rider_list | paginate: { itemsPerPage: 3, currentPage: p3, id: 'third' },let i = index\">\n                    <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n                        <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n                        <div class=\"ro_col text-center\">\n                            <div class=\"ro_col_1\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Rejected</span>\n                                        </span> -->\n                                    </div>\n                                    <div class=\"col text-center p-0\">\n                                        <div class=\"rc2_main\">\n                                        <div class=\"ro_col1_2\">\n                                        <div class=\"rc1_1 pb-1\">\n                                            <b class=\"text_yellow d-block\"> {{order.order_detail.order_mst.merchant_info.profile_biz_name}}</b>\n                                            <span class=\"cus_white\">ID:{{order.order_detail.order_mst.merchant_info.profile_id}}</span>\n                                        </div>\n                                        <div class=\"rc1_2 pt-1 pb-1\">\n                                            ORDER ID: {{order.order_detail.order_id}}\n                                        </div>\n                                        <div class=\"row no-gutters pt-1\">\n                                            <div class=\"col text-left\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.order_qty}}</span>\n                                            </div>\n                                            <div class=\"col-auto text-right\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.order_value}}</span>\n                                            </div>\n                                        </div>\n                                          </div>\n                                    </div>\n                                    <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.order_detail.order_mst.customer_info.profile_id}} </span>\n                                    </div>\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Approved</span>\n                                        </span> -->\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"ro_col_2 pt-2\">\n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>\n                                                           s.no\n                                                        </th>\n                                                        <th>\n                                                            Order Details\n                                                        </th>\n                                                        <th>\n                                                            QTY\n                                                        </th>\n                                                        <th>\n                                                            U.PRICE\n                                                        </th>\n                                                        <th>\n                                                            PRICE\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <ng-container  *ngFor=\"let item of order.product_details\">\n                                                        <tr>\n                                                            <td>\n                                                                1.\n                                                            </td>\n                                                            <td>\n                                                                <div>\n                                                               <b>Product is:</b> {{item.product.prod_id}} \n                                                            </div>\n                                                            <p class=\"mb-0\">\n                                                                {{item.product.prod_name}}\n                                                            </p>\n                                                            </td>\n                                                            <td>\n                                                                {{item.prod_qty}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price_total}}\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                            </div>\n            \n                            <div class=\"ro_col_3 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                        Note If any\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                           some text\n                                                        </td>\n                                                      \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                \n                            </div>\n                            <div class=\"ro_col_4 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                       Date and time\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                            {{order.order_detail.createdAt | date:'medium'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                              \n                            </div>\n                            <div class=\"ro_col_5 pt-2 pl-3\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                                        <b class=\"d-block\">John </b>\n                                        <b class=\"d-block\">Approved</b>\n                                    </div>\n                                    <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                                        <a href='#'><b>Enquiry</b></a>\n                                       \n                                    </div>\n                                </div>\n            \n            \n                            </div>\n                           \n                        </div>\n\n                        <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                        </div>\n                        <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                        </div>\n                        <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'P'\">\n                        </div>\n                        <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'D'\">\n                        </div>\n\n                    </div>\n                    </ng-container>\n            \n                    <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n                        <h4 class=\"text-left txt_bold\">No Record found</h4>\n                    </div> -->\n                 \n                </div>\n                <div class=\"pt-5 pb-3 text-center\">\n                    <nav aria-label=\"Page navigation\">\n                        <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p3 = $event\" id=\"third\"></pagination-controls>\n                    </nav>\n                </div>\n           </div>\n        </div>\n    </div>\n  <!-- Row ends -->\n  </div>\n<!-- /////////Rider Picked//////// -->\n\n\n<!-- /////////Delivered//////// -->\n<div class=\"row gutter\"  *ngIf=\"deliver_list.length !== 0\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div>\n            <h4 class=\"text-left text-red pt-3 pb-1\">Delivered</h4>\n            <div class=\"receipt_row\">\n                <div class=\"row w-100\">\n                    <ng-container *ngFor=\"let order of deliver_list | paginate: { itemsPerPage: 3, currentPage: p4, id: 'fourth' },let i = index\">\n                    <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n                        <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n                        <div class=\"ro_col text-center\">\n                            <div class=\"ro_col_1\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Rejected</span>\n                                        </span> -->\n                                    </div>\n                                    <div class=\"col text-center p-0\">\n                                        <div class=\"rc2_main\">\n                                        <div class=\"ro_col1_2\">\n                                        <div class=\"rc1_1 pb-1\">\n                                            <b class=\"text_yellow d-block\"> {{order.order_detail.order_mst.merchant_info.profile_biz_name}}</b>\n                                            <span class=\"cus_white\">ID:{{order.order_detail.order_mst.merchant_info.profile_id}}</span>\n                                        </div>\n                                        <div class=\"rc1_2 pt-1 pb-1\">\n                                            ORDER ID: {{order.order_detail.order_id}}\n                                        </div>\n                                        <div class=\"row no-gutters pt-1\">\n                                            <div class=\"col text-left\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.order_qty}}</span>\n                                            </div>\n                                            <div class=\"col-auto text-right\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.order_value}}</span>\n                                            </div>\n                                        </div>\n                                          </div>\n                                    </div>\n                                    <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.order_detail.order_mst.customer_info.profile_id}} </span>\n                                    </div>\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Approved</span>\n                                        </span> -->\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"ro_col_2 pt-2\">\n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>\n                                                           s.no\n                                                        </th>\n                                                        <th>\n                                                            Order Details\n                                                        </th>\n                                                        <th>\n                                                            QTY\n                                                        </th>\n                                                        <th>\n                                                            U.PRICE\n                                                        </th>\n                                                        <th>\n                                                            PRICE\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <ng-container  *ngFor=\"let item of order.product_details\">\n                                                        <tr>\n                                                            <td>\n                                                                1.\n                                                            </td>\n                                                            <td>\n                                                                <div>\n                                                               <b>Product is:</b> {{item.product.prod_id}} \n                                                            </div>\n                                                            <p class=\"mb-0\">\n                                                                {{item.product.prod_name}}\n                                                            </p>\n                                                            </td>\n                                                            <td>\n                                                                {{item.prod_qty}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price_total}}\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                            </div>\n            \n                            <div class=\"ro_col_3 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                        Note If any\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                           some text\n                                                        </td>\n                                                      \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                \n                            </div>\n                            <div class=\"ro_col_4 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                       Date and time\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                            {{order.order_detail.createdAt | date:'medium'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                              \n                            </div>\n                            <div class=\"ro_col_5 pt-2 pl-3\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                                        <b class=\"d-block\">John </b>\n                                        <b class=\"d-block\">Approved</b>\n                                    </div>\n                                    <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                                        <a href='#'><b>Enquiry</b></a>\n                                       \n                                    </div>\n                                </div>\n            \n            \n                            </div>\n                           \n                        </div>\n\n\n                        <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                        </div>\n                        <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                        </div>\n                        <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'P'\">\n                        </div>\n                        <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'D'\">\n                        </div>\n\n\n                    </div>\n                    </ng-container>\n            \n                    <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n                        <h4 class=\"text-left txt_bold\">No Record found</h4>\n                    </div> -->\n                 \n                </div>\n                <div class=\"pt-5 pb-3 text-center\">\n                    <nav aria-label=\"Page navigation\">\n                        <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p4 = $event\" id=\"fourth\"></pagination-controls>\n                    </nav>\n                </div>\n           </div>\n        </div>\n    </div>\n  <!-- Row ends -->\n  </div>\n<!-- /////////Delivered//////// -->\n\n\n<!-- /////////Cancelled//////// -->\n<div class=\"row gutter\" *ngIf=\"cancel_list.length !== 0\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div>\n            <h4 class=\"text-left text-red pt-3 pb-1\">Cancelled</h4>\n            <div class=\"receipt_row\">\n                <div class=\"row w-100\">\n                    <ng-container *ngFor=\"let order of cancel_list | paginate: { itemsPerPage: 3, currentPage: p5, id: 'fifth' },let i = index\">\n                    <div class=\"col-lg-4 col-md-6 col-12 pb-3 recp_main text-center pr-4\">\n                        <img src=\"../../../../../assets/images/product_img_2.jpg\" alt=\"\" class=\"prod_merc_img\"/>\n                        <div class=\"ro_col text-center\">\n                            <div class=\"ro_col_1\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span (click)=\"updatestatus('Cancel',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Rejected</span>\n                                        </span> -->\n                                    </div>\n                                    <div class=\"col text-center p-0\">\n                                        <div class=\"rc2_main\">\n                                        <div class=\"ro_col1_2\">\n                                        <div class=\"rc1_1 pb-1\">\n                                            <b class=\"text_yellow d-block\"> {{order.order_detail.order_mst.merchant_info.profile_biz_name}}</b>\n                                            <span class=\"cus_white\">ID:{{order.order_detail.order_mst.merchant_info.profile_id}}</span>\n                                        </div>\n                                        <div class=\"rc1_2 pt-1 pb-1\">\n                                            ORDER ID: {{order.order_detail.order_id}}\n                                        </div>\n                                        <div class=\"row no-gutters pt-1\">\n                                            <div class=\"col text-left\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">QTY:{{order.order_qty}}</span>\n                                            </div>\n                                            <div class=\"col-auto text-right\">\n                                                <span class=\"text_yellow bg-black pt-1 pb-1 pl-2 pr-2 d-inline-block\">RM:{{order.order_value}}</span>\n                                            </div>\n                                        </div>\n                                          </div>\n                                    </div>\n                                    <span class=\"d-block text-center pt-2\"> <b>USER ID :</b>{{order.order_detail.order_mst.customer_info.profile_id}} </span>\n                                    </div>\n                                    <div class=\"col-auto text-center\">\n                                        <!-- <span class=\"pl-1 d-block\" (click)=\"updatestatus('Accept',order)\">\n                                            <img src=\"../../../../../assets/images/r_icon_4.png\" alt=\"\" class=\"r_close_icon\"/>\n                                            <span class=\"d-block\">Approved</span>\n                                        </span> -->\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"ro_col_2 pt-2\">\n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\">  <img src=\"../../../../../assets/images/r_icon_1.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>\n                                                           s.no\n                                                        </th>\n                                                        <th>\n                                                            Order Details\n                                                        </th>\n                                                        <th>\n                                                            QTY\n                                                        </th>\n                                                        <th>\n                                                            U.PRICE\n                                                        </th>\n                                                        <th>\n                                                            PRICE\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <ng-container  *ngFor=\"let item of order.product_details\">\n                                                        <tr>\n                                                            <td>\n                                                                1.\n                                                            </td>\n                                                            <td>\n                                                                <div>\n                                                               <b>Product is:</b> {{item.product.prod_id}} \n                                                            </div>\n                                                            <p class=\"mb-0\">\n                                                                {{item.product.prod_name}}\n                                                            </p>\n                                                            </td>\n                                                            <td>\n                                                                {{item.prod_qty}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price}}\n                                                            </td>\n                                                            <td>\n                                                                {{item.mercant_price_total}}\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                            </div>\n            \n                            <div class=\"ro_col_3 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_2.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                        Note If any\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                           some text\n                                                        </td>\n                                                      \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                \n                            </div>\n                            <div class=\"ro_col_4 pt-2\">\n                               \n                                    \n                                    <div class=\"text-left position-relative\">\n                                    <span class=\"order_icn_left d-flex align-items-center\"> <img src=\"../../../../../assets/images/r_icon_3.png\" alt=\"\" class=\"r_order_icon\"/></span>\n                                        <div class=\"ro_tble\">\n                                            <table class=\"w-100\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"text-center\">\n                                                       Date and time\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td class=\"text-center\">\n                                                            {{order.order_detail.createdAt | date:'medium'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                              \n                            </div>\n                            <div class=\"ro_col_5 pt-2 pl-3\">\n                                <div class=\"row align-items-center\">\n                                    <div class=\"col-lg-8 col-12 text-center text-md-left pb-3  pb-md-0\">\n                                        <b class=\"d-block\">John </b>\n                                        <b class=\"d-block\">Approved</b>\n                                    </div>\n                                    <div class=\"col-lg-4 col-12 text-center text-md-right\">\n                                        <a href='#'><b>Enquiry</b></a>\n                                       \n                                    </div>\n                                </div>\n            \n            \n                            </div>\n                           \n                        </div>\n\n                         <div class=\"recp_approved recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'A'\">\n                        </div>\n                        <div class=\"recp_cancel recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'C'\">\n                        </div>\n                        <div class=\"recp_riderpick recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'P'\">\n                        </div>\n                        <div class=\"recp_deliever recp_main_seal\" *ngIf=\"order.order_detail.order_dtl_status == 'D'\">\n                        </div>\n\n                        \n                    </div>\n                    </ng-container>\n            \n                    <!-- <div class=\"panel-heading mb-0 pb-0\" *ngIf=\"corderslist.length == 0\">\n                        <h4 class=\"text-left txt_bold\">No Record found</h4>\n                    </div> -->\n                 \n                </div>\n                <div class=\"pt-5 pb-3 text-center\">\n                    <nav aria-label=\"Page navigation\">\n                        <pagination-controls  class=\"pagination no-margin d-inline-flex\" (pageChange)=\"p5 = $event\" id=\"fifth\"></pagination-controls>\n                    </nav>\n                </div>\n           </div>\n        </div>\n    </div>\n  <!-- Row ends -->\n  </div>\n<!-- /////////Delivered//////// -->\n\n\n  </div>\n";
      /***/
    },

    /***/
    "uYOO":
    /*!************************************************!*\
      !*** ./src/app/merchant/login/login.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function uYOO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0YsU0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBRTtFQUNJLGVBQUE7QUFHTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9hZGluZ19pbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAubG9hZF9pbnB1dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9Il19 */";
      /***/
    },

    /***/
    "v3LS":
    /*!*************************************************************************!*\
      !*** ./src/app/merchant/merchant-waller/merchant-waller.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function v3LS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table td, .table th {\n  padding: 0.15rem !important;\n  vertical-align: top;\n}\n\n#chart {\n  width: \"10%\";\n  height: 50;\n}\n\n.apexcharts-canvas * {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.yellow_panel {\n  background: none !important;\n  padding: 10px !important;\n  height: 250px;\n  border: 3px solid #f8c333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lcmNoYW50LXdhbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFKRiIsImZpbGUiOiJtZXJjaGFudC13YWxsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjE1cmVtICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI2NoYXJ0IHtcbiAgICB3aWR0aDonMTAlJztcbiAgICBoZWlnaHQgOiA1MDtcbiAgfVxuICBcbiAgLy8gI2NoYXJ0IHtcbiAgLy8gICBtYXgtd2lkdGg6IDY1MHB4O1xuICAvLyB9XG5cblxuICAuYXBleGNoYXJ0cy1jYW52YXMgKiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi55ZWxsb3dfcGFuZWwge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y4YzMzMztcbn1cblxuXG5cblxuXG4iXX0= */";
      /***/
    },

    /***/
    "vJ1+":
    /*!************************************************************************************!*\
      !*** ./src/app/merchant/add-remove-existing-form/add-remove-existing-form.page.ts ***!
      \************************************************************************************/

    /*! exports provided: AddRemoveExistingFormPage */

    /***/
    function vJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRemoveExistingFormPage", function () {
        return AddRemoveExistingFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_remove_existing_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-remove-existing-form.page.html */
      "Pk5c");
      /* harmony import */


      var _add_remove_existing_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-remove-existing-form.page.scss */
      "RJmi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddRemoveExistingFormPage = /*#__PURE__*/function () {
        function AddRemoveExistingFormPage() {
          _classCallCheck(this, AddRemoveExistingFormPage);
        }

        _createClass(AddRemoveExistingFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddRemoveExistingFormPage;
      }();

      AddRemoveExistingFormPage.ctorParameters = function () {
        return [];
      };

      AddRemoveExistingFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-remove-existing-form',
        template: _raw_loader_add_remove_existing_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_remove_existing_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddRemoveExistingFormPage);
      /***/
    },

    /***/
    "vzvt":
    /*!**************************************************************!*\
      !*** ./src/app/merchant/post-product/post-product.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function vzvt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LXByb2R1Y3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "wY1S":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/add-remove-existing/add-remove-existing.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wY1S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-lg-12\">\n              <div class=\"page-title\">\n                  <h3>Add Remove Existing</h3>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- Top Bar Ends -->\n\n  <div class=\"row gutter\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let product of products\">\n          <div class=\"card-wrapper\">\n              <div class=\"card clearfix bg-dark2\">\n                  <img *ngIf=\"product.prod_img\" src=\"{{product.prod_img}}\" class=\"img-responsive rounded card-avatar mb-0\" alt=\"Product Image\">\n                  <img *ngIf=\"!product.prod_img\" src=\"../../../assets/images/thumbs/user12.png\" class=\"img-responsive rounded card-avatar mb-0\" alt=\"Product Image\">\n                  \n                  <h4 class=\"shadow_none pt-2 mb-0 pb-0\">{{product.prod_name}}</h4>\n                  <div class=\"row pt-3 d-flex align-items-center\">\n                      <div class=\"col-6 text-left d-flex align-items-center\">\n                         <h4 class=\"mb-0 pb-0 pr-1\">{{product.prod_avail_time}}</h4>\n                      </div>\n                      <div class=\"col-6 text-right\">\n                          {{product.createdAt | date}}\n                      </div>\n                  </div>\n              </div>\n              <div class=\"card-actions clearfix pt-2 pb-2 text-center\">\n                  <a href=\"merchant/products/{{product.prod_id}}\" class=\"btn btn-info btn-rounded btn-sm pl-4 pr-4\">View Details</a>                         \n              </div>\n          </div>\n      </div>\n  </div>\n\n";
      /***/
    },

    /***/
    "yVyQ":
    /*!*********************************************************************!*\
      !*** ./src/app/merchant/productcreate/productcreate.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function yVyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0Y3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "yqD8":
    /*!*************************************************************!*\
      !*** ./src/app/merchant/videoview/videoview.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function yqD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zYg9":
    /*!*******************************************************************!*\
      !*** ./src/app/merchant/productcreate/productcreate.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductcreateComponent */

    /***/
    function zYg9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductcreateComponent", function () {
        return ProductcreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_productcreate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./productcreate.component.html */
      "bCPK");
      /* harmony import */


      var _productcreate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./productcreate.component.scss */
      "yVyQ");
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


      var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/services/category.service */
      "rToO");
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/product.service */
      "edWz");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ProductcreateComponent = /*#__PURE__*/function () {
        function ProductcreateComponent(router, route, formBuilder, service, categoyservice, storage, changeDetection) {
          _classCallCheck(this, ProductcreateComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.service = service;
          this.categoyservice = categoyservice;
          this.storage = storage;
          this.changeDetection = changeDetection;
          this.submitted = false;
          this.start_time = "01:00 AM";
          this.end_time = "12:00 PM";
        }

        _createClass(ProductcreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this62 = this;

            this.route.params.subscribe(function (params) {
              _this62._prodId = params.prodid;
            });
            this.categoyservice.list({}).subscribe(function (res) {
              _this62.categories = res.rows;
            });
            console.log(this._prodId);

            if (this._prodId) {
              this.service.view(this._prodId).subscribe(function (res) {
                _this62.product = res;
                console.log(_this62.product);

                var availtime = _this62.product.prod_avail_time.split("to");

                _this62.start_time = availtime[0].trim();
                _this62.end_time = availtime[1].trim();

                _this62.initForm();
              });
            } else {
              this.product = {};
            }

            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.productForm = this.formBuilder.group({
              cat_id: [this.product ? this.product.cat_id : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_name: [this.product ? this.product.prod_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_desc: [this.product ? this.product.prod_desc : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_price: [this.product ? this.product.prod_price : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_s: [this.start_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              prod_avail_time_e: [this.end_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.productForm.controls;
          }
        }, {
          key: "selectImg",
          value: function selectImg(event) {
            this.prodImage = event.target.files[0];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this63 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.productForm.invalid) {
              return;
            }

            var controls = this.productForm.controls;
            var a = Math.round(10 / 100 * +controls.prod_price.value);
            console.log(a);
            var _product = {
              prod_name: controls.prod_name.value,
              prod_desc: controls.prod_desc.value,
              prod_price: +controls.prod_price.value + a,
              prod_avail_time: "" + controls.prod_avail_time_s.value + " to " + "" + controls.prod_avail_time_e.value,
              cat_id: controls.cat_id.value,
              profile_id: this.storage.user.profile_id,
              mercant_price: controls.prod_price.value,
              commission_amount: a
            };
            console.log(_product);

            if (this.product.prod_id) {
              _product["prod_id"] = this.product.prod_id;
              this.service.update(_product).subscribe(function (res) {
                console.log(res);
                alert("Updated successfully");

                _this63.router.navigateByUrl('merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              this.service.create(_product).subscribe(function (res) {
                console.log(res);
                alert("Created successfully");

                _this63.router.navigateByUrl('/merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            }
          }
        }, {
          key: "uploadImg",
          value: function uploadImg() {
            var _this64 = this;

            if (this.prodImage) {
              this.service.uploadimage(this.product.prod_id, this.prodImage).subscribe(function (res) {
                console.log(res);

                _this64.router.navigateByUrl('/merchant/products-list'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              alert('Select Image');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "add_cat",
          value: function add_cat() {
            this.router.navigateByUrl('/merchant/add-new-category');
          }
        }]);

        return ProductcreateComponent;
      }();

      ProductcreateComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ProductcreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-productcreate',
        template: _raw_loader_productcreate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productcreate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductcreateComponent);
      /***/
    },

    /***/
    "zmqY":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/add-new-category/add-new-category.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zmqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Top Bar Starts -->\n  <div class=\"top-bar clearfix\">\n      <div class=\"row gutter\">\n          <div class=\"col-12\">\n              <div class=\"page-title\">\n                  <h3>Add New Category</h3>\n              </div>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"panel mb-3\">\n                <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"panel-body\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-white\">Enter Your Category</label>\n                        <input type=\"text\" class=\"form-control input_2\" maxlength=\"25\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\" placeholder=\"Enter Your Category\">\n                        <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.category.errors.required\">Category is required</div>\n                          </div>\n                    </div>\n                    <div class=\"pb-3\">\n                        <button type=\"submit\" class=\"btn btn-info\">Create </button>\n                    </div>\n                </div>\n                </form>\n            </div>\n        </div>\n\n      </div>\n\n      <div class=\"add_new_category\">\n        <div class=\"pt-5\">\n            <div class=\"panel panel-red\">\n                <div class=\"panel-heading mb-0 pb-0\">\n                    <h3 class=\"text-left text-blue\">Product List</h3>\n                </div>\n                <div class=\"panel-body pb-0 table-responsive product_table td_center\">\n                    <table class=\"table no-margin\">\n                        <thead>\n                            <tr>\n                                <th>Category Name</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let category of categories\">\n                                <td>\n                                    <div class=\"text-center cart_col\">\n                                        <h5 class=\"mb-0\">{{category.cat_name}}</h5>\n                                    </div>\n                                </td>\n                                <td>                            \n                                    <button style=\"margin: 5px; background-color: #bf7a6a;\" (click)=\"cat_delete(category.cat_id)\" type=\"submit\" class=\"btn btn-info\">Delete</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>   \n        </div>\n      </div>\n      \n  </div>\n  <!-- Top Bar Ends -->\n\n\n\n\n\n";
      /***/
    },

    /***/
    "zo14":
    /*!****************************************************************!*\
      !*** ./src/app/merchant/category-edit/category-edit.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function zo14(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1lZGl0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=merchant-merchant-module-es5.js.map
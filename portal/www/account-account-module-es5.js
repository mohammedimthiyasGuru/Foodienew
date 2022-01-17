(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "/gQH":
    /*!****************************************************************!*\
      !*** ./src/app/account/registeredit/registeredit.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegistereditComponent */

    /***/
    function gQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistereditComponent", function () {
        return RegistereditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registeredit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registeredit.component.html */
      "YoYF");
      /* harmony import */


      var _registeredit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registeredit.component.scss */
      "6txN");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var _app_countrycode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../app/countrycode */
      "TejZ");

      var RegistereditComponent = /*#__PURE__*/function () {
        function RegistereditComponent(storage, router, profileservice, toastr, formBuilder, auth, apiloader, countrycode) {
          _classCallCheck(this, RegistereditComponent);

          // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
          this.storage = storage;
          this.router = router;
          this.profileservice = profileservice;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.apiloader = apiloader;
          this.countrycode = countrycode;
          this.otp_check = true;
          this.otp_load = false;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.otp_value = '';
          this.options = {
            types: [],
            componentRestrictions: {
              country: 'IN'
            }
          };
          this.button_visible = true;
          this.loader = true;
          this.lable_text = 'Average cost of food per person';
          this.postal_code_error = false;
          this.zoom = 8;
          this.base_lat = 11.1271;
          this.base_lng = 78.6569;
          this.location_lat = 11.1271;
          this.location_lng = 78.6569; // Latitude : any;

          this.Location_list = [];
          this.location_type = "Home";
          this.old_default_id = "";
          this.refer_show = false;
          this.refer_value = '';
          this.selected = "";
          this.proof_type = "";
          this.address_error = false;
          this.country = "";
          this.proof_attach = false;
          this.profile_details = {};
          this.country_code_price = [{
            country_code: "+65",
            country_code_price: ['$ 1 - $ 10', '$ 10 - $ 20', '$ 20 - $ 30', '$ 30 - $ 40', '$ 40 - $ 50']
          }, {
            country_code: "+60",
            country_code_price: ['RM 1 - RM 10', 'RM 10 - RM 20', 'RM 20 - RM 30', 'RM 30 - RM 40', 'RM 40 - RM 50']
          }, {
            country_code: "+91",
            country_code_price: ['₹ 1 - ₹ 10', '₹ 10 - ₹ 20', '₹ 20 - ₹ 30', '₹ 30 - ₹ 40', '₹ 40 - ₹ 50']
          }];
          this.cuisine_cat_text = '';
          this.category_text = '';
          this.cuisine_cat = [{
            id: 1,
            name: 'Indonesian'
          }, {
            id: 2,
            name: 'Turkish'
          }, {
            id: 3,
            name: 'Thai'
          }, {
            id: 4,
            name: 'Spanish'
          }, {
            id: 5,
            name: 'Moroccan'
          }, {
            id: 6,
            name: 'Japanese'
          }, {
            id: 7,
            name: 'Indian'
          }, {
            id: 8,
            name: 'Italian'
          }];
          this.category = [{
            id: 1,
            name: 'Automotive'
          }, {
            id: 2,
            name: 'Baby & Toddler'
          }, {
            id: 3,
            name: 'Clothing & Shoes'
          }, {
            id: 4,
            name: 'Computers'
          }, {
            id: 5,
            name: 'Electronics'
          }, {
            id: 6,
            name: 'Entertainment & Arts'
          }, {
            id: 7,
            name: 'Others'
          }];
          this.keyword = 'name';
          this.data = [{
            id: 1,
            name: 'Usa'
          }, {
            id: 2,
            name: 'England'
          }];
          this.drop_down_value = [];
          this.submitted = false;
          this.email_error = false;
          this.doc_attach = false;
          this.doc_error_1 = false;
          this.doc_error_2 = false;
          this.email_empyt_error = false; /////////

          this.bussiness_name_tag = '';
          this.proof_type_tag = '';
          this.attached_tag = '';
          this.proof2_type_tag = '';
          this.business_type_tag = '';
          this.average_type_tag = '';
          this.restaurant_type_tag = '';
          this.address_type_tag = '';
          this.postal_address = '';
          this.landmark_type_tag = '';
          this.existing_type_tag = '';
          this.ref_email_tag = '';
          this.done_button = false;
          this.file1_status = false;
          this.file2_status = false;
        }

        _createClass(RegistereditComponent, [{
          key: "handleAddressChange",
          value: function handleAddressChange(address) {
            this.zoom = 15;
            this.location_lat = Number(address.geometry.location.lat());
            this.location_lng = Number(address.geometry.location.lng());
            this.base_lat = this.location_lat;
            this.base_lng = this.location_lng;
            this.Latitude = this.location_lat;
            this.Longitude = this.location_lng;
            this.address = address.formatted_address;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            this.profileservice.profile_view(reguser.profile_id).subscribe(function (res) {
              console.log(res);
              _this.profile_details = res;
              console.log(_this.profile_details.profile_biz_name); ///Tag////

              _this.bussiness_name_tag = _this.profile_details.profile_biz_name;
              _this.proof_type_tag = _this.profile_details.business_proof_type;
              _this.attached_tag = "";
              _this.proof2_type_tag = "";
              if (_this.profile_details.idprofileone !== "") _this.attached_tag = "Attach Business Proof";
              if (_this.profile_details.idprofiletwo !== "") _this.idprofileone = _this.profile_details.idprofileone;
              _this.idprofiletwo = _this.profile_details.idprofiletwo;
              _this.proof2_type_tag = "Attach Identity Proof";

              _this.proofchange();

              _this.cuisine_cat_text = _this.profile_details.cuisine;
              _this.category_text = _this.profile_details.categorys;
              console.log(_this.cuisine_cat_text);
              _this.average_type_tag = _this.profile_details.profile_biz_avg_meal_cost;
              _this.address = _this.profile_details.profile_address;
              _this.address_type_tag = _this.profile_details.profile_address;
              _this.landmark_type_tag = _this.profile_details.address_landmark;
              _this.refer_value = _this.profile_details.address_landmark;
              _this.refer_value = "Yes";
              if (_this.profile_details.ref_email == '') _this.refer_value = "No";
              _this.button_visible = true;
              _this.postal_address = _this.profile_details.address_postal + ', ' + _this.profile_details.city + ', ' + _this.profile_details.state + ', ' + _this.profile_details.country + ', ' + _this.profile_details.postal; // this.checkemail();
              /////variable declar///

              _this.proof_type = _this.profile_details.business_proof_type;
              _this.selected = _this.profile_details.profile_biz_type;

              _this.selectedChanged();

              var c = {
                name: _this.profile_details.cuisine
              };

              _this.selectEvent(c);

              var code = res.profile_contact.split("-");

              if (code[0] == "+65") {
                _this.country = "Singapore";
              } else if (code[0] == "+60") {
                _this.country = "Malaysia";
              } else if (code[0] == "+91") {
                _this.country = "India";
              }

              _this.proofchange();

              _this.initForm();

              _this.resend_otp();

              var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
              var merchant_detail = _this.storage.merchant_detail;
              console.log(_this.profile_details);

              var codes = _this.profile_details.profile_contact.split("-", 2); // this.postal_address_check();


              for (var a = 0; a < _this.country_code_price.length; a++) {
                if (_this.country_code_price[a].country_code == codes[0]) {
                  _this.drop_down_value = _this.country_code_price[a].country_code_price;
                }
              }
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.registerForm = this.formBuilder.group({
              business_name: [this.profile_details ? this.profile_details.profile_biz_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              business_proof_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              idprofileone: [''],
              idprofiletwo: [''],
              business_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              avg_meal_cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(20)]],
              address_postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)]],
              country: [this.country ? this.country : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address_landmark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              existing_user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              cuisine: [''],
              categorys: [''],
              ref_email: ['']
            });
            this.loader = false;
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            } else {
              this.file1_status = false;
              this.file2_status = false;
              var controls = this.registerForm.controls;
              console.log(this.idprofileone, this.idprofiletwo);
              var check_status = true;
              this.doc_error_2 = false;
              this.doc_error_1 = false;
              this.email_empyt_error = false;

              if (this.proof_type == 'None (Activate Account, once done verification call from us)') {
                if (this.idprofiletwo == undefined) {
                  // this.toastr.warningToastr('Add the file');
                  this.doc_error_2 = true;
                  check_status = false;
                }
              }

              if (this.proof_type !== 'None (Activate Account, once done verification call from us)') {
                if (this.idprofileone == undefined || this.idprofiletwo == undefined) {
                  // this.toastr.warningToastr('Add the file');
                  this.doc_error_1 = true;
                  this.doc_error_2 = true;
                  check_status = false;
                }
              }

              if (this.refer_value == 'Yes' && controls.ref_email.value == '') {
                // this.toastr.warningToastr('Fill ref email id');
                this.email_empyt_error = true;
                check_status = false;
              }

              if (check_status == true) {
                var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
                var _controls = this.registerForm.controls;
                var registerData = {
                  business_name: _controls.business_name.value,
                  business_proof_type: _controls.business_proof_type.value,
                  idprofileone: _controls.idprofileone.value,
                  idprofiletwo: _controls.idprofiletwo.value,
                  business_type: _controls.business_type.value,
                  avg_meal_cost: _controls.avg_meal_cost.value,
                  address: _controls.address.value,
                  address_postal: _controls.address_postal.value,
                  city: _controls.city.value,
                  state: _controls.state.value,
                  postal: _controls.postal.value,
                  country: _controls.country.value,
                  address_landmark: _controls.address_landmark.value,
                  ref_email: _controls.ref_email.value,
                  cuisine: _controls.cuisine.value.name,
                  categorys: _controls.categorys.value,
                  location_lat: this.Latitude,
                  location_lng: this.Longitude,
                  profile_id: reguser.profile_id
                };
                this.auth.register(registerData).subscribe(function (res) {
                  localStorage.removeItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE); // this.toastr.successToastr('Registered Succesfully');

                  _this2.router.navigateByUrl("merchant_panel/dashboard"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

                }, function (err) {
                  _this2.toastr.warningToastr(err); // this.notify.showError(err, "LOGIN");

                });
              }
            }
          }
        }, {
          key: "selectImgidprofileone",
          value: function selectImgidprofileone(event) {
            this.idprofileone = event.target.files[0];
            this.idprofileoneuploadImg();
          }
        }, {
          key: "idprofileoneuploadImg",
          value: function idprofileoneuploadImg() {
            var _this3 = this;

            this.loader = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));

            if (this.idprofileone) {
              this.profileservice.idprofileone(reguser.profile_id, this.idprofileone).subscribe(function (res) {
                _this3.attached_tag = "" + _this3.idprofileone.name;
                _this3.loader = false; // this.router.navigateByUrl('dashboard');
                // this.notify.showSuccess("Logged in successfully", "LOGIN");
              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              alert('Select Image');
            }
          }
        }, {
          key: "selectImgidprofiletwo",
          value: function selectImgidprofiletwo(event) {
            this.idprofiletwo = event.target.files[0];
            this.idprofiletwouploadImg();
          }
        }, {
          key: "idprofiletwouploadImg",
          value: function idprofiletwouploadImg() {
            var _this4 = this;

            this.loader = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));

            if (this.idprofiletwo) {
              this.profileservice.idprofiletwo(reguser.profile_id, this.idprofiletwo).subscribe(function (res) {
                _this4.loader = false;
                _this4.proof2_type_tag = "" + _this4.idprofiletwo.name;
              }, function (err) {});
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
          key: "markerDragEnd",
          value: function markerDragEnd($event) {
            var _this5 = this;

            this.location_lat = Number($event.coords.lat);
            this.location_lng = Number($event.coords.lng);
            this.base_lat = this.location_lat;
            this.base_lng = this.location_lng;
            this.Latitude = this.location_lat;
            this.Longitude = this.location_lng;
            this.profileservice.location_details(this.location_lat, this.location_lng).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return data['results'][0]['formatted_address'];

                      case 2:
                        this.address = _context.sent;

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "selectedChanged",
          value: function selectedChanged() {
            this.business_type_tag = this.selected;

            if (this.selected == 'Restaurant' || this.selected == 'Home Kitchen' || this.selected == 'Caterers') {
              this.lable_text = 'Average cost of food per person';
              this.cuisine_cat_text = '';
              this.category_text = '';
            }

            if (this.selected == 'Others' || this.selected == 'Shop') {
              this.lable_text = 'Average cost of product';
              this.cuisine_cat_text = '';
              this.category_text = '';
            }
          }
        }, {
          key: "selectedChanged1",
          value: function selectedChanged1() {
            this.ref_email_tag = '';
            this.existing_type_tag = this.refer_value;

            if (this.refer_value == 'No') {
              this.refer_show = false;
              this.button_visible = true;
              this.profile_details.ref_email = '';
            }

            if (this.refer_value == 'Yes') {
              this.refer_show = true;
              this.button_visible = false;
            }

            this.email_error = false;
          }
        }, {
          key: "selectEvent",
          value: function selectEvent(item) {
            this.cuisine_cat_text = item.name; // do something with selected item
          }
        }, {
          key: "selectEvent1",
          value: function selectEvent1(item) {
            this.category_text = item.name; // do something with selected item
          }
        }, {
          key: "onChangeSearch",
          value: function onChangeSearch(val) {// fetch remote data from here
            // And reassign the 'data' which is binded to 'data' property.
          }
        }, {
          key: "onFocused",
          value: function onFocused(e) {// do something when input is focused
          }
        }, {
          key: "delete_cus",
          value: function delete_cus() {
            this.cuisine_cat_text = '';
          }
        }, {
          key: "delete_cat",
          value: function delete_cat() {
            this.category_text = '';
          }
        }, {
          key: "logout",
          value: function logout() {}
        }, {
          key: "proofchange",
          value: function proofchange() {
            this.doc_attach = false;
            this.proof_type_tag = this.proof_type;

            if (this.proof_type !== 'None (Activate Account, once done verification call from us)') {
              this.proof_attach = true;
              this.doc_attach = true;
            }

            if (this.proof_type == 'None (Activate Account, once done verification call from us)') {
              this.proof_attach = false;
              this.doc_attach = true;
            }

            if (this.proof_type == '') {
              this.proof_attach = false;
              this.doc_attach = false;
            }
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this6 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.ref_email.value;
            setTimeout(function () {
              if (wordSearch == controls.ref_email.value) {
                if (controls.ref_email.value) {
                  _this6.ref_email_tag = controls.ref_email.value;

                  _this6.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this7 = this;

            var controls = this.registerForm.controls;
            var Data = {
              email: controls.ref_email.value
            };
            this.auth.checkemail(Data).subscribe(function (res) {
              _this7.email_error = false;
              _this7.button_visible = true; // this.toastr.successToastr('This Email id already Registerd');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              _this7.email_error = true;
              _this7.button_visible = false; // this.toastr.warningToastr('This Email id already Registerd');
              // this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          } ////Tag Action////////

        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this8 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.business_name.value;
            setTimeout(function () {
              if (wordSearch == controls.business_name.value) {
                if (controls.business_name.value) {
                  _this8.bussiness_name_tag = controls.business_name.value; //função que irá retornar sua lista de objetos
                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "bussiness_name_tag_actions",
          value: function bussiness_name_tag_actions() {
            var _this9 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address.value;
            setTimeout(function () {
              if (wordSearch == controls.address.value) {
                if (controls.address.value) {
                  _this9.address_type_tag = controls.address.value;
                  var str = _this9.address_type_tag;

                  if (str.indexOf(_this9.country) !== -1) {
                    // alert("Not again");
                    _this9.address_error = false;
                  } else {
                    _this9.address_error = true;
                    _this9.address = '';
                    _this9.address_type_tag = '';
                  } //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "bussiness_name_tag_actionss",
          value: function bussiness_name_tag_actionss() {
            var _this10 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address_landmark.value;
            setTimeout(function () {
              if (wordSearch == controls.address_landmark.value) {
                if (controls.address_landmark.value) {
                  _this10.landmark_type_tag = controls.address_landmark.value; //função que irá retornar sua lista de objetos
                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "delete_buss_name",
          value: function delete_buss_name() {
            this.bussiness_name_tag = '';
          }
        }, {
          key: "selectedChanged12",
          value: function selectedChanged12() {
            var controls = this.registerForm.controls;
            this.average_type_tag = controls.avg_meal_cost.value;
          }
        }, {
          key: "proof_type_tags",
          value: function proof_type_tags() {
            this.proof_type_tag = '';
          }
        }, {
          key: "delete_attached",
          value: function delete_attached() {
            this.attached_tag = '';
          }
        }, {
          key: "proof2_type",
          value: function proof2_type() {
            this.proof2_type_tag = '';
          }
        }, {
          key: "business_type",
          value: function business_type() {
            this.business_type_tag = '';
          }
        }, {
          key: "average_type",
          value: function average_type() {
            this.average_type_tag = '';
          }
        }, {
          key: "address_type",
          value: function address_type() {
            this.address_type_tag = '';
          }
        }, {
          key: "landmark_type",
          value: function landmark_type() {
            this.landmark_type_tag = '';
          }
        }, {
          key: "existing_type",
          value: function existing_type() {
            this.existing_type_tag = '';
          }
        }, {
          key: "ref_email",
          value: function ref_email() {
            this.ref_email_tag = '';
          }
        }, {
          key: "check_address",
          value: function check_address() {
            var _this11 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address_postal.value;
            setTimeout(function () {
              if (wordSearch == controls.address_postal.value) {
                if (controls.address_postal.value) {
                  _this11.postal_code_error = false;

                  if (controls.address_postal.value !== '' && controls.city.value !== '' && controls.state.value !== '' && controls.postal.value !== '' && controls.country.value !== '') {
                    var isNumeric = function isNumeric(val) {
                      return !isNaN(Number(val));
                    };

                    var da = isNumeric(controls.postal.value);

                    if (da == false) {
                      _this11.postal_code_error = true;
                      _this11.done_button = false;
                    } else if (controls.postal.value.length < 5) {
                      _this11.postal_code_error = true;
                      _this11.done_button = false;
                    } else {
                      _this11.postal_code_error = false;
                      _this11.done_button = true;
                    }
                  } //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "postal_address_check",
          value: function postal_address_check() {
            var controls = this.registerForm.controls;
            this.postal_address = controls.address_postal.value + ', ' + controls.city.value + ', ' + controls.state.value + ', ' + controls.country.value + ', ' + controls.postal.value;
          }
        }, {
          key: "postal_address_delete",
          value: function postal_address_delete() {
            this.postal_address = '';
          }
        }, {
          key: "terms_con",
          value: function terms_con() {
            window.open('/account/guideinfo', '_blank');
          }
        }, {
          key: "sumbitotp",
          value: function sumbitotp() {
            var _this12 = this;

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE)); // const controls = this.otpForm.controls;

            console.log(this.otp_value);
            var otpData = {
              user_id: reguser.user_id,
              otp: this.otp_value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this12.otp_load = false;
              _this12.otp_error = true;
              _this12.otp_check = false; // this.toastr.successToastr('OTP Verified');
              // this.router.navigateByUrl('/account/register');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this12.otp_error = true;
              _this12.otp_load = false;
              _this12.otp_check = true;
              _this12.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this13 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this13.otp_error = true;
              _this13.otp_error_msg = res.message;
              _this13.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action4",
          value: function bussiness_name_tag_action4() {
            var _this14 = this;

            setTimeout(function () {
              _this14.otp_error = false;
              _this14.otp_error_msg = "";
              _this14.otp_load = false;
            }, 1000);
          }
        }]);

        return RegistereditComponent;
      }();

      RegistereditComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]
        }, {
          type: _app_countrycode__WEBPACK_IMPORTED_MODULE_12__["countrycode"]
        }];
      };

      RegistereditComponent.propDecorators = {
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
      RegistereditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registeredit',
        template: _raw_loader_registeredit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registeredit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegistereditComponent);
      /***/
    },

    /***/
    "1CJF":
    /*!********************************************************************!*\
      !*** ./src/app/account/privacypolicy/privacypolicy.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function CJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5cG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "2h54":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/privacypolicy/privacypolicy.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  privacypolicy works!\n</p>\n";
      /***/
    },

    /***/
    "34af":
    /*!*********************************************!*\
      !*** ./src/app/account/login/login.page.ts ***!
      \*********************************************/

    /*! exports provided: LoginPage */

    /***/
    function af(module, __webpack_exports__, __webpack_require__) {
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
      "zVpI");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "7XiH");
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
          this.email_loader = false;
          this.pass_loader = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            if (this.storage.user) {
              this.router.navigateByUrl('/dashboard');
            }

            this.initForm(); // redirect back to the returnUrl before login

            this.route.queryParams.subscribe(function (params) {
              _this15.returnUrl = params.returnUrl || '/dashboard';
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
            var _this16 = this;

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
              _this16.storage.user = res.user;
              _this16.storage.authToken = res.key.token;

              _this16.router.navigateByUrl(_this16.returnUrl); // this.notify.showSuccess("Logged in successfully", "LOGIN");

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
    "38zf":
    /*!********************************************************!*\
      !*** ./src/app/account/homeedit/homeedit.component.ts ***!
      \********************************************************/

    /*! exports provided: HomeeditComponent */

    /***/
    function zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeeditComponent", function () {
        return HomeeditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homeedit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homeedit.component.html */
      "94GW");
      /* harmony import */


      var _homeedit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homeedit.component.scss */
      "Bw4n");
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


      var _core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var _core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");
      /* harmony import */


      var _app_countrycode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../app/countrycode */
      "TejZ");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");

      var HomeeditComponent = /*#__PURE__*/function () {
        function HomeeditComponent(storage, router, formBuilder, auth, toastr, countrycode, profileservice) {
          _classCallCheck(this, HomeeditComponent);

          this.storage = storage;
          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.toastr = toastr;
          this.countrycode = countrycode;
          this.profileservice = profileservice;
          this.otp_check = true;
          this.otp_load = false;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.otp_value = '';
          this.checkstatus = false;
          this.email_error = false;
          this.contact_error = false;
          this.terms = false;
          this.error_msg = false;
          this.errortext = '';
          this.contact_error_msg = '';
          this.email_error_msg = '';
          this.loading = false;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
          this.contact_no = '';
          this.email_looad = false;
          this.number_load = false; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(HomeeditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.country_codes = "+65";
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            this.profileservice.profile_view(reguser.profile_id).subscribe(function (res) {
              console.log(res);
              _this17.profile_details = res;
              var code = res.profile_contact.split("-");
              _this17.country_codes = code[0];
              _this17.contact_no = code[1];
              _this17.loading = true;

              _this17.initForm();

              _this17.resend_otp();
            }); // console.log(this.countrycode.country);
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.registerForm = this.formBuilder.group({
              first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              country_code: [''],
              email: [''],
              contactno: ['']
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this18 = this;

            this.terms = false;
            this.submitted = true; // stop here if form is invalid

            console.log(this.registerForm.invalid);

            if (this.registerForm.invalid) {
              return;
            }

            var controls = this.registerForm.controls;
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var registerData = {
              profile_first_name: controls.first_name.value,
              profile_last_name: controls.last_name.value,
              profile_id: reguser.profile_id
            };
            console.log(registerData);
            this.auth.register_profile(registerData).subscribe(function (res) {
              console.log(res); // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
              // this.toastr.successToastr('Registered Succesfully');

              _this18.router.navigateByUrl("merchant_panel/dashboard"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              _this18.toastr.warningToastr(err); // this.notify.showError(err, "LOGIN");

            });
          }
        }, {
          key: "check_email",
          value: function check_email() {
            var a = {};
            this.auth.signup(a).subscribe(function (res) {// this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err); // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "toggleEditable",
          value: function toggleEditable(event) {
            console.log(event.target.checked);
            this.checkstatus = event.target.checked;
          }
        }, {
          key: "terms_con",
          value: function terms_con() {
            window.open('/account/privacypolicy', '_blank');
          }
        }, {
          key: "change",
          value: function change(event) {
            var _this19 = this;

            console.log(event);
            var profile_contact = this.country_codes + "-" + event;
            console.log(profile_contact);
            this.auth.checkmobile(profile_contact).subscribe(function (res) {
              console.log("test");
              console.log(res);

              if (res == null) {
                _this19.contact_error = false;
                _this19.number_load = false;
              } else {
                _this19.contact_error = true;
                _this19.number_load = false;

                if (res.role_id == 2) {
                  _this19.contact_error_msg = "This mobile number already with us a Merchant";
                } // this.toastr.warningToastr("This mobile number already with us");
                // this.contact_no = '';

              } // this.profile = res;
              // this.loadUsers(this.profile.role_id);

            });
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this20 = this;

            this.email_looad = true;
            var controls = this.registerForm.controls;
            var wordSearch = controls.email.value;
            setTimeout(function () {
              if (wordSearch == controls.email.value) {
                if (controls.email.value) {
                  console.log(controls.email.value);

                  _this20.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this21 = this;

            var controls = this.registerForm.controls;
            var Data = {
              email: controls.email.value
            };
            this.auth.checkemail(Data).subscribe(function (res) {
              console.log(res);

              if (res.profile.role_id == 2) {
                _this21.email_error_msg = "This email already with us a Merchant";
              }

              if (res.profile.role_id == 5) {
                _this21.email_error_msg = "This email already with us a Customer";
              }

              _this21.email_error = true;
              _this21.email_looad = false; // this.toastr.successToastr('This Email id already Registerd');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err);
              _this21.email_error = false;
              _this21.email_looad = false; // this.toastr.warningToastr('This Email id already Registerd');
              // this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "searchInterestno",
          value: function searchInterestno() {
            var _this22 = this;

            this.number_load = true;
            var controls = this.registerForm.controls;
            var wordSearch = controls.contactno.value;
            setTimeout(function () {
              if (wordSearch == controls.contactno.value) {
                if (controls.contactno.value) {
                  console.log(controls.contactno.value);

                  _this22.change(controls.contactno.value); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "sumbitotp",
          value: function sumbitotp() {
            var _this23 = this;

            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE)); // const controls = this.otpForm.controls;

            console.log(this.otp_value);
            var otpData = {
              user_id: reguser.user_id,
              otp: this.otp_value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this23.otp_load = false;
              _this23.otp_error = true;
              _this23.otp_check = false; // this.toastr.successToastr('OTP Verified');
              // this.router.navigateByUrl('/account/register');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this23.otp_error = true;
              _this23.otp_load = false;
              _this23.otp_check = true;
              _this23.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this24 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this24.otp_error = true;
              _this24.otp_error_msg = res.message;
              _this24.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this25 = this;

            setTimeout(function () {
              _this25.otp_error = false;
              _this25.otp_error_msg = "";
              _this25.otp_load = false;
            }, 1000);
          }
        }]);

        return HomeeditComponent;
      }();

      HomeeditComponent.ctorParameters = function () {
        return [{
          type: _core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _app_countrycode__WEBPACK_IMPORTED_MODULE_10__["countrycode"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]
        }];
      };

      HomeeditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homeedit',
        template: _raw_loader_homeedit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homeedit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeeditComponent);
      /***/
    },

    /***/
    "3Kbf":
    /*!*******************************************!*\
      !*** ./src/app/account/otp/otp.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Kbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".default {\n  cursor: default;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxlQUFBO0FBRVY7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUU7RUFDSSxlQUFBO0FBR04iLCJmaWxlIjoib3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZhdWx0IHtjdXJzb3I6IGRlZmF1bHQ7fVxuXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cblxuLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIH1cbiAgLmN1cnNvci1wb2ludGVye1xuICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "3i6a":
    /*!*****************************************************************!*\
      !*** ./src/app/account/forgot-password/forgot-password.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function i6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "smfz");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "lgTk");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(router, auth, storage, formBuilder) {
          _classCallCheck(this, ForgotPasswordPage);

          this.router = router;
          this.auth = auth;
          this.storage = storage;
          this.formBuilder = formBuilder;
          this.email_loader = false;
          this.email_error = false;
          this.email_error_text = "";
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ForgetPasswordForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.ForgetPasswordForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this26 = this;

            this.email_loader = true;
            this.submitted = true; // stop here if form is invalid

            if (this.ForgetPasswordForm.invalid) {
              return;
            }

            var controls = this.ForgetPasswordForm.controls;
            this.auth.forgetpassword(controls.email.value).subscribe(function (otp) {
              console.log(otp);
              _this26.email_loader = false;

              _this26.router.navigateByUrl("account/otp-fp");

              var a = {
                user_id: otp.user_id,
                email: controls.email.value
              };
              localStorage.setItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE, JSON.stringify(a)); // this.notify.showSuccess("OTP sent successfully", "Forget Password");
            }, function (err) {
              // this.notify.showError(err, "Forget Password");
              console.log(err);
              _this26.email_error = true;
              _this26.email_error_text = err;
              _this26.email_loader = false;
            });
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this27 = this;

            var controls = this.ForgetPasswordForm.controls;
            var Data = {
              email: controls.email.value
            };
            this.auth.checkemail(Data).subscribe(function (res) {
              _this27.email_error = false;
              _this27.email_loader = false; // this.toastr.successToastr('This Email id already Registerd');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err);
              _this27.email_error_text = 'No account found';
              _this27.email_error = true;
              _this27.email_loader = false; // this.toastr.warningToastr('This Email id already Registerd');
              // this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this28 = this;

            this.email_loader = true;
            var controls = this.ForgetPasswordForm.controls;
            var wordSearch = controls.email.value;
            setTimeout(function () {
              if (wordSearch == controls.email.value) {
                if (controls.email.value) {
                  console.log(controls.email.value);

                  _this28.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 1000);
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordPage);
      /***/
    },

    /***/
    "6TJd":
    /*!*************************************************!*\
      !*** ./src/app/account/otp-fp/otp-fp.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function TJd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".default {\n  cursor: default;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL290cC1mcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxlQUFBO0FBRVY7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkU7RUFDSSxlQUFBO0FBS04iLCJmaWxlIjoib3RwLWZwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZhdWx0IHtjdXJzb3I6IGRlZmF1bHQ7fVxuXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9hZGluZ19pbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAubG9hZF9pbnB1dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9Il19 */";
      /***/
    },

    /***/
    "6txN":
    /*!******************************************************************!*\
      !*** ./src/app/account/registeredit/registeredit.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function txN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ng-autocomplete {\n  width: 100%;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.panel {\n  border: 1px solid #ffffff !important;\n  background-color: #2a303900 !important;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  background: #f0f8ff1f;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.hide {\n  background: gray;\n  width: 100%;\n  height: 35px;\n  color: white;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7RUFDSSxlQUFBO0FBQU47O0FBR0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJyZWdpc3RlcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctYXV0b2NvbXBsZXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG4ucGFuZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzMDM5MDAgIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMGY4ZmYxZjtcbiAgfVxuXG5cbiAgLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIH1cblxuXG4gIC5jdXJzb3ItcG9pbnRlcntcbiAgICAgIGN1cnNvcjpwb2ludGVyXG4gIH1cblxuICAuaGlkZSB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "7XiH":
    /*!***********************************************!*\
      !*** ./src/app/account/login/login.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function XiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUU7RUFDSSxlQUFBO0FBR04iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIH1cbiAgLmN1cnNvci1wb2ludGVye1xuICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgfVxuIl19 */";
      /***/
    },

    /***/
    "94GW":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/homeedit/homeedit.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content >\n  <!-- Header starts -->\n\n<div class=\"\" >\n  <section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n              <a href=\"/merchant_panel/dashboard\" class=\"pr-3\">Back</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-5\" *ngIf=\"otp_check\">\n                <div class=\"hr_right home_form_list\">\n                    <form>\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Enter Your OTP To Edit the Details</label>\n                    <div class=\"loading_input\">\n                      <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" [(ngModel)]=\"otp_value\" name=\"otp_value\" (keyup)=\"bussiness_name_tag_action()\"  placeholder=\"Enter Your OTP\">\n                      <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                      </div>\n                      <div class=\"warning\" *ngIf=\"otp_error\">\n                        {{otp_error_msg}}\n                       </div>\n                  </div>\n                  <div class=\"\">\n                    <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                    <span style=\"text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n                  </div>\n                  <div style=\"margin-top: 10px;\">\n                      <button type=\"submit\" (click)=\"sumbitotp()\"   class=\"btn btn-info w-100\">Submit</button>\n                  </div>\n                  \n                </form>\n                </div>\n            </div>\n  \n  \n            <div class=\"col-md-5\" *ngIf=\"!otp_check\">\n              <div class=\"hr_right home_form_list\">\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <h4 class=\"text-white shadow_none pb-2\">\n                      Edit Profile\n                  </h4>\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">First name</label>\n                      <div class=\"loading_input\">\n                      <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.profile_first_name\" formControlName=\"first_name\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\"\n                          placeholder=\"First Name\">\n                          </div>\n                      <div *ngIf=\"submitted && f.first_name.errors\" class=\"warning\">\n                          <div *ngIf=\"f.first_name.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Last Name</label>\n                      <input type=\"text\" class=\"form-control input_2\"  [(ngModel)]=\"profile_details.profile_last_name\" formControlName=\"last_name\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\"\n                          placeholder=\"Last Name\">\n                      <div *ngIf=\"submitted && f.last_name.errors\" class=\"warning\">\n                          <div *ngIf=\"f.last_name.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Email</label>\n                      <div class=\"loading_input\">\n                      <input type=\"text\" disabled class=\"form-control input_2\" [(ngModel)]=\"profile_details.profile_email\" formControlName=\"email\" (keyup)=\"searchInterest()\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                          placeholder=\"Email\">\n                          <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"email_looad\"></div>\n                          </div>\n                          <div class=\"warning\" *ngIf=\"email_error\">\n                              {{email_error_msg}}\n                             </div>\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"warning\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                          <div *ngIf=\"f.email.errors.pattern\">Email must be a valid email address\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <div class=\"row\">\n                          <div class=\"col-md-4\">\n                              <label class=\"control-label text-white\">Country Code</label>\n                             \n                              <select name=\"cars\" disabled id=\"cars\" class=\"form-control input_2\" name=\"country_codes\" [(ngModel)]=\"country_codes\" formControlName=\"country_code\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.country_code.errors }\"\n                              placeholder=\"\" >\n                              <ng-container *ngFor=\"let code of countrycode.country\">\n                                  <option value=\"{{code.dial_code}}\">{{code.name}} {{code.dial_code}}</option>\n                              </ng-container>\n                                </select>\n                                <!-- <div *ngIf=\"submitted && f.contactno.errors\" class=\"warning\">\n                                  <div *ngIf=\"f.contactno.errors.required\">Contact No is required</div>\n                                  <div *ngIf=\"f.contactno.errors.minlength\">Contact No must be at least 8\n                                      characters</div>\n                              </div> -->\n                              <!-- <input type=\"number\" class=\"form-control input_2\" formControlName=\"country_code\"\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.contactno.errors }\"\n                                  placeholder=\"Contact No\">\n                              <div *ngIf=\"submitted && f.contactno.errors\" class=\"warning\">\n                                  <div *ngIf=\"f.contactno.errors.required\">Contact No is required</div>\n                                  <div *ngIf=\"f.contactno.errors.minlength\">Contact No must be at least 8\n                                      characters</div>\n                              </div> -->\n                          </div>\n\n                          <div class=\"col-md-8\">\n                              <label class=\"control-label text-white\">Contact No</label>\n                              <div class=\"loading_input\">\n                              <input maxlength=\"10\" type=\"text\" disabled class=\"form-control input_2\"  (keyup)=\"searchInterestno()\"  name=\"contact_no\" [(ngModel)]=\"contact_no\"  formControlName=\"contactno\"\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.contactno.errors }\"\n                                  placeholder=\"Contact No\">\n                                  <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"number_load\"></div>\n                                  </div>\n                                  <div class=\"warning\" *ngIf=\"contact_error\">\n                                     {{contact_error_msg}}\n                                     </div>\n                                  <div *ngIf=\"submitted && f.contactno.errors\" class=\"warning\">\n                                  <div *ngIf=\"f.contactno.errors.required\">Contact No is required</div>\n                                  <div *ngIf=\"f.contactno.errors.minlength\">Contact No must be at least 6\n                                      characters</div>\n                                      <div *ngIf=\"f.contactno.errors.pattern\">Number Only</div>\n                                      <div *ngIf=\"f.contactno.errors.maxlength\">Max 10\n                                          characters</div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div>\n                      <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info w-100\">Update</button>\n                  </div>\n              </form>\n              </div>\n            </div>\n  \n  \n  \n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n  \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        \n                        \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n                       \n                        \n  \n                    </div>\n                </div>\n            </div>\n        </div>\n  \n    </div>\n  </section>\n  \n  <div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>   \n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n                       \n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>   \n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n        </div>\n    </div>\n  </div>\n  </div>\n  \n  \n  \n  \n  \n</ion-content>";
      /***/
    },

    /***/
    "9Pnp":
    /*!****************************************************************!*\
      !*** ./src/app/account/excelupload/excelupload.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Pnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNlbHVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Bw4n":
    /*!**********************************************************!*\
      !*** ./src/app/account/homeedit/homeedit.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Bw4n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\ninput.largerCheckbox {\n  width: 20px;\n  height: 20px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cls_address {\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWVlZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFMSjs7QUFRRTtFQUNFLHFCQUFBO0FBTEo7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7QUFOSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0YsU0FBQTtFQUNBLFVBQUE7QUFMRjs7QUFPRTtFQUNJLGVBQUE7QUFKTjs7QUFNRTtFQUNJLGVBQUE7QUFITiIsImZpbGUiOiJob21lZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICBcbiAgXG4gIC53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIFxuICBpbnB1dC5sYXJnZXJDaGVja2JveCB7XG4gICAgd2lkdGggOiAyMHB4O1xuICAgIGhlaWdodCA6MjBweDtcbiAgfVxuICBcbiAgLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIH1cbiAgLmN1cnNvci1wb2ludGVye1xuICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgfVxuICAuY2xzX2FkZHJlc3N7XG4gICAgICBmb250LXNpemU6MjNweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "CAay":
    /*!************************************************************************!*\
      !*** ./src/app/account/bankdetailsedit/bankdetailsedit.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function CAay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\ninput.largerCheckbox {\n  width: 20px;\n  height: 20px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cls_address {\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbmtkZXRhaWxzZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBTEo7O0FBUUU7RUFDRSxxQkFBQTtBQUxKOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFTRTtFQUNFLGtCQUFBO0FBTko7O0FBUUU7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBTEY7O0FBT0U7RUFDSSxlQUFBO0FBSk47O0FBTUU7RUFDSSxlQUFBO0FBSE4iLCJmaWxlIjoiYmFua2RldGFpbHNlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIFxuICBcbiAgLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBcbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgXG4gIGlucHV0LmxhcmdlckNoZWNrYm94IHtcbiAgICB3aWR0aCA6IDIwcHg7XG4gICAgaGVpZ2h0IDoyMHB4O1xuICB9XG4gIFxuICAubG9hZGluZ19pbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAubG9hZF9pbnB1dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9XG4gIC5jbHNfYWRkcmVzc3tcbiAgICAgIGZvbnQtc2l6ZToyM3B4O1xuICB9Il19 */";
      /***/
    },

    /***/
    "Ij2c":
    /*!********************************************************************!*\
      !*** ./src/app/account/verifcationotp/verifcationotp.component.ts ***!
      \********************************************************************/

    /*! exports provided: VerifcationotpComponent */

    /***/
    function Ij2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifcationotpComponent", function () {
        return VerifcationotpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verifcationotp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verifcationotp.component.html */
      "TjkP");
      /* harmony import */


      var _verifcationotp_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verifcationotp.component.scss */
      "lqFJ");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var VerifcationotpComponent = /*#__PURE__*/function () {
        function VerifcationotpComponent(storage, router, toastr, formBuilder, auth) {
          _classCallCheck(this, VerifcationotpComponent);

          this.storage = storage;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.submitted = false;
          this.otp_load = false;
          console.log(this.storage.user); // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(VerifcationotpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.otpForm = this.formBuilder.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.otpForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this29 = this;

            this.otp_load = true;
            this.submitted = true; // stop here if form is invalid

            if (this.otpForm.invalid) {
              return;
            }

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var controls = this.otpForm.controls;
            var otpData = {
              user_id: reguser.user_id,
              otp: controls.otp.value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this29.otp_load = false;
              _this29.otp_error = true; // this.toastr.successToastr('OTP Verified');

              _this29.router.navigateByUrl('/account/register'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this29.otp_error = true;
              _this29.otp_load = false;
              _this29.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this30 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this30.otp_error = true;
              _this30.otp_error_msg = res.message;
              _this30.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this31 = this;

            setTimeout(function () {
              _this31.otp_error = false;
              _this31.otp_error_msg = "";
              _this31.otp_load = false;
            }, 1000);
          }
        }]);

        return VerifcationotpComponent;
      }();

      VerifcationotpComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      VerifcationotpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verifcationotp',
        template: _raw_loader_verifcationotp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verifcationotp_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerifcationotpComponent);
      /***/
    },

    /***/
    "J9BH":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/loader/loader.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function J9BH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loading w-100 h-100\">\n  <div class=\" position-relative w-100 h-100 d-flex align-items-center justify-content-center\">\n  <div class=\"spinner  spinner-4 d-flex align-items-center justify-content-center\">\n  <img src=\"../../../assets/images/logo-loading-3.png\">\n  </div>\n  </div>\n</div>\n<!-- loading Gold Color -->\n<div class=\"loading loading2 w-100 h-100 d-none\">\n  <div class=\" position-relative w-100 h-100 d-flex align-items-center justify-content-center\">\n  <div class=\"spinner  spinner-4 d-flex align-items-center justify-content-center\">\n  <img src=\"../../../assets/images/logo-loading-2.png\">\n  </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "JFVA":
    /*!***************************************************!*\
      !*** ./src/app/common/loader/loader.component.ts ***!
      \***************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function JFVA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loader.component.html */
      "J9BH");
      /* harmony import */


      var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loader.component.scss */
      "j+S6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ctorParameters = function () {
        return [];
      };

      LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoaderComponent);
      /***/
    },

    /***/
    "KSrU":
    /*!**********************************************************************!*\
      !*** ./src/app/account/bankdetailsedit/bankdetailsedit.component.ts ***!
      \**********************************************************************/

    /*! exports provided: BankdetailseditComponent */

    /***/
    function KSrU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankdetailseditComponent", function () {
        return BankdetailseditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bankdetailsedit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bankdetailsedit.component.html */
      "cZcD");
      /* harmony import */


      var _bankdetailsedit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bankdetailsedit.component.scss */
      "CAay");
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


      var _core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var _core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");
      /* harmony import */


      var _app_countrycode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../app/countrycode */
      "TejZ");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");

      var BankdetailseditComponent = /*#__PURE__*/function () {
        function BankdetailseditComponent(storage, router, formBuilder, auth, toastr, countrycode, profileservice) {
          _classCallCheck(this, BankdetailseditComponent);

          this.storage = storage;
          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.toastr = toastr;
          this.countrycode = countrycode;
          this.profileservice = profileservice;
          this.otp_check = true;
          this.otp_load = false;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.otp_value = '';
          this.checkstatus = false;
          this.email_error = false;
          this.contact_error = false;
          this.terms = false;
          this.error_msg = false;
          this.errortext = '';
          this.contact_error_msg = '';
          this.email_error_msg = '';
          this.ifsc_visible = false;
          this.loading = false;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
          this.contact_no = '';
          this.email_looad = false;
          this.number_load = false; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(BankdetailseditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.country_codes = "+65";
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            this.profileservice.profile_view(reguser.profile_id).subscribe(function (res) {
              console.log(res);
              _this32.profile_details = res;
              var code = res.profile_contact.split("-");
              _this32.country_codes = code[0];
              _this32.contact_no = code[1];
              _this32.loading = true;

              _this32.initForm();

              _this32.proofchange();

              _this32.resend_otp();
            }); // console.log(this.countrycode.country);
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.registerForm = this.formBuilder.group({
              country_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              bank_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              bank_ifsc: [''],
              bank_branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              bank_ac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this33 = this;

            this.terms = false;
            this.submitted = true; // stop here if form is invalid

            console.log(this.registerForm.invalid);

            if (this.registerForm.invalid) {
              return;
            }

            var controls = this.registerForm.controls;
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var registerData = {
              bank_acc_no: controls.bank_ac.value,
              bank_branch: controls.bank_branch.value,
              bank_ifsc_no: controls.bank_ifsc.value,
              bank_name: controls.bank_name.value,
              profile_id: reguser.profile_id
            };
            console.log(registerData);
            this.auth.register_bank(registerData).subscribe(function (res) {
              console.log(res); // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
              // this.toastr.successToastr('Registered Succesfully');

              _this33.router.navigateByUrl("merchant_panel/dashboard"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              _this33.toastr.warningToastr(err); // this.notify.showError(err, "LOGIN");

            });
          }
        }, {
          key: "proofchange",
          value: function proofchange() {
            if (this.country_codes == "+91") {
              this.ifsc_visible = true;
            } else {
              this.ifsc_visible = false;
            }
          }
        }, {
          key: "sumbitotp",
          value: function sumbitotp() {
            var _this34 = this;

            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE)); // const controls = this.otpForm.controls;

            console.log(this.otp_value);
            var otpData = {
              user_id: reguser.user_id,
              otp: this.otp_value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this34.otp_load = false;
              _this34.otp_error = true;
              _this34.otp_check = false; // this.toastr.successToastr('OTP Verified');
              // this.router.navigateByUrl('/account/register');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this34.otp_error = true;
              _this34.otp_load = false;
              _this34.otp_check = true;
              _this34.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this35 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this35.otp_error = true;
              _this35.otp_error_msg = res.message;
              _this35.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this36 = this;

            setTimeout(function () {
              _this36.otp_error = false;
              _this36.otp_error_msg = "";
              _this36.otp_load = false;
            }, 1000);
          }
        }]);

        return BankdetailseditComponent;
      }();

      BankdetailseditComponent.ctorParameters = function () {
        return [{
          type: _core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _app_countrycode__WEBPACK_IMPORTED_MODULE_10__["countrycode"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]
        }];
      };

      BankdetailseditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bankdetailsedit',
        template: _raw_loader_bankdetailsedit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bankdetailsedit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BankdetailseditComponent);
      /***/
    },

    /***/
    "NGnr":
    /*!**************************************************************!*\
      !*** ./src/app/account/excelupload/excelupload.component.ts ***!
      \**************************************************************/

    /*! exports provided: ExceluploadComponent */

    /***/
    function NGnr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExceluploadComponent", function () {
        return ExceluploadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_excelupload_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./excelupload.component.html */
      "smBR");
      /* harmony import */


      var _excelupload_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./excelupload.component.scss */
      "9Pnp");
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


      var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);

      var ExceluploadComponent = /*#__PURE__*/function () {
        function ExceluploadComponent(router, auth, storage, formBuilder) {
          _classCallCheck(this, ExceluploadComponent);

          this.router = router;
          this.auth = auth;
          this.storage = storage;
          this.formBuilder = formBuilder;
          this.timeLeft = 0;
          this.country_name = [{
            "country_name": "INDIA"
          }, {
            "country_name": "MALAYSIA"
          }, {
            "country_name": "SINGAAPORE"
          }];
          this.state_name = [{
            "country_name": "INDIA",
            "state_name": "Andaman and Nicobar Islands AN"
          }, {
            "country_name": "INDIA",
            "state_name": "Andhra Pradesh AP"
          }, {
            "country_name": "INDIA",
            "state_name": "Arunachal Pradesh AR"
          }, {
            "country_name": "INDIA",
            "state_name": "Assam AS"
          }, {
            "country_name": "INDIA",
            "state_name": "Bihar BR"
          }, {
            "country_name": "INDIA",
            "state_name": "Chandigarh CH"
          }, {
            "country_name": "INDIA",
            "state_name": "Chhattisgarh CT"
          }, {
            "country_name": "INDIA",
            "state_name": "Dadra and Nagar Haveli and Daman and Diu DH"
          }, {
            "country_name": "INDIA",
            "state_name": "Delhi DL"
          }, {
            "country_name": "INDIA",
            "state_name": "Goa GA"
          }, {
            "country_name": "INDIA",
            "state_name": "Gujarat GJ"
          }, {
            "country_name": "INDIA",
            "state_name": "Haryana HR"
          }, {
            "country_name": "INDIA",
            "state_name": "Himachal Pradesh HP"
          }, {
            "country_name": "INDIA",
            "state_name": "Jammu and Kashmir JK"
          }, {
            "country_name": "INDIA",
            "state_name": "Jharkhand JH"
          }, {
            "country_name": "INDIA",
            "state_name": "Karnataka KA"
          }, {
            "country_name": "INDIA",
            "state_name": "Kerala KL"
          }, {
            "country_name": "INDIA",
            "state_name": "Ladakh LA"
          }, {
            "country_name": "INDIA",
            "state_name": "Lakshadweep LD"
          }, {
            "country_name": "INDIA",
            "state_name": "Madhya Pradesh MP"
          }, {
            "country_name": "INDIA",
            "state_name": "Maharashtra MH"
          }, {
            "country_name": "INDIA",
            "state_name": "Manipur MN"
          }, {
            "country_name": "INDIA",
            "state_name": "Meghalaya ML"
          }, {
            "country_name": "INDIA",
            "state_name": "Mizoram MZ"
          }, {
            "country_name": "INDIA",
            "state_name": "Nagaland NL"
          }, {
            "country_name": "INDIA",
            "state_name": "Odisha OR"
          }, {
            "country_name": "INDIA",
            "state_name": "Puducherry PY"
          }, {
            "country_name": "INDIA",
            "state_name": "Punjab PB"
          }, {
            "country_name": "INDIA",
            "state_name": "Rajasthan RJ"
          }, {
            "country_name": "INDIA",
            "state_name": "Sikkim SK"
          }, {
            "country_name": "INDIA",
            "state_name": "Tamil Nadu TN"
          }, {
            "country_name": "INDIA",
            "state_name": "Telangana TG"
          }, {
            "country_name": "INDIA",
            "state_name": "Tripura TR"
          }, {
            "country_name": "INDIA",
            "state_name": "Uttar Pradesh UP"
          }, {
            "country_name": "INDIA",
            "state_name": "Uttarakhand UT"
          }, {
            "country_name": "INDIA",
            "state_name": "West Bengal WB"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Johor 01"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Kedah 02"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Kelantan 03"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Kuala Lumpur 14"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Labuan 15"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Malacca 04"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Negeri Sembilan 05"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Pahang 06"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Penang 07"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Perak 08"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Perlis 09"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Putrajaya 16"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Sabah 12"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Sarawak 13"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Selangor 10"
          }, {
            "country_name": "MALAYSIA",
            "state_name": "Terengganu 11"
          }, {
            "country_name": "SINGAAPORE",
            "state_name": "Central Region"
          }, {
            "country_name": "SINGAAPORE",
            "state_name": "North-East Region"
          }, {
            "country_name": "SINGAAPORE",
            "state_name": "East Region"
          }, {
            "country_name": "SINGAAPORE",
            "state_name": "North Region"
          }, {
            "country_name": "SINGAAPORE",
            "state_name": "West Region"
          }];
          this.city_names = [];
          this.email_loader = false;
          this.email_error = false;
          this.email_error_text = "";
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(ExceluploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ForgetPasswordForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]]
            });
            this.startTimer();
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this37 = this;

            this.timeLeft = this.city_names.length;
            this.interval = setInterval(function () {
              if (_this37.timeLeft > 0) {
                _this37.timeLeft--;
                var Data = {
                  state_name: _this37.city_names[_this37.timeLeft].state_name,
                  city_name: _this37.city_names[_this37.timeLeft].city_name
                };

                _this37.auth.city_insert(Data).subscribe(function (res) {
                  console.log("Inserted", res);
                }, function (err) {
                  console.log(err);
                });
              } else {
                _this37.timeLeft = 0;

                _this37.pauseTimer();
              }
            }, 500);
          }
        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            clearInterval(this.interval);
          }
        }, {
          key: "call_function",
          value: function call_function() {}
        }, {
          key: "onFileChange",
          value: function onFileChange(ev) {
            var _this38 = this;

            var workBook = null;
            var jsonData = null;
            var reader = new FileReader();
            var file = ev.target.files[0];

            reader.onload = function (event) {
              var data = reader.result;
              workBook = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](data, {
                type: 'binary'
              });
              jsonData = workBook.SheetNames.reduce(function (initial, name) {
                var sheet = workBook.Sheets[name];
                initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(sheet);
                return initial;
              }, {});
              var dataString = JSON.stringify(jsonData); // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
              // this.setDownload(dataString);

              console.log(jsonData.Sheet1);
              _this38.city_names = jsonData.Sheet1;

              _this38.startTimer();
            };

            reader.readAsBinaryString(file);
          }
        }]);

        return ExceluploadComponent;
      }();

      ExceluploadComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ExceluploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-excelupload',
        template: _raw_loader_excelupload_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_excelupload_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExceluploadComponent);
      /***/
    },

    /***/
    "NUUe":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/changepassword/changepassword.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NUUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"\" >\n<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n  <div class=\"wrapper_2 header_top w-100\">\n      <div class=\"row w-100 align-items-center\">\n          <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n              <div class=\"logo_home pt-2\">\n                  <img src=\"../../../assets/images/logo_new.png\" />\n              </div>\n          </div>\n          <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n            <a href=\"/merchant_panel/dashboard\" class=\"pr-3\">Back</a>\n          </div>\n      </div>\n  </div>\n  <div class=\"slider_fix wrapper_2\">\n      <div class=\"row align-items-center\">\n          <div class=\"col-md-5\" *ngIf=\"otp_check\">\n              <div class=\"hr_right home_form_list\">\n                  <form>\n                <div class=\"form-group\">\n                    <label class=\"control-label text-white\">Enter Your OTP To Edit the Details</label>\n                  <div class=\"loading_input\">\n                    <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" [(ngModel)]=\"otp_value\" name=\"otp_value\" (keyup)=\"bussiness_name_tag_action()\"  placeholder=\"Enter Your OTP\">\n                    <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                    </div>\n                    <div class=\"warning\" *ngIf=\"otp_error\">\n                      {{otp_error_msg}}\n                     </div>\n                </div>\n                <div class=\"\">\n                  <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                  <span style=\"text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n                </div>\n                <div style=\"margin-top: 10px;\">\n                    <button type=\"submit\" (click)=\"sumbitotp()\"   class=\"btn btn-info w-100\">Submit</button>\n                </div>\n                \n              </form>\n              </div>\n          </div>\n\n\n          <div class=\"col-md-5\" *ngIf=\"!otp_check\">\n            <div class=\"hr_right home_form_list\">\n                <form [formGroup]=\"resetpswdForm\">\n                    <h4 class=\"text-white shadow_none pb-2\">\n                        Change Password\n                    </h4>\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-white\">Enter Current Password</label>\n\n                        <div class=\"loading_input\">\n                        <input type=\"password\" class=\"form-control input_2\" (keyup)=\"searchInterest()\" formControlName=\"cpassword\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.cpassword.errors }\"\n                            placeholder=\"Password\">\n                            <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"pass_looad\"></div>\n                          </div>\n                          <div class=\"warning\" *ngIf=\"pass_error\">\n                             Invalid Current password enter correct password\n                             </div>\n\n\n\n                        <div *ngIf=\"submitted && f.cpassword.errors\" class=\"warning\">\n                            <div *ngIf=\"f.cpassword.errors.required\">Enter Current Password is required</div>\n                            <div *ngIf=\"f.cpassword.errors.minlength\">Enter Current Password must be at least 6\n                                characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-white\">Enter New Password</label>\n                        <input type=\"password\" class=\"form-control input_2\" formControlName=\"password\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                            placeholder=\"Confirm Password\">\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"warning\">\n                            <div *ngIf=\"f.password.errors.required\">Enter New Password is required</div>\n                            <div *ngIf=\"f.password.errors.mismatch\">Enter New Password is mismatched</div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"!pass_error\">\n                        <button (click)=\"onSubmit()\" type=\"submit\" class=\"btn btn-info w-100\">Change Password</button>\n                    </div>\n\n                    <div *ngIf=\"pass_error\">\n                      <button class=\"btn hide w-100\">Change Password</button>\n                  </div>\n                </form>\n            </div>\n          </div>\n\n\n\n          <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n              <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                  <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                      <div class=\"carousel-item active\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                      </div>\n\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">PASTRY</h4>\n                      </div>\n                      \n                      \n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">SERVICE</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">PASTRY</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">SHOPS</h4>\n                      </div>\n                     \n                      \n\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</section>\n\n<div class=\"footer_bg\">\n  <div class=\"wrapper_2\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                  <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Support</h4>   \n                  <ul>\n                      <li>\n                          <a href=\"#\">FAQ</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Terms & Conditions</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Customer Support</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Online Support</a>\n                      </li>\n                  </ul>\n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Contact</h4>   \n                  <ul>\n                      <li>\n                          +93 1541578\n                      </li>\n                      <li>\n                          sample@gmail.com\n                      </li>\n                      <li>\n                          sample addres heree\n                      </li>\n                     \n                  </ul>\n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6 footer_social\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Follow us</h4>   \n                  <ul>\n                      <li>\n                          <a href=\"#\">\n                              <i class=\"fa fa-facebook\"></i>\n                          </a>\n                          <a href=\"#\">\n                              <i class=\"fa fa-instagram\"></i>\n                          </a>\n                          <a href=\"#\">\n                              <i class=\"fa fa-youtube-play\"></i>\n                          </a>   \n                      </li>\n                  </ul>\n              </div>                           \n          </div>\n      </div>\n  </div>\n</div>\n</div>\n\n\n\n\n";
      /***/
    },

    /***/
    "NbaP":
    /*!*****************************************************!*\
      !*** ./src/app/account/register/register.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function NbaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ng-autocomplete {\n  width: 100%;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\nagm-map {\n  height: 300px;\n}\n\n.panel {\n  border: 1px solid #ffffff !important;\n  background-color: #2a303900 !important;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  background: #f0f8ff1f;\n  top: 0px;\n  height: 100%;\n  /* right: 8px; */\n  width: 100%;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.hide {\n  background: gray;\n  width: 100%;\n  height: 35px;\n  color: white;\n  font-size: 17px;\n}\n\n.loading_input1 {\n  position: relative;\n}\n\n.load_input1 {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBQ0ksZUFBQTtBQUVOOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRixTQUFBO0VBQ0EsVUFBQTtBQUVGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ucGFuZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzMDM5MDAgIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmdfaW5wdXR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmxvYWRfaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMGY4ZmYxZjtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogcmlnaHQ6IDhweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9XG5cbiAgLmhpZGUge1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuLmxvYWRpbmdfaW5wdXQxe1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB9XG4gIC5sb2FkX2lucHV0MXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "O8bK":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function O8bK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row home_pb_1 login_page bg_shape\" style=\"background-size: 600px;\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/account/home_page\" class=\"pr-3\">Logout</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2 info_pt_1\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n               <div class=\"hr_right home_form_list\">\n                            <form [formGroup]=\"registerForm\">\n                                <h4 class=\"text-white shadow_none pb-2\">\n                                    Interested? Fill in the form below to become our partner and increase your\n                                    revenue!\n                                </h4>\n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">Business Name</label>\n                                    <div class=\"loading_input\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"business_name\" (keyup)=\"bussiness_name_tag_action()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.business_name.errors }\"\n                                        placeholder=\"Business Name\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"bussiness_name_tag !== ''\"></div>\n                                        </div>\n                                    <div *ngIf=\"submitted && f.business_name.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.business_name.errors.required\">Name is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"bussiness_name_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{bussiness_name_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"delete_buss_name()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n\n\n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">Business Proof</label>\n                                  \n                                    <div class=\"loading_input\">\n                                    <select formControlName=\"business_proof_type\" class=\"form-control input_2\" [(ngModel)]=\"proof_type\" (ngModelChange)=\"proofchange()\" >\n                                        <option disabled value=\"\">SELECT</option>\n                                        <option value=\"Business Registration Certificate\">Business Registration Certificate</option>\n                                        <option value=\"MSME Registration\">MSME Registration</option>\n                                        <option value=\"SSM\">SSM</option>\n                                        <option value=\"None (Activate Account, once done verification call from us)\">None (Activate Account, once done verification call from us)</option>\n                                    </select>\n                                    <div class=\"loading_input load_input\" *ngIf=\"proof_type_tag !== ''\"></div>\n                                </div>\n                                    <div *ngIf=\"submitted && f.business_proof_type.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.business_proof_type.errors.required\">Business Proof is required</div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"form-group\" *ngIf=\"proof_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{proof_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"proof_type_tags()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n                               \n\n\n\n                                <div class=\"form-group\" >\n                                    <div *ngIf=\"proof_attach\">\n                                    <label class=\"control-label text-white\">Attach Business Proof</label>\n                                    <div class=\"loading_input\">\n                                    <input type=\"file\" class=\"form-control input_2\" formControlName=\"idprofileone\" accept=\"image/*, .pdf\" (change)=\"selectImgidprofileone($event)\">\n                                    <div class=\"loading_input load_input\" *ngIf=\"attached_tag !== ''\"></div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.idprofileone.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.idprofileone.errors.required\">Attach Business Proof  is required</div>\n                                    </div>\n                                    <div class=\"warning\" *ngIf=\"doc_error_1\">\n                                        Please Attach Business Proof\n                                       </div>\n                                </div> \n                                </div>\n                                <div class=\"form-group\" *ngIf=\"attached_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{attached_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"delete_attached()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div *ngIf=\"doc_attach\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-8\">\n                                               \n                                                <label class=\"control-label text-white\">Attach Identity Proof</label>\n                                            </div>\n                                            <div class=\"col-4 text-right\" *ngIf=\"proof_type_tag !== ''\">\n                                                <a class=\"cursor-pointer\" (click)=\"terms_con()\">More Info</a>\n                                            </div>\n                                        </div>\n                                    <div class=\"loading_input\">\n                                    <input type=\"file\" class=\"form-control input_2\" formControlName=\"idprofiletwo\" accept=\"image/*, .pdf\" (change)=\"selectImgidprofiletwo($event)\">\n                                    <div class=\"loading_input load_input\" *ngIf=\"proof2_type_tag !== ''\"></div>\n                                      </div>\n                                    <div *ngIf=\"submitted && f.idprofiletwo.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.idprofiletwo.errors.required\">Attach Identity Proof is required</div>\n                                    </div>\n                                    <div class=\"warning\" *ngIf=\"doc_error_2\">\n                                        Please Attach Identity Proof\n                                       </div>\n                                   </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"proof2_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{proof2_type_tag}} \n                                        </div>\n                                        <div class=\"\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"proof2_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n                                \n                                \n\n\n\n\n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">Business Type</label>\n                                    <div class=\"loading_input\">\n                                    <select formControlName=\"business_type\" class=\"form-control input_2\" [(ngModel)]=\"selected\" (ngModelChange)=\"selectedChanged()\">\n                                        <option disabled value=\"\">SELECT</option>\n                                        <option value=\"Restaurant\">Restaurant</option>\n                                        <option value=\"Home Kitchen\">Home Kitchen</option>\n                                        <option value=\"Caterers\">Caterers</option>\n                                        <option value=\"Shop\">Shop</option>\n                                        <option value=\"Others\">Others</option>\n                                    </select>\n                                    <div class=\"loading_input load_input\" *ngIf=\"business_type_tag !== ''\"></div>\n                                 </div>\n                                    <div *ngIf=\"submitted && f.business_type.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.business_type.errors.required\">Business type is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"business_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{business_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"business_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n                                <div class=\"ng-autocomplete form-group\" *ngIf=\"selected == 'Restaurant' || selected == 'Home Kitchen' || selected == 'Caterers'\">\n                                    <label class=\"control-label text-white\">Cuisines</label>\n                                    <div class=\"loading_input\">\n                                    <ng-autocomplete \n                                      [data]=\"cuisine_cat\"\n                                      [searchKeyword]=\"keyword\"\n                                      (selected)='selectEvent($event)'\n                                      (inputChanged)='onChangeSearch($event)'\n                                      (inputFocused)='onFocused($event)'\n                                      [itemTemplate]=\"itemTemplate\"\n                                      [notFoundTemplate]=\"notFoundTemplate\"\n                                      formControlName=\"cuisine\"\n                                      placeholder = \"Select Cuisines\"\n                                      >                                 \n                                    </ng-autocomplete>\n                                    <ng-template #itemTemplate let-item>\n                                    <a [innerHTML]=\"item.name\"></a>\n                                    </ng-template>\n                                    <ng-template #notFoundTemplate let-notFound>\n                                    <div [innerHTML]=\"notFound\"></div>\n                                    </ng-template>\n                                    <div class=\"loading_input load_input\" *ngIf=\"cuisine_cat_text !== ''\"></div>\n                                    </div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.cuisine.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.cuisine.errors.required\">Cuisines is\n                                            required</div>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"cuisine_cat_text !== ''\" style=\"margin-top: -16px;\">\n                                        <div class=\"row col-md-12\">\n                                            <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                            background: #f8c333;\n                                            color: black;\">\n                                                {{cuisine_cat_text}} \n                                            </div>\n                                            <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                            background: #f8c333;\n                                            color: black;\" (click)=\"delete_cus()\">\n                                                x\n                                            </div>\n                                        </div>                                                \n                                    </div>\n                                    <div class=\"ng-autocomplete form-group\" *ngIf=\"selected == 'Shop' || selected == 'Others'\">\n                                        <label class=\"control-label text-white\">Category</label>\n                                        <div class=\"loading_input\">\n                                        <ng-autocomplete \n                                          [data]=\"category\"\n                                          [searchKeyword]=\"keyword\"\n                                          (selected)='selectEvent1($event)'\n                                          (inputChanged)='onChangeSearch($event)'\n                                          (inputFocused)='onFocused($event)'\n                                          [itemTemplate]=\"itemTemplate\"\n                                          [notFoundTemplate]=\"notFoundTemplate\"\n                                          formControlName=\"categorys\"\n                                          placeholder = \"Select Category\"\n                                          >                                 \n                                        </ng-autocomplete>\n                                        \n                                        <ng-template #itemTemplate let-item>\n                                        <a [innerHTML]=\"item.name\"></a>\n                                        </ng-template>\n                                        <ng-template #notFoundTemplate let-notFound>\n                                        <div [innerHTML]=\"notFound\"></div>\n                                        </ng-template>\n                                        <div class=\"loading_input load_input\" *ngIf=\"category_text !== ''\"></div>\n                                        </div>\n                                        </div>\n                                        <div *ngIf=\"submitted && f.categorys.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.categorys.errors.required\">category is\n                                                required</div>\n                                        </div>\n                                        <div class=\"form-group\" *ngIf=\"category_text !== ''\" style=\"margin-top: -16px;\">\n                                            <div class=\"row col-md-12\">\n                                                <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                                background: #f8c333;\n                                                color: black;\">\n                                                    {{category_text}} \n                                                </div>\n                                                <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                                background: #f8c333;\n                                                color: black;\" (click)=\"delete_cat()\">\n                                                    x\n                                                </div>\n                                            </div>                                                \n                                        </div>\n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">{{lable_text}}</label>\n                                    <div class=\"loading_input\">\n                                    <select formControlName=\"avg_meal_cost\" class=\"form-control input_2\" (ngModelChange)=\"selectedChanged12()\">\n                                        <option disabled value=\"\">SELECT</option>\n                                        <ng-container *ngFor=\"let item of drop_down_value\">\n                                        <option value=\"{{item}}\">{{item}}</option>\n                                    </ng-container>\n                                    </select>\n                                    <div class=\"loading_input load_input\" *ngIf=\"average_type_tag !== ''\"></div>\n                                </div>\n                                    <div *ngIf=\"submitted && f.avg_meal_cost.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.avg_meal_cost.errors.required\">Average cost of meal is\n                                            required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"average_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{average_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"average_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n                                <div class=\"form-group\" > \n                                    <div class=\"row\"> \n                                        <div class=\"col-8\">\n                                            <label class=\"control-label text-white\">Business Address</label>\n                                        </div>\n                                        <div class=\"col-4 text-right position-relative\">\n                                            <span class=\"cursor-pointer MapPopupOpen\" (click)=\"view_map()\">Pin your location</span>\n                                            <div>\n                                                <section class=\"position-absolute popup_inner\" *ngIf=\"map_view\">\n                                                    <div class=\"popup_map_info\">\n                                                        <div class=\"pm_head d-flex\">\n                                                            <div class=\"flx_1 text-center\"><h4>Pick the location</h4></div>\n                                                            <div class=\"flx_0\"><span class=\"close_pm cursor-pointer\" (click)=\"close_map_view()\">X</span></div>\n                                                           \n                                                        </div>\n                                                        <div class=\"row\">\n                                                            <div class=\"col-md-12\" style=\"padding: 16px;\">\n                                                            <input type=\"text\" class=\"form-control input_2\" formControlName=\"temp_location\"  [(ngModel)]=\"Search_text\" placeholder=\"Type the location\"  ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\">\n                                                        </div>\n                                                        </div>\n                                                        <div class=\"map_info_panel\">\n                                                   <agm-map [latitude]=\"base_lat\" [longitude]=\"base_lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\"\n                                                    [zoomControl]=\"false\">\n                                                    <agm-marker [latitude]=\"location_lat\" [longitude]=\"location_lng\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd($event)\">\n                                                      <agm-info-window>\n                                                        <strong>{{ address }}</strong>\n                                                      </agm-info-window>\n                                                    </agm-marker>\n                                                   </agm-map>\n                                                        </div>\n                                            \n                                                        <div class=\"row\" style=\"text-align: center;\">\n                                                            <div class=\"col-md-12\" style=\"padding: 16px;\">\n                                                                <button class=\"btn btn_8\" (click)=\"close_map_view()\">Select location</button> \n                                                            </div>\n                                                            </div>\n                                                    </div>\n                                        \n                                            </section>\n\n\n<section class=\"position-absolute popup_inner text-left\" *ngIf=\"address_view\">\n    <div class=\"popup_map_info\">\n        \n        <div class=\"pm_head d-flex\">\n            <div class=\"flx_1 text-center\"><h4>Something is not accurate !. <br> Please choose</h4></div>\n            <div class=\"flx_0\">  <span class=\"close_pm cursor-pointer\" (click)=\"close_address_view()\">X</span></div>\n           \n        </div>\n        <div class=\"row\">\n           \n            <div class=\"col-md-12\" style=\"padding: 16px;\">\n            <label class=\"control-label text-white\">Country</label>\n            <input type=\"text\" class=\"form-control input_2\" disabled [(ngModel)]=\"p_country_name\" formControlName=\"temp_country\" placeholder=\"Country Name\">\n        </div>\n        <div class=\"col-md-12\" style=\"padding: 16px;\">\n            <label class=\"control-label text-white\">State</label>\n            <ng-autocomplete \n            formControlName=\"temp_state\"\n            [data]=\"state_name_list\"\n            [(ngModel)]=\"p_state_name\"\n            [searchKeyword]=\"keyword\"\n            (selected)='selectEvent4($event)'\n            (inputChanged)='onChangeSearch($event)'\n            (inputFocused)='onFocused($event)'\n            [itemTemplate]=\"itemTemplate\"\n            [notFoundTemplate]=\"notFoundTemplate\"\n            placeholder = \"Select state\"\n            >                                 \n          </ng-autocomplete>\n          <ng-template #itemTemplate let-item>\n          <a [innerHTML]=\"item.name\"></a>\n          </ng-template>\n          <ng-template #notFoundTemplate let-notFound>\n          <div [innerHTML]=\"notFound\"></div>\n          </ng-template>\n        </div>\n        <div class=\"col-md-12\" style=\"padding: 16px;\">\n            <label class=\"control-label text-white\">City</label>\n            <ng-autocomplete \n            formControlName=\"temp_city\"\n            [data]=\"city_name_list\"\n            [(ngModel)]=\"p_city_name\"\n            [searchKeyword]=\"keyword\"\n            (selected)='selectEvent5($event)'\n            (inputChanged)='onChangeSearch($event)'\n            (inputFocused)='onFocused($event)'\n            [itemTemplate]=\"itemTemplate\"\n            [notFoundTemplate]=\"notFoundTemplate\"\n            placeholder = \"Select city\"\n            >                                 \n          </ng-autocomplete>\n          <ng-template #itemTemplate let-item>\n          <a [innerHTML]=\"item.name\"></a>\n          </ng-template>\n          <ng-template #notFoundTemplate let-notFound>\n          <div [innerHTML]=\"notFound\"></div>\n          </ng-template>\n        </div>\n        </div>\n    \n        <div class=\"row\" style=\"text-align: center;\">\n            <div class=\"col-md-12\" style=\"padding: 16px;\">\n                <button class=\"btn btn_8\" (click)=\"save_address_view()\">Save Location</button> \n            </div>\n            </div>\n    </div>\n\n\n\n</section>\n                                            \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"loading_input\">\n                                    <input formControlName=\"address\"  class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" (ngModelChange)=\"bussiness_name_tag_actions1()\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                    placeholder=\"Address\"  style=\"width: 100%;\" [(ngModel)]=\"address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\"\n                                    (onAddressChange)=\"handleAddressChange($event)\" />\n                                    <div class=\"loading_input load_input\" *ngIf=\"address_type_tag !== ''\"></div>\n                                     </div>\n                                     <div class=\"warning\" *ngIf=\"address_error\">\n                                        The Address you selected is not matched with your Registration\n                                       </div>\n                                     <!-- <div class=\"warning\" *ngIf=\"address_error\">\n                                        Invalid Address, Enter into {{country}} addres\n                                       </div> -->\n                                     <div *ngIf=\"submitted && f.address.errors\" class=\"warning\">\n                                         <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                         <div *ngIf=\"f.address.errors.minlength\">Address Should not be Incomplete</div>\n                                     </div>\n                                </div>\n\n                                \n                                <div class=\"form-group\" *ngIf=\"address_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{address_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"address_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n\n                                <div class=\"loading_input\">\n                                <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Permanent address</label>\n                                <div class=\"perm_address\" style=\"border: 1px solid black;padding: 10px;\">\n                                    <!-- Address Form Start -->\n                                    <div class=\"panel pb-0 mb-0\">\n                                        <div class=\"panel-heading mb-0 pb-0\">\n                                            <div class=\"d-flex\"  data-toggle=\"collapse\" (click)=\"fetch_state_list()\" data-target=\"#Address\">\n                                                <div class=\"flx_1 pr-2\">\n                                                    <h4 style=\"font-weight: normal;\" class=\"panel-title text-left\">Permanent address</h4>\n                                                </div>\n                                                <div class=\"flx_0 pr-2\">\n                                                    <i class=\"fa fa-angle-down arrow_icon cursor-pointer\"></i>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"collapse\" id=\"Address\">\n                                            <div class=\"panel-body\">\n                                <div class=\"row\" >\n                                    <div class=\"col-md-12\">\n                                        <label class=\"control-label text-white\">Address Line</label>  \n                                        <div class=\"loading_input\"> \n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"address_postal\" (keyup)=\"check_address()\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.address_postal.errors }\"\n                                            placeholder=\"Address Line 1\">\n                                            <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                        </div>\n                                        <div *ngIf=\"submitted && f.address_postal.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.address_postal.errors.required\">Address code is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <label class=\"control-label text-white\">Country</label>  \n                                        <div class=\"loading_input\">\n                                            <input type=\"text\" style=\"background-color: #f8c333!important;\" class=\"form-control\" formControlName=\"country\"  disabled [(ngModel)]=\"country\" (keyup)=\"check_address()\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"\n                                            placeholder=\"country\">\n\n                                            <!-- <ng-autocomplete \n                                                [data]=\"p_country_name_list\"\n                                                (keyup)=\"check_address()\"\n                                                formControlName=\"country\"\n                                                [searchKeyword]=\"keyword\"\n                                                (selected)='selectEvent6($event)'\n                                                (inputChanged)='onChangeSearch($event)'\n                                                (inputFocused)='onFocused($event)'\n                                                [itemTemplate]=\"itemTemplate\"\n                                                [notFoundTemplate]=\"notFoundTemplate\"\n                                                placeholder = \"Select country\"\n                                                >                                 \n                                            </ng-autocomplete>\n                                            <ng-template #itemTemplate let-item>\n                                            <a [innerHTML]=\"item.name\"></a>\n                                            </ng-template>\n                                            <ng-template #notFoundTemplate let-notFound>\n                                            <div [innerHTML]=\"notFound\"></div>\n                                            </ng-template> -->\n\n\n                                              <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                            </div>\n                                        <div *ngIf=\"submitted && f.country.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.country.errors.required\">country is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <label class=\"control-label text-white\">State</label>  \n                                        <div class=\"loading_input\">\n                                        <!-- <input type=\"text\" class=\"form-control input_2\" formControlName=\"state\" \n                                            [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\"\n                                            placeholder=\"State\"> -->\n                                            <ng-autocomplete \n                                            [data]=\"p_state_name_list\"                                          \n                                            formControlName=\"state\"\n                                            [searchKeyword]=\"keyword\"\n                                            (selected)='selectEvent7($event)'\n                                            (inputChanged)='onChangeSearch($event)'\n                                            (inputFocused)='onFocused($event)'\n                                            [itemTemplate]=\"itemTemplate\"\n                                            [notFoundTemplate]=\"notFoundTemplate\"\n                                            placeholder = \"Select state\"\n                                            >                                 \n                                          </ng-autocomplete>\n                                          <ng-template #itemTemplate let-item>\n                                          <a [innerHTML]=\"item.name\"></a>\n                                          </ng-template>\n                                          <ng-template #notFoundTemplate let-notFound>\n                                          <div [innerHTML]=\"notFound\"></div>\n                                          </ng-template>\n\n\n                                            <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                        </div>\n\n\n\n                                        <div *ngIf=\"submitted && f.state.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.state.errors.required\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"col-md-6\" style=\"padding: 15px;\">\n                                        <label class=\"control-label text-white\">City</label>  \n                                        <div class=\"loading_input\">\n                                        <!-- <input type=\"text\" class=\"form-control input_2\" formControlName=\"city\" \n                                            [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\"\n                                            placeholder=\"City\"> -->\n                                            <ng-autocomplete \n                                                [data]=\"p_city_name_list\"                                              \n                                                formControlName=\"city\"\n                                                [searchKeyword]=\"keyword\"\n                                                (selected)='selectEvent8($event)'\n                                                (inputChanged)='onChangeSearch($event)'\n                                                (inputFocused)='onFocused($event)'\n                                                [itemTemplate]=\"itemTemplate\"\n                                                [notFoundTemplate]=\"notFoundTemplate\"\n                                                placeholder = \"Select city\"\n                                                >                                 \n                                            </ng-autocomplete>\n                                            <ng-template #itemTemplate let-item>\n                                            <a [innerHTML]=\"item.name\"></a>\n                                            </ng-template>\n                                            <ng-template #notFoundTemplate let-notFound>\n                                            <div [innerHTML]=\"notFound\"></div>\n                                            </ng-template>\n                                            <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                        </div>\n                                        <div *ngIf=\"submitted && f.city.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.city.errors.required\">City is required</div>\n                                        </div>\n                                    </div>\n                        \n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <label class=\"control-label text-white\">Postal code</label>  \n                                        <div class=\"loading_input\">\n                                        <input type=\"text\" maxlength=\"6\"  class=\"form-control input_2\" formControlName=\"postal\" (keyup)=\"check_address()\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.postal.errors }\"\n                                            placeholder=\"Postal Code\">\n                                            <div class=\"warning\" *ngIf=\"postal_code_error\">\n                                                Invalid Postal code\n                                            </div>\n                                            <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                        </div>\n\n                                        <div *ngIf=\"submitted && f.postal.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.postal.errors.required\">postal code is required</div>\n                                             <div *ngIf=\"f.postal.errors.maxlenth\">postal code max 5 characters</div>\n                                        </div>\n                                    </div>\n                                  \n                                </div>\n                                                <div class=\"text-right\">\n                                                    <a class=\"btn\" style=\"background-color: gray;\" *ngIf=\"!done_button\">Done</a>\n                                                    <a class=\"btn\" style=\"background-color: green;color: white;\" data-toggle=\"collapse\" data-target=\"#Address\" (click)=\"postal_address_check()\"  *ngIf=\"done_button\">Done</a>\n\n                                                    <!-- <input type=\"button\"  value=\"Done\"> -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- Address Form End -->\n                    \n                    \n                                    <!-- Address View Start -->\n                        \n                                </div>\n\n\n\n\n                                </div>\n                                <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                </div>\n                                \n\n                                <div class=\"form-group\" *ngIf=\"postal_address !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                        <div class=\"col-md-12\" style=\"font-size: 15px;\n                                        font-weight: 700;\n                                        color: black;\n                                        padding: 10px;\">Permanent Address<span class=\"cursor-pointer\" style=\"\n                                        background: #f8c333;\n                                        float: right;\n                                        color: black;\" (click)=\"postal_address_delete()\">x</span></div>\n                                        <div class=\"col-md-12\" style=\" font-size: 18px;color: black;\">{{postal_address}}</div>\n                                        </div>\n                                        \n                                    </div>                                                \n                                </div>\n                                <!-- Address View End -->\n\n\n                                <!-- <div class=\"row\" >\n                                    <div class=\"col-md-12\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"address_postal\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.address_postal.errors }\"\n                                            placeholder=\"Address Line 1\">\n                                        <div *ngIf=\"submitted && f.address_postal.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.address_postal.errors.required\">Address with postal code is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\" style=\"padding: 15px;\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"city\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\"\n                                            placeholder=\"City\">\n                                        <div *ngIf=\"submitted && f.city.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.city.errors.required\">City is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"state\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\"\n                                            placeholder=\"State\">\n                                        <div *ngIf=\"submitted && f.state.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.state.errors.required\">state is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"postal\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.postal.errors }\"\n                                            placeholder=\"Postal Code\">\n                                        <div *ngIf=\"submitted && f.postal.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.postal.errors.required\">postal code is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"country\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"\n                                            placeholder=\"Country\">\n                                        <div *ngIf=\"submitted && f.country.errors\" class=\"warning\">\n                                            <div *ngIf=\"f.country.errors.required\">country is required</div>\n                                        </div>\n                                    </div>\n                                </div> -->\n\n\n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">Landmark</label>\n                                    <div class=\"loading_input\">\n\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"address_landmark\" (keyup)=\"bussiness_name_tag_actionss()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address_landmark.errors }\"\n                                        placeholder=\"Landmark\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"landmark_type_tag !== ''\"></div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.address_landmark.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.address_landmark.errors.required\">Landmark is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"landmark_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{landmark_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"landmark_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n\n            \n                                <div class=\"form-group\">\n                                    <label class=\"control-label text-white\">Do you have any existing service with us?</label>\n                                    <div class=\"loading_input\">\n                                    <select formControlName=\"existing_user\" class=\"form-control input_2\" [(ngModel)]=\"refer_value\" (ngModelChange)=\"selectedChanged1()\">\n                                        <option disabled value=\"\">SELECT</option>\n                                        <option value=\"Yes\">Yes</option>\n                                        <option value=\"No\">No</option>\n                                    </select>\n                                    <div class=\"loading_input1 load_input1\" *ngIf=\"existing_type_tag !== ''\"></div>\n                                    <div class=\"loading_input load_input\" *ngIf=\"existing_type_tag !== ''\"></div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.existing_user.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.existing_user.errors.required\">Existing required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"existing_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{existing_type_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"existing_type()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n                                <div class=\"form-group\" *ngIf=\"refer_show\">\n                                    <label class=\"control-label text-white\">Ref Eamil</label>\n                                    <div class=\"loading_input\">\n                                    <input type=\"text\" class=\"form-control input_2\" (keyup)=\"searchInterest()\" formControlName=\"ref_email\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.ref_email.errors }\"\n                                        placeholder=\"Ref Eamil\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"ref_email_tag !== ''\"></div>\n                                  </div>\n                                        <div class=\"warning\" *ngIf=\"email_error\">\n                                            This email id not exist\n                                           </div>\n\n                                           <div class=\"warning\" *ngIf=\"email_empyt_error\">\n                                            Email should not be empty\n                                           </div>\n\n                                    <div *ngIf=\"submitted && f.ref_email.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.ref_email.errors.required\">Ref Eamil is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"ref_email_tag !== ''\" style=\"margin-top: -16px;\" >\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{ref_email_tag}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"ref_email()\" >\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n\n\n\n                                <div *ngIf=\"button_visible\">\n                                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info w-100\">Submit</button>\n                                </div>\n                                <div *ngIf=\"!button_visible\">\n                                    <button type=\"submit\" class=\"hide\">Submit</button>\n                                </div>\n                            </form>\n                        </div>\n            </div>\n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        \n                        \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n                       \n                        \n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n<div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>   \n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n                       \n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>   \n                        </li>\n                       \n                       \n                    </ul>\n                </div>                           \n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Popup HTML Start  -->\n\n\n\n<!-- Popup HTML End  -->\n\n";
      /***/
    },

    /***/
    "TjkP":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/verifcationotp/verifcationotp.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TjkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>otp</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content>\n  <!-- Header starts -->\n\n  <div class=\"\">\n  <div class=\"video_home\">\n    <span class=\"video_left_corner\"></span>\n    <span class=\"video_right_corner\"></span>\n    <video autoplay [muted]=\"'muted'\" loop id=\"myVideo\">\n      <source src=\"../../../assets/video/home_video.mp4\" type=\"video/mp4\">\n      Your browser does not support HTML5 video.\n    </video>\n  </div>\n  <div class=\"home_main\">\n\n    <section class=\"home_wrapper\">\n      <div class=\"container\">\n        <div class=\"text-right pt-3\">\n          <a href=\"merchant/login\" class=\"pr-3 text-white\">Login</a> |\n          <a class=\"pl-3 text-white\" href=\"home\">Join now</a>\n        </div>\n      </div>\n      <div class=\"home_form_row pt-5 pb-4\">\n        <div class=\"container pt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"logo_home pt-3\">\n                <img style=\"height:180px;\" src=\"../../../assets/images/logo_new.png\" />\n              </div>\n              <div class=\"hf_left pt-5\">\n                <h2 class=\"text-white shadow_none\"><b> PARTNER WITH US</b></h2>\n                <p class=\"text-white\">\n                  We're hungry for the best things in life: delicious food, exploring the city and\n                  bringing\n                  the first bite of food to our customers.\n                  foodie is multi-national, fast-growing business that maintains its appeal as\n                  localised\n                  service with community ambition.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"hr_right home_form_list cus_pt_1\">\n                  <h4 class=\"text-white shadow_none pb-2\">\n                      OTP \n                  </h4>\n                  <form [formGroup]=\"otpForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Enter Your OTP</label>\n                    <div class=\"loading_input\">\n                      <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" (keyup)=\"bussiness_name_tag_action()\" formControlName=\"otp\" [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\" placeholder=\"Enter Your OTP\">\n                      <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                      </div>\n                      <div class=\"warning\" *ngIf=\"otp_error\">\n                        {{otp_error_msg}}\n                       </div>\n                      <div *ngIf=\"submitted && f.otp.errors\" class=\"warning\">\n                        <div *ngIf=\"f.otp.errors.required\">OTP is required</div>\n                        <div *ngIf=\"f.otp.errors.minlength\">OTP must be 4 characters</div>\n                        </div>\n                  </div>\n                  <div class=\"\">\n                    <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                    <span style=\"color: white;text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n                  </div>\n                  <div style=\"margin-top: 10px;\">\n                      <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                  </div>\n                  \n                </form>\n              </div>\n          </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step_activation pt-5 pb-5\">\n        <div class=\"container\">\n          <h2 class=\"text-white shadow_none text-center pb-4\"><b> Steps to Activation</b></h2>\n          <div class=\"row text-center text-white\">\n            <div class=\"col-lg-3 col md-6\">\n              <i class=\"icon-pencil icon-3x\"></i>\n              <h4 class=\"mb-2 pt-3\"> Step 1:</h4>\n              <p>Sign up online</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <i class=\"icon-folder5 icon-3x\"></i>\n              <h4 class=\"mb-2 pt-3\"> Step 2:</h4>\n              <p>Upload Your Menu</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <i class=\"icon-checkmark icon-3x\"></i>\n              <h4 class=\"mb-2 pt-3\"> Step 3:</h4>\n              <p>Approval</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <i class=\"icon-food icon-3x\"></i>\n              <h4 class=\"mb-2 pt-3\"> Step 4:</h4>\n              <p>GO LIVE on Foodie</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step_activation pt-5\">\n\n\n        <div class=\"container\">\n          <h2 class=\"text-white shadow_none pb-2 text-center\"><b> Advantage of Joining Us</b></h2>\n          <ul class=\"text-white text-center\">\n            <li>\n              <div class=\"d-inline-flex align-items-center pr-3\">\n                <div class=\"flx_0 pr-2\">\n                  <i class=\"icon-checkmark icon-2x\"></i>\n                </div>\n                <div class=\"flx_1\">\n                  More Sales and ROI\n                </div>\n\n              </div>\n\n              <div class=\"d-inline-flex align-items-center pr-3\">\n                <div class=\"flx_0 pr-2\">\n                  <i class=\"icon-checkmark icon-2x\"></i>\n                </div>\n                <div class=\"flx_1\">\n                  Unwavering Support\n                </div>\n\n              </div>\n              <div class=\"d-inline-flex align-items-center pr-3\">\n                <div class=\"flx_0 pr-2\">\n                  <i class=\"icon-checkmark icon-2x\"></i>\n                </div>\n                <div class=\"flx_1\">\n                  Extensibility\n                </div>\n\n              </div>\n\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"how_work pt-5 pb-5\">\n        <div class=\"container pt-5\">\n          <h2 class=\"text-white shadow_none text-center pb-4\"><b> How it Works</b></h2>\n          <div class=\"row text-center text-white\">\n            <div class=\"col-lg-3 col md-6\">\n              <h2 class=\"text_number_1 text-success shadow_none\">01</h2>\n              <p>Customer Choose Home cooking’sorRestaurant based on their nearby location through App.</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <h2 class=\"text_number_1 text-danger shadow_none\">02</h2>\n\n              <p>Food Makers accept Orders through our Merchant App and start prepare food on time.</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <h2 class=\"text_number_1 text-info shadow_none\">03</h2>\n\n              <p>Our Riders reach your place within few mins from order placed.</p>\n            </div>\n            <div class=\"col-lg-3 col md-6\">\n              <h2 class=\"text_number_1 text-warning shadow_none\">04</h2>\n\n              <p>Your Food has been Deliveredto customers from Foodie.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"text-center pt-5\">\n          <a href=\"#\" class=\"btn btn-info pl-5 pr-5\">Get Started</a>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "VTd9":
    /*!**********************************************************************!*\
      !*** ./src/app/account/changepassword/changepassword.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function VTd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ng-autocomplete {\n  width: 100%;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.panel {\n  border: 1px solid #ffffff !important;\n  background-color: #2a303900 !important;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.hide {\n  background-color: gray;\n  border-color: gray;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxvQ0FBQTtFQUNBLHNDQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7RUFDRixTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNFO0VBQ0ksZUFBQTtBQUVOOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cbi5wYW5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTMwMzkwMCAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZ19pbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAubG9hZF9pbnB1dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9XG5cbiAgLmhpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59Il19 */";
      /***/
    },

    /***/
    "YExI":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/otp-fp/otp-fp.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function YExI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n                <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> \n                   <!-- <a class=\"pl-3\" href=\"/home\">Join now</a> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-5\">\n                <div class=\"hr_right home_form_list\">\n                    <h4 class=\"text-white shadow_none pb-2\">\n                        OTP\n                    </h4>\n                    <form [formGroup]=\"otpForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Enter Your OTP</label>\n                            <div class=\"loading_input\">\n                                <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" formControlName=\"otp\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\"\n                                    placeholder=\"Enter Your OTP\">\n                                <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                            </div>\n                            <div class=\"warning\" *ngIf=\"otp_error\">\n                                {{otp_error_msg}}\n                            </div>\n                            <div *ngIf=\"submitted && f.otp.errors\" class=\"warning\">\n                                <div *ngIf=\"f.otp.errors.required\">OTP is required</div>\n                                <div *ngIf=\"f.otp.errors.minlength\">OTP must be 4 characters</div>\n                            </div>\n                        </div>\n                        <div class=\"\">\n                            <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                            <span style=\"text-align:right;\" class=\"d-block color_2 cursor-pointer default\"><a\n                                    (click)=\"resend_otp()\">Resend</a></span>\n                        </div>\n                        <br>\n                        <div>\n                            <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\" />\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>\n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "YoYF":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/registeredit/registeredit.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YoYF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\n\n    <div class=\"\" >\n        <section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n          <div class=\"wrapper_2 header_top w-100\">\n              <div class=\"row w-100 align-items-center\">\n                  <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                      <div class=\"logo_home pt-2\">\n                          <img src=\"../../../assets/images/logo_new.png\" />\n                      </div>\n                  </div>\n                  <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                    <a href=\"/merchant_panel/dashboard\" class=\"pr-3\">Back</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"slider_fix wrapper_2\">\n              <div class=\"row align-items-center\">\n                  <div class=\"col-md-5\" *ngIf=\"otp_check\">\n                      <div class=\"hr_right home_form_list\">\n                          <form>\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Enter Your OTP To Edit the Details</label>\n                          <div class=\"loading_input\">\n                            <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" [(ngModel)]=\"otp_value\" name=\"otp_value\" (keyup)=\"bussiness_name_tag_action()\"  placeholder=\"Enter Your OTP\">\n                            <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                            </div>\n                            <div class=\"warning\" *ngIf=\"otp_error\">\n                              {{otp_error_msg}}\n                             </div>\n                        </div>\n                        <div class=\"\">\n                          <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                          <span style=\"text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n                        </div>\n                        <div style=\"margin-top: 10px;\">\n                            <button type=\"submit\" (click)=\"sumbitotp()\"   class=\"btn btn-info w-100\">Submit</button>\n                        </div>\n                        \n                      </form>\n                      </div>\n                  </div>\n        \n        \n                  <div class=\"col-md-5\" *ngIf=\"!otp_check\">\n                    <div class=\"hr_right home_form_list\">\n                     \n                        <form [formGroup]=\"registerForm\">\n                            <h4 class=\"text-white shadow_none pb-2\">\n                                Interested? Fill in the form below to become our partner and increase your\n                                revenue!\n                            </h4>\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Business Name</label>\n                                <div class=\"loading_input\">\n                                <input type=\"text\" class=\"form-control input_2\" formControlName=\"business_name\"  [(ngModel)]=\"profile_details.profile_biz_name\" (keyup)=\"bussiness_name_tag_action()\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.business_name.errors }\"\n                                    placeholder=\"Business Name\">\n                                    <div class=\"loading_input load_input\" *ngIf=\"bussiness_name_tag !== ''\"></div>\n                                    </div>\n                                <div *ngIf=\"submitted && f.business_name.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.business_name.errors.required\">Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"bussiness_name_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{bussiness_name_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"delete_buss_name()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Business Proof</label>\n                                <a class=\"cursor-pointer\" (click)=\"terms_con()\" style=\"float: right;\">More Info</a>\n                                <div class=\"loading_input\">\n                                <select formControlName=\"business_proof_type\" class=\"form-control input_2\" [(ngModel)]=\"proof_type\" (ngModelChange)=\"proofchange()\" >\n                                    <option disabled value=\"\">SELECT</option>\n                                    <option value=\"Business Registration Certificate\">Business Registration Certificate</option>\n                                    <option value=\"MSME Registration\">MSME Registration</option>\n                                    <option value=\"SSM\">SSM</option>\n                                    <option value=\"None (Activate Account, once done verification call from us)\">None (Activate Account, once done verification call from us)</option>\n                                </select>\n                                <div class=\"loading_input load_input\" *ngIf=\"proof_type_tag !== ''\"></div>\n                            </div>\n                                <div *ngIf=\"submitted && f.business_proof_type.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.business_proof_type.errors.required\">Business Proof is required</div>\n                                </div>\n                            </div>\n                            \n                            <div class=\"form-group\" *ngIf=\"proof_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{proof_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"proof_type_tags()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n                           \n\n\n\n                            <div class=\"form-group\" >\n                                <div *ngIf=\"proof_attach\">\n                                <label class=\"control-label text-white\">Attach Business Proof</label>\n                                <div class=\"loading_input\">\n                                <input type=\"file\" class=\"form-control input_2\" formControlName=\"idprofileone\" accept=\"image/*, .pdf\" (change)=\"selectImgidprofileone($event)\">\n                                <div class=\"loading_input load_input\" *ngIf=\"attached_tag !== ''\"></div>\n                                </div>\n                                <div *ngIf=\"submitted && f.idprofileone.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.idprofileone.errors.required\">Attach Business Proof  is required</div>\n                                </div>\n                                <div class=\"warning\" *ngIf=\"doc_error_1\">\n                                    Please Attach Business Proof\n                                   </div>                   \n                            </div> \n                            </div>\n                            <div class=\"form-group\" *ngIf=\"attached_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{attached_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"delete_attached()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n                            <div class=\"form-group\">\n                                <div *ngIf=\"doc_attach\">\n                                <!-- <label class=\"control-label text-white\">Attach Identity Proof</label> -->\n                                <div class=\"row\">\n                                    <div class=\"col-8\">\n                                       \n                                        <label class=\"control-label text-white\">Attach Identity Proof</label>\n                                    </div>\n                                    <div class=\"col-4 text-right\" *ngIf=\"proof_type_tag !== ''\">\n                                        <a class=\"cursor-pointer\" (click)=\"terms_con()\">More Info</a>\n                                    </div>\n                                </div>\n\n                                <div class=\"loading_input\">\n                                <input type=\"file\" class=\"form-control input_2\" formControlName=\"idprofiletwo\" accept=\"image/*, .pdf\" (change)=\"selectImgidprofiletwo($event)\">\n                                <div class=\"loading_input load_input\" *ngIf=\"proof2_type_tag !== ''\"></div>\n                                  </div>\n                                  \n                                <div *ngIf=\"submitted && f.idprofiletwo.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.idprofiletwo.errors.required\">Attach Identity Proof is required</div>\n                                </div>\n                                   <div class=\"warning\" *ngIf=\"doc_error_2\">\n                                    Please Attach Identity Proof\n                                   </div>\n                               </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"proof2_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{proof2_type_tag}} \n                                    </div>\n                                    <div class=\"\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"proof2_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n                            \n                            \n\n\n\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Business Type</label>\n                                <div class=\"loading_input\">\n                                <select formControlName=\"business_type\" class=\"form-control input_2\" [(ngModel)]=\"selected\" (ngModelChange)=\"selectedChanged()\">\n                                    <option disabled value=\"\">SELECT</option>\n                                    <option value=\"Restaurant\">Restaurant</option>\n                                    <option value=\"Home Kitchen\">Home Kitchen</option>\n                                    <option value=\"Caterers\">Caterers</option>\n                                    <option value=\"Shop\">Shop</option>\n                                    <option value=\"Others\">Others</option>\n                                </select>\n                                <div class=\"loading_input load_input\" *ngIf=\"business_type_tag !== ''\"></div>\n                             </div>\n                                <div *ngIf=\"submitted && f.business_type.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.business_type.errors.required\">Business type is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"business_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{business_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"business_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n                            <div class=\"ng-autocomplete form-group\" *ngIf=\"selected == 'Restaurant' || selected == 'Home Kitchen' || selected == 'Caterers'\">\n                                <label class=\"control-label text-white\">Cuisines</label>\n                                <div class=\"loading_input\">\n                                <ng-autocomplete \n                                  [data]=\"cuisine_cat\"\n                                  [searchKeyword]=\"keyword\"\n                                  (selected)='selectEvent($event)'\n                                  (inputChanged)='onChangeSearch($event)'\n                                  (inputFocused)='onFocused($event)'\n                                  [itemTemplate]=\"itemTemplate\"\n                                  [notFoundTemplate]=\"notFoundTemplate\"\n                                  formControlName=\"cuisine\"\n                                  placeholder = \"Select Cuisines\"\n                                  [(ngModel)]=\"profile_details.cuisine\"\n                                  >                                 \n                                </ng-autocomplete>\n                                <ng-template #itemTemplate let-item>\n                                <a [innerHTML]=\"item.name\"></a>\n                                </ng-template>\n                                <ng-template #notFoundTemplate let-notFound>\n                                <div [innerHTML]=\"notFound\"></div>\n                                </ng-template>\n                                <div class=\"loading_input load_input\" *ngIf=\"cuisine_cat_text !== ''\"></div>\n                                </div>\n                                </div>\n                                <div *ngIf=\"submitted && f.cuisine.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.cuisine.errors.required\">Cuisines is\n                                        required</div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"cuisine_cat_text !== ''\" style=\"margin-top: -16px;\">\n                                    <div class=\"row col-md-12\">\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                        background: #f8c333;\n                                        color: black;\">\n                                            {{cuisine_cat_text}} \n                                        </div>\n                                        <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                        background: #f8c333;\n                                        color: black;\" (click)=\"delete_cus()\">\n                                            x\n                                        </div>\n                                    </div>                                                \n                                </div>\n                                <div class=\"ng-autocomplete form-group\" *ngIf=\"selected == 'Shop' || selected == 'Others'\">\n                                    <label class=\"control-label text-white\">Category</label>\n                                    <div class=\"loading_input\">\n                                    <ng-autocomplete \n                                      [data]=\"category\"\n                                      [searchKeyword]=\"keyword\"\n                                      (selected)='selectEvent1($event)'\n                                      (inputChanged)='onChangeSearch($event)'\n                                      (inputFocused)='onFocused($event)'\n                                      [itemTemplate]=\"itemTemplate\"\n                                      [notFoundTemplate]=\"notFoundTemplate\"\n                                      formControlName=\"categorys\"\n                                      placeholder = \"Select Category\"\n                                      [(ngModel)]=\"profile_details.categorys\"\n                                      >                                 \n                                    </ng-autocomplete>\n                                    \n                                    <ng-template #itemTemplate let-item>\n                                    <a [innerHTML]=\"item.name\"></a>\n                                    </ng-template>\n                                    <ng-template #notFoundTemplate let-notFound>\n                                    <div [innerHTML]=\"notFound\"></div>\n                                    </ng-template>\n                                    <div class=\"loading_input load_input\" *ngIf=\"category_text !== ''\"></div>\n                                    </div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.categorys.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.categorys.errors.required\">category is\n                                            required</div>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"category_text !== ''\" style=\"margin-top: -16px;\">\n                                        <div class=\"row col-md-12\">\n                                            <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                            background: #f8c333;\n                                            color: black;\">\n                                                {{category_text}} \n                                            </div>\n                                            <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                            background: #f8c333;\n                                            color: black;\" (click)=\"delete_cat()\">\n                                                x\n                                            </div>\n                                        </div>                                                \n                                    </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">{{lable_text}}</label>\n                                <div class=\"loading_input\">\n                                <select formControlName=\"avg_meal_cost\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.profile_biz_avg_meal_cost\" (ngModelChange)=\"selectedChanged12()\">\n                                    <option disabled value=\"\">SELECT</option>\n                                    <ng-container *ngFor=\"let item of drop_down_value\">\n                                    <option value=\"{{item}}\">{{item}}</option>\n                                </ng-container>\n                                </select>\n                                <div class=\"loading_input load_input\" *ngIf=\"average_type_tag !== ''\"></div>\n                            </div>\n                                <div *ngIf=\"submitted && f.avg_meal_cost.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.avg_meal_cost.errors.required\">Average cost of meal is\n                                        required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"average_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{average_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"average_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Business Address</label>\n                                <div class=\"loading_input\">\n                                <input formControlName=\"address\"  class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" (ngModelChange)=\"bussiness_name_tag_actions()\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                                placeholder=\"Address\"  style=\"width: 100%;\" [(ngModel)]=\"address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\"\n                                (onAddressChange)=\"handleAddressChange($event)\" />\n                                <div class=\"loading_input load_input\" *ngIf=\"address_type_tag !== ''\"></div>\n                                 </div>\n                                 <div class=\"warning\" *ngIf=\"address_error\">\n                                    Invalid Address, Enter into {{country}} addres\n                                   </div>\n                                 <div *ngIf=\"submitted && f.address.errors\" class=\"warning\">\n                                     <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                                     <div *ngIf=\"f.address.errors.minlength\">Address must be 20 characters</div>\n                                 </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"address_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{address_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"address_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n\n                            <div class=\"loading_input\">\n                            <div class=\"form-group\" >\n                            <div class=\"perm_address\" style=\"border: 1px solid black;padding: 10px;\">\n                                <!-- Address Form Start -->\n                                <div class=\"panel pb-0 mb-0\">\n                                    <div class=\"panel-heading mb-0 pb-0\">\n                                        <div class=\"d-flex\"  data-toggle=\"collapse\" data-target=\"#Address\">\n                                            <div class=\"flx_1 pr-2\">\n                                                <h4 class=\"panel-title text-left\">Permanent address</h4>\n                                            </div>\n                                            <div class=\"flx_0 pr-2\">\n                                                <i class=\"fa fa-angle-down arrow_icon cursor-pointer\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"collapse\" id=\"Address\">\n                                        <div class=\"panel-body\">\n                            <div class=\"row\" >\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label text-white\">Address Line</label>  \n                                    <div class=\"loading_input\"> \n                                    <input type=\"text\" class=\"form-control input_2\"  [(ngModel)]=\"profile_details.address_postal\" formControlName=\"address_postal\" (keyup)=\"check_address()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address_postal.errors }\"\n                                        placeholder=\"Address Line 1\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.address_postal.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.address_postal.errors.required\">Address code is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\" style=\"padding: 15px;\">\n                                    <label class=\"control-label text-white\">City</label>  \n                                    <div class=\"loading_input\">\n                                    <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.city\" formControlName=\"city\" (keyup)=\"check_address()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\"\n                                        placeholder=\"City\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                    </div>\n\n                                    <div *ngIf=\"submitted && f.city.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.city.errors.required\">City is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <label class=\"control-label text-white\">State</label>  \n                                    <div class=\"loading_input\">\n                                    <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.state\"  formControlName=\"state\" (keyup)=\"check_address()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\"\n                                        placeholder=\"State\">\n                                        <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                    </div>\n\n\n\n                                    <div *ngIf=\"submitted && f.state.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.state.errors.required\">State is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <label class=\"control-label text-white\">Country</label>  \n                                    <div class=\"loading_input\">\n                                        <input type=\"text\" class=\"form-control input_2\" formControlName=\"country\" [disabled] [(ngModel)]=\"profile_details.country\" [(ngModel)]=\"country\" (keyup)=\"check_address()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"\n                                        placeholder=\"country\">\n                                          <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                        </div>\n                                    <div *ngIf=\"submitted && f.country.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.country.errors.required\">country is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <label class=\"control-label text-white\">Postal code</label>  \n                                    <div class=\"loading_input\">\n                                    <input type=\"text\" maxlength=\"6\" [(ngModel)]=\"profile_details.postal\"  class=\"form-control input_2\" formControlName=\"postal\" (keyup)=\"check_address()\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.postal.errors }\"\n                                        placeholder=\"Postal Code\">\n                                        <div class=\"warning\" *ngIf=\"postal_code_error\">\n                                            Invalid Postal code\n                                        </div>\n                                        <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                                    </div>\n\n                                    <div *ngIf=\"submitted && f.postal.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.postal.errors.required\">postal code is required</div>\n                                         <div *ngIf=\"f.postal.errors.maxlenth\">postal code max 5 characters</div>\n                                    </div>\n                                </div>\n                              \n                            </div>\n                                            <div class=\"text-right\">\n                                                <a class=\"btn\" style=\"background-color: gray;\" *ngIf=\"!done_button\">Done</a>\n                                                <a class=\"btn\" style=\"background-color: green;color: white;\" data-toggle=\"collapse\" data-target=\"#Address\" (click)=\"postal_address_check()\"  *ngIf=\"done_button\">Done</a>\n\n                                                <!-- <input type=\"button\"  value=\"Done\"> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- Address Form End -->\n                \n                \n                                <!-- Address View Start -->\n                    \n                            </div>\n                            </div>\n                            <div class=\"loading_input load_input\" *ngIf=\"postal_address !== ''\"></div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"postal_address !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                    <div class=\"col-md-12\" style=\"font-size: 15px;\n                                    font-weight: 700;\n                                    color: black;\n                                    padding: 10px;\">Permanent Address<span class=\"cursor-pointer\" style=\"\n                                    background: #f8c333;\n                                    float: right;\n                                    color: black;\" (click)=\"postal_address_delete()\">x</span></div>\n                                    <div class=\"col-md-12\" style=\" font-size: 18px;color: black;\">{{postal_address}}</div>\n                                    </div>\n                                    \n                                </div>                                                \n                            </div>\n                            <!-- Address View End -->\n\n\n                            <!-- <div class=\"row\" >\n                                <div class=\"col-md-12\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"address_postal\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address_postal.errors }\"\n                                        placeholder=\"Address Line 1\">\n                                    <div *ngIf=\"submitted && f.address_postal.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.address_postal.errors.required\">Address with postal code is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\" style=\"padding: 15px;\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"city\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\"\n                                        placeholder=\"City\">\n                                    <div *ngIf=\"submitted && f.city.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.city.errors.required\">City is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"state\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\"\n                                        placeholder=\"State\">\n                                    <div *ngIf=\"submitted && f.state.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.state.errors.required\">state is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"postal\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.postal.errors }\"\n                                        placeholder=\"Postal Code\">\n                                    <div *ngIf=\"submitted && f.postal.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.postal.errors.required\">postal code is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"  style=\"padding: 15px;\">\n                                    <input type=\"text\" class=\"form-control input_2\" formControlName=\"country\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"\n                                        placeholder=\"Country\">\n                                    <div *ngIf=\"submitted && f.country.errors\" class=\"warning\">\n                                        <div *ngIf=\"f.country.errors.required\">country is required</div>\n                                    </div>\n                                </div>\n                            </div> -->\n\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Landmark</label>\n                                <div class=\"loading_input\">\n\n                                <input type=\"text\" class=\"form-control input_2\" formControlName=\"address_landmark\" [(ngModel)]=\"profile_details.address_landmark\" (keyup)=\"bussiness_name_tag_actionss()\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.address_landmark.errors }\"\n                                    placeholder=\"Landmark\">\n                                    <div class=\"loading_input load_input\" *ngIf=\"landmark_type_tag !== ''\"></div>\n                                </div>\n                                <div *ngIf=\"submitted && f.address_landmark.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.address_landmark.errors.required\">Landmark is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"landmark_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{landmark_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"landmark_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n\n        \n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Do you have any existing service with us?</label>\n                                <div class=\"loading_input\">\n                                <select formControlName=\"existing_user\" class=\"form-control input_2\" [(ngModel)]=\"refer_value\" (ngModelChange)=\"selectedChanged1()\">\n                                    <option disabled value=\"\">SELECT</option>\n                                    <option value=\"Yes\">Yes</option>\n                                    <option value=\"No\">No</option>\n                                </select>\n                                <div class=\"loading_input load_input\" *ngIf=\"existing_type_tag !== ''\"></div>\n                                </div>\n                                <div *ngIf=\"submitted && f.existing_user.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.existing_user.errors.required\">Existing required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"existing_type_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{existing_type_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"existing_type()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n                            <div class=\"form-group\" *ngIf=\"refer_show\">\n                                <label class=\"control-label text-white\">Ref Eamil</label>\n                                <div class=\"loading_input\">\n                                <input type=\"text\" class=\"form-control input_2\"  [disabled] [(ngModel)]=\"profile_details.ref_email\" (keyup)=\"searchInterest()\" formControlName=\"ref_email\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.ref_email.errors }\"\n                                    placeholder=\"Ref Eamil\">\n                                    <div class=\"loading_input load_input\" *ngIf=\"ref_email_tag !== ''\"></div>\n                                    </div>\n                                    <div class=\"warning\" *ngIf=\"email_error\">\n                                        This email id not exist\n                                       </div>\n\n\n                                       <!-- <div class=\"warning\" *ngIf=\"email_error\">\n                                        This Email id not exist\n                                       </div> -->\n\n                                       <div class=\"warning\" *ngIf=\"email_empyt_error\">\n                                        Email should not be empty\n                                       </div>\n\n\n\n                                <div *ngIf=\"submitted && f.ref_email.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.ref_email.errors.required\">Ref Eamil is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"ref_email_tag !== ''\" style=\"margin-top: -16px;\" >\n                                <div class=\"row col-md-12\">\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px 10px;\n                                    background: #f8c333;\n                                    color: black;\">\n                                        {{ref_email_tag}} \n                                    </div>\n                                    <div class=\"cursor-pointer\" style=\"padding: 5px;\n                                    background: #f8c333;\n                                    color: black;\" (click)=\"ref_email()\" >\n                                        x\n                                    </div>\n                                </div>                                                \n                            </div>\n\n\n\n                            <div *ngIf=\"button_visible\">\n                                <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info w-100\">Submit</button>\n                            </div>\n                            <div *ngIf=\"!button_visible\">\n                                <button type=\"submit\" class=\"hide\">Submit</button>\n                            </div>\n\n\n\n                            \n                                <!-- <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info w-100\">Submit</button> -->\n\n                         \n                        </form>\n      \n      \n      \n      \n      \n                    </div>\n                  </div>\n        \n        \n        \n                  <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                      <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                          <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                              <div class=\"carousel-item active\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                              </div>\n        \n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">PASTRY</h4>\n                              </div>\n                              \n                              \n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                              </div>\n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">SERVICE</h4>\n                              </div>\n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">PASTRY</h4>\n                              </div>\n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                              </div>\n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                              </div>\n                              <div class=\"carousel-item\">\n                                  <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                                  <h4 class=\"text-center slider_info\">SHOPS</h4>\n                              </div>\n                             \n                              \n        \n                          </div>\n                      </div>\n                  </div>\n              </div>\n        \n          </div>\n        </section>\n        \n        <div class=\"footer_bg\">\n          <div class=\"wrapper_2\">\n              <div class=\"row\">\n                  <div class=\"col-lg-3 col-sm-6\">\n                      <div class=\"pt-4 pb-4\">\n                          <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                          <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n                      </div>                           \n                  </div>\n                  <div class=\"col-lg-3 col-sm-6\">\n                      <div class=\"pt-4 pb-4\">\n                          <h4>Support</h4>   \n                          <ul>\n                              <li>\n                                  <a href=\"#\">FAQ</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\">Terms & Conditions</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\">Customer Support</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\">Online Support</a>\n                              </li>\n                          </ul>\n                      </div>                           \n                  </div>\n                  <div class=\"col-lg-3 col-sm-6\">\n                      <div class=\"pt-4 pb-4\">\n                          <h4>Contact</h4>   \n                          <ul>\n                              <li>\n                                  +93 1541578\n                              </li>\n                              <li>\n                                  sample@gmail.com\n                              </li>\n                              <li>\n                                  sample addres heree\n                              </li>\n                             \n                          </ul>\n                      </div>                           \n                  </div>\n                  <div class=\"col-lg-3 col-sm-6 footer_social\">\n                      <div class=\"pt-4 pb-4\">\n                          <h4>Follow us</h4>   \n                          <ul>\n                              <li>\n                                  <a href=\"#\">\n                                      <i class=\"fa fa-facebook\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                      <i class=\"fa fa-instagram\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                      <i class=\"fa fa-youtube-play\"></i>\n                                  </a>   \n                              </li>\n                          </ul>\n                      </div>                           \n                  </div>\n              </div>\n          </div>\n        </div>\n        </div>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "bH2/":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js ***!
      \***********************************************************************************************/

    /*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */

    /***/
    function bH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
        return AutocompleteComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function () {
        return AutocompleteLibComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function () {
        return AutocompleteLibModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipe", function () {
        return HighlightPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete-lib.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["searchInput"];
      var _c1 = ["filteredListElement"];
      var _c2 = ["historyListElement"];

      function AutocompleteComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AutocompleteComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AutocompleteComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
        }
      }

      function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          $implicit: a0
        };
      };

      function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.select(item_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r14 = ctx_r21.index;
          var item_r13 = ctx_r21.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
        }
      }

      function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.select(item_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r14 = ctx_r26.index;
          var item_r13 = ctx_r26.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
        }
      }

      function AutocompleteComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
        }
      }

      function AutocompleteComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.resetHistoryList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
        }
      }

      function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.select(item_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r30 = ctx_r37.index;
          var item_r29 = ctx_r37.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
        }
      }

      function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.select(item_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r30 = ctx_r42.index;
          var item_r29 = ctx_r42.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
        }
      }

      function AutocompleteComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var idx_r30 = ctx.index;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.removeHistoryItem(idx_r30, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
        }
      }

      function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
        }
      }

      function AutocompleteComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.handleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "active": a0
        };
      };

      var _c5 = function _c5(a0, a1) {
        return {
          "is-hidden": a0,
          "is-visible": a1
        };
      };

      var AutocompleteLibComponent = /*#__PURE__*/function () {
        function AutocompleteLibComponent() {
          _classCallCheck(this, AutocompleteLibComponent);
        }
        /**
         * @return {?}
         */


        _createClass(AutocompleteLibComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AutocompleteLibComponent;
      }();

      AutocompleteLibComponent.ɵfac = function AutocompleteLibComponent_Factory(t) {
        return new (t || AutocompleteLibComponent)();
      };

      AutocompleteLibComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AutocompleteLibComponent,
        selectors: [["ng-autocomplete-lib"]],
        decls: 2,
        vars: 0,
        template: function AutocompleteLibComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " autocomplete-lib works! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      AutocompleteLibComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-autocomplete-lib',
            template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete/autocomplete.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Keyboard events
       * @type {?}
       */


      var isArrowUp =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowUp(keyCode) {
        return keyCode === 38;
      };

      var ɵ0 = isArrowUp;
      /** @type {?} */

      var isArrowDown =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowDown(keyCode) {
        return keyCode === 40;
      };

      var ɵ1 = isArrowDown;
      /** @type {?} */

      var isArrowUpDown =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowUpDown(keyCode) {
        return isArrowUp(keyCode) || isArrowDown(keyCode);
      };

      var ɵ2 = isArrowUpDown;
      /** @type {?} */

      var isEnter =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isEnter(keyCode) {
        return keyCode === 13;
      };

      var ɵ3 = isEnter;
      /** @type {?} */

      var isBackspace =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isBackspace(keyCode) {
        return keyCode === 8;
      };

      var ɵ4 = isBackspace;
      /** @type {?} */

      var isDelete =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isDelete(keyCode) {
        return keyCode === 46;
      };

      var ɵ5 = isDelete;
      /** @type {?} */

      var isESC =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isESC(keyCode) {
        return keyCode === 27;
      };

      var ɵ6 = isESC;
      /** @type {?} */

      var isTab =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isTab(keyCode) {
        return keyCode === 9;
      };

      var ɵ7 = isTab;

      var AutocompleteComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} renderer
         */
        function AutocompleteComponent(elementRef, renderer) {
          _classCallCheck(this, AutocompleteComponent);

          this.renderer = renderer;
          this.query = ''; // search query
          // search query

          this.filteredList = []; // list of items
          // list of items

          this.historyList = []; // list of history items
          // list of history items

          this.isHistoryListVisible = true;
          this.selectedIdx = -1;
          this.toHighlight = '';
          this.notFound = false;
          this.isFocused = false;
          this.isOpen = false;
          this.isScrollToEnd = false;
          this.overlay = false;
          this.manualOpen = undefined;
          this.manualClose = undefined; // @Inputs

          /**
           * Data of items list.
           * It can be array of strings or array of objects.
           */

          this.data = []; // keyword to filter the list

          this.placeholder = '';
          this.heading = '';
          /**
           * Heading text of history list.
           * If it is null then history heading is hidden.
           */

          this.historyHeading = 'Recently selected';
          this.historyListMaxNumber = 15; // maximum number of items in the history list.
          // maximum number of items in the history list.

          this.notFoundText = 'Not found'; // set custom text when filter returns empty result
          // input disable/enable

          /**
           * The minimum number of characters the user must type before a search is performed.
           */

          this.minQueryLength = 1;
          /**
           * Focus first item in the list
           */

          this.focusFirst = false; // @Output events

          /**
           * Event that is emitted whenever an item from the list is selected.
           */

          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted whenever an input is changed.
           */

          this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted whenever an input is focused.
           */

          this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted whenever an input is cleared.
           */

          this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is opened.
           */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is closed.
           */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Event that is emitted when scrolled to the end of items.
           */

          this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Propagates new value when model changes
           */

          this.propagateChange =
          /**
          * @return {?}
          */
          function () {};

          this.onTouched =
          /**
          * @return {?}
          */
          function () {};

          this.elementRef = elementRef;
        }
        /**
         * Writes a new value from the form model into the view,
         * Updates model
         * @param {?=} value
         * @return {?}
         */


        _createClass(AutocompleteComponent, [{
          key: "writeValue",
          value: function writeValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.query = value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
          }
          /**
           * Registers a handler that is called when something in the view has changed
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
          /**
           * Registers a handler specifically for when a control receives a touch event
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Event that is called when the value of an input element is changed
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange(event) {
            this.propagateChange(event.target.value);
          }
          /**
           * Event that is called when the control status changes to or from DISABLED
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.initEventStream();
            this.handleScroll();
          }
          /**
           * Set initial value
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setInitialValue",
          value: function setInitialValue(value) {
            if (this.initialValue) {
              this.select(value);
            }
          }
          /**
           * Update search results
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.setInitialValue(this.initialValue);

            if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
              this.handleItemsChange();

              if (!changes.data.firstChange && this.isFocused) {
                this.handleOpen();
              }
            }
          }
          /**
           * Items change
           * @return {?}
           */

        }, {
          key: "handleItemsChange",
          value: function handleItemsChange() {
            this.isScrollToEnd = false;

            if (!this.isOpen) {
              return;
            }

            this.filteredList = this.data;
            this.notFound = !this.filteredList || this.filteredList.length === 0; // Filter list when updating data and panel is open

            if (this.isOpen) {
              this.filterList();
            }
          }
          /**
           * Filter data
           * @return {?}
           */

        }, {
          key: "filterList",
          value: function filterList() {
            this.selectedIdx = -1;
            this.initSearchHistory();

            if (this.query != null && this.data) {
              this.toHighlight = this.query;
              this.filteredList = this.customFilter !== undefined ? this.customFilter(_toConsumableArray(this.data), this.query) : this.defaultFilterFunction(); // If [focusFirst]="true" automatically focus the first match

              if (this.filteredList.length > 0 && this.focusFirst) {
                this.selectedIdx = 0;
              }
            } else {
              this.notFound = false;
            }
          }
          /**
           * Default filter function, used unless customFilter is provided
           * @return {?}
           */

        }, {
          key: "defaultFilterFunction",
          value: function defaultFilterFunction() {
            var _this39 = this;

            return this.data.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(_this39.query.toLowerCase()) > -1;
              } else if (typeof item === 'object' && item instanceof Object) {
                // object logic, check property equality
                return item[_this39.searchKeyword].toLowerCase().indexOf(_this39.query.toLowerCase()) > -1;
              }
            });
          }
          /**
           * Check if item is a string in the list.
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "isTypeString",
          value: function isTypeString(item) {
            return typeof item === 'string';
          }
          /**
           * Select item in the list.
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(item) {
            var _this40 = this;

            this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
            this.isOpen = true;
            this.overlay = false;
            this.selected.emit(item);
            this.propagateChange(item);

            if (this.initialValue) {
              // check if history already exists in localStorage and then update

              /** @type {?} */
              var history = window.localStorage.getItem("".concat(this.historyIdentifier));

              if (history) {
                /** @type {?} */
                var existingHistory = JSON.parse(localStorage["".concat(this.historyIdentifier)]);
                if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

                if (!existingHistory.some(
                /**
                * @param {?} existingItem
                * @return {?}
                */
                function (existingItem) {
                  return !_this40.isTypeString(existingItem) ? existingItem[_this40.searchKeyword] == item[_this40.searchKeyword] : existingItem == item;
                })) {
                  existingHistory.unshift(item);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

                  if (existingHistory.length >= this.historyListMaxNumber) {
                    existingHistory.splice(existingHistory.length - 1, 1);
                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory));
                  }
                } else {
                  // if selected item exists in existingHistory swap to top in array
                  if (!this.isTypeString(item)) {
                    // object logic

                    /** @type {?} */
                    var copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

                    /** @type {?} */

                    var selectedIndex = copiedExistingHistory.map(
                    /**
                    * @param {?} el
                    * @return {?}
                    */
                    function (el) {
                      return el[_this40.searchKeyword];
                    }).indexOf(item[this.searchKeyword]);
                    copiedExistingHistory.splice(selectedIndex, 1);
                    copiedExistingHistory.splice(0, 0, item);
                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(copiedExistingHistory));
                  } else {
                    // string logic

                    /** @type {?} */
                    var _copiedExistingHistory = existingHistory.slice();

                    _copiedExistingHistory.splice(_copiedExistingHistory.indexOf(item), 1);

                    _copiedExistingHistory.splice(0, 0, item);

                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(_copiedExistingHistory));
                  }
                }
              } else {
                this.saveHistory(item);
              }
            } else {
              this.saveHistory(item);
            }

            this.handleClose();
          }
          /**
           * Document click
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "handleClick",
          value: function handleClick(e) {
            /** @type {?} */
            var clickedComponent = e.target;
            /** @type {?} */

            var inside = false;

            do {
              if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;

                if (this.filteredList.length) {
                  this.handleOpen();
                }
              }

              clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);

            if (!inside) {
              this.handleClose();
            }
          }
          /**
           * Handle body overlay
           * @return {?}
           */

        }, {
          key: "handleOverlay",
          value: function handleOverlay() {
            this.overlay = false;
          }
          /**
           * Scroll items
           * @return {?}
           */

        }, {
          key: "handleScroll",
          value: function handleScroll() {
            var _this41 = this;

            this.renderer.listen(this.filteredListElement.nativeElement, 'scroll',
            /**
            * @return {?}
            */
            function () {
              _this41.scrollToEnd();
            });
          }
          /**
           * Define panel state
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "setPanelState",
          value: function setPanelState(event) {
            if (event) {
              event.stopPropagation();
            } // If controls are untouched


            if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
              this.isOpen = false;
              this.handleOpen();
            } // If one of the controls is untouched and other is deactivated


            if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
              this.isOpen = false;
              this.handleOpen();
            } // if controls are touched but both are deactivated


            if (this.manualOpen === false && this.manualClose === false) {
              this.isOpen = false;
              this.handleOpen();
            } // if open control is touched and activated


            if (this.manualOpen) {
              this.isOpen = false;
              this.handleOpen();
              this.manualOpen = false;
            } // if close control is touched and activated


            if (this.manualClose) {
              this.isOpen = true;
              this.handleClose();
              this.manualClose = false;
            }
          }
          /**
           * Manual controls
           * @return {?}
           */

        }, {
          key: "open",
          value: function open() {
            this.manualOpen = true;
            this.isOpen = false;
            this.handleOpen();
          }
          /**
           * @return {?}
           */

        }, {
          key: "close",
          value: function close() {
            this.manualClose = true;
            this.isOpen = true;
            this.handleClose();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            this.handleFocus(event);
          }
          /**
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this.remove(event);
          }
          /**
           * Remove search query
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove(e) {
            e.stopPropagation();
            this.query = '';
            this.inputCleared.emit();
            this.propagateChange(this.query);
            this.setPanelState(e);

            if (this.data && !this.data.length) {
              this.notFound = false;
            }
          }
          /**
           * Initialize historyList search
           * @return {?}
           */

        }, {
          key: "initSearchHistory",
          value: function initSearchHistory() {
            this.isHistoryListVisible = false;

            if (this.historyIdentifier && !this.query) {
              /** @type {?} */
              var history = window.localStorage.getItem("".concat(this.historyIdentifier));

              if (history) {
                this.isHistoryListVisible = true;
                this.filteredList = [];
                this.historyList = history ? JSON.parse(history) : [];
              } else {
                this.isHistoryListVisible = false;
              }
            } else {
              this.isHistoryListVisible = false;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleOpen",
          value: function handleOpen() {
            if (this.isOpen || this.isOpen && !this.isLoading) {
              return;
            } // If data exists


            if (this.data && this.data.length) {
              this.isOpen = true;
              this.overlay = true;
              this.filterList();
              this.opened.emit();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleClose",
          value: function handleClose() {
            if (!this.isOpen) {
              this.isFocused = false;
              return;
            }

            this.isOpen = false;
            this.overlay = false;
            this.filteredList = [];
            this.selectedIdx = -1;
            this.notFound = false;
            this.isHistoryListVisible = false;
            this.isFocused = false;
            this.closed.emit();
          }
          /**
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "handleFocus",
          value: function handleFocus(e) {
            this.searchInput.nativeElement.focus();

            if (this.isFocused) {
              return;
            }

            this.inputFocused.emit(e); // if data exists then open

            if (this.data && this.data.length) {
              this.setPanelState(event);
            }

            this.isFocused = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollToEnd",
          value: function scrollToEnd() {
            if (this.isScrollToEnd) {
              return;
            }
            /** @type {?} */


            var scrollTop = this.filteredListElement.nativeElement.scrollTop;
            /** @type {?} */

            var scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
            /** @type {?} */

            var elementHeight = this.filteredListElement.nativeElement.clientHeight;
            /** @type {?} */

            var atBottom = scrollHeight === scrollTop + elementHeight;

            if (atBottom) {
              this.scrolledToEnd.emit();
              this.isScrollToEnd = true;
            }
          }
          /**
           * Initialize keyboard events
           * @return {?}
           */

        }, {
          key: "initEventStream",
          value: function initEventStream() {
            this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e;
            }));
            this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e;
            }));
            this.listenEventStream();
          }
          /**
           * Listen keyboard events
           * @return {?}
           */

        }, {
          key: "listenEventStream",
          value: function listenEventStream() {
            var _this42 = this;

            // key up event
            this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime)).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this42.onKeyUp(e);
            }); // cursor up & down

            this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isArrowUpDown(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              e.preventDefault();

              _this42.onFocusItem(e);
            }); // enter keyup

            this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isEnter(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {//this.onHandleEnter();
            }); // enter keydown

            this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isEnter(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this42.onHandleEnter();
            }); // ESC

            this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isESC(e.keyCode);
            }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this42.onEsc();
            }); // TAB

            this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isTab(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this42.onTab();
            }); // delete

            this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isBackspace(e.keyCode) || isDelete(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this42.onDelete();
            });
          }
          /**
           * on keyup == when input changed
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "onKeyUp",
          value: function onKeyUp(e) {
            this.notFound = false; // search results are unknown while typing
            // if input is empty

            if (!this.query) {
              this.notFound = false;
              this.inputChanged.emit(e.target.value);
              this.inputCleared.emit();
              this.setPanelState(e);
            } // note that '' can be a valid query


            if (!this.query && this.query !== '') {
              return;
            } // if query >= to minQueryLength


            if (this.query.length >= this.minQueryLength) {
              this.inputChanged.emit(e.target.value);
              this.filterList(); // If no results found

              if (!this.filteredList.length && !this.isLoading) {
                this.notFoundText ? this.notFound = true : this.notFound = false;
              }

              if (this.data && !this.data.length) {
                this.isOpen = true;
              }
            }
          }
          /**
           * Keyboard arrow top and arrow bottom
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "onFocusItem",
          value: function onFocusItem(e) {
            // move arrow up and down on filteredList or historyList
            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList

              /** @type {?} */
              var totalNumItem = this.filteredList.length;

              if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = this.selectedIdx === null ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              } else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                  this.selectedIdx = 0;
                }

                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              }
            } else {
              // historyList

              /** @type {?} */
              var _totalNumItem = this.historyList.length;

              if (e.key === 'ArrowDown') {
                /** @type {?} */
                var _sum = this.selectedIdx;
                _sum = this.selectedIdx === null ? 0 : _sum + 1;
                this.selectedIdx = (_totalNumItem + _sum) % _totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              } else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                  this.selectedIdx = 0;
                }

                this.selectedIdx = (_totalNumItem + this.selectedIdx - 1) % _totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              }
            }
          }
          /**
           * Scroll to focused item
           * * \@param index
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "scrollToFocusedItem",
          value: function scrollToFocusedItem(index) {
            /** @type {?} */
            var listElement = null; // Define list element

            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList element
              listElement = this.filteredListElement.nativeElement;
            } else {
              // historyList element
              listElement = this.historyListElement.nativeElement;
            }
            /** @type {?} */


            var items = Array.prototype.slice.call(listElement.childNodes).filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              if (node.nodeType === 1) {
                // if node is element
                return node.className.includes('item');
              } else {
                return false;
              }
            });

            if (!items.length) {
              return;
            }
            /** @type {?} */


            var listHeight = listElement.offsetHeight;
            /** @type {?} */

            var itemHeight = items[index].offsetHeight;
            /** @type {?} */

            var visibleTop = listElement.scrollTop;
            /** @type {?} */

            var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
            /** @type {?} */

            var targetPosition = items[index].offsetTop;

            if (targetPosition < visibleTop) {
              listElement.scrollTop = targetPosition;
            }

            if (targetPosition > visibleBottom) {
              listElement.scrollTop = targetPosition - listHeight + itemHeight;
            }
          }
          /**
           * Select item on enter click
           * @return {?}
           */

        }, {
          key: "onHandleEnter",
          value: function onHandleEnter() {
            // click enter to choose item from filteredList or historyList
            if (this.selectedIdx > -1) {
              if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
                this.saveHistory(this.filteredList[this.selectedIdx]);
                this.select(this.filteredList[this.selectedIdx]);
              } else {
                // historyList
                this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
                this.saveHistory(this.historyList[this.selectedIdx]);
                this.select(this.historyList[this.selectedIdx]);
              }
            }

            this.isHistoryListVisible = false;
            this.handleClose();
          }
          /**
           * Esc click
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc() {
            this.searchInput.nativeElement.blur();
            this.handleClose();
          }
          /**
           * Tab click
           * @return {?}
           */

        }, {
          key: "onTab",
          value: function onTab() {
            this.searchInput.nativeElement.blur();
            this.handleClose();
          }
          /**
           * Delete click
           * @return {?}
           */

        }, {
          key: "onDelete",
          value: function onDelete() {
            this.isOpen = true;
          }
          /**
           * Select item to save in localStorage
           * @param {?} selected
           * @return {?}
           */

        }, {
          key: "saveHistory",
          value: function saveHistory(selected) {
            var _this43 = this;

            if (this.historyIdentifier) {
              // check if selected item exists in historyList
              if (!this.historyList.some(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return !_this43.isTypeString(item) ? item[_this43.searchKeyword] == selected[_this43.searchKeyword] : item == selected;
              })) {
                this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList))); // check if items don't exceed max allowed number

                if (this.historyList.length >= this.historyListMaxNumber) {
                  this.historyList.splice(this.historyList.length - 1, 1);
                  this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList)));
                }
              } else {
                // if selected item exists in historyList swap to top in array
                if (!this.isTypeString(selected)) {
                  // object logic

                  /** @type {?} */
                  var copiedHistoryList = this.historyList.slice(); // copy original historyList array

                  /** @type {?} */

                  var selectedIndex = copiedHistoryList.map(
                  /**
                  * @param {?} item
                  * @return {?}
                  */
                  function (item) {
                    return item[_this43.searchKeyword];
                  }).indexOf(selected[this.searchKeyword]);
                  copiedHistoryList.splice(selectedIndex, 1);
                  copiedHistoryList.splice(0, 0, selected);
                  this.saveHistoryToLocalStorage(_toConsumableArray(copiedHistoryList));
                } else {
                  // string logic

                  /** @type {?} */
                  var _copiedHistoryList = this.historyList.slice();

                  _copiedHistoryList.splice(this.historyList.indexOf(selected), 1);

                  _copiedHistoryList.splice(0, 0, selected);

                  this.saveHistoryToLocalStorage(_toConsumableArray(_copiedHistoryList));
                }
              }
            }
          }
          /**
           * Save item in localStorage
           * @param {?} selected
           * @return {?}
           */

        }, {
          key: "saveHistoryToLocalStorage",
          value: function saveHistoryToLocalStorage(selected) {
            window.localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(selected));
          }
          /**
           * Remove item from localStorage
           * @param {?} index
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "removeHistoryItem",
          value: function removeHistoryItem(index, e) {
            e.stopPropagation();
            this.historyList = this.historyList.filter(
            /**
            * @param {?} v
            * @param {?} i
            * @return {?}
            */
            function (v, i) {
              return i !== index;
            });
            this.saveHistoryToLocalStorage(this.historyList);

            if (this.historyList.length == 0) {
              window.localStorage.removeItem("".concat(this.historyIdentifier));
              this.filterList();
            }
          }
          /**
           * Reset localStorage
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "resetHistoryList",
          value: function resetHistoryList(e) {
            e.stopPropagation();
            this.historyList = [];
            window.localStorage.removeItem("".concat(this.historyIdentifier));
            this.filterList();
          }
        }]);

        return AutocompleteComponent;
      }();

      AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
        return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AutocompleteComponent,
        selectors: [["ng-autocomplete"]],
        contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
          }
        },
        viewQuery: function AutocompleteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
          }
        },
        hostAttrs: [1, "ng-autocomplete"],
        hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
              return ctx.handleClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          data: "data",
          placeholder: "placeholder",
          heading: "heading",
          historyHeading: "historyHeading",
          historyListMaxNumber: "historyListMaxNumber",
          notFoundText: "notFoundText",
          minQueryLength: "minQueryLength",
          focusFirst: "focusFirst",
          disabled: "disabled",
          searchKeyword: "searchKeyword",
          initialValue: "initialValue",
          historyIdentifier: "historyIdentifier",
          isLoading: "isLoading",
          debounceTime: "debounceTime",
          customFilter: "customFilter",
          itemTemplate: "itemTemplate",
          notFoundTemplate: "notFoundTemplate"
        },
        outputs: {
          selected: "selected",
          inputChanged: "inputChanged",
          inputFocused: "inputFocused",
          inputCleared: "inputCleared",
          opened: "opened",
          closed: "closed",
          scrolledToEnd: "scrolledToEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AutocompleteComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 18,
        vars: 22,
        consts: [[1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], [1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], [1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
        template: function AutocompleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.query = $event;
            })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
              return ctx.onChange($event);
            })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
              return ctx.handleFocus($event);
            })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
              return ctx.onTouched($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]];
        },
        pipes: function pipes() {
          return [HighlightPipe];
        },
        styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"],
        encapsulation: 2
      });
      /** @nocollapse */

      AutocompleteComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      AutocompleteComponent.propDecorators = {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }],
        filteredListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filteredListElement']
        }],
        historyListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['historyListElement']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchKeyword: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyIdentifier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyHeading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyListMaxNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        debounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minQueryLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputFocused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputCleared: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrolledToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-autocomplete',
            template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return AutocompleteComponent;
              }),
              multi: true
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
              '(document:click)': 'handleClick($event)',
              'class': 'ng-autocomplete'
            },
            styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          historyHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          historyListMaxNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minQueryLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          focusFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputCleared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scrolledToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
          }],
          filteredListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filteredListElement']
          }],
          historyListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['historyListElement']
          }],
          searchKeyword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          historyIdentifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          debounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete/highlight.pipe.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var HighlightPipe = /*#__PURE__*/function () {
        function HighlightPipe() {
          _classCallCheck(this, HighlightPipe);
        }

        _createClass(HighlightPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} text
           * @param {?} search
           * @param {?=} searchKeyword
           * @return {?}
           */
          function transform(text, search, searchKeyword) {
            /** @type {?} */
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(
            /**
            * @param {?} t
            * @return {?}
            */
            function (t) {
              return t.length > 0;
            }).join('|');
            /** @type {?} */

            var regex = new RegExp(pattern, 'gi');

            if (!search) {
              return text;
            }

            if (searchKeyword) {
              /** @type {?} */
              var name = text[searchKeyword].replace(regex,
              /**
              * @param {?} match
              * @return {?}
              */
              function (match) {
                return "<b>".concat(match, "</b>");
              }); // copy original object

              /** @type {?} */

              var text2 = Object.assign({}, text); // set bold value into searchKeyword of copied object

              text2[searchKeyword] = name;
              return text2;
            } else {
              return search ? text.replace(regex,
              /**
              * @param {?} match
              * @return {?}
              */
              function (match) {
                return "<b>".concat(match, "</b>");
              }) : text;
            }
          }
        }]);

        return HighlightPipe;
      }();

      HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
        return new (t || HighlightPipe)();
      };

      HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "highlight",
        type: HighlightPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'highlight'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete-lib.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AutocompleteLibModule = function AutocompleteLibModule() {
        _classCallCheck(this, AutocompleteLibModule);
      };

      AutocompleteLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AutocompleteLibModule
      });
      AutocompleteLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AutocompleteLibModule_Factory(t) {
          return new (t || AutocompleteLibModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteLibModule, {
          declarations: function declarations() {
            return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
          },
          exports: function exports() {
            return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
            exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-ng-autocomplete.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-ng-autocomplete.js.map

      /***/

    },

    /***/
    "cZcD":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/bankdetailsedit/bankdetailsedit.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cZcD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content >\n  <!-- Header starts -->\n\n \n<div class=\"\" >\n  <section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/merchant_panel/dashboard\" class=\"pr-3\">Back</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-5\" *ngIf=\"otp_check\">\n                <div class=\"hr_right home_form_list\">\n                    <form>\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Enter Your OTP To Edit the Details</label>\n                    <div class=\"loading_input\">\n                      <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" [(ngModel)]=\"otp_value\" name=\"otp_value\" (keyup)=\"bussiness_name_tag_action()\"  placeholder=\"Enter Your OTP\">\n                      <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                      </div>\n                      <div class=\"warning\" *ngIf=\"otp_error\">\n                        {{otp_error_msg}}\n                       </div>\n                  </div>\n                  <div class=\"\">\n                    <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n                    <span style=\"text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n                  </div>\n                  <div style=\"margin-top: 10px;\">\n                      <button type=\"submit\" (click)=\"sumbitotp()\"   class=\"btn btn-info w-100\">Submit</button>\n                  </div>\n                  \n                </form>\n                </div>\n            </div>\n  \n  \n            <div class=\"col-md-5\" *ngIf=\"!otp_check\">\n              <div class=\"hr_right home_form_list\">\n               \n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <h4 class=\"text-white shadow_none pb-2\">\n                      Edit Bank Details\n                  </h4>\n\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label text-white\">Country</label>\n                            <select name=\"cars\" id=\"cars\" class=\"form-control input_2\" [disabled] name=\"country_codes\" [(ngModel)]=\"country_codes\" (ngModelChange)=\"proofchange()\" formControlName=\"country_code\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.country_code.errors }\"\n                            placeholder=\"\" >\n                            <ng-container *ngFor=\"let code of countrycode.country\">\n                                <option value=\"{{code.dial_code}}\">{{code.name}}</option>\n                            </ng-container>\n                              </select>\n                        </div>\n                    </div>\n                </div>\n\n                  <div class=\"form-group\">\n                      <label class=\"control-label text-white\">Bank Name</label>\n                      <div class=\"loading_input\">\n                      <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.bank_name\" formControlName=\"bank_name\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.bank_name.errors }\"\n                          placeholder=\"Bank Name\">\n                          </div>\n                      <div *ngIf=\"submitted && f.bank_name.errors\" class=\"warning\">\n                          <div *ngIf=\"f.bank_name.errors.required\">Bank Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"control-label text-white\">Bank A/C</label>\n                    <div class=\"loading_input\">\n                    <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.bank_acc_no\" formControlName=\"bank_ac\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.bank_ac.errors }\"\n                        placeholder=\"Bank A/c\">\n                        </div>\n                    <div *ngIf=\"submitted && f.bank_ac.errors\" class=\"warning\">\n                      <div *ngIf=\"f.bank_ac.errors.required\">Bank A/C is required</div>\n                      <div *ngIf=\"f.bank_ac.errors.minlength\">Bank A/C must be at least 6\n                          characters</div>\n                          <div *ngIf=\"f.bank_ac.errors.pattern\">Number Only</div>\n                          <div *ngIf=\"f.bank_ac.errors.maxlength\">Max 15\n                              characters</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label text-white\">Branch Name</label>\n                  <div class=\"loading_input\">\n                  <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.bank_branch\" formControlName=\"bank_branch\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.bank_branch.errors }\"\n                      placeholder=\"Branch Name\">\n                      </div>\n                  <div *ngIf=\"submitted && f.bank_branch.errors\" class=\"warning\">\n                      <div *ngIf=\"f.bank_branch.errors.required\">Branch Name is required</div>\n                  </div>\n              </div>\n                <div class=\"form-group\" *ngIf=\"ifsc_visible\">\n                  <label class=\"control-label text-white\">IFSC Code</label>\n                  <div class=\"loading_input\">\n                  <input type=\"text\" class=\"form-control input_2\" [(ngModel)]=\"profile_details.bank_ifsc_no\" formControlName=\"bank_ifsc\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.bank_ifsc.errors }\"\n                      placeholder=\"IFSC Code\">\n                      </div>\n                  <div *ngIf=\"submitted && f.bank_ifsc.errors\" class=\"warning\">\n                      <div *ngIf=\"f.bank_ifsc.errors.required\">IFSC Code is required</div>\n                  </div>\n              </div>\n                  <div>\n                      <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info w-100\">Update</button>\n                  </div>\n              </form>\n\n\n\n\n\n              </div>\n            </div>\n  \n  \n  \n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n  \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        \n                        \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n                       \n                        \n  \n                    </div>\n                </div>\n            </div>\n        </div>\n  \n    </div>\n  </section>\n  \n  <div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>   \n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n                       \n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>   \n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n        </div>\n    </div>\n  </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "eWMk":
    /*!*****************************************************************!*\
      !*** ./src/app/account/reset-password/reset-password.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function eWMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59Il19 */";
      /***/
    },

    /***/
    "ew6T":
    /*!***********************************************!*\
      !*** ./src/app/account/otp-fp/otp-fp.page.ts ***!
      \***********************************************/

    /*! exports provided: OtpFpPage */

    /***/
    function ew6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpFpPage", function () {
        return OtpFpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_fp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp-fp.page.html */
      "YExI");
      /* harmony import */


      var _otp_fp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp-fp.page.scss */
      "6TJd");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var OtpFpPage = /*#__PURE__*/function () {
        function OtpFpPage(storage, router, formBuilder, auth, toastr) {
          _classCallCheck(this, OtpFpPage);

          this.storage = storage;
          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.toastr = toastr;
          this.otp_load = false;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.submitted = false; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(OtpFpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.otpForm = this.formBuilder.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.otpForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this44 = this;

            this.otp_load = true;
            this.submitted = true; // stop here if form is invalid

            if (this.otpForm.invalid) {
              return;
            }

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var controls = this.otpForm.controls;
            var otpData = {
              user_id: reguser.user_id,
              otp: controls.otp.value
            };
            console.log(otpData);
            this.auth.verifypassword(otpData).subscribe(function (res) {
              console.log(res);
              _this44.otp_load = false; // this.storage.user = res.user;
              // this.storage.authToken = res.key.token;
              // this.toastr.successToastr('OTP Verified');

              _this44.router.navigateByUrl('/account/reset-password'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              // this.toastr.warningToastr(err);
              _this44.otp_error = true;
              _this44.otp_error_msg = err;
              _this44.otp_load = false; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this45 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this45.otp_error = true;
              _this45.otp_error_msg = res.message;
              _this45.otp_load = false; // this.toastr.warningToastr(res.message);
              // this.router.navigateByUrl('/my-cart');
            }, function (err) {
              _this45.otp_error_msg = err;
              _this45.otp_load = false; // this.notify.showError(err, "LOGIN");
            });
          }
        }]);

        return OtpFpPage;
      }();

      OtpFpPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }];
      };

      OtpFpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp-fp',
        template: _raw_loader_otp_fp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_fp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpFpPage);
      /***/
    },

    /***/
    "gJDA":
    /*!********************************************************************!*\
      !*** ./src/app/account/changepassword/changepassword.component.ts ***!
      \********************************************************************/

    /*! exports provided: ChangepasswordComponent */

    /***/
    function gJDA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function () {
        return ChangepasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./changepassword.component.html */
      "NUUe");
      /* harmony import */


      var _changepassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./changepassword.component.scss */
      "VTd9");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var ChangepasswordComponent = /*#__PURE__*/function () {
        function ChangepasswordComponent(storage, router, toastr, formBuilder, auth) {
          _classCallCheck(this, ChangepasswordComponent);

          this.storage = storage;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.otp_check = true;
          this.otp_load = false;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.otp_value = '';
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
          this.pass_looad = false;
          this.pass_error = false; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(ChangepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
            this.resend_otp();
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.resetpswdForm = this.formBuilder.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
              cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.resetpswdForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this46 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.resetpswdForm.invalid) {
              return;
            }

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var controls = this.resetpswdForm.controls;
            var pswdData = {
              password: controls.password.value,
              user_id: reguser.user_id
            };
            this.auth.resetpassword(pswdData).subscribe(function (res) {
              console.log(res); // this.toastr.successToastr("Password Changed Successfully");

              _this46.router.navigateByUrl("merchant_panel/dashboard"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              _this46.toastr.warningToastr(err); // this.notify.showError(err, "LOGIN");

            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this47 = this;

            this.pass_looad = true;
            var controls = this.resetpswdForm.controls;
            var wordSearch = controls.cpassword.value;
            setTimeout(function () {
              if (wordSearch == controls.cpassword.value) {
                if (controls.cpassword.value) {
                  console.log(controls.cpassword.value);

                  _this47.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this48 = this;

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var controls = this.resetpswdForm.controls;
            var authData = {
              email: reguser.email,
              password: controls.cpassword.value
            };
            this.auth.login(authData).subscribe(function (res) {
              console.log(res);
              _this48.pass_looad = false;
              _this48.pass_error = false;
            }, function (err) {
              console.log(err);
              _this48.pass_looad = false;
              _this48.pass_error = true;
            });
          }
        }, {
          key: "sumbitotp",
          value: function sumbitotp() {
            var _this49 = this;

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE)); // const controls = this.otpForm.controls;

            console.log(this.otp_value);
            var otpData = {
              user_id: reguser.user_id,
              otp: this.otp_value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this49.otp_load = false;
              _this49.otp_error = true;
              _this49.otp_check = false; // this.toastr.successToastr('OTP Verified');
              // this.router.navigateByUrl('/account/register');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this49.otp_error = true;
              _this49.otp_load = false;
              _this49.otp_check = true;
              _this49.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this50 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this50.otp_error = true;
              _this50.otp_error_msg = res.message;
              _this50.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this51 = this;

            setTimeout(function () {
              _this51.otp_error = false;
              _this51.otp_error_msg = "";
              _this51.otp_load = false;
            }, 1000);
          }
        }]);

        return ChangepasswordComponent;
      }();

      ChangepasswordComponent.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      ChangepasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-changepassword',
        template: _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_changepassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChangepasswordComponent);
      /***/
    },

    /***/
    "j+S6":
    /*!*****************************************************!*\
      !*** ./src/app/common/loader/loader.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function jS6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Loading css start */\n.loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n.spinner {\n  position: relative;\n  width: 150px;\n  height: 150px;\n}\n.spinner {\n  transform: scale(0.45);\n}\n.spinner-4 img {\n  height: 100px;\n}\n.spinner:before, .spinner:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-width: 2px;\n  border-style: dashed;\n  border-radius: 50%;\n}\n.spinner.spinner-4:before {\n  width: 142px;\n  height: 142px;\n  border-color: #ffffff;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner.spinner-4:after {\n  background: url('logo-loading-3.png') no-repeat left top/cover;\n  display: block;\n  border: 0px;\n  top: 50.5px;\n  top: 54px;\n  left: -17px;\n  overflow: hidden;\n  transform-origin: 88px;\n  -webkit-animation: rotate 3s linear 0s infinite;\n  animation: rotate 3s linear 0s infinite;\n  width: 40px;\n  height: 40px;\n}\n.loading2 .spinner.spinner-4:before {\n  border-color: #fdc701;\n}\n.loading2 .spinner.spinner-4:after {\n  background: url('logo-loading-2.png') no-repeat left top/cover;\n}\n/* Loading css end */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxzQkFBQTtBQUNBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBRDtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDQyxzQkFBQTtBQUNEO0FBRUE7RUFDQyxhQUFBO0FBQ0Q7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0U7SUFFVSx1QkFBQTtFQUdWO0VBREE7SUFFVSx5QkFBQTtFQUdWO0FBQ0Y7QUFEQTtFQUNFO0lBRVUsdUJBQUE7RUFHVjtFQURBO0lBRVUseUJBQUE7RUFHVjtBQUNGO0FBQ0E7RUFDQyw4REFBQTtFQUNELGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNBO0FBQ0E7RUFDQyxxQkFBQTtBQUVEO0FBQUE7RUFDQyw4REFBQTtBQUdEO0FBREEsb0JBQUEiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBMb2FkaW5nIGNzcyBzdGFydCAqL1xuLmxvYWRpbmd7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR0b3A6MDtcblx0bGVmdDowO1xuXHRyaWdodDowO1xuXHRib3R0b206MDtcblx0ei1pbmRleDo5OTk5O1xuXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcbn1cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zcGlubmVye1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuNDUpO1xufVxuXG4uc3Bpbm5lci00IGltZ3tcblx0aGVpZ2h0OiAxMDBweDtcbn1cbi5zcGlubmVyOmJlZm9yZSwuc3Bpbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNwaW5uZXIuc3Bpbm5lci00OmJlZm9yZSB7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAxNDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbi5zcGlubmVyLnNwaW5uZXItNDphZnRlciB7XG4gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tbG9hZGluZy0zLnBuZycpIG5vLXJlcGVhdCBsZWZ0IHRvcCAvIGNvdmVyO1xuZGlzcGxheTogYmxvY2s7XG5ib3JkZXI6IDBweDtcbnRvcDogNTAuNXB4O1xudG9wOiA1NHB4O1xubGVmdDogLTE3cHg7XG5vdmVyZmxvdzogaGlkZGVuO1xuLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA4OHB4O1xudHJhbnNmb3JtLW9yaWdpbjogODhweDtcbi13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgM3MgbGluZWFyIDBzIGluZmluaXRlO1xuYW5pbWF0aW9uOiByb3RhdGUgM3MgbGluZWFyIDBzIGluZmluaXRlO1xud2lkdGg6IDQwcHg7XG5oZWlnaHQ6IDQwcHg7XG59XG4ubG9hZGluZzIgLnNwaW5uZXIuc3Bpbm5lci00OmJlZm9yZSB7XG5cdGJvcmRlci1jb2xvcjogI2ZkYzcwMTtcbn1cbi5sb2FkaW5nMiAuc3Bpbm5lci5zcGlubmVyLTQ6YWZ0ZXJ7XG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWxvYWRpbmctMi5wbmcnKSBuby1yZXBlYXQgbGVmdCB0b3AgLyBjb3Zlcjtcbn1cbi8qIExvYWRpbmcgY3NzIGVuZCAqL1xuIl19 */";
      /***/
    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.page */
      "34af");
      /* harmony import */


      var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.page */
      "3i6a");
      /* harmony import */


      var _register_register_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./register/register.page */
      "nK45");
      /* harmony import */


      var _otp_otp_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./otp/otp.page */
      "soYB");
      /* harmony import */


      var _otp_fp_otp_fp_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./otp-fp/otp-fp.page */
      "ew6T");
      /* harmony import */


      var _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./reset-password/reset-password.page */
      "v2+T");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/loader/loader.component */
      "JFVA");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "bH2/");
      /* harmony import */


      var _registeredit_registeredit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./registeredit/registeredit.component */
      "/gQH");
      /* harmony import */


      var _bankdetailsedit_bankdetailsedit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./bankdetailsedit/bankdetailsedit.component */
      "KSrU");
      /* harmony import */


      var _homeedit_homeedit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./homeedit/homeedit.component */
      "38zf");
      /* harmony import */


      var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./changepassword/changepassword.component */
      "gJDA");
      /* harmony import */


      var _verifcationotp_verifcationotp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./verifcationotp/verifcationotp.component */
      "Ij2c");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_16__["AutocompleteLibModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
        }), ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__["GooglePlaceModule"]],
        declarations: [_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountPage"], _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordPage"], _register_register_page__WEBPACK_IMPORTED_MODULE_9__["RegisterPage"], _otp_otp_page__WEBPACK_IMPORTED_MODULE_10__["OtpPage"], _otp_fp_otp_fp_page__WEBPACK_IMPORTED_MODULE_11__["OtpFpPage"], _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordPage"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"], _registeredit_registeredit_component__WEBPACK_IMPORTED_MODULE_17__["RegistereditComponent"], _bankdetailsedit_bankdetailsedit_component__WEBPACK_IMPORTED_MODULE_18__["BankdetailseditComponent"], _homeedit_homeedit_component__WEBPACK_IMPORTED_MODULE_19__["HomeeditComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__["ChangepasswordComponent"], _verifcationotp_verifcationotp_component__WEBPACK_IMPORTED_MODULE_21__["VerifcationotpComponent"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "lgTk":
    /*!*******************************************************************!*\
      !*** ./src/app/account/forgot-password/forgot-password.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function lgTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUU7RUFDSSxlQUFBO0FBR04iLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2FkaW5nX2lucHV0e1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB9XG4gIC5sb2FkX2lucHV0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogOHB4O1xuICB9XG4gIC5jdXJzb3ItcG9pbnRlcntcbiAgICAgIGN1cnNvcjpwb2ludGVyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "lqFJ":
    /*!**********************************************************************!*\
      !*** ./src/app/account/verifcationotp/verifcationotp.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function lqFJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".default {\n  cursor: default;\n}\n\n.warning {\n  background: gainsboro;\n  color: red !important;\n  padding: 7px;\n  font-size: 12px;\n}\n\n.loading_input {\n  position: relative;\n}\n\n.load_input {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmY2F0aW9ub3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZUFBQTtBQUVWOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRixTQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFFO0VBQ0ksZUFBQTtBQUdOIiwiZmlsZSI6InZlcmlmY2F0aW9ub3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlZmF1bHQge2N1cnNvcjogZGVmYXVsdDt9XG5cbi53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cblxuXG4ubG9hZGluZ19pbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAubG9hZF9pbnB1dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgfVxuICAuY3Vyc29yLXBvaW50ZXJ7XG4gICAgICBjdXJzb3I6cG9pbnRlclxuICB9Il19 */";
      /***/
    },

    /***/
    "nK45":
    /*!***************************************************!*\
      !*** ./src/app/account/register/register.page.ts ***!
      \***************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function nK45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "O8bK");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "NbaP");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/_core/services/profile.service */
      "JYRz");
      /* harmony import */


      var _app_countrycode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../app/countrycode */
      "TejZ");
      /* harmony import */


      var _assets_xlsxtojson__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../assets/xlsxtojson */
      "isj8");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(storage, router, profileservice, toastr, formBuilder, auth, apiloader, countrycode, City_list) {
          _classCallCheck(this, RegisterPage);

          this.storage = storage;
          this.router = router;
          this.profileservice = profileservice;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.apiloader = apiloader;
          this.countrycode = countrycode;
          this.City_list = City_list;
          this.options = {
            types: [],
            componentRestrictions: {
              country: 'IN'
            }
          };
          this.button_visible = true;
          this.loader = true;
          this.lable_text = 'Average cost of food per person';
          this.postal_code_error = false;
          this.zoom = 8;
          this.base_lat = 11.1271;
          this.base_lng = 78.6569;
          this.location_lat = 11.1271;
          this.location_lng = 78.6569; // Latitude : any;

          this.Location_list = [];
          this.location_type = "Home";
          this.old_default_id = "";
          this.refer_show = false;
          this.refer_value = '';
          this.selected = "";
          this.proof_type = "";
          this.address_error = false;
          this.country = "";
          this.proof_attach = false;
          this.country_code_price = [{
            country_code: "+65",
            country_code_price: ['$ 1 - $ 10', '$ 10 - $ 20', '$ 20 - $ 30', '$ 30 - $ 40', '$ 40 - $ 50']
          }, {
            country_code: "+60",
            country_code_price: ['RM 1 - RM 10', 'RM 10 - RM 20', 'RM 20 - RM 30', 'RM 30 - RM 40', 'RM 40 - RM 50']
          }, {
            country_code: "+91",
            country_code_price: ['₹ 1 - ₹ 10', '₹ 10 - ₹ 20', '₹ 20 - ₹ 30', '₹ 30 - ₹ 40', '₹ 40 - ₹ 50']
          }];
          this.cuisine_cat_text = '';
          this.category_text = '';
          this.cuisine_cat = [];
          this.category = [];
          this.keyword = 'name';
          this.data = [];
          this.drop_down_value = [];
          this.submitted = false;
          this.map_view = false;
          this.address_view = false;
          this.email_error = false;
          this.doc_attach = false;
          this.doc_error_1 = false;
          this.doc_error_2 = false;
          this.email_empyt_error = false; /////////

          this.bussiness_name_tag = '';
          this.proof_type_tag = '';
          this.attached_tag = '';
          this.proof2_type_tag = '';
          this.business_type_tag = '';
          this.average_type_tag = '';
          this.restaurant_type_tag = '';
          this.address_type_tag = '';
          this.postal_address = '';
          this.landmark_type_tag = '';
          this.existing_type_tag = '';
          this.ref_email_tag = '';
          this.done_button = false;
          this.country_name_list = [];
          this.state_name_list = [];
          this.city_name_list = [];
          this.p_country_name_list = [];
          this.p_state_name_list = [];
          this.p_city_name_list = [];
          this.p_country_name = '';
          this.p_state_name = '';
          this.p_city_name = '';
          this.pp_country_name = '';
          this.pp_state_name = '';
          this.pp_city_name = ''; // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }

          this.cuisine_cat = [];
          this.category = [];
          this.category = this.City_list.sheet2;
          this.cuisine_cat = this.City_list.sheet1;
        }

        _createClass(RegisterPage, [{
          key: "handleAddressChange",
          value: function handleAddressChange(address) {
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
            this.Search_text = this.address;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            this.profileservice.profile_view(reguser.profile_id).subscribe(function (res) {
              console.log(res);
              var code = res.profile_contact.split("-");
              console.log(code[0]);

              if (code[0] == "+65") {
                _this52.country = "Singapore";
                _this52.p_country_name = "SINGAPORE";
              } else if (code[0] == "+60") {
                _this52.country = "Malaysia";
                _this52.p_country_name = "MALAYSIA";
              } else if (code[0] == "+91") {
                _this52.country = "India";
                _this52.p_country_name = "INDIA";
              }
            });
            this.country_name_list = [];
            this.state_name_list = [];
            this.city_name_list = [];
            this.auth.list_county().subscribe(function (res) {
              console.log("Inserted", res.rows);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].country_name
                };

                _this52.country_name_list.push(u);

                _this52.p_country_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            }); //  this.auth.list_state().subscribe(res => {
            //   console.log("Inserted",res.rows);
            //   let temp = res.rows;
            //   for(let d = 0 ; d < temp.length; d ++){
            //     let u = {
            //       id: d,
            //       name: temp[d].state_name
            //     }
            //     this.state_name_list.push(u);
            //     this.p_state_name_list.push(u);
            //   } 
            //  }, err => {
            //    console.log(err);
            //  });

            this.auth.list_city().subscribe(function (res) {
              console.log("Inserted", res.rows);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].city_name
                };

                _this52.city_name_list.push(u);

                _this52.p_city_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            });
            this.proofchange();
            this.initForm();
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var merchant_detail = this.storage.merchant_detail;
            console.log(merchant_detail);
            var code = merchant_detail.contactno.split("-", 2);
            console.log(code[0]);

            for (var a = 0; a < this.country_code_price.length; a++) {
              if (this.country_code_price[a].country_code == code[0]) {
                this.drop_down_value = this.country_code_price[a].country_code_price;
              }
            }

            this.loader = false;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            console.log(this.country);
            this.registerForm = this.formBuilder.group({
              business_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              business_proof_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              idprofileone: [''],
              idprofiletwo: [''],
              business_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              avg_meal_cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(20)]],
              address_postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)]],
              country: [this.country ? this.country : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address_landmark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              existing_user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              cuisine: [''],
              categorys: [''],
              ref_email: [''],
              temp_location: [''],
              temp_country: [''],
              temp_state: [''],
              temp_city: ['']
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            } else {
              var controls = this.registerForm.controls;
              console.log(this.idprofileone);
              console.log(this.idprofiletwo);
              var check_status = true;
              this.doc_error_2 = false;
              this.doc_error_1 = false;
              this.email_empyt_error = false;

              if (this.proof_type == 'None (Activate Account, once done verification call from us)') {
                if (this.idprofiletwo == undefined) {
                  // this.toastr.warningToastr('Add the file');
                  this.doc_error_2 = true;
                  check_status = false;
                }
              }

              if (this.proof_type !== 'None (Activate Account, once done verification call from us)') {
                if (this.idprofileone == undefined || this.idprofiletwo == undefined) {
                  // this.toastr.warningToastr('Add the file');
                  this.doc_error_1 = true;
                  this.doc_error_2 = true;
                  check_status = false;
                }
              }

              if (this.refer_value == 'Yes' && controls.ref_email.value == '') {
                // this.toastr.warningToastr('Fill ref email id');
                this.email_empyt_error = true;
                check_status = false;
              }

              if (check_status == true) {
                this.view_address_view();
              }
            }
          }
        }, {
          key: "submit_data",
          value: function submit_data() {
            var _this53 = this;

            console.log(this.registerForm.invalid);
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var controls = this.registerForm.controls;
            var registerData = {
              business_name: controls.business_name.value,
              business_proof_type: controls.business_proof_type.value,
              idprofileone: controls.idprofileone.value,
              idprofiletwo: controls.idprofiletwo.value,
              business_type: controls.business_type.value,
              avg_meal_cost: controls.avg_meal_cost.value,
              address: controls.address.value,
              address_postal: controls.address_postal.value,
              city: controls.city.value,
              state: controls.state.value,
              postal: controls.postal.value,
              country: controls.country.value,
              address_landmark: controls.address_landmark.value,
              ref_email: controls.ref_email.value,
              cuisine: controls.cuisine.value.name,
              categorys: controls.categorys.value,
              location_lat: this.Latitude,
              location_lng: this.Longitude,
              profile_id: reguser.profile_id,
              p_country_name: this.p_country_name.name,
              p_state_name: this.p_state_name.name,
              p_city_name: this.p_city_name.name
            };
            console.log(registerData);
            this.auth.register(registerData).subscribe(function (res) {
              console.log(res); // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
              // this.toastr.successToastr('Registered Succesfully');

              _this53.router.navigateByUrl("/loginpage"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {// this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "selectImgidprofileone",
          value: function selectImgidprofileone(event) {
            this.idprofileone = event.target.files[0];
            this.idprofileoneuploadImg();
          }
        }, {
          key: "idprofileoneuploadImg",
          value: function idprofileoneuploadImg() {
            var _this54 = this;

            this.loader = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));

            if (this.idprofileone) {
              this.profileservice.idprofileone(reguser.profile_id, this.idprofileone).subscribe(function (res) {
                console.log(res);
                _this54.attached_tag = "" + _this54.idprofileone.name;
                _this54.loader = false; // this.router.navigateByUrl('dashboard');
                // this.notify.showSuccess("Logged in successfully", "LOGIN");
              }, function (err) {// this.notify.showError(err, "LOGIN");
              });
            } else {
              alert('Select Image');
            }
          }
        }, {
          key: "selectImgidprofiletwo",
          value: function selectImgidprofiletwo(event) {
            this.idprofiletwo = event.target.files[0];
            this.idprofiletwouploadImg();
          }
        }, {
          key: "idprofiletwouploadImg",
          value: function idprofiletwouploadImg() {
            var _this55 = this;

            this.loader = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));

            if (this.idprofiletwo) {
              this.profileservice.idprofiletwo(reguser.profile_id, this.idprofiletwo).subscribe(function (res) {
                console.log(res);
                _this55.loader = false;
                _this55.proof2_type_tag = "" + _this55.idprofiletwo.name;
              }, function (err) {});
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
          key: "markerDragEnd",
          value: function markerDragEnd($event) {
            var _this56 = this;

            this.location_lat = Number($event.coords.lat);
            this.location_lng = Number($event.coords.lng);
            this.base_lat = this.location_lat;
            this.base_lng = this.location_lng;
            this.Latitude = this.location_lat;
            this.Longitude = this.location_lng;
            this.profileservice.location_details(this.location_lat, this.location_lng).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this56, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return data['results'][0]['formatted_address'];

                      case 2:
                        this.address = _context2.sent;
                        _context2.next = 5;
                        return data['results'][0]['formatted_address'];

                      case 5:
                        this.Search_text = _context2.sent;

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "selectedChanged",
          value: function selectedChanged() {
            console.log(this.selected);
            this.business_type_tag = this.selected;

            if (this.selected == 'Restaurant' || this.selected == 'Home Kitchen' || this.selected == 'Caterers') {
              this.lable_text = 'Average cost of food per person';
              this.cuisine_cat_text = '';
              this.category_text = '';
            }

            if (this.selected == 'Others' || this.selected == 'Shop') {
              this.lable_text = 'Average cost of product';
              this.cuisine_cat_text = '';
              this.category_text = '';
            }
          }
        }, {
          key: "selectedChanged1",
          value: function selectedChanged1() {
            console.log(this.refer_value);
            this.ref_email_tag = '';
            this.existing_type_tag = this.refer_value;

            if (this.refer_value == 'No') {
              this.refer_show = false;
              this.button_visible = true;
            }

            if (this.refer_value == 'Yes') {
              this.refer_show = true;
              this.button_visible = false;
            }

            this.email_error = false;
          }
        }, {
          key: "selectEvent",
          value: function selectEvent(item) {
            console.log(item);
            this.cuisine_cat_text = item.name; // do something with selected item
          }
        }, {
          key: "selectEvent1",
          value: function selectEvent1(item) {
            console.log(item);
            this.category_text = item.name; // do something with selected item
          }
        }, {
          key: "onChangeSearch",
          value: function onChangeSearch(val) {
            console.log(val); // fetch remote data from here
            // And reassign the 'data' which is binded to 'data' property.
          }
        }, {
          key: "onFocused",
          value: function onFocused(e) {
            console.log(e); // do something when input is focused
          }
        }, {
          key: "delete_cus",
          value: function delete_cus() {
            this.cuisine_cat_text = '';
          }
        }, {
          key: "delete_cat",
          value: function delete_cat() {
            this.category_text = '';
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.clear();
            window.location.reload();
          }
        }, {
          key: "proofchange",
          value: function proofchange() {
            this.doc_attach = false;
            this.proof_type_tag = this.proof_type;
            console.log(this.proof_type);

            if (this.proof_type !== 'None (Activate Account, once done verification call from us)') {
              this.proof_attach = true;
              this.doc_attach = true;
            }

            if (this.proof_type == 'None (Activate Account, once done verification call from us)') {
              this.proof_attach = false;
              this.doc_attach = true;
            }

            if (this.proof_type == '') {
              this.proof_attach = false;
              this.doc_attach = false;
            }
          }
        }, {
          key: "searchInterest",
          value: function searchInterest() {
            var _this57 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.ref_email.value;
            setTimeout(function () {
              if (wordSearch == controls.ref_email.value) {
                if (controls.ref_email.value) {
                  console.log(controls.ref_email.value);
                  _this57.ref_email_tag = controls.ref_email.value;

                  _this57.checkemail(); //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 2000);
          }
        }, {
          key: "checkemail",
          value: function checkemail() {
            var _this58 = this;

            var controls = this.registerForm.controls;
            var Data = {
              email: controls.ref_email.value
            };
            this.auth.checkemail(Data).subscribe(function (res) {
              _this58.email_error = false;
              _this58.button_visible = true; // this.toastr.successToastr('This Email id already Registerd');
              // this.notify.showSuccess("Logged in successfully", "LOGIN");
            }, function (err) {
              console.log(err);
              _this58.email_error = true;
              _this58.button_visible = false; // this.toastr.warningToastr('This Email id already Registerd');
              // this.toastr.warningToastr(err);
              // this.notify.showError(err, "LOGIN");
            });
          } ////Tag Action////////

        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this59 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.business_name.value;
            setTimeout(function () {
              if (wordSearch == controls.business_name.value) {
                if (controls.business_name.value) {
                  console.log(controls.business_name.value);
                  _this59.bussiness_name_tag = controls.business_name.value; //função que irá retornar sua lista de objetos
                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "bussiness_name_tag_actions",
          value: function bussiness_name_tag_actions() {
            var _this60 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address.value;
            setTimeout(function () {
              if (wordSearch == controls.address.value) {
                if (controls.address.value) {
                  console.log(controls.address.value);
                  _this60.address_type_tag = controls.address.value;
                  console.log(_this60.country);

                  _this60.country.toLowerCase();

                  var str = _this60.address_type_tag;

                  if (str.indexOf(_this60.country) !== -1) {
                    // alert("Not again");
                    _this60.address_error = false;
                  } else {
                    _this60.address_error = true;
                    _this60.address = '';
                    _this60.address_type_tag = '';
                  } //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "bussiness_name_tag_actionss",
          value: function bussiness_name_tag_actionss() {
            var _this61 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address_landmark.value;
            setTimeout(function () {
              if (wordSearch == controls.address_landmark.value) {
                if (controls.address_landmark.value) {
                  console.log(controls.address_landmark.value);
                  _this61.landmark_type_tag = controls.address_landmark.value; //função que irá retornar sua lista de objetos
                } else {//code here
                  }
              }
            }, 1000);
          }
        }, {
          key: "delete_buss_name",
          value: function delete_buss_name() {
            this.bussiness_name_tag = '';
          }
        }, {
          key: "selectedChanged12",
          value: function selectedChanged12() {
            var controls = this.registerForm.controls;
            this.average_type_tag = controls.avg_meal_cost.value;
          }
        }, {
          key: "proof_type_tags",
          value: function proof_type_tags() {
            this.proof_type_tag = '';
          }
        }, {
          key: "delete_attached",
          value: function delete_attached() {
            this.attached_tag = '';
          }
        }, {
          key: "proof2_type",
          value: function proof2_type() {
            this.proof2_type_tag = '';
          }
        }, {
          key: "business_type",
          value: function business_type() {
            this.business_type_tag = '';
          }
        }, {
          key: "average_type",
          value: function average_type() {
            this.average_type_tag = '';
          }
        }, {
          key: "address_type",
          value: function address_type() {
            this.address_type_tag = '';
          }
        }, {
          key: "landmark_type",
          value: function landmark_type() {
            this.landmark_type_tag = '';
          }
        }, {
          key: "existing_type",
          value: function existing_type() {
            this.existing_type_tag = '';
          }
        }, {
          key: "ref_email",
          value: function ref_email() {
            this.ref_email_tag = '';
          }
        }, {
          key: "check_address",
          value: function check_address() {
            var _this62 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address_postal.value;
            console.log(controls.address_postal.value);
            console.log(this.pp_city_name);
            console.log(this.pp_state_name);
            controls.city.setValue(this.pp_city_name);
            controls.state.setValue(this.pp_state_name);
            controls.country.setValue(this.p_country_name);
            console.log(controls.city.value);
            console.log(controls.country.value);
            console.log(controls.state.value);
            setTimeout(function () {
              if (wordSearch == controls.address_postal.value) {
                if (controls.address_postal.value) {
                  _this62.postal_code_error = false;
                  console.log(Number(controls.postal.value));

                  if (controls.address_postal.value !== '' && controls.city.value !== '' && controls.state.value !== '' && controls.postal.value !== '' && controls.country.value !== '') {
                    var isNumeric = function isNumeric(val) {
                      return !isNaN(Number(val));
                    };

                    var da = isNumeric(controls.postal.value);
                    console.log(da);
                    console.log(controls.postal.value.length);

                    if (da == false) {
                      _this62.postal_code_error = true;
                      _this62.done_button = false;
                    } else if (controls.postal.value.length < 5) {
                      _this62.postal_code_error = true;
                      _this62.done_button = false;
                    } else {
                      _this62.postal_code_error = false;
                      _this62.done_button = true;
                    }
                  } //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 3000);
          }
        }, {
          key: "postal_address_check",
          value: function postal_address_check() {
            var controls = this.registerForm.controls;
            this.postal_address = controls.address_postal.value + ', ' + controls.city.value + ', ' + controls.state.value + ', ' + controls.country.value + ', ' + controls.postal.value;
            console.log(this.postal_address);
          }
        }, {
          key: "postal_address_delete",
          value: function postal_address_delete() {
            console.log("sdfas");
            this.postal_address = '';
          }
        }, {
          key: "terms_con",
          value: function terms_con() {
            window.open('/account/guideinfo', '_blank');
          }
        }, {
          key: "bussiness_name_tag_actions1",
          value: function bussiness_name_tag_actions1() {
            var _this63 = this;

            var controls = this.registerForm.controls;
            var wordSearch = controls.address.value;
            setTimeout(function () {
              if (wordSearch == controls.address.value) {
                if (controls.address.value) {
                  _this63.address_type_tag = controls.address.value;
                  var str = _this63.address_type_tag;
                  str = str.toLowerCase();
                  console.log(str);

                  var country_temp = _this63.country.toLowerCase();

                  if (str.indexOf(country_temp) !== -1) {
                    // alert("Not again");
                    _this63.address_error = false;
                  } else {
                    _this63.address_error = true;
                    _this63.address = '';
                    _this63.address_type_tag = '';
                  } //função que irá retornar sua lista de objetos

                } else {//code here
                  }
              }
            }, 5000);
          }
        }, {
          key: "view_map",
          value: function view_map() {
            this.map_view = true;
          }
        }, {
          key: "close_map_view",
          value: function close_map_view() {
            this.map_view = false;
          }
        }, {
          key: "view_address_view",
          value: function view_address_view() {
            this.selectEvent3({
              name: this.p_country_name
            });
            this.address_view = true;
          }
        }, {
          key: "close_address_view",
          value: function close_address_view() {
            if (this.p_country_name == '' || this.p_state_name == '', this.p_city_name == '') {
              alert("Please don't close without Saving country, state, city");
            } else {
              console.log(this.p_country_name, this.p_state_name, this.p_city_name);
              this.address_view = false;
            }
          }
        }, {
          key: "save_address_view",
          value: function save_address_view() {
            this.p_country_name = this.country;

            if (this.p_country_name == '' || this.p_state_name == '', this.p_city_name == '') {
              alert("Please select country, state, city");
            } else {
              console.log(this.p_country_name, this.p_state_name, this.p_city_name);
              this.address_view = false;
              this.submit_data(); //  alert("Data Submit");
            }
          }
        }, {
          key: "selectEvent3",
          value: function selectEvent3(item) {
            var _this64 = this;

            console.log(item);
            this.p_country_name = item.name;
            this.state_name_list = [];
            this.auth.list_by_country_state(this.p_country_name).subscribe(function (res) {
              console.log("Inserted", res);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].state_name
                };

                _this64.state_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            }); // do something with selected item
          }
        }, {
          key: "selectEvent4",
          value: function selectEvent4(item) {
            var _this65 = this;

            console.log(item);
            this.p_state_name = item.name;
            this.city_name_list = [];
            this.auth.list_by_state_city(this.p_state_name).subscribe(function (res) {
              console.log("Inserted", res.rows);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].city_name
                };

                _this65.city_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            }); // do something with selected item
          }
        }, {
          key: "selectEvent5",
          value: function selectEvent5(item) {
            console.log(item);
            this.p_city_name = item.name; // do something with selected item
          }
        }, {
          key: "selectEvent6",
          value: function selectEvent6(item) {
            var _this66 = this;

            console.log(item);
            this.pp_country_name = item.name;
            var controls = this.registerForm.controls;
            controls.country.setValue(item.name);
            this.p_state_name_list = [];
            this.auth.list_by_country_state(this.pp_country_name).subscribe(function (res) {
              console.log("Inserted", res);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].state_name
                };

                _this66.p_state_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            }); // do something with selected item
          }
        }, {
          key: "selectEvent7",
          value: function selectEvent7(item) {
            var _this67 = this;

            console.log(item);
            this.pp_state_name = item.name;
            var controls = this.registerForm.controls;
            controls.state.setValue(item.name);
            console.log(controls.state.value);
            this.p_city_name_list = [];
            this.auth.list_by_state_city(this.pp_state_name).subscribe(function (res) {
              console.log("Inserted", res.rows);
              var temp = res.rows;

              for (var d = 0; d < temp.length; d++) {
                var u = {
                  id: d,
                  name: temp[d].city_name
                };

                _this67.p_city_name_list.push(u);
              }
            }, function (err) {
              console.log(err);
            }); // do something with selected item
          }
        }, {
          key: "selectEvent8",
          value: function selectEvent8(item) {
            console.log(item);
            this.pp_city_name = item.name;
            var controls = this.registerForm.controls;
            controls.city.setValue(item.name);
            console.log(controls.city.value); // do something with selected item
          }
        }, {
          key: "fetch_state_list",
          value: function fetch_state_list() {
            this.selectEvent6({
              name: this.p_country_name
            });
            console.log({
              name: this.p_country_name
            });
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]
        }, {
          type: _app_countrycode__WEBPACK_IMPORTED_MODULE_12__["countrycode"]
        }, {
          type: _assets_xlsxtojson__WEBPACK_IMPORTED_MODULE_13__["City_list"]
        }];
      };

      RegisterPage.propDecorators = {
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
      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "p8sN":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/otp/otp.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function p8sN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n  <div class=\"wrapper_2 header_top w-100\">\n      <div class=\"row w-100 align-items-center\">\n          <div class=\"col-sm-5 bg-white text-center text-sm-left\">\n              <div class=\"logo_home pt-2\">\n                  <img src=\"../../../assets/images/logo_new.png\" />\n              </div>\n          </div>\n          <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n            <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n            <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> \n               <!-- <a class=\"pl-3\" href=\"/home\">Join now</a> -->\n          </div>\n      </div>\n  </div>\n  <div class=\"slider_fix wrapper_2\">\n      <div class=\"row align-items-center\">\n          <div class=\"col-md-5\">\n             <div class=\"hr_right home_form_list\">\n            <h4 class=\"text-white shadow_none pb-2\">\n                OTP \n            </h4>\n            <form [formGroup]=\"otpForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label class=\"control-label text-white\">Enter Your OTP</label>\n              <div class=\"loading_input\">\n                <input type=\"text\" class=\"form-control input_2\" maxlength=\"4\" (keyup)=\"bussiness_name_tag_action()\" formControlName=\"otp\" [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\" placeholder=\"Enter Your OTP\">\n                <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"otp_load\"></div>\n                </div>\n                <div class=\"warning\" *ngIf=\"otp_error\">\n                  {{otp_error_msg}}\n                 </div>\n                <div *ngIf=\"submitted && f.otp.errors\" class=\"warning\">\n                  <div *ngIf=\"f.otp.errors.required\">OTP is required</div>\n                  <div *ngIf=\"f.otp.errors.minlength\">OTP must be 4 characters</div>\n                  </div>\n            </div>\n            <div class=\"\">\n              <!-- <span style=\"color: white;text-align: right;\" class=\"d-block color_1 pb-1\">Didn't you received any code?</span> -->\n              <span style=\"text-align: right;\" class=\"d-block color_2 cursor-pointer default\"><a (click)=\"resend_otp()\">Resend</a></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n                <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n            </div>\n            \n          </form>\n        </div>\n          </div>\n          <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n              <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                  <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                      <div class=\"carousel-item active\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                      </div>\n\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">PASTRY</h4>\n                      </div>\n                      \n                      \n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">SERVICE</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">PASTRY</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                      </div>\n                      <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                          <h4 class=\"text-center slider_info\">SHOPS</h4>\n                      </div>\n                     \n                      \n\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</section>\n\n<div class=\"footer_bg\">\n  <div class=\"wrapper_2\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                  <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Support</h4>   \n                  <ul>\n                      <li>\n                          <a href=\"#\">FAQ</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Terms & Conditions</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Customer Support</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Online Support</a>\n                      </li>\n                  </ul>\n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Contact</h4>   \n                  <ul>\n                      <li>\n                          +93 1541578\n                      </li>\n                      <li>\n                          sample@gmail.com\n                      </li>\n                      <li>\n                          sample addres heree\n                      </li>\n                     \n                  </ul>\n              </div>                           \n          </div>\n          <div class=\"col-lg-3 col-sm-6 footer_social\">\n              <div class=\"pt-4 pb-4\">\n                  <h4>Follow us</h4>   \n                  <ul>\n                      <li>\n                          <a href=\"#\">\n                              <i class=\"fa fa-facebook\"></i>\n                          </a>\n                          <a href=\"#\">\n                              <i class=\"fa fa-instagram\"></i>\n                          </a>\n                          <a href=\"#\">\n                              <i class=\"fa fa-youtube-play\"></i>\n                          </a>   \n                      </li>\n                     \n                     \n                  </ul>\n              </div>                           \n          </div>\n      </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "qdIb":
    /*!**********************************************************!*\
      !*** ./src/app/account/guideinfo/guideinfo.component.ts ***!
      \**********************************************************/

    /*! exports provided: GuideinfoComponent */

    /***/
    function qdIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuideinfoComponent", function () {
        return GuideinfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_guideinfo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./guideinfo.component.html */
      "wQkC");
      /* harmony import */


      var _guideinfo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guideinfo.component.scss */
      "tr2i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GuideinfoComponent = /*#__PURE__*/function () {
        function GuideinfoComponent() {
          _classCallCheck(this, GuideinfoComponent);
        }

        _createClass(GuideinfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GuideinfoComponent;
      }();

      GuideinfoComponent.ctorParameters = function () {
        return [];
      };

      GuideinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guideinfo',
        template: _raw_loader_guideinfo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guideinfo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GuideinfoComponent);
      /***/
    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.page */
      "3i6a");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.page */
      "34af");
      /* harmony import */


      var _otp_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp/otp.page */
      "soYB");
      /* harmony import */


      var _register_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register/register.page */
      "nK45");
      /* harmony import */


      var _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reset-password/reset-password.page */
      "v2+T");
      /* harmony import */


      var _otp_fp_otp_fp_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./otp-fp/otp-fp.page */
      "ew6T");
      /* harmony import */


      var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./privacypolicy/privacypolicy.component */
      "xgRO");
      /* harmony import */


      var _guideinfo_guideinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./guideinfo/guideinfo.component */
      "qdIb");
      /* harmony import */


      var _registeredit_registeredit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./registeredit/registeredit.component */
      "/gQH");
      /* harmony import */


      var _homeedit_homeedit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./homeedit/homeedit.component */
      "38zf");
      /* harmony import */


      var _bankdetailsedit_bankdetailsedit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./bankdetailsedit/bankdetailsedit.component */
      "KSrU");
      /* harmony import */


      var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./changepassword/changepassword.component */
      "gJDA");
      /* harmony import */


      var _verifcationotp_verifcationotp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./verifcationotp/verifcationotp.component */
      "Ij2c");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "BRjD");
      /* harmony import */


      var _excelupload_excelupload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./excelupload/excelupload.component */
      "NGnr");

      var routes = [{
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }, {
        path: 'login',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
      }, {
        path: 'register',
        component: _register_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
      }, {
        path: 'otp',
        component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]
      }, {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPage"]
      }, {
        path: 'otp-fp',
        component: _otp_fp_otp_fp_page__WEBPACK_IMPORTED_MODULE_9__["OtpFpPage"]
      }, {
        path: 'guideinfo',
        component: _guideinfo_guideinfo_component__WEBPACK_IMPORTED_MODULE_11__["GuideinfoComponent"]
      }, {
        path: 'reset-password',
        component: _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordPage"]
      }, {
        path: 'privacypolicy',
        component: _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacypolicyComponent"]
      }, {
        path: 'edit_bussiness_info/:id',
        component: _registeredit_registeredit_component__WEBPACK_IMPORTED_MODULE_12__["RegistereditComponent"]
      }, {
        path: 'edit_profile_info/:id',
        component: _homeedit_homeedit_component__WEBPACK_IMPORTED_MODULE_13__["HomeeditComponent"]
      }, {
        path: 'edit_bank_info/:id',
        component: _bankdetailsedit_bankdetailsedit_component__WEBPACK_IMPORTED_MODULE_14__["BankdetailseditComponent"]
      }, {
        path: 'Change-password/:id',
        component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"]
      }, {
        path: 'otpverification',
        component: _verifcationotp_verifcationotp_component__WEBPACK_IMPORTED_MODULE_16__["VerifcationotpComponent"]
      }, {
        path: 'home_page',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"]
      }, {
        path: 'excelupload',
        component: _excelupload_excelupload_component__WEBPACK_IMPORTED_MODULE_18__["ExceluploadComponent"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "smBR":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/excelupload/excelupload.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function smBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<input type=\"file\" (change)=\"onFileChange($event)\" />";
      /***/
    },

    /***/
    "smfz":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgot-password/forgot-password.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function smfz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n        <div class=\"wrapper_2 header_top w-100\">\n            <div class=\"row w-100 align-items-center\">\n                <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                    <div class=\"logo_home pt-2\">\n                        <img src=\"../../../assets/images/logo_new.png\" />\n                    </div>\n                </div>\n                <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                    <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n                    <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> |\n                    <a class=\"pl-3\" href=\"/home\">Join now</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"slider_fix wrapper_2\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-5\">\n                    <form [formGroup]=\"ForgetPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"hr_right home_form_list\">\n                            <h4 class=\"text-white shadow_none pb-2\">\n                                Forget Password\n                            </h4>\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-white\">Enter your e-mail address below to reset your\n                                    password.</label>\n                                <div class=\"loading_input\">\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control input_2\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                                        (keyup)=\"searchInterest()\">\n                                    <div class=\"load_input spinner-border-sm spinner-border\" *ngIf=\"email_loader\"></div>\n                                </div>\n                                <div class=\"warning\" *ngIf=\"email_error\">\n                                    {{email_error_text}}\n                                </div>\n                                <div *ngIf=\"submitted && f.email.errors\" class=\"warning\">\n                                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                    <div *ngIf=\"f.email.errors.pattern\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n                            <div>\n                                <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                    <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                            <div class=\"carousel-item active\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                            </div>\n\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">PASTRY</h4>\n                            </div>\n\n\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">SERVICE</h4>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">PASTRY</h4>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\"\n                                    alt=\"First slide\">\n                                <h4 class=\"text-center slider_info\">SHOPS</h4>\n                            </div>\n\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </section>\n\n    <div class=\"footer_bg\">\n        <div class=\"wrapper_2\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-sm-6\">\n                    <div class=\"pt-4 pb-4\">\n                        <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\" />\n                        <p class=\"pt-2\">2021 @ All Rights Reserved </p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6\">\n                    <div class=\"pt-4 pb-4\">\n                        <h4>Support</h4>\n                        <ul>\n                            <li>\n                                <a href=\"#\">FAQ</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Terms & Conditions</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Customer Support</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Online Support</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6\">\n                    <div class=\"pt-4 pb-4\">\n                        <h4>Contact</h4>\n                        <ul>\n                            <li>\n                                +93 1541578\n                            </li>\n                            <li>\n                                sample@gmail.com\n                            </li>\n                            <li>\n                                sample addres heree\n                            </li>\n\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6 footer_social\">\n                    <div class=\"pt-4 pb-4\">\n                        <h4>Follow us</h4>\n                        <ul>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"fa fa-facebook\"></i>\n                                </a>\n                                <a href=\"#\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                                <a href=\"#\">\n                                    <i class=\"fa fa-youtube-play\"></i>\n                                </a>\n                            </li>\n\n\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "soYB":
    /*!*****************************************!*\
      !*** ./src/app/account/otp/otp.page.ts ***!
      \*****************************************/

    /*! exports provided: OtpPage */

    /***/
    function soYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.page.html */
      "p8sN");
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.page.scss */
      "3Kbf");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(storage, router, toastr, formBuilder, auth) {
          _classCallCheck(this, OtpPage);

          this.storage = storage;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.otp_error = false;
          this.otp_error_msg = '';
          this.submitted = false;
          this.otp_load = false;
          console.log(this.storage.user); // if (this.storage.user) {
          //   this.router.navigateByUrl('/dashboard');
          // }
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.otpForm = this.formBuilder.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.otpForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this68 = this;

            this.otp_load = true;
            this.submitted = true; // stop here if form is invalid

            if (this.otpForm.invalid) {
              return;
            }

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var controls = this.otpForm.controls;
            var otpData = {
              user_id: reguser.user_id,
              otp: controls.otp.value
            };
            this.auth.verifyotp(otpData).subscribe(function (res) {
              _this68.otp_load = false;
              _this68.otp_error = true; // this.toastr.successToastr('OTP Verified');

              _this68.router.navigateByUrl('/account/register'); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              console.log(err); // this.toastr.warningToastr(err);

              _this68.otp_error = true;
              _this68.otp_load = false;
              _this68.otp_error_msg = err; // this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            var _this69 = this;

            this.otp_load = true;
            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            console.log(reguser);
            var a = {
              email: reguser.email
            };
            console.log(a);
            this.auth.resend_otp(a).subscribe(function (res) {
              console.log(res); // alert(res.message);

              _this69.otp_error = true;
              _this69.otp_error_msg = res.message;
              _this69.otp_load = false; // this.router.navigateByUrl('/my-cart');
            }, function (err) {// this.notify.showError(err, "LOGIN");
            });
          }
        }, {
          key: "bussiness_name_tag_action",
          value: function bussiness_name_tag_action() {
            var _this70 = this;

            setTimeout(function () {
              _this70.otp_error = false;
              _this70.otp_error_msg = "";
              _this70.otp_load = false;
            }, 1000);
          }
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpPage);
      /***/
    },

    /***/
    "tMKa":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/reset-password/reset-password.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tMKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n                <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> |\n                <a class=\"pl-3\" href=\"/home\">Join now</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-6\">\n                <div class=\"hr_right home_form_list\">\n                    <form [formGroup]=\"resetpswdForm\" (ngSubmit)=\"onSubmit()\">\n                        <h4 class=\"text-white shadow_none pb-2\">\n                            Reset Password\n                        </h4>\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Password</label>\n                            <input type=\"password\" class=\"form-control input_2\" formControlName=\"password\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"warning\">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6\n                                    characters</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label text-white\">Confirm Password</label>\n                            <input type=\"password\" class=\"form-control input_2\" formControlName=\"cpassword\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.cpassword.errors }\"\n                                placeholder=\"Confirm Password\">\n                            <div *ngIf=\"submitted && f.cpassword.errors\" class=\"warning\">\n                                <div *ngIf=\"f.cpassword.errors.required\">Confirm Password is required</div>\n                                <div *ngIf=\"f.cpassword.errors.mismatch\">Password is mismatched</div>\n                            </div>\n                        </div>\n                        <div>\n                            <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\" />\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>\n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "tr2i":
    /*!************************************************************!*\
      !*** ./src/app/account/guideinfo/guideinfo.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function tr2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlkZWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "v2+T":
    /*!***************************************************************!*\
      !*** ./src/app/account/reset-password/reset-password.page.ts ***!
      \***************************************************************/

    /*! exports provided: ResetPasswordPage */

    /***/
    function v2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function () {
        return ResetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password.page.html */
      "tMKa");
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      "eWMk");
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


      var src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_core/configs/property.config */
      "olrZ");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/services/auth.service */
      "Cpur");
      /* harmony import */


      var src_app_core_utils_confirm_password_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/utils/confirm-password.validator */
      "f49I");
      /* harmony import */


      var src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/_data/localstorage */
      "Q8Vt");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "Kmm4");

      var ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(storage, router, toastr, formBuilder, auth) {
          _classCallCheck(this, ResetPasswordPage);

          this.storage = storage;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.submitted = false;
          this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

          if (this.storage.user) {
            this.router.navigateByUrl('/dashboard');
          }
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.resetpswdForm = this.formBuilder.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
              cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            }, {
              validators: src_app_core_utils_confirm_password_validator__WEBPACK_IMPORTED_MODULE_8__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.resetpswdForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this71 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.resetpswdForm.invalid) {
              return;
            }

            var reguser = JSON.parse(localStorage.getItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE));
            var controls = this.resetpswdForm.controls;
            var pswdData = {
              password: controls.password.value,
              user_id: reguser.user_id
            };
            this.auth.resetpassword(pswdData).subscribe(function (res) {
              console.log(res);
              localStorage.removeItem(src_app_core_configs_property_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"].REGISTERED_PROFILE);
              _this71.storage.user = res.user;
              _this71.storage.authToken = res.key.token; // this.toastr.successToastr("Password Changed Successfully");

              _this71.router.navigateByUrl("merchant/login"); // this.notify.showSuccess("Logged in successfully", "LOGIN");

            }, function (err) {
              _this71.toastr.warningToastr(err); // this.notify.showError(err, "LOGIN");

            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.submitted = false;
          }
        }]);

        return ResetPasswordPage;
      }();

      ResetPasswordPage.ctorParameters = function () {
        return [{
          type: src_app_core_data_localstorage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordPage);
      /***/
    },

    /***/
    "wQkC":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/guideinfo/guideinfo.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wQkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  guideinfo works!\n</p>\n";
      /***/
    },

    /***/
    "xgRO":
    /*!******************************************************************!*\
      !*** ./src/app/account/privacypolicy/privacypolicy.component.ts ***!
      \******************************************************************/

    /*! exports provided: PrivacypolicyComponent */

    /***/
    function xgRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacypolicyComponent", function () {
        return PrivacypolicyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_privacypolicy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./privacypolicy.component.html */
      "2h54");
      /* harmony import */


      var _privacypolicy_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacypolicy.component.scss */
      "1CJF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrivacypolicyComponent = /*#__PURE__*/function () {
        function PrivacypolicyComponent() {
          _classCallCheck(this, PrivacypolicyComponent);
        }

        _createClass(PrivacypolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacypolicyComponent;
      }();

      PrivacypolicyComponent.ctorParameters = function () {
        return [];
      };

      PrivacypolicyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacypolicy',
        template: _raw_loader_privacypolicy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacypolicy_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PrivacypolicyComponent);
      /***/
    },

    /***/
    "zVpI":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zVpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home_fix_row h-100 home_pb_1 login_page bg_shape\">\n    <div class=\"wrapper_2 header_top w-100\">\n        <div class=\"row w-100 align-items-center\">\n            <div class=\"col-sm-6 bg-white text-center text-sm-left\">\n                <div class=\"logo_home pt-2\">\n                    <img src=\"../../../assets/../../../assets/images/logo_new.png\" />\n                </div>\n            </div>\n            <div class=\"text-center txt_bold text-sm-right text_black col-sm-6\">\n                <a href=\"/account/home_page\" class=\"pr-3\">Home</a> |\n              <a href=\"/merchant/login\" class=\"pr-3 pl-3\">Login</a> |\n              <a class=\"pl-3\" href=\"/home\">Join now</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"slider_fix wrapper_2\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-5\">\n               <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"hr_right home_form_list\">\n                      <h4 class=\"text-white shadow_none pb-2\">\n                          Login\n                      </h4>\n                      <div class=\"form-group\">\n                          <label class=\"control-label text-white\">Username</label>\n                          <input type=\"email\" formControlName=\"email\" class=\"form-control input_2\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                <div *ngIf=\"f.email.errors.pattern\">Email must be a valid email address</div>\n                            </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label class=\"control-label text-white\">Password</label>\n                          <input type=\"password\" formControlName=\"password\" class=\"form-control input_2\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                      </div>\n                      <div>\n                          <button type=\"submit\" class=\"btn btn-info w-100\">Submit</button>\n                      </div>\n                      <div class=\"pt-3 text-right\">\n                          <a class=\"text-white\" href=\"account/forgot-password\">Forget Password</a>\n                      </div>\n                  </div>\n                </form>\n            </div>\n            <div class=\"col-md-6 offset-md-1 pt-5 d-flex justify-content-center\">\n                <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner slide_column d-flex align-items-center justify-content-center\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_1.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_2.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        \n                        \n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_4.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_5.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SERVICE</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_3.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">PASTRY</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_6.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">HOME KITCHEN</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_7.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">RESTAURANTS</h4>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"../../../assets/images/home_slider_8.png\" alt=\"First slide\">\n                            <h4 class=\"text-center slider_info\">SHOPS</h4>\n                        </div>\n                       \n                        \n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<div class=\"footer_bg\">\n    <div class=\"wrapper_2\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <img src=\"../../../assets/images/logo_new_2.png\" class=\"footer_img\" alt=\"\"/>\n                    <p class=\"pt-2\">2021 @ All Rights Reserved </p>             \n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Support</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">FAQ</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Terms & Conditions</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Customer Support</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Online Support</a>\n                        </li>\n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Contact</h4>   \n                    <ul>\n                        <li>\n                            +93 1541578\n                        </li>\n                        <li>\n                            sample@gmail.com\n                        </li>\n                        <li>\n                            sample addres heree\n                        </li>\n                       \n                    </ul>\n                </div>                           \n            </div>\n            <div class=\"col-lg-3 col-sm-6 footer_social\">\n                <div class=\"pt-4 pb-4\">\n                    <h4>Follow us</h4>   \n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube-play\"></i>\n                            </a>   \n                        </li>\n                       \n                       \n                    </ul>\n                </div>                           \n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map
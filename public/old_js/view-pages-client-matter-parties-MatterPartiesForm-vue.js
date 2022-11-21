"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matter-parties-MatterPartiesForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    PartyNumberTable: function PartyNumberTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matter-parties-PartyNumberTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./PartyNumberTable */ "./resources/js/pages/client/matter-parties/PartyNumberTable.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'MatParty'
    }
  },
  data: function data() {
    return {
      role: {
        id: null,
        description: null
      },
      party: {},
      parlang: {},
      identityDocumentTypes: [{
        label: 'ID Number',
        value: 'I'
      }, {
        label: 'Passport No',
        value: 'P'
      }, {
        label: 'Temporary Residence',
        value: 'T'
      }, {
        label: 'Other ID',
        value: 'O'
      }]
    };
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      root.$snotify.simple('Please wait...', 'Retrieving Party', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      this.record = this.party = this.parlang = {};
      axios.post("/matparty/get/" + id).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this.record = response.data.data[0];
          _this.role = {
            recordid: _this.record.roleid,
            description: htmlDecode(_this.record.roledescription)
          };
          axios.post("/party/get/" + _this.record.partyid).then(function (partyResponse) {
            if (partyResponse.data.errors) {
              showError('Error', partyResponse.data.errors);
            } else {
              _this.party = partyResponse.data.data[0];
              axios.post("/parlang/get", {
                where: ["parlang.partyid,=," + _this.party.recordid, "parlang.languageid,=," + _this.party.defaultlanguageid]
              }).then(function (parLangResponse) {
                _this.parlang = parLangResponse.data.data[0];
                root.$snotify.clear();

                _this.displayForm(); //********************
                // Party Number Table
                //********************


                var $partyDetailsHeight = $('#' + _this.id + '-party-details');
                _this.partyNumberTable = _this.$refs[_this.id + '-party-number-table'];
                _this.partyNumberTable.tableOptions = {
                  scrollY: Math.round($partyDetailsHeight.outerHeight()) - 55 + 'px'
                };
                _this.partyNumberTable.noEditButtonFlag = true;
                _this.partyNumberTable.whereRaw = ["ParTele.PartyId = " + _this.record.partyid];

                _this.partyNumberTable.loadDataTable(_this.adjustPartyNumberTableColumns);
              })["catch"](function (error) {
                showError('Error getting ParLang data', error);
              });
            }
          })["catch"](function (error) {
            showError('Error getting Party', error);
          });
        }
      })["catch"](function (error) {
        showError('Error getting Matter Party', error);
      });
    },
    getIdentityDocumentType: function getIdentityDocumentType() {
      var _this2 = this;

      if (this.party.identitydocumenttype) {
        return this.identityDocumentTypes.filter(function (type) {
          return type.value === _this2.party.identitydocumenttype;
        })[0].label;
      } else {
        return '';
      }
    },
    isJuristic: function isJuristic() {
      return parseInt(this === null || this === void 0 ? void 0 : this.party.entityid) > 2 && (this === null || this === void 0 ? void 0 : this.party.entityid) !== '16' ? true : false;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matter-parties/MatterPartiesForm.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/client/matter-parties/MatterPartiesForm.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterPartiesForm.vue?vue&type=template&id=c4eeff4a& */ "./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a&");
/* harmony import */ var _MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterPartiesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matter-parties/MatterPartiesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_c4eeff4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesForm.vue?vue&type=template&id=c4eeff4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-parties/MatterPartiesForm.vue?vue&type=template&id=c4eeff4a& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-xl" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content red-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header red-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", { staticClass: "modal-title" }, [
                      _c("span", [_vm._v(_vm._s(_vm.record.partyname))]),
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.record.roledescription)),
                    ]),
                    _vm._v(" "),
                    _vm.modal
                      ? _c("i", {
                          staticClass:
                            "cp top-right fa fa-times-circle fa-2x text-white",
                          attrs: {
                            title: "Close this window",
                            "data-dismiss": "modal",
                          },
                        })
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  !_vm.modal
                    ? _c("page-close-button", {
                        on: { closeClicked: _vm.closeForm },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body overflow-auto p-3",
                style: _vm.modal ? "height:65vh" : "",
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "fieldset",
                      { attrs: { id: _vm.id + "-party-details" } },
                      [
                        _c("legend", [_vm._v("Party")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-md-4" }, [
                            _c("label", [_vm._v("Code")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-control" }, [
                              _vm._v(_vm._s(_vm.party.matterprefix)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8" }, [
                            _c("label", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-control" }, [
                              _vm._v(_vm._s(_vm.record.partyname)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", [_vm._v("Contact Person")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-control" }, [
                              _vm._v(_vm._s(_vm.record.contactname)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", [_vm._v("Their Ref")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-control" }, [
                              _vm._v(_vm._s(_vm.record.reference)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.isJuristic(),
                                expression: "!isJuristic()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.getIdentityDocumentType())),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-control" }, [
                                _vm._v(_vm._s(_vm.parlang.identitynumber)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", [_vm._v("Date of Birth")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-control" }, [
                                _vm._v(_vm._s(_vm.parlang.formattedbirthdate)),
                              ]),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isJuristic(),
                                expression: "isJuristic()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", [_vm._v("Registration Number")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-control" }, [
                                _vm._v(_vm._s(_vm.parlang.identitynumber)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", [_vm._v("Registration Date")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-control" }, [
                                _vm._v(_vm._s(_vm.parlang.formattedtrustdate)),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.editing &&
                              _vm.role.recordid &&
                              (_vm.role.recordid ==
                                _vm.$root.control.defendantroleid ||
                                _vm.role.recordid ==
                                  _vm.$root.control.plaintiffroleid),
                            expression:
                              "editing && role.recordid && (role.recordid == $root.control.defendantroleid || role.recordid == $root.control.plaintiffroleid)",
                          },
                        ],
                        staticClass: "row mt-3",
                      },
                      [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("fieldset", [
                            _c("legend", [_vm._v("Nomine Officio")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("label", {
                                    staticStyle: {
                                      "margin-bottom": "0.6rem !important",
                                    },
                                    domProps: {
                                      textContent: _vm._s("Nomine Officio?"),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("pop-over", {
                                    attrs: {
                                      content:
                                        "<h4>Nomine Officio</h4><p>This Party is representing another legal entity or person, i.e they are not acting in their personal capacity.</p>",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: _vm.id + "-no-flag",
                                        name: "noFlag",
                                        value: "1",
                                        "unchecked-value": "0",
                                        switch: "",
                                        size: "lg",
                                      },
                                      model: {
                                        value: _vm.record.noflag,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.record, "noflag", $$v)
                                        },
                                        expression: "record.noflag",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                                This Party is representing another legal entity\r\n                                            "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-input", {
                                  attrs: {
                                    readOnly: true,
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Capacity</h4><p>The capacity they are acting as (e.g. Trustee/ Curator).</p>",
                                    name: "nocapacity",
                                    label: "Capacity",
                                  },
                                  model: {
                                    value: _vm.record.nocapacity,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "nocapacity", $$v)
                                    },
                                    expression: "record.nocapacity",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-input", {
                                  attrs: {
                                    readOnly: true,
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Principal</h4><p>The Principal they are acting on behalf of (e.g. The ABC Trust).</p>",
                                    name: "noprincipal",
                                    label: "Principal",
                                  },
                                  model: {
                                    value: _vm.record.noprincipal,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "noprincipal", $$v)
                                    },
                                    expression: "record.noprincipal",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.editing &&
                              _vm.role.recordid &&
                              _vm.role.recordid ==
                                _vm.$root.control.suretyroleid,
                            expression:
                              "editing && role.recordid && role.recordid == $root.control.suretyroleid",
                          },
                        ],
                        staticClass: "row mt-3",
                      },
                      [
                        _c("div", { staticClass: "col-lg-8" }, [
                          _c("fieldset", [
                            _c("legend", [_vm._v("Surety Details")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("label", {
                                    staticStyle: {
                                      "margin-bottom": "0.6rem !important",
                                    },
                                    domProps: {
                                      textContent: _vm._s("Unlimited?"),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("pop-over", {
                                    attrs: {
                                      content:
                                        "<h4>Unlimited Security</h4><p>The Surety is not limited to a specific amount.</p>",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: _vm.id + "-surety-unlimited-flag",
                                        name: "suretyunlimitedflag",
                                        value: "1",
                                        "unchecked-value": "0",
                                        switch: "",
                                        size: "lg",
                                      },
                                      model: {
                                        value: _vm.record.suretyunlimitedflag,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.record,
                                            "suretyunlimitedflag",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "record.suretyunlimitedflag",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                                The Surety is not limited to a specific amount\r\n                                            "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.record.suretyunlimitedflag &&
                                      _vm.record.suretyunlimitedflag != "1",
                                    expression:
                                      "record.suretyunlimitedflag && record.suretyunlimitedflag != '1'",
                                  },
                                ],
                                staticClass: "form-group row",
                              },
                              [
                                _c("text-input", {
                                  attrs: {
                                    readOnly: true,
                                    _class: "col-md-8",
                                    popOver:
                                      "<h4>Surety Amount</h4>\r\n                                            <p>The Amount of the Surety</p>",
                                    label: "Amount",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "suretyamount",
                                    title: "The Amount of the Surety",
                                    error: _vm.errors.suretyamount,
                                  },
                                  model: {
                                    value: _vm.record.suretyamount,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "suretyamount", $$v)
                                    },
                                    expression: "record.suretyamount",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-area", {
                                  attrs: {
                                    readOnly: true,
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Security Details</h4>\r\n                                            <p>A description of any security linked to this suretyship</p>",
                                    rows: "6",
                                    cols: "50",
                                    name: "suretysecurity",
                                    label: "Security Details",
                                    error: _vm.errors.suretysecurity,
                                  },
                                  model: {
                                    value: _vm.record.suretysecurity,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.record,
                                        "suretysecurity",
                                        $$v
                                      )
                                    },
                                    expression: "record.suretysecurity",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6 pt-2" },
                    [
                      _c("party-number-table", {
                        ref: _vm.id + "-party-number-table",
                        attrs: {
                          id: _vm.id + "-party-number-table-form",
                          "table-id": _vm.id + "-party-numbers-table",
                          lazyLoadFlag: true,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Postal Address")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-12",
                              readOnly: true,
                              label: "Line 1",
                            },
                            model: {
                              value: _vm.parlang.postalline1,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "postalline1", $$v)
                              },
                              expression: "parlang.postalline1",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-12",
                              readOnly: true,
                              label: "Line 2",
                            },
                            model: {
                              value: _vm.parlang.postalline2,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "postalline2", $$v)
                              },
                              expression: "parlang.postalline2",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              readOnly: true,
                              label: "Line 3",
                            },
                            model: {
                              value: _vm.parlang.postalline3,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "postalline3", $$v)
                              },
                              expression: "parlang.postalline3",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-3",
                              readOnly: true,
                              label: "Code",
                            },
                            model: {
                              value: _vm.parlang.postalcode,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "postalcode", $$v)
                              },
                              expression: "parlang.postalcode",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              readOnly: true,
                              label: "Country",
                            },
                            model: {
                              value: _vm.parlang.postalcountry,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "postalcountry", $$v)
                              },
                              expression: "parlang.postalcountry",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Physical Address")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-12",
                              readOnly: true,
                              label: "Line 1",
                            },
                            model: {
                              value: _vm.parlang.physicalline1,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "physicalline1", $$v)
                              },
                              expression: "parlang.physicalline1",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-12",
                              readOnly: true,
                              label: "Line 2",
                            },
                            model: {
                              value: _vm.parlang.physicalline2,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "physicalline2", $$v)
                              },
                              expression: "parlang.physicalline2",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              readOnly: true,
                              label: "Line 3",
                            },
                            model: {
                              value: _vm.parlang.physicalline3,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "physicalline3", $$v)
                              },
                              expression: "parlang.physicalline3",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-3",
                              readOnly: true,
                              label: "Code",
                            },
                            model: {
                              value: _vm.parlang.physicalcode,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "physicalcode", $$v)
                              },
                              expression: "parlang.physicalcode",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              readOnly: true,
                              label: "Country",
                            },
                            model: {
                              value: _vm.parlang.physicalcountry,
                              callback: function ($$v) {
                                _vm.$set(_vm.parlang, "physicalcountry", $$v)
                              },
                              expression: "parlang.physicalcountry",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm._m(0),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer justify-content-between" }, [
      _c("div"),
      _vm._v(" "),
      _c("div", [
        _c(
          "button",
          {
            staticClass: "btn btn-danger form-button",
            attrs: {
              type: "button",
              "data-dismiss": "modal",
              title: "Close this screen",
            },
          },
          [
            _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
            _vm._v("Close"),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
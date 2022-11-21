"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feecodes-FeeCodeForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    FeeItemTable: function FeeItemTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-feeitems-FeeItemTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feeitems/FeeItemTable */ "./resources/js/pages/feeitems/FeeItemTable.vue"));
    },
    FeeItemForm: function FeeItemForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-feeitems-FeeItemForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feeitems/FeeItemForm */ "./resources/js/pages/feeitems/FeeItemForm.vue"));
    },
    SelectFeeSheets: function SelectFeeSheets() {
      return __webpack_require__.e(/*! import() */ "view-pages-feesheets-SelectFeeSheets-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feesheets/SelectFeeSheets */ "./resources/js/pages/feesheets/SelectFeeSheets.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Fee Codes'
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/feecodes/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.initFormData();

        _this.loadFeeItemsTable();
      });
    },
    initNewRecord: function initNewRecord(feeSheetId) {
      console.log('initNewRecord feeSheetId', feeSheetId);
      this.record = {
        code: null,
        description: null,
        feeSheetId: feeSheetId
      };
      this.initFormData();
    },
    initFormData: function initFormData() {
      var _this2 = this;

      //if ( !this.$root.feeSheets.length) this.$root.getFeeSheets();
      this.displayForm();
      setTimeout(function () {
        return $('#' + _this2.id + ' input[name="description"]').focus();
      }); // if ( this.editing ) {
      //     this.selectFeeSheet.record = {
      //         id: this.record.feeSheetId,
      //         description: htmlDecode(this.record.feeSheetDescription),
      //     };
      // } else {
      //     axios.post("/feesheets/get", { 
      //         id: this.record.feeSheetId 
      //     }).then(response => {
      //         this.selectFeeSheet.record = {
      //             id: response.data.data[0].id,
      //             description: htmlDecode(response.data.data[0].description),
      //         };
      //         this.record.feeSheetId = this.selectFeeSheet.record.id;
      //     });
      // }
    },
    loadFeeItemsTable: function loadFeeItemsTable() {
      this.feeItemsTable = this.$refs[this.id + '-fee-items-table'];
      this.feeItemsTable.parentId = this.record.id;
      this.feeItemsTable.tableOptions = {
        emptyTable: "Add Fee Items",
        ordering: false // Always order by sorter

      };
      setTimeout(this.feeItemsTable.loadDataTable);
    },
    addFeeItem: function addFeeItem() {
      this.$refs['fee-items-form'].insertClicked(this.record.id);
    },
    //Deprecate?
    selectRecord: function selectRecord(id) {
      var _this3 = this;

      axios.post('/feecodes/get', {
        recordid: id
      }).then(function (response) {
        if (typeof _this3.$parent.feeCodeSelected === 'function') _this3.$parent.feeCodeSelected(response.data.data[0]);
      });
    },
    copyClicked: function copyClicked() {
      this.selectFeeSheets.selectFeeSheets(this.record.feeSheetId, this.record.feeSheetCode);
    },
    feeSheetsSelected: function feeSheetsSelected(selectedRows, table) {
      var _this4 = this;

      // Returns empty array if all are selected
      var params = selectedRows.length ? {
        whereIn: {
          column: 'fee_sheets.id',
          value: selectedRows
        }
      } : {
        tableFilter: table.tableFilter
      };
      params = _objectSpread(_objectSpread({}, params), {}, {
        orderBy: 'fee_sheets.description'
      });
      axios.post('/feesheets/get', params).then(function (response) {
        _this4.copyFeeCode(response.data);
      });
    },
    copyFeeCode: function copyFeeCode(feeSheets) {
      var _this5 = this;

      var copyRecord = {
        id: null,
        code: null,
        copyFlag: true,
        copyId: this.record.id,
        feeSheets: feeSheets
      };

      var saveRecord = _objectSpread(_objectSpread({}, this.record), copyRecord);

      axios.post('/feecodes/store', saveRecord).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this5.errors = response.data.errors;
          }
        } else {
          root.$snotify.success('The Fee Code was copied successfully');

          _this5.$parent.feeCodesTable.refresh();
        }
      });
    },
    okClicked: function okClicked() {
      var _this6 = this;

      axios.post('/feecodes/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this6.errors = response.data.errors;
          }
        } else {
          _this6.errors = {}; // In case we are viewing the record from the LookupWrapper, e.g. in SelectFeeCode.vue

          if (_this6.table) {
            _this6.highlightTableRow(response.data.id, response.data.code);
          } else {
            _this6.closeForm();
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this6.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, code) {
      var _this7 = this;

      axios.post('/feecodes/getTablePosition', {
        code: code
      }).then(function (response) {
        _this7.table.jumpToRow(id, response.data);

        if (!_this7.editing) {
          _this7.editClicked(id);
        } else {
          _this7.closeForm();
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feecodes/FeeCodeForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/feecodes/FeeCodeForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeCodeForm.vue?vue&type=template&id=1d6ca791& */ "./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791&");
/* harmony import */ var _FeeCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeCodeForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feecodes/FeeCodeForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeCodeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeCodeForm_vue_vue_type_template_id_1d6ca791___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeCodeForm.vue?vue&type=template&id=1d6ca791& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feecodes/FeeCodeForm.vue?vue&type=template&id=1d6ca791& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } },
    [
      _c(
        "div",
        {
          class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "",
        },
        [
          _c(
            "div",
            {
              class: _vm.modal
                ? "modal-content steelblue-border"
                : "card h-100 border-0",
            },
            [
              _c("div", { class: _vm.modal ? "" : "card-header" }, [
                _c(
                  "div",
                  {
                    class: _vm.modal
                      ? "modal-header steelblue"
                      : "d-flex justify-content-between",
                  },
                  [
                    _c("div", { staticClass: "page-title" }, [
                      _c("h3", [
                        _vm.viewing
                          ? _c("span", [_vm._v("Fee Code")])
                          : _vm.editing
                          ? _c("span", [_vm._v("Fee Code will be Changed")])
                          : _c("span", [_vm._v("Fee Code will be Added")]),
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
                  staticClass: "card-body overflow-auto p-3",
                  style: _vm.modal ? "height: 70vh" : "",
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _vm.editing
                        ? _c("text-input", {
                            attrs: {
                              _class: "col-md-4",
                              popOver:
                                "<h4>Code</h4>\r\n                        <p>The code is used to uniquely identify this Fee Code.</p>",
                              popOverContainer: "#" + _vm.id,
                              name: "code",
                              label: "Code",
                              error: _vm.errors.code,
                            },
                            model: {
                              value: _vm.record.code,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "code", $$v)
                              },
                              expression: "record.code",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("text-input", {
                        attrs: {
                          _class: _vm.editing ? "col-md-8" : "col-md-12",
                          name: "description",
                          label: "Description",
                          error: _vm.errors.description,
                        },
                        model: {
                          value: _vm.record.description,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "description", $$v)
                          },
                          expression: "record.description",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "fieldset",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editing,
                          expression: "editing",
                        },
                      ],
                      staticClass: "mt-1",
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("fee-item-table", {
                        ref: _vm.id + "-fee-items-table",
                        attrs: {
                          formRef: _vm.id + "-fee-items-table",
                          tableId: _vm.id + "-fee-items-table",
                          "lazy-load-flag": true,
                          formTable: true,
                          searchInputFocus: false,
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
                  _c("div", [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editing && !_vm.viewing,
                            expression: "editing && !viewing",
                          },
                        ],
                        staticClass: "btn btn-danger form-button mr-2",
                        attrs: {
                          type: "button",
                          title: "Delete this Fee Code",
                        },
                        on: { click: _vm.deleteClicked },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Delete\r\n                    "),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editing && !_vm.viewing,
                            expression: "editing && !viewing",
                          },
                        ],
                        staticClass: "btn btn-secondary form-button",
                        attrs: { type: "button", title: "Copy this  Fee Code" },
                        on: { click: _vm.copyClicked },
                      },
                      [
                        _c("i", { staticClass: "fa fa-clone fa-lg mr-2" }),
                        _vm._v("Copy\r\n                    "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success form-button mr-3",
                        attrs: { type: "button", title: "Save the Fee Code" },
                        on: { click: _vm.okClicked },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("OK"),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.editing
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger form-button",
                            attrs: {
                              type: "button",
                              title: "Exit without saving",
                            },
                            on: { click: _vm.closeForm },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-times-circle fa-lg mr-2",
                            }),
                            _vm._v("Cancel"),
                          ]
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "btn btn-danger form-button",
                            attrs: {
                              type: "button",
                              title: "Close this screen",
                            },
                            on: { click: _vm.closeForm },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-times-circle fa-lg mr-2",
                            }),
                            _vm._v("Close"),
                          ]
                        ),
                  ]),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("fee-item-form", {
        ref: "fee-items-form",
        attrs: {
          id: _vm.id + "-fee-code-form-fee-item-form",
          parentTableRef: _vm.id + "-fee-items-table",
          modal: true,
        },
      }),
      _vm._v(" "),
      _c("select-fee-sheets", {
        ref: _vm.id + "-select-fee-sheets",
        attrs: {
          id: _vm.id + "-select-fee-sheets",
          formRef: _vm.id + "-select-fee-sheets",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("legend", [_c("span", [_vm._v("Fee Items")])])
  },
]
render._withStripped = true



/***/ })

}]);
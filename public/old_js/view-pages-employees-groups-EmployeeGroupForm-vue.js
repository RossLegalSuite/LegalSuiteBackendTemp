"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-employees-groups-EmployeeGroupForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PermissionsTable: function PermissionsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-groups-PermissionsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./PermissionsTable */ "./resources/js/pages/employees/groups/PermissionsTable.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Employee Groups'
    }
  },
  data: function data() {
    return {
      permissionsTableLoaded: false,
      permissionsTable: null,
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Permissions",
        title: "Permissions",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  watch: {
    activeTab: function activeTab(newValue, oldValue) {
      if (newValue === 'Permissions' && !this.permissionsTableLoaded) {
        this.permissionsTableLoaded = true;
        setTimeout(this.permissionsTable.loadDataTable);
      }
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this2 = this;

      this.permissionsTableLoaded = false;
      this.activeTab = 'General';
      this.tabs[0].active = true;
      this.tabs[1].visible = true;
      this.tabs[1].active = false;
      axios.post('/employee_groups/get', {
        recordid: id
      }).then(function (response) {
        _this2.record = response.data.data[0];
        _this2.permissionsTable = _this2.$refs[_this2._uid + '-permissions-table'];
        _this2.permissionsTable.noEditButtonFlag = true;
        _this2.permissionsTable.parentId = _this2.record.id;
        _this2.permissionsTable.tableOptions = {
          emptyTable: _this2.record.code === 'SUPER' ? 'Supervisor has ALL permissions' : null,
          drawCallback: function drawCallback(tableId, api) {
            var _this = _this2;
            $("." + tableId + '-view-flag').off('click').on('click', function () {
              _this.updatePermission($(this).attr('data-id'), 'viewFlag');
            });
            $("." + tableId + '-insert-flag').off('click').on('click', function () {
              _this.updatePermission($(this).attr('data-id'), 'insertFlag');
            });
            $("." + tableId + '-change-flag').off('click').on('click', function () {
              _this.updatePermission($(this).attr('data-id'), 'changeFlag');
            });
            $("." + tableId + '-delete-flag').off('click').on('click', function () {
              _this.updatePermission($(this).attr('data-id'), 'deleteFlag');
            });
          }
        };

        _this2.initFormData();
      });
    },
    initNewRecord: function initNewRecord() {
      var _this3 = this;

      this.permissionsTableLoaded = false;
      this.activeTab = 'General';
      this.tabs[0].active = true;
      this.tabs[1].visible = false;
      this.tabs[1].active = false;
      this.record = {
        description: null,
        code: null
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this3.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this4 = this;

      this.displayForm();
      setTimeout(function () {
        return $('#' + _this4.id + ' input[name="description"]').focus();
      });
    },
    updatePermission: function updatePermission(id, column) {
      var _this5 = this;

      axios.post('/permissions/store', {
        id: id,
        column: column
      }).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this5.errors = response.data.errors;
          }
        }
      });
    },
    okClicked: function okClicked() {
      var _this6 = this;

      axios.post('/employee_groups/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this6.errors = response.data.errors;
          }
        } else {
          _this6.errors = {};

          _this6.highlightTableRow(response.data.id, response.data.code);
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this6.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, code) {
      var _this7 = this;

      axios.post('/employee_groups/getTablePosition', {
        code: code
      }).then(function (response) {
        _this7.table.jumpToRow(id, response.data);

        _this7.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/employees/groups/EmployeeGroupForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/employees/groups/EmployeeGroupForm.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeGroupForm.vue?vue&type=template&id=554651ad& */ "./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad&");
/* harmony import */ var _EmployeeGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeGroupForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/groups/EmployeeGroupForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeGroupForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeGroupForm_vue_vue_type_template_id_554651ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeGroupForm.vue?vue&type=template&id=554651ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/EmployeeGroupForm.vue?vue&type=template&id=554651ad& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-md" : "" },
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
                      (_vm.record.readOnly ? true : false)
                        ? _c("span", [
                            _vm._v(
                              _vm._s(_vm.record.description) + " [View Only]"
                            ),
                          ])
                        : !_vm.editing
                        ? _c("span", [_vm._v("Employee Group will be Added")])
                        : _c("span", [
                            _vm._v("Employee Group will be Changed"),
                          ]),
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
                staticClass: "card-body form-tab-body overflow-auto p-3",
                staticStyle: { "min-height": "60vh" },
              },
              [
                _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "General",
                        expression: "activeTab === 'General'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _vm.editing
                          ? _c("text-input", {
                              attrs: {
                                readOnly: _vm.record.code === "SUPER",
                                _class: "col-md-4",
                                popOver:
                                  "<h4>Code</h4>\r\n                        <p>The code is used by the program to identify the Employee Group and control the access to areas of the program based on the Permissions set for this Employee Group.</p>",
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
                        value: _vm.activeTab === "Permissions",
                        expression: "activeTab === 'Permissions'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("permissions-table", {
                      ref: _vm._uid + "-permissions-table",
                      attrs: {
                        "table-id": _vm._uid + "-permissions-table",
                        "lazy-load-flag": true,
                        formTable: true,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                editing: _vm.editing,
                viewing: _vm.viewing,
                preventDelete: _vm.record.code === "SUPER" ? true : false,
                record: "Employee Group",
              },
              on: {
                "ok-clicked": _vm.okClicked,
                "cancel-clicked": _vm.closeForm,
                "delete-clicked": _vm.deleteClicked,
              },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
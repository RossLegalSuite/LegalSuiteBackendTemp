"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-employees-EmployeeRight-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    EmployeeForm: function EmployeeForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-EmployeeForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./EmployeeForm */ "./resources/js/pages/employees/EmployeeForm.vue"));
    },
    EmployeeMatters: function EmployeeMatters() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-EmployeeMatters-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./EmployeeMatters */ "./resources/js/pages/employees/EmployeeMatters.vue"));
    },
    CommonDocuments: function CommonDocuments() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-Documents-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/Documents */ "./resources/js/pages/common/Documents.vue"));
    },
    CommonFeeNotes: function CommonFeeNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-FeeNotes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/FeeNotes */ "./resources/js/pages/common/FeeNotes.vue"));
    },
    CommonFileNotes: function CommonFileNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-FileNotes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/FileNotes */ "./resources/js/pages/common/FileNotes.vue"));
    },
    CommonReminders: function CommonReminders() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-Reminders-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/Reminders */ "./resources/js/pages/common/Reminders.vue"));
    }
  },
  data: function data() {
    return {
      activePage: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentEmployee'])),
  watch: {
    activePage: function activePage(newValue) {
      var _this = this;

      var thisTable = null;

      if (newValue === "Matters") {
        thisTable = this.$refs['employee-right-employee-matters'].table;
        setTimeout(function () {
          thisTable.employeeId = _this.currentEmployee.id;
          thisTable.subTitle = _this.currentEmployee.name;
          thisTable.loadDataTable();
        });
      } else if (newValue === "FeeNotes") {
        thisTable = this.$refs['employee-right-employee-fee-notes'].table;
        setTimeout(function () {
          thisTable.employeeId = _this.currentEmployee.id;
          thisTable.subTitle = _this.currentEmployee.name;
          thisTable.loadDataTable();
        });
      } else if (newValue === "FileNotes") {
        thisTable = this.$refs['employee-right-employee-file-notes'].table;
        setTimeout(function () {
          thisTable.employeeId = _this.currentEmployee.id;
          thisTable.subTitle = _this.currentEmployee.name;
          thisTable.loadDataTable();
        });
      } else if (newValue === "Reminders") {
        thisTable = this.$refs['employee-right-employee-reminders'].table;
        setTimeout(function () {
          thisTable.targetEmployeeId = _this.currentEmployee.id;
          thisTable.subTitle = _this.currentEmployee.name;
          thisTable.loadDataTable();
        });
      } else if (newValue === "Documents") {
        thisTable = this.$refs['employee-right-employee-documents'].table;
        setTimeout(function () {
          thisTable.employeeId = _this.currentEmployee.id;
          thisTable.subTitle = _this.currentEmployee.name;
          thisTable.viewTableFlag = true;
          thisTable.loadDataTable();
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeRight.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeRight.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeRight.vue?vue&type=template&id=502f40ea& */ "./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea&");
/* harmony import */ var _EmployeeRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeRight.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/EmployeeRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeRight_vue_vue_type_template_id_502f40ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeRight.vue?vue&type=template&id=502f40ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeRight.vue?vue&type=template&id=502f40ea& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _vm.$root.employeeLeftTableLoaded
      ? _c(
          "section",
          [
            _c("employee-form", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "Form",
                  expression: "activePage === 'Form'",
                },
              ],
              ref: "employee-right-employee-form",
              attrs: {
                id: "employee-right-employee-form",
                leftPageTableRef: "employees-table",
                modal: false,
                uniqueId: "employee-right",
              },
            }),
            _vm._v(" "),
            _c("employee-matters", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "Matters",
                  expression: "activePage === 'Matters'",
                },
              ],
              ref: "employee-right-employee-matters",
              attrs: { parentType: "Employee" },
            }),
            _vm._v(" "),
            _c("common-fee-notes", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "FeeNotes",
                  expression: "activePage === 'FeeNotes'",
                },
              ],
              ref: "employee-right-employee-fee-notes",
              attrs: { parentType: "Employee" },
            }),
            _vm._v(" "),
            _c("common-file-notes", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "FileNotes",
                  expression: "activePage === 'FileNotes'",
                },
              ],
              ref: "employee-right-employee-file-notes",
              attrs: { parentType: "Employee" },
            }),
            _vm._v(" "),
            _c("common-reminders", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "Reminders",
                  expression: "activePage === 'Reminders'",
                },
              ],
              ref: "employee-right-employee-reminders",
              attrs: { parentType: "Employee" },
            }),
            _vm._v(" "),
            _c("common-documents", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "Documents",
                  expression: "activePage === 'Documents'",
                },
              ],
              ref: "employee-right-employee-documents",
              attrs: { parentType: "Employee" },
            }),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
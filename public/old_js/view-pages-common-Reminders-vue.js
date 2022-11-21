"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-common-Reminders-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CommonRemindersTable: function CommonRemindersTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-reminders-ReminderTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/reminders/ReminderTable */ "./resources/js/pages/reminders/ReminderTable.vue"));
    },
    CommonRemindersForm: function CommonRemindersForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-reminders-ReminderForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/reminders/ReminderForm */ "./resources/js/pages/reminders/ReminderForm.vue"));
    }
  },
  props: {
    parentType: String
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentMatter', 'currentParty', 'currentEmployee'])),
  methods: {
    closeClicked: function closeClicked() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    pageTitle: function pageTitle() {
      if (this.parentType === 'Matter') {
        return this.currentMatter.fileref ? this.currentMatter.fileref + ' - ' + this.currentMatter.description : '';
      } else if (this.parentType === 'Party') {
        return this.currentParty.code ? this.currentParty.code + ' - ' + this.currentParty.name : '';
      } else if (this.parentType === 'Employee') {
        return this.currentEmployee.name ? this.currentEmployee.name : '';
      }
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      this.$refs['common-' + this.parentType.toLowerCase() + '-reminders-form'].currentParentType = this.parentType;
      this.$refs['common-' + this.parentType.toLowerCase() + '-reminders-form'].insertClicked();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/common/Reminders.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/common/Reminders.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reminders.vue?vue&type=template&id=165fc1e6& */ "./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6&");
/* harmony import */ var _Reminders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reminders.vue?vue&type=script&lang=js& */ "./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reminders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/common/Reminders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reminders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminders_vue_vue_type_template_id_165fc1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reminders.vue?vue&type=template&id=165fc1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/Reminders.vue?vue&type=template&id=165fc1e6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card h-100 border-0" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between" },
        [
          _c("h3", { staticClass: "page-title" }, [
            _vm._v("Reminders: "),
            _c("span", { domProps: { innerHTML: _vm._s(_vm.pageTitle()) } }),
          ]),
          _vm._v(" "),
          _c("page-close-button", { on: { closeClicked: _vm.closeClicked } }),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body overflow-auto p-3" },
      [
        _c("common-reminders-table", {
          ref: "common-" + _vm.parentType.toLowerCase() + "-reminders-table",
          attrs: {
            "form-ref":
              "common-" + _vm.parentType.toLowerCase() + "-reminders-form",
            "table-id":
              "common-" + _vm.parentType.toLowerCase() + "-reminders-table",
            "lazy-load-flag": true,
            parentType: _vm.parentType,
          },
        }),
        _vm._v(" "),
        _c("common-reminders-form", {
          ref: "common-" + _vm.parentType.toLowerCase() + "-reminders-form",
          attrs: {
            id: "common-" + _vm.parentType.toLowerCase() + "-reminders-form",
            parentTableRef:
              "common-" + _vm.parentType.toLowerCase() + "-reminders-table",
            modal: true,
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-guest-GuestRight-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
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
    GuestLogin: function GuestLogin() {
      return __webpack_require__.e(/*! import() */ "view-pages-guest-GuestLogin-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./GuestLogin */ "./resources/js/pages/guest/GuestLogin.vue"));
    },
    GuestRegister: function GuestRegister() {
      return __webpack_require__.e(/*! import() */ "view-pages-guest-GuestRegister-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./GuestRegister */ "./resources/js/pages/guest/GuestRegister.vue"));
    } //GuestHelp: () => import("./GuestHelp"),
    //GuestAbout: () => import("./GuestAbout"),
    //GuestTerms: () => import("./GuestTerms"),

  },
  data: function data() {
    return {
      activePage: 'null'
    };
  },
  watch: {
    activePage: function activePage(newValue) {
      $('#guest-right .popover-icon').popover();

      if (newValue === "Login") {
        this.$refs['guest-login'].loadComponent();
      } else if (newValue === "Register") {
        this.$refs['guest-register'].loadComponent();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/guest/GuestRight.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/guest/GuestRight.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestRight.vue?vue&type=template&id=7f1863c4& */ "./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4&");
/* harmony import */ var _GuestRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestRight.vue?vue&type=script&lang=js& */ "./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuestRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/guest/GuestRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRight_vue_vue_type_template_id_7f1863c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestRight.vue?vue&type=template&id=7f1863c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRight.vue?vue&type=template&id=7f1863c4& ***!
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
  return _c(
    "div",
    { attrs: { id: "guest-right" } },
    [
      _c("guest-login", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Login",
            expression: "activePage === 'Login'",
          },
        ],
        ref: "guest-login",
      }),
      _vm._v(" "),
      _c("guest-register", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Register",
            expression: "activePage === 'Register'",
          },
        ],
        ref: "guest-register",
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
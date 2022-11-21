"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-home-HomeLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['leftTabs'])),
  data: function data() {
    return {
      componentName: null,
      emailLoaded: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapMutations)(['displayLeftTab'])), {}, {
    runTest: function runTest() {
      console.log("Run a Test here");
    },
    loadEmail: function loadEmail() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.emailLoaded) {
                  _context.next = 4;
                  break;
                }

                _this.loadTab('Email');

                _context.next = 6;
                break;

              case 4:
                _context.next = 6;
                return _this.$root.emailModal.checkSmtpDetails(root.smtpDetails).then(function (smtpDetails) {
                  _this.loadTab('Email');

                  _this.emailLoaded = true;
                  root.smtpDetails = smtpDetails; // In case the user clicks too quickly on the Email icon

                  // In case the user clicks too quickly on the Email icon
                  if (typeof _this.$root.emailLeftPage === 'undefined') {
                    root.$snotify.simple('Please wait...', 'Initializing', {
                      timeout: 2000,
                      icon: 'img/cogs.gif'
                    });
                    setTimeout(function () {
                      _this.$root.emailLeftPage.initializePage();
                    }, 2000);
                  } else {
                    _this.$root.emailLeftPage.initializePage();
                  }
                })["catch"](function () {
                  console.log('Email settings incomplete');
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadTab: function loadTab(name) {
      var thisTab = this.leftTabs.filter(function (tab) {
        return tab.pageName == name;
      });

      if (thisTab.length) {
        this.displayLeftTab(thisTab[0]);
        this.$router.push({
          name: thisTab[0].routeName
        });
      }
    },
    logout: function logout() {
      axios.post('/logout').then(function (response) {
        window.location = response.data;
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/home/HomeLeft.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/home/HomeLeft.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeLeft.vue?vue&type=template&id=8a272986& */ "./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986&");
/* harmony import */ var _HomeLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home/HomeLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeLeft_vue_vue_type_template_id_8a272986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeLeft.vue?vue&type=template&id=8a272986& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home/HomeLeft.vue?vue&type=template&id=8a272986& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "filofax-page p-2" }, [
    _c("div", { staticClass: "d-flex" }, [
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Matters")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/portfolio.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [_vm._v("Matters")]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Parties")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/user-group.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("Address Book"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("MatterParties")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/matter-parties.png" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [_vm._v("Parties")]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex" }, [
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("FeeNotes")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/finance.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("Fee Notes"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("FileNotes")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/notepad.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("File Notes"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Reminders")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/bulletin-board.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("Reminders"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("DocLog")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/bookmark.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("Document Log"),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-none" }, [
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Employees")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/profile-id.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [
            _vm._v("Employees"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "program-icon", on: { click: _vm.loadEmail } }, [
        _c("img", { attrs: { src: "/icons/mail2.gif" } }),
        _vm._v(" "),
        _c("div", { staticClass: "program-icon-text" }, [_vm._v("Email")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Reports")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/chart-graph.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [_vm._v("Reports")]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex" }, [
      _c(
        "div",
        {
          staticClass: "program-icon",
          on: {
            click: function ($event) {
              return _vm.loadTab("Settings")
            },
          },
        },
        [
          _c("img", { attrs: { src: "/icons/under-construction.gif" } }),
          _vm._v(" "),
          _c("div", { staticClass: "program-icon-text" }, [_vm._v("Settings")]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "program-icon", on: { click: _vm.logout } }, [
        _c("img", { attrs: { src: "/icons/power.gif" } }),
        _vm._v(" "),
        _c("div", { staticClass: "program-icon-text" }, [_vm._v("Logout")]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-doclog-DoclogLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _left_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../left-template */ "./resources/js/pages/left-template.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": _left_template__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    DoclogTable: function DoclogTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-doclog-DoclogTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DoclogTable */ "./resources/js/pages/doclog/DoclogTable.vue"));
    }
  },
  data: function data() {
    return {
      rightPage: null,
      form: null,
      pageName: "DocLog",
      selectedRows: [],
      selectedAllFlag: false,
      tableMounted: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['leftTabs', 'activeLeftTabs'])),
  watch: {
    tableMounted: function tableMounted() {
      this.initializeTable();
    }
  },
  activated: function activated() {
    if ($('#doclog-table').length) {
      var scrollTop = $('#doclog-table' + '_wrapper .dataTables_scrollBody').offset().top;
      var tableTop = $('#doclog-table').offset().top;
      if (tableTop > scrollTop) this.table.table.ajax.reload();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var thisTab = this.leftTabs.filter(function (tab) {
      return tab.pageName === _this.pageName;
    });
    if (thisTab.length) this.displayLeftTab(thisTab[0]);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapMutations)(['displayLeftTab', 'hideLeftTab'])), {}, {
    initializeTable: function initializeTable() {
      var _this2 = this;

      // Order by Date, Time descending
      this.table.initialOrder = [[1, "desc"], [2, "desc"]];
      this.table.tableOptions = {
        tableBottom: 80
      };
      this.table.loadDataTable(function () {
        _this2.$root.doclogLeftTableLoaded = true;
      });
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      var thisForm = root.$refs['pages'].$refs["right-page"].$refs['doclog-form'];
      thisForm.currentParentType = thisForm.record.parentType || 'Matter';
      thisForm.insertClicked();
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/left-template.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/left-template.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.extend({
  mounted: function mounted() {
    var _this = this;

    var thisTab = this.leftTabs.filter(function (tab) {
      return tab.pageName == _this.pageName;
    });
    if (thisTab.length) this.displayLeftTab(thisTab[0]);
    this.$nextTick(function () {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('tab')) {
        _this.loadPage(urlParams.get('tab'));
      }
    });
  },
  methods: {
    closeLeftPage: function closeLeftPage(pageName) {
      var thisTabIndex = this.activeLeftTabs.findIndex(function (tab) {
        return tab.pageName == pageName;
      });
      var siblingTab = this.activeLeftTabs[thisTabIndex - 1];
      this.hideLeftTab(pageName);
      this.$router.push({
        name: siblingTab.routeName
      });
    },
    loadPages: function loadPages(pageName) {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].loadPages(pageName);
    },
    loadPage: function loadPage(pageName) {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].loadPage(pageName);
    },
    clearPages: function clearPages() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    tryDeleteTaggedRecords: function tryDeleteTaggedRecords(table) {
      var _this2 = this;

      axios.post('/' + table + '/delete', {
        id: this.selectedRows
      }).then(function (response) {
        if (response.data.errors) {
          var message = response.data.errors.length + ' ' + _this2.table.plural + ' were not deleted because they are linked to other records in the program';

          if (response.data.errors.length === 1) {
            message = '1 ' + _this2.table.singular + ' was not deleted because it is linked to other records in the program';
          }

          root.$snotify.simple(message, 'Delete Result', {
            timeout: 5000
          });
        }

        _this2.table.loadDataTable();
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogLeft.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogLeft.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoclogLeft.vue?vue&type=template&id=06aec9c6& */ "./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6&");
/* harmony import */ var _DoclogLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoclogLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DoclogLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/doclog/DoclogLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogLeft_vue_vue_type_template_id_06aec9c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogLeft.vue?vue&type=template&id=06aec9c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogLeft.vue?vue&type=template&id=06aec9c6& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header doclog-bg" }, [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("page-close-button", {
            on: {
              closeClicked: function ($event) {
                return _vm.closeLeftPage(_vm.pageName)
              },
            },
          }),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body overflow-auto pb-1 pt-3 px-3" },
      [
        _c("doclog-table", {
          ref: "doclog-table",
          attrs: {
            "lazy-load-flag": true,
            tagging: false,
            "form-ref": "doclog-form",
            "table-id": "doclog-table",
            parentType: "General",
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-envelope-o mr-2" }),
      _vm._v("Document Log"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
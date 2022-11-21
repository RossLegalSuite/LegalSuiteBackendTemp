"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-MatterLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    MatterTable: function MatterTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-MatterTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MatterTable */ "./resources/js/pages/matters/MatterTable.vue"));
    }
  },
  data: function data() {
    return {
      tableMounted: false,
      form: null,
      pageName: "Matters",
      selectedRows: [],
      selectedAllFlag: false,
      generateDocumentsFlag: true,
      generateDocumentsSource: 'Matter',
      generateDocumentsPlural: 'Matters'
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['leftTabs', 'currentMatter', 'activeLeftTabs'])),
  watch: {
    tableMounted: function tableMounted() {
      this.initializeTable();
    }
  },
  activated: function activated() {
    // Fixing bug between Vue keep-alive functionality and DataTables
    // The activated event in Vue means keep-alive has re-activated the component
    // If the user has scrolled the table - DataTables scroller sets the absolute position of the table
    // But if the user goes to another Tab and then back to this Tab, the table looks blank because 
    // the Scroller's absolute position is still there (and the table is now out of the view port)
    // The simplest solution is to compare the top positions (to see if the user has scrolled)
    // and, if so, reload the table (which sorts everything out)
    // This code needs to be on any Left Page that has a table
    if ($('#matters-table').length) {
      var scrollTop = $('#matters-table' + '_wrapper .dataTables_scrollBody').offset().top;
      var tableTop = $('#matters-table').offset().top;
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
      this.table.tableOptions = {
        tableBottom: 80
      };
      this.table.loadDataTable(function () {
        // Used to lazy load the Form (and all its sub components) on the right
        //https://vueschool.io/articles/vuejs-tutorials/lazy-loading-individual-vue-components-and-prefetching/
        root.matterLeftTableLoaded = true; // root.matterScrollBodyPosition = $('#' + this.table.tableId + '_wrapper .dataTables_scrollBody').offset();
        // root.matterTablePosition = $('#' + this.table.tableId).offset();
        // console.log("root.matterScrollBodyPosition",root.matterScrollBodyPosition);
        // console.log("root.matterTablePosition",root.matterTablePosition);
        //$('#' + this.table.tableId).css(root.matterTablePosition);
      });
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      this.form = root.$refs['pages'].$refs["right-page"].$refs['matter-right-matter-form'];
      if (!this.form.permission('Insert')) return;

      if (root.currentEmployee.defaultclientid) {
        this.form.partySelected({
          recordid: root.currentEmployee.defaultclientid
        });
      } else {
        this.form.$refs[this.form.uniqueId + '-select-matter-client'].selectParty(this.form);
      }
    }
    /*deleteTaggedRecords() {
          this.tryDeleteTaggedRecords('matters');
      },*/

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

/***/ "./resources/js/pages/matters/MatterLeft.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/matters/MatterLeft.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterLeft.vue?vue&type=template&id=87845ce4& */ "./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4&");
/* harmony import */ var _MatterLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/MatterLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterLeft_vue_vue_type_template_id_87845ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterLeft.vue?vue&type=template&id=87845ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterLeft.vue?vue&type=template&id=87845ce4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header matters-bg" }, [
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
        _c("matter-table", {
          ref: "matters-table",
          attrs: {
            lazyLoadFlag: true,
            tagging: true,
            "form-ref": "matter-right-matter-form",
            tableId: "matters-table",
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
      _c("i", { staticClass: "fa fa-briefcase mr-2" }),
      _vm._v("Matters"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
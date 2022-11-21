"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-MatterRight-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CommonFeeNotes: function CommonFeeNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-FeeNotes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/FeeNotes */ "./resources/js/pages/common/FeeNotes.vue"));
    },
    CommonFileNotes: function CommonFileNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-FileNotes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/FileNotes */ "./resources/js/pages/common/FileNotes.vue"));
    },
    CommonReminders: function CommonReminders() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-Reminders-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/Reminders */ "./resources/js/pages/common/Reminders.vue"));
    },
    CommonDocuments: function CommonDocuments() {
      return __webpack_require__.e(/*! import() */ "view-pages-common-Documents-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/common/Documents */ "./resources/js/pages/common/Documents.vue"));
    }
  },
  data: function data() {
    return {
      activePage: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentMatter'])),
  watch: {
    activePage: function activePage(newValue) {
      var thisTable = null;

      if (newValue === "FeeNotes") {
        thisTable = this.$refs['matter-right-matter-fee-notes'].table;
        thisTable.where = 'matter.recordid,=,' + this.currentMatter.recordid;
        thisTable.subTitle = this.currentMatter.fileref + ' - ' + this.currentMatter.description;
        setTimeout(thisTable.loadDataTable);
      } else if (newValue === "FileNotes") {
        thisTable = this.$refs['matter-right-matter-file-notes'].table;
        thisTable.where = 'matter.recordid,=,' + this.currentMatter.recordid;
        thisTable.subTitle = this.currentMatter.fileref + ' - ' + this.currentMatter.description;
        setTimeout(thisTable.loadDataTable);
      } else if (newValue === "Reminders") {
        thisTable = this.$refs['matter-right-matter-reminders'].table;
        thisTable.where = 'matter.recordid,=,' + this.currentMatter.recordid;
        thisTable.subTitle = this.currentMatter.fileref + ' - ' + this.currentMatter.description;
        setTimeout(thisTable.loadDataTable);
      } else if (newValue === "Documents") {
        thisTable = this.$refs['matter-right-matter-documents'].table;
        thisTable.where = 'matter.recordid,=,' + this.currentMatter.recordid;
        thisTable.subTitle = this.currentMatter.fileref + ' - ' + this.currentMatter.description; //thisTable.viewTableFlag = true;

        setTimeout(thisTable.loadDataTable);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matters/MatterRight.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/matters/MatterRight.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterRight.vue?vue&type=template&id=08c17a25& */ "./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25&");
/* harmony import */ var _MatterRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterRight.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/MatterRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterRight_vue_vue_type_template_id_08c17a25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterRight.vue?vue&type=template&id=08c17a25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterRight.vue?vue&type=template&id=08c17a25& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm.$root.matterLeftTableLoaded
      ? _c(
          "section",
          [
            _c("matter-form", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activePage === "Form",
                  expression: "activePage === 'Form'",
                },
              ],
              ref: "matter-right-matter-form",
              attrs: {
                id: "matter-right-matter-form",
                leftPageTableRef: "matters-table",
                modal: false,
                uniqueId: "matter-right",
              },
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
              ref: "matter-right-matter-fee-notes",
              attrs: { parentType: "Matter" },
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
              ref: "matter-right-matter-file-notes",
              attrs: { parentType: "Matter" },
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
              ref: "matter-right-matter-reminders",
              attrs: { parentType: "Matter" },
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
              ref: "matter-right-matter-documents",
              attrs: { parentType: "Matter" },
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
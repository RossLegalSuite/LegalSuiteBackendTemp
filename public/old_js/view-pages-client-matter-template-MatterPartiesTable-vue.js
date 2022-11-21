"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matter-template-MatterPartiesTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    MatterPartiesFilterForm: function MatterPartiesFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-matter-parties-MatterPartiesFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matter-parties/MatterPartiesFilterForm */ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/matparty/get";
    this.route = "matparty";
    this.tableName = 'matparty';
    this.title = 'Parties';
    this.plural = 'Parties';
    this.singular = 'Party'; //Order by Role and Sorter (hidden columns in table)

    this.initialOrder = [[1, "asc"], [2, "asc"], [3, "asc"], [4, "asc"]];
    this.selectraw = ["CASE WHEN MatParty.MatterId > 0 THEN CONCAT('<span onclick=\"editRecord(''globalMatterForm'',', MatParty.MatterId,')\" title=\"View the Matter\" class=\"cp mr-1 lookup-wrapper\">',CONCAT(Matter.FileRef,' - ',Matter.Description),'</span>') ELSE '' END as matterlink", "CASE WHEN MatParty.PartyId > 0 THEN  CONCAT('<span onclick=\"editRecord(''globalPartyForm'',', MatParty.PartyId,')\" title=\"View the Party\" class=\"cp mr-1 lookup-wrapper\">',CONCAT(Party.MatterPrefix,' - ',Party.Name),'</span>') ELSE '' END as partylink", 'Role.Description as roledescription', 'matparty.recordid', 'matparty.matterid', 'matparty.partyid', 'matparty.sorter', 'Party.Name as name', 'Party.matterprefix', 'Matter.fileref', 'Matter.Description as matterdescription'];
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = 0;
      var tableColumnDefs = [{
        title: "Party",
        name: "party.matterprefix",
        data: null,
        width: "25%",
        targets: targets + 1,
        render: function render(data) {
          return htmlDecode(data.partylink);
        }
      }, {
        title: "Matter",
        name: 'matter.fileref',
        filterExclude: true,
        data: null,
        orderable: false,
        visible: true,
        width: "25%",
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.matterlink);
        }
      }, {
        title: "Role",
        name: "role.description",
        data: null,
        width: "20%",
        orderable: false,
        targets: targets + 3,
        render: function render(data) {
          var sorterIndicator = '';

          if (parseInt(data.sorter) > 1) {
            sorterIndicator = ' (' + data.sorter + ')';
          }

          return htmlDecode(data.roledescription) + sorterIndicator;
        }
      }, {
        title: "",
        visible: false,
        searchable: false,
        filterExclude: true,
        name: "role.description",
        data: null,
        targets: targets + 4,
        render: function render(data) {
          return data.roledescription;
        }
      }, {
        title: "",
        visible: false,
        searchable: false,
        filterExclude: true,
        name: "matparty.sorter",
        data: null,
        targets: targets + 5,
        render: function render(data) {
          return data.sorter;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/MatterPartiesTable.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterPartiesTable.vue?vue&type=template&id=2602adff& */ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff&");
/* harmony import */ var _MatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterPartiesTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matter-template/MatterPartiesTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesTable_vue_vue_type_template_id_2602adff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesTable.vue?vue&type=template&id=2602adff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/MatterPartiesTable.vue?vue&type=template&id=2602adff& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between table-functions-row" },
        [
          _c("global-search"),
          _vm._v(" "),
          _c(
            "div",
            [_c("filter-form-button"), _vm._v(" "), _c("table-options")],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("table", {
        staticClass: "table bordered",
        staticStyle: { width: "100%" },
        attrs: { id: _vm.tableId },
      }),
      _vm._v(" "),
      _c("matter-parties-filter-form", {
        ref: _vm.tableId + "-filter-form",
        attrs: { id: _vm.tableId + "-filter-form" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
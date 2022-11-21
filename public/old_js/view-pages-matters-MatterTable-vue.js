"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-MatterTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
/* harmony import */ var _matter_columns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matter-columns.js */ "./resources/js/pages/matters/matter-columns.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"], _matter_columns_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    MatterFilterFormButton: function MatterFilterFormButton() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-MatterFilterFormButton-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MatterFilterFormButton */ "./resources/js/pages/matters/MatterFilterFormButton.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matters/matter-columns.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/matters/matter-columns.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.extend({
  created: function created() {
    this.url = "/matter/get";
    this.route = "matters";
    this.tableName = "matter";
    this.title = 'Matters';
    this.plural = 'Matters';
    this.singular = 'Matter';
    this.selectraw = ['Matter.RecordId', 'Matter.ClientId', 'Matter.FileRef', 'Matter.Description', "CASE WHEN ISNULL(Matter.DateInstructed,0) = 0 OR Matter.DateInstructed = 0 OR Matter.DateInstructed > 100000 THEN '' ELSE  CONVERT(VarChar(12),CAST(Matter.DateInstructed-36163 as DateTime),106) END AS FormattedDateInstructed", 'ClientFeeSheet.Description AS ClientFeeSheetDescription', 'Matter.ConveyancingStatusflag', "CASE WHEN ISNULL(ConveyData.Step4Completed,0) = 0 OR ConveyData.Step4Completed = 0 OR ConveyData.Step4Completed > 100000 THEN '' ELSE  CONVERT(VarChar(12),CAST(ConveyData.Step4Completed-36163 as DateTime),106) END AS FormattedStep4Completed", "CASE WHEN ISNULL(ConveyData.Step6Completed,0) = 0 OR ConveyData.Step6Completed = 0 OR ConveyData.Step6Completed > 100000 THEN '' ELSE  CONVERT(VarChar(12),CAST(ConveyData.Step6Completed-36163 as DateTime),106) END AS FormattedStep6Completed", 'Matter.Actual', 'Matter.Transfer', 'Matter.ConsolidateID', 'Matter.ConsolidatedFlag', 'Party.Name as PartyName', 'Employee.Name as EmployeeName', "MatType.Description AS MatTypeDescription", "Docgen.Description AS DocGenDescription", "CostCentre.Description AS CostCentreDescription", "Branch.Description AS BranchDescription"];
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var _this = this;

      if (this.tagTableFlag) {
        this.selectraw.push("CASE WHEN ISNULL(LolTagged.taggedId,0) = 0 THEN 0 ELSE 1 END AS tagged");
      }

      var targets = 0;

      if (this.noEditButtonFlag) {
        targets = this.tagTableFlag ? 0 : -1;
      } else {
        targets = this.tagTableFlag ? 1 : 0;
      }

      var tableColumnDefs = [{
        title: "File Ref",
        name: "Matter.FileRef",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Matter',
        width: "12%",
        data: null,
        targets: targets + 1,
        render: function render(data) {
          // return 'xyz';
          if (_this.selectTableFlag) {
            return lookupWrapper('Matter', data.recordid, htmlDecode(data.fileref));
          } else {
            return htmlDecode(data.fileref);
          }
        }
      }, {
        title: "Client",
        name: "Party.Name",
        filterColumnName: 'Party.MatterPrefix',
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Party',
        width: "20%",
        data: null,
        orderable: false,
        targets: targets + 2,
        render: function render(data) {
          return lookupWrapper('Client', data.clientid, htmlDecode(data.partyname));
        }
      }, {
        title: "Description",
        name: "Matter.Description",
        width: "20%",
        data: null,
        orderable: false,
        targets: targets + 3,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Matter Type",
        name: "MatType.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'MatterType',
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.mattypedescription);
        }
      }, {
        title: "Document Set",
        name: "DocGen.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'DocumentSet',
        visible: false,
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 5,
        render: function render(data) {
          return htmlDecode(data.docgendescription);
        }
      }, {
        title: "Cost Centre",
        name: "CostCentre.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'CostCentre',
        visible: false,
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 6,
        render: function render(data) {
          return htmlDecode(data.costcentredescription);
        }
      }, {
        title: "Belongs To",
        name: "Employee.Name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        visible: false,
        data: null,
        orderable: false,
        width: "15%",
        targets: targets + 7,
        render: function render(data) {
          return htmlDecode(data.employeename);
        }
      }, {
        title: "Instructed",
        name: "Matter.DateInstructed",
        filterType: 'Date',
        visible: false,
        width: "12%",
        data: null,
        orderable: false,
        targets: targets + 8,
        render: function render(data) {
          return data.formatteddateinstructed;
        }
      }, {
        title: "Fee Sheet",
        name: "ClientFeeSheet.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'FeeSheet',
        visible: false,
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 9,
        render: function render(data) {
          return htmlDecode(data.clientfeesheetdescription);
        }
      }, {
        title: "Branch",
        name: "Branch.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Branch',
        visible: false,
        data: null,
        orderable: false,
        width: "15%",
        targets: targets + 10,
        render: function render(data) {
          return htmlDecode(data.branchdescription);
        }
      }, {
        title: "Lodged",
        name: "ConveyData.Step4Completed",
        filterType: 'Date',
        visible: false,
        width: "12%",
        data: null,
        orderable: false,
        targets: targets + 11,
        render: function render(data) {
          return data.formattedstep4completed;
        }
      }, {
        title: "Registered",
        name: "ConveyData.Step6Completed",
        filterType: 'Date',
        visible: false,
        width: "12%",
        data: null,
        orderable: false,
        targets: targets + 12,
        render: function render(data) {
          return data.formattedstep6completed;
        }
      }, {
        title: "Conveyancing Status",
        name: "Matter.ConveyancingStatusFlag",
        filterType: 'Dropdown',
        filterControl: 'Dropdown',
        filterOptions: [{
          value: '1',
          label: 'New Instruction'
        }, {
          value: '2',
          label: 'Amended Instruction'
        }, {
          value: '3',
          label: 'Lodged'
        }, {
          value: '4',
          label: 'Registered'
        }, {
          value: '5',
          label: 'NTU Instruction'
        }, {
          value: '6',
          label: 'Withdrawn'
        }, {
          value: '7',
          label: 'Cancelled'
        }],
        width: "15%",
        data: null,
        orderable: false,
        //filterExclude: true,
        visible: false,
        targets: targets + 13,
        render: function render(data) {
          if (data.conveyancingstatusflag == 1) {
            return 'New Instruction';
          } else if (data.conveyancingstatusflag == 2) {
            return 'Amended Instruction';
          } else if (data.conveyancingstatusflag == 3) {
            return 'Lodged';
          } else if (data.conveyancingstatusflag == 4) {
            return 'Registered';
          } else if (data.conveyancingstatusflag == 5) {
            return 'NTU';
          } else if (data.conveyancingstatusflag == 6) {
            return 'Withdrawn';
          } else if (data.conveyancingstatusflag == 7) {
            return 'Cancelled';
          } else {
            return data.conveyancingstatusflag;
          }
        }
      }, {
        searchable: false,
        title: "Business Balance",
        name: "Matter.Actual",
        //calculatedColumn: true, // Uses "having" clause instead of "where"
        filterType: 'Number',
        "class": "text-number",
        visible: false,
        data: null,
        orderable: false,
        width: '20%',
        targets: targets + 14,
        render: function render(data) {
          if (data.actual) {
            return htmlRedText(data.actual, parseFloat(data.actual) < 0);
          } else {
            return '0.00';
          }
        }
      }, {
        searchable: false,
        title: "Transfer Available",
        name: "Matter.Transfer",
        //calculatedColumn: true, // Uses "having" clause instead of "where"
        filterType: 'Number',
        "class": "text-number",
        visible: false,
        data: null,
        orderable: false,
        width: '20%',
        targets: targets + 15,
        render: function render(data) {
          if (data.transfer) {
            return htmlRedText(data.transfer, parseFloat(data.transfer) < 0);
          } else {
            return '0.00';
          }
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "Matter.ConsolidateId",
        data: null,
        orderable: false,
        targets: targets + 16,
        render: function render(data) {
          return data.consolidateid;
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "Matter.ConsolidatedFlag",
        data: null,
        orderable: false,
        targets: targets + 17,
        render: function render(data) {
          return data.consolidatedflag;
        }
      }];
      return tableColumnDefs;
    }
  }
}));

/***/ }),

/***/ "./resources/js/pages/matters/MatterTable.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/matters/MatterTable.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterTable.vue?vue&type=template&id=207c6a52& */ "./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52&");
/* harmony import */ var _MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/MatterTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_207c6a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterTable.vue?vue&type=template&id=207c6a52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterTable.vue?vue&type=template&id=207c6a52& ***!
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between table-functions-row" },
        [
          _c("column-search", {
            attrs: {
              searchableColumns: [
                { title: "File Ref", name: "Matter.FileRef" },
                { title: "Description", name: "Matter.Description" },
                { title: "Client Name", name: "Party.Name" },
              ],
              initialSearchColumn: "File Ref",
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.taggedDropDown
                ? _c("tagged-drop-down", { attrs: { "table-id": _vm.tableId } })
                : _vm._e(),
              _vm._v(" "),
              _c("matter-filter-form-button"),
              _vm._v(" "),
              _vm.optionsButton ? _c("table-options") : _vm._e(),
              _vm._v(" "),
              _vm.newRecordButton
                ? _c("new-record-button", {
                    attrs: {
                      type: "button",
                      title: "Create a new " + _vm.singular,
                      text: "New " + _vm.singular,
                    },
                  })
                : _vm._e(),
            ],
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
      _c("table-footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
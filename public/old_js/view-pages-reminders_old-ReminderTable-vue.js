"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-reminders_old-ReminderTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ReminderFilterForm: function ReminderFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-reminders_old-ReminderFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ReminderFilterForm */ "./resources/js/pages/reminders_old/ReminderFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/reminders/get";
    this.exportUrl = "/reminders/export";
    this.route = "reminders";
    this.title = 'Reminders';
    this.plural = 'Reminders';
    this.singular = 'Reminder';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var parentColumnVisible = this.parentType === 'General' ? true : false;
      var tableColumnDefs = [{
        title: "Created Date",
        name: "date",
        filterColumnName: "reminders.date",
        filterType: 'Date',
        data: null,
        visible: false,
        width: "12%",
        targets: targets + 1,
        render: function render(data) {
          return data.dateFormatted;
        }
      }, {
        title: "Created By",
        name: "created.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        visible: false,
        width: "15%",
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.createdEmployeeName);
        }
      }, {
        title: "Target Date",
        name: "targetDate",
        filterColumnName: "reminders.targetDate",
        data: null,
        filterType: 'Date',
        width: "12%",
        targets: targets + 3,
        render: function render(data) {
          return data.targetDate;
        }
      }, {
        title: "Assigned To",
        name: "target.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        width: "15%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.targetEmployeeName);
        }
      }, {
        title: "Description",
        name: "reminders.description",
        data: null,
        width: "35%",
        targets: targets + 5,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Type",
        name: "reminders.parentType",
        data: null,
        filterTitle: 'Linked To',
        filterType: 'RadioButton',
        filterControl: 'RadioButton',
        filterOptions: [{
          text: 'General',
          value: 'General'
        }, {
          text: 'Matter',
          value: 'Matter'
        }, {
          text: 'Party',
          value: 'Party'
        }],
        width: "10%",
        visible: false,
        targets: targets + 6,
        render: function render(data) {
          return data.parentType;
        }
      }, {
        name: 'parent',
        title: "Linked To",
        filterExclude: true,
        data: null,
        width: "15%",
        visible: parentColumnVisible,
        targets: targets + 7,
        render: function render(data) {
          if (data.parentType === 'Matter') {
            return lookupWrapper(data.parentType, data.matterId, htmlDecode(data.parent));
          } else if (data.parentType === 'Party') {
            return lookupWrapper(data.parentType, data.partyId, htmlDecode(data.parent));
          } else if (data.parentType === 'Employee') {
            return lookupWrapper(data.parentType, data.employeeId, htmlDecode(data.parent));
          } else {
            return htmlDecode(data.parent);
          }
        }
      }, {
        title: "Matter",
        name: "matters.fileRef",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Matter',
        visible: false,
        data: null,
        width: "15%",
        targets: targets + 8,
        render: function render(data) {
          return htmlDecode(data.matterFileRef);
        }
      }, {
        title: "Party",
        name: "parties.code",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Party',
        visible: false,
        data: null,
        width: "15%",
        targets: targets + 9,
        render: function render(data) {
          return htmlDecode(data.code);
        }
      }, {
        title: "Completed",
        name: "completedDate",
        filterColumnName: "reminders.completedFlag",
        filterType: 'Boolean',
        filterControl: 'RadioButton',
        filterOptions: [{
          text: 'Yes',
          value: '1'
        }, {
          text: 'No',
          value: '0'
        }],
        data: null,
        width: "15%",
        targets: targets + 10,
        render: function render(data) {
          var returnData = '';
          if (data.completedFlag) returnData = data.completedDate;
          return returnData;
        }
      }, {
        title: "Repeat",
        name: "recurringFlag",
        filterColumnName: "reminders.recurringFlag",
        filterType: 'Boolean',
        filterTitle: 'Repeating',
        filterControl: 'RadioButton',
        filterOptions: [{
          text: 'Yes',
          value: '1'
        }, {
          text: 'No',
          value: '0'
        }],
        visible: false,
        data: null,
        width: "15%",
        targets: targets + 11,
        render: function render(data) {
          var returnData = '';

          if (data.recurringFlag) {
            returnData = data.recurringPeriod;
            if (data.recurringPeriod === 'Custom') returnData = 'Every ' + data.recurringCustomAmount + ' ' + data.recurringCustomUnits;
          }

          return returnData;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderTable.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReminderTable.vue?vue&type=template&id=5a8ff3c6& */ "./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6&");
/* harmony import */ var _ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReminderTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reminders_old/ReminderTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_5a8ff3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderTable.vue?vue&type=template&id=5a8ff3c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderTable.vue?vue&type=template&id=5a8ff3c6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between table-functions-row" },
        [
          _c("global-search"),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.taggedDropDown
                ? _c("tagged-drop-down", { attrs: { "table-id": _vm.tableId } })
                : _vm._e(),
              _vm._v(" "),
              _c("filter-form-button"),
              _vm._v(" "),
              _c("table-options"),
              _vm._v(" "),
              _c("new-record-button", {
                attrs: {
                  type: "button",
                  title: "Create a new " + _vm.singular,
                  text: "New " + _vm.singular,
                },
              }),
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
      _vm._v(" "),
      _c("reminder-filter-form", {
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
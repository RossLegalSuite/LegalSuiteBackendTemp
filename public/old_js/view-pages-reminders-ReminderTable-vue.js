"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-reminders-ReminderTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ReminderFilterForm: function ReminderFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-reminders-ReminderFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ReminderFilterForm */ "./resources/js/pages/reminders/ReminderFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/todonote/get";
    this.route = "reminder";
    this.tableName = 'todonote';
    this.title = 'Reminders';
    this.plural = 'Reminders';
    this.singular = 'Reminder';
  },
  methods: {
    /*
    protected $fillable = [
    'matterid',
    'employeeid',
    'date',
    'description',
    'nextdocumentid',
    'datedone',
    'recordid',
    'todoitemid',
    'autonotifydate',
    'completedbyid',
    'completedflag',
    'completedbynotes',
    'partyid',
    'createdbyid',
    'createddate',
    'createdtime',
    'completedtime',
    'dateadjustment',
    'outlooktaskid',
    'outlookappointmentid',
    'appttime',
    'recurringflag',
    'recurringperiod',
    'recurringcustomtype',
    'recurringcustomamount',
    'priority'
    ];
        */
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var parentColumnVisible = this.parentType === 'General' ? true : false;
      var tableColumnDefs = [{
        title: "Created",
        name: "todonote.createddate",
        filterColumnName: "todonote.createddate",
        filterType: 'Date',
        data: null,
        visible: false,
        width: "12%",
        targets: targets + 1,
        render: function render(data) {
          return data.formattedcreateddate;
        }
      }, {
        title: "Created By",
        name: "createdby.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        orderable: false,
        searchable: false,
        visible: false,
        width: "15%",
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.createdbyemployee);
        }
      }, {
        title: "Date",
        name: "todonote.date",
        filterColumnName: "todonote.date",
        filterType: 'Date',
        data: null,
        width: "12%",
        targets: targets + 3,
        render: function render(data) {
          return data.formatteddate;
        }
      }, {
        title: "Matter",
        name: 'matter.fileref',
        filterExclude: true,
        orderable: false,
        data: null,
        visible: parentColumnVisible,
        width: "15%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.parentlink);
        }
      }, {
        title: "Description",
        name: "todonote.description",
        data: null,
        orderable: false,
        width: "35%",
        targets: targets + 5,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Assigned To",
        name: "employee.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        orderable: false,
        searchable: false,
        visible: false,
        width: "15%",
        targets: targets + 6,
        render: function render(data) {
          return htmlDecode(data.employeename);
        }
      }, {
        title: "Done",
        name: "completedFlag",
        filterColumnName: "todonote.completedflag",
        filterType: 'Boolean',
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
        width: "7%",
        targets: targets + 7,
        render: function render(data) {
          return data.completedFlag ? 'Yes' : 'No';
        }
      }, {
        title: "Overdue",
        name: "overdueFlag",
        filterColumnName: "overdueflag",
        filterType: 'Boolean',
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
        width: "7%",
        targets: targets + 8,
        render: function render(data) {
          return data.overdueFlag ? 'Yes' : 'No';
        }
      }, {
        title: "Completed By",
        name: "completedby.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        visible: false,
        width: "15%",
        targets: targets + 9,
        render: function render(data) {
          return htmlDecode(data.completedbyemployee);
        }
      }, {
        title: "Completed",
        name: "todonote.datedone",
        filterColumnName: "todonote.datedone",
        filterType: 'Date',
        data: null,
        width: "12%",
        targets: targets + 10,
        render: function render(data) {
          return data.formatteddatedone;
        }
      }, {
        title: "Days Taken",
        name: 'DaysTaken',
        filterExclude: true,
        orderable: false,
        searchable: false,
        data: null,
        width: "10%",
        targets: targets + 11,
        render: function render(data) {
          return data.daystaken != '0' ? data.daystaken : '';
        }
      }, {
        title: "Variance",
        name: 'DaysDiff',
        filterExclude: true,
        orderable: false,
        searchable: false,
        visible: false,
        data: null,
        width: "10%",
        targets: targets + 12,
        render: function render(data) {
          return parseInt(data.datedone) > 0 ? data.daysdiff : '';
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderTable.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderTable.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReminderTable.vue?vue&type=template&id=8d818a96& */ "./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96&");
/* harmony import */ var _ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReminderTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reminders/ReminderTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderTable_vue_vue_type_template_id_8d818a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderTable.vue?vue&type=template&id=8d818a96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderTable.vue?vue&type=template&id=8d818a96& ***!
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
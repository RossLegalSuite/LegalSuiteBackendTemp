"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-reminders-ReminderForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"], _pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectEmployee: function SelectEmployee() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-SelectEmployee-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/employees/SelectEmployee */ "./resources/js/pages/employees/SelectEmployee.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Reminders'
    },
    secProc: {
      type: String,
      "default": 'Matters - Desktop - Reminders'
    },
    uniqueId: String
  },
  data: function data() {
    return {
      activeTab: 'General',
      periods: [{
        value: 'Daily',
        label: 'Daily'
      }, {
        value: 'Weekly',
        label: 'Weekly'
      }, {
        value: 'Fortnightly',
        label: 'Fortnightly'
      }, {
        value: 'Monthly',
        label: 'Monthly'
      }, {
        value: 'Bi-Monthly',
        label: 'BiMonthly'
      }, {
        value: '6-Months',
        label: 'Every 6 Months'
      }, {
        value: 'Yearly',
        label: 'Yearly'
      }, {
        value: 'Custom',
        label: 'Custom'
      }],
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Advanced",
        title: "Advanced",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['currentMatter'])),
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.setGeneralTab();
      axios.post('/todonote/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.selectEmployee.record = {
          recordid: _this.record.employeeid,
          name: htmlDecode(_this.record.employeename)
        };
        _this.selectCompletedEmployee.record = {
          recordid: _this.record.completedbyid,
          name: htmlDecode(_this.record.completedbyemployee)
        };
        _this.selectMatter.matter = {
          id: _this.record.matterid,
          fileref: htmlDecode(_this.record.matterfileref),
          description: htmlDecode(_this.record.matterdescription)
        };

        _this.initFormData();
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      this.setGeneralTab();
      this.record = {
        createdbyid: root.loggedInEmployeeId,
        formattedcreateddate: moment().format(root.control.dateformat),
        formattedcreatedtime: moment().format('HH:mm:ss'),
        formatteddate: moment().add(1, 'week').format(root.control.dateformat),
        formatteddatetimedone: null,
        employeename: root.loggedInEmployeeName,
        employeeid: root.loggedInEmployeeId,
        matterid: this.currentMatter.recordid || null,
        description: null,
        partyid: null,
        completedbyid: null,
        completedflag: null,
        completedbynotes: null,
        completedtime: null,
        datedone: null,
        dateadjustment: null,
        source: 'W',
        nextdocumentid: null,
        todoitemid: null,
        autonotifydate: null,
        recurringflag: '0',
        recurringperiod: null,
        recurringcustomtype: null
      };
      this.selectMatter.matter = this.currentMatter.recordid ? {
        recordid: this.currentMatter.recordid,
        fileref: htmlDecode(this.currentMatter.fileref),
        description: htmlDecode(this.currentMatter.description)
      } : {
        recordid: null,
        fileref: '',
        description: ''
      };
      this.selectEmployee.record = {
        recordid: root.loggedInEmployeeId,
        name: root.loggedInEmployeeName
      };
      this.selectCompletedEmployee.record = {};
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      this.selectMatter.callingComponent = this;
      this.displayForm();
    },
    recurringFlagChanged: function recurringFlagChanged(newValue) {
      if (newValue == '1') {
        if (!this.record.recurringperiod) this.record.recurringperiod = 'Monthly';
      }
    },
    completedFlagChanged: function completedFlagChanged(newValue) {
      var _this3 = this;

      if (newValue == '1') {
        this.record.formatteddatetimedone = moment().format(root.control.dateformat + ' HH:mm:ss');
        this.record.completedbyid = root.loggedInEmployeeId;
        this.selectCompletedEmployee.record = {
          recordid: root.loggedInEmployeeId,
          name: root.loggedInEmployeeName
        };
        setTimeout(function () {
          return $('#' + _this3.id + ' input[name="completedbynotes"]').focus();
        });
      }
    },
    completedEmployeeSelected: function completedEmployeeSelected(selectedRecord) {
      this.record.completedbyid = selectedRecord.recordid;
    },
    okClicked: function okClicked() {
      var _this$record,
          _this$record$formatte,
          _this4 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.record.createddate = this.record.formattedcreateddate;
      this.record.createdtime = this.record.formattedcreatedtime;
      this.record.date = this.record.formatteddate;
      var dateStringLength = (_this$record = this.record) === null || _this$record === void 0 ? void 0 : (_this$record$formatte = _this$record.formatteddatetimedone) === null || _this$record$formatte === void 0 ? void 0 : _this$record$formatte.length;

      if (dateStringLength && this.record.completedflag == '1') {
        this.record.datedone = this.record.formatteddatetimedone.slice(0, dateStringLength - 9);
        this.record.completedtime = this.record.formatteddatetimedone.slice(-8);
      } else {
        this.record.datedone = null;
        this.record.completedtime = null;
      }

      root.$snotify.simple('Please wait...', 'Saving Reminder', {
        timeout: 10000,
        icon: 'img/cogs.gif'
      });
      axios.post('/todonote/' + (this.savedFlag ? 'update' : 'store'), _objectSpread(_objectSpread({}, this.record), {}, {
        loggedinemployeeid: root.loggedInEmployeeId
      })).then(function (response) {
        if (response.data.errors) {
          _this4.setGeneralTab();

          showError('Error', response.data.errors);
        } else {
          _this4.createReminderFlag = '0'; // So it doesn't repeatedly make Reminders when they press Save

          _this4.record.recordid = response.data.data[0].recordid;
          root.$snotify.clear();
          _this4.errors = {};

          if (!_this4.editing && !_this4.savedFlag) {
            if (_this4.table.initialOrder[0][1] == 'asc') {
              _this4.highlightRow(response.data.data[0].recordid, {
                where: ["todonote.date,>,0", "todonote.date,<," + response.data.data[0].date],
                orderBy: ['todonote.date,asc']
              });
            } else {
              _this4.highlightRow(response.data.data[0].recordid, {
                where: ["todonote.date,>,0", "todonote.date,>," + response.data.data[0].date],
                orderBy: ['todonote.date,desc']
              });
            }
          } else {
            _this4.table.refreshRow(response.data.data[0].recordid);
          }

          if (closeFlag) {
            _this4.closeForm();
          } else {
            _this4.savedFlag = true;
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this4.table.singular, error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReminderForm.vue?vue&type=template&id=dd5a97a6& */ "./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6&");
/* harmony import */ var _ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReminderForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reminders/ReminderForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_dd5a97a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderForm.vue?vue&type=template&id=dd5a97a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderForm.vue?vue&type=template&id=dd5a97a6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content todonotes-border"
              : "card h-100 border-0",
            attrs: { id: _vm.id + "-form-border" },
          },
          [
            _c(
              "div",
              {
                class: _vm.modal ? "todonotes-bg" : "card-header",
                attrs: { id: _vm.id + "-form-header" },
              },
              [
                _c(
                  "div",
                  {
                    class: _vm.modal
                      ? "modal-header"
                      : "d-flex justify-content-between",
                  },
                  [
                    _c("div", { staticClass: "page-title" }, [
                      _c("h3", [
                        !_vm.editing && !_vm.savedFlag
                          ? _c("span", [_vm._v("Reminder will be Added")])
                          : _c("span", [_vm._v("Reminder will be Changed")]),
                      ]),
                      _vm._v(" "),
                      _vm.modal
                        ? _c("i", {
                            staticClass:
                              "cp top-right fa fa-times-circle fa-2x text-white",
                            attrs: {
                              id: _vm.id + "-modal-close-button",
                              title: "Close this window",
                              "data-dismiss": "modal",
                            },
                          })
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    !_vm.modal
                      ? _c("page-close-button", {
                          on: { closeClicked: _vm.closeForm },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body form-tab-body overflow-auto" },
              [
                _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "General",
                        expression: "activeTab === 'General'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Created By")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-4",
                              readOnly: true,
                              label: "Employee",
                            },
                            model: {
                              value: _vm.record.employeename,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "employeename", $$v)
                              },
                              expression: "record.employeename",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-4",
                              readOnly: true,
                              label: "Date",
                            },
                            model: {
                              value: _vm.record.formattedcreateddate,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.record,
                                  "formattedcreateddate",
                                  $$v
                                )
                              },
                              expression: "record.formattedcreateddate",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-4",
                              readOnly: true,
                              label: "Time",
                            },
                            model: {
                              value: _vm.record.formattedcreatedtime,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.record,
                                  "formattedcreatedtime",
                                  $$v
                                )
                              },
                              expression: "record.formattedcreatedtime",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "mt-3" }, [
                      _c("legend", [_vm._v("For Action")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", [_vm._v("Target Date")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                            <h4>Target Date</h4>\r\n                                            <p>The date this Reminder should be completed on.</p>\r\n                                        ",
                                  },
                                }),
                                _vm._v(" "),
                                _c("date-picker", {
                                  ref: "datePickerComponent",
                                  attrs: {
                                    config: _vm.$root.datePickerOptions,
                                  },
                                  model: {
                                    value: _vm.record.formatteddate,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "formatteddate", $$v)
                                    },
                                    expression: "record.formatteddate",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("select-employee", {
                                ref: _vm.uniqueId + "-select-employee",
                                attrs: {
                                  id: _vm.id + "-select-employee",
                                  popOver:
                                    "<h4>Employee</h4>\r\n                                        <p>The Employee this Reminder is assigned to</p>",
                                  label: "Assigned To",
                                  formRef: _vm.uniqueId + "-select-employee",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-matter", {
                            ref: _vm._uid + "-todonote-form-select-matter",
                            attrs: {
                              popOver:
                                "<h4>Matter</h4><p>The Matter this Reminder is linked to.</p>",
                              id: _vm.id + "-select-matter",
                              _class: "col-md-8",
                              "form-ref":
                                _vm._uid + "-todonote-form-select-matter",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-area", {
                            attrs: {
                              _class: "col-md-12",
                              popOver:
                                "<h4>Description</h4><p>A description of the Reminder, i.e. what action should be taken.</p>",
                              rows: "4",
                              cols: "50",
                              name: "description",
                              label: "Description",
                              lookupLibraryFlag: true,
                              lookupLibraryCategory: "What must be done",
                            },
                            model: {
                              value: _vm.record.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "description", $$v)
                              },
                              expression: "record.description",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12" },
                          [
                            _c(
                              "b-form-checkbox",
                              {
                                attrs: {
                                  id: _vm.id + "-completed-flag",
                                  name: "completedFlag",
                                  value: "1",
                                  "unchecked-value": "0",
                                  switch: "",
                                  size: "lg",
                                },
                                on: { change: _vm.completedFlagChanged },
                                model: {
                                  value: _vm.record.completedflag,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "completedflag", $$v)
                                  },
                                  expression: "record.completedflag",
                                },
                              },
                              [
                                _c("span", [_vm._v("Completed")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Completed</h4>\r\n                                        <p>Indicates whether the Reminder has been completed or not.</p>\r\n                                    ",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "fieldset",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.record.completedflag &&
                              _vm.record.completedflag == "1",
                            expression:
                              "record.completedflag && record.completedflag == '1'",
                          },
                        ],
                        staticClass: "mt-3",
                      },
                      [
                        _c("legend", [_vm._v("Completed")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c("label", [_vm._v("Date/Time")]),
                              _vm._v(" "),
                              _c("date-picker", {
                                ref: "completedDatePickerComponent",
                                attrs: {
                                  config: _vm.$root.dateTimePickerOptions,
                                },
                                model: {
                                  value: _vm.record.formatteddatetimedone,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.record,
                                      "formatteddatetimedone",
                                      $$v
                                    )
                                  },
                                  expression: "record.formatteddatetimedone",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group row" },
                          [
                            _c("select-employee", {
                              ref:
                                _vm.uniqueId + "-select-completed-by-employee",
                              attrs: {
                                id: _vm.id + "-select-completed-by-employee",
                                popOver:
                                  "<h4>Employee</h4>\r\n                                <p>The Employee who completed this Reminder</p>",
                                _class: "col-md-6",
                                label: "Completed By",
                                formRef:
                                  _vm.uniqueId +
                                  "-select-completed-by-employee",
                                callback: "completedEmployeeSelected",
                                parentName: "selectCompletedEmployee",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group row" },
                          [
                            _c("text-input", {
                              attrs: {
                                _class: "col-md-12",
                                popOver:
                                  "<h4>Completion Notes</h4><p>Notes regarding the completion of this task (e.g. why it is late).</p>",
                                label: "Notes",
                                name: "completedbynotes",
                                lookupLibraryFlag: true,
                                lookupLibraryCategory:
                                  "Notes regarding the completion of this task (e.g.",
                              },
                              model: {
                                value: _vm.record.completedbynotes,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "completedbynotes", $$v)
                                },
                                expression: "record.completedbynotes",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Advanced",
                        expression: "activeTab === 'Advanced'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", { staticClass: "mt-3" }, [
                      _c("legend", [_vm._v("Recurring Reminder")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12" },
                          [
                            _c(
                              "b-form-checkbox",
                              {
                                attrs: {
                                  id: _vm.id + "-recurring-flag",
                                  value: "1",
                                  "unchecked-value": "0",
                                  switch: "",
                                  size: "lg",
                                },
                                on: { change: _vm.recurringFlagChanged },
                                model: {
                                  value: _vm.record.recurringflag,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "recurringflag", $$v)
                                  },
                                  expression: "record.recurringflag",
                                },
                              },
                              [
                                _c("span", [_vm._v("Repeat This Reminder")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Recurring Reminder</h4>\r\n                                        <p>Indicates whether the Reminder must be created again once it has been completed.</p>\r\n                                    ",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.record.recurringflag &&
                                _vm.record.recurringflag == "1",
                              expression:
                                "record.recurringflag && record.recurringflag == '1'",
                            },
                          ],
                          staticClass: "form-group row",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c("label", [_vm._v("Period")]),
                              _vm._v(" "),
                              _c("pop-over", {
                                attrs: {
                                  container: "#" + _vm.id,
                                  content:
                                    "<h4>Period</h4>\r\n                                    <p>The frequency or period the Reminder must be repeated.</p>",
                                },
                              }),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  options: _vm.periods,
                                  clearable: false,
                                  searchable: false,
                                  reduce: function (periods) {
                                    return periods.value
                                  },
                                },
                                model: {
                                  value: _vm.record.recurringperiod,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "recurringperiod", $$v)
                                  },
                                  expression: "record.recurringperiod",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editing,
                        expression: "editing",
                      },
                    ],
                    staticClass: "btn btn-primary form-button mr-3",
                    attrs: { type: "button" },
                    on: { click: _vm.deleteClicked },
                  },
                  [_vm._m(0)]
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-yellow form-button mr-3",
                    attrs: {
                      type: "button",
                      title: "Save the Item and continue editing",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.okClicked(false)
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-square fa-lg mr-2" }),
                    _vm._v("Save"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success form-button mr-3",
                    attrs: {
                      type: "button",
                      title: "Save the Item and close the Window",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.okClicked(true)
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
                    _vm._v("OK"),
                  ]
                ),
                _vm._v(" "),
                _vm.savedFlag || _vm.editing
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Close this screen" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Close"),
                      ]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Exit without saving" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Cancel"),
                      ]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Delete this Reminder" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
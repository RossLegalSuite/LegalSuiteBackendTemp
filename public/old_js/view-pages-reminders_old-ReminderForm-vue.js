"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-reminders_old-ReminderForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//https://vue-select.org/guide/positioning.html#popper-js-integration





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectParty: function SelectParty() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParty-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParty */ "./resources/js/pages/parties/SelectParty.vue"));
    },
    EmployeeDropdown: (vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default())
  },
  props: {
    resource: {
      type: String,
      "default": 'Reminders'
    },
    title: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      currentParentType: null,
      targetEmployee: {
        id: null,
        name: null
      },
      completedEmployee: {
        id: null,
        name: null
      },
      customPeriods: ['Days', 'Weeks', 'Months', 'Years'],
      recurringPeriods: ['Daily', 'Weekly', 'Fortnightly', 'Monthly', 'Bi Monthly', '3 Months', '6 Months', 'Yearly', 'Custom']
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['currentMatter', 'currentParty', 'currentEmployee'])),
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/reminders/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.initFormData();

        _this.selectMatter.matter = {
          id: _this.record.matterId,
          matter: _this.record.matter
        };
        _this.selectParty.partyName = '???';
      });
    },
    initNewRecord: function initNewRecord() {
      var _this$record,
          _this2 = this;

      this.initFormData();
      this.record = (_this$record = {
        createdById: root.loggedInEmployeeId,
        createdEmployeeName: root.loggedInEmployeeName,
        parentType: this.currentParentType,
        matterId: this.currentMatter.recordid && this.parentType === 'Matter' ? this.currentMatter.recordid : null,
        partyId: this.currentParty.recordid && this.parentType === 'Party' ? this.currentParty.recordid : null,
        description: null,
        dateTime: moment().format(root.control.dateformat + ' HH:mm:ss'),
        targetEmployeeId: null,
        targetDate: moment().format(root.control.dateformat),
        completedFlag: 0,
        completedEmployeeId: null,
        completedDateTime: null
      }, _defineProperty(_this$record, "completedEmployeeId", null), _defineProperty(_this$record, "completedDescription", null), _defineProperty(_this$record, "recurringFlag", 0), _defineProperty(_this$record, "recurringPeriod", 'Monthly'), _defineProperty(_this$record, "recurringCustomUnits", 'Days'), _defineProperty(_this$record, "recurringCustomAmount", '5'), _this$record);
      this.selectMatter.matter = this.currentMatter.fileref ? {
        id: this.currentMatter.recordid,
        matter: this.currentMatter.fileref + ' - ' + this.currentMatter.description
      } : null;
      this.selectParty.partyName = this.currentParty.code ? this.currentParty.code + ' - ' + this.currentParty.name : null;
      setTimeout(function () {
        return $('#' + _this2.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      if (!this.editing) {
        this.targetEmployee.id = this.parentType === 'Employee' ? this.currentEmployee.id : root.loggedInEmployeeId;
        this.targetEmployee.name = this.parentType === 'Employee' ? this.currentEmployee.name : root.loggedInEmployeeName;
      } else {
        this.targetEmployee.id = this.record.targetEmployeeId;
        this.targetEmployee.name = this.record.targetEmployeeName;
        this.completedEmployee.id = this.record.completedEmployeeId;
        this.completedEmployee.name = this.record.completedEmployeeName;
      }

      this.displayForm();
    },
    toggleTargetDatePicker: function toggleTargetDatePicker() {
      this.$refs.targetDatePickerComponent.elem.data('DateTimePicker').toggle();
    },
    toggleCompletedDatePicker: function toggleCompletedDatePicker() {
      this.$refs.completedDatePickerComponent.elem.data('DateTimePicker').toggle();
    },
    hideTargetDatePicker: function hideTargetDatePicker() {
      this.$refs.targetDatePickerComponent.elem.data('DateTimePicker').hide();
    },
    hideCompletedDatePicker: function hideCompletedDatePicker() {
      this.$refs.completedDatePickerComponent.elem.data('DateTimePicker').hide();
    },
    toggleCompleted: function toggleCompleted() {
      this.record.completedFlag = this.record.completedFlag == 1 ? 0 : 1;
      this.record.completedDateTime = this.record.completedFlag ? moment().format(root.control.dateformat + ' HH:mm:ss') : null;
      this.completedEmployee.id = this.record.completedEmployeeId = root.loggedInEmployeeId;
      this.completedEmployee.name = this.record.completedEmployeeName = root.loggedInEmployeeName;
    },
    toggleRepeated: function toggleRepeated() {
      this.record.recurringFlag = this.record.recurringFlag == 1 ? 0 : 1;
    },
    okClicked: function okClicked() {
      var _this3 = this;

      this.record.targetEmployeeId = this.targetEmployee.id;
      this.record.matterId = this.record.parentType === 'Matter' && this.selectMatter.matter ? this.selectMatter.matter.id : null;
      this.record.partyId = this.record.parentType === 'Party' && this.selectParty.party ? this.selectParty.party.id : null;

      if (this.record.completedFlag == 1) {
        this.record.completedEmployeeId = this.completedEmployee.id;
      } else {
        this.record.completedDateTime = null;
      }

      axios.post('/reminders/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this3.errors = response.data.errors;
          }
        } else {
          _this3.errors = {};

          if (response.data.recurringFlag == 1 && response.data.completedFlag == 1 && !response.data.childId) {
            axios.post('/reminders/get', {
              id: response.data.childId
            }).then(function (record) {
              _this3.highlightTableRow(record.data[0].id, record.data[0].dateTime);
            });
          } else {
            if (_this3.id !== 'reminders-right-reminder-form') {
              _this3.$root.setTableToRefresh('reminders', 'reminders-table');
            }

            _this3.highlightTableRow(response.data.id, response.data.date);
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this3.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, date) {
      var _this4 = this;

      axios.post('/reminders/getTablePosition', {
        date: date
      }).then(function (response) {
        _this4.table.jumpToRow(id, response.data);

        _this4.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReminderForm.vue?vue&type=template&id=795edbc5& */ "./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5&");
/* harmony import */ var _ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReminderForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reminders_old/ReminderForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderForm_vue_vue_type_template_id_795edbc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderForm.vue?vue&type=template&id=795edbc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders_old/ReminderForm.vue?vue&type=template&id=795edbc5& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content reminders-border"
              : "card h-100 border-0",
            attrs: { id: _vm.id + "-form-border" },
          },
          [
            _c(
              "div",
              {
                class: _vm.modal ? "reminders-bg" : "card-header",
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
                        !_vm.editing
                          ? _c("span", [_vm._v("Reminder will be Added")])
                          : _vm.viewing
                          ? _c("span", [_vm._v("Reminder")])
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
            _c("div", { staticClass: "card-body overflow-auto p-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _vm.editing || _vm.errors.createdById || _vm.errors.dateTime
                    ? _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-6",
                              readOnly: true,
                              name: "dateTime",
                              label: "Created On",
                              error: _vm.errors.dateTime,
                            },
                            model: {
                              value: _vm.record.dateTime,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "dateTime", $$v)
                              },
                              expression: "record.dateTime",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-4",
                              readOnly: true,
                              name: "createdById",
                              label: "Created By",
                              error: _vm.errors.createdById,
                            },
                            model: {
                              value: _vm.record.createdEmployeeName,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "createdEmployeeName", $$v)
                              },
                              expression: "record.createdEmployeeName",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("label", [_vm._v("Target Date")]),
                        _vm._v(" "),
                        _c("pop-over", {
                          attrs: {
                            content:
                              "<h4>Target Date</h4>\r\n                                <p>The Target Date is the date by which the Reminder <em>should</em> be completed by.</p>\r\n                                <p>By setting a Target Date, it not only diarises the Reminder for that date but also allows you to monitor which Matters are falling behind.</p>",
                            container: "#" + _vm.id,
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "input-group" },
                          [
                            _c("date-picker", {
                              ref: "targetDatePickerComponent",
                              attrs: {
                                readOnly: _vm.record.readOnly ? true : false,
                                config: _vm.$root.datePickerOptions,
                              },
                              on: { "dp-change": _vm.hideTargetDatePicker },
                              model: {
                                value: _vm.record.targetDate,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "targetDate", $$v)
                                },
                                expression: "record.targetDate",
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    tabindex: "-1",
                                    type: "button",
                                    title: "Click here to select a date",
                                  },
                                  on: { click: _vm.toggleTargetDatePicker },
                                },
                                [_c("i", { staticClass: "fa fa-calendar" })]
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.errors.targetDate
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                innerHTML: _vm._s(_vm.errors.targetDate[0]),
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("label", [_vm._v("Assigned To")]),
                        _vm._v(" "),
                        _c("pop-over", {
                          attrs: {
                            content:
                              "<h4>Assigned To</h4>\r\n                                <p>The Employee who the task is assigned to and who it <em>should</em> be completed by.</p>\r\n                                <p>Another Employee may complete the task, but this Employee is the person it is intended for and who will see it when they view their Reminders.</p>",
                            container: "#" + this.id,
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "employee-dropdown",
                          {
                            attrs: {
                              id: _vm.id + "-assigned-employee-dropdown",
                              openDirection: "below",
                              placeholder: "",
                              options: _vm.$root.employees,
                              "track-by": "recordid",
                              tabindex: -1,
                              label: "name",
                              "allow-empty": false,
                              "show-labels": false,
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "option",
                                fn: function (props) {
                                  return [
                                    _c("div", [
                                      _c("span", [
                                        _vm._v(_vm._s(props.option.name)),
                                      ]),
                                    ]),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.targetEmployee,
                              callback: function ($$v) {
                                _vm.targetEmployee = $$v
                              },
                              expression: "targetEmployee",
                            },
                          },
                          [
                            _c("template", { slot: "noResult" }, [
                              _vm._v("No Employees found"),
                            ]),
                            _vm._v(" "),
                            _c("template", { slot: "noOptions" }, [
                              _vm._v("No Employees found..."),
                            ]),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.targetEmployeeId
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.errors.targetEmployeeId[0]
                                ),
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("radio-buttons", {
                        attrs: {
                          _class: "col-md-12",
                          popOver:
                            "<h4>Reminder Type</h4>\r\n                                <p>Reminders are typically linked to a <strong><em>Matter</em></strong> or a <strong><em>Party</em></strong> to remind you to take some action on a particular Matter or Party.</p>\r\n                                <p>You can also create <strong><em>General</em></strong> Reminders which are not linked to a specific Matter or Party. These can be used to create a Reminder to do something of a general or company-specific nature.</p>",
                          popOverContainer: "#" + _vm.id,
                          record: _vm.record,
                          column: "parentType",
                          buttons: [
                            {
                              value: "Matter",
                              text: "Matter",
                              title:
                                "The Reminder is linked to a specific Matter",
                            },
                            {
                              value: "Party",
                              text: "Party",
                              title:
                                "The Reminder is linked to a specific Party",
                            },
                            {
                              value: "General",
                              text: "General",
                              title:
                                "The Reminder is not associated with a specific Matter or Party",
                            },
                          ],
                          name: "parentType",
                          label: "Type",
                          error: _vm.errors.parentType,
                        },
                      }),
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
                        value: _vm.record.completedFlag == 1,
                        expression: "record.completedFlag == 1",
                      },
                    ],
                    staticClass: "col-md-4",
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("fieldset", { staticClass: "mt-2" }, [
                          _c(
                            "legend",
                            {
                              staticStyle: { "padding-top": "5px" },
                              attrs: {
                                title:
                                  "Click here to mark the Reminder as Incomplete",
                              },
                            },
                            [
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    id: _vm.id + "-completed-reminder-checkbox",
                                    name: "completedReminderCheckBox",
                                    value: "1",
                                    "unchecked-value": "0",
                                  },
                                  model: {
                                    value: _vm.record.completedFlag,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "completedFlag", $$v)
                                    },
                                    expression: "record.completedFlag",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                            Completed\r\n                                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("label", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "input-group" },
                                [
                                  _c("date-picker", {
                                    ref: "completedDatePickerComponent",
                                    attrs: {
                                      readOnly: _vm.record.readOnly
                                        ? true
                                        : false,
                                      config: _vm.$root.dateTimePickerOptions,
                                    },
                                    on: {
                                      "dp-change": _vm.hideCompletedDatePicker,
                                    },
                                    model: {
                                      value: _vm.record.completedDateTime,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.record,
                                          "completedDateTime",
                                          $$v
                                        )
                                      },
                                      expression: "record.completedDateTime",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            tabindex: "-1",
                                            type: "button",
                                            title:
                                              "Click here to select a date",
                                          },
                                          on: {
                                            click:
                                              _vm.toggleCompletedDatePicker,
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-calendar",
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.errors.completedDateTime
                                ? _c("div", {
                                    staticClass: "invalid-feedback",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.errors.completedDateTime[0]
                                      ),
                                    },
                                  })
                                : _vm._e(),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", [_vm._v("Completed By")]),
                                _vm._v(" "),
                                _c(
                                  "employee-dropdown",
                                  {
                                    attrs: {
                                      id:
                                        _vm.id + "completed-employee-dropdown",
                                      openDirection: "below",
                                      placeholder: "",
                                      options: _vm.$root.employees,
                                      "track-by": "recordid",
                                      tabindex: -1,
                                      label: "name",
                                      "allow-empty": false,
                                      "show-labels": false,
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "option",
                                        fn: function (props) {
                                          return [
                                            _c("div", [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(props.option.name)
                                                ),
                                              ]),
                                            ]),
                                          ]
                                        },
                                      },
                                    ]),
                                    model: {
                                      value: _vm.completedEmployee,
                                      callback: function ($$v) {
                                        _vm.completedEmployee = $$v
                                      },
                                      expression: "completedEmployee",
                                    },
                                  },
                                  [
                                    _c("template", { slot: "noResult" }, [
                                      _vm._v("No Employees found"),
                                    ]),
                                    _vm._v(" "),
                                    _c("template", { slot: "noOptions" }, [
                                      _vm._v("No Employees found..."),
                                    ]),
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _vm.errors.completedEmployeeId
                                  ? _c("div", {
                                      staticClass: "invalid-feedback",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.errors.completedEmployeeId[0]
                                        ),
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
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
                      value: _vm.record.parentType !== "General",
                      expression: "record.parentType !== 'General'",
                    },
                  ],
                  staticClass: "form-group row",
                },
                [
                  _c("select-matter", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.record.parentType === "Matter",
                        expression: "record.parentType === 'Matter'",
                      },
                    ],
                    ref: "reminder-select-matter",
                    attrs: {
                      _class: "col-md-10",
                      id: _vm.id + "-select-matter",
                      title: "The Matter this Reminder is linked to",
                      "form-ref": "reminder-select-matter",
                      error: _vm.errors.matterId,
                    },
                  }),
                  _vm._v(" "),
                  _c("select-party", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.record.parentType === "Party",
                        expression: "record.parentType === 'Party'",
                      },
                    ],
                    ref: "reminder-select-party",
                    attrs: {
                      _class: "col-md-10",
                      id: _vm.id + "-select-party",
                      title: "The Party this Reminder is linked to",
                      "form-ref": "reminder-select-party",
                      error: _vm.errors.partyId,
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
                      rows: "4",
                      cols: "50",
                      name: "description",
                      label: "Description",
                      error: _vm.errors.description,
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
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.record.recurringFlag == 1,
                      expression: "record.recurringFlag == 1",
                    },
                  ],
                  staticClass: "form-group row",
                },
                [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("fieldset", { staticClass: "mt-2" }, [
                      _c(
                        "legend",
                        {
                          staticStyle: { "padding-top": "5px" },
                          attrs: {
                            title: "Click here to cancel the repetition",
                          },
                        },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                id: _vm.id + "-recurring-reminder-checkbox",
                                name: "recurringReminderCheckBox",
                                value: "1",
                                "unchecked-value": "0",
                              },
                              model: {
                                value: _vm.record.recurringFlag,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "recurringFlag", $$v)
                                },
                                expression: "record.recurringFlag",
                              },
                            },
                            [
                              _vm._v(
                                "\r\n                                Recurring Reminder\r\n                            "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c(
                            "div",
                            { staticClass: "col-md-3" },
                            [
                              _c("label", [_vm._v("Repeating")]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  "append-to-body": "",
                                  "calculate-position": _vm.$root.popUp,
                                  options: _vm.recurringPeriods,
                                  clearable: false,
                                  searchable: false,
                                },
                                model: {
                                  value: _vm.record.recurringPeriod,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "recurringPeriod", $$v)
                                  },
                                  expression: "record.recurringPeriod",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("text-input", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.record.recurringPeriod == "Custom",
                                expression:
                                  "record.recurringPeriod == 'Custom'",
                              },
                            ],
                            attrs: {
                              _class: "col-md-3",
                              type: "number",
                              "input-class": "form-input-number",
                              name: "recurringCustomAmount",
                              label: "Every",
                              error: _vm.errors.recurringCustomAmount,
                            },
                            model: {
                              value: _vm.record.recurringCustomAmount,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.record,
                                  "recurringCustomAmount",
                                  $$v
                                )
                              },
                              expression: "record.recurringCustomAmount",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.record.recurringPeriod == "Custom",
                                  expression:
                                    "record.recurringPeriod == 'Custom'",
                                },
                              ],
                              staticClass: "col-md-3",
                            },
                            [
                              _c("label", [_vm._v("Period")]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  "append-to-body": "",
                                  "calculate-position": _vm.$root.popUp,
                                  options: _vm.customPeriods,
                                  clearable: false,
                                  searchable: false,
                                },
                                model: {
                                  value: _vm.record.recurringCustomUnits,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.record,
                                      "recurringCustomUnits",
                                      $$v
                                    )
                                  },
                                  expression: "record.recurringCustomUnits",
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
                ]
              ),
            ]),
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
                _vm._v(" "),
                _vm.record.recurringFlag == 0
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Make this a recurring Reminder",
                        },
                        on: { click: _vm.toggleRepeated },
                      },
                      [
                        _c("i", { staticClass: "fa fa-recycle fa-lg mr-2" }),
                        _vm._v("Repeat"),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.record.completedFlag == 0
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-important form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Mark the Reminder as 'Done'",
                        },
                        on: { click: _vm.toggleCompleted },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("Completed"),
                      ]
                    )
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success form-button mr-3",
                    attrs: { type: "button", title: "Save the Reminder" },
                    on: { click: _vm.okClicked },
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
                    _vm._v("OK"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger form-button",
                    attrs: { type: "button", title: "Exit without saving" },
                    on: { click: _vm.closeForm },
                  },
                  [
                    _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
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
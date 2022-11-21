"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-filenotes-FileNoteForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js& ***!
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
//
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
    },
    SelectStage: function SelectStage() {
      return __webpack_require__.e(/*! import() */ "view-pages-filenotes-SelectStage-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectStage */ "./resources/js/pages/filenotes/SelectStage.vue"));
    },
    SelectReminder: function SelectReminder() {
      return __webpack_require__.e(/*! import() */ "view-pages-filenotes-SelectReminder-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectReminder */ "./resources/js/pages/filenotes/SelectReminder.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'File Notes'
    },
    secProc: {
      type: String,
      "default": 'Matters - Desktop - File Notes'
    },
    uniqueId: String
  },
  data: function data() {
    return {
      selectedMatter: {},
      activeTab: 'General',
      createReminderFlag: '0',
      createReminderDescription: '',
      createReminderDays: '7',
      createFeeNoteFlag: '0',
      createFeeNoteDescription: '',
      createFeeNoteAmount: '',
      docgenData: {},
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Actions",
        title: "Actions",
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
      axios.post('/filenote/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.selectEmployee.record = {
          recordid: _this.record.employeeid,
          name: htmlDecode(_this.record.employeename)
        };
        _this.selectMatter.matter = {
          id: _this.record.matterid,
          fileref: htmlDecode(_this.record.matterfileref),
          description: htmlDecode(_this.record.matterdescription)
        };
        _this.selectStage.record = {
          recordid: _this.record.stageid,
          description: _this.record.stagecode + ' - ' + htmlDecode(_this.record.stagedescription)
        };
        _this.selectReminder.record = {
          recordid: _this.record.todonoteid,
          description: _this.record.todonotedescription ? _this.record.todonotedate + ' - ' + htmlDecode(_this.record.todonotedescription) : ''
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
        date: null,
        time: null,
        datetime: moment().format(root.control.dateformat + ' HH:mm:ss'),
        createdby: root.loggedInEmployeeId,
        createddate: moment().format(root.control.dateformat),
        createdtime: moment().format('HH:mm:ss'),
        employeeid: root.loggedInEmployeeId,
        matterid: this.currentMatter.recordid || null,
        stageid: null,
        todonoteid: null,
        description: null,
        source: 'W',
        origin: 20,
        autonotifydate: 0,
        internalflag: root.currentEmployee.filenotesinternalflag
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
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this3 = this;

      this.createReminderFlag = '0';
      this.createReminderDescription = '';
      this.createReminderDays = '7';
      this.createFeeNoteFlag = '0';
      this.createFeeNoteDescription = '';
      this.createFeeNoteAmount = '';
      this.selectMatter.callingComponent = this;

      if (this.record.matterid) {
        // ******************************************************************
        // DO axios to get Matter and then call matterSelected() to set some defaults
        // ******************************************************************
        axios.post('/matter/get/' + this.record.matterid).then(function (response) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            _this3.matterSelected(response.data.data[0]);
          }
        })["catch"](function (error) {
          showError('Error getting Matter', error);
        });
      }

      this.displayForm();
    },
    matterSelected: function matterSelected(selectedRecord) {
      var _this4 = this;

      this.selectedMatter = selectedRecord;
      this.selectStage.stageGroupId = selectedRecord === null || selectedRecord === void 0 ? void 0 : selectedRecord.stagegroupid;
      this.selectReminder.matterId = selectedRecord.recordid;
      this.record.matterid = selectedRecord.recordid;
      this.setDocgenData().then(function (docgenResponse) {
        _this4.docgenData = docgenResponse;
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    setDocgenData: function setDocgenData() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.docgenData = {};
        axios.post("/docgen/get/" + _this5.selectedMatter.docgenid).then(function (response) {
          if (response.data.errors) {
            reject(response.data.errors);
          } else {
            if (!response.data.data.length) {
              reject('Error getting Docgen data - No Docgen data returned');
            } else {
              resolve(response.data.data[0]);
            }
          }
        })["catch"](function (error) {
          reject('Error getting Docgen data: ' + error);
        });
      });
    },
    showStages: function showStages() {
      if (typeof this.record.stageid !== 'undefined' && parseInt(this.record.stageid) > 0) {
        return true;
      } else {
        var _this$docgenData;

        if (typeof this.docgenData.hidestagesflag == 'undefined' || ((_this$docgenData = this.docgenData) === null || _this$docgenData === void 0 ? void 0 : _this$docgenData.hidestagesflag) == "1") {
          return false;
        } else {
          return true;
        }
      }
    },
    stageSelected: function stageSelected(selectedRecord) {
      this.record.stageid = selectedRecord.recordid;
    },
    reminderSelected: function reminderSelected(selectedRecord) {
      this.record.todonoteid = selectedRecord.recordid;
    },
    clearReminder: function clearReminder() {
      this.record.todonoteid = null;
      this.selectReminder.record = {
        recordid: null,
        description: null
      };
    },
    createFeeNoteFlagChanged: function createFeeNoteFlagChanged(newValue) {
      var _this6 = this;

      if (newValue == '1') {
        if (!this.createFeeNoteDescription) {
          this.createFeeNoteDescription = this.record.description;
        }

        setTimeout(function () {
          return $('#' + _this6.id + ' input[name="createFeeNoteAmount"]').focus();
        });
      }
    },
    createReminderFlagChanged: function createReminderFlagChanged(newValue) {
      if (newValue == '1') {
        if (!this.createReminderDescription) {
          this.createReminderDescription = this.record.description;
        }
      }
    },
    // getCreatedByDetails() {
    //     let returnData = '';
    //     if (this.record.createdbyemployee && this.record.formattedcreateddatetime) {
    //         returnData = 'Inserted by ' + this.record.createdbyemployee  + ' at ' + this.record.formattedcreateddatetime;
    //     }
    //     return returnData;
    // },
    okClicked: function okClicked() {
      var _this$record,
          _this$record$datetime,
          _this7 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var dateStringLength = (_this$record = this.record) === null || _this$record === void 0 ? void 0 : (_this$record$datetime = _this$record.datetime) === null || _this$record$datetime === void 0 ? void 0 : _this$record$datetime.length;

      if (!dateStringLength) {
        showError('Error', 'Please enter a date');
        return;
      }

      this.record.date = this.record.datetime.slice(0, dateStringLength - 9);
      this.record.time = this.record.datetime.slice(-8);
      root.$snotify.simple('Please wait...', 'Saving File Note', {
        timeout: 10000,
        icon: 'img/cogs.gif'
      });
      this.record.createreminderflag = this.createReminderFlag;
      this.record.createreminderdescription = this.createReminderDescription;
      this.record.createreminderdays = this.createReminderDays;
      this.record.createfeenoteflag = this.createFeeNoteFlag;
      this.record.createfeenotedescription = this.createFeeNoteDescription;
      this.record.createfeenoteamount = this.createFeeNoteAmount;
      axios.post('/filenote/' + (this.savedFlag ? 'update' : 'store'), this.record).then(function (response) {
        if (response.data.errors) {
          _this7.setGeneralTab();

          showError('Error', response.data.errors);
        } else {
          _this7.createReminderFlag = '0'; // So it doesn't repeatedly make Reminders when they press Save

          _this7.record.recordid = response.data.data[0].recordid;
          root.$snotify.clear();
          _this7.errors = {};

          if (!_this7.editing && !_this7.savedFlag) {
            if (_this7.table.initialOrder[0][1] == 'asc') {
              _this7.highlightRow(response.data.data[0].recordid, {
                where: ["filenote.date,>,0", "filenote.date,<," + response.data.data[0].date, "filenote.time,<," + response.data.data[0].time],
                orderBy: ['filenote.date,asc']
              });
            } else {
              _this7.highlightRow(response.data.data[0].recordid, {
                where: ["filenote.date,>,0", "filenote.date,>," + response.data.data[0].date, "filenote.time,>," + response.data.data[0].time],
                orderBy: ['filenote.date,desc']
              });
            }
          } else {
            _this7.table.refreshRow(response.data.data[0].recordid);
          }

          if (closeFlag) {
            _this7.closeForm();
          } else {
            _this7.savedFlag = true;
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this7.table.singular, error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileNoteForm.vue?vue&type=template&id=f8b8d976& */ "./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976&");
/* harmony import */ var _FileNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileNoteForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/filenotes/FileNoteForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileNoteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteForm_vue_vue_type_template_id_f8b8d976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileNoteForm.vue?vue&type=template&id=f8b8d976& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteForm.vue?vue&type=template&id=f8b8d976& ***!
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
              ? "modal-content filenotes-border"
              : "card h-100 border-0",
            attrs: { id: _vm.id + "-form-border" },
          },
          [
            _c(
              "div",
              {
                class: _vm.modal ? "filenotes-bg" : "card-header",
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
                          ? _c("span", [_vm._v("File Note will be Added")])
                          : _c("span", [_vm._v("File Note will be Changed")]),
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
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", [_vm._v("Date/Time")]),
                          _vm._v(" "),
                          _c("date-picker", {
                            ref: "datePickerComponent",
                            attrs: { config: _vm.$root.dateTimePickerOptions },
                            model: {
                              value: _vm.record.datetime,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "datetime", $$v)
                              },
                              expression: "record.datetime",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c(
                          "div",
                          { staticClass: "pull-right" },
                          [
                            _c(
                              "b-form-checkbox",
                              {
                                attrs: {
                                  id: _vm.id + "-internal-flag",
                                  name: "internalFlag",
                                  value: "1",
                                  "unchecked-value": "0",
                                  switch: "",
                                  size: "lg",
                                },
                                model: {
                                  value: _vm.record.internalflag,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "internalflag", $$v)
                                  },
                                  expression: "record.internalflag",
                                },
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    "This is an internal (private) File Note"
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Internal File Note</h4>\r\n                                        <p>If a File Note contains sensitive information or personal comments, you can set it as <em>internal</em>.</p>\r\n                                        <p>Internal File Notes will not be visible to remote users.</p>\r\n                                        <p><strong>Note:</strong> You must filter them out of any reports that may be generated to ensure that these File Notes do not appear on reports that may be sent to outside parties.</p>\r\n                                    ",
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
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group row" },
                          [
                            _c("select-matter", {
                              ref: _vm._uid + "-filenote-form-select-matter",
                              attrs: {
                                popOver:
                                  "<h4>Matter</h4><p>The Matter this File Note is linked to.</p>",
                                id: _vm.id + "-select-matter",
                                _class: "col-md-12",
                                "form-ref":
                                  _vm._uid + "-filenote-form-select-matter",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("select-employee", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.editing,
                                expression: "editing",
                              },
                            ],
                            ref: _vm.uniqueId + "-select-employee",
                            attrs: {
                              id: _vm.id + "-select-employee",
                              popOver:
                                "<h4>Employee</h4>\r\n                                <p>The Employee this File Note is assigned to</p>",
                              label: "Employee",
                              formRef: _vm.uniqueId + "-select-employee",
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
                            value: _vm.showStages(),
                            expression: "showStages()",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("select-stage", {
                          ref: _vm._uid + "-select-stage",
                          attrs: {
                            id: _vm.id + "-select-stage",
                            _class: "col-md-12",
                            popOver:
                              "<h4>Stage</h4>\r\n                            <p>The Stage that has been reached on this Matter by creating this File Note.</p>",
                            title:
                              "The Stage that has been reached on this Matter",
                            "form-ref": _vm._uid + "-select-stage",
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
                            value:
                              _vm.$root.control.filenotereminderflag == "1",
                            expression:
                              "$root.control.filenotereminderflag == '1'",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("select-reminder", {
                          ref: _vm._uid + "-select-reminder",
                          attrs: {
                            id: _vm.id + "-select-reminder",
                            _class: "col-md-6",
                            popOver:
                              "<h4>Reminder</h4>\r\n                            <p>The Reminder that created this File Note.</p>",
                            title: "The Reminder that created this File Note.",
                            "form-ref": _vm._uid + "-select-reminder",
                            clearIcon: true,
                            clearIconCallback: "clearReminder",
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
                              "<h4>Description</h4><p>A description of the File Note.</p>",
                            rows: "4",
                            cols: "50",
                            name: "description",
                            label: "Description",
                            lookupLibraryFlag: true,
                            lookupLibraryCategory: "The text of the File Note",
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
                        value: _vm.activeTab === "Actions",
                        expression: "activeTab === 'Actions'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Reminder")]),
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
                                  id: _vm.id + "-create-reminder-flag",
                                  name: "createReminderFlag",
                                  value: "1",
                                  "unchecked-value": "0",
                                  switch: "",
                                  size: "lg",
                                },
                                on: { change: _vm.createReminderFlagChanged },
                                model: {
                                  value: _vm.createReminderFlag,
                                  callback: function ($$v) {
                                    _vm.createReminderFlag = $$v
                                  },
                                  expression: "createReminderFlag",
                                },
                              },
                              [
                                _c("span", [_vm._v("Create a Reminder")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Create Reminder</h4>\r\n                                        <p>Create a Reminder for the selected Matter when the File Note is saved.</p>\r\n                                    ",
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
                              value: _vm.createReminderFlag == "1",
                              expression: "createReminderFlag == '1'",
                            },
                          ],
                          staticClass: "form-group row",
                        },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              popOver:
                                "<h4>Description</h4><p>The wording of the Reminder to be created.</p>",
                              label: "Description",
                            },
                            model: {
                              value: _vm.createReminderDescription,
                              callback: function ($$v) {
                                _vm.createReminderDescription = $$v
                              },
                              expression: "createReminderDescription",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-3",
                              popOver:
                                "<h4>Days Time</h4><p>In how many days times must the Reminder be created.</p>",
                              "input-class": "form-input-number",
                              label: "Days Time",
                            },
                            model: {
                              value: _vm.createReminderDays,
                              callback: function ($$v) {
                                _vm.createReminderDays = $$v
                              },
                              expression: "createReminderDays",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "mt-3" }, [
                      _c("legend", [_vm._v("Fee Note")]),
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
                                  id: _vm.id + "-create-fee-note-flag",
                                  name: "createFeeNoteFlag",
                                  value: "1",
                                  "unchecked-value": "0",
                                  switch: "",
                                  size: "lg",
                                },
                                on: { change: _vm.createFeeNoteFlagChanged },
                                model: {
                                  value: _vm.createFeeNoteFlag,
                                  callback: function ($$v) {
                                    _vm.createFeeNoteFlag = $$v
                                  },
                                  expression: "createFeeNoteFlag",
                                },
                              },
                              [
                                _c("span", [_vm._v("Create a Fee Note")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Create Fee Note</h4>\r\n                                        <p>Create a Fee Note for the selected Matter when the File Note is saved.</p>\r\n                                    ",
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
                              value: _vm.createFeeNoteFlag == "1",
                              expression: "createFeeNoteFlag == '1'",
                            },
                          ],
                          staticClass: "form-group row",
                        },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-9",
                              popOver:
                                "<h4>Description</h4><p>The wording of the Fee Note to be created.</p>",
                              label: "Description",
                            },
                            model: {
                              value: _vm.createFeeNoteDescription,
                              callback: function ($$v) {
                                _vm.createFeeNoteDescription = $$v
                              },
                              expression: "createFeeNoteDescription",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-3",
                              popOver:
                                "<h4>Amount</h4><p>The amount of the Fee Note (excluding Vat).</p>",
                              "input-class": "form-input-number",
                              name: "createFeeNoteAmount",
                              label: "Amount",
                            },
                            model: {
                              value: _vm.createFeeNoteAmount,
                              callback: function ($$v) {
                                _vm.createFeeNoteAmount = $$v
                              },
                              expression: "createFeeNoteAmount",
                            },
                          }),
                        ],
                        1
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
    return _c("span", { attrs: { title: "Delete this File Note" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
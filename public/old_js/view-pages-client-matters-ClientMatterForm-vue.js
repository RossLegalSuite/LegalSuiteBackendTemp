"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matters-ClientMatterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    MatterParties: function MatterParties() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matter-parties-MatterParties-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/matter-parties/MatterParties */ "./resources/js/pages/client/matter-parties/MatterParties.vue"));
    },
    FeeNotes: function FeeNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matters-feeNotes-ClientFeeNote-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/matters/feeNotes/ClientFeeNote */ "./resources/js/pages/client/matters/feeNotes/ClientFeeNote.vue"));
    },
    FileNotes: function FileNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matters-fileNotes-ClientFileNote-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/matters/fileNotes/ClientFileNote */ "./resources/js/pages/client/matters/fileNotes/ClientFileNote.vue"));
    },
    DebtorsAccount: function DebtorsAccount() {
      return __webpack_require__.e(/*! import() */ "view-pages-debtors-account-DebtorsAccount-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/debtors-account/DebtorsAccount */ "./resources/js/pages/debtors-account/DebtorsAccount.vue"));
    }
  },
  watch: {
    activeTab: function activeTab(newValue) {
      var _this = this;

      if (newValue === "Parties") {
        setTimeout(function () {
          if (_this.matterPartiesTable.table) {
            _this.matterPartiesTable.table.columns.adjust;
          } else {
            _this.matterPartiesTable.loadDataTable(_this.adjustMatPartiesTableColumns);
          }
        }, 100);
      } else if (newValue === "Debtors Account") {
        setTimeout(function () {
          if (_this.debtorsAccountTable.table) {
            _this.debtorsAccountTable.table.columns.adjust;
          } else {
            _this.debtorsAccountTable.loadDataTable(_this.adjustDebtorsAccountTableColumns);
          }
        }, 100);
      } else if (newValue === "File Notes") {
        setTimeout(function () {
          if (_this.fileNotesTable.table) {
            _this.fileNotesTable.table.columns.adjust;
          } else {
            _this.fileNotesTable.loadDataTable(_this.adjustFileNotesTableColumns);
          }
        }, 100);
      } else if (newValue === "Fee Notes") {
        setTimeout(function () {
          if (_this.feeNotesTable.table) {
            _this.feeNotesTable.table.columns.adjust;
          } else {
            _this.feeNotesTable.loadDataTable(_this.adjustFeeNotesTableColumns);
          }
        }, 100);
      } else if (newValue === "Reminders") {
        setTimeout(function () {
          if (_this.remindersTable.table) {
            _this.remindersTable.table.columns.adjust;
          } else {
            _this.remindersTable.loadDataTable(_this.adjustRemindersTableColumns);
          }
        }, 100);
      } else if (newValue === "DocLog") {
        setTimeout(function () {
          if (_this.docLogTable.table) {
            _this.docLogTable.table.columns.adjust;
          } else {
            _this.docLogTable.loadDataTable(_this.adjustDocLogTableColumns);
          }
        }, 100);
      }
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Client Matter Form'
    }
  },
  data: function data() {
    return {
      record: {},
      pageTitle: '',
      activeTab: null,
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Parties",
        title: "Parties",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "Fee Notes",
        title: "Fee Notes",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "File Notes",
        title: "File Notes",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "Reminders",
        title: "Reminders",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "DocLog",
        title: "Documents",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "Debtors Account",
        title: "Debtors Account",
        iconClass: '',
        visible: false,
        active: false
      }]
    };
  },
  methods: {
    editRecord: function editRecord(id, matPartyRecordid) {
      var _this2 = this;

      // Note: Setting this.buttonAdditionalDataParameter = 'recordid' in MatterTable.vue
      // To handle the highlighting of the table row (because its row id is the MatParty RecordID)
      this.table.highlightRow(matPartyRecordid);
      this.record = {};
      $('#' + this.id + '-general-form-tab-content').html('');
      this.pageTitle = '';
      this.debtorsAccountTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Debtors Account';
      })[0];
      this.partiesTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Parties';
      })[0];
      this.feeNotesTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Fee Notes';
      })[0];
      this.fileNotesTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'File Notes';
      })[0];
      this.remindersTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Reminders';
      })[0];
      this.docLogTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'DocLog';
      })[0];
      this.debtorsAccountTab.visible = false;
      this.partiesTab.visible = false;
      this.feeNotesTab.visible = false;
      this.fileNotesTab.visible = false;
      this.remindersTab.visible = false;
      this.docLogTab.visible = false;
      this.setGeneralTab();
      root.$snotify.simple('Please wait...', 'Retrieving Matter', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      var templateData = root.templateData;
      templateData.report = {};
      axios.post('/matters/getMattersTemplateData', {
        where: 'matter.recordid,' + id
      }).then(function (templateDataResponse) {
        if (templateDataResponse.data.errors) {
          showError('Error', templateDataResponse.data.errors);
        } else {
          _this2.record = templateData.matter = templateDataResponse.data.matters[0];
          _this2.pageTitle = _this2.record.fileref + ' - ' + _this2.record.description;
          axios.post('/utils/call/getClientMatterView', {
            docgenid: _this2.record.docgenid,
            mattertypeid: _this2.record.mattertypeid,
            matterprefix: root.loggedInPartyMatterPrefix
          }).then(function (matterViewResponse) {
            if (matterViewResponse.data.errors) {
              showError('Error', matterViewResponse.data.errors);
            } else {
              var matterView = matterViewResponse.data.data[0];
              _this2.partiesTab.visible = matterView.partiesflag == '1';
              _this2.feeNotesTab.visible = matterView.feenotesflag == '1';
              ;
              _this2.fileNotesTab.visible = matterView.filenotesflag == '1';
              ;
              _this2.remindersTab.visible = matterView.remindersflag == '1';
              ;
              _this2.docLogTab.visible = matterView.doclogflag == '1';
              ;
              _this2.debtorsAccountTab.visible = matterView.debtorsaccountflag == '1';
              console.log("templateData", templateData);
              root.vueRender(matterViewResponse.data.data[0].contents, templateData).then(function (contents) {
                root.$snotify.clear();
                $('#' + _this2.id + '-general-form-tab-content').html(contents);

                _this2.displayForm();

                setTimeout(function () {
                  _this2.initializeFormTables(); // Need this otherwise popovers don't work if taking on a Matter (the first time)


                  $('#' + _this2.id + " .popover-icon").popover();
                }, 100);
              })["catch"](function (error) {
                showError('Error rendering Report Html', error);
              });
            }
          })["catch"](function (error) {
            showError('Error', error);
          });
        }
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    initializeFormTables: function initializeFormTables() {
      var _this3 = this;

      root.getFormHeight(this.id, '.form-tab-body').then(function (formHeight) {
        // ***********************************
        // Debtors Account Table
        // ***********************************
        _this3.debtorsAccountTable = _this3.$refs[_this3.id + '-debtors-account'].table;
        _this3.debtorsAccountTable.debtorsBalance = null; // Shown at the footer of the table

        _this3.debtorsAccountTable.table = null; // Reset to NULL so the ActiveTab watch reloads the table

        _this3.debtorsAccountTable.subTitle = _this3.record.fileref + ' - ' + _this3.record.description; // Custom report template

        _this3.debtorsAccountTable.reportTemplateId = root.lolSettings.debtorsaccounttemplateid;
        _this3.debtorsAccountTable.matterId = _this3.record.recordid;
        _this3.debtorsAccountTable.tableOptions = {
          paging: true,
          displayBuffer: 1000,
          ordering: false,
          actionColumnWidth: 15,
          scrollY: formHeight - 220 + 'px',
          createdRow: function createdRow(row, data) {
            setDebtorsAccountRowColor(row, data);
          },
          displayActionButtonFunction: function displayActionButtonFunction(data) {
            return (data === null || data === void 0 ? void 0 : data.type) == 'A' || (data === null || data === void 0 ? void 0 : data.type) == 'Z' ? false : true;
          },
          actionButtonTextFunction: function actionButtonTextFunction(data) {
            return (data === null || data === void 0 ? void 0 : data.type) == 'I' || (data === null || data === void 0 ? void 0 : data.type) == 'X' || (data === null || data === void 0 ? void 0 : data.type) == 'V' ? 'View' : 'Edit';
          },
          actionButtonClassFunction: function actionButtonClassFunction(data) {
            return (data === null || data === void 0 ? void 0 : data.type) == 'I' || (data === null || data === void 0 ? void 0 : data.type) == 'X' || (data === null || data === void 0 ? void 0 : data.type) == 'V' ? 'primary' : 'success';
          }
        }; // ***********************************
        // Matter Parties Table
        // ***********************************

        _this3.matterPartiesTable = _this3.$refs[_this3.id + '-matter-parties'].table;
        _this3.matterPartiesTable.table = null; // Reset to NULL so the ActiveTab watch reloads the table

        _this3.matterPartiesTable.subTitle = _this3.record.fileref + ' - ' + _this3.record.description;
        _this3.matterPartiesTable.whereRaw = ["MatParty.MatterId = " + _this3.record.recordid];
        _this3.matterPartiesTable.tableOptions = {
          actionColumnWidth: 15,
          scrollY: formHeight - 220 + 'px'
        }; // ***********************************
        // File Notes Table
        // ***********************************

        _this3.fileNotesTable = _this3.$refs[_this3.id + '-file-notes'].table;
        _this3.fileNotesTable.table = null; // Reset to NULL so the ActiveTab watch reloads the table

        _this3.fileNotesTable.subTitle = _this3.record.fileref + ' - ' + _this3.record.description;
        _this3.fileNotesTable.whereRaw = ["FileNote.InternalFlag <> 1 AND FileNote.MatterId = " + _this3.record.recordid];
        _this3.fileNotesTable.tableOptions = {
          scrollY: formHeight - 220 + 'px'
        }; // ***********************************
        // Fee Notes Table
        // ***********************************

        _this3.feeNotesTable = _this3.$refs[_this3.id + '-fee-notes'].table;
        _this3.feeNotesTable.table = null; // Reset to NULL so the ActiveTab watch reloads the table

        _this3.feeNotesTable.subTitle = _this3.record.fileref + ' - ' + _this3.record.description;
        _this3.feeNotesTable.whereRaw = ["FeeNote.MatterId = " + _this3.record.recordid];
        _this3.feeNotesTable.tableOptions = {
          scrollY: formHeight - 220 + 'px'
        };
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    adjustMatPartiesTableColumns: function adjustMatPartiesTableColumns() {
      this.matterPartiesTable.table.columns.adjust;
    },
    adjustFeeNotesTableColumns: function adjustFeeNotesTableColumns() {
      this.feeNotesTable.table.columns.adjust;
    },
    adjustFileNotesTableColumns: function adjustFileNotesTableColumns() {
      this.fileNotesTable.table.columns.adjust;
    },
    adjustRemindersTableColumns: function adjustRemindersTableColumns() {
      this.remindersTable.table.columns.adjust;
    },
    adjustDocLogTableColumns: function adjustDocLogTableColumns() {
      this.docLogTable.table.columns.adjust;
    },
    adjustDebtorsAccountTableColumns: function adjustDebtorsAccountTableColumns() {
      this.debtorsAccountTable.table.columns.adjust;
      this.debtorsAccountTable.debtorsBalance = this.record.debtorsbalance;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matters/ClientMatterForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/client/matters/ClientMatterForm.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientMatterForm.vue?vue&type=template&id=69182cf8& */ "./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8&");
/* harmony import */ var _ClientMatterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientMatterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientMatterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matters/ClientMatterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientMatterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientMatterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientMatterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientMatterForm_vue_vue_type_template_id_69182cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientMatterForm.vue?vue&type=template&id=69182cf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/ClientMatterForm.vue?vue&type=template&id=69182cf8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-xl" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content matters-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header matters-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      _c("span", {
                        domProps: { textContent: _vm._s(_vm.pageTitle) },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.modal
                      ? _c("i", {
                          staticClass:
                            "cp top-right fa fa-times-circle fa-2x text-white",
                          attrs: {
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
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "card-body form-tab-body p-3",
                style: _vm.modal ? "height:70vh" : "",
              },
              [
                _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                _vm._v(" "),
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeTab === "General",
                      expression: "activeTab === 'General'",
                    },
                  ],
                  staticClass: "form-tab-content",
                  attrs: { id: _vm.id + "-general-form-tab-content" },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Parties",
                        expression: "activeTab === 'Parties'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("matter-parties", {
                      ref: _vm.id + "-matter-parties",
                      attrs: { uniqueId: _vm.id },
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
                        value: _vm.activeTab === "Fee Notes",
                        expression: "activeTab === 'Fee Notes'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fee-notes", {
                      ref: _vm.id + "-fee-notes",
                      attrs: { id: _vm.id + "-fee-notes" },
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
                        value: _vm.activeTab === "File Notes",
                        expression: "activeTab === 'File Notes'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("file-notes", {
                      ref: _vm.id + "-file-notes",
                      attrs: { id: _vm.id + "-file-notes" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeTab === "Reminders",
                      expression: "activeTab === 'Reminders'",
                    },
                  ],
                  staticClass: "form-tab-content",
                }),
                _vm._v(" "),
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeTab === "DocLog",
                      expression: "activeTab === 'DocLog'",
                    },
                  ],
                  staticClass: "form-tab-content",
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Debtors Account",
                        expression: "activeTab === 'Debtors Account'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("debtors-account", {
                      ref: _vm.id + "-debtors-account",
                      attrs: { uniqueId: _vm.id, newRecordButton: false },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div"),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger form-button",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      title: "Close",
                    },
                    on: { click: _vm.closeForm },
                  },
                  [
                    _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                    _vm._v("Close"),
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
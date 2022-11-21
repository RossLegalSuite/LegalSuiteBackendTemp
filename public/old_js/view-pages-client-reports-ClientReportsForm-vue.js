"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-reports-ClientReportsForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _pages_system_templates_common_template_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/system-templates/common-template-methods */ "./resources/js/pages/system-templates/common-template-methods.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__["default"], _pages_system_templates_common_template_methods__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    SelectMatters: function SelectMatters() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatters-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatters */ "./resources/js/pages/matters/SelectMatters.vue"));
    },
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectClientReportFields: function SelectClientReportFields() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-reports-SelectClientReportFields-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/reports/SelectClientReportFields */ "./resources/js/pages/client/reports/SelectClientReportFields.vue"));
    },
    SelectSnippet: function SelectSnippet() {
      return __webpack_require__.e(/*! import() */ "view-pages-snippets-SelectSnippet-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/snippets/SelectSnippet */ "./resources/js/pages/snippets/SelectSnippet.vue"));
    },
    SelectComponent: function SelectComponent() {
      return __webpack_require__.e(/*! import() */ "view-pages-system-components-SelectComponent-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/system-components/SelectComponent */ "./resources/js/pages/system-components/SelectComponent.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Client Report'
    },
    componentRef: {
      type: String,
      "default": 'clientReportsSelectClientReportFields'
    }
  },
  data: function data() {
    return {
      selectedRecord: {
        matterprefix: null,
        fileref: null
      },
      matterSelectedFlag: false,
      displayFieldsFlag: true,
      activeTab: null,
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Contents",
        title: "Contents",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Contents") {
        this.contentEditor.summernote('code', this.record.contents);
      }
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.savedFlag = false;
      axios.post('/lolclientreport/get/' + id).then(function (response) {
        _this.record = response.data.data[0];
        _this.record.source = 'Client Report'; // Need this for the PreviewHtml 

        _this.editing = true;

        _this.displayForm();

        _this.initFormData();
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    initNewRecord: function initNewRecord() {
      this.record = {
        title: null,
        description: null,
        source: 'Client Report',
        contents: '',
        subject: '',
        header: '',
        footer: '',
        topmargin: '5',
        bottommargin: '5',
        leftmargin: '5',
        rightmargin: '5',
        orientation: 'Landscape'
      };
      this.editing = false;
      this.displayForm();
      this.initFormData();
    },
    initFormData: function initFormData() {
      var _this2 = this;

      this.setGeneralTab(); //Set to HtmlView

      if (this.contentEditor) {
        if (this.contentEditor.summernote('codeview.isActivated')) {
          var codeMirrorElement = $('#' + this.id + ' .CodeMirror');
          var codeViewInstance = codeMirrorElement[0].CodeMirror;

          if (codeViewInstance) {
            var toolbar = this.contentEditor.data('summernote').layoutInfo.toolbar;
            toggleCodeViewButtonText(toolbar);
            toggleToolBarButtons(toolbar);
          } else {
            showError('Error', 'Could not find CodeView Instance');
          }

          this.contentEditor.summernote('codeview.toggle');
        }
      }

      setTimeout(function () {
        $('#' + _this2.id + ' input[name="title"]').focus();
      });
      this.displayFieldsFlag = true;
      this.savedFlag = false;

      if (!this.availableSpace) {
        root.getAvailableSpace('#' + this.id + '-top-of-form-marker', '#' + this.id + ' .modal-footer', 75).then(function (availableSpace) {
          _this2.availableSpace = availableSpace;

          _this2.loadContentEditor();
        })["catch"](function (error) {
          showError('Error', error);
        });
      }
    },
    selectFields: function selectFields(context) {
      if (!this.matterSelectedFlag) {
        this.context = context;
        this.selectMatter.pageTitle = 'Select a Matter (to display the Field values)';
        this.selectMatter.selectMatter(this);
      } else {
        this.selectClientReportFields.show();
      }
    },
    matterSelected: function matterSelected(selectedRecord) {
      var _this3 = this;

      this.matterSelectedFlag = true; // Get the Fields from the Template Data

      root.$snotify.simple('Please wait...', 'Creating Fields', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      var templateData = root.templateData;
      templateData.report = {
        title: this.record.title,
        subtitle: this.record.description,
        date: moment().format(root.control.dateformat + ' HH:mm:ss')
      };
      axios.post('/matters/getMattersTemplateData', {
        where: 'matter.recordid,' + selectedRecord.recordid
      }).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          templateData.matter = response.data.matters[0];
          axios.post('/party/get/' + templateData.matter.clientid).then(function (response) {
            if (response.data.errors) {
              showError('Error', response.data.errors);
            } else {
              root.$snotify.clear();
              templateData.party = response.data.data[0];

              if (_this3.displayFieldsFlag) {
                _this3.displayFieldsFlag = false;

                _this3.selectClientReportFields.load(_this3.context, templateData, _this3.componentRef, false);
              } else {
                _this3.selectClientReportFields.load(_this3.context, templateData, _this3.componentRef, true);
              }
            }
          })["catch"](function (error) {
            showError('Error', error);
          });
        }
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    selectReportMatters: function selectReportMatters() {
      this.selectMatters.selectMatters();
    },
    mattersSelected: function mattersSelected(selectedMatters) {
      this.createReport(selectedMatters);
    },
    createReport: function createReport(selectedMatters) {
      var _this4 = this;

      root.$snotify.simple('Please wait...', 'Creating Report', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      this.createTemplateData(selectedMatters).then(function (templateData) {
        root.$snotify.clear();
        root.vueRender(_this4.record.contents, templateData).then(function (contents) {
          root.$snotify.clear();
          root.previewHtml.title = _this4.record.title;
          root.previewHtml.htmlBody = contents;
          root.previewHtml.load(_this4, _this4.record, 'Client Report');
        })["catch"](function (error) {
          showError('Error rendering Report Html', error);
        });
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    createTemplateData: function createTemplateData(selectedMatters) {
      var _this5 = this;

      //*************************************************************************
      // Keep this in sync with the code in pages\\client\matters\MatterTable.vue
      //*************************************************************************
      return new Promise(function (resolve, reject) {
        var templateData = root.templateData;
        templateData.report = {
          title: _this5.record.title,
          subtitle: _this5.record.description,
          date: moment().format(root.control.dateformat + ' HH:mm:ss')
        };
        axios.post('/matters/getMattersTemplateData', {
          whereIn: 'matter.recordid,' + selectedMatters.join()
        }).then(function (response) {
          if (response.data.errors) {
            reject(response.data.errors);
          } else {
            templateData.matters = response.data.matters;
            templateData.matter = templateData.matters[0];
            templateData.report.count = selectedMatters.length;
            templateData.report.filter = 'Previewing selected Matters';
            axios.post('/party/get/' + templateData.matters[0].clientid).then(function (response) {
              if (response.data.errors) {
                reject(response.data.errors);
              } else {
                templateData.party = response.data.data[0];
                resolve(templateData);
              }
            })["catch"](function (error) {
              reject(error);
            });
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    updateContents: function updateContents() {
      this.record.contents = this.contentEditor.summernote('code');
    },
    saveReport: function saveReport() {
      var _this6 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve, reject) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  root.$snotify.simple('Please wait...', 'Saving Report', {
                    timeout: 0,
                    icon: 'img/cogs.gif'
                  });

                  _this6.updateContents();

                  _context.next = 5;
                  return axios.post('/lolclientreport/' + (_this6.savedFlag ? 'update' : 'store'), _this6.record);

                case 5:
                  response = _context.sent;
                  root.$snotify.clear();

                  if (response.data.errors) {
                    reject(response.data.errors);
                  } else {
                    _this6.errors = {};
                    _this6.record.recordid = response.data.data[0].recordid;

                    if (!_this6.editing && !_this6.savedFlag) {
                      _this6.highlightRow(response.data.data[0].recordid, {
                        where: "title,<,'" + response.data.data[0].title + "'",
                        orderBy: 'title'
                      });
                    } else {
                      _this6.table.refreshRow(response.data.data[0].recordid);
                    }

                    if (closeFlag) {
                      _this6.closeForm();
                    } else {
                      _this6.savedFlag = true;
                    }

                    resolve();
                  }

                  _context.next = 14;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](0);
                  root.$snotify.clear();
                  reject(_context.t0);

                case 14:
                  ;

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 10]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    okClicked: function okClicked() {
      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.saveReport(closeFlag)["catch"](function (error) {
        showError('Error saving Report', error);
      });
    },
    copyClicked: function copyClicked() {
      var _this7 = this;

      this.saveReport(false).then(function () {
        axios.post('/lolclientreport/copy', _this7.record).then(function (response) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            root.$snotify.simple('The Report was copied successfully', 'Success', {
              icon: 'img/check.png'
            });

            _this7.highlightRow(response.data.data[0].recordid, {
              where: "title,<,'" + response.data.data[0].title + "'",
              orderBy: 'title'
            });
          }
        });
      })["catch"](function (error) {
        showError('Error saving Report', error);
      });
    },
    pageTitle: function pageTitle() {
      return this.record.title;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/reports/ClientReportsForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/client/reports/ClientReportsForm.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientReportsForm.vue?vue&type=template&id=737613e6& */ "./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6&");
/* harmony import */ var _ClientReportsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientReportsForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientReportsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/reports/ClientReportsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientReportsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientReportsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientReportsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientReportsForm_vue_vue_type_template_id_737613e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientReportsForm.vue?vue&type=template&id=737613e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/ClientReportsForm.vue?vue&type=template&id=737613e6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } },
    [
      _c(
        "div",
        {
          class: _vm.modal ? "modal-dialog modal-dialog-centered modal-xl" : "",
        },
        [
          _c(
            "div",
            {
              class: _vm.modal
                ? "modal-content blue-border"
                : "card h-100 border-0",
            },
            [
              _c("div", { class: _vm.modal ? "" : "card-header" }, [
                _c(
                  "div",
                  {
                    class: _vm.modal
                      ? "modal-header blue-bg"
                      : "d-flex justify-content-between",
                  },
                  [
                    _c("div", { staticClass: "page-title" }, [
                      _c("h3", { staticClass: "modal-title" }, [
                        !_vm.editing && !_vm.savedFlag
                          ? _c("span", [_vm._v("Report will be Added")])
                          : _c("span", {
                              domProps: { innerHTML: _vm._s(_vm.pageTitle()) },
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
                  staticClass: "modal-body form-tab-body p-3",
                  style: _vm.modal
                    ? "height:75vh; overflow: unset"
                    : "overflow: unset",
                },
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
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-5",
                              name: "title",
                              label: "Title",
                              tabIndex: "-1",
                            },
                            model: {
                              value: _vm.record.title,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "title", $$v)
                              },
                              expression: "record.title",
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
                              _class: "col-md-7",
                              name: "description",
                              label: "Description",
                              tabIndex: "-1",
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
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("fieldset", { staticClass: "mt-3" }, [
                            _c("legend", [_vm._v("PDF Settings")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-lg-6" }, [
                                _c("label", [_vm._v("Orientation")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.record.orientation,
                                        expression: "record.orientation",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "orientation",
                                      title:
                                        "The default orientation of the PDF document generated by the template",
                                    },
                                    on: {
                                      change: function ($event) {
                                        var $$selectedVal =
                                          Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function (o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function (o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                        _vm.$set(
                                          _vm.record,
                                          "orientation",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { value: "Portrait" } },
                                      [_vm._v("Portrait")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Landscape" } },
                                      [_vm._v("Landscape")]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-6",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "topmargin",
                                    label: "Top Margin",
                                  },
                                  model: {
                                    value: _vm.record.topmargin,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "topmargin", $$v)
                                    },
                                    expression: "record.topmargin",
                                  },
                                }),
                                _vm._v(" "),
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-6",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "bottommargin",
                                    label: "Bottom Margin",
                                  },
                                  model: {
                                    value: _vm.record.bottommargin,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "bottommargin", $$v)
                                    },
                                    expression: "record.bottommargin",
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
                                    _class: "col-md-6",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "leftmargin",
                                    label: "Left Margin",
                                  },
                                  model: {
                                    value: _vm.record.leftmargin,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "leftmargin", $$v)
                                    },
                                    expression: "record.leftmargin",
                                  },
                                }),
                                _vm._v(" "),
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-6",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "rightmargin",
                                    label: "Right Margin",
                                  },
                                  model: {
                                    value: _vm.record.rightmargin,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "rightmargin", $$v)
                                    },
                                    expression: "record.rightmargin",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
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
                          value: _vm.activeTab === "Contents",
                          expression: "activeTab === 'Contents'",
                        },
                      ],
                      staticClass: "form-tab-content",
                      staticStyle: { padding: "0" },
                    },
                    [
                      _c("div", {
                        attrs: { id: _vm.id + "-top-of-form-marker" },
                      }),
                      _vm._v(" "),
                      _c("div", { attrs: { id: _vm.id + "-content-editor" } }),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
                  _c("div", [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.activeTab == "Contents",
                            expression: "activeTab == 'Contents'",
                          },
                        ],
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary form-button",
                            attrs: {
                              type: "button",
                              title: "Select Matters and preview the Report",
                            },
                            on: { click: _vm.selectReportMatters },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-file-code-o fa-lg mr-2",
                            }),
                            _vm._v(
                              "Preview Report\r\n                            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.activeTab == "General",
                            expression: "activeTab == 'General'",
                          },
                        ],
                      },
                      [
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
                            staticClass: "btn btn-danger form-button mr-2",
                            attrs: {
                              type: "button",
                              title: "Delete this Report",
                            },
                            on: { click: _vm.deleteClicked },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-times-circle fa-lg mr-2",
                            }),
                            _vm._v("Delete\r\n                        "),
                          ]
                        ),
                        _vm._v(" "),
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
                            staticClass: "btn btn-secondary form-button",
                            attrs: {
                              type: "button",
                              title: "Make a copy of this Report",
                            },
                            on: { click: _vm.copyClicked },
                          },
                          [
                            _c("i", { staticClass: "fa fa-clone fa-lg mr-2" }),
                            _vm._v("Copy\r\n                        "),
                          ]
                        ),
                      ]
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
                          title: "Save the Report and continue editing",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(false)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-square fa-lg mr-2",
                        }),
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
                          title: "Save the Report and close the Window",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(true)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("OK"),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.savedFlag || _vm.editing
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger form-button",
                            attrs: {
                              type: "button",
                              title: "Close this screen",
                            },
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
                            attrs: {
                              type: "button",
                              title: "Exit without saving",
                            },
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
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("select-matters", {
        ref: "client-reports-select-matters",
        attrs: {
          id: "client-reports-select-matters",
          formRef: "client-reports-select-matters",
        },
      }),
      _vm._v(" "),
      _c("select-matter", {
        ref: _vm.id + "-select-matter",
        attrs: {
          formControls: false,
          id: _vm.id + "-select-matter",
          formRef: _vm.id + "-select-matter",
        },
      }),
      _vm._v(" "),
      _c("select-client-report-fields", {
        ref: _vm.componentRef,
        attrs: { id: "client-reports-select-client-report-fields" },
      }),
      _vm._v(" "),
      _c("select-snippet", {
        attrs: {
          id: "client-reports-form-select-snippet",
          snippetTableName: "lolclientreportsnippet",
        },
      }),
      _vm._v(" "),
      _c("select-component", {
        attrs: { id: "client-reports-form-select-component" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
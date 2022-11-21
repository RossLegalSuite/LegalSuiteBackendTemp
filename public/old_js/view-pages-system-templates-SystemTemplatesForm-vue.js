"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-system-templates-SystemTemplatesForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectParty: function SelectParty() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParty-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParty */ "./resources/js/pages/parties/SelectParty.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Template'
    }
  },
  data: function data() {
    return {
      headerEditor: null,
      footerEditor: null,
      previewingFooter: false,
      previewingHeader: false,
      showHeaderPreviewFlag: false,
      showFooterPreviewFlag: false,
      templateRoles: root.partyRoles,
      activeTab: 'General',
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
      }, {
        pageName: "Header",
        title: "Header",
        iconClass: '',
        visible: true,
        active: false
      }, {
        pageName: "Footer",
        title: "Footer",
        iconClass: '',
        visible: true,
        active: false
      }, {
        pageName: "Settings",
        title: "Settings",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  computed: {
    source: function source() {
      return this.record.source;
    },
    type: function type() {
      return this.record.type;
    }
  },
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Header") {
        this.loadHeaderEditor();
      }

      if (newValue === "Footer") {
        this.loadFooterEditor();
      }
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.previewingContent = this.previewingHeader = this.previewingFooter = false;
      this.showContentPreviewFlag = this.showHeaderPreviewFlag = this.showFooterPreviewFlag = false;
      this.savedFlag = false;
      this.selectedParty = this.selectedMatter = null;
      this.record.source = null; // To fire the watch to call createPreviewTemplateData() after getting the record

      axios.post('/lolsystemtemplate/get/' + id).then(function (response) {
        _this.record = response.data.data[0];
        _this.editing = true;
        _this.systemTemplate = _this.record.recordid == root.lolSettings.reporttemplateid || _this.record.recordid == root.lolSettings.reportemailtemplateid || _this.record.recordid == root.lolSettings.documentemailtemplateid;

        _this.setGeneralTab();

        _this.displayForm();

        _this.initFormData();

        setTimeout(function () {
          $('#' + _this.id + ' input[name="title"]').focus();
        });
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      this.previewingContent = this.previewingHeader = this.previewingFooter = false;
      this.showContentPreviewFlag = this.showHeaderPreviewFlag = this.showFooterPreviewFlag = false;
      this.savedFlag = false;
      this.selectedParty = this.selectedMatter = null;
      this.record.source = null; // To fire the watch to call createPreviewTemplateData() after getting the record

      this.record = {
        title: null,
        description: null,
        type: 'Document',
        source: 'Party',
        roleid: null,
        contents: '',
        subject: '',
        header: '',
        footer: '',
        password: '' + new Date().getTime(),
        allowprint: true,
        allowcopy: false,
        allowedit: true,
        topmargin: '5',
        bottommargin: '5',
        leftmargin: '5',
        rightmargin: '5',
        orientation: 'Portrait'
      };
      this.editing = false;
      this.setGeneralTab();
      this.displayForm();
      this.initFormData();
      setTimeout(function () {
        $('#' + _this2.id + ' input[name="title"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this3 = this;

      this.errors = {};
      this.footerTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Footer';
      })[0];
      this.headerTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Header';
      })[0];
      this.toggleHeaderFooterTabs();
      this.contentPreviewerContents = $('#' + this.id + '-content-previewer-contents');
      this.headerPreviewerContents = $('#' + this.id + '-header-previewer-contents');
      this.footerPreviewerContents = $('#' + this.id + '-footer-previewer-contents');
      this.headerEditor = this.footerEditor = null;

      if (!this.availableSpace) {
        root.getAvailableSpace('#' + this.id + '-top-of-form-marker', '#' + this.id + ' .modal-footer', 75).then(function (availableSpace) {
          _this3.availableSpace = availableSpace;

          _this3.contentPreviewerContents.height(_this3.availableSpace - 10);

          _this3.headerPreviewerContents.height(_this3.availableSpace - 10);

          _this3.footerPreviewerContents.height(_this3.availableSpace - 10);

          _this3.loadContentEditor();
        })["catch"](function (error) {
          showError('Error', error);
        });
      } else {
        this.loadContentEditor();
        this.contentPreviewerContents.height(this.availableSpace - 10);
        this.headerPreviewerContents.height(this.availableSpace - 10);
        this.footerPreviewerContents.height(this.availableSpace - 10);
      }
    },
    setOptions: function setOptions(createTemplateDataMethod) {
      var returnData = {
        title: 'Preview PDF',
        notifyMessage: 'Generating PDF',
        folder: 'previews',
        fileName: 'preview.pdf',
        templateId: this.record.recordid,
        createTemplateData: createTemplateDataMethod
      };
      return returnData;
    },
    templateTypeChanged: function templateTypeChanged(option) {
      this.toggleHeaderFooterTabs();
    },
    isEmailType: function isEmailType() {
      var _this$record;

      return ((_this$record = this.record) === null || _this$record === void 0 ? void 0 : _this$record.type) == "Email" ? true : false;
    },
    toggleHeaderFooterTabs: function toggleHeaderFooterTabs() {
      this.headerTab.visible = this.footerTab.visible = !this.isEmailType();
    },
    loadHeaderEditor: function loadHeaderEditor() {
      //if (this.showHeaderPreviewFlag) return;
      if (!this.headerEditor) {
        this.headerEditor = $('#' + this.id + '-header-editor').summernote({
          callingComponent: this,
          height: this.availableSpace,
          addDefaultFonts: false,
          focus: false,
          toolbar: summerNoteToolBar(),
          previewMethod: this.showPreview,
          previewMethodParams: 'Header',
          buttons: _objectSpread(_objectSpread(_objectSpread({}, addToggleCodeViewButton()), addPreviewTemplateButton()), addTemplateFieldsButton())
        }); // } else {
        //     $('#' + this.id + '-header-tab .note-editor').toggle(true);
      }

      this.headerEditor.summernote('code', this.record.header);
    },
    loadFooterEditor: function loadFooterEditor() {
      //if (this.showFooterPreviewFlag) return;
      if (!this.footerEditor) {
        this.footerEditor = $('#' + this.id + '-footer-editor').summernote({
          callingComponent: this,
          height: this.availableSpace,
          addDefaultFonts: false,
          focus: false,
          toolbar: summerNoteToolBar(),
          previewMethod: this.showPreview,
          previewMethodParams: 'Footer',
          buttons: _objectSpread(_objectSpread(_objectSpread({}, addToggleCodeViewButton()), addPreviewTemplateButton()), addTemplateFieldsButton())
        }); // } else {
        //     $('#' + this.id + '-footer-tab .note-editor').toggle(true);
      }

      this.footerEditor.summernote('code', this.record.footer);
    },
    showHeaderPreviewer: function showHeaderPreviewer() {
      $('#' + this.id + '-header-tab .note-editor').toggle();
      this.setHeaderPreviewContents('<h3 class="mt-5 text-center">Generating preview .... please wait.</h3>');
      this.showHeaderPreviewFlag = true;
    },
    hideHeaderPreviewer: function hideHeaderPreviewer() {
      this.setHeaderPreviewContents('');
      this.previewingHeader = this.showHeaderPreviewFlag = false;
      $('#' + this.id + '-header-tab .note-editor').toggle();
    },
    setHeaderPreviewContents: function setHeaderPreviewContents(value) {
      this.headerPreviewerContents.html(value);
    },
    showFooterPreviewer: function showFooterPreviewer() {
      $('#' + this.id + '-footer-tab .note-editor').toggle();
      this.setFooterPreviewContents('<h3 class="mt-5 text-center">Generating preview .... please wait.</h3>');
      this.showFooterPreviewFlag = true;
    },
    hideFooterPreviewer: function hideFooterPreviewer() {
      this.setFooterPreviewContents('');
      this.previewingFooter = this.showFooterPreviewFlag = false;
      $('#' + this.id + '-footer-tab .note-editor').toggle();
    },
    setFooterPreviewContents: function setFooterPreviewContents(value) {
      this.footerPreviewerContents.html(value);
    },
    updateContents: function updateContents() {
      this.record.contents = this.contentEditor.summernote('code');
      if (this.headerEditor) this.record.header = this.headerEditor.summernote('code');
      if (this.footerEditor) this.record.footer = this.footerEditor.summernote('code');
    },
    saveTemplate: function saveTemplate() {
      var _this4 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve, reject) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  root.$snotify.simple('Please wait...', 'Saving Template', {
                    timeout: 0,
                    icon: 'img/cogs.gif'
                  });

                  _this4.updateContents();

                  _context.next = 5;
                  return axios.post('/lolsystemtemplate/' + (_this4.savedFlag ? 'update' : 'store'), _this4.record);

                case 5:
                  response = _context.sent;
                  root.$snotify.clear();

                  if (response.data.errors) {
                    reject(response.data.errors);
                  } else {
                    _this4.errors = {};
                    _this4.record.recordid = response.data.data[0].recordid;

                    if (!_this4.editing && !_this4.savedFlag) {
                      _this4.highlightRow(response.data.data[0].recordid, {
                        where: "title,<,'" + response.data.data[0].title + "'",
                        orderBy: 'title'
                      });
                    } else {
                      _this4.table.refreshRow(response.data.data[0].recordid);
                    }

                    if (closeFlag) {
                      _this4.closeForm();
                    } else {
                      _this4.savedFlag = true;
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
      this.saveTemplate(closeFlag)["catch"](function (error) {
        showError('Error saving Template', error);
      });
    },
    copyClicked: function copyClicked() {
      var _this5 = this;

      this.saveTemplate(false).then(function () {
        axios.post('/lolsystemtemplate/copy', _this5.record).then(function (response) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            root.$snotify.simple('The Template was copied successfully', 'Success', {
              icon: 'img/check.png'
            });

            _this5.highlightRow(response.data.data[0].recordid, {
              where: "title,<,'" + response.data.data[0].title + "'",
              orderBy: 'title'
            });
          }
        });
      })["catch"](function (error) {
        showError('Error saving Template', error);
      });
    },
    pageTitle: function pageTitle() {
      return this.record.title;
    },
    canDelete: function canDelete() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        if (_this6.source === 'components') {
          axios.post('/components/canDelete', {
            title: _this6.record.title
          }).then(function (response) {
            if (!response.data) {
              showError('Unable to delete the Component', 'It is used in at least one Template');
              reject();
            } else {
              resolve();
            }
          })["catch"](function (error) {
            reject();
          });
        } else {
          resolve();
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesForm.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemTemplatesForm.vue?vue&type=template&id=734ed883& */ "./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883&");
/* harmony import */ var _SystemTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemTemplatesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/system-templates/SystemTemplatesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTemplatesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesForm_vue_vue_type_template_id_734ed883___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTemplatesForm.vue?vue&type=template&id=734ed883& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesForm.vue?vue&type=template&id=734ed883& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                          ? _c("span", [_vm._v("Template will be Added")])
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
                      _c("div", {
                        attrs: { id: _vm.id + "-top-of-form-marker" },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-6",
                              name: "title",
                              label: "Title",
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
                              _class: "col-md-12",
                              name: "description",
                              label: "Description",
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
                          { staticClass: "col-md-3" },
                          [
                            _c("label", [_vm._v("Type")]),
                            _vm._v(" "),
                            _c("pop-over", {
                              attrs: {
                                content:
                                  "\r\n                                <h4>Type</h4>\r\n                                <p>Templates can generate Documents, Emails and Reports.</p>\r\n                                <p>Some are used internally. For example, the Table Report is used as a template to print out the contents of a Table.</p>\r\n                                <p>All templates, however, are editable and you can specify the layout and contents by editing the Template here.</p>",
                              },
                            }),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                options: _vm.$root.templateTypes,
                                searchable: false,
                                clearable: false,
                              },
                              on: {
                                "option:selected": _vm.templateTypeChanged,
                              },
                              model: {
                                value: _vm.record.type,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "type", $$v)
                                },
                                expression: "record.type",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-3" },
                          [
                            _c("label", [_vm._v("Data Source")]),
                            _vm._v(" "),
                            _c("pop-over", {
                              attrs: {
                                content:
                                  "\r\n                                <h4>Data Source</h4>\r\n                                <p>The Data Source indicates where the Template gets its data.</p>\r\n                                <p>If set to Party, for example, the Template will retrieve the data from each tagged Party (from the Address Book) and assemble the Document.</p>\r\n                                <p>If set to Matter, the Template will retrieve the data from each tagged Matter and assemble the Document.</p>\r\n                                <p>If set to MatParty, the Template will retrieve the data from each tagged Matter Party and assemble the Document.</p>\r\n                                <p>If set to Report, the Template will retrieve the data from the current table.</p>\r\n                                <p>The Company, Employee and General fields, e.g. <em>company.name</em>, are always avaiable and can be used in any Template regardless of its Data Source.</p>",
                              },
                            }),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                options: _vm.$root.templateSources,
                                searchable: false,
                                clearable: false,
                              },
                              model: {
                                value: _vm.record.source,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "source", $$v)
                                },
                                expression: "record.source",
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
                                value: _vm.source == "Matter",
                                expression: "source == 'Matter'",
                              },
                            ],
                            staticClass: "col-md-6",
                          },
                          [
                            _c("label", [_vm._v("Role")]),
                            _vm._v(" "),
                            _c("pop-over", {
                              attrs: {
                                content:
                                  "\r\n                                <h4>Role</h4>\r\n                                <p>A Template that uses the <em>Matter</em> data source will assemble Documents for\r\n                                each tagged Matter (if the Role is not specified).</p>\r\n                                <p>If a Role is selected, e.g. Defendant, Documents will be assembled for every Party who is a Defendant on each Matter. In this case, both the Matter and the Party fields can be used in the Template - the Party fields, with the <em>party</em> prefix, will relate to the Defendant.</p>\r\n                                <p><strong>Note:</strong>\r\n                                <br/>\r\n                                The Matter's Client data is always available using Fields with the <em>client</em> prefix.\r\n                                For example, <strong>&lcub;&lcub;client.name&rcub;&rcub;</strong> will refer to the Client's name and <strong>&lcub;&lcub;party.name&rcub;&rcub;</strong> will refer to the Defendant's name.</p>",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "v-select",
                              {
                                attrs: {
                                  options: _vm.templateRoles,
                                  reduce: function (templateRoles) {
                                    return templateRoles.recordid
                                  },
                                  label: "description",
                                  searchable: true,
                                  clearable: true,
                                },
                                model: {
                                  value: _vm.record.roleid,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "roleid", $$v)
                                  },
                                  expression: "record.roleid",
                                },
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    attrs: { slot: "no-options" },
                                    slot: "no-options",
                                  },
                                  [_vm._v("Role not found")]
                                ),
                              ]
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
                              value: _vm.isEmailType(),
                              expression: "isEmailType()",
                            },
                          ],
                          staticClass: "form-group row",
                        },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-8",
                              label: "Email Subject",
                              popOver:
                                "<h4>Email  Subject</h4>\r\n                            <p>Enter a (default) subject for the email.</p>\r\n                            <p>Note: You can use merge fields here to insert dynamic content, e.g. &#123;&#123;matter.fileref + ' ' + matter.description&#125;&#125;.</p>\r\n                            ",
                            },
                            model: {
                              value: _vm.record.subject,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "subject", $$v)
                              },
                              expression: "record.subject",
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
                          value: _vm.activeTab === "Contents",
                          expression: "activeTab === 'Contents'",
                        },
                      ],
                      staticClass: "form-tab-content pt-2 pb-1",
                      staticStyle: { background: "unset", overflow: "unset" },
                      attrs: { id: _vm.id + "-content-tab" },
                    },
                    [
                      _c("div", { attrs: { id: _vm.id + "-content-editor" } }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showContentPreviewFlag,
                              expression: "showContentPreviewFlag",
                            },
                          ],
                          staticStyle: { border: "1px solid rgba(0,0,0,.2)" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "note-toolbar card-header",
                              attrs: { role: "toolbar" },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "note-btn-group btn-group" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "note-btn btn btn-light btn-sm btn-fullscreen",
                                      attrs: {
                                        type: "button",
                                        tabindex: "-1",
                                        title:
                                          "Preview the contents in a PDF document",
                                      },
                                      on: { click: _vm.previewPdfDocument },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-file-pdf-o mr-2",
                                      }),
                                      _vm._v(
                                        "Generate PDF\r\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "note-btn-group btn-group ml-2",
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "note-btn btn btn-light btn-sm btn-fullscreen",
                                      attrs: {
                                        type: "button",
                                        tabindex: "-1",
                                        title: "Exit Preview mode",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setEditMode("Contents")
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-times-circle mr-2",
                                      }),
                                      _vm._v(
                                        "Exit Preview\r\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "pt-1 px-2 mb-2 overflow-auto",
                            attrs: {
                              id: _vm.id + "-content-previewer-contents",
                            },
                          }),
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
                          value: _vm.activeTab === "Header",
                          expression: "activeTab === 'Header'",
                        },
                      ],
                      staticClass: "form-tab-content pt-2 pb-1",
                      staticStyle: { background: "unset", overflow: "unset" },
                      attrs: { id: _vm.id + "-header-tab" },
                    },
                    [
                      _c("div", { attrs: { id: _vm.id + "-header-editor" } }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showHeaderPreviewFlag,
                              expression: "showHeaderPreviewFlag",
                            },
                          ],
                          staticStyle: { border: "1px solid rgba(0,0,0,.2)" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "note-toolbar card-header",
                              attrs: { role: "toolbar" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "note-btn-group btn-group ml-2",
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "note-btn btn btn-light btn-sm btn-fullscreen",
                                      attrs: {
                                        type: "button",
                                        tabindex: "-1",
                                        title: "Exit Preview mode",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setEditMode("Header")
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-times-circle mr-2",
                                      }),
                                      _vm._v(
                                        "Exit Preview\r\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "pt-1 px-2 mb-2 overflow-auto",
                            attrs: {
                              id: _vm.id + "-header-previewer-contents",
                            },
                          }),
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
                          value: _vm.activeTab === "Footer",
                          expression: "activeTab === 'Footer'",
                        },
                      ],
                      staticClass: "form-tab-content pt-2 pb-1",
                      staticStyle: { background: "unset", overflow: "unset" },
                      attrs: { id: _vm.id + "-footer-tab" },
                    },
                    [
                      _c("div", { attrs: { id: _vm.id + "-footer-editor" } }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showFooterPreviewFlag,
                              expression: "showFooterPreviewFlag",
                            },
                          ],
                          staticStyle: { border: "1px solid rgba(0,0,0,.2)" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "note-toolbar card-header",
                              attrs: { role: "toolbar" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "note-btn-group btn-group ml-2",
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "note-btn btn btn-light btn-sm btn-fullscreen",
                                      attrs: {
                                        type: "button",
                                        tabindex: "-1",
                                        title: "Exit Preview mode",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setEditMode("Footer")
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-times-circle mr-2",
                                      }),
                                      _vm._v(
                                        "Exit Preview\r\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "pt-1 px-2 mb-2 overflow-auto",
                            attrs: {
                              id: _vm.id + "-footer-previewer-contents",
                            },
                          }),
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
                          value: _vm.activeTab === "Settings",
                          expression: "activeTab === 'Settings'",
                        },
                      ],
                      staticClass: "form-tab-content pt-2 pb-1",
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("fieldset", { staticClass: "mt-3" }, [
                            _c("legend", [_vm._v("Page Settings")]),
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
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("fieldset", { staticClass: "mt-3" }, [
                            _c("legend", [_vm._v("PDF Settings")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-6",
                                    name: "password",
                                    label: "Password",
                                  },
                                  model: {
                                    value: _vm.record.password,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "password", $$v)
                                    },
                                    expression: "record.password",
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
                                    value: _vm.record.password,
                                    expression: "record.password",
                                  },
                                ],
                                staticClass: "form-group row",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-12" },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          id: _vm.id + "-allow-print-checkbox",
                                          name: "allowprintCheckBox",
                                          value: "1",
                                          "unchecked-value": "0",
                                        },
                                        model: {
                                          value: _vm.record.allowprint,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.record,
                                              "allowprint",
                                              $$v
                                            )
                                          },
                                          expression: "record.allowprint",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                            Allow the user to print the PDF\r\n                                            \r\n                                        "
                                        ),
                                      ]
                                    ),
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
                                    value: _vm.record.password,
                                    expression: "record.password",
                                  },
                                ],
                                staticClass: "form-group row",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-12" },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          id: _vm.id + "-allow-copy-checkbox",
                                          name: "allowcopyCheckBox",
                                          value: "1",
                                          "unchecked-value": "0",
                                        },
                                        model: {
                                          value: _vm.record.allowcopy,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.record,
                                              "allowcopy",
                                              $$v
                                            )
                                          },
                                          expression: "record.allowcopy",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                            Allow the user to copy & paste text from the PDF\r\n\r\n                                        "
                                        ),
                                      ]
                                    ),
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
                                    value: _vm.record.password,
                                    expression: "record.password",
                                  },
                                ],
                                staticClass: "form-group row",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-12" },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          id: _vm.id + "-allow-edit-checkbox",
                                          name: "alloweditCheckBox",
                                          value: "1",
                                          "unchecked-value": "0",
                                        },
                                        model: {
                                          value: _vm.record.allowedit,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.record,
                                              "allowedit",
                                              $$v
                                            )
                                          },
                                          expression: "record.allowedit",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                            Allow the user to edit the PDF (with a PDF editor)\r\n\r\n                                        "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
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
                            value: _vm.activeTab == "General" && _vm.editing,
                            expression: "activeTab == 'General' && editing",
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
                                value: _vm.editing && !_vm.systemTemplate,
                                expression: "editing && !systemTemplate",
                              },
                            ],
                            staticClass: "btn btn-danger form-button mr-2",
                            attrs: {
                              type: "button",
                              title: "Delete this Template",
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
                              title: "Make a copy of this Template",
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
                          title: "Save the Template and continue editing",
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
                          title: "Save the Template and close the Window",
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
      _c("select-matter", {
        ref: _vm.id + "-select-matter",
        attrs: {
          formControls: false,
          id: _vm.id + "-select-matter",
          formRef: _vm.id + "-select-matter",
        },
      }),
      _vm._v(" "),
      _c("select-party", {
        ref: _vm.id + "-select-party",
        attrs: {
          formControls: false,
          id: _vm.id + "-select-party",
          formRef: _vm.id + "-select-party",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-email-EmailForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__["default"]],
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
      "default": 'Email'
    }
  },
  data: function data() {
    return {
      record: {},
      attachments: [],
      emailLoaded: false,
      savedAttachments: false,
      savedAttachmentsUrl: '',
      iframeHeight: '',
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Attachments",
        title: "Attachments",
        iconClass: '',
        visible: false,
        active: false
      }]
    };
  },
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Attachments") {// if (!this.gotContents) {
        //     this.gotContents = true;
        //     this.displayContents();
        // }
      }
    }
  },
  methods: {
    showEmailMessage: function showEmailMessage(record, params) {
      this.params = params;
      this.emailLoaded = false;
      $('#email-form-message-iframe')[0].srcdoc = "\n                <html style=\"height: 100%;\"><head></head><body style=\"height: 100%;\">            \n                <div style=\"margin: 0px;justify-content: center; align-items: center; display: flex; height: 100%;\">\n                    <div style=\"text-align: center\">\n                        <h3 style=\"color:forestgreen\">Loading contents...Please wait</h3>\n                    </div>\n                </div>\n                </body>\n                </html>\n            ";
      this.savedAttachments = false;
      this.savedAttachmentsUrl = '';
      this.attachments = [];
      this.record = record;
      this.displayContents();
      this.setGeneralTab();
      this.displayForm();
    },
    displayContents: function displayContents() {
      var _this = this;

      axios.post('/mail/getMessageBody', this.params).then(function (response) {
        if (response.data.error) {
          showError('Email Server Error', response.data.error);
        } else {
          _this.emailLoaded = true;
          setTimeout(function () {
            $('#email-form-message-iframe')[0].srcdoc = response.data.body;
          });
          _this.attachments = response.data.attachments; // this.attachments.forEach(attachment => {
          //     let mimeType = this.$root.mimeTypeHelper(attachment.mimeType);
          //     attachment.fileType = mimeType.type;
          //     attachment.fileTypeDescription = mimeType.description;
          // });

          if (_this.attachments.length) {
            _this.setAttachmentsTab();
          }
        }
      });
    },
    viewAttachment: function viewAttachment(fileName, id) {
      var _this2 = this;

      var encodedFileName = encodeURI(fileName);

      if (!this.savedAttachments) {
        root.$snotify.simple('Fetching attachment', 'Please Wait..', {
          timeout: 0,
          icon: 'img/cogs.gif'
        });
        axios.post('/mail/saveAttachments', this.params).then(function (response) {
          root.$snotify.clear();
          _this2.savedAttachments = true;
          _this2.savedAttachmentsUrl = response.data.url;
          $('#' + _this2.id + '-attachment-icon-' + id).attr('href', response.data.url + '/' + encodedFileName);
          $('#' + _this2.id + '-attachment-icon-' + id)[0].click();
        })["catch"](function (error) {
          root.$snotify.clear();
          showError('Email Server Error', error);
        });
      } else {
        $('#' + this.id + '-attachment-icon-' + id).attr('href', this.savedAttachmentsUrl + '/' + encodedFileName);
        $('#' + this.id + '-attachment-icon-' + id)[0].click();
      }
    },
    uploadAttachments: function uploadAttachments() {
      var _this3 = this;

      var errorFlag = false;
      var timeStamp = new Date().getTime();
      root.$snotify.simple('Uploading attachments', 'Please Wait..', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(resolve, reject) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return root.asyncForEach(_this3.attachments, /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(attachment) {
                      var response;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (errorFlag) {
                                _context.next = 5;
                                break;
                              }

                              _context.next = 3;
                              return axios.post('/file/uploadFile', {
                                localFolder: 'temp',
                                remoteFolder: 'attachments/' + timeStamp,
                                fileName: attachment.fileName
                              })["catch"](function (error) {
                                errorFlag = true;
                                showError('Error Saving Attachments', error);
                              });

                            case 3:
                              response = _context.sent;

                              if (response.data.error) {
                                errorFlag = true;
                                showError('Error Saving Attachments', response.data.error);
                              } else {
                                attachment.path = response.data.path;
                                attachment.url = response.data.url; //console.log('Uploaded ' + attachment.fileName, attachment);
                              }

                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }());

                case 2:
                  root.$snotify.clear();

                  if (errorFlag) {
                    reject();
                  } else {
                    resolve();
                  }

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    saveAttachments: function saveAttachments() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        if (_this4.attachments.length && !_this4.savedAttachments) {
          root.$snotify.simple('Saving attachments', 'Please Wait..', {
            timeout: 0,
            icon: 'img/cogs.gif'
          });
          axios.post('/mail/saveAttachments', _this4.params).then(function (response) {
            _this4.savedAttachments = true;
            _this4.savedAttachmentsUrl = response.data.url;
            root.$snotify.clear();
            resolve();
          })["catch"](function (error) {
            reject();
            root.$snotify.clear();
            showError('Email Server Error', error);
          });
        } else {
          resolve();
        }
      });
    },
    uploadEmailFile: function uploadEmailFile() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        root.$snotify.simple('Saving email message', 'Please Wait..', {
          timeout: 0,
          icon: 'img/cogs.gif'
        });
        var fileName = new Date().getTime() + '.eml';
        axios.post('/mail/uploadEmailMessage', _objectSpread(_objectSpread({}, _this5.params), {}, {
          fileName: fileName
        })).then(function (response) {
          root.$snotify.clear();

          if (response.data.error) {
            showError('Error Upoading Email', response.data.error);
            reject();
          } else {
            resolve({
              url: response.data.url,
              path: response.data.path,
              fileName: fileName
            });
          }
        })["catch"](function (error) {
          root.$snotify.clear();
          showError('Error Upoading Email', error);
          reject();
        });
      });
    },
    addCorrespondence: function addCorrespondence(parentType, id, savedEmail) {
      var _this6 = this;

      var correspondenceRecord = {};
      correspondenceRecord.dateTime = this.record.date;
      correspondenceRecord.matterId = parentType === 'Matter' ? id : null;
      correspondenceRecord.partyId = parentType === 'Party' ? id : null;
      correspondenceRecord.parentType = parentType;
      correspondenceRecord.type = 'Email';
      correspondenceRecord.description = this.record.subject;
      correspondenceRecord.path = savedEmail.path;
      correspondenceRecord.fileName = savedEmail.fileName;
      correspondenceRecord.url = savedEmail.url;
      correspondenceRecord.fileType = 'application/octet-stream';
      axios.post('/correspondence/store', _objectSpread(_objectSpread({}, correspondenceRecord), {}, {
        attachments: JSON.stringify(this.attachments)
      })).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error saving Correspondence', response.data.errors.general[0]);
          } else {
            _this6.errors = response.data.errors;
          }
        } else {
          console.log('Saved Correspondence', correspondenceRecord);
        }
      })["catch"](function (error) {
        showError('Error saving Correspondence from Email', error);
      });
    },
    addToMatter: function addToMatter() {
      this.selectMatter.selectMatter(this);
    },
    addToParty: function addToParty() {
      this.selectParty.selectParty(this);
    },
    customMatterSelected: function customMatterSelected(selectedRecord) {
      var _this7 = this;

      this.uploadEmailFile().then(function (savedEmail) {
        if (_this7.attachments.length) {
          _this7.saveAttachments().then(function () {
            _this7.uploadAttachments().then(function () {
              _this7.addCorrespondence('Matter', selectedRecord.recordid, savedEmail);
            })["catch"](function () {
              console.log('Error Uploading Attachments');
            });
          })["catch"](function () {
            console.log('Error Saving Attachments');
          });
        } else {
          _this7.addCorrespondence('Matter', selectedRecord.recordid, savedEmail);
        }
      })["catch"](function () {
        console.log('Error Saving Email File');
      });
    },
    setAttachmentsTab: function setAttachmentsTab() {
      this.tabs[1].visible = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/email/EmailForm.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/email/EmailForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailForm.vue?vue&type=template&id=e79d6258& */ "./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258&");
/* harmony import */ var _EmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/email/EmailForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailForm_vue_vue_type_template_id_e79d6258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailForm.vue?vue&type=template&id=e79d6258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailForm.vue?vue&type=template&id=e79d6258& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "",
        },
        [
          _c(
            "div",
            {
              class: _vm.modal
                ? "modal-content email-border"
                : "card h-100 border-0",
            },
            [
              _c("div", { class: _vm.modal ? "" : "card-header" }, [
                _c(
                  "div",
                  {
                    class: _vm.modal
                      ? "modal-header email-bg"
                      : "d-flex justify-content-between",
                  },
                  [
                    _c("div", { staticClass: "page-title" }, [
                      _c("h3", [
                        _vm._v(
                          "\r\n                            " +
                            _vm._s(_vm.record.subject) +
                            "\r\n                        "
                        ),
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
                { staticClass: "card-body form-tab-body overflow-auto p-3" },
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
                      staticStyle: {
                        display: "flex",
                        "align-items": "stretch",
                        "flex-flow": "column",
                      },
                      attrs: { id: _vm.id + "-form-tab-content" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            staticClass: "col-md-6",
                            attrs: { readOnly: true, label: "Date" },
                            model: {
                              value: _vm.record.date,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "date", $$v)
                              },
                              expression: "record.date",
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
                            staticClass: "col-md-6",
                            attrs: { readOnly: true, label: "From" },
                            model: {
                              value: _vm.record.from,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "from", $$v)
                              },
                              expression: "record.from",
                            },
                          }),
                          _vm._v(" "),
                          _c("text-input", {
                            staticClass: "col-md-6",
                            attrs: { readOnly: true, label: "To" },
                            model: {
                              value: _vm.record.to,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "to", $$v)
                              },
                              expression: "record.to",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.record.cc
                        ? _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                staticClass: "col-md-12",
                                attrs: { readOnly: true, label: "CC" },
                                model: {
                                  value: _vm.record.cc,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "cc", $$v)
                                  },
                                  expression: "record.cc",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(0),
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
                          value: _vm.activeTab === "Attachments",
                          expression: "activeTab === 'Attachments'",
                        },
                      ],
                      staticClass: "form-tab-content",
                      staticStyle: { background: "white" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex" },
                        _vm._l(_vm.attachments, function (attachment) {
                          return _c(
                            "div",
                            {
                              key: attachment.id,
                              staticClass: "program-icon",
                              on: {
                                click: function ($event) {
                                  return _vm.viewAttachment(
                                    attachment.fileName,
                                    attachment.id
                                  )
                                },
                              },
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src:
                                    "/icons/file-types/" +
                                    attachment.imageFileName,
                                  alt: attachment.imageFileName,
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "program-icon-text" }, [
                                _vm._v(_vm._s(attachment.fileName)),
                              ]),
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-none" },
                        _vm._l(_vm.attachments, function (attachment) {
                          return _c("div", { key: attachment.id }, [
                            _c("a", {
                              attrs: {
                                id:
                                  _vm.id + "-attachment-icon-" + attachment.id,
                                href: "",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            }),
                          ])
                        }),
                        0
                      ),
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
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.emailLoaded,
                            expression: "emailLoaded",
                          },
                        ],
                        staticClass: "dropdown",
                        attrs: {
                          title:
                            "Add this message to a Matter, Party or Employee's Correspondence",
                        },
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-menu" }, [
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-item cp",
                              on: { click: _vm.addToMatter },
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-briefcase fa-lg mr-2",
                              }),
                              _vm._v("Add to a Matter"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-item cp",
                              on: { click: _vm.addToParty },
                            },
                            [
                              _c("i", { staticClass: "fa fa-user fa-lg mr-2" }),
                              _vm._v("Add to a Party"),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row boxed",
        staticStyle: {
          flex: "1 1 auto",
          background: "white",
          "margin-right": "0px",
          "margin-left": "0px",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "col-md-12",
            staticStyle: { "padding-left": "0", "padding-right": "0" },
          },
          [
            _c("iframe", {
              staticClass: "iframe-container",
              attrs: { id: "email-form-message-iframe" },
            }),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary form-button dropdown-toggle",
        attrs: {
          type: "button",
          id: "dropdownMenuButton",
          "data-toggle": "dropdown",
        },
      },
      [
        _c("i", { staticClass: "fa fa-plus-square fa-lg mr-2" }),
        _vm._v(
          "\r\n                            Correspondence\r\n                        "
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);
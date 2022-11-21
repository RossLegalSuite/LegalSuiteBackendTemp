"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-documents-DocumentsForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    resource: {
      type: String,
      "default": 'Documents'
    }
  },
  data: function data() {
    return {
      documentPath: null,
      document: null
    };
  },
  mounted: function mounted() {
    root.documentsRightForm = this;
  },
  watch: {
    documentPath: function documentPath(newValue) {
      var _this = this;

      $('#' + this._uid + '-preview-document-pdf-iframe')[0].src = '';

      if (newValue) {
        setTimeout(function () {
          $('#' + _this._uid + '-preview-document-pdf-iframe')[0].src = newValue;
        });
      }
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this2 = this;

      axios.post('/doclog/get/' + id).then(function (response) {
        _this2.document = response.data.data[0];

        _this2.displayForm();

        _this2.documentPath = _this2.document.url;
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    downloadDocument: function downloadDocument() {
      root.downloadObject(this.document.url);
    },
    emailDocument: function emailDocument(title, subject) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var emailModal, template;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                emailModal = _this3.$root.emailModal;
                emailModal.initialize();
                emailModal.toAddress = _this3.document.partyemailaddress;

                if (!title) {
                  emailModal.title = 'Email ' + _this3.document.description;
                } else {
                  emailModal.title = title;
                }

                if (!subject) {
                  emailModal.subject = _this3.document.description;
                } else {
                  emailModal.subject = subject;
                }

                emailModal.defaultAttachmentUploaded = true;
                emailModal.emailAttachments.table.defaultAttachmentUploaded = true;
                emailModal.emailAttachments.table.addAttachment(_this3.document.description, _this3.document.url);
                _context.next = 11;
                return axios.post('/lolsystemtemplate/get/' + root.lolSettings.documentemailtemplateid);

              case 11:
                template = _context.sent;

                if (template.data.errors) {
                  showError('Error', template.data.errors);
                } else {
                  emailModal.templateRecord = template.data.data[0];
                  emailModal.templateContents = template.data.data[0].contents;
                  emailModal.source = template.data.data[0].source;
                  emailModal.show();
                  emailModal.templateData = root.initTemplateData();
                  emailModal.templateData.documents = [];
                  emailModal.templateData.documents.push(_this3.document);
                  emailModal.generateEmailBody();
                }

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                showError('Error loading Email in Documents Form', _context.t0);

              case 18:
                ;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }))();
    },
    printDocument: function printDocument() {
      var _this4 = this;

      // Need to get a local copy of the blob - otherwise browser blocks javascript from accessing iFrame content from another site.
      fetch(this.document.url, {
        method: 'GET'
      }).then(function (resp) {
        return resp.blob();
      }).then(function (blob) {
        var objectURL = URL.createObjectURL(blob);
        $('#' + _this4._uid + '-preview-document-print-iframe')[0].src = '';
        $('#' + _this4._uid + '-preview-document-print-iframe')[0].src = objectURL;
        objectURL = URL.revokeObjectURL(blob);
      }).then(function () {
        window.setTimeout(function () {
          $('#' + _this4._uid + '-preview-document-print-iframe')[0].contentWindow.print();
        }, 100);
      });
    },
    pageTitle: function pageTitle() {
      var _this$document, _this$document2, _this$document3;

      var parent = ((_this$document = this.document) === null || _this$document === void 0 ? void 0 : _this$document.matterfileref) || ((_this$document2 = this.document) === null || _this$document2 === void 0 ? void 0 : _this$document2.partymatterprefix);

      if ((_this$document3 = this.document) !== null && _this$document3 !== void 0 && _this$document3.description) {
        return parent ? parent + ' - ' + this.document.description : this.document.description;
      } else {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsForm.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentsForm.vue?vue&type=template&id=3e65d48c& */ "./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c&");
/* harmony import */ var _DocumentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentsForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/documents/DocumentsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsForm_vue_vue_type_template_id_3e65d48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsForm.vue?vue&type=template&id=3e65d48c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsForm.vue?vue&type=template&id=3e65d48c& ***!
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content documents-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header documents-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", {
                      domProps: { textContent: _vm._s(_vm.pageTitle()) },
                    }),
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
                staticClass: "modal-body p-0",
                staticStyle: { overflow: "unset" },
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: { "min-height": "200px" },
                    attrs: { id: _vm.id + "-pdf-container" },
                  },
                  [
                    _c("iframe", {
                      staticClass: "iframe-container",
                      attrs: { id: _vm._uid + "-preview-document-pdf-iframe" },
                    }),
                    _vm._v(" "),
                    _c("iframe", {
                      staticClass: "iframe-container d-none",
                      attrs: {
                        id: _vm._uid + "-preview-document-print-iframe",
                      },
                    }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _c("div", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success form-button mr-3",
                      attrs: { type: "button", title: "Print the document" },
                      on: { click: _vm.printDocument },
                    },
                    [
                      _c("i", { staticClass: "fa fa-print fa-lg mr-2" }),
                      _vm._v("Print"),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger form-button mr-3",
                      attrs: { type: "button", title: "Send via email" },
                      on: {
                        click: function ($event) {
                          return _vm.emailDocument(null, null)
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "fa fa-envelope-o fa-lg mr-2" }),
                      _vm._v("Email"),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary form-button mr-3",
                      attrs: { type: "button", title: "Download the document" },
                      on: { click: _vm.downloadDocument },
                    },
                    [
                      _c("i", { staticClass: "fa fa-download fa-lg mr-2" }),
                      _vm._v("Download"),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
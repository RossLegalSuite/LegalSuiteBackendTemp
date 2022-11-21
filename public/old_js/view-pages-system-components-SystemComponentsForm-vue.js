"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-system-components-SystemComponentsForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      "default": 'Component'
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.previewingContent = false;
      this.showContentPreviewFlag = false;
      this.savedFlag = false;
      this.selectedParty = this.selectedMatter = null;
      this.record.source = null; // To fire the watch to call createPreviewTemplateData() after getting the record

      axios.post('/lolcomponent/get/' + id).then(function (response) {
        _this.record = response.data.data[0];
        _this.editing = true;

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

      this.previewingContent = false;
      this.showContentPreviewFlag = false;
      this.savedFlag = false;
      this.selectedParty = this.selectedMatter = null;
      this.record.source = null; // To fire the watch to call createPreviewTemplateData() after getting the record

      this.record = {
        title: null,
        description: null,
        source: 'Company',
        contents: ''
      };
      this.editing = false;
      this.displayForm();
      this.initFormData();
      setTimeout(function () {
        $('#' + _this2.id + ' input[name="title"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this3 = this;

      this.errors = {};
      this.contentPreviewerContents = $('#' + this.id + '-content-previewer-contents');

      if (!this.availableSpace) {
        root.getAvailableSpace('#' + this.id + '-top-of-form-marker', '#' + this.id + ' .modal-footer', 75).then(function (availableSpace) {
          _this3.availableSpace = availableSpace;

          _this3.contentPreviewerContents.height(_this3.availableSpace - 10);

          _this3.loadContentEditor();
        })["catch"](function (error) {
          showError('Error', error);
        });
      } else {
        this.loadContentEditor();
        this.contentPreviewerContents.height(this.availableSpace - 10);
      }
    },
    copyClicked: function copyClicked() {
      var _this4 = this;

      this.saveComponent(false).then(function () {
        axios.post('/lolcomponent/copy', _this4.record).then(function (response) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            root.$snotify.simple('The Component was copied successfully', 'Success', {
              icon: 'img/check.png'
            });

            _this4.highlightRow(response.data.data[0].recordid, {
              where: "title,<,'" + response.data.data[0].title + "'",
              orderBy: 'title'
            });
          }
        });
      })["catch"](function (error) {
        showError('Error saving Component', error);
      });
    },
    updateContents: function updateContents() {
      this.record.contents = this.contentEditor.summernote('code');
    },
    saveComponent: function saveComponent() {
      var _this5 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve, reject) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  root.$snotify.simple('Please wait...', 'Saving Component', {
                    timeout: 0,
                    icon: 'img/cogs.gif'
                  });

                  _this5.updateContents();

                  _context.next = 5;
                  return axios.post('/lolcomponent/' + (_this5.savedFlag ? 'update' : 'store'), _this5.record);

                case 5:
                  response = _context.sent;
                  root.$snotify.clear();

                  if (response.data.errors) {
                    reject(response.data.errors);
                  } else {
                    _this5.errors = {};
                    _this5.record.recordid = response.data.data[0].recordid;

                    if (!_this5.editing && !_this5.savedFlag) {
                      _this5.highlightRow(response.data.data[0].recordid, {
                        where: "title,<,'" + response.data.data[0].title + "'",
                        orderBy: 'title'
                      });
                    } else {
                      _this5.table.refreshRow(response.data.data[0].recordid);
                    }

                    if (closeFlag) {
                      _this5.closeForm();
                    } else {
                      _this5.savedFlag = true;
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
      this.saveComponent(closeFlag)["catch"](function (error) {
        showError('Error saving Component', error);
      });
    },
    pageTitle: function pageTitle() {
      return this.record.title;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/system-components/SystemComponentsForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/system-components/SystemComponentsForm.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemComponentsForm.vue?vue&type=template&id=c586f0e6& */ "./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6&");
/* harmony import */ var _SystemComponentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemComponentsForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemComponentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/system-components/SystemComponentsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemComponentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemComponentsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemComponentsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemComponentsForm_vue_vue_type_template_id_c586f0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemComponentsForm.vue?vue&type=template&id=c586f0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SystemComponentsForm.vue?vue&type=template&id=c586f0e6& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                          ? _c("span", [_vm._v("Component will be Added")])
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
                  staticClass: "modal-body p-3",
                  style: _vm.modal
                    ? "height:75vh; overflow: unset"
                    : "overflow: unset",
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("text-input", {
                        attrs: {
                          _class: "col-md-4",
                          name: "title",
                          label: "Title",
                          error: _vm.errors.title,
                        },
                        model: {
                          value: _vm.record.title,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "title", $$v)
                          },
                          expression: "record.title",
                        },
                      }),
                      _vm._v(" "),
                      _c("text-input", {
                        attrs: {
                          _class: "col-md-5",
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
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-3" },
                        [
                          _c("label", [_vm._v("Data Source")]),
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { attrs: { id: _vm.id + "-content-tab" } }, [
                    _c("div", {
                      attrs: { id: _vm.id + "-top-of-form-marker" },
                    }),
                    _vm._v(" "),
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
                              { staticClass: "note-btn-group btn-group ml-2" },
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
                          attrs: { id: _vm.id + "-content-previewer-contents" },
                        }),
                      ]
                    ),
                  ]),
                ]
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
                            value: _vm.editing,
                            expression: "editing",
                          },
                        ],
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger form-button mr-2",
                            attrs: {
                              type: "button",
                              title: "Delete this Component",
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
                              title: "Make a copy of this Component",
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
                          title: "Save the Component and continue editing",
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
                          title: "Save the Component and close the Window",
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
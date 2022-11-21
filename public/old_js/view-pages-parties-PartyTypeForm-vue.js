"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-parties-PartyTypeForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    resource: {
      type: String,
      "default": 'Party Types'
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/party_types/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.initFormData();
      });
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      this.record = {
        description: null,
        type: 'J',
        code: null
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this3 = this;

      this.displayForm();
      setTimeout(function () {
        return $('#' + _this3.id + ' input[name="description"]').focus();
      });
    },
    okClicked: function okClicked() {
      var _this4 = this;

      axios.post('/party_types/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this4.errors = response.data.errors;
          }
        } else {
          _this4.errors = {};

          _this4.highlightTableRow(response.data.id, response.data.code);
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this4.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, code) {
      var _this5 = this;

      axios.post('/party_types/getTablePosition', {
        code: code
      }).then(function (response) {
        _this5.table.jumpToRow(id, response.data);

        _this5.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/parties/PartyTypeForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/parties/PartyTypeForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartyTypeForm.vue?vue&type=template&id=12ab2920& */ "./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920&");
/* harmony import */ var _PartyTypeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartyTypeForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartyTypeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__.render,
  _PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parties/PartyTypeForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTypeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyTypeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTypeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTypeForm_vue_vue_type_template_id_12ab2920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyTypeForm.vue?vue&type=template&id=12ab2920& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTypeForm.vue?vue&type=template&id=12ab2920& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-md" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content steelblue-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header steelblue"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      (_vm.record.readOnly ? true : false)
                        ? _c("span", [
                            _vm._v(
                              _vm._s(_vm.record.description) + " [View Only]"
                            ),
                          ])
                        : !_vm.editing
                        ? _c("span", [_vm._v("Party Type will be Added")])
                        : _vm.viewing
                        ? _c("span", [_vm._v("Party Type")])
                        : _c("span", [_vm._v("Party Type will be Changed")]),
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
            _c("div", { staticClass: "card-body overflow-auto p-3" }, [
              _c(
                "div",
                { staticClass: "form-group row" },
                [
                  _vm.editing
                    ? _c("text-input", {
                        attrs: {
                          _class: "col-md-4",
                          popOver:
                            "<h4>Code</h4>\r\n                    <p>The code is used to uniquely identify this Party Type.</p>\r\n                    <p>This can be used in Document Assembly, for example, to construct sections of a Document for different Parties.</p>",
                          popOverContainer: "#" + _vm.id,
                          name: "code",
                          label: "Code",
                          error: _vm.errors.code,
                        },
                        model: {
                          value: _vm.record.code,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "code", $$v)
                          },
                          expression: "record.code",
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("radio-buttons", {
                    attrs: {
                      _class: "col-md-8",
                      popOver:
                        "<h4>Type</h4><p>This is used to indicate the indicate the legal status of a Party.</p>\r\n                    <p>Juristic persons are corporate or institutional organizations like companies or trusts while natural persons are male or female adults or minors.</p>",
                      popOverContainer: "#" + _vm.id,
                      record: _vm.record,
                      column: "type",
                      buttons: [
                        {
                          value: "N",
                          text: "Person",
                          title: "The Type is a Natural Person",
                        },
                        {
                          value: "J",
                          text: "Jursistic",
                          title: "The Type is a Juristic Person",
                        },
                      ],
                      name: "type",
                      label: "Type",
                      error: _vm.errors.type,
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
            ]),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                editing: _vm.editing,
                viewing: _vm.viewing,
                record: "Party Type",
              },
              on: {
                "ok-clicked": _vm.okClicked,
                "cancel-clicked": _vm.closeForm,
                "delete-clicked": _vm.deleteClicked,
              },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
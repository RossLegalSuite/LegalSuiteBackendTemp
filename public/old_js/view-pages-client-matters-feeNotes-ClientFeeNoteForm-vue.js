"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matters-feeNotes-ClientFeeNoteForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"], _pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    resource: {
      type: String,
      "default": 'Fee Notes'
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/feenote/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.displayForm();
      })["catch"](function (error) {
        showError('Error', error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65& */ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65&");
/* harmony import */ var _ClientFeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientFeeNoteForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientFeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientFeeNoteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteForm_vue_vue_type_template_id_01ab7b65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteForm.vue?vue&type=template&id=01ab7b65& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content feenotes-border"
              : "card h-100 border-0",
            attrs: { id: _vm.id + "-form-border" },
          },
          [
            _c(
              "div",
              {
                class: _vm.modal ? "feenotes-bg" : "card-header",
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
                      _vm._m(0),
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
              {
                staticClass: "card-body overflow-auto p-3",
                style: _vm.modal ? "height:40vh" : "",
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("label", [_vm._v("Date/Time")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-control w-100" }, [
                      _vm._v(_vm._s(_vm.record.formatteddatetime)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-area", {
                      attrs: {
                        _class: "col-md-12",
                        readOnly: true,
                        rows: "6",
                        cols: "50",
                        label: "Fee Note",
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
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div"),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger form-button",
                    attrs: { type: "button", title: "Close this Screen" },
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("span", [_vm._v("Fee Note")])])
  },
]
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-parties-PartyEntityForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    resource: {
      type: String,
      "default": 'Party Entities'
    }
  },
  mounted: function mounted() {
    var _this = this;

    var elem = $('#' + this.id + ' input[name="backgroundColor"]')[0];
    this.backgroundColorPicker = new Huebee(elem);
    this.backgroundColorPicker.on('change', function (color, hue, sat, lum) {
      _this.record.backgroundColor = color;
      _this.record.textColor = $('#' + _this.id + ' input[name="backgroundColor"]').css('color') === 'rgb(34, 34, 34)' ? '#222' : '#FFF';
    });
  },
  data: function data() {
    return {
      descriptionInput: null,
      backgroundColorPicker: null
    };
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this2 = this;

      axios.post('/party_entities/get', {
        recordid: id
      }).then(function (response) {
        _this2.record = response.data.data[0];

        _this2.initFormData();
      });
    },
    initNewRecord: function initNewRecord() {
      var _this3 = this;

      this.record = {
        description: null,
        type: 'J',
        textColor: '#000',
        backgroundColor: '#FFF',
        code: null
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this3.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      var _this4 = this;

      this.displayForm();
      this.descriptionInput = $('#' + this.id + ' input[name="description"]');
      setTimeout(function () {
        return _this4.descriptionInput.focus();
      });
    },
    okClicked: function okClicked() {
      var _this5 = this;

      axios.post('/party_entities/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this5.errors = response.data.errors;
          }
        } else {
          _this5.errors = {};

          _this5.highlightTableRow(response.data.id, response.data.code);
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this5.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, code) {
      var _this6 = this;

      axios.post('/party_entities/getTablePosition', {
        code: code
      }).then(function (response) {
        _this6.table.jumpToRow(id, response.data);

        _this6.closeForm();
      });
    },
    copyBackgroundColor: function copyBackgroundColor() {
      console.log('copyBackgroundColor');
    },
    pasteBackgroundColor: function pasteBackgroundColor() {
      console.log('pasteBackgroundColor');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/parties/PartyEntityForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/parties/PartyEntityForm.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartyEntityForm.vue?vue&type=template&id=84be5b6e& */ "./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e&");
/* harmony import */ var _PartyEntityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartyEntityForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartyEntityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parties/PartyEntityForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyEntityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyEntityForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyEntityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyEntityForm_vue_vue_type_template_id_84be5b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyEntityForm.vue?vue&type=template&id=84be5b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyEntityForm.vue?vue&type=template&id=84be5b6e& ***!
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
                        ? _c("span", [_vm._v("Party Entity will be Added")])
                        : _vm.viewing
                        ? _c("span", [_vm._v("Party Entity")])
                        : _c("span", [_vm._v("Party Entity will be Changed")]),
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
                staticClass: "card-body overflow-auto p-3",
                staticStyle: { "min-height": "40vh" },
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _vm.editing
                      ? _c("text-input", {
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Code</h4>\r\n                    <p>The code is used to uniquely identify this Entity.</p>\r\n                    <p>This can be used in Document Assembly, for example, to construct sections of a Document for different Parties.</p>",
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
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-4",
                        popOver:
                          "<h4>Party Color</h4>\r\n                        <p>You can set a <em>color</em> for an Entity.</p>\r\n                        <p>Parties will then be displayed in this color which makes it easy to identify Parties of different Entity Types.</p>",
                        popOverContainer: "#" + _vm.id,
                        name: "backgroundColor",
                        label: "Background Color",
                        error: _vm.errors.backgroundColor,
                      },
                      model: {
                        value: _vm.record.backgroundColor,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "backgroundColor", $$v)
                        },
                        expression: "record.backgroundColor",
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
                    _c("radio-buttons", {
                      attrs: {
                        _class: "col-md-12",
                        popOver:
                          "<h4>Type</h4><p>The Entity Type is used to indicate the legal status of a Party.</p>\r\n                    <p>Juristic persons are corporate or institutional organizations like companies or trusts while natural persons are male or female adults or minors.</p>",
                        popOverContainer: "#" + _vm.id,
                        record: _vm.record,
                        column: "type",
                        buttons: [
                          {
                            value: "N",
                            text: "Person",
                            title: "The Entity is a Natural Person",
                          },
                          {
                            value: "J",
                            text: "Jursistic",
                            title: "The Entity is a Juristic Person",
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
              ]
            ),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                editing: _vm.editing,
                viewing: _vm.viewing,
                record: "Party Entity",
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
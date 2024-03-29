"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-SelectBranch-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    BranchTable: function BranchTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-BranchTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BranchTable */ "./resources/js/pages/matters/BranchTable.vue"));
    },
    SelectBranchDropdown: (vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    clearIconCallback: {
      type: String,
      "default": 'clearSelectBranch'
    },
    clearIcon: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Click on the button to select a Branch'
    },
    _class: {
      type: String,
      "default": 'col-md-12'
    },
    label: {
      type: String,
      "default": 'Branch'
    },
    singular: {
      type: String,
      "default": 'Branch'
    },
    plural: {
      type: String,
      "default": 'Branches'
    },
    formRef: String,
    formControls: {
      type: Boolean,
      "default": true
    },
    readOnly: {
      type: Boolean,
      "default": false
    },
    checkBox: {
      type: Boolean,
      "default": false
    },
    popOver: {
      type: String,
      "default": ''
    },
    popOverContainer: {
      type: String,
      "default": ''
    },
    error: {
      type: Array,
      "default": function _default() {
        return [null];
      }
    }
  },
  data: function data() {
    return {
      table: null,
      record: null,
      disabled: false,
      preventSelectionFlag: false,
      preventSelectionMessage: 'You cannot change the Branch',
      branchFlag: null
    };
  },
  mounted: function mounted() {
    this.$parent.selectBranch = this;
  },
  methods: {
    branchFlagChanged: function branchFlagChanged(value) {
      if (typeof this.$parent.branchFlagChanged === 'function') {
        this.$parent.branchFlagChanged(value);
      } else {
        if (value === '0') {
          this.record = {
            id: null,
            description: null
          };
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      }
    },
    clearIconClicked: function clearIconClicked() {
      if (typeof this.$parent[this.clearIconCallback] === 'function') this.$parent[this.clearIconCallback]();
    },
    selectBranch: function selectBranch() {
      if (this.preventSelectionFlag) {
        showError('Access Denied', this.preventSelectionMessage);
        return;
      } else if (this.disabled) {
        showError('Access Denied', this.preventSelectionMessage + ' - it is disabled');
        return;
      }

      this.show();
      this.table.selectTableFlag = true;
      this.table.actionColumnWidth = 12;
      if (!this.table.table) setTimeout(this.table.loadDataTable);
    },
    branchSelected: function branchSelected(selectedRecord) {
      this.record = {
        recordid: selectedRecord.recordid,
        description: selectedRecord.description
      };
      if (typeof this.$parent.branchSelected === 'function') this.$parent.branchSelected(selectedRecord);
      this.hide();
    },
    selectRecord: function selectRecord(id) {
      this.branchSelected(this.table.table.row('#' + id).data());
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matters/SelectBranch.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/matters/SelectBranch.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectBranch.vue?vue&type=template&id=780e7a64& */ "./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64&");
/* harmony import */ var _SelectBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectBranch.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/SelectBranch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectBranch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBranch_vue_vue_type_template_id_780e7a64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectBranch.vue?vue&type=template&id=780e7a64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectBranch.vue?vue&type=template&id=780e7a64& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.formControls ? _vm._class : "" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.formControls,
            expression: "formControls",
          },
        ],
      },
      [
        _c(
          "label",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.checkBox,
                expression: "!checkBox",
              },
            ],
          },
          [_vm._v(_vm._s(_vm.label))]
        ),
        _vm._v(" "),
        _c(
          "b-form-checkbox",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.checkBox,
                expression: "checkBox",
              },
            ],
            attrs: {
              id: _vm.id + "-branch-flag",
              name: "branchflag",
              value: "1",
              "unchecked-value": "0",
              switch: "",
              size: "lg",
            },
            on: { change: _vm.branchFlagChanged },
            model: {
              value: _vm.branchFlag,
              callback: function ($$v) {
                _vm.branchFlag = $$v
              },
              expression: "branchFlag",
            },
          },
          [
            _vm._v(
              "\r\n            \r\n            " +
                _vm._s(_vm.label) +
                "\r\n            "
            ),
            _vm.popOver
              ? _c(
                  "span",
                  [
                    _c("pop-over", {
                      attrs: {
                        content: _vm.popOver,
                        container: _vm.popOverContainer
                          ? _vm.popOverContainer
                          : _vm.$parent.modal
                          ? "#" + _vm.$parent.id
                          : "body",
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ]
        ),
        _vm._v(" "),
        _vm.popOver && !_vm.checkBox
          ? _c(
              "span",
              [
                _c("pop-over", {
                  attrs: {
                    content: _vm.popOver,
                    container: _vm.popOverContainer
                      ? _vm.popOverContainer
                      : _vm.$parent.modal
                      ? "#" + _vm.$parent.id
                      : "body",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.clearIcon
          ? _c("span", [
              _c("i", {
                staticClass:
                  "fa fa-times-circle cp text-danger ml-1 clear-icon",
                staticStyle: { "font-size": "large" },
                attrs: { title: "Clear" },
                on: { click: _vm.clearIconClicked },
              }),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _c(
              "select-branch-dropdown",
              {
                class: _vm.error[0] ? "multiselect-invalid-feedback" : "",
                attrs: {
                  id: _vm.id + "-select-branch-dropdown",
                  openDirection: "below",
                  placeholder: "",
                  options: _vm.$root.branches,
                  "track-by": "recordid",
                  tabindex: -1,
                  label: "description",
                  disabled: _vm.readOnly || _vm.disabled,
                  "allow-empty": false,
                  "show-labels": false,
                },
                on: { input: _vm.branchSelected },
                scopedSlots: _vm._u([
                  {
                    key: "option",
                    fn: function (props) {
                      return [
                        _c("div", [
                          _c("span", [
                            _vm._v(_vm._s(props.option.description)),
                          ]),
                        ]),
                      ]
                    },
                  },
                ]),
                model: {
                  value: _vm.record,
                  callback: function ($$v) {
                    _vm.record = $$v
                  },
                  expression: "record",
                },
              },
              [
                _c("template", { slot: "noResult" }, [
                  _vm._v("No Branches found"),
                ]),
                _vm._v(" "),
                _c("template", { slot: "noOptions" }, [
                  _vm._v("No Branches found..."),
                ]),
              ],
              2
            ),
            _vm._v(" "),
            !_vm.readOnly
              ? _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      class: _vm.error[0]
                        ? "btn btn-danger multiselect-invalid-feedback"
                        : "btn btn-primary",
                      attrs: {
                        tabindex: "-1",
                        type: "button",
                        title: "Select a " + _vm.singular,
                      },
                      on: { click: _vm.selectBranch },
                    },
                    [_c("i", { staticClass: "fa fa-cog" })]
                  ),
                ])
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "invalid-feedback",
          domProps: { innerHTML: _vm._s(_vm.error[0]) },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
      _c("div", { staticClass: "modal-dialog modal-dialog-left" }, [
        _c(
          "div",
          {
            staticClass: "modal-content",
            staticStyle: { "border-color": "indianred" },
          },
          [
            _c("div", { staticClass: "modal-header indianred" }, [
              _c("h2", { staticClass: "modal-title page-title" }, [
                _c("i", { staticClass: "fa fa-server mr-2" }),
                _vm._v("Select a " + _vm._s(_vm.singular)),
              ]),
              _vm._v(" "),
              _c("i", {
                staticClass: "cp top-right fa fa-times-circle fa-2x text-white",
                attrs: { title: "Close this window", "data-dismiss": "modal" },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body p-3",
                staticStyle: { height: "60vh", "overflow-y": "auto" },
              },
              [
                _c("branch-table", {
                  ref: "select-branch-table",
                  attrs: {
                    "options-button": false,
                    "table-id": _vm.id + "-table",
                    lazyLoadFlag: true,
                    formRef: _vm.formRef,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer " }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger form-button",
                  attrs: { type: "button", title: "Cancel selection" },
                  on: { click: _vm.hide },
                },
                [
                  _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                  _vm._v("Cancel"),
                ]
              ),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
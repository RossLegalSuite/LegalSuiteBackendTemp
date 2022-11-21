"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matter-template-SelectMatterParty-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MatterPartiesTable: function MatterPartiesTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matter-template-MatterPartiesTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MatterPartiesTable */ "./resources/js/pages/client/matter-template/MatterPartiesTable.vue"));
    }
  },
  props: {
    matterId: {
      type: String,
      "default": ''
    },
    clearIconCallback: {
      type: String,
      "default": 'clearSelectParty'
    },
    clearIcon: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Click on the button to select a Party and a Matter.'
    },
    callback: {
      type: String,
      "default": 'matterPartySelected'
    },
    parentName: {
      type: String,
      "default": 'selectMatterParty'
    },
    _class: {
      type: String,
      "default": 'col-md-6'
    },
    label: {
      type: String,
      "default": 'Select a Matter Party'
    },
    singular: {
      type: String,
      "default": 'Matter Party'
    },
    plural: {
      type: String,
      "default": 'Matter Parties'
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
    tableOnly: {
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
      partyName: '',
      disabled: null,
      customCallBack: null
    };
  },
  mounted: function mounted() {
    this.$parent[this.parentName] = this;
  },
  methods: {
    clearIconClicked: function clearIconClicked() {
      if (typeof this.$parent[this.clearIconCallback] === 'function') this.$parent[this.clearIconCallback]();
    },
    selectMatParty: function selectMatParty() {
      var customCallBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.customCallBack = customCallBack;
      this.show();
      this.table.selectTableFlag = true;
      this.table.actionColumnWidth = 12;

      if (this.matterId) {
        this.table.whereRaw = "MatterId = " + this.matterId;
      }

      this.table.loadDataTable();
    },
    matPartySelected: function matPartySelected(selectedRecord) {
      //this.partyName = htmlDecode(selectedRecord.name + ' / ' + selectedRecord.matterdescription );
      this.partyName = htmlDecode(selectedRecord.matterprefix + ' (' + selectedRecord.fileref + ')');

      if (this.customCallBack && typeof this.$parent[this.customCallBack] === 'function') {
        this.$parent[this.customCallBack](selectedRecord);
      } else if (typeof this.$parent[this.callback] === 'function') {
        this.$parent[this.callback](selectedRecord);
      }
    },
    selectRecord: function selectRecord(id) {
      console.log("id", id);
      console.log("this.table.table.row('#' + id).data()", this.table.table.row('#' + id).data());
      this.matPartySelected(this.table.table.row('#' + id).data());
      this.hide();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matter-template/SelectMatterParty.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/SelectMatterParty.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectMatterParty.vue?vue&type=template&id=683b6d76& */ "./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76&");
/* harmony import */ var _SelectMatterParty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectMatterParty.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectMatterParty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matter-template/SelectMatterParty.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterParty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatterParty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterParty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterParty_vue_vue_type_template_id_683b6d76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatterParty.vue?vue&type=template&id=683b6d76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matter-template/SelectMatterParty.vue?vue&type=template&id=683b6d76& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
        _c("label", [_vm._v(_vm._s(_vm.label))]),
        _vm._v(" "),
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
        _vm._v(" "),
        _vm.clearIcon
          ? _c("span", [
              _c("i", {
                staticClass:
                  "fa fa-times-circle cp text-danger ml-1 clear-icon",
                staticStyle: { "font-size": "large" },
                attrs: { title: "Clear this selection" },
                on: { click: _vm.clearIconClicked },
              }),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { readonly: "" },
            domProps: { value: _vm.partyName },
          }),
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
                      title: "Select a Party and a Matter",
                    },
                    on: { click: _vm.selectMatParty },
                  },
                  [_c("i", { staticClass: "fa fa-cog" })]
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "invalid-feedback",
          domProps: { innerHTML: _vm._s(_vm.error[0]) },
        }),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
      _c("div", { staticClass: "modal-dialog modal-dialog-left modal-lg" }, [
        _c(
          "div",
          {
            staticClass: "modal-content",
            staticStyle: { "border-color": "indianred" },
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body p-3",
                staticStyle: { height: "70vh", "overflow-y": "auto" },
              },
              [
                _c("matter-parties-table", {
                  ref: _vm.id + "-select-mat-party-table",
                  attrs: {
                    "table-id": _vm.id + "-table",
                    lazyLoadFlag: true,
                    "form-ref": _vm.formRef,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [_c("modal-table-filter-footer")], 1),
              _vm._v(" "),
              _c("div", [
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
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header indianred" }, [
      _c("h2", { staticClass: "modal-title page-title" }, [
        _c("i", { staticClass: "fa fa-server mr-2" }),
        _vm._v("Select a Party and a Matter"),
      ]),
      _vm._v(" "),
      _c("i", {
        staticClass: "cp top-right fa fa-times-circle fa-2x text-white",
        attrs: { title: "Close this window", "data-dismiss": "modal" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
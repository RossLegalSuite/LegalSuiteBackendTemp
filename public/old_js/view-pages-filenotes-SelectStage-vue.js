"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-filenotes-SelectStage-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    StageTable: function StageTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-filenotes-StageTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./StageTable */ "./resources/js/pages/filenotes/StageTable.vue"));
    },
    SelectStageDropdown: (vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    clearIconCallback: {
      type: String,
      "default": 'clearSelectStage'
    },
    clearIcon: {
      type: Boolean,
      "default": false
    },
    callback: {
      type: String,
      "default": 'stageSelected'
    },
    parentName: {
      type: String,
      "default": 'selectStage'
    },
    title: {
      type: String,
      "default": 'Click on the button to select an Stage'
    },
    _class: {
      type: String,
      "default": 'col-md-12'
    },
    label: {
      type: String,
      "default": 'Stage'
    },
    popOver: {
      type: String,
      "default": ''
    },
    popOverContainer: {
      type: String,
      "default": ''
    },
    singular: {
      type: String,
      "default": 'Stage'
    },
    plural: {
      type: String,
      "default": 'Stages'
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
      record: {
        recordid: null,
        description: null
      },
      disabled: null,
      stageGroupId: null
    };
  },
  watch: {
    stageGroupId: function stageGroupId(newValue) {
      //console.log("Watching stageGroupId - newValue",newValue);
      this.stageGroupId = newValue;
      this.getStages();
    }
  },
  mounted: function mounted() {
    this.$parent[this.parentName] = this;
  },
  methods: {
    getStages: function getStages() {
      var _this = this;

      if (!this.stageGroupId) {
        return [];
      } else {
        return root.stages.filter(function (record) {
          return record.stagegroupid == _this.stageGroupId;
        });
      }
    },
    clearIconClicked: function clearIconClicked() {
      if (typeof this.$parent[this.clearIconCallback] === 'function') this.$parent[this.clearIconCallback]();
    },
    selectStage: function selectStage() {
      this.show();
      this.table.selectTableFlag = true;
      this.table.actionColumnWidth = 12; // Being watched - it loads the DataTable

      this.table.stageGroupId = this.stageGroupId; //if ( !this.table.table ) setTimeout( this.table.loadDataTable );
    },
    stageSelected: function stageSelected(selectedRecord) {
      this.record = {
        recordid: selectedRecord.recordid,
        description: selectedRecord.code + ' - ' + selectedRecord.description
      }; // Override default one set in form-template.js

      if (typeof this.$parent.customStageSelected === 'function') {
        this.$parent.customStageSelected(selectedRecord);
      } else if (typeof this.$parent[this.callback] === 'function') {
        this.$parent[this.callback](selectedRecord);
      }
    },
    selectRecord: function selectRecord(id) {
      this.stageSelected(this.table.table.row('#' + id).data());
      this.hide();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/filenotes/SelectStage.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/filenotes/SelectStage.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectStage.vue?vue&type=template&id=463bb55f& */ "./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f&");
/* harmony import */ var _SelectStage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectStage.vue?vue&type=script&lang=js& */ "./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectStage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/filenotes/SelectStage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectStage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectStage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectStage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectStage_vue_vue_type_template_id_463bb55f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectStage.vue?vue&type=template&id=463bb55f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/SelectStage.vue?vue&type=template&id=463bb55f& ***!
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
        _vm.clearIcon && this.record.recordid
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
              "select-stage-dropdown",
              {
                class: _vm.error[0] ? "multiselect-invalid-feedback" : "",
                attrs: {
                  id: _vm.id + "-select-stage-dropdown",
                  openDirection: "below",
                  placeholder: "",
                  options: _vm.getStages(),
                  "track-by": "recordid",
                  tabindex: -1,
                  label: "description",
                  disabled: _vm.readOnly || _vm.disabled,
                  "allow-empty": false,
                  "show-labels": false,
                },
                on: { input: _vm.stageSelected },
                scopedSlots: _vm._u([
                  {
                    key: "option",
                    fn: function (props) {
                      return [
                        _c("div", [
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                props.option.code +
                                  " - " +
                                  props.option.description
                              )
                            ),
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
                  _vm._v("No Stages found"),
                ]),
                _vm._v(" "),
                _c("template", { slot: "noOptions" }, [
                  _vm._v("No Stages found..."),
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
                      on: { click: _vm.selectStage },
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
                _c("stage-table", {
                  ref: "select-stage-table",
                  attrs: {
                    "options-button": false,
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
        _vm._v("Select a Stage"),
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
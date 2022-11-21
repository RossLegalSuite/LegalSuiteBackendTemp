"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-SelectMatter-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    MatterTable: function MatterTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMattersTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectMattersTable */ "./resources/js/pages/matters/SelectMattersTable.vue"));
    }
  },
  props: {
    clearIconCallback: {
      type: String,
      "default": 'clearSelectMatter'
    },
    clearIcon: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Click on the button to select a Matter'
    },
    callback: {
      type: String,
      "default": 'matterSelected'
    },
    parentName: {
      type: String,
      "default": 'selectMatter'
    },
    _class: {
      type: String,
      "default": 'col-md-12'
    },
    _style: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": 'Matter'
    },
    singular: {
      type: String,
      "default": 'Matter'
    },
    plural: {
      type: String,
      "default": 'Matters'
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
      callingComponent: null,
      pageTitle: 'Select a Matter',
      table: null,
      matter: {},
      disabled: null,
      parentId: null
    };
  },
  mounted: function mounted() {
    this.$parent[this.parentName] = this;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapMutations)(['setCurrentMatter'])), {}, {
    clearIconClicked: function clearIconClicked() {
      if (typeof this.$parent[this.clearIconCallback] === 'function') {
        this.$parent[this.clearIconCallback]();
      } else if (typeof this.$parent[this.parentName + 'ClearIconCallback'] === 'function') {
        this.$parent[this.parentName + 'ClearIconCallback']();
      }
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      var matterForm = this.$root.$refs['pages'].$refs['globalMatterForm'];
      matterForm.table = this.$refs[this.id + '-select-matter-table'];
      matterForm.insertClicked();
    },
    selectMatter: function selectMatter(callingComponent) {
      // Work out the callingComponent because the global matter form also has a SelectMatter
      // It is best practice to set it in the component that uses SelectMatter
      // e.g. this.selectMatter.callingComponent = this;
      if (!this.callingComponent && callingComponent && callingComponent._isVue) this.callingComponent = callingComponent;
      if (!this.callingComponent && this.$parent._isVue && typeof this.$parent[this.callback] === 'function') this.callingComponent = this.$parent;

      if (!this.callingComponent) {
        console.error("No Calling Component specified in SelectMatter");
        return;
      }

      this.show();

      if (this.parentId) {
        this.table.whereRaw = "matter.clientid = " + this.parentId;
      } else {
        this.table.whereRaw = null;
      }

      this.table.selectTableFlag = true;
      this.table.actionColumnWidth = 12; //Prevent re-loading the table all the time

      if (!this.previousWhere) {
        setTimeout(this.table.loadDataTable);
        this.previousWhere = this.table.where ? this.table.where : 'Empty';
      } else if (this.previousWhere != this.table.where ? this.table.where : 'Empty') {
        setTimeout(this.table.loadDataTable);
        this.previousWhere = this.table.where ? this.table.where : 'Empty';
      }
    },
    recordSelected: function recordSelected(selectedRecord) {
      this.matter = {
        recordid: selectedRecord.recordid,
        fileref: htmlDecode(selectedRecord.fileref),
        description: htmlDecode(selectedRecord.description)
      };
      this.setCurrentMatter(selectedRecord); //this.setCurrentMatter(this.matter);
      // Override default one set in form-template.js

      if (typeof this.callingComponent.customMatterSelected === 'function') {
        this.callingComponent.customMatterSelected(selectedRecord);
      } else if (typeof this.callingComponent[this.callback] === 'function') {
        this.callingComponent[this.callback](selectedRecord);
      }
    },
    selectRecord: function selectRecord(id) {
      var _this = this;

      // this.recordSelected( this.table.table.row('#' + id).data() );
      // this.hide();
      // Need to do it this way so all the columns are returned
      // because some callers use specific columns in their Matter Selected method
      // to set various options
      axios.post('/matter/get/' + id).then(function (response) {
        _this.recordSelected(response.data.data[0]);

        _this.hide();
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    // Used by CustomFilterForm.vue
    setByFileRef: function setByFileRef(fileRef) {
      var _this2 = this;

      axios.post('/matters/get', {
        whereRaw: "fileRef = '" + fileRef + "'"
      }).then(function (response) {
        _this2.matter = response.data.data[0];
      })["catch"](function (error) {
        showError('Error getting Matter by File Ref', error);
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/matters/SelectMatter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/matters/SelectMatter.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectMatter.vue?vue&type=template&id=15bd4c03& */ "./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03&");
/* harmony import */ var _SelectMatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectMatter.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectMatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/SelectMatter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatter_vue_vue_type_template_id_15bd4c03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatter.vue?vue&type=template&id=15bd4c03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/SelectMatter.vue?vue&type=template&id=15bd4c03& ***!
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
  return _c(
    "div",
    { class: _vm.formControls ? _vm._class : "", style: _vm._style },
    [
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
                  attrs: { title: "Clear this setting" },
                  on: { click: _vm.clearIconClicked },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { readonly: "" },
              domProps: {
                value: _vm.matter.fileref
                  ? _vm.matter.fileref + " " + _vm.matter.description
                  : "",
              },
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
                        title: "Select a " + _vm.singular,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.selectMatter(null)
                        },
                      },
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
              _c("div", { staticClass: "modal-header indianred" }, [
                _c("h2", { staticClass: "modal-title page-title" }, [
                  _c("i", { staticClass: "fa fa-server mr-2" }),
                  _vm._v(_vm._s(_vm.pageTitle)),
                ]),
                _vm._v(" "),
                _c("i", {
                  staticClass:
                    "cp top-right fa fa-times-circle fa-2x text-white",
                  attrs: {
                    title: "Close this window",
                    "data-dismiss": "modal",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body p-3",
                  staticStyle: { height: "70vh", "overflow-y": "auto" },
                },
                [
                  _c("matter-table", {
                    ref: _vm.id + "-select-matter-table",
                    attrs: {
                      "options-button": false,
                      "new-record-button": false,
                      "tagged-drop-down": false,
                      "table-id": _vm.id + "-table",
                      lazyLoadFlag: true,
                      "form-ref": _vm.formRef,
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
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
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feeitems-FeeItemTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
//
//
//
//
//
//
//
//
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
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.url = "/feeitems/get";
    this.route = "feeitems";
    this.title = 'Fee Items';
    this.plural = 'Fee Items';
    this.singular = 'Fee Item';
  },
  methods: {
    editClicked: function editClicked(id) {
      this.$parent.$refs['fee-items-form'].editClicked(id);
    },
    moveFeeItemUp: function moveFeeItemUp(id) {
      var _this = this;

      axios.post("/feeitems/move-up", {
        id: id
      }).then(function (response) {
        if (response.data.error) {
          showError('Error Moving Fee Item', response.data.error);
        } else {
          _this.$parent.feeItemsTable.table.ajax.reload(function () {
            $('#' + _this.$parent.feeItemsTable.tableId + ' tbody tr.highlighted').removeClass('highlighted');
            $('#' + _this.$parent.feeItemsTable.tableId + ' tbody tr#' + id).addClass('highlighted');
          });
        }
      });
    },
    defineTableColDefs: function defineTableColDefs() {
      var _this2 = this;

      var targets = this.selectTableFlag ? 1 : 2;
      var tableColumnDefs = [{
        title: "Description",
        name: "fee_items.description",
        data: null,
        orderable: false,
        targets: targets,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Type",
        name: "fee_items.type",
        data: null,
        orderable: false,
        width: "12%",
        targets: targets + 1,
        render: function render(data) {
          return data.type;
        }
      }, {
        title: "Units",
        name: "fee_items.unitsDescription",
        data: null,
        orderable: false,
        width: "12%",
        targets: targets + 2,
        render: function render(data) {
          return data.unitsDescription;
        }
      }, {
        title: "Net Amount",
        name: "fee_items.amount",
        filterType: 'Number',
        "class": "text-number",
        data: null,
        orderable: false,
        visible: true,
        width: "15%",
        targets: targets + 3,
        render: function render(data) {
          return data.amount;
        }
      }, {
        title: root.control.salesTaxType,
        name: "fee_items.taxAmount",
        filterType: 'Number',
        "class": "text-number",
        data: null,
        orderable: false,
        width: "12%",
        targets: targets + 4,
        render: function render(data) {
          return data.taxAmount;
        }
      }, {
        title: "Amount",
        name: "fee_items.totalAmount",
        filterType: 'Number',
        "class": "text-number",
        data: null,
        orderable: false,
        width: "15%",
        targets: targets + 5,
        render: function render(data) {
          return data.totalAmount;
        }
      }];

      if (!this.selectTableFlag) {
        tableColumnDefs.push({
          title: "",
          data: null,
          "class": 'text-center',
          width: root.screenNarrow ? '10%' : '7%',
          orderable: false,
          searchable: false,
          printable: false,
          targets: 1,
          render: function render(data) {
            return parseInt(data.sorter) > 1 ? '<span class="cp" title="Move this Item up" onclick="componentFunction(\'' + _this2.formComponent + '\',\'moveFeeItemUp\',' + data.id + ')">🔼</span>' : '';
          }
        });
      }

      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemTable.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemTable.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeItemTable.vue?vue&type=template&id=60326111& */ "./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111&");
/* harmony import */ var _FeeItemTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeItemTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeItemTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feeitems/FeeItemTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeItemTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemTable_vue_vue_type_template_id_60326111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeItemTable.vue?vue&type=template&id=60326111& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemTable.vue?vue&type=template&id=60326111& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "d-flex justify-content-between table-functions-row" },
      [
        _c("global-search"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("table-options"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success btn-sm",
                attrs: { title: "Add a Fee Item" },
                on: { click: _vm.$parent.addFeeItem },
              },
              [
                _c("i", { staticClass: "fa fa-plus-square mr-2" }),
                _vm._v("Add Item\r\n            "),
              ]
            ),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("table", {
      staticClass: "table bordered",
      staticStyle: { width: "100%" },
      attrs: { id: _vm.tableId },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
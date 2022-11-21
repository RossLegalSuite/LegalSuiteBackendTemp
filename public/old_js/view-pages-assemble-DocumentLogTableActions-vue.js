"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-assemble-DocumentLogTableActions-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    tableId: String
  },
  mounted: function mounted() {
    this.$parent.actionsDropDown = this;
  },
  methods: {
    combineDocuments: function combineDocuments(action) {
      var _this = this;

      root.$snotify.simple('Preparing documents...', action + ' Documents', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      var savedFileName = 'Documents ' + moment().format('YYYY-MM-DD-HH-mm-ss') + '.pdf';
      this.pdfFiles = [];
      this.$parent.$parent.selectedRows.forEach(function (id) {
        var data = _this.$parent.table.row('#' + id).data();

        _this.pdfFiles.push(data);
      });
      axios.post('/pdf/combine', {
        pdfFiles: JSON.stringify(this.pdfFiles),
        folder: 'documents',
        saveAs: savedFileName
      })["finally"](function () {
        root.$snotify.clear();
      }).then(function (response) {
        if (response.data.error) {
          showError('Error combining Documents', response.data.error);
        } else {
          var pdfDocument = {
            description: 'Documents',
            fileName: getFileName(response.data.url),
            url: response.data.url,
            path: response.data.path
          };
          _this.$root.previewPdf.document = pdfDocument;
          _this.$root.previewPdf.title = 'Documents';

          if (action === 'Print') {
            _this.$root.previewPdf.printDocument();
          } else if (action === 'Email') {
            _this.$root.previewPdf.emailDocument(null, null);
          } else if (action === 'Download') {
            _this.$root.previewPdf.downloadDocument();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTableActions.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTableActions.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentLogTableActions.vue?vue&type=template&id=501df8a4& */ "./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4&");
/* harmony import */ var _DocumentLogTableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentLogTableActions.vue?vue&type=script&lang=js& */ "./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentLogTableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assemble/DocumentLogTableActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentLogTableActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTableActions_vue_vue_type_template_id_501df8a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentLogTableActions.vue?vue&type=template&id=501df8a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTableActions.vue?vue&type=template&id=501df8a4& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _vm.$parent.$parent.selectedRows &&
      _vm.$parent.$parent.selectedRows.length
        ? _c(
            "b-dropdown",
            {
              staticClass: "mr-2",
              attrs: {
                id: _vm.tableId + "-actions-dropdown-menu",
                size: "sm",
                right: "",
                variant: "danger",
                title: _vm.$parent.singular + " functions",
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "button-content",
                    fn: function () {
                      return [
                        _c("i", { staticClass: "fa fa-cog mr-2" }),
                        _vm._v("Tagged\r\n        "),
                      ]
                    },
                    proxy: true,
                  },
                ],
                null,
                false,
                2712424255
              ),
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  attrs: {
                    variant: "danger",
                    title: "Print the tagged " + _vm.$parent.plural,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.combineDocuments("Print")
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-print mr-2" }),
                  _vm._v("Print Documents"),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  attrs: {
                    variant: "danger",
                    title: "Download the tagged " + _vm.$parent.plural,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.combineDocuments("Download")
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-download mr-2" }),
                  _vm._v("Download Documents"),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  attrs: {
                    variant: "danger",
                    title: "Email the tagged " + _vm.$parent.plural,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.combineDocuments("Email")
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-envelope-o mr-2" }),
                  _vm._v("Email Documents"),
                ]
              ),
              _vm._v(" "),
              _vm.$parent.$parent.tableHasData
                ? _c("b-dropdown-divider")
                : _vm._e(),
              _vm._v(" "),
              _vm.$parent.$parent.tableHasData
                ? _c(
                    "b-dropdown-item-button",
                    {
                      attrs: {
                        variant: "danger",
                        title:
                          "Clear the list of Assembled Documents (the documents themselves will not be deleted)",
                      },
                      on: { click: _vm.$parent.$parent.emptyTable },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-window-close-o fa-lg mr-2",
                      }),
                      _vm._v("Clear Results"),
                    ]
                  )
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
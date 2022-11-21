"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-documents-DocumentsTaggedDropDown-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.table = this.$parent;
    this.parent = this.table.$parent;
    this.table.actionsDropDown = this;
  },
  methods: {
    printDocuments: function printDocuments() {
      var _this = this;

      this.pdfFiles = [];
      this.parent.selectedRows.forEach(function (id) {
        // console.log("id",id);
        // console.log("this.table.table",this.table.table);
        // console.log("this.table.table.row( '#' + id )",this.table.table.row( '#' + id ));
        var data = _this.table.table.row('#' + id).data(); //console.log("data",data);


        _this.pdfFiles.push({
          handle: data.recordid,
          url: data.url,
          fileName: data.savedname,
          folder: 'documents',
          path: data.emailfolder
        });
      });
      console.log("pdfFiles", this.pdfFiles);
      this.processDocuments();
    },
    processDocuments: function processDocuments() {
      var _this2 = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Print';
      root.$snotify.simple('Preparing documents...', action + ' Documents', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/pdf/combine', {
        pdfFiles: JSON.stringify(this.pdfFiles),
        folder: 'documents',
        saveAs: 'Documents ' + moment().format('YYYY-MM-DD-HH-mm-ss') + '.pdf'
      })["finally"](function () {
        root.$snotify.clear();
      }).then(function (response) {
        if (response.data.errors) {
          showError('Error combining Documents', response.data.errors);
        } else {
          var pdfDocument = {
            description: 'Documents',
            fileName: getFileName(response.data.url),
            url: response.data.url,
            path: response.data.path
          };
          _this2.$root.previewPdf.document = pdfDocument;
          _this2.$root.previewPdf.title = 'Documents';

          if (action === 'Print') {
            _this2.$root.previewPdf.printDocument();
          } else if (action === 'Email') {
            _this2.$root.previewPdf.emailDocument(null, null);
          } else if (action === 'Download') {
            _this2.$root.previewPdf.downloadDocument();
          }
        }
      });
    },
    displayTaggedRecords: function displayTaggedRecords() {
      this.table.displayingTaggedRecordsFlag = true;
      this.table.savedWhereRaw = this.table.whereRaw;
      this.table.whereRaw = this.table.tableName + ".recordid in (select taggedId from LolTagged where [LolTagged].[tableName] = '" + this.table.tableName + "' and [LolTagged].[employeeId] = " + root.loggedInEmployeeId + ")";
      this.table.table.ajax.reload();
    },
    displayTaggedAndUntaggedRecords: function displayTaggedAndUntaggedRecords() {
      this.table.displayingTaggedRecordsFlag = false;
      this.table.whereRaw = this.table.savedWhereRaw;
      this.table.table.ajax.reload();
    },
    unTagAllRecords: function unTagAllRecords() {
      this.table.toggleTaggedRows(this.parent);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTaggedDropDown.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6& */ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6&");
/* harmony import */ var _DocumentsTaggedDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentsTaggedDropDown.vue?vue&type=script&lang=js& */ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentsTaggedDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/documents/DocumentsTaggedDropDown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTaggedDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsTaggedDropDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTaggedDropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTaggedDropDown_vue_vue_type_template_id_cb986df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTaggedDropDown.vue?vue&type=template&id=cb986df6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _vm.parent.selectedRows && _vm.parent.selectedRows.length
        ? _c(
            "b-dropdown",
            {
              staticClass: "mr-2",
              attrs: {
                id: this.tableId + "-actions-dropdown-menu",
                size: "sm",
                right: "",
                variant: "secondary",
                title: "Perform tasks on the tagged " + _vm.$parent.plural,
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "button-content",
                    fn: function () {
                      return [
                        _c("i", {
                          staticClass: "fa fa-check-square-o fa-lg mr-2 pt-1",
                        }),
                        _vm._v("Tagged\r\n            "),
                        _c("span", { staticClass: "badge badge-danger mx-1" }, [
                          _vm._v(_vm._s(_vm.parent.selectedRows.length)),
                        ]),
                      ]
                    },
                    proxy: true,
                  },
                ],
                null,
                false,
                1589945470
              ),
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  attrs: {
                    variant: "secondary",
                    title: "Print the tagged " + _vm.$parent.plural,
                  },
                  on: { click: _vm.printDocuments },
                },
                [
                  _c("i", { staticClass: "fa fa-print fa-lg mr-2" }),
                  _vm._v("Print\r\n        "),
                ]
              ),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.table.displayingTaggedRecordsFlag,
                      expression: "!table.displayingTaggedRecordsFlag",
                    },
                  ],
                  attrs: {
                    variant: "secondary",
                    title: "Display the tagged " + _vm.table.plural,
                  },
                  on: { click: _vm.displayTaggedRecords },
                },
                [
                  _c("i", { staticClass: "fa fa-tags fa-lg mr-2" }),
                  _vm._v("Show Tagged\r\n        "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.table.displayingTaggedRecordsFlag,
                      expression: "table.displayingTaggedRecordsFlag",
                    },
                  ],
                  attrs: {
                    variant: "secondary",
                    title: "Display all the " + _vm.table.plural,
                  },
                  on: { click: _vm.displayTaggedAndUntaggedRecords },
                },
                [
                  _c("i", { staticClass: "fa fa-database fa-lg mr-2" }),
                  _vm._v("Show All\r\n        "),
                ]
              ),
              _vm._v(" "),
              _c("b-dropdown-divider"),
              _vm._v(" "),
              _c(
                "b-dropdown-item-button",
                {
                  attrs: {
                    variant: "secondary",
                    title: "Untag the tagged " + _vm.table.plural,
                  },
                  on: { click: _vm.unTagAllRecords },
                },
                [
                  _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                  _vm._v("Untag All\r\n        "),
                ]
              ),
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
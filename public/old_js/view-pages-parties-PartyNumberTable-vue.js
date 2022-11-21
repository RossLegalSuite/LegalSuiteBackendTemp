"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-parties-PartyNumberTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_tables_table_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectTelephoneType: function SelectTelephoneType() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectTelephoneType-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectTelephoneType */ "./resources/js/pages/parties/SelectTelephoneType.vue"));
    }
  },
  created: function created() {
    this.url = "/partele/get";
    this.route = "partytele";
    this.title = 'Contact Details';
    this.plural = 'Contact Details';
    this.singular = 'Contact';
    this.tableName = 'partele';
  },
  data: function data() {
    return {
      partyNumber: {
        table: null,
        id: null,
        method: null,
        methodId: null,
        description: null,
        sorter: null,
        internalFlag: null,
        errorFlag: false,
        errorMessage: ''
      },
      formTitle: ''
    };
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var target = this.noEditButtonFlag ? 0 : 1;
      var tableColumnDefs = [{
        title: "Type",
        name: "teletype.description",
        data: null,
        targets: target,
        render: function render(data) {
          return htmlDecode(data.teletypedescription);
        }
      }, {
        title: "Details",
        name: "partele.number",
        data: null,
        targets: target + 1,
        render: function render(data) {
          var number = data.teletypedescription.toLowerCase();

          if (number.includes('mail')) {
            return lookupWrapper('Email Party', data.partyid, data.number);
          } else if (number.includes('work') || number.includes('cell') || number.includes('home') || number.includes('number')) {
            return htmlAnchor('tel:', htmlDecode(data.number));
          } else {
            return data.number;
          }
        }
      }];
      return tableColumnDefs;
    },
    loadArrayTable: function loadArrayTable() {
      this.partyNumber.errorFlag = false;
      this.partyNumber.errorMessage = '';
      this.columnDefs = this.createColumnDefs();
      this.partyNumber.table = $('#' + this.tableId).DataTable({
        destroy: true,
        serverSide: false,
        dom: "rt",
        rowId: 'id',
        scrollY: '20Vh',
        processing: false,
        ordering: true,
        select: false,
        scrollX: true,
        scrollCollapse: false,
        scroller: {
          loadingIndicator: false
        },
        language: {
          emptyTable: "",
          processing: "",
          zeroRecords: "",
          loadingRecords: ""
        },
        data: [],
        order: [[1, "asc"]],
        columnDefs: this.columnDefs
      });
    },
    newPartyNumber: function newPartyNumber() {
      var _this2 = this;

      this.partyNumber.errorFlag = false;
      this.partyNumber.errorMessage = '';
      this.partyNumber.id = null;
      this.partyNumber.description = null;
      this.partyNumber.internalFlag = '0';
      this.partyNumber.sorter = '1'; // Work on this..

      this.partyNumber.method = 'Email';
      this.partyNumber.methodId = root.control.emailphoneid;
      this.selectTelephoneType.record = {
        recordid: this.partyNumber.methodId,
        description: this.partyNumber.method,
        internalflag: this.partyNumber.internalFlag
      };
      this.formTitle = 'Contact Number will be Added';
      $('#' + this.id).modal();
      $('#' + this.id + ' input[name="description"]').focus();
      setTimeout(function () {
        $('#' + _this2.id + " .popover-icon").popover();
      }, 100);
    },
    editClicked: function editClicked(id) {
      var _this3 = this;

      this.partyNumber.errorFlag = false;
      this.partyNumber.errorMessage = '';
      var rowData = this.table.row('#' + id).data(); //console.log('rowData',rowData);

      if (_typeof(rowData) === 'object') {
        this.partyNumber.id = id;
        this.partyNumber.method = rowData.teletypedescription;
        this.partyNumber.methodId = rowData.telephonetypeid;
        this.partyNumber.description = rowData.number;
        this.partyNumber.internalFlag = rowData.internalflag;
        this.partyNumber.sorter = rowData.sorter; //console.log('this.partyNumber',this.partyNumber);

        this.selectTelephoneType.record = {
          recordid: rowData.teletypeid,
          description: rowData.teletypedescription,
          internalflag: rowData.internalFlag
        };
        this.formTitle = 'Contact Number will be Changed';
        $('#' + this.id).modal();
        $('#' + this.id + ' input[name="description"]').focus();
        setTimeout(function () {
          $('#' + _this3.id + " .popover-icon").popover();
        }, 100);
      } else {
        showError('System Error', 'Party Number (' + id + ') not found trying to Edit row');
      }
    },
    setLabel: function setLabel() {
      if (this.partyNumber.method && this.partyNumber.method.toLowerCase().includes('email')) {
        return "Email Address";
      } else {
        return "Number";
      }
    },
    telephoneTypeSelected: function telephoneTypeSelected(id, description, internalFlag) {
      this.partyNumber.method = description;
      this.partyNumber.methodId = id;
      this.partyNumber.internalFlag = internalFlag;
    },
    submitForm: function submitForm(e) {
      e.preventDefault();
      console.log('this.partyNumber.methodId,root.control.emailphoneid', this.partyNumber.methodId, root.control.emailphoneid);

      if (this.partyNumber.methodId === root.control.emailphoneid) {
        if (!isValidEmailAddress(this.partyNumber.description)) {
          this.partyNumber.errorFlag = true;
          this.partyNumber.errorMessage = 'Invalid email address';
          $('#' + this.id + ' input[name="description"]').focus();
          return;
        }
      }

      if (this.partyNumber.description && this.partyNumber.method && this.partyNumber.methodId) {
        this.partyNumber.errorFlag = false;
        this.savePartyNumber();
      } else {
        showError('Error', 'Record could not be Saved');
      }
    },
    savePartyNumber: function savePartyNumber() {
      var _this4 = this;

      var _this = this;

      var record = {
        recordid: this.partyNumber.id,
        partyId: this.parentId,
        number: this.partyNumber.description,
        telephonetypeid: this.partyNumber.methodId,
        internalFlag: this.partyNumber.internalFlag ? this.partyNumber.internalFlag : '0',
        sorter: this.partyNumber.sorter
      };
      axios.post('/partele/store', record).then(function (response) {
        if (response.data.errors) {
          _this4.partyNumber.errorFlag = true;
          _this4.partyNumber.errorMessage = response.data.errors;
          $('#' + _this4.id + ' input[name="description"]').focus();
        } else {
          _this4.table.ajax.reload();

          $('#' + _this4.id).modal('hide');
        }
      });
    },
    forgetPartyNumbers: function forgetPartyNumbers() {
      axios.get("/parties/forgetPartyNumbers");
    },
    storePartyNumbers: function storePartyNumbers() {
      var rowData = [];
      this.partyNumber.table.rows().every(function (index) {
        var thisRow = this.data();
        rowData.push({
          method: thisRow.method,
          description: thisRow.description,
          internalFlag: thisRow.internalFlag
        });
      });
    },
    deleteRecord: function deleteRecord() {
      var _this5 = this;

      axios.post("/partele/delete/" + this.partyNumber.id).then(function (response) {
        _this5.table.ajax.reload();

        $('#' + _this5.id).modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/parties/PartyNumberTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/parties/PartyNumberTable.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartyNumberTable.vue?vue&type=template&id=49a2db73& */ "./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73&");
/* harmony import */ var _PartyNumberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartyNumberTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartyNumberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__.render,
  _PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parties/PartyNumberTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyNumberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyNumberTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyNumberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyNumberTable_vue_vue_type_template_id_49a2db73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyNumberTable.vue?vue&type=template&id=49a2db73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyNumberTable.vue?vue&type=template&id=49a2db73& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        _c("div", [_c("global-search")], 1),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("new-record-button", {
              attrs: {
                type: "button",
                title: "Add a Contact Method for this Party",
                text: "Add",
                callback: "newPartyNumber",
              },
              on: { newPartyNumber: _vm.newPartyNumber },
            }),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    _c("table", {
      staticClass: "table bordered",
      staticStyle: { "table-layout": "auto", width: "100%" },
      attrs: { id: _vm.tableId },
    }),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
      _c(
        "form",
        {
          staticClass: "modal-dialog modal-dialog-centered",
          on: { submit: _vm.submitForm },
        },
        [
          _c("div", { staticClass: "modal-content steelblue-border" }, [
            _c("div", { staticClass: "modal-header steelblue" }, [
              _c("h4", { staticClass: "modal-title page-title" }, [
                _vm._v(_vm._s(_vm.formTitle)),
              ]),
              _vm._v(" "),
              _c("i", {
                staticClass: "modal-close-button fa fa-times-circle fa-2x",
                attrs: { title: "Close this window", "data-dismiss": "modal" },
              }),
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
                    _c("select-telephone-type", {
                      ref: _vm.id + "-select-telephone-type",
                      attrs: {
                        popOver:
                          "<h4>Type of Contact Method</h4>\r\n                            <p>The type of Contact Method.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        label: "Contact Method",
                        _class: "col-md-8",
                        id: _vm.id + "-select-telephone-type",
                        title: "The type of Contact Method",
                        "form-ref": _vm.id + "-select-telephone-type",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("label", [_vm._v(_vm._s(_vm.setLabel()))]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.partyNumber.description,
                          expression: "partyNumber.description",
                        },
                      ],
                      staticClass: "form-control",
                      class: _vm.partyNumber.errorFlag ? "is-invalid" : "",
                      attrs: {
                        name: "description",
                        type: "text",
                        required: "",
                      },
                      domProps: { value: _vm.partyNumber.description },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.partyNumber,
                            "description",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.partyNumber.errorFlag,
                            expression: "partyNumber.errorFlag",
                          },
                        ],
                        staticClass: "invalid-feedback",
                        attrs: { role: "alert" },
                      },
                      [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.partyNumber.errorMessage)),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: _vm.id + "-internal-flag-checkbox",
                            name: "internalFlagCheckBox",
                            value: "1",
                            "unchecked-value": "0",
                            switch: "",
                            size: "lg",
                          },
                          model: {
                            value: _vm.partyNumber.internalFlag,
                            callback: function ($$v) {
                              _vm.$set(_vm.partyNumber, "internalFlag", $$v)
                            },
                            expression: "partyNumber.internalFlag",
                          },
                        },
                        [_c("span", [_vm._v("Do not show to Remote Users")])]
                      ),
                    ],
                    1
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _vm.partyNumber.id
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-large btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.deleteRecord },
                      },
                      [_vm._m(0)]
                    )
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _vm._m(1),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Delete" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-success form-button mr-3",
          attrs: { type: "submit", title: "Save" },
        },
        [
          _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
          _vm._v("OK"),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-danger form-button",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            title: "Exit without saving",
          },
        },
        [
          _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
          _vm._v("Cancel"),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
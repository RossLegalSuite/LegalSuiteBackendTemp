"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-common-FeeNotes-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CommonFeeNotesTable: function CommonFeeNotesTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-feenotes-FeeNoteTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feenotes/FeeNoteTable */ "./resources/js/pages/feenotes/FeeNoteTable.vue"));
    },
    CommonFeeNotesForm: function CommonFeeNotesForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-feenotes-FeeNoteForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feenotes/FeeNoteForm */ "./resources/js/pages/feenotes/FeeNoteForm.vue"));
    },
    AddFeeNotes: function AddFeeNotes() {
      return __webpack_require__.e(/*! import() */ "view-pages-feenotes-AddFeeNotes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feenotes/AddFeeNotes */ "./resources/js/pages/feenotes/AddFeeNotes.vue"));
    },
    SelectFeeCodes: function SelectFeeCodes() {
      return __webpack_require__.e(/*! import() */ "view-pages-feecodes-SelectFeeCodes-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feecodes/SelectFeeCodes */ "./resources/js/pages/feecodes/SelectFeeCodes.vue"));
    },
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentMatter', 'currentParty', 'currentEmployee'])),
  props: {
    parentType: String
  },
  data: function data() {
    return {
      selectedMatterId: null
    };
  },
  methods: {
    selectFeeCode: function selectFeeCode() {
      var _this = this;

      if (this.parentType === "Matter") {
        this.selectedMatterId = this.currentMatter.recordid;
        axios.post('/matters/get', {
          id: this.currentMatter.recordid,
          basicColumns: true
        }).then(function (response) {
          _this.selectFeeCodes.selectFeeCodes(response.data.data[0].feeSheetId);
        });
      } else {
        this.selectMatter.selectMatter(this);
      }
    },
    matterSelected: function matterSelected(selectedRecord) {
      var _this2 = this;

      this.selectedMatterId = selectedRecord.recordid;
      axios.post('/matter/get/' + selectedRecord.recordid).then(function (response) {
        _this2.selectFeeCodes.selectFeeCodes(response.data.data[0].feeSheetId);
      });
    },
    feeCodesSelected: function feeCodesSelected(selectedRows, feeSheetId) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.post('/feecodes/getFeeItems', {
                  feeCodes: selectedRows,
                  feeSheetId: feeSheetId
                }).then(function (response) {
                  if (response.data.error) {
                    showError('Error', response.data.error);
                  } else {
                    var dateNow = moment().format(root.control.dateformat + ' HH:mm:ss');
                    response.data.feeItems.forEach(function (feeItem) {
                      feeItem.allocatedToId = loggedInEmployeeAllocateToId;
                      feeItem.allocatedEmployeeName = loggedInEmployeeAllocateToName;
                      feeItem.dateTime = dateNow;
                      feeItem.originalAmount = feeItem.amount;
                    });

                    _this3.addFeeNotes.show();

                    _this3.addFeeNotes.loadDataTable(response.data.feeItems, dateNow);
                  }
                })["catch"](function (error) {
                  showError('Error getting Fee Items', error);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    closeClicked: function closeClicked() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    pageTitle: function pageTitle() {
      if (this.parentType === 'Matter') {
        return this.currentMatter.fileref ? this.currentMatter.fileref + ' - ' + this.currentMatter.description : '';
      } else if (this.parentType === 'Employee') {
        return this.currentEmployee.name ? this.currentEmployee.name : '';
      }
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      this.$refs['common-' + this.parentType.toLowerCase() + '-fee-notes-form'].insertClicked();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/common/FeeNotes.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/common/FeeNotes.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeNotes.vue?vue&type=template&id=782f34c6& */ "./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6&");
/* harmony import */ var _FeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeNotes.vue?vue&type=script&lang=js& */ "./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/common/FeeNotes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNotes_vue_vue_type_template_id_782f34c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNotes.vue?vue&type=template&id=782f34c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/common/FeeNotes.vue?vue&type=template&id=782f34c6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card h-100 border-0" },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _c("h3", { staticClass: "page-title" }, [
              _vm._v("Fee Notes: "),
              _c("span", { domProps: { innerHTML: _vm._s(_vm.pageTitle()) } }),
            ]),
            _vm._v(" "),
            _c("page-close-button", { on: { closeClicked: _vm.closeClicked } }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body overflow-auto p-3" },
        [
          _c("common-fee-notes-table", {
            ref: "common-" + _vm.parentType.toLowerCase() + "-fee-notes-table",
            attrs: {
              formRef:
                "common-" + _vm.parentType.toLowerCase() + "-fee-notes-form",
              tableId:
                "common-" + _vm.parentType.toLowerCase() + "-fee-notes-table",
              lazyLoadFlag: true,
              parentType: _vm.parentType,
            },
          }),
          _vm._v(" "),
          _c("common-fee-notes-form", {
            ref: "common-" + _vm.parentType.toLowerCase() + "-fee-notes-form",
            attrs: {
              uniqueId:
                "common-" + _vm.parentType.toLowerCase() + "-fee-notes-form",
              id: "common-" + _vm.parentType.toLowerCase() + "-fee-notes-form",
              parentTableRef:
                "common-" + _vm.parentType.toLowerCase() + "-fee-notes-table",
              modal: true,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("select-fee-codes", {
        ref: "common-" + _vm.parentType.toLowerCase() + "-select-fee-codes",
        attrs: {
          formControls: false,
          id: "common-" + _vm.parentType.toLowerCase() + "-select-fee-codes",
          formRef:
            "common-" + _vm.parentType.toLowerCase() + "-select-fee-codes",
        },
      }),
      _vm._v(" "),
      _c("select-matter", {
        ref: "common-" + _vm.parentType.toLowerCase() + "-select-matter",
        attrs: {
          formControls: false,
          id: "common-" + _vm.parentType.toLowerCase() + "-select-matter",
          formRef: "common-" + _vm.parentType.toLowerCase() + "-select-matter",
        },
      }),
      _vm._v(" "),
      _c("add-fee-notes", {
        ref: "common-" + _vm.parentType.toLowerCase() + "-add-fee-notes",
        attrs: {
          id: "common-" + _vm.parentType.toLowerCase() + "-add-fee-notes",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
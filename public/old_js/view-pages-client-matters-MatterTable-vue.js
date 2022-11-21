"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matters-MatterTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    ClientMattersFilterForm: function ClientMattersFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matters-MatterFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MatterFilterForm */ "./resources/js/pages/client/matters/MatterFilterForm.vue"));
    },
    SelectClientReport: function SelectClientReport() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-reports-SelectClientReport-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/reports/SelectClientReport */ "./resources/js/pages/client/reports/SelectClientReport.vue"));
    }
  },
  data: function data() {
    return {
      selectClientReportComponent: null
    };
  },
  created: function created() {
    this.url = "/matparty/get";
    this.route = "matparty";
    this.tableName = 'matparty';
    this.title = 'Matters';
    this.plural = 'Matters';
    this.singular = 'Matter';
    this.where = 'matparty.partyid,' + root.loggedInPartyId;
    this.viewTableFlag = true;
    this.editButtonRecordId = 'matterid';
    this.buttonAdditionalDataParameter = 'recordid';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var tableColumnDefs = [{
        title: "File Ref",
        name: "Matter.FileRef",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Matter',
        width: "12%",
        data: null,
        targets: targets + 1,
        render: function render(data) {
          return htmlDecode(data.matterfileref);
        }
      }, {
        title: "Description",
        name: "Matter.Description",
        width: "20%",
        data: null,
        orderable: false,
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.matterdescription);
        }
      }, {
        title: "Role",
        name: "role.description",
        data: null,
        width: "20%",
        orderable: false,
        targets: targets + 3,
        render: function render(data) {
          var sorterIndicator = '';

          if (parseInt(data.sorter) > 1) {
            sorterIndicator = ' (' + data.sorter + ')';
          }

          return htmlDecode(data.roledescription) + sorterIndicator;
        }
      }, {
        title: "Matter Type",
        name: "MatType.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'MatterType',
        visible: false,
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.mattypedescription);
        }
      }, {
        title: "Document Set",
        name: "DocGen.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'DocumentSet',
        visible: true,
        data: null,
        orderable: false,
        width: "20%",
        targets: targets + 5,
        render: function render(data) {
          return htmlDecode(data.docgendescription);
        }
      }, {
        title: "Instructed",
        name: "Matter.DateInstructed",
        filterType: 'Date',
        visible: true,
        width: "12%",
        data: null,
        orderable: false,
        targets: targets + 6,
        render: function render(data) {
          return data.formatteddateinstructed;
        }
      }, {
        title: "Branch",
        name: "Branch.Description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Branch',
        visible: false,
        data: null,
        orderable: false,
        width: "15%",
        targets: targets + 7,
        render: function render(data) {
          return htmlDecode(data.branchdescription);
        }
      }, {
        title: "Conveyancing Status",
        name: "Matter.ConveyancingStatusFlag",
        filterType: 'Dropdown',
        filterControl: 'Dropdown',
        filterOptions: [{
          value: '1',
          label: 'New Instruction'
        }, {
          value: '2',
          label: 'Amended Instruction'
        }, {
          value: '3',
          label: 'Lodged'
        }, {
          value: '4',
          label: 'Registered'
        }, {
          value: '5',
          label: 'NTU Instruction'
        }, {
          value: '6',
          label: 'Withdrawn'
        }, {
          value: '7',
          label: 'Cancelled'
        }],
        width: "15%",
        data: null,
        orderable: false,
        visible: false,
        targets: targets + 8,
        render: function render(data) {
          if (data.conveyancingstatusflag == 1) {
            return 'New Instruction';
          } else if (data.conveyancingstatusflag == 2) {
            return 'Amended Instruction';
          } else if (data.conveyancingstatusflag == 3) {
            return 'Lodged';
          } else if (data.conveyancingstatusflag == 4) {
            return 'Registered';
          } else if (data.conveyancingstatusflag == 5) {
            return 'NTU';
          } else if (data.conveyancingstatusflag == 6) {
            return 'Withdrawn';
          } else if (data.conveyancingstatusflag == 7) {
            return 'Cancelled';
          } else {
            return data.conveyancingstatusflag;
          }
        }
      }];
      return tableColumnDefs;
    },
    loadSelectClientReport: function loadSelectClientReport() {
      this.selectClientReportComponent.load();
    },
    selectRecord: function selectRecord(id) {
      var _this = this;

      //*********************************************************
      // Keep this in sync with the code in ClientReportsForm.vue
      //*********************************************************
      var abortProcess = false;
      this.selectClientReportComponent.hide();
      root.$snotify.simple('Please wait...', 'Creating Report', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/lolclientreport/get/' + id).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(response) {
          var templateData, matParties, matterIds, uniqueMatterIds, matterResponse;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!response.data.errors) {
                    _context2.next = 4;
                    break;
                  }

                  showError('Error', response.data.errors);
                  _context2.next = 23;
                  break;

                case 4:
                  templateData = root.templateData;
                  templateData.report = {
                    title: response.data.data[0].title,
                    subtitle: response.data.data[0].description,
                    date: moment().format(root.control.dateformat + ' HH:mm:ss')
                  };
                  _context2.next = 8;
                  return axios.post('/matparty/get', {
                    whereRaw: _this.whereRaw || _this.tableFilter,
                    where: _this.where,
                    select: 'matparty.matterid'
                  })["catch"](function (error) {
                    abortProcess = true;
                    showError('Error', error);
                  });

                case 8:
                  matParties = _context2.sent;

                  if (!matParties.data.errors) {
                    _context2.next = 14;
                    break;
                  }

                  abortProcess = true;
                  showError('Error', matParties.data.errors);
                  _context2.next = 23;
                  break;

                case 14:
                  if (abortProcess) {
                    _context2.next = 23;
                    break;
                  }

                  matterIds = [];
                  _context2.next = 18;
                  return root.asyncForEach(matParties.data.data, /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(record) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              matterIds.push(record.matterid);

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }());

                case 18:
                  // https://dev.to/clairecodes/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6
                  uniqueMatterIds = _toConsumableArray(new Set(matterIds));
                  _context2.next = 21;
                  return axios.post('/matters/getMattersTemplateData', {
                    whereIn: 'matter.recordid,' + uniqueMatterIds.join()
                  })["catch"](function (error) {
                    abortProcess = true;
                    showError('Error', error);
                  });

                case 21:
                  matterResponse = _context2.sent;

                  if (matterResponse.data.errors) {
                    abortProcess = true;
                    showError('Error', matterResponse.data.errors);
                  } else {
                    templateData.matters = matterResponse.data.matters;
                    templateData.matter = matterResponse.data.matters[0];
                    templateData.party = root.loggedInPartyRecord;
                    templateData.report.count = uniqueMatterIds.length;
                    templateData.report.filter = _this.whereRaw || _this.tableFilter;
                    root.vueRender(response.data.data[0].contents, templateData).then(function (contents) {
                      root.$snotify.clear();
                      root.previewHtml.title = response.data.data[0].title;
                      root.previewHtml.htmlBody = contents;
                      root.previewHtml.load(_this, response.data.data[0], 'Client Report');
                    })["catch"](function (error) {
                      showError('Error rendering Report Html', error);
                    });
                  }

                case 23:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        showError('Error', error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterTable.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterTable.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterTable.vue?vue&type=template&id=bd860ad6& */ "./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6&");
/* harmony import */ var _MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matters/MatterTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterTable_vue_vue_type_template_id_bd860ad6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterTable.vue?vue&type=template&id=bd860ad6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterTable.vue?vue&type=template&id=bd860ad6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between table-functions-row" },
        [
          _c("column-search", {
            attrs: {
              searchableColumns: [
                { title: "File Ref", name: "Matter.FileRef" },
                { title: "Description", name: "Matter.Description" },
              ],
              initialSearchColumn: "File Ref",
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm mr-2",
                  attrs: { type: "button", title: "Generate a Report" },
                  on: { click: _vm.loadSelectClientReport },
                },
                [
                  _c("i", { staticClass: "fa fa-print mr-2" }),
                  _vm._v("Reports\r\n            "),
                ]
              ),
              _vm._v(" "),
              _c("filter-form-button"),
              _vm._v(" "),
              _c("table-options"),
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
      _vm._v(" "),
      _c("table-footer"),
      _vm._v(" "),
      _c("client-matters-filter-form", {
        ref: _vm.tableId + "-filter-form",
        attrs: { id: _vm.tableId + "-filter-form" },
      }),
      _vm._v(" "),
      _c("select-client-report", {
        attrs: {
          id: _vm.tableId + "-select-client-report",
          formRef: "client-matters-table",
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
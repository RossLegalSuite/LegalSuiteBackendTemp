"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-reports-SelectClientReportFields-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
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
  mounted: function mounted() {
    this.$parent.selectClientReportFields = this;
  },
  data: function data() {
    var _ref;

    return _ref = {
      callingComponent: null,
      matterButtonTitle: 'Matter',
      companyTable: null,
      companyTableRows: [],
      colDataTable: null,
      colDataTableRows: [],
      conveyDataTable: null,
      conveyDataTableRows: []
    }, _defineProperty(_ref, "colDataTable", null), _defineProperty(_ref, "colDataTableRows", []), _defineProperty(_ref, "propertiesTable", null), _defineProperty(_ref, "propertiesTableRows", []), _defineProperty(_ref, "partyTable", null), _defineProperty(_ref, "partyTableRows", []), _defineProperty(_ref, "matterTable", null), _defineProperty(_ref, "matterTableRows", []), _defineProperty(_ref, "reportTable", null), _defineProperty(_ref, "reportTableRows", []), _defineProperty(_ref, "activeTab", null), _defineProperty(_ref, "index", 0), _defineProperty(_ref, "callingComponent", null), _defineProperty(_ref, "tabs", [{
      pageName: "Matter",
      title: "Matter",
      iconClass: '',
      visible: true,
      active: true
    }, {
      pageName: "ColData",
      title: "ColData",
      iconClass: '',
      visible: true,
      active: false
    }, {
      pageName: "ConveyData",
      title: "ConveyData",
      iconClass: '',
      visible: true,
      active: false
    }, {
      pageName: "BondData",
      title: "BondData",
      iconClass: '',
      visible: true,
      active: false
    }, {
      pageName: "Properties",
      title: "Properties",
      iconClass: '',
      visible: true,
      active: false
    }, {
      pageName: "Party",
      title: "Party",
      iconClass: '',
      visible: false,
      active: false
    }, {
      pageName: "Company",
      title: "Company",
      iconClass: '',
      visible: true,
      active: false
    }, {
      pageName: "Report",
      title: "Report",
      iconClass: '',
      visible: false,
      active: false
    }]), _ref;
  },
  watch: {
    activeTab: function activeTab(newValue) {
      var _this2 = this;

      if (newValue === "Company") {
        if (!this.companyTable) {
          setTimeout(function () {
            _this2.companyTable = $('#' + _this2.id + '-company-table').DataTable(_this2.setDataTableParameters(_this2.companyTableRows));
          }, 100);
        } else {
          this.companyTable.columns.adjust;
        }
      } else if (newValue === "ColData") {
        if (!this.colDataTable) {
          setTimeout(function () {
            _this2.colDataTable = $('#' + _this2.id + '-coldata-table').DataTable(_this2.setDataTableParameters(_this2.colDataTableRows));
          }, 100);
        } else {
          this.colDataTable.columns.adjust;
        }
      } else if (newValue === "ConveyData") {
        if (!this.conveyDataTable) {
          setTimeout(function () {
            _this2.conveyDataTable = $('#' + _this2.id + '-conveydata-table').DataTable(_this2.setDataTableParameters(_this2.conveyDataTableRows));
          }, 100);
        } else {
          this.conveyDataTable.columns.adjust;
        }
      } else if (newValue === "BondData") {
        if (!this.bondDataTable) {
          setTimeout(function () {
            _this2.bondDataTable = $('#' + _this2.id + '-bonddata-table').DataTable(_this2.setDataTableParameters(_this2.bondDataTableRows));
          }, 100);
        } else {
          this.bondDataTable.columns.adjust;
        }
      } else if (newValue === "Properties") {
        if (!this.propertiesTable) {
          setTimeout(function () {
            _this2.propertiesTable = $('#' + _this2.id + '-properties-table').DataTable(_this2.setDataTableParameters(_this2.propertiesTableRows));
          }, 100);
        } else {
          this.propertiesTable.columns.adjust;
        }
      } else if (newValue === "Party") {
        if (!this.partyTable) {
          setTimeout(function () {
            _this2.partyTable = $('#' + _this2.id + '-party-table').DataTable(_this2.setDataTableParameters(_this2.partyTableRows));
          }, 100);
        } else {
          this.partyTable.columns.adjust;
        }
      } else if (newValue === "Matter") {
        if (!this.matterTable) {
          setTimeout(function () {
            _this2.matterTable = $('#' + _this2.id + '-matter-table').DataTable(_this2.setDataTableParameters(_this2.matterTableRows));
          }, 100);
        } else {
          this.matterTable.columns.adjust;
        }
      } else if (newValue === "Report") {
        if (!this.reportTable) {
          setTimeout(function () {
            _this2.reportTable = $('#' + _this2.id + '-report-table').DataTable(_this2.setDataTableParameters(_this2.reportTableRows));
          }, 100);
        } else {
          this.reportTable.columns.adjust;
        }
      }
    }
  },
  methods: {
    load: function load(summerNoteInstance, templateData, componentRef, reloadFlag) {
      var _this3 = this;

      this.componentRef = componentRef;
      this.matterButtonTitle = 'Matter (' + templateData.matter.fileref + ')';
      this.index = 0;
      this.companyTableRows = [];
      this.colDataTableRows = [];
      this.conveyDataTableRows = [];
      this.bondDataTableRows = [];
      this.propertiesTableRows = [];
      this.partyTableRows = [];
      this.matterTableRows = [];
      this.reportTableRows = [];
      this.summerNoteInstance = summerNoteInstance;
      this.summerNoteInstance.$note.summernote('saveRange'); // Important - so it inserts the field at the current cursor position

      this.callingComponent = this.summerNoteInstance.options.callingComponent;
      this.index++;
      Object.entries(templateData.matter).forEach(function (field) {
        if (field[0] == 'coldata') {
          _this3.addColDataFields(field[1]);
        } else if (field[0] == 'conveydata') {
          _this3.addConveyDataFields(field[1]);
        } else if (field[0] == 'bonddata') {
          _this3.addBondDataFields(field[1]);
        } else if (field[0] == 'properties') {
          _this3.addPropertyFields(field[1]);
        } else {
          _this3.index++;

          _this3.matterTableRows.push({
            index: _this3.index,
            field: field[0],
            value: field[1]
          });
        }
      });
      this.partyTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Party';
      })[0];

      if (Object.entries(templateData.party).length) {
        Object.entries(templateData.party).forEach(function (field) {
          _this3.index++;

          _this3.partyTableRows.push({
            index: _this3.index,
            field: field[0],
            value: field[1]
          });
        });
        this.partyTab.visible = true;
      } else {
        this.partyTab.visible = false;
      }

      Object.entries(templateData.company).forEach(function (field) {
        _this3.index++;

        _this3.companyTableRows.push({
          index: _this3.index,
          field: field[0],
          value: field[1]
        });
      });
      this.reportTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Report';
      })[0];

      if (Object.entries(templateData.report).length) {
        Object.entries(templateData.report).forEach(function (field) {
          _this3.index++;

          _this3.reportTableRows.push({
            index: _this3.index,
            field: field[0],
            value: field[1]
          });
        });
        this.reportTab.visible = true;
      } else {
        this.reportTab.visible = false;
      }

      if (reloadFlag) {
        this.matterTable = null;
        this.partyTable = null;
        this.colDataTable = null;
        this.conveyDataTable = null;
        this.colDataTable = null;
        this.propertiesTable = null;
        this.matterTable = $('#' + this.id + '-matter-table').DataTable(this.setDataTableParameters(this.matterTableRows)); // } else {
        //     this.activeTab = 'Matter';
      }

      this.setMatterTab();
      this.show();
    },
    addColDataFields: function addColDataFields() {
      var _this4 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.entries(fields).forEach(function (field) {
        _this4.index++;

        _this4.colDataTableRows.push({
          index: _this4.index,
          field: field[0],
          value: field[1]
        });
      });
    },
    addConveyDataFields: function addConveyDataFields() {
      var _this5 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.entries(fields).forEach(function (field) {
        _this5.index++;

        _this5.conveyDataTableRows.push({
          index: _this5.index,
          field: field[0],
          value: field[1]
        });
      });
    },
    addBondDataFields: function addBondDataFields() {
      var _this6 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.entries(fields).forEach(function (field) {
        _this6.index++;

        _this6.bondDataTableRows.push({
          index: _this6.index,
          field: field[0],
          value: field[1]
        });
      });
    },
    addPropertyFields: function addPropertyFields() {
      var _this7 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.entries(fields).forEach(function (field) {
        _this7.index++;

        _this7.propertiesTableRows.push({
          index: _this7.index,
          field: field[0],
          value: field[1]
        });
      });
    },
    setDataTableParameters: function setDataTableParameters(dataSource) {
      var _this = this;

      return {
        destroy: true,
        dom: "ft",
        data: dataSource,
        serverSide: false,
        paging: false,
        select: false,
        scrollX: true,
        responsive: false,
        scrollY: false,
        scroller: false,
        rowId: "index",
        ordering: true,
        order: [[2, "asc"]],
        language: {
          emptyTable: "No Fields found",
          zeroRecords: "No Fields found"
        },
        columnDefs: [{
          title: "",
          data: null,
          targets: 0,
          visible: false,
          render: function render(data) {
            return data.index;
          }
        }, {
          title: "Action",
          data: null,
          "class": "text-center",
          width: "15%",
          orderable: false,
          targets: 1,
          render: function render(data) {
            return '<span class="badge badge-danger py-2 px-2" onclick="componentFunction(\'' + _this.componentRef + '\',\'selectRecord\',' + data.index + ')"  title ="Select this Field">Select</span>';
          }
        }, {
          title: "Name",
          data: null,
          width: "35%",
          targets: 2,
          render: function render(data) {
            return data.field;
          }
        }, {
          title: "Value",
          data: null,
          width: "50%",
          targets: 3,
          render: function render(data) {
            return data.value ? data.value : '';
          }
        }]
      };
    },
    selectRecord: function selectRecord(id) {
      this.hide();

      if (this.activeTab === "Company") {
        this.insertField(this.companyTable.row('#' + id).data(), this.activeTab.toLowerCase());
      } else if (this.activeTab === "ColData") {
        this.insertField(this.colDataTable.row('#' + id).data(), 'matter.' + this.activeTab.toLowerCase());
      } else if (this.activeTab === "ConveyData") {
        this.insertField(this.conveyDataTable.row('#' + id).data(), 'matter.' + this.activeTab.toLowerCase());
      } else if (this.activeTab === "BondData") {
        this.insertField(this.bondDataTable.row('#' + id).data(), 'matter.' + this.activeTab.toLowerCase());
      } else if (this.activeTab === "Properties") {
        this.insertField(this.propertiesTable.row('#' + id).data(), 'matter.properties[0]');
      } else if (this.activeTab === "Party") {
        this.insertField(this.partyTable.row('#' + id).data(), this.activeTab.toLowerCase());
      } else if (this.activeTab === "Matter") {
        this.insertField(this.matterTable.row('#' + id).data(), this.activeTab.toLowerCase());
      } else if (this.activeTab === "Report") {
        this.insertField(this.reportTable.row('#' + id).data(), this.activeTab.toLowerCase());
      }
    },
    insertField: function insertField(data) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var codeViewFlag = this.summerNoteInstance.$note.summernote('codeview.isActivated');

      if (codeViewFlag) {
        var codeMirrorElement = $('#' + this.callingComponent.id + ' .CodeMirror');

        if (codeMirrorElement.length) {
          var codeViewInstance = codeMirrorElement[0].CodeMirror;

          if (codeViewInstance) {
            if (prefix) {
              codeViewInstance.replaceSelection('{{' + prefix + '.' + data.field + '}}');
            } else {
              codeViewInstance.replaceSelection('{{' + data.field + '}}');
            }
          } else {
            showError('Error', 'codeView Instance not found');
          }
        } else {
          showError('Error', 'codeView Element not found');
        }
      } else {
        this.summerNoteInstance.$note.summernote('restoreRange'); // Important - so it inserts the text at the current cursor position

        if (prefix) {
          this.summerNoteInstance.$note.summernote('insertText', '{{' + prefix + '.' + data.field + '}}');
        } else {
          this.summerNoteInstance.$note.summernote('insertText', '{{' + data.field + '}}');
        }
      }
    },
    changeMatter: function changeMatter() {
      //this.callingComponent.displayFieldsFlag = false;
      this.callingComponent.selectMatter.selectMatter(this);
    },
    setMatterTab: function setMatterTab() {
      this.activeTab = 'Matter';
      this.tabs[0].active = true;

      for (var index = 1; index < this.tabs.length; index++) {
        this.tabs[index].active = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/reports/SelectClientReportFields.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/client/reports/SelectClientReportFields.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectClientReportFields.vue?vue&type=template&id=7b2af922& */ "./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922&");
/* harmony import */ var _SelectClientReportFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectClientReportFields.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectClientReportFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/reports/SelectClientReportFields.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectClientReportFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectClientReportFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectClientReportFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectClientReportFields_vue_vue_type_template_id_7b2af922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectClientReportFields.vue?vue&type=template&id=7b2af922& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/reports/SelectClientReportFields.vue?vue&type=template&id=7b2af922& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
      _c("div", { staticClass: "modal-dialog modal-dialog-left modal-xl" }, [
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
                staticClass: "modal-body form-tab-body p-3",
                staticStyle: { height: "75vh", "overflow-y": "auto" },
              },
              [
                _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Company",
                        expression: "activeTab === 'Company'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-company-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "ColData",
                        expression: "activeTab === 'ColData'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-coldata-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "ConveyData",
                        expression: "activeTab === 'ConveyData'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-conveydata-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "BondData",
                        expression: "activeTab === 'BondData'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-bonddata-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Properties",
                        expression: "activeTab === 'Properties'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-properties-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Party",
                        expression: "activeTab === 'Party'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-party-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Matter",
                        expression: "activeTab === 'Matter'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-matter-table" },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "Report",
                        expression: "activeTab === 'Report'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Fields")]),
                      _vm._v(" "),
                      _c("table", {
                        staticClass: "table bordered",
                        staticStyle: { "table-layout": "auto", width: "100%" },
                        attrs: { id: _vm.id + "-report-table" },
                      }),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary form-button",
                    attrs: {
                      type: "button",
                      title: "Select a different Matter",
                    },
                    on: { click: _vm.changeMatter },
                  },
                  [
                    _c("i", { staticClass: "fa fa-cog fa-lg mr-2" }),
                    _vm._v(_vm._s(_vm.matterButtonTitle)),
                  ]
                ),
              ]),
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
        _vm._v("Select a Field"),
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
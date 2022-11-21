"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feenotes-AddFeeNotes-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    AddFeeNotesTable: function AddFeeNotesTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-feenotes-AddFeeNotesTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./AddFeeNotesTable */ "./resources/js/pages/feenotes/AddFeeNotesTable.vue"));
    },
    EditFeeItemForm: function EditFeeItemForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-feenotes-EditFeeItemForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./EditFeeItemForm */ "./resources/js/pages/feenotes/EditFeeItemForm.vue"));
    },
    SearchAndReplaceModal: function SearchAndReplaceModal() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @components/modals/SearchAndReplaceModal */ "./resources/js/components/modals/SearchAndReplaceModal.vue"));
    }
  },
  data: function data() {
    return {
      table: null,
      tableId: null,
      savedTableData: [],
      replacedTextFlag: false,
      replacedText: '',
      feeItemsTable: null,
      feeItems: [],
      feeItemsFlag: false,
      selectedRows: [],
      selectedAllFlag: false
    };
  },
  mounted: function mounted() {
    this.$parent.addFeeNotes = this;
  },
  methods: {
    loadDataTable: function loadDataTable(feeItems, matter, feeItemsDate) {
      var _this2 = this;

      var _this = this;

      setTimeout(function () {
        $('#' + _this2.id + " .popover-icon").popover();
      }, 100); //if ( $.isEmptyObject(this.table.selectEmployee.record) ) {

      this.table.selectEmployee.record = {
        recordid: matter.employeeId,
        name: matter.employeename
      }; //}

      this.table.feeItemsDate = this.table.previousFeeItemsDate = feeItemsDate;
      this.tableId = this.id + '-add-fee-notes-table';
      this.savedTableData = [];
      this.selectedRows = [];
      this.selectedAllFlag = false;
      this.replacedText = '';
      this.replacedTextFlag = false;
      this.feeItemsFlag = feeItems.length;
      this.feeItems = feeItems; // this.feeItems = JSON.parse(JSON.stringify(feeItems));
      // console.log("3 this.feeItems",this.feeItems);
      //Set the table Height manually

      var $thisTable = $('#' + this.tableId);
      var $thisModalBody = $('#' + this.id + '-modal-body');
      var modalBodyOffset = $thisModalBody.offset();
      var modalBodyOffsetTop = Math.round(modalBodyOffset.top);
      var tableOffset = $thisTable.offset();
      var tableOffsetTop = Math.round(tableOffset.top);
      var modalBodyHeight = Math.round($thisModalBody.outerHeight());
      var tableSpaceAbove = tableOffsetTop - modalBodyOffsetTop;
      var tableSpaceAvailable = modalBodyHeight - tableSpaceAbove;
      var scrollY = tableSpaceAvailable - 25 + 'px';
      this.feeItemsTable = $('#' + this.tableId).DataTable({
        autoWidth: false,
        destroy: true,
        dom: "t",
        data: _this.feeItems,
        serverSide: false,
        paging: false,
        select: {
          style: 'multi',
          selector: 'td:first-child'
        },
        scrollX: true,
        responsive: false,
        scrollY: scrollY,
        scroller: false,
        scrollCollapse: false,
        rowId: 'recordid',
        ordering: false,
        order: [[0, "asc"]],
        language: {
          emptyTable: "No Fee Items found",
          processing: "",
          zeroRecords: "",
          loadingRecords: ""
        },
        initComplete: function initComplete(settings) {
          var tableId = $(this)[0].id;
          var api = this.api();
          api.table().off('user-select').on('user-select', function (e, dt, type, cell, originalEvent) {
            var rowId = $(originalEvent.target).parent().attr('id');

            if (_this.selectedRows.includes(rowId)) {
              // Need array of record id's to return from the parent Select screen
              for (var i = 0; i < _this.selectedRows.length; i++) {
                if (_this.selectedRows[i] === rowId) {
                  _this.selectedRows.splice(i, 1);
                }
              }
            } else {
              _this.selectedRows.push('' + rowId);
            } // User has tagged or untagged a row so reset the selectedAllFlag


            _this.selectedAllFlag = false;
          });
          $('#' + tableId + '_wrapper .dataTables_scrollHead thead th.select-checkbox').prop('title', 'Tag/UnTag All').off('click').on('click', function () {
            //Return if no data in the table
            if (!_this.feeItemsTable.rows().any()) return;
            _this.selectedRows = [];

            if (_this.selectedAllFlag) {
              _this.feeItemsTable.rows().deselect();
            } else {
              _this.feeItemsTable.rows().select();

              _this.selectedRows = _this.feeItemsTable.rows({
                selected: true
              }).ids().toArray();
            }

            _this.selectedAllFlag = !_this.selectedAllFlag; // Toggle the selectedAllFlag
          });
        },
        drawCallback: function drawCallback() {
          var api = this.api();
          var tableId = $(this)[0].id;
          var body = $(api.table().body());
          if (typeof body.unhighlight === 'function') body.unhighlight();

          if (_this.replacedText) {
            body.highlight(_this.replacedText);
            _this.replacedText = '';
          }

          $("." + tableId + '-units-amount-input').off('input').on('input', function () {
            var inputAmount = $(this).val();
            if (!inputAmount) return; // In case they backspace and it is blank

            var id = $(this).attr('data-id');

            var rowData = _this.feeItemsTable.row('#' + id).data();

            rowData.customUnitsAmount = rowData.unitquantity = inputAmount || '0';

            _this.updateTableUnitsDescription(rowData);

            _this.calculateRowTotals(rowData);
          });
          $("." + tableId + '-units-amount-increase').off('click').on('click', function () {
            var id = $(this).attr('data-id');

            var rowData = _this.feeItemsTable.row('#' + id).data();

            var unitsAmount = parseFloat(rowData.customUnitsAmount || rowData.unitquantity);
            unitsAmount++;
            rowData.unitquantity = rowData.customUnitsAmount = unitsAmount.toString();

            _this.updateTableAmountInput(rowData);

            _this.updateTableUnitsDescription(rowData);

            _this.calculateRowTotals(rowData);
          });
          $("." + tableId + '-units-amount-decrease').off('click').on('click', function () {
            var id = $(this).attr('data-id');

            var rowData = _this.feeItemsTable.row('#' + id).data();

            var unitsAmount = parseFloat(rowData.customUnitsAmount || rowData.unitquantity);
            unitsAmount--;
            if (unitsAmount < 0) unitsAmount = 0;
            rowData.unitquantity = rowData.customUnitsAmount = unitsAmount.toString();

            _this.updateTableAmountInput(rowData);

            _this.updateTableUnitsDescription(rowData);

            _this.calculateRowTotals(rowData);
          });
        },
        createdRow: function createdRow(row, data) {
          if (_this.selectedAllFlag) {
            $(row).addClass('selected');
          } else if ($.inArray('' + data.recordid, _this.selectedRows) !== -1) {
            $(row).addClass('selected');
          }
        },
        columnDefs: [{
          title: "",
          name: 'sorter',
          data: null,
          visible: false,
          orderable: false,
          searchable: false,
          printable: false,
          targets: 0,
          //width: "5%",
          render: function render(data) {
            return '';
          }
        }, {
          title: "",
          name: 'tag-row',
          "class": "select-checkbox text-center text-no-ellipse",
          data: null,
          visible: true,
          orderable: false,
          searchable: false,
          printable: false,
          targets: 1,
          width: "5%",
          render: function render(data) {
            return '';
          }
        }, {
          title: "Action",
          data: null,
          "class": "text-center",
          width: "10%",
          targets: 2,
          render: function render(data) {
            return '<span class="badge badge-success action-button-badge" onclick="componentFunctionById(' + _this._uid + ',\'editFeeItem\',' + data.recordid + ')"  title ="Edit this Fee Item">Edit</span>';
          }
        }, {
          title: "Date",
          name: "date",
          data: null,
          width: "12%",
          targets: 3,
          render: function render(data) {
            return data.formatteddate;
          }
        }, {
          title: "Employee",
          name: "employeename",
          data: null,
          width: "12%",
          targets: 4,
          render: function render(data) {
            return htmlDecode(data.employeename);
          }
        }, {
          title: "Description",
          name: "feeitem.description",
          data: null,
          width: "30%",
          targets: 5,
          render: function render(data) {
            return htmlDecode(data.description);
          }
        }, {
          title: "No of Units",
          width: "10%",
          filterExclude: true,
          orderable: false,
          searchable: false,
          data: null,
          targets: 6,
          render: function render(data) {
            if (data.unitsflag == '1') {
              return '<div class="input-group table-dialog-height">' + '<input type="number" min="0" value="' + data.unitquantity + '" id="' + _this.tableId + '-units-amount-input-' + data.recordid + '" data-id="' + data.recordid + '" class="table-dialog-height table-input-padding ' + _this.tableId + '-units-amount-input form-control form-control-sm form-input-number">' + '<div class="input-group-append">' + '<div class="spinner-input-group-append table-dialog-height">' + '<div><i data-id="' + data.recordid + '" class="' + _this.tableId + '-units-amount-increase arrow arrow-up cp" style="margin-top: 2px;" title="Increase amount"></i></div>' + '<div><i data-id="' + data.recordid + '" class="' + _this.tableId + '-units-amount-decrease arrow arrow-down cp" style="margin-top: -2px;" title="Decrease amount"></i></div>' + '</div>' + '</div>' + '</div>';
            } else {
              return '';
            }
          }
        }, {
          title: "Units",
          name: "feeitem.unitdescription",
          data: null,
          orderable: false,
          width: "15%",
          targets: 7,
          render: function render(data) {
            if (data.unitdescription) {
              return '<div id="' + _this.tableId + '-units-description-' + data.recordid + '">' + (data.unitquantity == 1 ? '1 ' + data.unitsingular : data.unitquantity + ' ' + data.unitplural) + ' @ ' + formatMoney(data.customAmountPerUnit ? data.customAmountPerUnit : data.amount, false).toString() + '</div>';
            } else {
              return '';
            }
          }
        }, {
          title: "Amount",
          name: "feeitem.amount",
          filterType: 'Number',
          "class": "text-number",
          data: null,
          width: "15%",
          targets: 8,
          render: function render(data) {
            return '<div id="' + _this.tableId + '-total-amount-' + data.recordid + '">' + formatMoney(data.amount, false).toString() + '</div>';
          }
        }]
      });
    },
    editFeeItem: function editFeeItem(id) {
      this.highlightTableRow(id);
      var rowData = null;
      rowData = this.feeItemsTable.row('#' + id).data();

      if (_typeof(rowData) === 'object') {
        rowData.recordid = id;
        var thisForm = this.$refs['edit-fee-item-form'];
        thisForm.table = this.$refs['add-fee-notes-table'];
        thisForm.editRecord(rowData);
      } else {
        showError('System Error', 'Fee Item (' + id + ') not found trying to Edit row');
      }
    },
    feeItemEdited: function feeItemEdited(record) {
      // Note: The record is passed by address, not value
      // So we are actually manipulating the row in the data table
      this.feeItemsTable.row('#' + record.recordid).invalidate();
      this.feeItemsTable.draw();
    },
    updateTableAmountInput: function updateTableAmountInput(rowData) {
      $("#" + this.tableId + '-units-amount-input-' + rowData.recordid).val(rowData.unitquantity);
    },
    updateTableUnitsDescription: function updateTableUnitsDescription(rowData) {
      var description = rowData.unitquantity == 1 ? '1 ' + rowData.unitsingular : rowData.unitquantity + ' ' + rowData.unitplural;
      description += ' @ ' + formatMoney(rowData.customAmountPerUnit ? rowData.customAmountPerUnit : rowData.amount, false).toString();
      $("#" + this.tableId + '-units-description-' + rowData.recordid).text(description);
    },
    calculateRowTotals: function calculateRowTotals(rowData) {
      var perUnitAmount = parseFloat(rowData.customAmountPerUnit || rowData.amount);
      rowData.customAmountPerUnit = formatDecimal(perUnitAmount).toString();
      var unitsFactor = parseFloat(rowData.customUnitsFactor || rowData.factor);
      var newAmount = perUnitAmount * parseFloat(rowData.unitquantity) / parseFloat(unitsFactor);
      rowData.amount = formatDecimal(newAmount); //let taxAmount =  newAmount * parseFloat(rowData.vatpercentage) / 100;
      //rowData.taxAmount = formatDecimal(taxAmount);
      //rowData.totalAmount = formatDecimal(newAmount + taxAmount);
      // Update the Amount

      $("#" + this.tableId + '-total-amount-' + rowData.recordid).text(formatMoney(rowData.amount, false));
    },
    highlightTableRow: function highlightTableRow(id) {
      $('#' + this.tableId + ' tbody tr.highlighted').removeClass('highlighted');
      $('#' + this.tableId + ' tbody tr#' + id).addClass('highlighted');
    },
    deleteFeeItem: function deleteFeeItem(id) {
      this.feeItemsTable.row('#' + id).remove().draw(); // Check if they might have deleted all Fee Items

      this.feeItemsFlag = this.feeItemsTable.rows().any();
    },
    deleteTaggedRecords: function deleteTaggedRecords() {
      var rows = [];
      this.selectedRows.forEach(function (id) {
        rows.push('#' + id);
      });
      this.feeItemsTable.rows(rows).remove().draw(); // Check if they might have deleted all Fee Items

      this.feeItemsFlag = this.feeItemsTable.rows().any();
    },
    searchAndReplace: function searchAndReplace() {
      var taggedRecordsFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.unHighlightTable();
      this.searchAndReplaceModal.display(taggedRecordsFlag);
    },
    searchAndReplaceOkClicked: function searchAndReplaceOkClicked(searchFor, replaceWith, taggedRecordsFlag, caseInsensitiveFlag) {
      var _this = this; //Used to highlight the replaced text


      this.replacedText = replaceWith; // Used to display the Undo button

      this.replacedTextFlag = false;
      var searchForRegEx = new RegExp(searchFor, 'g' + caseInsensitiveFlag);
      var params = taggedRecordsFlag ? {
        selected: true
      } : null; //https://stackoverflow.com/questions/7486085/copy-array-by-value

      this.savedTableData = JSON.parse(JSON.stringify(this.feeItemsTable.data().toArray())); //https://datatables.net/reference/api/rows().every()

      this.feeItemsTable.rows(params).every(function () {
        var data = this.data();
        var newDescription = data.description.replace(searchForRegEx, replaceWith); // Check to see if anything was replaced

        if (newDescription !== data.description) {
          _this.replacedTextFlag = true;
          data.description = newDescription;
          this.invalidate(); // Invalidate the data DataTables has cached for this row
        }
      });

      if (this.replacedTextFlag) {
        this.feeItemsTable.draw();
      } else {
        root.$snotify.error('"' + searchFor + '" not found');
      }
    },
    undoSearchAndReplace: function undoSearchAndReplace() {
      this.replacedTextFlag = false;
      this.feeItemsTable.clear();
      this.feeItemsTable.rows.add(this.savedTableData).draw();
      root.$snotify.success('Search & Replace undone ');
    },
    changeFeeItemsDate: function changeFeeItemsDate(newDate) {
      var params = this.selectedRows.length ? {
        selected: true
      } : null; //https://datatables.net/reference/api/rows().every()

      this.feeItemsTable.rows(params).every(function () {
        var data = this.data();
        data.formatteddate = newDate;
        data.date = convertToClarionDate(newDate);
        this.invalidate(); // Invalidate the data DataTables has cached for this row
      });
      root.$snotify.simple('Dates changed to ' + newDate, 'Updated', {
        timeout: 2000,
        icon: 'img/check.png'
      });
      this.feeItemsTable.draw();
    },
    changeAllocatedEmployee: function changeAllocatedEmployee(id, name) {
      var params = this.selectedRows.length ? {
        selected: true
      } : null; //https://datatables.net/reference/api/rows().every()

      this.feeItemsTable.rows(params).every(function () {
        var data = this.data();
        data.employeeid = id;
        data.employeename = name;
        this.invalidate(); // Invalidate the data DataTables has cached for this row
      });
      root.$snotify.simple('Allocated Employee changed to ' + name, 'Updated', {
        timeout: 2000,
        icon: 'img/check.png'
      });
      this.feeItemsTable.draw();
    },
    unHighlightTable: function unHighlightTable() {
      var body = $(this.feeItemsTable.table().body());
      if (typeof body.unhighlight === 'function') body.unhighlight();
    },
    addFeeNotes: function addFeeNotes() {
      var _this3 = this;

      this.hide();
      root.$snotify.simple('Saving the Fee Notes', 'Please wait...', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/utils/call/addFeeNotes', {
        source: 'W',
        feeItems: this.feeItemsTable.data().toArray()
      }).then(function (response) {
        root.$snotify.clear();

        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          if (_this3.$parent.table.initialOrder[0][1] == 'asc') {
            _this3.highlightRow(response.data.data[0].RecordId, {
              where: ["date,>,0", "date,<," + response.data.data[0].date],
              orderBy: ['date']
            });
          } else {
            _this3.highlightRow(response.data.data[0].RecordId, {
              where: ["date,>,0", "date,>," + response.data.data[0].date],
              orderBy: ['date']
            });
          }
        }
      })["catch"](function (error) {
        showError('Error adding Fee Notes', error);
      });
    },
    // Note: Copied from form-template
    highlightRow: function highlightRow(id, params) {
      var _this4 = this;

      axios.post('/' + this.$parent.table.tableName + '/get', _objectSpread(_objectSpread({}, params), {}, {
        whereRaw: this.$parent.table.tableFilter,
        method: 'count'
      })).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this4.$parent.table.jumpToRow(id, response.data.data);
        }
      })["catch"](function (error) {
        showError('Error getting Table Position', error);
      });
    },
    pageTitle: function pageTitle() {
      if (this.feeItems.length) {
        return this.feeItems.length === 1 ? 'Fee Note will be Added' : 'Fee Notes will be Added';
      } else {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feenotes/AddFeeNotes.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/feenotes/AddFeeNotes.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFeeNotes.vue?vue&type=template&id=6ef9be51& */ "./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51&");
/* harmony import */ var _AddFeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFeeNotes.vue?vue&type=script&lang=js& */ "./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feenotes/AddFeeNotes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFeeNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFeeNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFeeNotes_vue_vue_type_template_id_6ef9be51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFeeNotes.vue?vue&type=template&id=6ef9be51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/AddFeeNotes.vue?vue&type=template&id=6ef9be51& ***!
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
    { staticClass: "modal", attrs: { id: _vm.id } },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-dialog-centered modal-xl" },
        [
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
                  _vm._v(" "),
                  _c("span", {
                    domProps: { innerHTML: _vm._s(_vm.pageTitle()) },
                  }),
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
                  staticStyle: { height: "60vh", "overflow-y": "auto" },
                  attrs: { id: _vm.id + "-modal-body" },
                },
                [
                  _c("add-fee-notes-table", {
                    ref: "add-fee-notes-table",
                    attrs: {
                      id: _vm.id + "-add-fee-notes-form",
                      tableId: _vm.id + "-add-fee-notes-table",
                      lazyLoadFlag: true,
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
                  _c("div", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary form-button mr-3",
                        attrs: {
                          type: "button",
                          title:
                            "Search and replace text in the Fee Note descriptions",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.searchAndReplace()
                          },
                        },
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh mr-2" }),
                        _vm._v("Search & Replace\r\n                    "),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.replacedTextFlag,
                            expression: "replacedTextFlag",
                          },
                        ],
                        staticClass: "btn btn-danger form-button mr-3",
                        attrs: {
                          type: "button",
                          title:
                            "Restore the Descriptions to their previous wording",
                        },
                        on: { click: _vm.undoSearchAndReplace },
                      },
                      [
                        _c("i", { staticClass: "fa fa-recycle fa-lg mr-2" }),
                        _vm._v("Undo Search & Replace\r\n                    "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.feeItemsFlag,
                            expression: "feeItemsFlag",
                          },
                        ],
                        staticClass: "btn btn-success form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Create the Fee Notes",
                        },
                        on: { click: _vm.addFeeNotes },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("Add Fee Notes"),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Abort" },
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
        ]
      ),
      _vm._v(" "),
      _c("edit-fee-item-form", {
        ref: "edit-fee-item-form",
        attrs: {
          id: _vm.id + "-edit-fee-item-form",
          parentTableRef: "add-fee-notes-table",
          modal: true,
        },
      }),
      _vm._v(" "),
      _c("search-and-replace-modal", {
        attrs: { id: _vm.id + "-search-and-replace-modal" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
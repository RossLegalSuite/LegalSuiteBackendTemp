"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feenotes-FeeNoteForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"], _pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectCostCentre: function SelectCostCentre() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectCostCentre-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectCostCentre */ "./resources/js/pages/matters/SelectCostCentre.vue"));
    },
    SelectIncomeAccount: function SelectIncomeAccount() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectIncomeAccount-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectIncomeAccount */ "./resources/js/pages/matters/SelectIncomeAccount.vue"));
    },
    SelectDisbursementAccount: function SelectDisbursementAccount() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectDisbursementAccount-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectDisbursementAccount */ "./resources/js/pages/matters/SelectDisbursementAccount.vue"));
    },
    SelectRevenueStampAccount: function SelectRevenueStampAccount() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectRevenueStampAccount-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectRevenueStampAccount */ "./resources/js/pages/matters/SelectRevenueStampAccount.vue"));
    },
    SelectCreditor: function SelectCreditor() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectCreditor-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectCreditor */ "./resources/js/pages/matters/SelectCreditor.vue"));
    },
    SelectEmployee: function SelectEmployee() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-SelectEmployee-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/employees/SelectEmployee */ "./resources/js/pages/employees/SelectEmployee.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Fee Notes'
    },
    secProc: {
      type: String,
      "default": 'Matters - Desktop - Fee Notes'
    },
    uniqueId: String
  },
  data: function data() {
    return {
      selectedMatter: {},
      vatRates: root.vatRates,
      vatIe: [{
        value: 'E',
        label: 'Excluding'
      }, {
        value: 'I',
        label: 'Including'
      }],
      documentCodes: [{
        value: null,
        label: 'None'
      }, {
        value: 'CCJ',
        label: 'Certified Extract of Civil Judgment'
      }, {
        value: 'EMO',
        label: 'Emoluments Attachment Order'
      }, {
        value: 'IMM',
        label: 'Sale of Immovable property'
      }, {
        value: 'JUD',
        label: 'Judgement'
      }, {
        value: 'LOD',
        label: 'Letter Of Demand'
      }, {
        value: 'MOV',
        label: 'Sale of movable property'
      }, {
        value: 'R41',
        label: 'Postponed proceedings'
      }, {
        value: 'RDJ',
        label: 'Request for Default Judgment'
      }, {
        value: 'REEMO',
        label: 'Reissue Emoluments Attachment Order'
      }, {
        value: 'RES65',
        label: 'Reissue Section 65 Notice to Appear in Court'
      }, {
        value: 'RESUM',
        label: 'Reissue Summons'
      }, {
        value: 'REWRI',
        label: 'Reissue Warrant of Execution'
      }, {
        value: 'S57',
        label: 'Section 57 Consent'
      }, {
        value: 'S65',
        label: 'Section 65 Notice to Appear in Court'
      }, {
        value: 'SUM',
        label: 'Summons'
      }, {
        value: 'WOA',
        label: 'Warrant of Arrest'
      }, {
        value: 'WRI',
        label: 'Warrant of Execution'
      }],
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Transaction",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Options",
        title: "Options",
        iconClass: '',
        visible: false,
        active: false
      }, {
        pageName: "Details",
        title: "Details",
        iconClass: '',
        visible: false,
        active: false
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['currentMatter'])),
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      this.setGeneralTab();
      axios.post('/feenote/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.$refs.shortFeeNoteDescription.setReadOnly = _this.$refs.longFeeNoteDescription.setReadOnly = _this.isPosted();
        _this.$refs.feeNoteAmount.setReadOnly = _this.$refs.feeNoteAmount1.setReadOnly = _this.isPosted();

        if (_this.isPosted()) {
          _this.$refs.feeNoteVat.setLabel = 'Vat (' + root.vatRates.filter(function (record) {
            return record.value == '1';
          })[0].label + ')';
        }

        _this.selectEmployee.record = {
          recordid: _this.record.employeeid,
          name: htmlDecode(_this.record.employeename)
        };
        _this.selectMatter.matter = {
          id: _this.record.matterid,
          fileref: htmlDecode(_this.record.matterfileref),
          description: htmlDecode(_this.record.matterdescription)
        };
        _this.selectCostCentre.record = {
          recordid: _this.record.costcentreid,
          description: htmlDecode(_this.record.costcentre)
        };

        if (_this.record.type1 == 'F') {
          _this.selectIncomeAccount.record = {
            recordid: _this.record.code2,
            description: htmlDecode(root.business.filter(function (record) {
              return record.recordid == _this.record.code2;
            })[0].description)
          };
        } else if (_this.record.type1 == 'D') {
          _this.selectDisbursementAccount.record = {
            recordid: _this.record.code2,
            description: htmlDecode(root.business.filter(function (record) {
              return record.recordid == _this.record.code2;
            })[0].description)
          };
        } else if (_this.record.type == 'R') {
          _this.selectRevenueStampAccount.record = {
            recordid: _this.record.code2,
            description: htmlDecode(root.business.filter(function (record) {
              return record.recordid == _this.record.code2;
            })[0].description)
          };
        } else if (_this.record.type == 'C') {
          _this.selectCreditor.record = {
            recordid: _this.record.code2,
            description: htmlDecode(root.creditors.filter(function (record) {
              return record.recordid == _this.record.code2;
            })[0].description)
          };
        }

        _this.initFormData();
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      this.setGeneralTab();
      this.record = {
        formatteddate: moment().format(root.control.dateformat),
        employeeid: root.loggedInEmployeeId,
        matterid: this.currentMatter.recordid || null,
        costcentreid: this.record.costcentreid || null,
        code2: this.record.code2 || root.control.incomeaccid,
        description: null,
        feecodeid: 0,
        feeitemid: 0,
        documentid: 0,
        partyid: null,
        source: 'W',
        type1: this.record.type1 || 'F',
        option1: '1',
        documentcode: null,
        amount: null,
        postedflag: '0',
        unitid: 0,
        overrideincomeaccflag: 0,
        addtocolldebitflag: 0,
        vatie: this.record.vatie || root.control.feevatieoption == '1' ? 'I' : 'E'
      };
      this.setVatRate(); // if ( root.control.vatmethod == 'N' ) {
      //     this.record.vatrate = 'N';
      // } else {
      //     this.record.vatrate = '1';
      // }

      if (this.record.code2) {
        this.selectIncomeAccount.record = {
          recordid: this.record.code2,
          description: root.incomeAccounts.filter(function (record) {
            return record.recordid == _this2.record.code2;
          })[0].description
        };
      } else {
        this.selectIncomeAccount.record = {
          recordid: null,
          description: ''
        };
      }

      if (this.record.matterid) {
        // ******************************************************************
        // DO axios to get Matter and then call matterSelected() to set some defaults
        // ******************************************************************
        axios.post('/matter/get/' + this.record.matterid).then(function (response) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            _this2.matterSelected(response.data.data[0]);
          }
        })["catch"](function (error) {
          showError('Error getting Matter', error);
        });
      }

      this.selectMatter.matter = this.currentMatter.recordid ? {
        recordid: this.currentMatter.recordid,
        fileref: htmlDecode(this.currentMatter.fileref),
        description: htmlDecode(this.currentMatter.description)
      } : {
        recordid: null,
        fileref: '',
        description: ''
      };
      this.selectCostCentre.record = this.record.costcentreid ? {
        recordid: this.record.costcentreid,
        description: root.costCentres.filter(function (record) {
          return record.recordid == _this2.record.costcentreid;
        })[0].description
      } : {
        recordid: null,
        description: ''
      };
      this.selectEmployee.record = {
        recordid: root.loggedInEmployeeId,
        name: root.loggedInEmployeeName
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' textarea[name="description"]').focus();
      });
    },
    initFormData: function initFormData() {
      var optionsTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Options';
      })[0];
      optionsTab.visible = this.record.postedflag == '0' ? true : false;
      var detailsTab = this.tabs.filter(function (tab) {
        return tab.pageName === 'Details';
      })[0];
      detailsTab.visible = this.record.postedflag == '0' ? false : true;
      this.selectMatter.callingComponent = this;
      this.displayForm();
    },
    typeChanged: function typeChanged() {
      this.setVatRate();
    },
    matterSelected: function matterSelected(selectedRecord) {
      var _this3 = this;

      this.selectedMatter = selectedRecord;

      if (selectedRecord.clientfeesheetid == selectedRecord.debtorfeesheetid) {
        this.record.addtocolldebitflag = '1';
      } else {
        this.record.addtocolldebitflag = '0';
      }

      this.record.matterid = selectedRecord.recordid; // Set the Cost Centre

      if (root.loggedInEmployeeUseMatterCostCentreFlag == '1') {
        if (selectedRecord.costcentreid) {
          this.record.costcentreid = selectedRecord.costcentreid;
          this.selectCostCentre.record = {
            recordid: this.record.costcentreid,
            description: root.costCentres.filter(function (record) {
              return record.recordid == _this3.record.costcentreid;
            })[0].description
          };
        }
      } // Set the default description


      if (!this.record.description) {
        var language = root.languages.filter(function (record) {
          return record.recordid == selectedRecord.accountslanguageid;
        });

        if (language.length) {
          if (this.record.type1 == 'F') {
            this.record.description = language[0].feedescription;
          } else if (this.record.type1 == 'D' || this.record.type1 == 'R') {
            this.record.description = language[0].disbursementdescription;
          } else if (this.record.type1 == 'C') {
            this.record.description = language[0].businesscreditordescription;
          }
        }
      }

      this.setVatRate();
      this.getIncomeAccount().then(function (response) {
        _this3.record.code2 = response.recordid;
        _this3.record.overrideincomeaccflag = response.overrideincomeaccflag;
      })["catch"](function (error) {
        showError('Error getting Income Account', error);
      });
    },
    setVatRate: function setVatRate() {
      if (this.record.type1 == 'R') {
        this.record.vatrate = 'E';
      } else if (root.control.vatmethod == 'N') {
        this.record.vatrate = 'N';
      } else {
        var _this$selectedMatter;

        if (((_this$selectedMatter = this.selectedMatter) === null || _this$selectedMatter === void 0 ? void 0 : _this$selectedMatter.vatexemptflag) == '1') {
          this.record.vatrate = 'Z';
        } else {
          this.record.vatrate = '1';
        }
      }
    },
    getIncomeAccount: function getIncomeAccount() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        axios.post("/utils/getIncomeAccount", {
          matterId: _this4.record.matterid,
          employeeid: _this4.record.employeeid
        }).then(function (response) {
          if (response.data.errors) {
            reject(response.data.errors);
          } else {
            resolve({
              recordid: response.data.data.recordid,
              overrideincomeaccflag: response.data.data.overrideincomeaccflag
            });
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    hasLongDescription: function hasLongDescription() {
      var _this$record, _this$record2;

      return (_this$record = this.record) !== null && _this$record !== void 0 && _this$record.description && ((_this$record2 = this.record) === null || _this$record2 === void 0 ? void 0 : _this$record2.description.length) > 250 ? true : false;
    },
    isPosted: function isPosted() {
      var _this$record3;

      return ((_this$record3 = this.record) === null || _this$record3 === void 0 ? void 0 : _this$record3.postedflag) == '1' ? true : false;
    },
    isVatable: function isVatable() {
      var _this$record4, _this$record5, _this$record6;

      return ((_this$record4 = this.record) === null || _this$record4 === void 0 ? void 0 : _this$record4.vatrate) == '1' || ((_this$record5 = this.record) === null || _this$record5 === void 0 ? void 0 : _this$record5.vatrate) == '2' || ((_this$record6 = this.record) === null || _this$record6 === void 0 ? void 0 : _this$record6.vatrate) == '3' ? true : false;
    },
    displayIncomeAccount: function displayIncomeAccount() {
      var _this$record7;

      return ((_this$record7 = this.record) === null || _this$record7 === void 0 ? void 0 : _this$record7.type1) == 'F' ? true : false;
    },
    displayDisbursementAccount: function displayDisbursementAccount() {
      var _this$record8;

      return ((_this$record8 = this.record) === null || _this$record8 === void 0 ? void 0 : _this$record8.type1) == 'D' ? true : false;
    },
    displayRevenueStampAccount: function displayRevenueStampAccount() {
      var _this$record9;

      return ((_this$record9 = this.record) === null || _this$record9 === void 0 ? void 0 : _this$record9.type1) == 'R' ? true : false;
    },
    displayCreditors: function displayCreditors() {
      var _this$record10;

      return ((_this$record10 = this.record) === null || _this$record10 === void 0 ? void 0 : _this$record10.type1) == 'C' ? true : false;
    },
    displayCostCentre: function displayCostCentre() {
      var _this$record11, _this$record12;

      if (((_this$record11 = this.record) === null || _this$record11 === void 0 ? void 0 : _this$record11.type1) == 'F') {
        return true;
      } else if (((_this$record12 = this.record) === null || _this$record12 === void 0 ? void 0 : _this$record12.type1) == 'D' && root.control.expenditureoption != '2') {
        return true;
      } else {
        return false;
      }
    },
    okClicked: function okClicked() {
      var _this5 = this;

      var closeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.record.date = this.record.formatteddate;
      root.$snotify.simple('Please wait...', 'Saving Fee Note', {
        timeout: 10000,
        icon: 'img/cogs.gif'
      });
      axios.post('/feenote/' + (this.savedFlag ? 'update' : 'store'), this.record).then(function (response) {
        if (response.data.errors) {
          _this5.setGeneralTab();

          showError('Error', response.data.errors);
        } else {
          _this5.record.recordid = response.data.data[0].recordid;
          root.$snotify.clear();
          _this5.errors = {};

          if (!_this5.editing && !_this5.savedFlag) {
            if (_this5.table.initialOrder[0][1] == 'asc') {
              _this5.highlightRow(response.data.data[0].recordid, {
                where: ["date,>,0", "date,<," + response.data.data[0].date, "sorter,>," + response.data.data[0].sorter],
                orderBy: ['date,asc', 'sorter,asc']
              });
            } else {
              _this5.highlightRow(response.data.data[0].recordid, {
                where: ["date,>,0", "date,>," + response.data.data[0].date, "sorter,>," + response.data.data[0].sorter],
                orderBy: ['date,desc', 'sorter,asc']
              });
            }
          } else {
            _this5.table.refreshRow(response.data.data[0].recordid);
          }

          if (closeFlag) {
            _this5.closeForm();
          } else {
            _this5.savedFlag = true;
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this5.table.singular, error);
      });
    },
    canDelete: function canDelete() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        if (_this6.record.postedflag == '1') {
          reject('This Fee Note has been posted. It cannot be deleted');
        } else {
          resolve();
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeNoteForm.vue?vue&type=template&id=1bde7d31& */ "./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31&");
/* harmony import */ var _FeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeNoteForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feenotes/FeeNoteForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNoteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteForm_vue_vue_type_template_id_1bde7d31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNoteForm.vue?vue&type=template&id=1bde7d31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteForm.vue?vue&type=template&id=1bde7d31& ***!
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content feenotes-border"
              : "card h-100 border-0",
            attrs: { id: _vm.id + "-form-border" },
          },
          [
            _c(
              "div",
              {
                class: _vm.modal ? "feenotes-bg" : "card-header",
                attrs: { id: _vm.id + "-form-header" },
              },
              [
                _c(
                  "div",
                  {
                    class: _vm.modal
                      ? "modal-header"
                      : "d-flex justify-content-between",
                  },
                  [
                    _c("div", { staticClass: "page-title" }, [
                      _c("h3", [
                        _vm.isPosted()
                          ? _c("span", [_vm._v("Posted Fee Note")])
                          : !_vm.editing && !_vm.savedFlag
                          ? _c("span", [_vm._v("Fee Note will be Added")])
                          : _c("span", [_vm._v("Fee Note will be Changed")]),
                      ]),
                      _vm._v(" "),
                      _vm.modal
                        ? _c("i", {
                            staticClass:
                              "cp top-right fa fa-times-circle fa-2x text-white",
                            attrs: {
                              id: _vm.id + "-modal-close-button",
                              title: "Close this window",
                              "data-dismiss": "modal",
                            },
                          })
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    !_vm.modal
                      ? _c("page-close-button", {
                          on: { closeClicked: _vm.closeForm },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body form-tab-body overflow-auto" },
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
                        value: _vm.activeTab === "General",
                        expression: "activeTab === 'General'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c("label", [_vm._v("Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              ref: "datePickerComponent",
                              attrs: {
                                readOnly: _vm.isPosted(),
                                config: _vm.$root.datePickerOptions,
                              },
                              model: {
                                value: _vm.record.formatteddate,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "formatteddate", $$v)
                                },
                                expression: "record.formatteddate",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("select-employee", {
                          ref: _vm.uniqueId + "-select-employee",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            id: _vm.id + "-select-employee",
                            _class: "col-md-4",
                            popOver:
                              "<h4>Employee</h4>\r\n                            <p>The Employee this Fee Note is assigned to</p>",
                            label: "Employee",
                            formRef: _vm.uniqueId + "-select-employee",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-income-account", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.displayIncomeAccount(),
                              expression: "displayIncomeAccount()",
                            },
                          ],
                          ref: "feenote-form-select-income-account",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            id: _vm.id + "-select-income-account",
                            _class: "col-md-4",
                            popOver:
                              "<h4>Income Account</h4><p>The Income Account this Fee is allocated to.</p>",
                            "form-ref": "feenote-form-select-income-account",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-disbursement-account", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.displayDisbursementAccount(),
                              expression: "displayDisbursementAccount()",
                            },
                          ],
                          ref: "feenote-form-select-disbursement-account",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            id: _vm.id + "-select-disbursement-account",
                            _class: "col-md-4",
                            popOver:
                              "<h4>Disbursement Account</h4><p>The Ledger Account this Disbursement is allocated to.</p>",
                            "form-ref":
                              "feenote-form-select-disbursement-account",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-revenue-stamp-account", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.displayRevenueStampAccount(),
                              expression: "displayRevenueStampAccount()",
                            },
                          ],
                          ref: "feenote-form-select-revenue-stamp-account",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            id: _vm.id + "-select-revenue-stamp-account",
                            _class: "col-md-4",
                            popOver:
                              "<h4>Revenue Stamp Account</h4><p>The Ledger Account this Revenue Stamp is allocated to.</p>",
                            "form-ref":
                              "feenote-form-select-revenue-stamp-account",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-creditor", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.displayCreditors(),
                              expression: "displayCreditors()",
                            },
                          ],
                          ref: "feenote-form-select-creditor",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            id: _vm.id + "-select-creditor",
                            _class: "col-md-4",
                            popOver:
                              "<h4>Creditor</h4><p>The Creditor this Fee Note is allocated to.</p>",
                            "form-ref": "feenote-form-select-creditor",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("radio-buttons", {
                          attrs: {
                            popOver: "<h4>Type</h4><p>The type of Fee Note</p>",
                            popOverContainer: "#" + _vm.id,
                            _class: "col-md-12",
                            readOnly: _vm.isPosted(),
                            record: _vm.record,
                            column: "type1",
                            buttons: [
                              { value: "F", text: "Fee" },
                              { value: "D", text: "Disbursement" },
                              { value: "R", text: "Revenue Stamp" },
                              { value: "C", text: "Creditor" },
                            ],
                            name: "Type",
                            label: "Type",
                          },
                          on: { change: _vm.typeChanged },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("select-matter", {
                          ref: _vm._uid + "-feenote-form-select-matter",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            popOver:
                              "<h4>Matter</h4><p>The Matter this Fee Note is linked to.</p>",
                            id: _vm.id + "-select-matter",
                            _class: "col-md-6",
                            "form-ref":
                              _vm._uid + "-feenote-form-select-matter",
                          },
                        }),
                        _vm._v(" "),
                        _c("select-cost-centre", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.displayCostCentre(),
                              expression: "displayCostCentre()",
                            },
                          ],
                          ref: _vm._uid + "-feenote-form-select-cost-centre",
                          attrs: {
                            readOnly: _vm.isPosted(),
                            popOver:
                              "<h4>Cost Centre</h4><p>The Cost Centre this Fee Note is allocated to.</p>",
                            id: _vm.id + "-select-cost-centre",
                            _class: "col-md-6",
                            "form-ref":
                              _vm._uid + "-feenote-form-select-cost-centre",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("text-area", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.hasLongDescription(),
                              expression: "hasLongDescription()",
                            },
                          ],
                          ref: "longFeeNoteDescription",
                          attrs: {
                            _class: "col-md-12",
                            popOver:
                              "<h4>Description</h4><p>A description of the Fee Note.</p>",
                            readOnly: _vm.isPosted(),
                            rows: "4",
                            cols: "50",
                            name: "description",
                            label: "Description",
                            lookupLibraryFlag: true,
                            lookupLibraryCategory: "FeeNote Description",
                          },
                          model: {
                            value: _vm.record.description,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "description", $$v)
                            },
                            expression: "record.description",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.hasLongDescription(),
                              expression: "!hasLongDescription()",
                            },
                          ],
                          ref: "shortFeeNoteDescription",
                          attrs: {
                            _class: "col-md-12",
                            popOver:
                              "<h4>Description</h4><p>A description of the Fee Note.</p>",
                            readOnly: _vm.isPosted(),
                            name: "description",
                            label: "Description",
                            lookupLibraryFlag: true,
                            lookupLibraryCategory: "FeeNote Description",
                          },
                          model: {
                            value: _vm.record.description,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "description", $$v)
                            },
                            expression: "record.description",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.$root.control.vatmethod == "N",
                            expression: "$root.control.vatmethod == 'N'",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          ref: "feeNoteAmount1",
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Amount</h4><p>The amount of the Fee Note.</p>",
                            "input-class": "form-input-number",
                            value: _vm.isPosted()
                              ? _vm.$root.formatMoney(_vm.record.amount)
                              : _vm.record.amount,
                            label: "Amount",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.$root.control.vatmethod != "N",
                            expression: "$root.control.vatmethod != 'N'",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isPosted(),
                              expression: "!isPosted()",
                            },
                          ],
                          ref: "feeNoteAmount",
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Amount</h4><p>The amount of the Fee Note.</p>",
                            "input-class": "form-input-number",
                            label: "Amount",
                          },
                          model: {
                            value: _vm.record.amount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "amount", $$v)
                            },
                            expression: "record.amount",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isPosted(),
                              expression: "isPosted()",
                            },
                          ],
                          ref: "feeNoteAmount",
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Amount</h4><p>The amount of the Fee Note.</p>",
                            "input-class": "form-input-number",
                            value: _vm.$root.formatMoney(_vm.record.amount),
                            label: "Amount",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isPosted(),
                              expression: "isPosted()",
                            },
                          ],
                          ref: "feeNoteVat",
                          attrs: {
                            popOver:
                              "<h4>Vat Amount</h4><p>The Vat applied to this Fee Note.</p>",
                            _class: "col-md-4",
                            "input-class": "form-input-number",
                            readOnly: true,
                            value: _vm.$root.formatMoney(_vm.record.vatamount),
                            label: "Vat",
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
                                value: !_vm.isPosted(),
                                expression: "!isPosted()",
                              },
                            ],
                            staticClass: "col-md-4",
                          },
                          [
                            _c("label", [_vm._v("Vat Rate")]),
                            _vm._v(" "),
                            _c("pop-over", {
                              attrs: {
                                container: "#" + _vm.id,
                                content:
                                  "<h4>Vat Rate</h4><p>The Vat Rate that applies to this Fee Note.</p>",
                              },
                            }),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                "append-to-body": "",
                                "calculate-position": _vm.$root.popUp,
                                options: _vm.vatRates,
                                clearable: false,
                                searchable: false,
                                reduce: function (vatRates) {
                                  return vatRates.value
                                },
                              },
                              model: {
                                value: _vm.record.vatrate,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "vatrate", $$v)
                                },
                                expression: "record.vatrate",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.isPosted() && _vm.isVatable(),
                                expression: "!isPosted() && isVatable()",
                              },
                            ],
                            staticClass: "col-md-4",
                          },
                          [
                            _c("label", [_vm._v("Inc/Excl Vat")]),
                            _vm._v(" "),
                            _c("pop-over", {
                              attrs: {
                                container: "#" + _vm.id,
                                content:
                                  "<h4>Vat Inc/Excl</h4><p>Specify whether the Amount includes or excludes Vat.</p>",
                              },
                            }),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                "append-to-body": "",
                                "calculate-position": _vm.$root.popUp,
                                options: _vm.vatIe,
                                clearable: false,
                                searchable: false,
                                reduce: function (vatIe) {
                                  return vatIe.value
                                },
                              },
                              model: {
                                value: _vm.record.vatie,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "vatie", $$v)
                                },
                                expression: "record.vatie",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
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
                        value: _vm.activeTab === "Options",
                        expression: "activeTab === 'Options'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-xxl-6" }, [
                        _c("fieldset", [
                          _c("legend", [_vm._v("Sundry")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Voucher</h4><p>A reference for this Fee Note (if applicable).</p>\r\n                                        <p>Note: This is an optional field.</p>",
                                  label: "Voucher",
                                  readOnly: _vm.isPosted(),
                                },
                                model: {
                                  value: _vm.record.voucher,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "voucher", $$v)
                                  },
                                  expression: "record.voucher",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", [_vm._v("Document Code")]),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    container: "#" + _vm.id,
                                    content:
                                      "<h4>Document Code</h4><p>Fee Notes that are added to the Debtors Account can have a Document Code which indicates on which document the Fee appears as a Cost.</p>\r\n                                            <p>You can select the Document on which this debit must appear or select None if it is a general cost unrelated to a specific Document.</p>",
                                  },
                                }),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.documentCodes,
                                    clearable: false,
                                    searchable: false,
                                    reduce: function (documentCodes) {
                                      return documentCodes.value
                                    },
                                  },
                                  model: {
                                    value: _vm.record.documentcode,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "documentcode", $$v)
                                    },
                                    expression: "record.documentcode",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xxl-6 mt-xl-3 mt-xxl-0" }, [
                        _c("fieldset", [
                          _c("legend", [_vm._v("Actions")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", {
                                  staticStyle: {
                                    "margin-bottom": "0.6rem !important",
                                  },
                                  domProps: {
                                    textContent: _vm._s("Debtors Account"),
                                  },
                                }),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Add Fee Note to Debtors Account</h4>\r\n                                        <p>Add the Fee Note as a Cost in the Matter's Debtors Account.</p>\r\n                                        ",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-add-to-debtors-account",
                                      name: "addToCollDebitFlag",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    model: {
                                      value: _vm.record.addtocolldebitflag,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.record,
                                          "addtocolldebitflag",
                                          $$v
                                        )
                                      },
                                      expression: "record.addtocolldebitflag",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                            Add Fee Note to Debtors Account\r\n                                        "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", {
                                  staticStyle: {
                                    "margin-bottom": "0.6rem !important",
                                  },
                                  domProps: { textContent: _vm._s("Invoice") },
                                }),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Do Not Combine</h4>\r\n                                        <p>Do not combine this Fee Note with other items on an Invoice.</p>\r\n                                        <p>This item will appear as a separate entry.</p>\r\n                                        ",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-do-not-combine",
                                      name: "doNotCombine",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    model: {
                                      value: _vm.record.donotcombineflag,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.record,
                                          "donotcombineflag",
                                          $$v
                                        )
                                      },
                                      expression: "record.donotcombineflag",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                            Do not combine this Fee Note\r\n                                        "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("label", {
                                  staticStyle: {
                                    "margin-bottom": "0.6rem !important",
                                  },
                                  domProps: { textContent: _vm._s("Posting") },
                                }),
                                _vm._v(" "),
                                _c("pop-over", {
                                  attrs: {
                                    content:
                                      "\r\n                                        <h4>Prevent Posting</h4>\r\n                                        <p>If this option is <strong>selected</strong>, the Fee Note will not be posted to Accounting.</p>\r\n                                        <p>If <strong>unselected</strong>, the Fee Note will be able to be posted to Accounting.</p>\r\n                                        ",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-on-hold",
                                      name: "onhold",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    model: {
                                      value: _vm.record.onhold,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.record, "onhold", $$v)
                                      },
                                      expression: "record.onhold",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                            Put Fee Note On Hold\r\n                                        "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
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
                        value: _vm.activeTab === "Details",
                        expression: "activeTab === 'Details'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-xxl-6" }, [
                        _c("fieldset", [
                          _c("legend", [_vm._v("General")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Voucher</h4><p>The reference used for this Fee Note.</p>",
                                  label: "Voucher",
                                  readOnly: true,
                                },
                                model: {
                                  value: _vm.record.voucher,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "voucher", $$v)
                                  },
                                  expression: "record.voucher",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Source</h4><p>The application or process that created the Fee Note.</p>",
                                  label: "Source",
                                  readOnly: true,
                                },
                                model: {
                                  value: _vm.record.sourcedescription,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.record,
                                      "sourcedescription",
                                      $$v
                                    )
                                  },
                                  expression: "record.sourcedescription",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xxl-6 mt-xl-3 mt-xxl-0" }, [
                        _c("fieldset", [
                          _c("legend", [_vm._v("Posting Details")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Date</h4><p>The date the Fee Note was posted.</p>",
                                  label: "Date",
                                  readOnly: true,
                                },
                                model: {
                                  value: _vm.record.formattedposteddate,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.record,
                                      "formattedposteddate",
                                      $$v
                                    )
                                  },
                                  expression: "record.formattedposteddate",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Batch Number</h4><p>The Batch that contains the posted Fee.</p>",
                                  label: "Batch No",
                                  readOnly: true,
                                },
                                model: {
                                  value: _vm.record.postedbatchid,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "postedbatchid", $$v)
                                  },
                                  expression: "record.postedbatchid",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-8",
                                  popOver:
                                    "<h4>Posted By</h4><p>The Employee who posted the Batch.</p>",
                                  label: "Posted By",
                                  readOnly: true,
                                },
                                model: {
                                  value: _vm.record.postedemployee,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "postedemployee", $$v)
                                  },
                                  expression: "record.postedemployee",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
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
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editing && !_vm.isPosted(),
                        expression: "editing && !isPosted()",
                      },
                    ],
                    staticClass: "btn btn-primary form-button mr-3",
                    attrs: { type: "button" },
                    on: { click: _vm.deleteClicked },
                  },
                  [_vm._m(0)]
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                !_vm.isPosted()
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-yellow form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Save the Item and continue editing",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(false)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-square fa-lg mr-2",
                        }),
                        _vm._v("Save"),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isPosted()
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success form-button mr-3",
                        attrs: {
                          type: "button",
                          title: "Save the Item and close the Window",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.okClicked(true)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-check-circle fa-lg mr-2",
                        }),
                        _vm._v("OK"),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.savedFlag || _vm.editing
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Close this screen" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Close"),
                      ]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-danger form-button",
                        attrs: { type: "button", title: "Exit without saving" },
                        on: { click: _vm.closeForm },
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times-circle fa-lg mr-2",
                        }),
                        _vm._v("Cancel"),
                      ]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Delete this Fee Note" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
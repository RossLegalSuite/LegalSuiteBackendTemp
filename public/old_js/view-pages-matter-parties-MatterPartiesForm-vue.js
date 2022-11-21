"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matter-parties-MatterPartiesForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _pages_extra_screen_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/extra-screen-template */ "./resources/js/pages/extra-screen-template.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_2__["default"], _pages_extra_screen_template__WEBPACK_IMPORTED_MODULE_3__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectParty: function SelectParty() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParty-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParty */ "./resources/js/pages/parties/SelectParty.vue"));
    },
    SelectPartyRole: function SelectPartyRole() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyRole-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyRole */ "./resources/js/pages/parties/SelectPartyRole.vue"));
    },
    SelectDefaultLanguage: function SelectDefaultLanguage() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectLanguage-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectLanguage */ "./resources/js/pages/matters/SelectLanguage.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'MatParty'
    }
  },
  data: function data() {
    return {
      parentMatter: {},
      role: {
        id: null,
        description: null
      },
      party: {},
      matter: {},
      formTitle: '',
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['currentMatter', 'currentParty'])),
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Extra") {
        this.showExtraScreens();
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)(['setCurrentParty', 'setCurrentMatter'])), {}, {
    editRecord: function editRecord(id) {
      var _this2 = this;

      this.setGeneralTab();
      axios.post("/matparty/get/" + id).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this2.record = response.data.data[0];

          _this2.setCurrentParty({
            id: _this2.record.partyid,
            code: _this2.record.partymatterprefix,
            name: _this2.record.partyname
          });

          _this2.setCurrentMatter(_this2.record);

          _this2.role = {
            recordid: _this2.record.roleid,
            description: htmlDecode(_this2.record.roledescription)
          };

          _this2.displayForm();

          _this2.initFormData(); // These are needed to evaluate the Extra Screens


          _this2.getMatter();

          _this2.getParty();

          setTimeout(function () {
            return $('#' + _this2.id + ' input[name="reference"]').focus();
          });
        }
      })["catch"](function (error) {
        showError('Error getting Matter Party', error);
      });
    },
    initNewRecord: function initNewRecord() {
      this.setGeneralTab();
      this.record = {
        matterid: this.parentMatter.id,
        partyid: null,
        languageid: root.control.defaultlanguageid,
        roleid: this.record.roleid ? this.record.roleid : null,
        sorter: 0,
        reference: ''
      };
      this.role = {
        id: null,
        description: null
      };
      this.displayForm();
      this.initFormData();
    },
    initFormData: function initFormData() {
      this.setPartyDropdown();
      this.setPartyRoleDropdown();
      this.setDefaultLanguageDropdown();
      this.initExtraScreens();
    },
    setPartyDropdown: function setPartyDropdown() {
      this.selectParty.setReadOnly = !this.showDeleteButton();
      this.selectParty.partyName = this.record.partyname ? this.record.partyname : '';
    },
    setPartyRoleDropdown: function setPartyRoleDropdown() {
      var _this3 = this;

      this.selectPartyRole.setReadOnly = !this.showDeleteButton();

      if (this.record.roleid) {
        var data = root.partyRoles.filter(function (role) {
          return role.recordid == _this3.record.roleid;
        })[0];

        if (data !== null && data !== void 0 && data.recordid) {
          this.selectPartyRole.record = {
            recordid: data.recordid,
            description: htmlDecode(data.description)
          };
        } else {
          showError('Error', 'Party Role (' + this.record.roleid + ') not found');
        }
      } else {
        this.selectPartyRole.record = {
          recordid: null,
          description: ''
        };
      }
    },
    getMatter: function getMatter() {
      var _this4 = this;

      axios.post("/matter/get/" + this.record.matterid).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this4.matter = response.data.data[0];
        }
      })["catch"](function (error) {
        showError('Error getting the Matter for the MatParty', error);
      });
    },
    getParty: function getParty() {
      var _this5 = this;

      axios.post("/party/get/" + this.record.partyid).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this5.party = response.data.data[0];
        }
      })["catch"](function (error) {
        showError('Error getting the Party for the MatParty', error);
      });
    },
    setGeneralTab: function setGeneralTab() {
      this.activeTab = 'General';
      this.tabs[0].active = true;

      for (var index = 1; index < this.tabs.length; index++) {
        this.tabs[index].active = false;
        this.tabs[index].visible = this.editing ? true : false;
      }
    },
    setDefaultLanguageDropdown: function setDefaultLanguageDropdown() {
      var _this6 = this;

      // Fix for bad data
      if (!this.record.languageid || this.record.languageid == '0') {
        this.record.languageid = root.control.defaultlanguageid;
      }

      var data = root.languages.filter(function (language) {
        return language.recordid == _this6.record.languageid;
      })[0];

      if (data !== null && data !== void 0 && data.recordid) {
        this.selectDefaultLanguage.record = {
          recordid: data.recordid,
          description: htmlDecode(data.description)
        };
      } else {
        showError('Error', 'Party Default Language (' + this.record.defaultlanguageid + ') not found');
      }
    },
    showDeleteButton: function showDeleteButton() {
      var returnValue = true;

      if (!this.editing) {
        returnValue = false;
      } else if (this.record.roleid == root.control.clientroleid && parseInt(this.record.sorter) == 1) {
        returnValue = false;
      }

      return returnValue;
    },
    generateDocument: function generateDocument() {
      this.generateDocumentsSource = 'MatParty';
      root.selectTemplates.load(this, 'Document', this.generateDocumentsSource);
    },
    templatesSelected: function templatesSelected(id) {
      this.selectedRows = [this.record.recordid];
      primeGenerateDocumentPreviewer(this, id);
    },
    emailParty: function emailParty() {
      // This is in common.js
      emailThisMatParty(this.record.recordid, true);
    },
    partyRoleSelected: function partyRoleSelected(id, description, roleScrnFlag, roleScrnId) {
      this.record.roleid = id;
      this.role = {
        recordid: id,
        description: htmlDecode(description)
      };
    },
    defaultLanguageSelected: function defaultLanguageSelected(id, description) {
      this.record.languageid = id;
      this.selectDefaultLanguage.record = {
        recordid: id,
        description: htmlDecode(description)
      };
    },
    okClicked: function okClicked() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var requiredField, checkSorter;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this7.record.partyid) {
                  _context.next = 5;
                  break;
                }

                showError('No Party selected', 'Please select a Party');
                return _context.abrupt("return");

              case 5:
                if (_this7.record.roleid) {
                  _context.next = 8;
                  break;
                }

                showError('No Role selected', 'Please select a Role');
                return _context.abrupt("return");

              case 8:
                if (!_this7.extraScreensVisibleFlag) {
                  _context.next = 17;
                  break;
                }

                _context.next = 11;
                return _this7.checkExtraScreenRequiredFields();

              case 11:
                requiredField = _context.sent;

                if (!requiredField) {
                  _context.next = 15;
                  break;
                }

                _this7.setExtraScreenTab();

                return _context.abrupt("return");

              case 15:
                _context.next = 17;
                return _this7.checkExtraWriteBackFields();

              case 17:
                root.$snotify.simple('Please wait...', 'Saving Party', {
                  timeout: 10000,
                  icon: 'img/cogs.gif'
                });
                _context.prev = 18;

                if (!_this7.editing) {
                  _context.next = 26;
                  break;
                }

                _context.next = 22;
                return axios.post("/matter_parties/checkSorter", _this7.record);

              case 22:
                checkSorter = _context.sent;
                _this7.record.sorter = checkSorter.data;
                _context.next = 27;
                break;

              case 26:
                _this7.record.sorter = _this7.countRoles() + 1;

              case 27:
                axios.post("/matparty/store", _this7.record).then(function (response) {
                  if (response.data.errors) {
                    root.$snotify.clear();
                    showError('Error', response.data.errors);
                  } else {
                    _this7.errors = {}; //console.log("Saved MatParty response.data.data",response.data.data);

                    _this7.saveExtraScreens(); //Only does it if the user has clicked on the Extra Screen Tab


                    if (_this7.editing) {
                      _this7.table.table.ajax.reload(function () {
                        //this.table.clientRoleExists = this.checkIfClientRoleExists();
                        _this7.highlightTableRow(response.data.data[0].recordid, response.data.data[0].matterid, _this7.role.description, response.data.data[0].sorter);
                      });
                    } else {
                      _this7.highlightTableRow(response.data.data[0].recordid, response.data.data[0].matterid, _this7.role.description, response.data.data[0].sorter);
                    }

                    root.$snotify.clear();
                  }
                })["catch"](function (error) {
                  throw error;
                });
                _context.next = 34;
                break;

              case 30:
                _context.prev = 30;
                _context.t0 = _context["catch"](18);
                root.$snotify.clear();
                showError('Error saving Party', _context.t0);

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[18, 30]]);
      }))();
    },
    highlightTableRow: function highlightTableRow(recordId, matterId, roleDescription, sorter) {
      var _this8 = this;

      axios.post('/matter_parties/getTablePosition', {
        recordId: recordId,
        matterId: matterId,
        roleDescription: roleDescription,
        sorter: sorter
      }).then(function (response) {
        if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this8.table.jumpToRow(recordId, response.data.data);

          _this8.hide();
        }
      })["catch"](function (error) {
        showError('Error getting Matter Party Table Position', error);
      });
    },
    countRoles: function countRoles() {
      var countRoles = 0;

      var _this = this;

      this.table.table.rows().every(function () {
        var thisRow = this.data();
        if (parseInt(thisRow.roleid) === parseInt(_this.record.roleid)) countRoles++;
      });
      return countRoles;
    },
    moveMatterPartyUp: function moveMatterPartyUp(id) {
      var _this9 = this;

      axios.post("/matter_parties/move-up", {
        recordId: id
      }).then(function (response) {
        console.log("move-up response", response);

        if (response.data.error) {
          showError('Error Moving Matter Party', response.data.error);
        } else {
          if (!_this9.table) _this9.setTableComponent();

          _this9.table.table.ajax.reload(function () {
            $('#' + _this9.table.tableId + ' tbody tr.highlighted').removeClass('highlighted');
            $('#' + _this9.table.tableId + ' tbody tr#' + id).addClass('highlighted');
          });
        }
      });
    },
    checkIfClientRoleExists: function checkIfClientRoleExists() {
      if (!this.table) this.setTableComponent();
      var clientRoleExists = false;

      var _this = this;

      this.table.table.rows().every(function (index) {
        var thisRow = this.data();
        if (parseInt(thisRow.roleid) === parseInt(root.control.clientroleid)) clientRoleExists = true;
      });
      return clientRoleExists;
    },
    pageTitle: function pageTitle() {
      if (this.editing) {
        var _this$party;

        return (_this$party = this.party) === null || _this$party === void 0 ? void 0 : _this$party.name;
      } else {
        return 'Party will be Added';
      }
    },
    pageSubTitle: function pageSubTitle() {
      if (!this.modal && this.editing) {
        if (this.selectPartyRole && this.selectPartyRole.record && this.selectMatter && this.selectMatter.matter) {
          return '<strong>' + this.selectPartyRole.record.description + ':</strong> ' + this.selectMatter.matter.matter;
        } else {
          return '';
        }
      } else {
        return '';
      }
    },
    matterPopOverText: function matterPopOverText() {
      var returnValue = '<h4>Matter</h4><p>The Matter this Party is linked to.</p>';

      if (this.editing && this.role.recordid && root.control.clientroleid === this.role.recordid) {
        returnValue += '<p><strong>Note:</strong> You cannot change the Client of a Matter.</p>';
      }

      return returnValue;
    },
    partyPopOverText: function partyPopOverText() {
      var returnValue = "<h4>Party</h4><p>A Matter can have a number of Parties linked to it who play different Roles on the Matter.</p>\n                                        <p>For example, besides a Client, another Party may be the Defendant on the Matter and another Party may be a Witness.</p>\n                                        <p><strong>Hint:</strong> If the Client is a jusristic Entity (such as a company), it can be useful to add someone within the organization with the Role of <em>Contact Person</em> so you can generate Correspondence addressed to this person (who is acting on behalf of the Company).</p>";

      if (this.editing && this.role && root.control.clientroleid === this.role.recordid) {
        returnValue += '<p><strong>Note:</strong> You cannot change the Client of a Matter.</p>';
      }

      return returnValue;
    },
    partyRolePopOverText: function partyRolePopOverText() {
      var returnValue = "<h4>Party's Role</h4>\n            <p>Specify the Role the Party plays on this Matter.</p>\n            <p>A Party can play <em>more than one Role</em> on a Matter.</p>\n            <p>For example, the Client can also be the Plaintiff in a Matter as well as a Witness. In this case, the same Party will play 3 <em>Roles</em> on the Matter - Client, Plaintiff and Witness.</p>";

      if (this.editing && this.role && root.control.clientroleid === this.role.recordid) {
        returnValue += '<p><strong>Note:</strong> You cannot change the Client of a Matter.</p>';
      }

      return returnValue;
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesForm.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterPartiesForm.vue?vue&type=template&id=7483ab59& */ "./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59&");
/* harmony import */ var _MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterPartiesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matter-parties/MatterPartiesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesForm_vue_vue_type_template_id_7483ab59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesForm.vue?vue&type=template&id=7483ab59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesForm.vue?vue&type=template&id=7483ab59& ***!
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content matter-parties-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header matter-parties-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", { staticClass: "modal-title" }, [
                      !_vm.editing
                        ? _c("span", [_vm._v("Party will be Added")])
                        : _c("span", {
                            domProps: { innerHTML: _vm._s(_vm.pageTitle()) },
                          }),
                    ]),
                    _vm._v(" "),
                    _c("h6", {
                      staticClass: "mb-0",
                      domProps: { innerHTML: _vm._s(_vm.pageSubTitle()) },
                    }),
                    _vm._v(" "),
                    _vm.modal
                      ? _c("i", {
                          staticClass:
                            "cp top-right fa fa-times-circle fa-2x text-white",
                          attrs: {
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
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body form-tab-body overflow-auto p-3",
                style: _vm.modal ? "height:65vh" : "",
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
                        _c("select-party", {
                          ref: _vm.id + "-select-party",
                          attrs: {
                            popOver: _vm.partyPopOverText(),
                            popOverContainer: "#" + _vm.id,
                            id: _vm.id + "-select-party",
                            formRef: _vm.id + "-select-party",
                            _class: "col-md-8",
                            error: _vm.errors.party,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _vm.errors.matterid
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                innerHTML: _vm._s(_vm.errors.matterid[0]),
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.sorter
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                innerHTML: _vm._s(_vm.errors.sorter[0]),
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.partyid
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                innerHTML: _vm._s(_vm.errors.partyid[0]),
                              },
                            })
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("select-party-role", {
                          ref: _vm.id + "-select-party-role",
                          attrs: {
                            popOver: _vm.partyRolePopOverText(),
                            popOverContainer: "#" + _vm.id,
                            readOnly:
                              _vm.editing &&
                              _vm.role.recordid &&
                              _vm.$root.control.clientroleid ===
                                _vm.role.recordid
                                ? true
                                : false,
                            id: _vm.id + "-select-party-role",
                            formRef: _vm.id + "-select-party-role",
                            _class: "col-md-6",
                            error: _vm.errors.party,
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
                            _class: "col-md-4",
                            popOver:
                              "<h4>Their Reference</h4><p>A Party may have their own reference for a Matter. If so, you can add it here and then use it as <em>their reference</em> in correspondence with them regarding this Matter.</p>",
                            popOverContainer: "#" + this.id,
                            name: "reference",
                            label: "Their Reference",
                          },
                          model: {
                            value: _vm.record.reference,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "reference", $$v)
                            },
                            expression: "record.reference",
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
                        _c("select-default-language", {
                          ref: _vm.id + "-select-language",
                          attrs: {
                            popOver:
                              "<h4>Default Language</h4>\r\n                            <p>The preferred language of this Party.</p>",
                            callback: "defaultLanguageSelected",
                            parentName: "selectDefaultLanguage",
                            label: "Language",
                            _class: "col-xxl-8 mt-3 mt-xxl-0",
                            id: _vm.id + "-select-language",
                            "form-ref": _vm.id + "-select-language",
                            error: _vm.errors.languageid,
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
                              "<h4>Matter Description</h4><p>You can give each Party a custom Matter Description so that it is more meaningful to them when used in correspondence to the Party.</p>",
                            popOverContainer: "#" + this.id,
                            name: "matterdescription",
                            label: "Matter Description",
                          },
                          model: {
                            value: _vm.record.matterdescription,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "matterdescription", $$v)
                            },
                            expression: "record.matterdescription",
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
                            value:
                              _vm.editing &&
                              _vm.role.recordid &&
                              (_vm.role.recordid ==
                                _vm.$root.control.defendantroleid ||
                                _vm.role.recordid ==
                                  _vm.$root.control.plaintiffroleid),
                            expression:
                              "editing && role.recordid && (role.recordid == $root.control.defendantroleid || role.recordid == $root.control.plaintiffroleid)",
                          },
                        ],
                        staticClass: "row mt-3",
                      },
                      [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("fieldset", [
                            _c("legend", [_vm._v("Nomine Officio")]),
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
                                      textContent: _vm._s("Nomine Officio?"),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("pop-over", {
                                    attrs: {
                                      content:
                                        "<h4>Nomine Officio</h4><p>This Party is representing another legal entity or person, i.e they are not acting in their personal capacity.</p>",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: _vm.id + "-no-flag",
                                        name: "noFlag",
                                        value: "1",
                                        "unchecked-value": "0",
                                        switch: "",
                                        size: "lg",
                                      },
                                      model: {
                                        value: _vm.record.noflag,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.record, "noflag", $$v)
                                        },
                                        expression: "record.noflag",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                            This Party is representing another legal entity\r\n                                        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Capacity</h4><p>The capacity they are acting as (e.g. Trustee/ Curator).</p>",
                                    name: "nocapacity",
                                    label: "Capacity",
                                  },
                                  model: {
                                    value: _vm.record.nocapacity,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "nocapacity", $$v)
                                    },
                                    expression: "record.nocapacity",
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
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Principal</h4><p>The Principal they are acting on behalf of (e.g. The ABC Trust).</p>",
                                    name: "noprincipal",
                                    label: "Principal",
                                  },
                                  model: {
                                    value: _vm.record.noprincipal,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "noprincipal", $$v)
                                    },
                                    expression: "record.noprincipal",
                                  },
                                }),
                              ],
                              1
                            ),
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
                            value:
                              _vm.editing &&
                              _vm.role.recordid &&
                              _vm.role.recordid ==
                                _vm.$root.control.suretyroleid,
                            expression:
                              "editing && role.recordid && role.recordid == $root.control.suretyroleid",
                          },
                        ],
                        staticClass: "row mt-3",
                      },
                      [
                        _c("div", { staticClass: "col-lg-8" }, [
                          _c("fieldset", [
                            _c("legend", [_vm._v("Surety Details")]),
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
                                      textContent: _vm._s("Unlimited?"),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("pop-over", {
                                    attrs: {
                                      content:
                                        "<h4>Unlimited Security</h4><p>The Surety is not limited to a specific amount.</p>",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: _vm.id + "-surety-unlimited-flag",
                                        name: "suretyunlimitedflag",
                                        value: "1",
                                        "unchecked-value": "0",
                                        switch: "",
                                        size: "lg",
                                      },
                                      model: {
                                        value: _vm.record.suretyunlimitedflag,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.record,
                                            "suretyunlimitedflag",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "record.suretyunlimitedflag",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                            The Surety is not limited to a specific amount\r\n                                        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.record.suretyunlimitedflag &&
                                      _vm.record.suretyunlimitedflag != "1",
                                    expression:
                                      "record.suretyunlimitedflag && record.suretyunlimitedflag != '1'",
                                  },
                                ],
                                staticClass: "form-group row",
                              },
                              [
                                _c("text-input", {
                                  attrs: {
                                    _class: "col-md-8",
                                    popOver:
                                      "<h4>Surety Amount</h4>\r\n                                        <p>The Amount of the Surety</p>",
                                    label: "Amount",
                                    type: "number",
                                    "input-class": "form-input-number",
                                    name: "suretyamount",
                                    title: "The Amount of the Surety",
                                    error: _vm.errors.suretyamount,
                                  },
                                  model: {
                                    value: _vm.record.suretyamount,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.record, "suretyamount", $$v)
                                    },
                                    expression: "record.suretyamount",
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
                                  attrs: {
                                    _class: "col-md-12",
                                    popOver:
                                      "<h4>Security Details</h4>\r\n                                    <p>A description of any security linked to this suretyship</p>",
                                    rows: "6",
                                    cols: "50",
                                    name: "suretysecurity",
                                    label: "Security Details",
                                    error: _vm.errors.suretysecurity,
                                  },
                                  model: {
                                    value: _vm.record.suretysecurity,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.record,
                                        "suretysecurity",
                                        $$v
                                      )
                                    },
                                    expression: "record.suretysecurity",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
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
                        value: _vm.activeTab === "Extra",
                        expression: "activeTab === 'Extra'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  _vm._l(_vm.extraScreens, function (extraScreen, index) {
                    return _c(
                      "fieldset",
                      {
                        key: extraScreen.recordid,
                        class:
                          index > 0
                            ? "mt-3 extra-screen-container"
                            : "extra-screen-container",
                      },
                      [
                        _c("legend", {
                          domProps: {
                            innerHTML: _vm._s(
                              extraScreen.screentitle +
                                " (" +
                                extraScreen.recordid +
                                ")"
                            ),
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            attrs: {
                              id:
                                "extra-screen-form-container-" +
                                extraScreen.recordid,
                            },
                          },
                          [
                            _c("form", {
                              attrs: {
                                action: "#",
                                id: "extra-screen-form-" + extraScreen.recordid,
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  }),
                  0
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _vm.activeTab == "General" &&
                _vm.editing &&
                _vm.showDeleteButton()
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-large btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.deleteClicked },
                      },
                      [_vm._m(0)]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab == "General" && _vm.editing,
                        expression: "activeTab == 'General' && editing",
                      },
                    ],
                    staticClass: "btn btn-large btn-danger mr-2",
                    attrs: { type: "button" },
                    on: { click: _vm.emailParty },
                  },
                  [_vm._m(1)]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab == "General" && _vm.editing,
                        expression: "activeTab == 'General' && editing",
                      },
                    ],
                    staticClass: "btn btn-large btn-secondary",
                    attrs: { type: "button" },
                    on: { click: _vm.generateDocument },
                  },
                  [_vm._m(2)]
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success form-button mr-3",
                    attrs: { type: "button", title: "Save" },
                    on: { click: _vm.okClicked },
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
                    _vm._v("OK"),
                  ]
                ),
                _vm._v(" "),
                _vm._m(3),
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
    return _c("span", { attrs: { title: "Delete" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Send an Email to this Party" } }, [
      _c("i", { staticClass: "fa fa-envelope-o fa-lg mr-2" }),
      _vm._v("Email"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { attrs: { title: "Generate a Document for this Party" } },
      [_c("i", { staticClass: "fa fa-cog fa-lg mr-2" }), _vm._v("Document")]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
    )
  },
]
render._withStripped = true



/***/ })

}]);
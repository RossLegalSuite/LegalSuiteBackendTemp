"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matter-parties-MatterPartiesLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _left_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../left-template */ "./resources/js/pages/left-template.js");


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": _left_template__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    MatterPartiesTable: function MatterPartiesTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-matter-parties-MatterPartiesTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MatterPartiesTable */ "./resources/js/pages/matter-parties/MatterPartiesTable.vue"));
    }
  },
  data: function data() {
    return {
      pageName: "MatterParties",
      selectedRows: [],
      selectedAllFlag: false,
      tableMounted: false,
      selectedMatter: {},
      generateDocumentsFlag: true,
      generateDocumentsSource: 'MatParty',
      generateDocumentsPlural: 'Parties'
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['leftTabs', 'activeLeftTabs', 'currentMatter'])),
  watch: {
    tableMounted: function tableMounted() {
      this.initializeTable();
    }
  },
  activated: function activated() {
    if ($('#matter-parties-table').length) {
      var scrollTop = $('#matter-parties-table' + '_wrapper .dataTables_scrollBody').offset().top;
      var tableTop = $('#matter-parties-table').offset().top;
      if (tableTop > scrollTop) this.table.table.ajax.reload();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var thisTab = this.leftTabs.filter(function (tab) {
      return tab.pageName === _this.pageName;
    });
    if (thisTab.length) this.displayLeftTab(thisTab[0]);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapMutations)(['displayLeftTab', 'hideLeftTab'])), {}, {
    initializeTable: function initializeTable() {
      var _this2 = this;

      //this.table.initialOrder = [[1, "asc"]];
      this.table.tableOptions = {
        tableBottom: 80
      }; // Used to lazy load the Form (and all its sub components) on the right

      this.table.loadDataTable(function () {
        _this2.$root.matterPartiesLeftTableLoaded = true;
      });
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      var thisForm = root.$refs['pages'].$refs["right-page"].$refs['matter-party-form'];
      thisForm.insertClicked();
    },
    emailThisRecord: function emailThisRecord(id) {
      emailThisMatParty(id); // This is in common.js
    },
    emailRecords: function emailRecords() {
      var _this3 = this;

      root.$snotify.simple('Please wait...', 'Generating Emails', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      root.emailModal.initialize();
      root.emailModal.defaultAttachmentFlag = false;
      root.emailModal.mailMergeFlag = true;
      root.emailModal.mailMergePlural = 'Matter Parties';
      root.emailModal.callingComponent = this;
      root.emailModal.mailMergeEmails = [];
      axios.post('/lolsystemtemplate/get/' + root.lolSettings.matpartiesemailtemplateid).then(function (templateResponse) {
        if (templateResponse.data.errors) {
          showError('Error', templateResponse.data.errors);
        } else {
          root.emailModal.templateRecord = _this3.templateRecord = templateResponse.data.data[0];
          var params = _this3.selectedRows.length ? {
            whereIn: 'MatParty.recordid,' + _this3.selectedRows.join()
          } : {
            tableFilter: _this3.table.tableFilter
          };
          axios.post('/matparty/get', _objectSpread(_objectSpread({}, params), {}, {
            select: ['MatParty.RecordID', 'MatParty.PartyID', 'MatParty.MatterID']
          })).then( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(response) {
              var firstMatParty;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!response.data.errors) {
                        _context2.next = 4;
                        break;
                      }

                      showError('Error getting Matter Parties', response.data.errors);
                      _context2.next = 8;
                      break;

                    case 4:
                      _context2.next = 6;
                      return root.asyncForEach(response.data.data, /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(matParty) {
                          var partyResponse, party;
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return axios.post('/party/get/' + matParty.partyid, {
                                    select: ['Party.RecordId as recordid', 'Email.Number as emailaddress']
                                  });

                                case 2:
                                  partyResponse = _context.sent;

                                  if (partyResponse.data.errors) {
                                    showError('Error', partyResponse.data.errors);
                                  } else {
                                    party = partyResponse.data.data[0];

                                    if (party.emailaddress) {
                                      root.emailModal.mailMergeEmails.push(party.emailaddress);
                                      root.emailModal.multipleRecipients.push({
                                        value: matParty.recordid,
                                        label: party.emailaddress + ' (' + matParty.recordid + ')'
                                      });
                                    }
                                  }

                                case 4:
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

                    case 6:
                      root.$snotify.clear();

                      if (root.emailModal.mailMergeEmails.length) {
                        firstMatParty = response.data.data[0];
                        root.emailModal.selectedRecipient = root.emailModal.multipleRecipients[0];
                        root.emailModal.mailMergeManyFlag = root.emailModal.mailMergeEmails.length > 15 ? true : false;

                        if (root.emailModal.mailMergeEmails.length > 1) {
                          root.emailModal.title = 'Email Selected Matter Parties (' + root.emailModal.mailMergeEmails.length + ')';
                          root.emailModal.subject = _this3.templateRecord.subject;
                          root.emailModal.mailMergeSelectedDescription = 'Selected Matter Parties (' + root.emailModal.mailMergeEmails.length + ')';
                          root.emailModal.templateContents = _this3.templateRecord.contents;
                          root.createRecordTemplateData('matparty', _this3.templateRecord, firstMatParty.recordid).then(function (templateData) {
                            root.emailModal.templateData = templateData;
                            root.emailModal.show();
                            root.emailModal.generateEmailBody();
                            setTimeout(function () {
                              $('#' + root.emailModal.id + ' input[name="subject"]').focus();
                            });
                          })["catch"](function (error) {
                            showError('Error', error);
                          });
                        } else {
                          _this3.emailThisRecord(firstMatParty.recordid);
                        }
                      } else {
                        showError('No Email Addresses were found', 'None of the Parties selected have <em>default</em> email addresses');
                      }

                    case 8:
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
      })["catch"](function (error) {
        showError('Error', error);
      });
    },
    generateEmails: function generateEmails(emailParams) {
      var _this4 = this;

      try {
        console.log("A generateEmails emailParams", emailParams);
        var abortProcess = false;
        var emailCounter = 0;
        root.$snotify.simple('Selected Matter Parties', 'Preparing emails', {
          timeout: 0,
          icon: 'img/cogs.gif'
        });
        var emailComponentTemplate = emailParams.body;
        var tableParams = this.selectedRows.length ? {
          whereIn: 'matparty.recordid,' + this.selectedRows.join()
        } : {
          tableFilter: this.table.tableFilter
        };
        axios.post('/matparty/get', tableParams).then( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(response) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!response.data.errors) {
                      _context6.next = 4;
                      break;
                    }

                    showError('Error getting Matter Parties', response.data.errors);
                    _context6.next = 7;
                    break;

                  case 4:
                    _context6.next = 6;
                    return root.asyncForEach(response.data.data, /*#__PURE__*/function () {
                      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(matParty) {
                        var partyResponse, party;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                _context5.next = 2;
                                return axios.post('/party/get/' + matParty.partyid, {
                                  select: ['Party.RecordId as recordid', 'Party.Name as name', 'Email.Number as emailaddress']
                                });

                              case 2:
                                partyResponse = _context5.sent;

                                if (!partyResponse.data.errors) {
                                  _context5.next = 7;
                                  break;
                                }

                                showError('Error', partyResponse.data.errors);
                                _context5.next = 14;
                                break;

                              case 7:
                                party = partyResponse.data.data[0];

                                if (!(party.emailaddress && !abortProcess)) {
                                  _context5.next = 14;
                                  break;
                                }

                                //debugger;
                                // *****************************************************
                                // Add this back later - when other code is working
                                // *****************************************************
                                // let extraScreens = await axios.post('/extra_screens/getPartyMergeFields', {
                                //     parentId: party.recordid,
                                //     dataFormat: 'array'
                                // });
                                // extraScreens.data.forEach(extraScreen => {
                                //     if ( typeof partyData[extraScreen.prefix] === 'undefined') {
                                //         party[extraScreen.prefix] = {};
                                //     }
                                //     party[extraScreen.prefix][toCamelCase(extraScreen.label)] = extraScreen.value;
                                // });
                                emailCounter++;
                                emailParams.to = [party.emailaddress];
                                emailParams.body = '';
                                _context5.next = 14;
                                return root.createRecordTemplateData(_this4.generateDocumentsSource.toLowerCase(), _this4.templateRecord, matParty.recordid).then( /*#__PURE__*/function () {
                                  var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(templateData) {
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            _context4.next = 2;
                                            return root.vueRender(_this4.templateRecord.subject, templateData).then( /*#__PURE__*/function () {
                                              var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(renderedHtml) {
                                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                                                  while (1) {
                                                    switch (_context3.prev = _context3.next) {
                                                      case 0:
                                                        emailParams.subject = renderedHtml;
                                                        _context3.next = 3;
                                                        return root.vueRender(emailComponentTemplate, templateData).then(function (renderedContents) {
                                                          setTimeout(function () {
                                                            $('.snotify-simple .snotifyToast__title').text('Sending Email To');
                                                            $('.snotify-simple .snotifyToast__body').text(party.name + ' ' + party.emailaddress);
                                                          }, 10);
                                                          emailParams.body = renderedContents;
                                                          axios.post('/mail/sendEmail', emailParams).then(function (response) {
                                                            if (response.data.error) {
                                                              root.$snotify.error(response.data.error + ' - Email: ' + emailParams.to, 'Error sending Email', {
                                                                timeout: 3000,
                                                                position: 'centerCenter',
                                                                showProgressBar: true
                                                              });
                                                            }
                                                          });
                                                        })["catch"](function () {
                                                          abortProcess = true;
                                                          showError('Emailing Matter Parties Error', 'Unable to generate template contents');
                                                        });

                                                      case 3:
                                                      case "end":
                                                        return _context3.stop();
                                                    }
                                                  }
                                                }, _callee3);
                                              }));

                                              return function (_x6) {
                                                return _ref6.apply(this, arguments);
                                              };
                                            }())["catch"](function (error) {
                                              abortProcess = true;
                                              showError('Emailing Matter Parties Error', 'Unable to generate subject contents');
                                            });

                                          case 2:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4);
                                  }));

                                  return function (_x5) {
                                    return _ref5.apply(this, arguments);
                                  };
                                }())["catch"](function (error) {
                                  abortProcess = true;
                                  showError('Matter Parties Template Error', error);
                                });

                              case 14:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5);
                      }));

                      return function (_x4) {
                        return _ref4.apply(this, arguments);
                      };
                    }());

                  case 6:
                    if (!abortProcess) {
                      setTimeout(function () {
                        $('.snotify-simple .snotifyToast__title').text('Completed');
                        $('.snotify-simple .snotifyToast__body').text(emailCounter + (emailCounter > 1 ? ' emails sent' : ' emails sent'));
                      }, 500);
                      setTimeout(function () {
                        root.$snotify.clear();
                      }, 3000);
                    }

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }())["catch"](function (error) {
          console.log('Error getting Parties', error);
        });
      } catch (error) {
        showError('Error Sending emails', error);
      }

      ;
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/left-template.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/left-template.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.extend({
  mounted: function mounted() {
    var _this = this;

    var thisTab = this.leftTabs.filter(function (tab) {
      return tab.pageName == _this.pageName;
    });
    if (thisTab.length) this.displayLeftTab(thisTab[0]);
    this.$nextTick(function () {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('tab')) {
        _this.loadPage(urlParams.get('tab'));
      }
    });
  },
  methods: {
    closeLeftPage: function closeLeftPage(pageName) {
      var thisTabIndex = this.activeLeftTabs.findIndex(function (tab) {
        return tab.pageName == pageName;
      });
      var siblingTab = this.activeLeftTabs[thisTabIndex - 1];
      this.hideLeftTab(pageName);
      this.$router.push({
        name: siblingTab.routeName
      });
    },
    loadPages: function loadPages(pageName) {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].loadPages(pageName);
    },
    loadPage: function loadPage(pageName) {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].loadPage(pageName);
    },
    clearPages: function clearPages() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    tryDeleteTaggedRecords: function tryDeleteTaggedRecords(table) {
      var _this2 = this;

      axios.post('/' + table + '/delete', {
        id: this.selectedRows
      }).then(function (response) {
        if (response.data.errors) {
          var message = response.data.errors.length + ' ' + _this2.table.plural + ' were not deleted because they are linked to other records in the program';

          if (response.data.errors.length === 1) {
            message = '1 ' + _this2.table.singular + ' was not deleted because it is linked to other records in the program';
          }

          root.$snotify.simple(message, 'Delete Result', {
            timeout: 5000
          });
        }

        _this2.table.loadDataTable();
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesLeft.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesLeft.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterPartiesLeft.vue?vue&type=template&id=829635c8& */ "./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8&");
/* harmony import */ var _MatterPartiesLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterPartiesLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterPartiesLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matter-parties/MatterPartiesLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesLeft_vue_vue_type_template_id_829635c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesLeft.vue?vue&type=template&id=829635c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesLeft.vue?vue&type=template&id=829635c8& ***!
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
  return _c("div", { staticClass: "card h-100 border-0" }, [
    _c("div", { staticClass: "card-header matter-parties-bg" }, [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("page-close-button", {
            on: {
              closeClicked: function ($event) {
                return _vm.closeLeftPage(_vm.pageName)
              },
            },
          }),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "card-body overflow-auto pb-0 pt-3 px-3",
        attrs: { id: "matter-party-left-body" },
      },
      [
        _c("matter-parties-table", {
          ref: "matter-parties-table",
          attrs: {
            "lazy-load-flag": true,
            tagging: true,
            parentType: "General",
            "form-ref": "matter-party-form",
            tableId: "matter-parties-table",
            newRecordButton: false,
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-user mr-2" }),
      _vm._v("Parties who play a Role on a Matter"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
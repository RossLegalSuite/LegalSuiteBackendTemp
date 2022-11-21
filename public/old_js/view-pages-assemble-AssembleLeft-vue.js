"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-assemble-AssembleLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": _left_template__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    AssembleTable: function AssembleTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-assemble-AssembleTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./AssembleTable */ "./resources/js/pages/assemble/AssembleTable.vue"));
    },
    SelectMatters: function SelectMatters() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatters-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatters */ "./resources/js/pages/matters/SelectMatters.vue"));
    },
    SelectParties: function SelectParties() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParties-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParties */ "./resources/js/pages/parties/SelectParties.vue"));
    },
    SelectMatterParties: function SelectMatterParties() {
      return __webpack_require__.e(/*! import() */ "view-pages-matter-parties-SelectMatterParties-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matter-parties/SelectMatterParties */ "./resources/js/pages/matter-parties/SelectMatterParties.vue"));
    },
    SelectEmployees: function SelectEmployees() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-SelectEmployees-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/employees/SelectEmployees */ "./resources/js/pages/employees/SelectEmployees.vue"));
    }
  },
  data: function data() {
    return {
      pageName: "Assemble",
      tableMounted: false,
      rightPage: null,
      form: null,
      document: {},
      abortMerge: false,
      selectedTemplates: [],
      // Copy of selectedRows so it doesn't confuse the Tagging
      selectedRows: [],
      selectedAllFlag: false,
      assembleDocumentsFlag: true,
      mergeTemplateSource: ''
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['leftTabs', 'activeLeftTabs'])),
  watch: {
    mergeTemplateSource: function mergeTemplateSource(newValue) {
      if (newValue === 'General') {
        this.mergeGeneralTemplates();
      } else if (newValue === 'Parties') {
        this.mergePartyTemplates();
      } else if (newValue === 'Party Roles') {
        this.mergeMatterPartyTemplates();
      } else if (newValue === 'Matters') {
        this.mergeMatterTemplates();
      } else if (newValue === 'Employees') {
        this.mergeEmployeeTemplates();
      }
    },
    abortMerge: function abortMerge(newValue) {
      if (newValue === true) root.$snotify.clear();
    },
    tableMounted: function tableMounted() {
      this.initializeTable();
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
    selectRecord: function selectRecord(id) {
      var _this2 = this;

      this.mergeTemplateSource = ''; // Reset this (in case they aborted the last Select) so it fires the watch()
      //Wrap this in a timeout, so the watch() fires 

      setTimeout(function () {
        root.documentAssembly.batchId = Date.now();
        _this2.selectedTemplates = [id];
        _this2.mergeTemplateSource = 'Parties'; // Start Here (or get the source form the DatatTable!!)
      });
    },
    assembleDocuments: function assembleDocuments() {
      var _this3 = this;

      this.mergeTemplateSource = '';

      if (!this.selectedRows.length) {
        showError('No Templates selected', 'Please tag a Template (or multiple Template) first');
      } else {
        //Wrap this in a timeout, so the watch() fires 
        setTimeout(function () {
          root.documentAssembly.batchId = Date.now();
          _this3.selectedTemplates = JSON.parse(JSON.stringify(_this3.selectedRows));
          _this3.mergeTemplateSource = 'Parties'; // Go to next step
        });
      }
    },
    mergePartyTemplates: function mergePartyTemplates() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/document_templates/get', {
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this4.selectedTemplates
                  },
                  where: {
                    column: 'document_templates.source',
                    value: 'Parties'
                  }
                });

              case 2:
                response = _context.sent;

                if (response.data.length) {
                  _this4.selectParties.selectParties();
                } else {
                  _this4.mergeTemplateSource = 'Party Roles'; // Go to next step
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    mergeMatterPartyTemplates: function mergeMatterPartyTemplates() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post('/document_templates/get', {
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this5.selectedTemplates
                  },
                  where: {
                    column: 'document_templates.source',
                    value: 'Party Roles'
                  }
                });

              case 2:
                response = _context2.sent;

                if (response.data.length) {
                  _this5.selectMatterParties.selectMatterParties();
                } else {
                  _this5.mergeTemplateSource = 'Matters'; // Go to next step
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    mergeMatterTemplates: function mergeMatterTemplates() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post('/document_templates/get', {
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this6.selectedTemplates
                  },
                  where: {
                    column: 'document_templates.source',
                    value: 'Matters'
                  }
                });

              case 2:
                response = _context3.sent;

                if (response.data.length) {
                  _this6.selectMatters.selectMatters();
                } else {
                  _this6.mergeTemplateSource = 'General'; // Go to next step
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    mergeGeneralTemplates: function mergeGeneralTemplates() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post('/document_templates/get', {
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this7.selectedTemplates
                  },
                  where: {
                    column: 'document_templates.source',
                    value: 'General'
                  }
                });

              case 2:
                response = _context4.sent;

                if (response.data.length) {
                  _this7.assembleGeneralDocuments();
                } else {
                  _this7.mergeTemplateSource = 'Employees';
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    mergeEmployeeTemplates: function mergeEmployeeTemplates() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post('/document_templates/get', {
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this8.selectedTemplates
                  },
                  where: {
                    column: 'document_templates.source',
                    value: 'Employees'
                  }
                });

              case 2:
                response = _context5.sent;

                if (response.data.length) {
                  _this8.selectEmployees.selectEmployees();
                } else {
                  _this8.mergeTemplateSource = '';
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    partiesSelected: function partiesSelected(selectedParties, table) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var params, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                root.documentAssembly.tablePage = root.documentAssembly.whereClause = null;
                root.documentAssembly.singular = 'Party';
                root.documentAssembly.plural = 'Parties';
                root.documentAssembly.abortMerge = false;
                params = _this9.selectedTemplates.length ? {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Parties'
                  },
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this9.selectedTemplates
                  }
                } : {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Parties'
                  }
                };
                _context9.next = 7;
                return axios.post('/document_templates/get', params);

              case 7:
                response = _context9.sent;
                root.$snotify.simple(response.data.data[0].title, 'Assembling', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context9.next = 11;
                return root.asyncForEach(response.data, /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(document) {
                    var params, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            params = selectedParties.length ? {
                              dataFormat: 'idArray',
                              whereIn: {
                                column: 'parties.id',
                                value: selectedParties
                              }
                            } : {
                              dataFormat: 'idArray',
                              tableFilter: table.tableFilter,
                              tableHaving: table.tableHaving
                            };
                            _context8.next = 3;
                            return axios.post('/party/get', params);

                          case 3:
                            response = _context8.sent;
                            _context8.next = 6;
                            return root.asyncForEach(response.data, /*#__PURE__*/function () {
                              var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(record) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        if (root.documentAssembly.abortMerge) {
                                          _context7.next = 5;
                                          break;
                                        }

                                        _this9.setMergeOptions(record.code, record.id, document);

                                        $('.snotify-simple .snotifyToast__body').text(document.title + ' with ' + record.name);
                                        _context7.next = 5;
                                        return root.documentAssembly.createPartyDocument(record.id).then( /*#__PURE__*/function () {
                                          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(convertResponse) {
                                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                                              while (1) {
                                                switch (_context6.prev = _context6.next) {
                                                  case 0:
                                                    _context6.next = 2;
                                                    return root.documentAssembly.storeCorrespondence(convertResponse, document, record);

                                                  case 2:
                                                  case "end":
                                                    return _context6.stop();
                                                }
                                              }
                                            }, _callee6);
                                          }));

                                          return function (_x3) {
                                            return _ref3.apply(this, arguments);
                                          };
                                        }());

                                      case 5:
                                      case "end":
                                        return _context7.stop();
                                    }
                                  }
                                }, _callee7);
                              }));

                              return function (_x2) {
                                return _ref2.apply(this, arguments);
                              };
                            }());

                          case 6:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 11:
                ///Throttle to avoid calling Matter Parties if only one Template was selected
                _this9.mergeTemplateSource = _this9.selectedTemplates.length > 1 ? 'Party Roles' : '';

                _this9.showMergedDocuments();

                root.$snotify.clear();

              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    matterPartiesSelected: function matterPartiesSelected(selectedMatterParties, table) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13() {
        var params, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                root.documentAssembly.tablePage = root.documentAssembly.whereClause = null;
                root.documentAssembly.singular = 'Matter Party';
                root.documentAssembly.plural = 'Matter Parties';
                root.documentAssembly.abortMerge = false;
                params = _this10.selectedTemplates.length ? {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Party Roles'
                  },
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this10.selectedTemplates
                  }
                } : {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Party Roles'
                  }
                };
                _context13.next = 7;
                return axios.post('/document_templates/get', params);

              case 7:
                response = _context13.sent;
                root.$snotify.simple(response.data.data[0].title, 'Assembling', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context13.next = 11;
                return root.asyncForEach(response.data, /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(document) {
                    var params, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            params = selectedMatterParties.length ? {
                              dataFormat: 'idArray',
                              whereIn: {
                                column: 'matter_parties.id',
                                value: selectedMatterParties
                              }
                            } : {
                              dataFormat: 'idArray',
                              tableFilter: table.tableFilter,
                              tableHaving: table.tableHaving
                            };
                            _context12.next = 3;
                            return axios.post('/matter_parties/get', params);

                          case 3:
                            response = _context12.sent;
                            _context12.next = 6;
                            return root.asyncForEach(response.data, /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(record) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
                                  while (1) {
                                    switch (_context11.prev = _context11.next) {
                                      case 0:
                                        if (root.documentAssembly.abortMerge) {
                                          _context11.next = 5;
                                          break;
                                        }

                                        _this10.setMergeOptions(record.code, record.id, document);

                                        $('.snotify-simple .snotifyToast__body').text(document.title + ' with ' + record.name);
                                        _context11.next = 5;
                                        return root.documentAssembly.createMatterPartyDocument(record.id).then( /*#__PURE__*/function () {
                                          var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(convertResponse) {
                                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
                                              while (1) {
                                                switch (_context10.prev = _context10.next) {
                                                  case 0:
                                                    _context10.next = 2;
                                                    return root.documentAssembly.storeCorrespondence(convertResponse, document, record);

                                                  case 2:
                                                  case "end":
                                                    return _context10.stop();
                                                }
                                              }
                                            }, _callee10);
                                          }));

                                          return function (_x6) {
                                            return _ref6.apply(this, arguments);
                                          };
                                        }());

                                      case 5:
                                      case "end":
                                        return _context11.stop();
                                    }
                                  }
                                }, _callee11);
                              }));

                              return function (_x5) {
                                return _ref5.apply(this, arguments);
                              };
                            }());

                          case 6:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 11:
                ///Throttle to avoid calling Matters if only one Template was selected
                _this10.mergeTemplateSource = _this10.selectedTemplates.length > 1 ? 'Matters' : '';

                _this10.showMergedDocuments();

                root.$snotify.clear();

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    mattersSelected: function mattersSelected(selectedMatters, table) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17() {
        var params, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                root.documentAssembly.tablePage = root.documentAssembly.whereClause = null;
                root.documentAssembly.singular = 'Matter';
                root.documentAssembly.plural = 'Matters';
                root.documentAssembly.abortMerge = false;
                params = _this11.selectedTemplates.length ? {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Matters'
                  },
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this11.selectedTemplates
                  }
                } : {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Matters'
                  }
                };
                _context17.next = 7;
                return axios.post('/document_templates/get', params);

              case 7:
                response = _context17.sent;
                root.$snotify.simple(response.data.data[0].title, 'Assembling', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context17.next = 11;
                return root.asyncForEach(response.data, /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16(document) {
                    var params, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            params = selectedMatters.length ? {
                              dataFormat: 'idArray',
                              whereIn: {
                                column: 'matters.id',
                                value: selectedMatters
                              }
                            } : {
                              dataFormat: 'idArray',
                              tableFilter: table.tableFilter,
                              tableHaving: table.tableHaving
                            };
                            _context16.next = 3;
                            return axios.post('/matters/get', params);

                          case 3:
                            response = _context16.sent;
                            _context16.next = 6;
                            return root.asyncForEach(response.data, /*#__PURE__*/function () {
                              var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15(record) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
                                  while (1) {
                                    switch (_context15.prev = _context15.next) {
                                      case 0:
                                        if (root.documentAssembly.abortMerge) {
                                          _context15.next = 5;
                                          break;
                                        }

                                        _this11.setMergeOptions(record.fileRef, record.id, document);

                                        $('.snotify-simple .snotifyToast__body').text(document.title + ' with ' + record.fileRef);
                                        _context15.next = 5;
                                        return root.documentAssembly.createMatterDocument(record.id).then( /*#__PURE__*/function () {
                                          var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(convertResponse) {
                                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
                                              while (1) {
                                                switch (_context14.prev = _context14.next) {
                                                  case 0:
                                                    _context14.next = 2;
                                                    return root.documentAssembly.storeCorrespondence(convertResponse, document, record);

                                                  case 2:
                                                  case "end":
                                                    return _context14.stop();
                                                }
                                              }
                                            }, _callee14);
                                          }));

                                          return function (_x9) {
                                            return _ref9.apply(this, arguments);
                                          };
                                        }());

                                      case 5:
                                      case "end":
                                        return _context15.stop();
                                    }
                                  }
                                }, _callee15);
                              }));

                              return function (_x8) {
                                return _ref8.apply(this, arguments);
                              };
                            }());

                          case 6:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x7) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 11:
                ///Throttle to avoid calling General if only one Template was selected
                _this11.mergeTemplateSource = _this11.selectedTemplates.length > 1 ? 'General' : '';

                _this11.showMergedDocuments();

                root.$snotify.clear();

              case 14:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    employeesSelected: function employeesSelected(selectedEmployees, table) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21() {
        var params, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                root.documentAssembly.tablePage = root.documentAssembly.whereClause = null;
                root.documentAssembly.singular = 'Employee';
                root.documentAssembly.plural = 'Employees';
                root.documentAssembly.abortMerge = false;
                params = _this12.selectedTemplates.length ? {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Employees'
                  },
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this12.selectedTemplates
                  }
                } : {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'Employees'
                  }
                };
                _context21.next = 7;
                return axios.post('/document_templates/get', params);

              case 7:
                response = _context21.sent;
                root.$snotify.simple(response.data.data[0].title, 'Assembling', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context21.next = 11;
                return root.asyncForEach(response.data, /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20(document) {
                    var params, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
                      while (1) {
                        switch (_context20.prev = _context20.next) {
                          case 0:
                            params = selectedEmployees.length ? {
                              dataFormat: 'idArray',
                              whereIn: {
                                column: 'employees.id',
                                value: selectedEmployees
                              }
                            } : {
                              dataFormat: 'idArray',
                              tableFilter: table.tableFilter,
                              tableHaving: table.tableHaving
                            };
                            _context20.next = 3;
                            return axios.post('/employees/get', params);

                          case 3:
                            response = _context20.sent;
                            _context20.next = 6;
                            return root.asyncForEach(response.data, /*#__PURE__*/function () {
                              var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19(record) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
                                  while (1) {
                                    switch (_context19.prev = _context19.next) {
                                      case 0:
                                        if (root.documentAssembly.abortMerge) {
                                          _context19.next = 5;
                                          break;
                                        }

                                        _this12.setMergeOptions(record.name, record.id, document);

                                        $('.snotify-simple .snotifyToast__body').text(document.title + ' with ' + record.name);
                                        _context19.next = 5;
                                        return root.documentAssembly.createEmployeeDocument(record.id).then( /*#__PURE__*/function () {
                                          var _ref12 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18(convertResponse) {
                                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
                                              while (1) {
                                                switch (_context18.prev = _context18.next) {
                                                  case 0:
                                                    _context18.next = 2;
                                                    return root.documentAssembly.storeCorrespondence(convertResponse, document, record);

                                                  case 2:
                                                  case "end":
                                                    return _context18.stop();
                                                }
                                              }
                                            }, _callee18);
                                          }));

                                          return function (_x12) {
                                            return _ref12.apply(this, arguments);
                                          };
                                        }());

                                      case 5:
                                      case "end":
                                        return _context19.stop();
                                    }
                                  }
                                }, _callee19);
                              }));

                              return function (_x11) {
                                return _ref11.apply(this, arguments);
                              };
                            }());

                          case 6:
                          case "end":
                            return _context20.stop();
                        }
                      }
                    }, _callee20);
                  }));

                  return function (_x10) {
                    return _ref10.apply(this, arguments);
                  };
                }());

              case 11:
                _this12.mergeTemplateSource = '';

                _this12.showMergedDocuments();

                root.$snotify.clear();

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }))();
    },
    assembleGeneralDocuments: function assembleGeneralDocuments() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee24() {
        var params, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                root.documentAssembly.tablePage = root.documentAssembly.whereClause = null;
                root.documentAssembly.singular = 'General';
                root.documentAssembly.plural = 'General';
                root.documentAssembly.abortMerge = false;
                params = _this13.selectedTemplates.length ? {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'General'
                  },
                  whereIn: {
                    column: 'document_templates.id',
                    value: _this13.selectedTemplates
                  }
                } : {
                  dataFormat: 'idArray',
                  where: {
                    column: 'document_templates.source',
                    value: 'General'
                  }
                };
                _context24.next = 7;
                return axios.post('/document_templates/get', params);

              case 7:
                response = _context24.sent;
                root.$snotify.simple(response.data.data[0].title, 'Assembling', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context24.next = 11;
                return root.asyncForEach(response.data, /*#__PURE__*/function () {
                  var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee23(document) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee23$(_context23) {
                      while (1) {
                        switch (_context23.prev = _context23.next) {
                          case 0:
                            if (root.documentAssembly.abortMerge) {
                              _context23.next = 5;
                              break;
                            }

                            _this13.setMergeOptions('', 0, document);

                            $('.snotify-simple .snotifyToast__body').text(document.title);
                            _context23.next = 5;
                            return root.documentAssembly.assembleThisDocument().then( /*#__PURE__*/function () {
                              var _ref14 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22(convertResponse) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
                                  while (1) {
                                    switch (_context22.prev = _context22.next) {
                                      case 0:
                                        _context22.next = 2;
                                        return root.documentAssembly.storeCorrespondence(convertResponse, document, {});

                                      case 2:
                                      case "end":
                                        return _context22.stop();
                                    }
                                  }
                                }, _callee22);
                              }));

                              return function (_x14) {
                                return _ref14.apply(this, arguments);
                              };
                            }());

                          case 5:
                          case "end":
                            return _context23.stop();
                        }
                      }
                    }, _callee23);
                  }));

                  return function (_x13) {
                    return _ref13.apply(this, arguments);
                  };
                }());

              case 11:
                ///Throttle to avoid calling Employees if only one Template was selected
                _this13.mergeTemplateSource = _this13.selectedTemplates.length > 1 ? 'Employees' : '';

                _this13.showMergedDocuments();

                root.$snotify.clear();

              case 14:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }))();
    },
    showMergedDocuments: function showMergedDocuments() {
      this.$root.setTableToRefresh('correspondence', 'correspondence-table');
      var assembleRight = root.$refs['pages'].$refs["right-page"];
      assembleRight.showPage = true;
      assembleRight.source = root.documentAssembly.mergeOptions.dataSource;
      assembleRight.loadTable(root.documentAssembly.batchId);
    },
    setMergeOptions: function setMergeOptions(uniqueIdentifier, id, document) {
      var destinationFileName = document.fileName;

      if (uniqueIdentifier) {
        destinationFileName = document.fileName.split('.')[0] + ' ' + makeValidPathString(uniqueIdentifier) + '.docx';
      }

      root.documentAssembly.mergeOptions = {
        source: document.docxFile,
        destinationFileName: destinationFileName,
        destinationFolder: 'merged',
        dataSource: document.source,
        id: id,
        uniqueFileName: true
      };
    },
    editClicked: function editClicked(id) {
      var _this14 = this;

      axios.post('/document_templates/get', {
        recordid: id
      }).then(function (response) {
        var data = response.data.data[0];
        _this14.$root.previewPdf.title = 'Template: ' + data.description;
        _this14.$root.previewPdf.document = data;
        _this14.$root.previewPdf.documentPath = data.pdfFile; //Being watched: To load the iFrame

        _this14.$root.previewPdf.show();
      });
    },
    emptyDocumentLogTable: function emptyDocumentLogTable() {
      // Called by AssembleRight
      root.$refs['pages'].$refs["right-page"].loadTable(Date.now());
    },
    initializeTable: function initializeTable() {
      this.table.setButtonTitle = 'Assemble this Document';
      this.table.setButtonText = 'Select';
      this.table.setButtonFunction = 'selectRecord';
      this.table.actionColumnWidth = 12;
      this.table.loadDataTable();
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

/***/ "./resources/js/pages/assemble/AssembleLeft.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleLeft.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssembleLeft.vue?vue&type=template&id=453bf4c6& */ "./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6&");
/* harmony import */ var _AssembleLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssembleLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssembleLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assemble/AssembleLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssembleLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleLeft_vue_vue_type_template_id_453bf4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssembleLeft.vue?vue&type=template&id=453bf4c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleLeft.vue?vue&type=template&id=453bf4c6& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header assemble-bg" }, [
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
        { staticClass: "card-body overflow-auto pb-1 pt-3 px-3" },
        [
          _c("assemble-table", {
            ref: "assemble-table",
            attrs: {
              lazyLoadFlag: true,
              tagging: true,
              formRef: "left-page",
              tableId: "assemble-table",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("select-matters", {
        ref: "assemble-select-matters",
        attrs: {
          id: "assemble-select-matters",
          formRef: "assemble-select-matters",
        },
      }),
      _vm._v(" "),
      _c("select-parties", {
        ref: "assemble-select-parties",
        attrs: {
          id: "assemble-select-parties",
          formRef: "assemble-select-parties",
        },
      }),
      _vm._v(" "),
      _c("select-matter-parties", {
        ref: "assemble-select-matter-parties",
        attrs: {
          id: "assemble-select-matter-parties",
          formRef: "assemble-select-matter-parties",
        },
      }),
      _vm._v(" "),
      _c("select-employees", {
        ref: "assemble-select-employees",
        attrs: {
          id: "assemble-select-employees",
          formRef: "assemble-select-employees",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-cogs mr-2" }),
      _vm._v("Assemble Documents"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
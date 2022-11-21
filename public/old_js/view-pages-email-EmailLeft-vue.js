"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-email-EmailLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _left_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../left-template */ "./resources/js/pages/left-template.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);


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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": _left_template__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    SelectEmailFolder: (vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default())
  },
  data: function data() {
    return {
      tableId: "email-left-email-table",
      pageName: "Email",
      searchFor: '',
      smtpDetails: {},
      params: null,
      folders: ['INBOX'],
      newFolderFlag: true,
      selectedFolder: 'INBOX',
      folderMailIds: [],
      pages: [],
      numberOfEmails: 0,
      numberOfPages: 0,
      currentPage: 0,
      pageSize: 50
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['leftTabs', 'activeLeftTabs'])), {}, {
    pageStart: function pageStart() {
      return this.currentPage ? this.currentPage * this.pageSize + 1 : 1;
    },
    pageEnd: function pageEnd() {
      return this.pageStart + this.pageSize > this.numberOfEmails ? this.numberOfEmails : this.pageStart + this.pageSize - 1;
    }
  }),
  watch: {
    searchFor: function searchFor(newValue) {
      this.table.search(newValue).draw();
    },
    selectedFolder: function selectedFolder(newValue) {
      this.refreshFolder(newValue);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var thisTab = this.leftTabs.filter(function (tab) {
      return tab.pageName === _this2.pageName;
    });
    if (thisTab.length) this.displayLeftTab(thisTab[0]);
    this.$root.emailLeftPage = this;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapMutations)(['displayLeftTab', 'hideLeftTab'])), {}, {
    initializePage: function initializePage() {
      var _this3 = this;

      this.loadDataTable([], true);
      this.getEmailMessages().then(function (data) {
        _this3.table.destroy();

        _this3.loadDataTable(data);

        _this3.getFolders();
      });

      var _this = this;
    },
    loadDataTable: function loadDataTable(emails) {
      var loadingFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _this = this; //Set the table Height manually


      var $thisBody = $('#email-left-body');
      var scrollY = Math.round($thisBody.outerHeight()) - 135 + 'px';
      this.table = $('#' + this.tableId).DataTable({
        destroy: true,
        dom: "t",
        data: emails,
        serverSide: false,
        paging: false,
        select: false,
        scrollX: true,
        responsive: false,
        scrollY: scrollY,
        scroller: false,
        scrollCollapse: false,
        rowId: "mailId",
        ordering: true,
        order: [[1, "desc"]],
        language: {
          emptyTable: loadingFlag ? _this.currentPage ? "Fetching emails...Please wait" : "Loading " + _this.selectedFolder + " folder...Please wait" : "No emails found"
        },
        columnDefs: [{
          title: "Action",
          data: null,
          "class": "text-center",
          width: "20%",
          orderable: false,
          targets: 0,
          render: function render(data) {
            return '<span class="badge badge-success action-button-badge" onclick="componentFunctionById(' + _this._uid + ',\'viewEmail\',' + data.mailId + ')"  title ="View this email message">View</span>';
          }
        }, {
          title: "Date",
          data: null,
          width: "20%",
          targets: 1,
          render: function render(data) {
            return data.date ? moment(data.date).format('YYYY-MM-DD HH:mm:ss') : '';
          }
        }, {
          title: "From",
          data: null,
          width: "20%",
          targets: 2,
          render: function render(data) {
            return data.from ? data.from : '';
          }
        }, {
          title: "Subject",
          data: null,
          width: "20%",
          targets: 3,
          render: function render(data) {
            return data.subject ? data.subject : '';
          }
        }, {
          title: "CC",
          data: null,
          width: "20%",
          targets: 4,
          render: function render(data) {
            return data.cc ? data.cc : '';
          }
        }, {
          title: "Body",
          data: null,
          //width: "20%",
          visible: false,
          targets: 5,
          render: function render(data) {
            return data.text ? data.text : '';
          }
        }]
      });
    },
    refreshFolder: function refreshFolder(newFolder) {
      this.clearForm();
      var refreshFolder = newFolder || this.selectedFolder;
      this.resetPaging(); //this.newFolderFlag = newFolder ? true: false;

      this.newFolderFlag = true;
      this.refreshTable(refreshFolder);
    },
    refreshTable: function refreshTable(folder) {
      var _this4 = this;

      root.$snotify.simple('Please Wait..', 'Fetching emails', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      this.getEmailMessages(folder).then(function (data) {
        root.$snotify.clear();

        _this4.table.destroy();

        _this4.loadDataTable(data);
      })["catch"](function () {
        root.$snotify.clear();
      });
    },
    getEmailMessages: function getEmailMessages() {
      var _arguments = arguments,
          _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var folder;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                folder = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'INBOX';
                _this5.selectedFolder = folder;
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve, reject) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this5.params = {
                              incomingServer: _this5.$root.smtpDetails.incomingServer,
                              incomingPort: _this5.$root.smtpDetails.incomingPort,
                              incomingEncryption: _this5.$root.smtpDetails.incomingEncryption,
                              userName: _this5.$root.smtpDetails.smtpUserName,
                              password: _this5.$root.smtpDetails.smtpPassword,
                              folder: folder,
                              mailIds: _this5.folderMailIds,
                              currentPage: _this5.currentPage,
                              pageSize: _this5.pageSize
                            }; //console.log('getEmailMessages this.params',this.params);

                            //console.log('getEmailMessages this.params',this.params);
                            axios.post('/mail/getMessages', _this5.params).then(function (response) {
                              //root.$snotify.clear();
                              if (response.data.error) {
                                showError('Email Server Error', response.data.error);
                                reject();
                              } else {
                                if (_this5.newFolderFlag) {
                                  _this5.newFolderFlag = false;
                                  _this5.folderMailIds = response.data.folderMailIds;
                                  _this5.numberOfEmails = _this5.folderMailIds.length;

                                  if (_this5.numberOfEmails) {
                                    _this5.numberOfPages = Math.ceil(_this5.numberOfEmails / _this5.pageSize);
                                  } else {
                                    _this5.numberOfPages = 0;
                                  }
                                } //console.log('numberOfEmails',this.numberOfEmails);
                                //console.log('numberOfPages',this.numberOfPages);


                                //console.log('numberOfEmails',this.numberOfEmails);
                                //console.log('numberOfPages',this.numberOfPages);
                                resolve(response.data.emails);
                              }
                            })["catch"](function (error) {
                              reject();
                              showError('Error Reading Email', error);
                            });

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    viewEmail: function viewEmail(id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data, thisForm, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this6.highlightRow(id);

                data = _this6.table.row('#' + id).data();
                thisForm = root.$refs['pages'].$refs["right-page"].$refs['email-form'];
                params = _objectSpread(_objectSpread({}, _this6.params), {}, {
                  id: id,
                  folder: _this6.selectedFolder
                });
                thisForm.showEmailMessage(data, params);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getFolders: function getFolders() {
      var _this7 = this;

      var params = {
        incomingServer: this.$root.smtpDetails.incomingServer,
        incomingPort: this.$root.smtpDetails.incomingPort,
        incomingEncryption: this.$root.smtpDetails.incomingEncryption,
        userName: this.$root.smtpDetails.smtpUserName,
        password: this.$root.smtpDetails.smtpPassword
      };
      axios.post('/mail/getFolders', params).then(function (response) {
        if (response.data.error) {
          showError('Email Server Error', '<p>An error was encountered getting the Mailbox folders.</p><p>' + response.data.error + '</p>');
        } else {
          _this7.folders = response.data.folders;
        }
      })["catch"](function (error) {
        reject();
        showError('Error Getting Folders', error);
      });
    },
    resetPaging: function resetPaging() {
      this.newFolderFlag = true;
      this.folderMailIds = [];
      this.pages = [];
      this.numberOfEmails = 0;
      this.numberOfPages = 0;
      this.currentPage = 0;
      this.pageSize = 50;
    },
    clearForm: function clearForm() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    previousPage: function previousPage() {
      this.currentPage--;
      this.clearForm();
      this.refreshTable(this.selectedFolder);
    },
    nextPage: function nextPage() {
      this.currentPage++;
      this.clearForm();
      this.refreshTable(this.selectedFolder);
    },
    highlightRow: function highlightRow(id) {
      if ($('#' + this.tableId).length === 0) return; // In case the global form has a table set by SelectMatter for example

      this.unHighlightAllRows();
      $('#' + this.tableId + ' tbody tr#' + id).addClass('highlighted');
    },
    unHighlightAllRows: function unHighlightAllRows() {
      if ($('#' + this.tableId).length === 0) return; // In case the global form has a table set by SelectMatter for example

      $('#' + this.tableId + ' tbody tr.highlighted').removeClass('highlighted');
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

/***/ "./resources/js/pages/email/EmailLeft.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/email/EmailLeft.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailLeft.vue?vue&type=template&id=533aeed2& */ "./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2&");
/* harmony import */ var _EmailLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/email/EmailLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeft_vue_vue_type_template_id_533aeed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailLeft.vue?vue&type=template&id=533aeed2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/email/EmailLeft.vue?vue&type=template&id=533aeed2& ***!
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
  return _c("div", { staticClass: "card h-100 border-0" }, [
    _c("div", { staticClass: "card-header email-bg" }, [
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
        staticClass: "card-body overflow-auto pb-1 pt-3 px-3",
        attrs: { id: "email-left-body" },
      },
      [
        _c("div", { staticClass: "d-flex justify-content-between mb-1" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchFor,
                  expression: "searchFor",
                },
              ],
              staticClass: "form-control search-input",
              attrs: {
                id: "email-left-search-email-folder",
                type: "search",
                placeholder: "Search...",
              },
              domProps: { value: _vm.searchFor },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchFor = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c(
              "div",
              { staticStyle: { "min-width": "12vw" } },
              [
                _c(
                  "select-email-folder",
                  {
                    attrs: {
                      id: "email-left-select-email-folder",
                      placeholder: "",
                      options: _vm.folders,
                      tabindex: -1,
                      "allow-empty": false,
                      "show-labels": false,
                    },
                    model: {
                      value: _vm.selectedFolder,
                      callback: function ($$v) {
                        _vm.selectedFolder = $$v
                      },
                      expression: "selectedFolder",
                    },
                  },
                  [
                    _c("template", { slot: "noResult" }, [
                      _vm._v("Folder not found"),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "ml-2 centercenter" }, [
              _c("img", {
                staticClass: "cp",
                staticStyle: { height: "28px", "margin-bottom": "7px" },
                attrs: {
                  src: "/img/recycle.png",
                  title: "Check for new messages",
                },
                on: {
                  click: function ($event) {
                    return _vm.refreshFolder("")
                  },
                },
              }),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("table", {
          staticClass: "table bordered",
          staticStyle: { "table-layout": "auto", width: "100%" },
          attrs: { id: _vm.tableId },
        }),
        _vm._v(" "),
        _vm.numberOfPages > 1
          ? _c("div", { staticClass: "mt-1 text-right" }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.currentPage > 0,
                      expression: "currentPage > 0",
                    },
                  ],
                  attrs: { title: "Previous page" },
                  on: { click: _vm.previousPage },
                },
                [_c("i", { staticClass: "fa fa-toggle-left fa-lg cp mr-1" })]
              ),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  "Showing " +
                    _vm._s(_vm.pageStart) +
                    " - " +
                    _vm._s(_vm.pageEnd) +
                    " of " +
                    _vm._s(_vm.numberOfEmails)
                ),
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.currentPage + 1 < _vm.numberOfPages,
                      expression: "currentPage + 1 < numberOfPages",
                    },
                  ],
                  attrs: { title: "Next page" },
                  on: { click: _vm.nextPage },
                },
                [_c("i", { staticClass: "fa fa-toggle-right fa-lg cp ml-1" })]
              ),
            ])
          : _vm.numberOfEmails
          ? _c("div", { staticClass: "mt-1 text-right" }, [
              _c("span", [
                _vm._v(
                  "Showing " +
                    _vm._s(_vm.numberOfEmails) +
                    " of " +
                    _vm._s(_vm.numberOfEmails)
                ),
              ]),
            ])
          : _vm._e(),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-envelope-o mr-2" }),
      _vm._v("Email"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
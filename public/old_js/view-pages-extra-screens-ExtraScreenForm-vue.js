"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-extra-screens-ExtraScreenForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//https://github.com/kevinchappell/formBuilder
//https://formbuilder.online/docs/formBuilder/overview/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectMatterType: function SelectMatterType() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatterType-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatterType */ "./resources/js/pages/matters/SelectMatterType.vue"));
    },
    SelectDocumentSet: function SelectDocumentSet() {
      return __webpack_require__.e(/*! import() */ "view-pages-document-sets-SelectDocumentSet-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/document-sets/SelectDocumentSet */ "./resources/js/pages/document-sets/SelectDocumentSet.vue"));
    },
    SelectPartyRole: function SelectPartyRole() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyRole-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyRole */ "./resources/js/pages/parties/SelectPartyRole.vue"));
    },
    SelectPartyType: function SelectPartyType() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyType-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyType */ "./resources/js/pages/parties/SelectPartyType.vue"));
    },
    SelectPartyEntity: function SelectPartyEntity() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyEntity-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyEntity */ "./resources/js/pages/parties/SelectPartyEntity.vue"));
    } //ExtraScreenTemplatesTable: () => import("./ExtraScreenTemplatesTable"),
    //ExtraScreenTemplatesForm: () => import("./ExtraScreenTemplatesForm"),

  },
  props: {
    resource: {
      type: String,
      "default": 'Extra Screens'
    },
    uniqueId: String
  },
  data: function data() {
    return {
      screenPositionOptions: [{
        value: 'Tab',
        label: 'Tab'
      }, {
        value: 'Form',
        label: 'Form'
      }],
      screenLocationOptions: [{
        value: 'Matter',
        label: 'All Matters'
      }, {
        value: 'Party',
        label: 'All Parties'
      }, {
        value: 'Matter Type',
        label: 'Matter Type'
      }, {
        value: 'Document Set',
        label: 'Document Set'
      }, {
        value: 'Party Role',
        label: 'Party Role'
      }, {
        value: 'Party Type',
        label: 'Party Type'
      }, {
        value: 'Party Entity',
        label: 'Party Entity'
      }],
      formBuilderOptions: {
        editOnAdd: true,
        disabledActionButtons: ['clear', 'save'],
        disabledAttrs: ['subtype', 'required', 'access', 'name', 'value', 'multiple', 'maxlength', 'min', 'max', 'step'],
        disableFields: ['file', 'autocomplete', 'button', 'checkbox-group', 'hidden', 'radio-group', 'header', 'paragraph'],
        controlOrder: ['date', 'text', 'textarea', 'number', 'header', 'paragraph'],
        formData: [],
        thisVueComponent: this,
        onCloseFieldEdit: function onCloseFieldEdit() {
          var _this2 = this;

          // Clever hack to get this.record from the Vue Component to show the Merge Field name
          //console.log('this.thisVueComponent.record.prefix',this.thisVueComponent.record.prefix);
          setTimeout(function () {
            var _this = _this2;
            $('.form-wrap.form-builder .field-label').each(function () {
              var thisHtml = $(this).html();

              if (thisHtml.indexOf("Merge Field name") === -1) {
                console.log('Doing ', $(this).text());
                $(this).html(thisHtml + '  <span title="Merge Field name" style="font-weight: bold">{' + toCamelCase(_this.thisVueComponent.record.prefix) + '.' + toCamelCase($(this).text()) + '}</span>');
              }
            });
          }, 500);
        }
      },
      formBuilderFields: [],
      formBuilder: null,
      formBuilderMode: 'edit' //templatesTable: null,

    };
  },
  methods: {
    // newRecordButtonClicked() {
    //     this.$refs[this._uid + '-extra-screen-templates-form'].insertClicked( this.record.id );
    // },
    editRecord: function editRecord(id) {
      var _this3 = this;

      axios.post('/extra_screens/get', {
        recordid: id
      }).then(function (response) {
        _this3.record = response.data.data[0];

        if (_this3.record.matterTypeId) {
          _this3.selectMatterType.record = {
            id: _this3.record.matterTypeId,
            description: htmlDecode(_this3.record.matterTypeDescription)
          };
        }

        if (_this3.record.documentSetId) {
          _this3.selectDocumentSet.record = {
            id: _this3.record.documentSetId,
            description: htmlDecode(_this3.record.documentSetDescription)
          };
        }

        if (_this3.record.partyEntityId) {
          _this3.selectPartyEntity.record = {
            id: _this3.record.partyEntityId,
            description: htmlDecode(_this3.record.partyEntityDescription)
          };
        }

        if (_this3.record.partyTypeId) {
          _this3.selectPartyType.record = {
            id: _this3.record.partyTypeId,
            description: htmlDecode(_this3.record.partyTypeDescription)
          };
        }

        if (_this3.record.partyRoleId) {
          _this3.selectPartyRole.record = {
            id: _this3.record.partyRoleId,
            description: htmlDecode(_this3.record.partyRoleDescription)
          };
        }

        axios.post('/extra_screen_fields/get', {
          parentId: _this3.record.id
        }).then(function (response) {
          response.data.forEach(function (row) {
            row.values = JSON.parse(row.values);
            row.required = row.required ? true : false;
          });
          _this3.formBuilderFields = response.data; //console.log('this.formBuilderFields',this.formBuilderFields);

          _this3.initFormData(); // setTimeout(() => {
          //     this.templatesTable = this.$refs[this._uid + '-extra-screen-templates-table'];
          //     //Set the table Height manually
          //     let $thisForm = $('#' + this.id);
          //     let $formBody = $thisForm.find('.form-tab-body');
          //     this.templatesTable.tableOptions = {
          //         scrollY: (Math.round( $formBody.outerHeight() ) - 180)  + 'px',
          //     };
          //     this.templatesTable.extraScreenId = id;
          //     this.templatesTable.subTitle = this.record.description;
          //     this.templatesTable.loadDataTable();
          // });

        });
      });
    },
    initNewRecord: function initNewRecord() {
      var _this4 = this;

      this.formBuilderFields = [];
      this.formBuilderMode = 'edit';
      this.record = {
        createdById: root.loggedInEmployeeId,
        location: 'Matter',
        position: 'Tab',
        prefix: null,
        title: null,
        description: null,
        matterTypeId: null,
        documentSetId: null,
        partyRoleId: null,
        partyEntityId: null,
        partyTypeId: null
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this4.id + ' input[name="title"]').focus();
      });
    },
    initFormData: function initFormData() {
      this.displayForm();
      this.displayFormBuilder();
    },
    displayFormBuilder: function displayFormBuilder() {
      var _this5 = this;

      this.formEditor = $('#' + this.id + '-form-edit');
      this.formViewer = $('#' + this.id + '-form-view');

      if (!this.formBuilder) {
        this.formBuilderOptions.formData = this.formBuilderFields;
        this.formBuilder = this.formEditor.formBuilder(this.formBuilderOptions);
      } else {
        this.formBuilder.actions.setData(this.formBuilderFields);
      }

      setTimeout(function () {
        _this5.showMergeFieldNames();
      }, 1000);
    },
    showMergeFieldNames: function showMergeFieldNames() {
      var _this = this;

      $('.form-wrap.form-builder .field-label').each(function () {
        $(this).html($(this).html() + '  <span title="Merge Field name" style="font-weight: bold">{' + toCamelCase(_this.record.prefix) + '.' + toCamelCase($(this).text()) + '}</span>');
      });
    },
    toggleMode: function toggleMode() {
      this.formBuilder.actions.save();
      this.formBuilderMode = this.formBuilderMode === 'view' ? 'edit' : 'view';

      if (this.formBuilderMode === 'view') {
        var _this = this;

        $('form', this.formViewer).formRender({
          formData: this.formBuilder.formData,
          notify: {
            success: function success() {
              // Clever way of hooking into the "after rendered" event
              $('.rendered-form label').each(function () {
                $(this).html($(this).html() + '  <span style="font-weight: bold">{' + toCamelCase(_this.record.prefix) + '.' + toCamelCase($(this).text()) + '}</span>');
              });
              return '';
            },
            warning: function warning(message) {
              return console.warn(message);
            },
            error: function error(message) {
              return console.error(message);
            }
          }
        });
      }
    },
    checkForDuplicateFieldLabels: function checkForDuplicateFieldLabels() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        var duplicateFlag = false,
            duplicateLabel = '',
            checkForDuplicateFields = [];

        var formBuilderFields = _this6.formBuilder.actions.getData();

        formBuilderFields.forEach(function (formBuilderField) {
          checkForDuplicateFields = formBuilderFields.filter(function (field) {
            return field.label == formBuilderField.label;
          });

          if (checkForDuplicateFields.length > 1) {
            duplicateFlag = true;
            duplicateLabel = formBuilderField.label;
          }
        });

        if (duplicateFlag) {
          reject(duplicateLabel);
        } else {
          resolve();
        }
      });
    },
    okClicked: function okClicked() {
      var _this7 = this;

      this.checkForDuplicateFieldLabels().then(function () {
        _this7.record.matterTypeId = _this7.record.location === 'Matter Type' ? _this7.selectMatterType.record.id : null;
        _this7.record.documentSetId = _this7.record.location === 'Document Set' ? _this7.selectDocumentSet.record.id : null;
        _this7.record.partyEntityId = _this7.record.location === 'Party Entity' ? _this7.selectPartyEntity.record.id : null;
        _this7.record.partyTypeId = _this7.record.location === 'Party Type' ? _this7.selectPartyType.record.id : null;
        _this7.record.partyRoleId = _this7.record.location === 'Party Role' ? _this7.selectPartyRole.record.id : null; //console.log('this.formBuilder.actions.getData()',this.formBuilder.actions.getData());

        var formFields = {
          formFields: JSON.stringify(_this7.formBuilder.actions.getData())
        }; //console.log('formFields',formFields);

        axios.post('/extra_screens/store', _objectSpread(_objectSpread({}, _this7.record), formFields)).then(function (response) {
          if (response.data.errors) {
            if (response.data.errors.general) {
              showError('Error', response.data.errors.general[0]);
            } else {
              _this7.errors = response.data.errors;
            }
          } else {
            _this7.errors = {};

            _this7.highlightTableRow(response.data.id, response.data.title);
          }
        })["catch"](function (error) {
          showError('Error saving ' + _this7.table.singular, error);
        });
      })["catch"](function (duplicateLabel) {
        showError('Form Design Error', '<p>The Field Names in the Form must be unique</p><p>The Field Label "' + duplicateLabel + '" is not unique.</p>');
      });
    },
    setPrefix: function setPrefix() {
      if (this.editing) return;

      if (!this.record.prefix) {
        this.record.prefix = toCamelCase(this.record.title);
        $('input[name="prefix"]').val(this.record.prefix);
      } // Do the description as well... to help the user


      if (!this.record.description) {
        this.record.description = this.record.title;
        $('input[name="description"]').val(this.record.description);
      }
    },
    convertPrefix: function convertPrefix() {
      if (this.record.prefix) {
        this.record.prefix = toCamelCase(this.record.prefix);
        $('input[name="prefix"]').val(this.record.prefix);
      }
    },
    highlightTableRow: function highlightTableRow(id, title) {
      var _this8 = this;

      axios.post('/extra_screens/getTablePosition', {
        title: title
      }).then(function (response) {
        _this8.table.jumpToRow(id, response.data);

        _this8.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenForm.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtraScreenForm.vue?vue&type=template&id=691a8202& */ "./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202&");
/* harmony import */ var _ExtraScreenForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraScreenForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExtraScreenForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/extra-screens/ExtraScreenForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExtraScreenForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenForm_vue_vue_type_template_id_691a8202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExtraScreenForm.vue?vue&type=template&id=691a8202& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenForm.vue?vue&type=template&id=691a8202& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content creditors-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header creditors-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      !_vm.editing
                        ? _c("span", [_vm._v("Extra Screen will be Added")])
                        : _c("span", [_vm._v("Extra Screen will be Changed")]),
                    ]),
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
                staticClass: "card-body overflow-auto p-3",
                style: _vm.modal ? "min-height:65vh" : "",
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-xxl-4 col-xl-5",
                        name: "title",
                        label: "Title",
                        error: _vm.errors.title,
                        popOverContainer: "#" + this.id,
                        "pop-over":
                          "<h4>Title</h4>\r\n                        <p>The <strong>Title</strong> will be displayed as either the Tab title or Section title depending on its position.</p>\r\n                        <p>The title is also used as the <em>prefix</em> of the <em>fields</em> which can be used in Document Templates (to assemble documents with the Extra Screen data).</p>\r\n                        <p>For example, if the title of the Extra Screen is 'Insurance Details' and it contains a field called 'Policy Number', you can insert this into a Document by inserting <strong>insuranceDetails->policyNumber</strong> in the document.</p>\r\n                        <p><strong>Note:</strong>The title of the Extra Screen must be unique and it is advisable that it is not changed otherwise any Documents using the old title (i.e. prefix) will no longer work and each Document will need to be modified.</p>",
                      },
                      on: { change: _vm.setPrefix },
                      model: {
                        value: _vm.record.title,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "title", $$v)
                        },
                        expression: "record.title",
                      },
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      attrs: {
                        _class: "col-xxl-8 col-xl-7",
                        name: "description",
                        label: "Description",
                        error: _vm.errors.description,
                        popOverContainer: "#" + this.id,
                        "pop-over":
                          "<h4>Description</h4>\r\n                    <p>Provide a <strong>description</strong> to describe the purpose of the Extra Screen or to give additional details about it.</p>\r\n                    <p>It is <em>not</em> displayed on the Extra Screen.</p>",
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
                  { staticClass: "form-group row" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-xxl-4 col-xl-5" },
                      [
                        _c("label", [_vm._v("Position")]),
                        _vm._v(" "),
                        _c("pop-over", {
                          attrs: {
                            container: "#" + _vm.id,
                            content:
                              "\r\n                            <h4>Extra Screen Position</h4>\r\n                            <p>An Extra Screen can be displayed in the Details tab of the Form it belongs to or in its own Tab (at the top of the Form).</p>\r\n                            <p>Choose <strong>Form</strong> to display the Extra Screen in the Form or choose <strong>Tab</strong> to display it in it's own tab.</p>\r\n                            <p>Choose the approprate position based on its relevance and the available space used by other Extra Screens and their tabs.</p>\r\n                        ",
                          },
                        }),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.screenPositionOptions,
                            clearable: false,
                            searchable: false,
                            reduce: function (screenPositionOptions) {
                              return screenPositionOptions.value
                            },
                          },
                          model: {
                            value: _vm.record.position,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "position", $$v)
                            },
                            expression: "record.position",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("text-input", {
                      attrs: {
                        _class: "col-xxl-4 col-xl-5",
                        name: "prefix",
                        label: "Prefix",
                        error: _vm.errors.prefix,
                        popOverContainer: "#" + this.id,
                        "pop-over":
                          "<h4>Prefix</h4>\r\n                        <p>The <strong>Prefix</strong> serves to identify the <em>data</em> in the Extra Screen to enable it to be used in a Document Template.</p>\r\n                        <p>To conform to pre-defined standards, the prefix must be in <em>camel case</em>. For example, 'Letter Of Demand' in camel case is 'letterOfDemand'. Note: You can type in <em>normal text</em> (i.e. non camel case) if you prefer - the program will convert it to camel case for you.</p>\r\n                        <p>The Field Labels will be used as the suffix and will also be converted to camel case. So if the prefix of the Extra Screen is 'letterOfDemand' and it contains a Field called 'Cause Of Action', the name of the Merge Field (which you can insert into a Document Template) will be <strong>letterOfDemand->causeOfAction</strong>.</p>\r\n                        <p><strong>Note:</strong>The prefix of the Extra Screen must be unique and it is advisable that it is not changed otherwise any Templates using the old prefix will no longer work.</p>",
                      },
                      on: { change: _vm.convertPrefix },
                      model: {
                        value: _vm.record.prefix,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "prefix", $$v)
                        },
                        expression: "record.prefix",
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
                    _c(
                      "div",
                      { staticClass: "col-xxl-5 col-xl-6" },
                      [
                        _c("label", [_vm._v("Location")]),
                        _vm._v(" "),
                        _c("pop-over", {
                          attrs: {
                            container: "#" + _vm.id,
                            content:
                              "\r\n                            <h4>Extra Screen Location</h4>\r\n                            <p>Extra Screens can be added to a Matter or Party form to allow the user to capture additional information that may be relevant for a certian type of Party or type of Matter or if a Party plays a certain Role on a Matter.</p>\r\n                            <p>The location can be set to the following:</p>\r\n                            <p><strong>All Matters</strong>: Display this screen for <em>all</em> Matters.</p>\r\n                            <p><strong>All Parties</strong>: Display this screen for <em>all</em> Parties.</p>\r\n                            <p><strong>Matter Type</strong>: Display this screen for Matters with this Matter Type.</p>\r\n                            <p><strong>Document Set</strong>: Display this screen for Matters with this Document Set.</p>\r\n                            <p><strong>Party Role</strong>: Display this screen for <em>Matter Parties</em> who plays this Role on a Matter.</p>\r\n                            <p><strong>Party Type</strong>: Display this screen for Parties of this Type.</p>\r\n                            <p><strong>Party Entity</strong>: Display this screen for Parties who are this type of Entity.</p>\r\n                        ",
                          },
                        }),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.screenLocationOptions,
                            clearable: false,
                            searchable: false,
                            reduce: function (screenLocationOptions) {
                              return screenLocationOptions.value
                            },
                          },
                          model: {
                            value: _vm.record.location,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "location", $$v)
                            },
                            expression: "record.location",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("select-matter-type", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.record.location === "Matter Type",
                          expression: "record.location === 'Matter Type'",
                        },
                      ],
                      ref: _vm.id + "-select-matter-type",
                      attrs: {
                        id: _vm.id + "-select-matter-type",
                        _class: "col-xxl-6 col-xl-7",
                        popOver:
                          "<h4>Matter Type</h4><p>Only display this Extra Screen for Matters with this Matter Type.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        title:
                          "Display this Extra Screen for Matters with this Matter Type",
                        "form-ref": _vm.id + "-select-matter-type",
                        error: _vm.errors.matterTypeId,
                      },
                    }),
                    _vm._v(" "),
                    _c("select-document-set", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.record.location === "Document Set",
                          expression: "record.location === 'Document Set'",
                        },
                      ],
                      ref: _vm.id + "-select-document-set",
                      attrs: {
                        id: _vm.id + "-select-document-set",
                        _class: "col-xxl-6 col-xl-7",
                        popOver:
                          "<h4>Matter Type</h4><p>Only display this Extra Screen for Matters with this Document Set.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        title:
                          "Display this Extra Screen for Matters with this Document Set",
                        "form-ref": _vm.id + "-select-document-set",
                        error: _vm.errors.documentSetId,
                      },
                    }),
                    _vm._v(" "),
                    _c("select-party-entity", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.record.location === "Party Entity",
                          expression: "record.location === 'Party Entity'",
                        },
                      ],
                      ref: _vm.id + "-select-party-entity",
                      attrs: {
                        popOver:
                          "<h4>Party Entity</h4><p>Only display this Extra Screen for Parties that are this Entity Type.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        label: "Party Entity",
                        _class: "col-xxl-6 col-xl-7",
                        id: _vm.id + "-select-party-entity",
                        title: "The Entity of the Party",
                        "form-ref": _vm.id + "-select-party-entity",
                        error: _vm.errors.partyEntityId,
                      },
                    }),
                    _vm._v(" "),
                    _c("select-party-type", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.record.location === "Party Type",
                          expression: "record.location === 'Party Type'",
                        },
                      ],
                      ref: _vm.id + "-select-party-type",
                      attrs: {
                        popOver:
                          "<h4>Party Type</h4><p>Only display this Extra Screen for Parties that are this Type of Entity.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        label: "Party Type",
                        _class: "col-xxl-6 col-xl-7",
                        id: _vm.id + "-select-party-type",
                        title: "The Type of Party",
                        "form-ref": _vm.id + "-select-party-type",
                        error: _vm.errors.partyTypeId,
                      },
                    }),
                    _vm._v(" "),
                    _c("select-party-role", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.record.location === "Party Role",
                          expression: "record.location === 'Party Role'",
                        },
                      ],
                      ref: _vm.id + "-select-party-role",
                      attrs: {
                        popOver:
                          "<h4>Party Role</h4><p><p>Display this Extra Screen for Parties that play this Role on a Matter.</p>",
                        popOverContainer: _vm.modal ? "#" + _vm.id : "body",
                        label: "Party Role",
                        _class: "col-xxl-6 col-xl-7",
                        id: _vm.id + "-select-party-role",
                        title: "Roles a Party can play on a Matter",
                        formRef: _vm.id + "-select-party-role",
                        error: _vm.errors.partyRoleId,
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
                        value: _vm.formBuilderMode === "edit",
                        expression: "formBuilderMode === 'edit'",
                      },
                    ],
                    staticClass: "row",
                  },
                  [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("fieldset", { staticClass: "mt-1 pb-2" }, [
                        _c(
                          "legend",
                          { staticClass: "cp", on: { click: _vm.toggleMode } },
                          [
                            _c("i", { staticClass: "fa fa-server mr-2" }),
                            _vm._v("View Form"),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { attrs: { id: _vm.id + "-form-edit" } }),
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
                        value: _vm.formBuilderMode === "view",
                        expression: "formBuilderMode === 'view'",
                      },
                    ],
                    staticClass: "row",
                  },
                  [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("fieldset", { staticClass: "mt-1 pb-2" }, [
                        _c(
                          "legend",
                          {
                            staticClass: "btn-danger cp",
                            on: { click: _vm.toggleMode },
                          },
                          [
                            _c("i", { staticClass: "fa fa-edit mr-2" }),
                            _vm._v("Edit Form"),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { attrs: { id: _vm.id + "-form-view" } }, [
                          _c("form", {
                            attrs: {
                              id: _vm.id + "-form-view-form",
                              action: "#",
                            },
                          }),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                editing: _vm.editing,
                viewing: _vm.viewing,
                record: "Extra Screen",
              },
              on: {
                "ok-clicked": _vm.okClicked,
                "cancel-clicked": _vm.closeForm,
                "delete-clicked": _vm.deleteClicked,
              },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
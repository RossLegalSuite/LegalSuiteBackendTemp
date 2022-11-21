"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-document-sets-DocumentSetTemplatesForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import vueDropzone from "vue2-dropzone";
//import MergeTemplate from "@pages/merge-template";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  //mixins: [MergeTemplate, FormTemplate, modalTemplate],
  components: {//SelectMatter: () => import("@pages/matters/SelectMatter"),
    //vueDropzone: vueDropzone,
  },
  props: {
    id: String,
    resource: {
      type: String,
      "default": 'Document Templates'
    },
    modal: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/document_templates/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.pdfFile = _this.record.pdfFile; //Being watched

        _this.editing = true;

        _this.initFormData();

        setTimeout(function () {
          $('#' + _this.id + ' inputinput[name="title"]').focus();
        });
      });
    },
    initNewRecord: function initNewRecord(id) {
      var _this2 = this;

      this.record = {
        title: null,
        description: null,
        documentSetId: id,
        path: null,
        fileName: null,
        pdfFile: null,
        source: 'Matters',
        employeeId: root.loggedInEmployeeId
      };
      this.pdfFile = null;
      this.initFormData();
      setTimeout(function () {
        $('#' + _this2.id + ' input[name="title"]').focus();
      });
    },
    initFormData: function initFormData() {
      this.errors = {};
      this.uploading = false; // Show the Save button

      this.displayForm(); //https://rowanwins.github.io/vue-dropzone/docs/dist/#/methods

      this.$refs['drop-zone-component'].removeAllFiles(true);
    },
    setOptions: function setOptions() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.abortMerge = false;
      this.mergeOptions = {
        source: this.record.docxFile,
        destinationFileName: this.record.fileName,
        destinationFolder: 'merged',
        dataSource: 'Matters',
        id: id,
        download: false
      };
    },
    testMerge: function testMerge() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.selectMatter.selectMatter(_this3);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    okClicked: function okClicked() {
      var _this4 = this;

      var closeForm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.uploading) {
        showError('Document is uploading', 'Please wait for the upload to complete.');
        return;
      }

      axios.post('/document_templates/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this4.errors = response.data.errors;
          }
        } else {
          _this4.errors = {};

          if (closeForm) {
            _this4.highlightTableRow(response.data.id, response.data.title);

            _this4.closeForm();
          }
        }
      });
    },
    highlightTableRow: function highlightTableRow(id, title) {
      var _this5 = this;

      axios.post('/document_templates/getTablePosition', {
        title: title
      }).then(function (response) {
        _this5.table.jumpToRow(id, response.data);
      });
    },
    pageTitle: function pageTitle() {
      return this.record.title;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n@-webkit-keyframes passing-through {\n0% {\n    opacity: 0;\n    transform: translateY(40px);\n}\n30%, 70% {\n    opacity: 1;\n    transform: translateY(0px);\n}\n100% {\n    opacity: 0;\n    transform: translateY(-40px);\n}\n}\n@keyframes passing-through {\n0% {\n    opacity: 0;\n    transform: translateY(40px);\n}\n30%, 70% {\n    opacity: 1;\n    transform: translateY(0px);\n}\n100% {\n    opacity: 0;\n    transform: translateY(-40px);\n}\n}\n@-webkit-keyframes slide-in {\n0% {\n    opacity: 0;\n    transform: translateY(40px);\n}\n30% {\n    opacity: 1;\n    transform: translateY(0px);\n}\n}\n@keyframes slide-in {\n0% {\n    opacity: 0;\n    transform: translateY(40px);\n}\n30% {\n    opacity: 1;\n    transform: translateY(0px);\n}\n}\n@-webkit-keyframes pulse {\n0% {\n    transform: scale(1);\n}\n10% {\n    transform: scale(1.1);\n}\n20% {\n    transform: scale(1);\n}\n}\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n10% {\n    transform: scale(1.1);\n}\n20% {\n    transform: scale(1);\n}\n}\n.dropzone, .dropzone * {\n  box-sizing: border-box;\n}\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px;\n}\n.dropzone.dz-clickable {\n    cursor: pointer;\n}\n.dropzone.dz-clickable * {\n      cursor: default;\n}\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n      cursor: pointer;\n}\n.dropzone.dz-started .dz-message {\n    display: none;\n}\n.dropzone.dz-drag-hover {\n    border-style: solid;\n}\n.dropzone.dz-drag-hover .dz-message {\n      opacity: 0.5;\n}\n.dropzone .dz-message {\n    text-align: center;\n    margin: 2em 0;\n}\n.dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    margin: 16px;\n    min-height: 100px;\n}\n.dropzone .dz-preview:hover {\n      z-index: 1000;\n}\n.dropzone .dz-preview:hover .dz-details {\n        opacity: 1;\n}\n.dropzone .dz-preview.dz-file-preview .dz-image {\n      border-radius: 20px;\n      background: #999;\n      background: linear-gradient(to bottom, #eee, #ddd);\n}\n.dropzone .dz-preview.dz-file-preview .dz-details {\n      opacity: 1;\n}\n.dropzone .dz-preview.dz-image-preview {\n      background: white;\n}\n.dropzone .dz-preview.dz-image-preview .dz-details {\n        transition: opacity 0.2s linear;\n}\n.dropzone .dz-preview .dz-remove {\n      font-size: 14px;\n      text-align: center;\n      display: block;\n      cursor: pointer;\n      border: none;\n}\n.dropzone .dz-preview .dz-remove:hover {\n        text-decoration: underline;\n}\n.dropzone .dz-preview:hover .dz-details {\n      opacity: 1;\n}\n.dropzone .dz-preview .dz-details {\n      z-index: 20;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      font-size: 13px;\n      min-width: 100%;\n      max-width: 100%;\n      padding: 2em 1em;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.9);\n      line-height: 150%;\n}\n.dropzone .dz-preview .dz-details .dz-size {\n        margin-bottom: 1em;\n        font-size: 16px;\n}\n.dropzone .dz-preview .dz-details .dz-filename {\n        white-space: nowrap;\n}\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n          border: 1px solid rgba(200, 200, 200, 0.8);\n          background-color: rgba(255, 255, 255, 0.8);\n}\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n            border: 1px solid transparent;\n}\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n        background-color: rgba(255, 255, 255, 0.4);\n        padding: 0 0.4em;\n        border-radius: 3px;\n}\n.dropzone .dz-preview:hover .dz-image img {\n      transform: scale(1.05, 1.05);\n      filter: blur(8px);\n}\n.dropzone .dz-preview .dz-image {\n      border-radius: 20px;\n      overflow: hidden;\n      width: 120px;\n      height: 120px;\n      position: relative;\n      display: block;\n      z-index: 10;\n}\n.dropzone .dz-preview .dz-image img {\n        display: block;\n}\n.dropzone .dz-preview.dz-success .dz-success-mark {\n      -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.dropzone .dz-preview.dz-error .dz-error-mark {\n      opacity: 1;\n      -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n      pointer-events: none;\n      opacity: 0;\n      z-index: 500;\n      position: absolute;\n      display: block;\n      top: 50%;\n      left: 50%;\n      margin-left: -27px;\n      margin-top: -27px;\n}\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n        display: block;\n        width: 54px;\n        height: 54px;\n}\n.dropzone .dz-preview.dz-processing .dz-progress {\n      opacity: 1;\n      transition: all 0.2s linear;\n}\n.dropzone .dz-preview.dz-complete .dz-progress {\n      opacity: 0;\n      transition: opacity 0.4s ease-in;\n}\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n      -webkit-animation: pulse 6s ease infinite;\n      animation: pulse 6s ease infinite;\n}\n.dropzone .dz-preview .dz-progress {\n      opacity: 1;\n      z-index: 1000;\n      pointer-events: none;\n      position: absolute;\n      height: 16px;\n      left: 50%;\n      top: 50%;\n      margin-top: -8px;\n      width: 80px;\n      margin-left: -40px;\n      background: rgba(255, 255, 255, 0.9);\n      -webkit-transform: scale(1);\n      border-radius: 8px;\n      overflow: hidden;\n}\n.dropzone .dz-preview .dz-progress .dz-upload {\n        background: #333;\n        background: linear-gradient(to bottom, #666, #444);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 0;\n        transition: width 300ms ease-in-out;\n}\n.dropzone .dz-preview.dz-error .dz-error-message {\n      display: block;\n}\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n      opacity: 1;\n      pointer-events: auto;\n}\n.dropzone .dz-preview .dz-error-message {\n      pointer-events: none;\n      z-index: 1000;\n      position: absolute;\n      display: block;\n      display: none;\n      opacity: 0;\n      transition: opacity 0.3s ease;\n      border-radius: 8px;\n      font-size: 13px;\n      top: 130px;\n      left: -10px;\n      width: 140px;\n      background: #be2626;\n      background: linear-gradient(to bottom, #be2626, #a92222);\n      padding: 0.5em 1.2em;\n      color: white;\n}\n.dropzone .dz-preview .dz-error-message:after {\n        content: '';\n        position: absolute;\n        top: -6px;\n        left: 64px;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid #be2626;\n}\n.vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:.2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone>i{color:#ccc}.vue-dropzone>.dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone>.dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone>.dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone>.dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone>.dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone>.dz-preview .dz-details .dz-filename span,.vue-dropzone>.dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone>.dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone>.dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone>.dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone>.dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px #fff solid;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone>.dz-preview:hover .dz-remove{opacity:1}.vue-dropzone>.dz-preview .dz-error-mark,.vue-dropzone>.dz-preview .dz-success-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone>.dz-preview .dz-error-mark svg,.vue-dropzone>.dz-preview .dz-success-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone>.dz-preview .dz-error-message{margin-left:auto;margin-right:auto;left:0;width:100%;text-align:center}.vue-dropzone>.dz-preview .dz-error-message:after{display:none}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue2Dropzone_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue2Dropzone.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue2Dropzone_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue2Dropzone_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa& */ "./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa&");
/* harmony import */ var _DocumentSetTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentSetTemplatesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocumentSetTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/document-sets/DocumentSetTemplatesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentSetTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentSetTemplatesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentSetTemplatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue2Dropzone_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue2Dropzone.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentSetTemplatesForm_vue_vue_type_template_id_68eabbaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/document-sets/DocumentSetTemplatesForm.vue?vue&type=template&id=68eabbaa& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
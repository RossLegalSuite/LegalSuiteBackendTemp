import VueAxios from "vue-axios";
import axios from "axios";
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import compiler from 'vue-template-compiler';
window.compiler = compiler;

//https://artemsky.github.io/vue-snotify/documentation/index.html
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css';


import "jquery-ui/ui/widgets/draggable.js"; // To drag modals
import 'jquery-ui/themes/base/draggable.css';

import "jquery-ui/ui/tabbable.js"; // Needed for tabGuard

//JQueryUI Sorting
import "jquery-ui/ui/widget.js"; 
import "jquery-ui/ui/data.js"; 
import "jquery-ui/ui/scroll-parent.js"; 
import "jquery-ui/ui/widgets/sortable.js";
import "jquery-ui/ui/widgets/mouse.js";
import 'jquery-ui/themes/base/sortable.css';

// JQueryUI Resizing
//import "jquery-ui/ui/widget.js"; 
//import "jquery-ui/ui/widgets/mouse.js"; 
import "jquery-ui/ui/disable-selection.js"; 
import "jquery-ui/ui/widgets/resizable.js"; 

//import 'jquery-ui/themes/base/all.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/resizable.css';
//import 'jquery-ui/themes/resizable.css';

// import {ContextMenu, ContextMenuItemTypes} from 'jquery-contextmenu';
// window.contextMenu = new ContextMenu();


// https://docxtemplater.readthedocs.io/en/latest/faq.html#docxtemplater-in-a-vuejs-project
import Docxtemplater from "docxtemplater";

import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import InspectModule from "docxtemplater/js/inspect-module";


//https://docxtemplater.readthedocs.io/en/latest/angular_parse.html
import expressions from 'angular-expressions';
import assign from "lodash/assign";


//Required for the Excel HTML5 export button - Deprecate and remove from package.json
import JSZip from "jszip";

// ColorPicker: https://huebee.buzz/
// window.Huebee = require('huebee');
// import "huebee/dist/huebee.min.css";

import "datatables.net-bs4";
import "datatables.net-select-bs4";
// require("datatables.net-scroller-bs4");

// import "datatables.net-bs4";
// import "datatables.net-select-bs4";
// import "datatables.net-scroller-bs4";

import moment from "moment";
window.moment = moment;

window.Vue = require("vue").default;

Vue.use(VueRouter, VueAxios, axios);

Vue.use(Vuex);

//https://mattzollinhofer.github.io/vue-typeahead-bootstrap-docs/guide/gettingStarted.html#installation
//import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
//Vue.component('vue-typeahead', VueTypeaheadBootstrap)


import vSelect from 'vue-select';

// https://vue-select.org/guide/components.html#setting-globally-at-registration 
vSelect.props.components.default = () => ({
    Deselect: {
        render: createElement => createElement('span', '❌'),
    },
    OpenIndicator: {
        render: createElement => createElement('span', '🔽'),
    },
});


Vue.component('v-select', vSelect);
import 'vue-select/dist/vue-select.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

//https://vue-select.org/guide/positioning.html#popper-js-integration
import { createPopper } from '@popperjs/core';


// https://getdatepicker.com/4/Options/
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
Vue.use(datePicker);

import {  
    FormInputPlugin, 
    DropdownPlugin,
    FormCheckboxPlugin,
    FormRadioPlugin,
    FormGroupPlugin,
    FormSelectPlugin,
} from 'bootstrap-vue';


Vue.use(FormInputPlugin);
Vue.use(DropdownPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormSelectPlugin)

const leftTabs = [
    {
        pageName: 'Home',
        title: 'Home',
        routeName: 'home',
        class: 'home-bg',
        icon: 'fa-home',
    },
    {
        pageName: 'Welcome',
        title: 'Home',
        routeName: 'guest',
        class: 'home-bg',
        icon: 'fa-home',
    },
    {
        pageName: 'Developers',
        title: 'Developers',
        routeName: 'developers',
        class: 'filenotes-bg',
        icon: 'fa-user-circle-o',
    },

    {
        pageName: 'Clients',
        title: 'Clients',
        routeName: 'clients',
        class: 'invoices-bg',
        icon: 'fa-address-book',
    },

    {
        pageName: 'Errorlog',
        title: 'API Errors',
        routeName: 'errorlog',
        class: 'red-bg',
        icon: 'fa-bug',
    },
    
    {
        pageName: 'ApplicationErrorLog',
        title: 'Application Errors',
        routeName: 'application-errorlog',
        class: 'bills-bg',
        icon: 'fa-server',
    },

    {
        pageName: 'Trafficlog',
        title: 'Traffic Log',
        routeName: 'trafficlog',
        class: 'blue-bg',
        icon: 'fa-automobile',
    },


];

//See: https://alligator.io/vuejs/intro-to-vuex/
const store = new Vuex.Store({

    state: {

        currentServer: {
            url: 'https://legalsuitestaging.co.za',
            description: 'Staging',
        },

        currentMatter: {
            recordid: null,
            fileref: null,
            description: null,
            employeeid: null,
            costcentreid: null,
            vatexemptflag: null,
            interestrate: null,
            feesheetid: null,
            debtorcollcommoption: null,
            stagegroupid: null,
        },
        currentParty: {
            recordid: null,
            code: null,
            name: null,
        },
        currentColData: {
            matterid: null,
            emofirstdate: null,
            emoamount: null,
            emocommissionpercent: null,
        },
        currentEmployee: {
            id: null,
            name: null,
            email: null,
        },
        activeLeftTabs: loggedIn ? [leftTabs[0]] : [leftTabs[1]],
        leftTabs: leftTabs,

    },

    getters: {

        currentServer: state => state.currentServer,

        activeLeftTabs: state => state.activeLeftTabs,

        leftTabs: state => state.leftTabs,

        currentMatter: state => state.currentMatter,

        currentColData: state => state.currentColData,
        currentEmployee: state => state.currentEmployee,
        currentParty: state => state.currentParty,

    },
    
    mutations: {

        setCurrentServer(state, currentServer) {
            state.currentServer.url = currentServer.url;
            state.currentServer.description = currentServer.description;
        },

        setCurrentMatter(state, currentMatter) {
            state.currentMatter.recordid = currentMatter.recordid;
            state.currentMatter.fileref = currentMatter.fileref;
            state.currentMatter.description = currentMatter.description;
            state.currentMatter.employeeid = currentMatter.employeeid;
            state.currentMatter.costcentreid = currentMatter.costcentreid;
            state.currentMatter.vatexemptflag = currentMatter.vatexemptflag;
            state.currentMatter.interestrate = currentMatter.interestrate;
            state.currentMatter.feesheetid = currentMatter.feesheetid;
            state.currentMatter.stagegroupid = currentMatter.stagegroupid;
            state.currentMatter.debtorcollcommoption = currentMatter.debtorcollcommoption;
        },

        setCurrentColData(state, currentColData) {
            state.currentColData.matterid = currentColData.matterid;
            state.currentColData.emofirstdate = currentColData.emofirstdate;
            state.currentColData.emoamount = currentColData.emoamount;
            state.currentColData.emocommissionpercent = currentColData.emocommissionpercent;
        },

        setCurrentEmployee(state, currentEmployee) {
            state.currentEmployee.recordid = currentEmployee.recordid;
            state.currentEmployee.name = currentEmployee.name;
            state.currentEmployee.email = currentEmployee.email;
        },
        
        setCurrentParty(state, currentParty) {
            state.currentParty.recordid = currentParty.recordid;
            state.currentParty.code = currentParty.code;
            state.currentParty.name = currentParty.name;
        },
        

        displayLeftTab(state, thisTab) {

            let foundTab = state.activeLeftTabs.filter(tab => tab.title == thisTab.title);

            if ( !foundTab.length ) {

                state.activeLeftTabs.push({
                    pageName: thisTab.pageName,
                    title: thisTab.title,
                    routeName: thisTab.routeName,
                    class: thisTab.class,
                    icon: thisTab.icon,
                });
            }

        },

        hideLeftTab(state, pageName) {

            let thisIndex = state.activeLeftTabs.findIndex( leftTab => leftTab.pageName === pageName);
            state.activeLeftTabs.splice(thisIndex,1);

        },

        hideOtherTabs(state, pageName) {

            let thisIndex = state.activeLeftTabs.findIndex( leftTab => leftTab.pageName === pageName);

            if ( thisIndex > -1 ) {
                let homeTab = state.activeLeftTabs[0];
                let thisTab = state.activeLeftTabs[thisIndex];
                state.activeLeftTabs = [homeTab,thisTab];
            }

        },

        hideAllTabs(state) {

            state.activeLeftTabs.splice(1);

        },

    }    

});

Vue.use(Snotify, {
    toast: {
        titleMaxLength: 100,
        bodyMaxLength: 300,
        timeout: 2000,
        showProgressBar: false,
        position: "centerCenter",
    }
});

Vue.config.productionTip = false;
//Vue.config.devtools = false; // Removes "Download the Vue Devtools extension for a better development experience" from the console
//Vue.config.performance = true; //See: https://vuejs.org/v2/api/#performance

import './bootstrap';

//require("../../node_modules/bootstrap-select/dist/js/bootstrap-select");
import "bootstrap-select/dist/js/bootstrap-select";
import "bootstrap-select/dist/css/bootstrap-select.css";

import routes from './routes';

const router = new VueRouter(routes);

let download = require('./download');   

// Disable the browser's right-click menu
$(document).bind('contextmenu', function () { return false;	});

if ( !loggedIn ) {

    let files = require.context("./components/forms", true, /\.vue$/i);

    files.keys().map(key =>
        Vue.component(key.split("/").pop().split(".")[0],files(key).default)
    );    


    files = require.context("./components/layout", true, /\.vue$/i);

    files.keys().map(key =>
        Vue.component(key.split("/").pop().split(".")[0],files(key).default)
    );    


    window.root = new Vue({
        el: '#app',
        router,
        store,

        mounted() {
            console.clear();
        },

    });    

} else {

    const files = require.context("./components", true, /\.vue$/i);
    
    files.keys().map(key =>
        Vue.component(key.split("/").pop().split(".")[0],files(key).default)
        );    


        window.root = new Vue({
            el: '#app',
            router,
            store,
            data() {
                return {
                    clients: [],
                    developers: [],
                    companyCode: 'backend',
                    developerLeftTableLoaded: false,
                    trafficlogLeftTableLoaded: false,
                    errorlogLeftTableLoaded: false,
                    applicationErrorlogLeftTableLoaded: false,
                    clientLeftTableLoaded: false,
                    clientsLeftTableLoaded: false,

                    loggedInPartyFlag: false,
                    loggedInEmployeeFlag: false,
                    matterLeftTableLoaded: false,
                    partyLeftTableLoaded: false,
                    matterPartiesLeftTableLoaded: false,
                    employeeLeftTableLoaded: false,
                    feeNoteLeftTableLoaded: false,
                    doclogLeftTableLoaded: false,
                    fileNoteLeftTableLoaded: false,
                    reminderLeftTableLoaded: false,
                    correspondenceLeftTableLoaded: false,
                    generatedComponent: null,
                    control: {},
                    lolSettings: {},
                    global: {},
                    holidays: [],
                    currentEmployee: {},
                    supervisorFlag: false,
                    errorTextColor: '#222',
                    errorBackgroundColor: '#FAA',
                    supervisorGroupId: null,
                    dropdownIsLoading: false,
                    matters: [],
                    parties: [],
                    employees:[],
                    doclogCategories:[],
                    doclogSubCategories:[],
                    employeeRoles:[],
                    planOfActions:[],
                    stageGroups:[],
                    stages:[],
                    billingRates:[],
                    accounts:[],
                    businessBankAccounts: [],
                    trustBankAccounts: [],
                    business: [],
                    incomeAccounts: [],
                    expenseAccounts: [],
                    revenueStampAccounts: [],
                    creditors:[],
                    costCentres:[],
                    extraScreens:[],
                    matterExtraScreens:[],
                    causeOfActions:[],
                    languages:[],
                    branches:[],
                    vatRates:[],
                    feeSheets:[],
                    feeCodes:[],
                    feeUnits:[],
                    documentSets:[],
                    matterTypes:[],
                    deedsOffices:[],
                    partyEntities:[],
                    partyTypes:[],
                    partyRoles:[],
                    telephoneTypes:[],
                    countries:[],
                    refreshTables: [],

                    
                    templateData: {},

                };
            },

            computed: {

                screenNarrow() {
                    return window.innerWidth < 1600 ? true : false;
                },
        
            },

            created() {

                this.loggedInEmployeeFlag = true;

                this.setDatePickerOptions();

                axios.post('utils/setServerURL',{serverUrl: 'https://legalsuitestaging.co.za'})
                
                .then(() => {

                    axios.post('/clients/get').then(response => {

                        if (response.data.error) {
    
                            showError( 'Error getting Clients', response.data.error);
    
                        } else if (response.data.errors) {
    
                            showError( 'Error getting Clients', response.data.errors);
        
                        } else {
    
                            this.clients = response.data.data;
                        }
    
                    }).catch( (error) => {
                        showError('Error getting Clients',error)
                    });
    
                    axios.post('/developers/get').then(response => {
    
                        if (response.data.error) {
    
                            showError( 'Error getting Developers', response.data.error);
    
                        } else if (response.data.errors) {
    
                            showError( 'Error getting Developers', response.data.errors);
        
                        } else {
    
                            this.developers = response.data.data;
                        }
    
                    }).catch( (error) => {
                        showError('Error getting Developers',error)
                    });

                })

                .catch( (error) => {
                    showError('Error setting server target session', error); 
                });


                this.reportTemplate = `
                <html><head><title>{{report.title}} Report</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                </head><body>
                <h1 class="text-center">{{report.title}}</h1>
                <div><strong>Printed On:</strong> {{report.date}}</div>

                <table class="table table-sm no-border w-100">
                    <thead>
                        <tr class="bg-gray">
                            <th class="border" :key="column.title" v-for="column in report.columns">
                                {{column.title}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="row.id" v-for="row in report.rows">
                            <td class="border" :key="column.title" v-for="column in report.columns">
                                <div v-html="column.render(row)"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </body></html>`;

            },

            methods: {

                checkPermission( resource, secProc, action) {
                    
                    //console.log("checkPermission",resource, secProc, action);
                    
                    if (root.control.licencevaliduntil >= 90000) {
                        root.$snotify.simple('You are not licenced to ' + action + ' a ' + resource, 'Access Denied', { timeout: 3000, icon: 'icons/lock.gif'});
                        return false;
                    }
                    
                    if ( typeof resource == 'undefined' ) {
                        console.error('No resource defined in CheckPermission()')
                        return true;
                    }
                    
                    if ( typeof secProc == 'undefined') {
                        console.error('No secProc defined in CheckPermission()')
                        return true;
                    }


                    if ( typeof action == 'undefined') {
                        console.error('No action defined in CheckPermission()')
                        return true;
                    }

                    //console.log("checkPermission secProcDescription = ",secProc + ' - ' + action);
                    
                    if (!root.supervisorFlag) {
                        
                        let foundSecProc = root.secProcs.filter(secProc => secProc.SecGroupId == root.secGroupId && secProc.AccessFlag == root.supervisorFlag && secProc.Description == secProc + ' - ' + action)[0];

                        //console.log("checkPermission foundSecProc",foundSecProc);
                        //console.log("checkPermission foundSecProc.AccessFlag",foundSecProc?.AccessFlag);

                        if ( foundSecProc?.AccessFlag == '0' ) {

                            root.$snotify.simple('Your Security Settings do not allow you to ' + action + ' a ' + resource, 'Access Denied', { timeout: 3000, icon: 'icons/lock.gif'});
                            return false;

                        }

                    }
                    

                    /**************************** 
                    TO DO: Pass SP:Description
                    *****************************
                    ! Security Check
                    Clear(SP:Record)
                    SP:SecGroupId = GLO:SecGroupId
                    SP:AccessFlag = GLO:SupervisorFlag
                    Case GlobalRequest
                    Of InsertRecord
                        SP:Description = 'Matters - Update - Insert'
                    Of ChangeRecord
                        LSF:CheckFieldFlag = True
                        SP:Description = 'Matters - Update - Change'
                    Of DeleteRecord
                        SP:Description = 'Matters - Update - Delete'
                    Of ViewRecord
                        SP:Description = 'Matters - Update - View'
                    Else
                        SP:Description = 'Matters - Update'
                    .
                    IF Access:SecProc.TryFetch(SP:SecGroupKey) Then Access:SecProc.Insert().
                    IF SP:DisableOnInsertFlag AND GlobalRequest = InsertRecord
                        LSF:CheckFieldFlag = True
                    END
                    If ~SP:AccessFlag and ~GLO:SupervisorFlag
                        IF GlobalRequest <> ChangeRecord
                        Message('Access Denied||Your security settings do not allow you access to this area of the program.|',SP:Description,'~lock.ico')
                        Return RequestCancelled
                        Else
                        GlobalRequest = ViewRecord
                        If ThisSecProc.CheckAccess() Then Return RequestCancelled.
                        .
                    .*/
                    

                    return true;

                },

                //https://vue-select.org/guide/positioning.html#popper-js-integration
                popUp (dropdownList, component, {width}) {

                    dropdownList.style.width = width;
        
                    const popper = createPopper(component.$refs.toggle, dropdownList, {
                    placement: 'top',
                    modifiers: [
                        { name: 'offset', options: {offset: [0, -1] } },
                        {
                            name: 'toggleClass',
                            enabled: true,
                            phase: 'write',
                            fn ({state}) {
                                component.$el.classList.toggle('drop-up', state.placement === 'top')
                            },
                        }]
                    });
        
                    return () => popper.destroy();
                },
        
                setDatePickerOptions() {

                    this.datePickerOptions = {
                        focusOnShow: false,
                        format: 'DD MMM YYYY',
                        useCurrent: false,                  
                        widgetPositioning: {
                            horizontal: 'auto',
                            vertical: 'bottom'
                        }
                    };

                    this.datePickerIsoOptions = {
                        focusOnShow: false,
                        format: 'YYYY-MM-DD',
                        useCurrent: false,                  
                        widgetPositioning: {
                            horizontal: 'auto',
                            vertical: 'bottom'
                        }
                    };

                    this.dateTimePickerOptions = {
                        focusOnShow: false,
                        format: 'DD MMM YYYY HH:mm:ss',
                        useCurrent: false,     
                        widgetPositioning: {
                            horizontal: 'auto',
                            vertical: 'bottom'
                        }
                    };
                },

                async getFormHeight( id, className ) {

                    return await new Promise( (resolve, reject) => {            
        
                        let $formBody = $('#' + id).find( className );

                        if ( !$formBody.length) {

                            reject("No form element found in " + id );

                        } else {

                            let formHeight = Math.round( $formBody.outerHeight() );
            
                            if ( formHeight == 0 ) {
                                
                                setTimeout(function () {
                                    
                                    formHeight = Math.round( $formBody.outerHeight() );
            
                                    if ( formHeight > 0 ) {
            
                                        resolve(formHeight);
            
                                    } else {
                                        
                                        setTimeout(function () {
                                            formHeight = Math.round( $formBody.outerHeight() );
                                            
                                            if ( formHeight > 0 ) {
                                                resolve(formHeight);
                                            } else {
                                                reject("No formHeight obtained in Form (" + id + ")");
                                            }
                                        }, 500);
            
                                    }
            
                                }, 500);
            
                            } else {
            
                                resolve(formHeight);
            
                            }
                            
                        }
        
                    });
        
                },


                async getAvailableSpace( topElement, bottomElement , spacing = 0) {

                    return await new Promise( (resolve, reject) => {            

                        //setTimeout(function () {

                            let thisTopElement = $(topElement);
                            let thisBottomElement = $(bottomElement);

                            if ( !thisTopElement.length) {

                                reject("No Top Element found - topElement");

                            } else if ( !thisBottomElement.length) {

                                reject("No Bottom Element found - bottomElement");

                            } else {

                                let returnValue = thisBottomElement.offset().top - thisTopElement.offset().top - spacing;

                                if ( returnValue < 100 ) returnValue = 100;

                                resolve(returnValue);

                            }

                        //}, 500);                                            

                    });
                },

                createRecordTemplateData(tableName, templateRecord, id, roleid = null, sorter = null ) {

                    return new Promise( (resolve, reject) => {     

                        let templateData = this.initTemplateData();

                        let url = '/' + tableName.toLowerCase() + '/getTemplateData/' + id;

                        axios.post( url, {...templateRecord, roleid: roleid, sorter: sorter} )
                        
                        .then(async response => {
    
                            if ( response.data.errors ) {
        
                                reject('Error getting ' + tableName + ' Template Data: ' + response.data.errors);
                                
                            } else {
                                

                                templateData = {...templateData,...response.data};

                                //*****************************
                                // PUT THESE IN THE API for Party!!
                                //*****************************
                                // let contacts = await axios.post('/partele/get',{parentId: this.templateData.party.recordid});
                                
                                // this.templateData.party.contacts = contacts.data;
                                
                                // let matters = await axios.post('/matters/get',{parentId: this.templateData.party.recordid});
                                
                                // this.templateData.party.matters = matters.data;
                                
                                // this.templateData.party.totalMatters = matters.data.length;


                                resolve(templateData);
                            }
                        }).catch(error => { 

                            reject('Error getting ' + tableName + ' Template Data: ' + error);

                        });                                         
                    });

                },

                vueRender( contents, data ) {

                    return new Promise((resolve, reject) => {                                     

                        if ( contents ) {

                            let generatedText = '';

                            this.generatedComponent = null;

                            Vue.component('global-generated-component', {
                                template: '<div>' + contents + '</div>',
                                data() { return data; },
                                props: this.setTemplateProps(),
                                methods: this.setTemplateMethods(),
                            });

                            this.generatedComponent = 'global-generated-component';

                            // Wait for component to render
                            this.$nextTick(() => { 

                                if ( !$('#global-generated-component').length ) {

                                    this.generatedComponent = null;

                                    reject('<p>Unable to generate template contents</p>')

                                } else {

                                    generatedText = $('#global-generated-component').html();

                                    this.generatedComponent = null;

                                    resolve(generatedText);
                                }


                            });


                        } else {

                            resolve('');
                        }

                    });

                },


                setTemplateProps() {

                    return {
                        filterBy: {type: String, default: '' },
                    };                                    
                },

                setTemplateMethods() {

                    return {

                        formatMoney(amount, currencySymbolFlag = true, decimalCount = 2, decimal = ".", thousands = ",") {
                            return formatMoney(amount, currencySymbolFlag, decimalCount, decimal, thousands);
                        },

                        formatDate( date, formatFlag = true,  format = '') {
                            return convertFromClarionDate( date, formatFlag,  format);
                        },

                        formatTime( time) {
                            return convertFromClarionTime( time );
                        },

                        htmlDecode(value) {
                            return htmlDecode(value);
                        },
                    
                    };


                },

                setCompanyTemplateData( languageId = null) {

                    if (!languageId) {
                        languageId = this.control.defaultlanguageid;
                    }
                    
                    let language = this.languages.filter(row => row.recordid == languageId)[0];

                    this.templateData.company = {};

                    this.templateData.company.name = language.name;
                    this.templateData.company.physicalLine1 = language.physicalline1;
                    this.templateData.company.physicalLine2 = language.physicalline2;
                    this.templateData.company.physicalLine3 = language.physicalline3;
                    this.templateData.company.physicalLine4 = language.physicalline4;
                    this.templateData.company.physicalCode = language.physicalcode;
                    this.templateData.company.postalLine1 = language.postalline1;
                    this.templateData.company.postalLine2 = language.postalline2;
                    this.templateData.company.postalLine3 = language.postalline3;
                    this.templateData.company.postalLine4 = language.postalline4;
                    this.templateData.company.postalCode = language.postalcode;
                    this.templateData.company.currencySymbol = language.currencysymbol;

                    this.templateData.company.email = this.control.email || '';
                    this.templateData.company.work = this.control.telephone || '';
                    this.templateData.company.fax = this.control.fax || '';
                    this.templateData.company.mobile = this.control.mobile || '';

                    this.templateData.company.logo = this.lolSettings.logo || '';
                    this.templateData.company.website = this.lolSettings.website || '';
                    this.templateData.company.twitter = this.lolSettings.twitter || '';
                    this.templateData.company.facebook = this.lolSettings.facebook || '';
                    this.templateData.company.instagram = this.lolSettings.instagram || '';
                    this.templateData.company.google = this.lolSettings.google || '';
                    this.templateData.company.otherChannel = this.lolSettings.otherChannel || '';
                    this.templateData.company.otherPlatform = this.lolSettings.otherPlatform || '';

                },

                initTemplateData() {

                    const templateData = {};
                    
                    templateData.report = {};

                    return {...templateData, ...root.templateData};

                },

                setTableToRefresh( route, tableRef, formRef) {

                    let refreshTables = this.refreshTables;
        
                    let index = refreshTables.findIndex( refreshTable => refreshTable.route === route && refreshTable.tableRef === tableRef);
        
                    if ( index === -1 ) {
        
                        //console.log('Added to refeshTables',route, tableRef, formRef);
        
                        refreshTables.push({route:route, tableRef: tableRef, formRef});
                    }
        
                },

                getCurrentVatRate(date) {

                    try {

                        let returnValue = 0;

                        //console.log("this.$store.getters.currentMatter.vatexemptflag",this.$store.getters.currentMatter.vatexemptflag);

                        if ( this.$store.getters.currentMatter.vatexemptflag ) {

                            returnValue = 0;
            
                        } else if ( this.control.vatmethod != 'N' ) {
            
                            if (date < 79352) {
            
                                returnValue = this.control.vatpercent2; // Before 1 April 2018
            
                            } else {
            
                                returnValue = this.control.vatpercent1;
            
                            }
                        }

                        return returnValue;

                    } catch(error) { 

                        showError('Error getting Current Vat Rate', error); 

                    };

                },


                getDateRange( period ) {

                    let returnValue = { fromDate: null, toDate: null };

                    if ( period === 'Today' ) {
        
                        returnValue.fromDate = returnValue.toDate = moment().format('YYYY-MM-DD');
                        
                    } else if ( period === 'Yesterday' ) {
                        
                        returnValue.fromDate = returnValue.toDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        
                    } else if ( period === 'This Week' ) {

                        returnValue.fromDate = moment().startOf('isoWeek').format('YYYY-MM-DD');
                        returnValue.toDate = moment().endOf('isoWeek').format('YYYY-MM-DD');
        
                    } else if ( period === 'Last Week' ) {

                        returnValue.fromDate = moment().subtract(1, 'week').startOf('isoWeek').format('YYYY-MM-DD');
                        returnValue.toDate = moment().subtract(1, 'week').endOf('isoWeek').format('YYYY-MM-DD');
        
                    } else if ( period === 'This Month' ) {

                        returnValue.fromDate = moment().startOf('month').format('YYYY-MM-DD');
                        returnValue.toDate = moment().endOf('month').format('YYYY-MM-DD');

                    } else if ( period === 'Last Month' ) {

                        returnValue.fromDate = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
                        returnValue.toDate = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');

                    } else if ( period === 'This Quarter' ) {

                        returnValue.fromDate = moment().startOf('quarter').format('YYYY-MM-DD');
                        returnValue.toDate = moment().endOf('quarter').format('YYYY-MM-DD');
        
                    } else if ( period === 'Last Quarter' ) {

                        returnValue.fromDate = moment().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DD');
                        returnValue.toDate = moment().subtract(1, 'quarter').endOf('quarter').format('YYYY-MM-DD');
        
                    } else if ( period === 'This Year' ) {

                        returnValue.fromDate = moment().startOf('year').format('YYYY-MM-DD');
                        returnValue.toDate = moment().endOf('year').format('YYYY-MM-DD');

                    } else if ( period === 'Last Year' ) {

                        returnValue.fromDate = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
                        returnValue.toDate = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
                    }

                    return returnValue;
        
                },
                        
                async downloadObject( path, mimeType = 'application/pdf' ) {

                    //https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch

                    // Note: For docx use mimeType =  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    
                    return fetch(path, {
                        method: 'GET',
                    })

                    .then((resp) => {
                        return resp.blob();
                    })

                    .then((blob) => {
                        
                        download(blob, getFileName(path), mimeType);

                    });

                },

                truncateText(data, cutoff, wordbreak = false ) {

                    return this.truncate(data, cutoff, wordbreak, false, false );
                
                },                
        
                truncate(data, cutoff, wordbreak = false, escapeHtml = true, returnHtml = true) {

                    return truncate(data, cutoff, wordbreak, escapeHtml, returnHtml);
                },

                htmlDecode(value) {

                    return htmlDecode(value);
                },

                // https://www.30secondsofcode.org/js/s/to-kebab-case
                toKebabCase(str) {
                    return  str
                    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                    .map(x => x.toLowerCase())
                    .join('-');
                },
                
                formatMoney(amount, currencySymbolFlag = true, decimalCount = 2, decimal = ".", thousands = ",") {

                    return formatMoney(amount, currencySymbolFlag, decimalCount, decimal, thousands);

                },

                isset(value) {

                    return isset(value);

                },

                stripCommas(number) {

                    return stripCommas(number);

                },

                formatDecimal(number) {

                    return formatDecimal(number);

                },

                parseMoney(value) {

                    return parseFloat(value.replace(/,/g, ''));
                },
                
                convertMoney(value) {
                
                    return value.replace(/,/g, '');
                },

                formatDate(date) {

                    return moment(date).format(this.control.dateFormat);

                },

                formatDateTime(date) {

                    return moment(date).format(this.control.dateFormat + ' HH:mm:ss');

                },


                salesTaxHint( text = 'excl') {

                    if ( this.control.salesTaxFlag ) {
                        return ' (' + text + ' ' + this.control.salesTaxType + ')';
                    } else {
                        return '';
                    }
        
                },

                async asyncForEach(array, callback) {
                    for (let index = 0; index < array.length; index++) {
                        await callback(array[index], index, array);
                    }
                },        
                
        
            },

        });


}

router.beforeEach((to, from, next) => {

    // Navigation Guard
    // Changes the page title based on the router's meta tag. See: https://alligator.io/vuejs/vue-router-modify-head/

    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

    next();

});



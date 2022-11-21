<template>

<div :id="id" :class="modal ? 'modal': ''">
    
    <div :class="modal ? 'modal-dialog modal-dialog-centered modal-lg' : ''">

        <div :id="id + '-form-border'" :class="modal ? 'modal-content filenotes-border' : 'card h-100 border-0'">

            <div :id="id + '-form-header'" :class="modal ? 'filenotes-bg' : 'card-header'">

                <div :class="modal ? 'modal-header' : 'd-flex justify-content-between'">

                    <div class="page-title">
                        <h3>
                            <span v-if="!editing && !savedFlag">Developer will be Added</span>
                            <span v-else>Developer will be Changed</span>
                        </h3>
                        <i v-if="modal" :id="id + '-modal-close-button'" title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
                    </div>

                    <page-close-button v-if="!modal" @closeClicked="closeForm"/>

                </div>

            </div>

            <div class="card-body form-tab-body p-3" :style="modal ? 'height:40vh' : ''">

                <form-tabs :tabs="tabs"/>

                <div v-show="activeTab === 'General'" class="form-tab-content">

                    <div class="form-group row">

                        <text-input 
                            v-model="record.name" 
                            label="Company Name"
                        />

                    </div>

                    <div class="form-group row">

                        <text-input 
                            v-model="record.contact_person" 
                            label="Contact Person"
                        />

                    </div>

                    <div class="form-group row">

                        <text-input 
                            v-model="record.contact_email" 
                            label="Email"
                        />

                    </div>

                    <div class="row">
                        <div class="col-md-12">

                            <fieldset class="mt-2 mb-3"><legend>Permissions</legend>

                                <div class="form-group row">

                                    <radio-buttons 
                                        _class="col-md-3" 
                                        :record="record" 
                                        column="get_access_flag" 
                                        name="get_access_flag" 
                                        label="Get Access" 
                                        :buttons="[
                                            {value:'1', text: 'Yes'},
                                            {value:'0', text: 'No'},
                                        ]" 
                                    />

                                    <radio-buttons 
                                        _class="col-md-3" 
                                        :record="record" 
                                        column="store_access_flag" 
                                        name="store_access_flag" 
                                        label="Put Access" 
                                        :buttons="[
                                            {value:'1', text: 'Yes'},
                                            {value:'0', text: 'No'},
                                        ]" 
                                    />

                                    <radio-buttons 
                                        _class="col-md-3" 
                                        :record="record" 
                                        column="update_access_flag" 
                                        name="update_access_flag" 
                                        label="Post Access" 
                                        :buttons="[
                                            {value:'1', text: 'Yes'},
                                            {value:'0', text: 'No'},
                                        ]" 
                                    />
                                    <radio-buttons 
                                        _class="col-md-3" 
                                        :record="record" 
                                        column="delete_access_flag" 
                                        name="delete_access_flag" 
                                        label="Delete Access" 
                                        :buttons="[
                                            {value:'1', text: 'Yes'},
                                            {value:'0', text: 'No'},
                                        ]" 
                                    />
                                </div>


                            </fieldset>


                        </div>
                    </div>

                    <div class="form-group row">

                        <text-area 
                            _class="col-md-12" 
                            v-model="record.developer_token" 
                            label="Developer Token"
                        />

                    </div>


                </div>


                <div v-show="activeTab === 'ApiAccess'" class="form-tab-content">

                    <api-access-table
                        :id="id + '-api-access-form-table'"
                        :ref="id + '-api-access-table'"
                        form-ref="api-access-form"
                        :table-id="id + '-api-access-table'"
                        :lazyLoadFlag="true"
                        :formTable="true"
                        :searchInputFocus="false"
                    />

                </div>

            </div>

            <div class="modal-footer justify-content-between">
                <div>

                    <button v-show="editing && activeTab == 'General'" class="btn btn-primary form-button mr-3" type="button" @click="deleteClicked">
                        <span title="Delete this Developer"><i class="fa fa-trash fa-lg mr-2"></i>Delete</span>
                    </button>

                </div>
                <div>

                    <button class="btn btn-success form-button mr-3" @click="okClicked(true)" type="button" title="Save the Item and close the Window"><i class="fa fa-check-circle fa-lg mr-2"></i>OK</button>

                    <button v-if="savedFlag || editing" class="btn btn-danger form-button" @click="closeForm" type="button" title="Close this screen"><i class="fa fa-times-circle fa-lg mr-2"></i>Close</button>

                    <button v-else class="btn btn-danger form-button" @click="closeForm" type="button" title="Exit without saving"><i class="fa fa-times-circle fa-lg mr-2"></i>Cancel</button>

                </div>
            </div>

        </div>

    </div>
    

    <api-access-form 
        :id="id + '-api-access-form'"
        ref="api-access-form" 
        :parentTableRef="id + '-api-access-table'"
        :modal="true"
    />

</div>

</template>    

<script>

import formTemplate from "@pages/form-template";
import modalTemplate from "@components/modals/modal-template";

export default {

    mixins: [modalTemplate, formTemplate ],
    
    components: {
        ApiAccessTable: () => import("./ApiAccessTable"),
        ApiAccessForm: () => import("./ApiAccessForm"),
    },

    props: {
        resource: {type: String, default: 'Developers' },
    },    

    data() {
        return {
            apiAccessTable: null,
            activeTab: null,
            tabs: [
                {
                    pageName: "General",
                    title: "Details",
                    iconClass: '',
                    visible: true,
                    active: true,
                },
                {
                    pageName: "ApiAccess",
                    title: "Api Access",
                    iconClass: '',
                    visible: false,
                    active: false,
                },
            ],
        }
    },

    watch: {

        activeTab(newValue) {

            if ( newValue === "ApiAccess" ) {
                
                setTimeout(() => {

                    if ( this.apiAccessTable.table ) {

                        this.apiAccessTable.table.columns.adjust;

                    } else {

                        this.apiAccessTable.loadDataTable( this.adjustApiAccessTableColumns ); 

                    }

                },100);
            }

        },
    },

    methods: {

        editRecord(id) {

            this.savedFlag = true;

            this.setGeneralTab();

            this.apiAccessTab = this.tabs.filter(tab => tab.pageName === 'ApiAccess')[0];
            this.apiAccessTab.visible = true;

            axios.post('/developers/get',{id: id})

            .then(response => {

                this.record = response.data.data[0];

                setTimeout(() => {
                    this.initializeFormTables();
                }, 100);


                this.initFormData();

            }).catch( (error) => {
                showError('Error',error)
            });

        },

        initNewRecord() {

            this.setGeneralTab();

            this.apiAccessTab = this.tabs.filter(tab => tab.pageName === 'ApiAccess')[0];
            this.apiAccessTab.visible = false;

            this.record = {
                name: null,
                contact_person: null,
                contact_email: null,
                delete_access_flag: '1',
                store_access_flag: '1',
                update_access_flag: '1',
                get_access_flag: '1',
            };

            this.initFormData();

        },

        initFormData() {

            this.displayForm();

        },

        initializeFormTables() {

            root.getFormHeight(this.id,'.card-body')

            .then( (formHeight) => {

                this.apiAccessTable = this.$refs[this.id + '-api-access-table'];
                this.apiAccessTable.table = null; // Reset to NULL so the ActiveTab watch reloads the table

                this.apiAccessTable.whereRaw = ["api_access.developer_id = " + this.record.id]; 

                // Set the table Height 
                this.apiAccessTable.tableOptions = {
                    scrollY: (formHeight * 0.65) + 'px',
                };

            }).catch( (error) => {
                showError('Error',error)
            });

        },

        adjustApiAccessTableColumns() {
            this.apiAccessTable.table.columns.adjust;
        },

        okClicked( closeFlag = true ) {

            root.$snotify.simple('Please wait...', 'Saving Developer', { timeout: 10000, icon: 'img/cogs.gif' });

            axios.post('/developers/' + (this.savedFlag ? 'update' : 'store'), this.record)
            
            .then(response => {

                if (response.data.errors) {

                    showError( 'Error', response.data.errors );

                } else {

                    this.record.id = response.data.data[0].id;

                    root.$snotify.clear();

                    this.errors = {};

                    if (!this.editing && !this.savedFlag) {

                        this.highlightRow(response.data.data[0].id, {
                            where: "developers.name,<,'" + response.data.data[0].name + "'",
                            orderBy: 'name'
                        });

                    } else {

                        this.table.refreshRow(response.data.data[0].recordid);

                    }

                    if (closeFlag) {

                        this.closeForm();

                    } else {

                        this.savedFlag = true;
                    }

                }

            }).catch(error => { showError('Error saving ' + this.table.singular, error); });

        },

    },

}

</script>

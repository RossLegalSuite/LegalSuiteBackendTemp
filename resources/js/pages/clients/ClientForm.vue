<template>

<div :id="id" :class="modal ? 'modal': ''">
    
    <div :class="modal ? 'modal-dialog modal-dialog-centered modal-lg' : ''">

        <div :id="id + '-form-border'" :class="modal ? 'modal-content red-border' : 'card h-100 border-0'">

            <div :id="id + '-form-header'" :class="modal ? 'red-bg' : 'card-header'">

                <div :class="modal ? 'modal-header' : 'd-flex justify-content-between'">

                    <div class="page-title">
                        <h3>
                            <span v-if="!editing && !savedFlag">Client will be Added</span>
                            <span v-else>Client will be Changed</span>
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
                            _class="col-md-4" 
                            v-model="record.firmcode" 
                            label="Firm Code"
                        />

                        <text-input 
                            _class="col-md-6" 
                            v-model="record.name" 
                            label="Name"
                        />

                    </div>

                    <div class="form-group row">

                        <text-input 
                            _class="col-md-5" 
                            v-model="record.contact_person" 
                            label="Contact Person"
                        />

                        <text-input 
                            _class="col-md-5" 
                            v-model="record.contact_email" 
                            label="Email"
                        />

                    </div>
                    <div class="form-group row">

                        <text-input 
                            _class="col-md-8" 
                            v-model="record.website" 
                            label="Website"
                        />


                    </div>

                    <fieldset class="mt-3"><legend>Database Details</legend>

                        <div class="form-group row">

                            <text-input 
                                _class="col-md-5" 
                                v-model="record.db_host" 
                                label="Host"
                            />

                            <text-input 
                                _class="col-md-5" 
                                v-model="record.db_database" 
                                label="Name"
                            />

                            <text-input 
                                _class="col-md-2" 
                                v-model="record.db_port" 
                                label="Port"
                            />

                        </div>

                        <div class="form-group row">

                            <text-input 
                                _class="col-md-5" 
                                v-model="record.db_user" 
                                label="User"
                            />

                            <text-input 
                                _class="col-md-5" 
                                v-model="record.db_password" 
                                label="Password"
                            />

                        </div>

                    </fieldset>

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

                <div v-show="activeTab === 'Logo'" class="form-tab-content">

                    <div class="form-group row">

                        <text-area 
                            _class="col-md-6" 
                            v-model="record.logo_url" 
                            label="Logo URL"
                        />

                        <div class="col-md-6">
                            <img v-bind:src="record.logo_url" class="boxed img-fluid">
                        </div>

                    </div>


                    <fieldset class="mt-2"><legend>Logo</legend>

                        <logo-dropzone 
                            v-show="!record.logo"
                            id="company-logo-drop-zone-component" 
                            ref="company-logo-drop-zone-component" 
                            :options="logoDropOptions" 
                            :useCustomSlot=true 
                            @vdropzone-error="logoUploadError"
                            @vdropzone-success="logoUploaded">

                            <div class="dropzone-custom-content">

                                <h3 class="text-success">Drag and drop a file here</h3>

                                <div class="subtitle">...or click here to manually select a file</div>

                            </div>

                        </logo-dropzone>

                        <img v-show="record.logo" class="img-fluid border" style="max-height: 30vh;" :src="record.logo" alt="Company Logo">

                        <div v-show="record.logo" class="mt-3 text-right">

                            <button class="btn btn-success btn-sm d-inline-block mr-2" @click="replaceLogo" title="Change the Company logo"><i class="fa fa-refresh mr-2"></i>Replace</button>

                            <button class="btn btn-danger btn-sm d-inline-block" @click="deleteLogo" title="Delete the Company logo"><i class="fa fa-times mr-2"></i>Delete</button>

                        </div>

                    </fieldset>

                </div>

            </div>

            <div class="modal-footer justify-content-between">
                <div>

                    <button v-show="activeTab == 'General'" class="btn btn-secondary form-button mr-3" type="button" @click="testConnection">
                        <span title="Test the Connection"><i class="fa fa-server fa-lg mr-2"></i>Test Connection</span>
                    </button>


                    <button v-show="editing && activeTab == 'General'" class="btn btn-primary form-button mr-3" type="button" @click="deleteClicked">
                        <span title="Delete this Client"><i class="fa fa-trash fa-lg mr-2"></i>Delete</span>
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
import vueDropzone from "vue2-dropzone";

export default {

    mixins: [modalTemplate, formTemplate ],
    
    components: {
        ApiAccessTable: () => import("./ApiAccessTable"),
        ApiAccessForm: () => import("./ApiAccessForm"),
        logoDropzone: vueDropzone,
    },

    props: {
        resource: {type: String, default: 'Clients' },
    },    


    data() {
        return {
            apiAccessTable: null,
            activeTab: null,
            logoDropOptions: {
                url: "/file/selected",
                maxFilesize: 5, // 5MB
                thumbnailWidth: 600,
                thumbnailMethod: 'contain',
                acceptedFiles: 'image/*'
            },
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
                {
                    pageName: "Logo",
                    title: "Company Logo",
                    iconClass: '',
                    visible: true,
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

            axios.post('/clients/get',{id: id})

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
                contact_email: null,
                contact_person: null,
                website: null,
                logo_url: null,
                firmcode: null,
                db_host: null,
                db_password: null,
                db_port: '1433',
                db_user: null,
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

                this.apiAccessTable.whereRaw = ["api_access.client_id = " + this.record.id]; 

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



        testConnection() {

            root.$snotify.simple('Please wait...', 'Trying to connect to ' + this.record.db_host, { timeout: 0, icon: 'img/cogs.gif' });

            axios.post('utils/testConnection', this.record)
            
            .then(response => {

                root.$snotify.clear();

                if (response.data.errors) {

                    showError( 'Error', response.data.errors );

                } else {    

                    root.$snotify.simple('Connected to the Database successfully', 'Success', { timeout: 2000, icon: 'img/check.png' });


                }

            }).catch(error => { 

                root.$snotify.clear();

                showError('Error testing Connection', error); 

            });


        },


        okClicked( closeFlag = true ) {

            root.$snotify.simple('Please wait...', 'Saving Client', { timeout: 10000, icon: 'img/cogs.gif' });

            axios.post('/clients/' + (this.savedFlag ? 'update' : 'store'), this.record)
            
            .then(response => {

                if (response.data.errors) {

                    showError( 'Error', response.data.errors );

                } else {

                    this.record.id = response.data.data[0].id;

                    root.$snotify.clear();

                    this.errors = {};

                    if (!this.editing && !this.savedFlag) {

                        this.highlightRow(response.data.data[0].id, {
                            where: "clients.firmcode,<,'" + response.data.data[0].firmcode + "'",
                            orderBy: 'firmcode'
                        });

                    } else {

                        this.table.refreshRow(response.data.data[0].id);

                    }

                    if (closeFlag) {

                        this.closeForm();

                    } else {

                        this.savedFlag = true;
                    }

                }

            }).catch(error => { showError('Error saving ' + this.table.singular, error); });

        },

        logoUploaded(file) {

            var formData = new FormData();

            formData.append("file", file);
            formData.append("fileName", file.name);
            formData.append("folder", 'logo');
            formData.append("firmcode", this.record.firmcode);

            axios.post('/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            .then(response => {

                if (response.data.error) {

                    showError('Error uploading logo',response.data.error);

                } else {

                    root.$snotify.simple('The Logo uploaded successfully', 'Success', { icon: 'img/check.png' });

                    this.record.logo_url = response.data.url;

                    // this.okClicked();
                    // axios.post('/lolsettings/update', {
                    //     recordid: root.lolSettings.recordid,
                    //     logo: response.data.url,
                    // })

                    // .then(response => {

                    //     if (response.data.errors) {

                    //         showError('Error saving logo',response.data.errors);

                    //     } else {

                    //         root.lolSettings = this.$root.lolSettings = response.data.data[0];

                    //         root.templateData.company.logo = response.data.data[0].url;

                    //     }
                    // });

                }

            }).catch(error => { 

                showError('Error',error);

            });

        },

        replaceLogo() {

            this.deleteLogo();

            $('#company-logo-drop-zone-component').click();

        },

        deleteLogo() {

            this.$refs['company-logo-drop-zone-component'].removeAllFiles();
            this.record.logo = root.lolSettings.logo = this.$root.lolSettings.logo = null;

        },

        logoUploadError(file, message, xhr)  {

            showError('Error uploading logo', message);

            this.$refs['company-logo-drop-zone-component'].removeAllFiles();

        },

    },

}

</script>

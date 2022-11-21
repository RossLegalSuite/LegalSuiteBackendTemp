<template>

<div :id="id" :class="modal ? 'modal': ''">
    
    <div :class="modal ? 'modal-dialog modal-dialog-centered modal-lg' : ''">

        <div :id="id + '-form-border'" :class="modal ? 'modal-content red-border' : 'card h-100 border-0'">

            <div :id="id + '-form-header'" :class="modal ? 'red-bg' : 'card-header'">

                <div :class="modal ? 'modal-header' : 'd-flex justify-content-between'">

                    <div class="page-title">
                        <h3>
                            <span v-if="!editing && !savedFlag">API Access will be Added</span>
                            <span v-else>API Access will be Changed</span>
                        </h3>
                        <i v-if="modal" :id="id + '-modal-close-button'" title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
                    </div>

                    <page-close-button v-if="!modal" @closeClicked="closeForm"/>

                </div>

            </div>

            <div class="card-body overflow-auto p-3" :style="modal ? 'min-height:40vh' : ''">

                <div class="form-group row">
                    <select-developer
                        :id="id + '-select-developer123'" 
                        :ref="id + '-select-developer123'" 
                        :formRef="id + '-select-developer123'" 
                    />
                </div>

                <div class="row">
                    <div class="col-md-12">

                        <fieldset class="mt-2 mb-3"><legend>Permissions</legend>

                            <div class="form-group row">
                                <radio-buttons 
                                    _class="col-md-4" 
                                    :record="record" 
                                    column="access_flag" 
                                    name="access_flag" 
                                    label="Access Flag" 
                                    :buttons="[
                                        {value:'1', text: 'Yes'},
                                        {value:'0', text: 'No'},
                                    ]" 
                                />
                                <radio-buttons 
                                    _class="col-md-4" 
                                    :record="record" 
                                    column="get_access_flag" 
                                    name="get_access_flag" 
                                    label="Get Access" 
                                    :buttons="[
                                        {value:'1', text: 'Yes'},
                                        {value:'0', text: 'No'},
                                    ]" 
                                />

                            </div>

                            <div class="form-group row">
                                <radio-buttons 
                                    _class="col-md-4" 
                                    :record="record" 
                                    column="update_access_flag" 
                                    name="update_access_flag" 
                                    label="Update Access" 
                                    :buttons="[
                                        {value:'1', text: 'Yes'},
                                        {value:'0', text: 'No'},
                                    ]" 
                                />

                                <radio-buttons 
                                    _class="col-md-4" 
                                    :record="record" 
                                    column="store_access_flag" 
                                    name="store_access_flag" 
                                    label="Store Access" 
                                    :buttons="[
                                        {value:'1', text: 'Yes'},
                                        {value:'0', text: 'No'},
                                    ]" 
                                />
                                <radio-buttons 
                                    _class="col-md-4" 
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

                <div v-show="editing" class="form-group row">

                    <text-area 
                        _class="col-md-12" 
                        v-model="record.api_token" 
                        label="API Token"
                        :readOnly="true"
                    />

                </div>

            </div>

            <div class="modal-footer justify-content-between">
                <div>

                    <button v-show="editing" class="btn btn-primary form-button mr-3" type="button" @click="deleteClicked">
                        <span title="Delete this Entry"><i class="fa fa-trash fa-lg mr-2"></i>Delete</span>
                    </button>

                </div>
                <div>

                    <button class="btn btn-success form-button mr-3" @click="okClicked(true)" type="button" title="Save the Access Details and close the Window"><i class="fa fa-check-circle fa-lg mr-2"></i>OK</button>

                    <button v-if="savedFlag || editing" class="btn btn-danger form-button" @click="closeForm" type="button" title="Close this screen"><i class="fa fa-times-circle fa-lg mr-2"></i>Close</button>

                    <button v-else class="btn btn-danger form-button" @click="closeForm" type="button" title="Exit without saving"><i class="fa fa-times-circle fa-lg mr-2"></i>Cancel</button>

                </div>
            </div>

        </div>

    </div>


</div>

</template>    

<script>

import formTemplate from "@pages/form-template";
import modalTemplate from "@components/modals/modal-template";

export default {

    mixins: [modalTemplate, formTemplate ],
    
    components: {
        SelectDeveloper: () => import("@pages/developers/SelectDeveloper"),
    },

    props: {
        resource: {type: String, default: 'Api Access' },
    },    


    data() {
        return {
        }
    },


    methods: {

        developerSelected(selectedRecord) {

            this.record.developer_id = selectedRecord.id;

        },

        editRecord(id) {

            console.log("editRecord this.editing",this.editing);

            this.savedFlag = true;

            this.selectDeveloper.setReadOnly = true;

            axios.post('/api_access/get',{id: id})

            .then(response => {

                this.record = response.data.data[0];

                this.selectDeveloper.record = {
                    name: this.record.developername
                };

                this.initFormData();

            }).catch( (error) => {
                showError('Error',error)
            });

        },

        initNewRecord() {

            console.log("initNewRecord this.editing",this.editing);

            this.selectDeveloper.setReadOnly = false;

            this.selectDeveloper.record = {
                name: '',
            };

            this.record = {
                client_id: this.$parent.record.id,
                developer_id: null,
                delete_access_flag: '1',
                update_access_flag: '1',
                store_access_flag: '1',
                get_access_flag: '1',
                access_flag: '1',
                api_token: null,
            };

            this.initFormData();

        },

        initFormData() {

            this.displayForm();

        },

        okClicked( closeFlag = true ) {

            root.$snotify.simple('Please wait...', 'Saving Api Access Details', { timeout: 10000, icon: 'img/cogs.gif' });

            axios.post('/api_access/' + (this.savedFlag ? 'update' : 'store'), this.record)
            
            .then(response => {

                if (response.data.errors) {

                    showError( 'Error', response.data.errors );

                } else {

                    this.record.id = response.data.data[0].id;

                    root.$snotify.clear();

                    this.errors = {};

                    if (!this.editing && !this.savedFlag) {

                        this.highlightRow(response.data.data[0].id, {
                            where: "clients.name,<,'" + response.data.data[0].clientname + "'",
                            orderBy: 'clients.name'
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

            }).catch(error => { showError('Error saving Api Access details', error); });

        },

    },

}

</script>

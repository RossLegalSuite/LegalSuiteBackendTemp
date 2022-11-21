<template>

<div :id="id" :class="modal ? 'modal': ''">
    
    <div :class="modal ? 'modal-dialog modal-dialog-centered modal-lg' : ''">

        <div :id="id + '-form-border'" :class="modal ? 'modal-content red-border' : 'card h-100 border-0'">

            <div :id="id + '-form-header'" :class="modal ? 'red-bg' : 'card-header'">

                <div :class="modal ? 'modal-header' : 'd-flex justify-content-between'">

                    <div class="page-title">
                        <h3>
                            <span v-if="!editing && !savedFlag">Error Log will be Added</span>
                            <span v-else>API Error</span>
                        </h3>
                        <i v-if="modal" :id="id + '-modal-close-button'" title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
                    </div>

                    <page-close-button v-if="!modal" @closeClicked="closeForm"/>

                </div>

            </div>

            <div class="card-body overflow-auto p-3" :style="modal ? 'min-height:40vh' : ''">

                    <div class="form-group row">
                        <text-input 
                            _class="col-md-9" 
                            v-model="record.developername" 
                            label="Developer"
                            :readOnly="true"
                        />

                    </div>

                    <div class="form-group row">
                        <text-input 
                            _class="col-md-4" 
                            v-model="record.clientcode"
                            label="Client Code"
                            :readOnly="true"
                        />

                        <text-input 
                            _class="col-md-8" 
                            v-model="record.clientname"
                            label="Client Name"
                            :readOnly="true"
                        />
                    </div>

                    <div class="form-group row">
                        <text-input 
                            _class="col-md-9" 
                            v-model="record.url" 
                            label="Url"
                            :readOnly="true"
                        />

                        <text-input 
                            _class="col-md-3" 
                            v-model="record.method" 
                            label="Method"
                            :readOnly="true"
                        />

                    </div>

                    <div class="form-group row">

                        <text-input 
                            _class="col-md-6" 
                            v-model="record.created_at" 
                            label="Created At"
                            :readOnly="true"
                        />
                        <text-input 
                            _class="col-md-6" 
                            v-model="record.ip" 
                            label="IP"
                            :readOnly="true"
                        />

                    </div>

                    <div class="form-group row">

                        <text-area 
                            _class="col-md-12" 
                            v-model="record.message" 
                            label="Description"
                            :readOnly="true"
                        />

                    </div>
                    <div class="form-group row">

                        <text-area 
                            _class="col-md-9" 
                            v-model="record.file" 
                            label="File"
                            :readOnly="true"
                        />

                        <text-input 
                            _class="col-md-4" 
                            v-model="record.line" 
                            label="Line"
                            :readOnly="true"
                        />

                    </div>
                    <div class="form-group row">

                        <text-area 
                            _class="col-md-12" 
                            v-model="record.parameters" 
                            label="Parameters"
                            :readOnly="true"
                        />

                    </div> 

            </div>

            <div class="modal-footer justify-content-between">
                <div>

                    <!-- <button v-show="editing" class="btn btn-primary form-button mr-3" type="button" @click="deleteClicked">
                        <span title="Delete this ErrorLog"><i class="fa fa-trash fa-lg mr-2"></i>Delete</span>
                    </button> -->

                </div>
                <div>

                    <!-- <button class="btn btn-yellow form-button mr-3" @click="okClicked(false)" type="button" title="Save the Item and continue editing"><i class="fa fa-check-square fa-lg mr-2"></i>Save</button>

                    <button class="btn btn-success form-button mr-3" @click="okClicked(true)" type="button" title="Save the Item and close the Window"><i class="fa fa-check-circle fa-lg mr-2"></i>OK</button> -->

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
    },

    props: {
        resource: {type: String, default: 'Errorlogs' },
        uniqueId: String,
    },    


    data() {
        return {
        }
    },


    methods: {

        editRecord(id) {

            axios.post('/api_errors/get',{id: id})

            .then(response => {

                this.record = response.data.data[0];

                this.initFormData();

            }).catch( (error) => {
                showError('Error',error)
            });

        },

        initNewRecord() {

            // Fill in ALL columns here
            this.record = {

                company_name: null,
                name: null,
                email: null,


            };

            this.initFormData();


        },

        initFormData() {

            this.displayForm();

        },


        okClicked( closeFlag = true ) {

            root.$snotify.simple('Please wait...', 'Saving ErrorLog', { timeout: 10000, icon: 'img/cogs.gif' });

            axios.post('/errorlog/' + (this.savedFlag ? 'update' : 'store'), this.record)
            
            .then(response => {

                if (response.data.errors) {

                    showError( 'Error', response.data.errors );

                } else {

                    this.record.id = response.data.data[0].id;

                    root.$snotify.clear();

                    this.errors = {};

                    if (!this.editing && !this.savedFlag) {

                        this.highlightRow(response.data.data[0].id, {
                            where: "api_errors.email,<,'" + response.data.data[0].email + "'",
                            orderBy: 'email'
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

<template>
<div :class="formControls ? _class : ''">
        
    <div v-show="formControls">
        
        <label>{{label}}</label>
        <span v-if="popOver">   
            <pop-over :content="popOver" :container="popOverContainer ? popOverContainer : $parent.modal ? '#' + $parent.id : 'body'"/>
        </span>
        <span v-if="clearIcon">
            <i class="fa fa-times-circle cp text-danger ml-1 clear-icon" style="font-size: large" title="Clear" @click="clearIconClicked"></i>
        </span>
        <div class="input-group">
            <select-client-dropdown
                :id="id + '-select-client-dropdown'"
                :class="error[0] ? 'multiselect-invalid-feedback' : ''"
                openDirection="below"
                placeholder=""
                :options="$root.clients" 
                v-model="record"
                track-by="id"
                :tabindex="-1"
                label="firmcode"
                :disabled="setReadOnly || disabled"
                :allow-empty="false"
                :show-labels="false"
                @input="clientSelected"
            >
            <template slot="noResult">No Clients found</template>
            <template slot="noOptions">No Clients found...</template>
            <template slot="option" slot-scope="props">
                <div>
                    <span>{{ props.option.firmcode + ' - ' + props.option.name }}</span>
                </div>
            </template>                            
            </select-client-dropdown>

            <div v-if="!setReadOnly" class="input-group-append">
                <button
                    tabindex="-1"
                    v-on:click="selectClient"
                    type="button"
                    :title="'Select a ' + singular"
                    :class="error[0] ? 'btn btn-danger multiselect-invalid-feedback' : 'btn btn-primary'"
                ><i class="fa fa-cog"></i></button>
            </div>
        </div>
        <div v-html="error[0]" class="invalid-feedback"></div>


    </div>

    <div class="modal" :id="id">

        <div class="modal-dialog modal-dialog-left modal-lg">

            <div class="modal-content" style="border-color:indianred">

                <div class="modal-header indianred">
                    <h2 class="modal-title page-title"><i class="fa fa-server mr-2"></i>Select a Client</h2>
                    <i title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
                </div>

                <div class="modal-body p-3" style="height: 60vh; overflow-y: auto;">
                    
                    <client-table
                    :options-button="false"
                    :new-record-button="false"
                    :table-id="id + '-table'"
                    :lazyLoadFlag="true"
                    ref="select-client-table"
                    :form-ref="formRef"
                    />

                </div>

                <div class="modal-footer justify-content-between">

                    <div>
                        <modal-table-filter-footer/>
                    </div>

                    <div>
                        <button class="btn btn-danger form-button" type="button"  v-on:click="hide" title="Cancel selection"><i class="fa fa-times-circle fa-lg mr-2"></i>Cancel</button>
                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
</template>

<script>

import modalTemplate from "@components/modals/modal-template";
import Multiselect from 'vue-multiselect';

export default {

    mixins: [modalTemplate],       

    components: {
        ClientTable: () => import("./SelectClientsTable"),
        SelectClientDropdown: Multiselect
    },

    props: {
        clearIconCallback: { type: String, default: 'clearSelectClient' },
        clearIcon: { type: Boolean, default: false },
        callback: {
            type: String,
            default: 'clientSelected',
        }, 
        parentName: {
            type: String,
            default: 'selectClient',
        }, 
        title: {
            type: String,
            default: 'Click on the button to select a Client',
        }, 
        _class: {
            type: String, 
            default: 'col-md-12',
        },
        label: {
            type: String,
            default: 'Client',
        },
        popOver: { type: String, default:'' },
        popOverContainer: { type: String, default:'' },
        singular: {
            type: String,
            default: 'Client',
        },
        plural: {
            type: String,
            default: 'Clients',
        },
        formRef: String,
        formControls: {
            type: Boolean,
            default: true,
        },
        readOnly: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Array,
            default: function () {
                return [null]
            },
        },
    },

    data() {
        return {
            table: null,
            record: null,
            disabled: null,
            setReadOnly: null,
        };
    },

    mounted () {
        this.$parent[this.parentName] = this;
        this.setReadOnly = this.readOnly;
    },    

    methods: {

        clearIconClicked() {
            if ( typeof this.$parent[this.clearIconCallback] === 'function') this.$parent[this.clearIconCallback]();
        },

        selectClient() {

            this.show();

            this.table.selectTableFlag = true;
            this.table.actionColumnWidth = 12;

            if ( !this.table.table ) setTimeout( this.table.loadDataTable );

        },

        clientSelected(selectedRecord) {

            this.record = {
                id: selectedRecord.id,
                firmcode: selectedRecord.firmcode,
            };

            // Override default one set in form-template.js
            if ( typeof this.$parent.customClientSelected === 'function') {

                this.$parent.customClientSelected(selectedRecord);

            } else if ( typeof this.$parent[this.callback] === 'function') {

                this.$parent[this.callback](selectedRecord);

            }

        },        

        selectRecord(id) {

            this.clientSelected( this.table.table.row('#' + id).data() );

            this.hide();

        },



    },

}  
</script>


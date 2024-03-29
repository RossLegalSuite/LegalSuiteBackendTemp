
<template>
    <div class="modal" :id="id">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content" style="border-color: indianred;">

            <div class="modal-header indianred">
                <h3 class="modal-title"><i class="fa fa-filter mr-2"></i>Filter Traffic Log</h3>
                <i title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
            </div>

            <div class="card-body form-tab-body overflow-auto p-3" style="height: 55vh;">

                <form-tabs :tabs="tabs"/>

                <div v-show="activeTab === 'General'" class="form-tab-content">

                    <select-date-filter
                        :id="id + '-date-filter'"
                        :ref="id + '-date-filter'"
                    />


                    <div class="row">

                        <div class="col-md-6">

                            <div class="form-group row">
                                <select-client
                                    :clearIcon="clientFilterFlag ? true : false"
                                    clearIconCallback="clearClientFilter"
                                    :id="id + '-select-client'" 
                                    :ref="id + '-select-client'" 
                                    :formRef="id + '-select-client'" 
                                />
                            </div>


                        </div>

                        <div class="col-md-6">

                            <div class="form-group row">
                                <select-developer
                                    :clearIcon="developerFilterFlag ? true : false"
                                    clearIconCallback="clearDeveloperFilter"
                                    :id="id + '-select-developer'" 
                                    :ref="id + '-select-developer'" 
                                    :formRef="id + '-select-developer'" 
                                />
                            </div>


                        </div>


                    </div>

                    <div class="form-group row">
                        <text-input 
                            v-model="descriptionSelected" 
                            popOver="<h4>Url</h4>
                            <p>Enter a Url or part of a Url to filter the records.</p>
                            <p>Hint: Click anywhere on the screen to see the results of the Filter.</p>"
                            @change="setDescription" 
                            label="Url"
                            :ref="id + '-description-filter'"
                            :clearIconCallback="'descriptionCleared'"
                        />

                    </div>

                </div>

                <div v-show="activeTab === 'Custom'" class="form-tab-content">

                    <custom-filter
                        ref="customFilter"
                        popOver="<h4>Custom SQL Filter</h4>
                        <p>A valid SQL <em>where clause</em> to filter the Traffic Log</p>
                        <p>Note: Wrap compound filters, i.e. those containing AND or OR, in parentheses.</p>
                        <p><strong>Examples:</strong></p>
                        <p>traffic_log.url LIKE '%matter%'</p>
                        <p>(traffic_log.url LIKE '%matter%' OR traffic_log.url LIKE '%party%')</p>"
                        :popOverContainer="'#' + id"
                    />
                </div>


            </div>

            <div class="modal-footer justify-content-between">
                <div>
                    <button class="btn btn-primary form-button mr-2" type="button" @click="loadAdvancedFilters" title="Advanced Filtering options"><i class="fa fa-cog fa-lg mr-2"></i>Advanced</button>
                </div>
                <div>
                    <button class="btn btn-danger form-button" type="button" @click="hide" title="Close this screen"><i class="fa fa-times-circle fa-lg mr-2"></i>Close</button>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>

<script>

import modalTemplate from "@components/modals/modal-template";
import filterMethods from "@components/filters/filter-methods";

export default {

    mixins: [modalTemplate, filterMethods],

    components: {
        SelectClient: () => import("@pages/clients/SelectClient"),
        SelectDeveloper: () => import("@pages/developers/SelectDeveloper"),
    },


    data() {
        return {
            table: null,
            dateFilterColumnName: 'traffic_log.created_at',

            descriptionSelected: '',
            descriptionFilterColumnName: 'traffic_log.url',

            clientFilterFlag: false,
            clientFilterColumnName: 'clients.firmcode',

            developerFilterFlag: false,
            developerFilterColumnName: 'developers.name',


            activeTab: 'General',
            tabs: [
                {
                    pageName: "General",
                    title: "General",
                    iconClass: '',
                    visible: true,
                    active: true,
                }
            ],        
        }
    },

    watch: {

        clientFilterFlag: function (newValue) {

            if (newValue === false) {

                this.selectClient.record = {};
            }

        },

        developerFilterFlag: function (newValue) {

            if (newValue === false) {

                this.selectDeveloper.record = {};
            }

        },

    },    

    mounted() {
        this.$parent.filterForm = this;
    },    

    methods: {

        modalOpened() {

            this.setGeneralTab();

            this.$refs.customFilter.initialize(this.table);

            this.primeCommonFilters();

            this.clientFilterKey = this.getFilterName(this.clientFilterColumnName);
            this.clientFilter = this.getFilter(this.clientFilterKey);
            this.clientFilterFlag = this.clientFilter ? true : false;

            if ( this.clientFilterFlag ) {

                let client = root.clients.filter(record => record.id == this.clientFilter.settings.value1)[0];

                this.selectClient.record = {
                    id: client.id,
                    firmcode: client.firmcode,
                }

            } else {
                this.selectClient.record = {};
            }

            this.developerFilterKey = this.getFilterName(this.developerFilterColumnName);
            this.developerFilter = this.getFilter(this.developerFilterKey);
            this.developerFilterFlag = this.developerFilter ? true : false;

            if ( this.developerFilterFlag ) {

                let developer = root.developers.filter(record => record.id == this.developerFilter.settings.value1)[0];

                this.selectDeveloper.record = {
                    id: developer.id,
                    firmcode: developer.firmcode,
                }

            } else {
                this.selectDeveloper.record = {};
            }


        },

        clientSelected(selectedRecord) {

            this.deleteFilter(this.clientFilterKey);

            this.addFilter(this.clientFilterColumnName, this.clientFilterKey, selectedRecord.firmcode, selectedRecord.id, 'Equals', null, 'Client = ' + selectedRecord.firmcode);

            this.clientFilterFlag = true;

            this.table.setUserFilters();

            this.table.table.ajax.reload();

        },

        clearClientFilter() {

            this.deleteFilter(this.clientFilterKey);

            this.clientFilterFlag = false;

            this.reloadTable();

        },

        developerSelected(selectedRecord) {

            this.deleteFilter(this.developerFilterKey);

            this.addFilter(this.developerFilterColumnName, this.developerFilterKey, selectedRecord.name, selectedRecord.id, 'Equals', null, 'Developer = ' + selectedRecord.name);

            this.developerFilterFlag = true;

            this.table.setUserFilters();

            this.table.table.ajax.reload();

        },

        clearDeveloperFilter() {

            this.deleteFilter(this.developerFilterKey);

            this.developerFilterFlag = false;

            this.reloadTable();

        },



    }   
}  
</script>
<template>
    <div class="card h-100 border-0">
        <div class="card-header red-bg">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-bug mr-2"></i>API Errors ({{currentServer.description}})</h3>
                <page-close-button @closeClicked="closeLeftPage(pageName)"/>
            </div>
        </div>

        <div id="errorlog-left-body" class="card-body overflow-auto pb-0 pt-3 px-3">

            <errorlog-table
                :lazy-load-flag="true"
                :tagging="false"
                form-ref="errorlog-form" 
                ref="errorlog-table" 
                tableId="errorlog-table"
            />

        </div>

    </div>
</template>     

<script>

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import leftTemplate from "../left-template";

export default {

    extends: leftTemplate,

    components: {
        ErrorlogTable: () => import("./ErrorlogTable"),
    },

    data() {
        return {
            pageName: "Errorlog",
            tableMounted: false,
        };
    },

    computed: {
        ...mapGetters(['leftTabs', 'activeLeftTabs','currentServer']),
    },

    watch: {

        tableMounted() { this.initializeTable(); },

    },

    activated() {

        if ( $('#errorlog-table').length ) {

            let scrollTop = $('#errorlog-table' + '_wrapper .dataTables_scrollBody').offset().top;
            let tableTop = $('#errorlog-table').offset().top;

            if ( tableTop > scrollTop ) this.table.table.ajax.reload();

        }
    },


    mounted() {

        let thisTab = this.leftTabs.filter(tab => tab.pageName === this.pageName);

        if (thisTab.length)  this.displayLeftTab(thisTab[0]);

    },    

    methods: {

        ...mapMutations(['displayLeftTab','hideLeftTab']),

        initializeTable() {

            // Order by Date, Time descending
            this.table.initialOrder = [[1, "desc"]];

            this.table.tableOptions = { tableBottom: 80 }; 

            // Used to lazy load the Form (and all its sub components) on the right
            this.table.loadDataTable(() =>{
                this.$root.errorlogLeftTableLoaded = true;
            });

        },

        newRecordButtonClicked() {

            let thisForm = root.$refs['pages'].$refs["right-page"].$refs['errorlog-form'];

            thisForm.insertClicked();

        },


    },
}
</script>